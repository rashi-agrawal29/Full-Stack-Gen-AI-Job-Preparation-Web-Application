const mongoose = require('mongoose');

/**
 * - Job description: String
 * - Resume text: String
 * - Self description: String
 * 
 * - Title: String
 * - matchScore: Number
 * - Technical questions : [
 *            {
 *              questions: "",
 *              intention: "",
 *              answer: ""
 *            }]
 * - Behavioral questions: [
 *             {
 *              questions: "",
 *              intention: "",
 *              answer: ""
 *             }]
 * - Skills gaps: [{
 *              skill: "",
 *              severity: {
 *                       type: String,
 *                       enum: ["low", "medium", "high"]
 *                  } 
 * }]
 * - Preparation plan: [{
 *              day: Number,
 *              focus: String,
 *              tasks: [String]
 * }]
 * 
 */

const technicalQuestionsSchema = new mongoose.Schema({
    question: {
        type: String,
        required: [true, "Technical questions are required."]

    },
    intention: {
        type: String,
        required: [true, "Intetion is required."]
    },
    answer: {
        type: String,
        required: [true, "Answer is required."]
    }
}, {
    _id: false
})

const behavioralQuestionsSchema = new mongoose.Schema({
    question: {
        type: String,
        required: [true, "Questions are required."]

    },
    intention: {
        type: String,
        required: [true, "Intetion is required."]
    },
    answer: {
        type: String,
        required: [true, "Answer is required."]
    }
}, {
    _id: false
})

const skillGapSchema = new mongoose.Schema({
    skill: {
        type: String,
        required: [true, "Skills are required."]

    },
    severity: {
        type: String,
        enum: ["low", "medium", "high"],
        required: [true, "Severity is required."]
    },
}, {
    _id: false
})

const preparationPlanSchema = new mongoose.Schema({
    day: {
        type: Number,
        required: [true, "Day are required."]

    },
    focus: {
        type: String,
        required: [true, "Focus is required."]
    },
    tasks: [{
        type: String,
        required: [true, "Task is required."]
    }]
})

const interviewReportSchema = new mongoose.Schema({
    jobDescription: {
        type: String,
        required: [true, "Job description is required."]
    },
    selfDescription: {
        type: String,
    },
    title: {
        type: String,
        required: [true, "Title is required."]
    },
    matchScore: {
        type: Number,
        min: 0,
        max: 100,
    },
    technicalQuestions: [technicalQuestionsSchema],
    behavioralQuestions: [behavioralQuestionsSchema],
    skillGaps: [skillGapSchema],
    preparationPlan: [preparationPlanSchema],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    }
}, {
    timestamps: true
})


const interviewReportModel = mongoose.model("InterviewReport", interviewReportSchema);

module.exports = interviewReportModel;