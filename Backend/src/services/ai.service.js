const { GoogleGenAI } = require("@google/genai");
const { z } = require("zod");
const puppeteer = require("puppeteer");

const ai = new GoogleGenAI({
    apiKey: process.env.GOOGLE_GENAI_API_KEY
});

const interviewReportSchema = z.object({
    title: z.string().describe(
        "The title of the job for which the interview report is generated."
    ),
    matchScore: z.number().describe(
        "A score between 0 and 100 indicating how well the candidate's profile matches the job description."
    ),
    technicalQuestions: z.array(
        z.object({
            question: z.string().describe(
                "The technical question that can be asked in the interview."
            ),
            intention: z.string().describe(
                "The intention of the interviewer behind asking this question."
            ),
            answer: z.string().describe(
                "How to answer this question, what points to cover, and what approach to take."
            )
        })
    ).describe(
        "Technical interview questions along with the interviewer's intention and guidance for answering."
    ),

    behavioralQuestions: z.array(
        z.object({
            question: z.string().describe(
                "The behavioral question that can be asked in the interview."
            ),
            intention: z.string().describe(
                "The intention of the interviewer behind asking this question."
            ),
            answer: z.string().describe(
                "How to answer this question, what points to cover, and what approach to take."
            )
        })
    ).describe(
        "Behavioral interview questions along with the interviewer's intention and guidance for answering."
    ),

    skillGaps: z.array(
        z.object({
            skill: z.string().describe(
                "A skill required by the job that the candidate is lacking or has limited experience with."
            ),
            severity: z.enum(["low", "medium", "high"]).describe(
                "The severity of the skill gap based on how important the skill is for the job."
            )
        })
    ).describe(
        "Skills the candidate is missing or has limited experience with."
    ),

    preparationPlan: z.array(
        z.object({
            day: z.number().describe(
                "The day number in the preparation plan, starting from 1."
            ),
            focus: z.string().describe(
                "The main focus of this preparation day."
            ),
            tasks: z.array(z.string()).describe(
                "Specific tasks the candidate should complete on this day."
            )
        })
    ).describe(
        "A day-by-day interview preparation plan based specifically on the candidate's skill gaps and job requirements."
    )
});


async function generateInterviewReport({
    resume,
    selfDescription,
    jobDescription
}) {

    const prompt = `You are an expert technical recruiter and interview coach. 
                    Analyze the candidate against the job description and generate a complete interview preparation report (including the job title) for a candidate, with the following details:
                        Resume: ${resume}
                        Self Description: ${selfDescription}
                        Job Description: ${jobDescription}
    `

    const response = await ai.models.generateContent({
        model: "gemini-3.5-flash-lite",
        contents: prompt,
        config: {
            responseMimeType: "application/json",
            responseJsonSchema: z.toJSONSchema(interviewReportSchema)
        }
    });

    return JSON.parse(response.text)
}

async function generatePdfFromHtml(htmlContent) {
    const browser = await puppeteer.launch()
    const page = await browser.newPage();
    await page.setContent(htmlContent, { waitUntil: "networkidle0" })

    const pdfBuffer = await page.pdf({
        format: "A4", margin: {
            top: "20mm",
            bottom: "20mm",
            left: "15mm",
            right: "15mm"
        }
    })

    await browser.close()

    return pdfBuffer
}

async function generateResumePdf({ resume, selfDescription, jobDescription }) {
    const resumepdfSchema = z.object({
        html: z.string().describe("The HTML content of the resume PDF.")
    })
    const prompt = `Generate resume for a candidate with the following details:
                        Resume: ${resume}
                        Self Description: ${selfDescription}
                        Job Description: ${jobDescription}

                        the response should be a JSON object with a single field "html" which contains the HTML content of the resume which can be converted to PDF using any library like puppeteer.
                        The resume should be tailored for the given job description and should highlight the candidate's strengths and relevant experience. The HTML content should be well-formatted and structured, making it easy to read and visually appealing.
                        The content of resume should be not sound like it's generated by AI and should be as close as possible to a real human-written resume.
                        you can highlight the content using some colors or different font styles but the overall design should be simple and professional.
                        The content should be ATS friendly, i.e. it should be easily parsable by ATS systems without losing important information.
                        The resume should not be so lengthy, it should ideally be 1-2 pages long when converted to PDF. Focus on quality rather than quantity and make sure to include all the relevant information that can increase the candidate's chances of getting an interview call for the given job description.
        `
    const response = await ai.models.generateContent({
        model: "gemini-3.5-flash-lite",
        contents: prompt,
        config: {
            responseMimeType: "application/json",
            responseJsonSchema: z.toJSONSchema(resumepdfSchema)
        }
    })

    const jsonContent = JSON.parse(response.text)

    const pdfBuffer = await generatePdfFromHtml(jsonContent.html)

    return pdfBuffer


}
module.exports = { generateInterviewReport, generateResumePdf };