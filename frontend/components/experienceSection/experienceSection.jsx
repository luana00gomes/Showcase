import { title } from "@/components/primitives";
import './experienceSection.css'
import { Google } from "@mui/icons-material";

export default function ExperienceSection() {
    const experiences = [
        {
            period: "3/2025 - present",
            title: "Custom Software Engineer",
            highlight: true,
            company: "Accenture",
            details: [
                "Architecture and development of an Anvisa-licensed auditable system for prescription, dispensation and traceability of controlled medications.",
                "Integration with alarm systems and hierarchical-level authentication.",
                "Complex large-scale data migration (MySQL → PostgreSQL) ensuring integrity and persistence.",
                "Full-stack HMI development for factory tablets with PLC and UR robot integration.",
                "SAP/ERP integration enabling real-time production monitoring.",
            ],
            techStack: ["Python", "React", "TypeScript", "PostgreSQL", "MySQL", "Docker", "SAP", "PLC", "Scrum"]
        },
        {
            period: "2/2024 - 1/2025",
            title: "Full Stack Developer",
            highlight: true,
            company: "Taon Delivery",
            details: [
                "Designed and maintained backend, frontend and bot features ensuring seamless operations across platforms.",
                "Integrated real-time notifications using Socket.io for efficient alarm updates.",
                "Integrated Google Maps API services for places, markers and geocoding.",
            ],
            techStack: ["React", "Socket.io", "Node.js", "MongoDB", "Google API", "TypeScript"]
        },
        {
            period: "10/2024 - 12/2024",
            title: "Shipbroker Platform",
            company: "My Smart Broker",
            details: [
                "Delivered a production-ready platform with refined UI/UX for consistent design and improved user experience.",
                "Implemented user-specific permissions for robust access control.",
                "Led integration and usability testing to ensure platform readiness for deployment.",
                "Integrated Gmail messaging API.",
            ],
            techStack: ["TypeScript", "React", "Next.js", "Next-Auth", "Prisma", "PostgreSQL", "Google API"]
        },
        {
            period: "9/2023 - 12/2023",
            title: "Shipbroker Platform — MVP",
            company: "My Smart Broker",
            details: [
                "Developed an MVP for a shipbroker platform based on client specifications.",
                "Integrated secure login using Next-Auth.",
                "Built core platform components focusing on scalability and maintainability.",
            ],
            techStack: ["JavaScript", "TypeScript", "React", "Next.js", "Next-Auth", "Prisma", "PostgreSQL"]
        },
        {
            period: "6/2023 - 9/2023",
            title: "Booking System for Restaurant",
            details: [
                "Automated the restaurant's table reservation system, enhancing customer experience and efficiency.",
                "Translated client expectations into technical specifications for an interactive reservation system.",
                "Modernized and optimized the website, aligning it with brand values.",
            ],
            techStack: ["Python", "Django", "JavaScript", "CSS", "HTML"]
        },
        {
            period: "3/2023 - 6/2023",
            title: "Enterprise Diagnostics with ChatGPT",
            details: [
                "Established a secure login system using Flask-Login for user authentication.",
                "Developed real-time chat functionality with Flask-SocketIO.",
                "Designed prompts for GPT-generated questions and analyzed responses.",
                "Generated reports from chat history to provide enterprise insights.",
            ],
            techStack: ["Python", "Flask", "Flask-Login", "Flask-SocketIO", "SQLAlchemy", "OpenAI", "MySQL"]
        },
        {
            period: "1/2022 - 1/2023",
            highlight: true,
            title: "Computer Vision Intern",
            company: "Pollux, part of Accenture",
            details: [
                "Pharmaceutical traceability project using Computer Vision and image processing.",
                "Developed tools for datamatrix reading (C++), image filters (OpenCV) and OCR (Tesseract, Keras).",
                "Industrial camera management with Python, C++ and RTA.",
                "Dataset creation and cleaning for packaging quality validation.",
            ],
            techStack: ["Python", "C++", "OpenCV", "Tesseract", "Keras", "PostgreSQL", "Linux", "Git", "Scrum"]
        },
    ];

    return (
        <section className="experience-section">
            <h2 className={title({ size: "lg" })}>Career Highlights</h2>
                
            <ul className="timeline">
                {experiences.map((exp, index)=>{
                    return  <li key={index} >
                        <div className={`${index % 2 === 0 ? "direction-r" : "direction-l"}`}>
                            <div className="flag-wrapper">
                                <span className={`flag ${exp.highlight ? 'highlight': ''} `}>{exp.title}</span>
                                <span className="time-wrapper"><span className="time">{exp.period}</span></span>
                            </div>
                            {exp.company&&
                                <>
                                    <br />
                                    <div className='company-wrapper'>
                                        <span>{exp.company}</span>
                                    </div>
                                </>
                            }
                            <div className='desc'>
                                <ul className="experience-details list-disc ml-5 mt-2">
                                    {exp.details.map((detail, index) => (
                                        <li key={index}>{detail}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="tech-stack mt-2">
                                {exp.techStack.map((tech, index) => (
                                    <span
                                    key={index}
                                    className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full mr-2 mb-2"
                                    >
                                    {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </li>            
                })}
            </ul>

        </section>

    );
}
