const resume = `
Rashi Agrawal
Full Stack Software Engineer with 3+ years of commercial experience building and shipping
production-grade web applications, REST APIs, and cloud infrastructure.

TECHNICAL SKILLS
- Languages: C++, Python, Ruby, JavaScript, TypeScript, Bash/Shell Scripting
- Front-End: React, TypeScript, JavaScript, HTML5, CSS3, Tailwind CSS, Material UI
- Back-End: Ruby on Rails, Python (Django), Node.js
- Database: PostgreSQL, MySQL, MongoDB; SQL and NoSQL database design
- Cloud/Deployment: Git, GitHub Actions, Docker, Kubernetes, AWS
  (EC2, S3, RDS, Lambda, SQS/SNS, CloudWatch), Azure, Ubuntu Linux, CI/CD,
  Terraform
- Other: RESTful APIs, OAuth2/JWT, JSON/XML, Sidekiq/Redis, Prometheus,
  Grafana, Postman, RSpec, pytest
- Development practices: Full Stack Web Development, SaaS and multi-tenant applications,
  REST API design and integration, third-party API integrations, event-driven and
  distributed systems, TDD and automated testing, observability and monitoring,
  security, Agile, CI/CD and SDLC

PROFESSIONAL EXPERIENCE

Software Developer — OnTrack / Thoth Tech, Deakin University
June 2025 – June 2026
- Contributed to an open-source digital learning and feedback platform built using Ruby on Rails.
- Took end-to-end ownership of backend API design, database migrations, automated tests,
  code reviews and production deployment.
- Worked on frontend migration from AngularJS to Angular.
- Developed a recommendation system to guide students on prioritising tasks across enrolled units.
- Participated in peer code reviews, technical documentation and knowledge sharing.
- Used AI development tools including Claude, Cursor, GitHub Copilot and Claude Code.

Solution Engineer — Deqode Solutions
January 2022 – April 2024
- Built and maintained production backend services and REST APIs using Ruby on Rails and React
  for a high-volume US eCommerce platform, developing on Ubuntu Linux and deploying on AWS.
- Built an automated bulk order ingestion pipeline in Python/Rails that parsed, validated and
  processed CSV data end-to-end, reducing manual order processing effort by around 70–80%.
- Integrated Apple Pay API into a live production platform.
- Integrated Fruitguys API to improve delivery routing and reduce shipping cost and delivery time.
- Enhanced discount functionality with product, cart and delivery state/ZIP-code specific rules.
- Designed scalable REST APIs with JSON data contracts, OAuth2/JWT authentication,
  error handling, automated tests and technical documentation.
- Worked on a job-searching platform, including LinkedIn and Google authentication integrations.
- Designed and implemented OAuth2/JWT-based role-based authorisation across distributed
  microservices on AWS for a multi-tenant web hosting environment.
- Worked with Fastly APIs and an internal TLS certificate generation service.

Python Development Intern — Practitionr
September 2021 – November 2021
- Developed a Pharmacy Inventory and Billing System using ReactJS, HTML, CSS,
  Python and Django REST Framework.

Python-Django Web Project — Affimintus Technologies
February 2020 – August 2020
- Developed a full-stack e-commerce platform using HTML, CSS, JavaScript, Bootstrap,
  Python, Django and MySQL.

Web Development Intern — GTCUBE
July 2020 – August 2020
- Contributed to an educational platform using Django and PostgreSQL.

EDUCATION
- Master of Information Technology, majoring in Cloud and Network Technologies,
  Deakin University, Melbourne, June 2024 – June 2026
- Bachelor of Technology, Computer Science, Medi-Caps University, India,
  June 2018 – July 2022
`;

const selfDescription = `
I am a Full Stack Software Engineer with 3+ years of commercial experience and a strong
backend focus. My main experience is across Python, Django, Ruby on Rails, TypeScript,
Node.js and React.

I have built production web applications and REST APIs, worked with PostgreSQL, MySQL
and MongoDB, integrated third-party APIs, implemented OAuth2/JWT authentication and
worked with AWS, Azure, Docker, Kubernetes and CI/CD.

I enjoy backend and full-stack engineering, solving practical engineering problems and
learning technologies quickly. I have experience taking features from requirements through
development, testing, code review and deployment.

I also use AI development tools such as Claude, Cursor, GitHub Copilot and Claude Code
as part of my development workflow, while validating generated output before shipping.
`;

const jobDescription = `
Senior Backend Software Engineer — Python

We are looking for a Backend Software Engineer to join a product engineering team building
scalable services for a growing SaaS platform.

ABOUT THE ROLE
You will work primarily on backend services, APIs, data processing and cloud infrastructure.
You will collaborate with frontend engineers, product managers and other backend engineers
to deliver reliable production features.

RESPONSIBILITIES
- Design, develop and maintain scalable backend services using Python.
- Build and maintain RESTful APIs.
- Work with PostgreSQL and optimise database queries and data models.
- Design event-driven services and asynchronous processing using queues and background workers.
- Deploy and operate services in AWS.
- Build containerised applications using Docker and Kubernetes.
- Contribute to CI/CD pipelines and infrastructure automation.
- Write unit, integration and end-to-end tests.
- Improve observability using metrics, logging and distributed tracing.
- Participate in system design discussions and technical decision-making.
- Work closely with frontend engineers using React and TypeScript.
- Participate in code reviews and Agile development processes.
- Troubleshoot production issues and contribute to reliability improvements.

REQUIRED SKILLS
- 4+ years of professional software engineering experience.
- Strong production experience with Python.
- Strong experience with Django or FastAPI.
- Strong PostgreSQL and SQL skills, including query optimisation.
- Experience designing distributed or event-driven systems.
- Experience with AWS services such as ECS/EKS, RDS, S3, Lambda and SQS.
- Strong Docker and Kubernetes experience.
- Experience with Terraform or another infrastructure-as-code tool.
- Strong automated testing experience using pytest.
- Understanding of observability, monitoring, logging and distributed tracing.
- Experience with GitHub Actions or similar CI/CD tooling.
- Strong API design and security fundamentals.

NICE TO HAVE
- React and TypeScript experience.
- Ruby on Rails experience.
- Redis and background job processing experience.
- Experience with SaaS or multi-tenant applications.
- Experience integrating third-party APIs.
- Experience working with AI-assisted development tools.

WHAT WE VALUE
- Strong problem-solving ability.
- Clear technical communication.
- Ownership of features from design through production.
- Ability to learn unfamiliar technologies quickly.
- Pragmatic engineering judgement.
`;

module.exports = {
    resume,
    selfDescription,
    jobDescription
};