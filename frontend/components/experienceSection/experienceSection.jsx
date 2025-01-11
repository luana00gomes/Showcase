import { title } from "@/components/primitives";
import './experienceSection.css'
import { Google } from "@mui/icons-material";

export default function ExperienceSection() {
    const experiences = [
        {
            period: "2/2024 - current",
            title: "Full Stack Developer",
            highlight: true,
            company: "Taon Delivery",
            details: [
                "Designed and maintained backend, frontend, and bot features, ensuring seamless operations across platforms.",
                "Integrated real-time notifications using Socket.io for efficient alarm updates.",
                "Enhanced system reliability and responsiveness with efficient data processing and updates.",
                "Integrated Google Maps API services for places, marker and geocoding."               
            ],
            techStack: [
                "React",
                "Socket.io",
                "Node.js",
                "MongoDB",
                "Google API",
                "JavaScript",
                "TypeScript",
            ]

        },
        {
            period: "10/2024 - 12/2024",
            title: "Shipbroker Platform",
            company: "My Smart Broker",
            details: [
                "Delivered a production-ready platform with refined UI/UX for consistent design and improved user experience.",
                "Enhanced admin capabilities by implementing user-specific permissions for robust access control.",
                "Led comprehensive integration and usability testing to ensure platform readiness for deployment.",
                "Integrated Gmail messaging API",
            ],
            techStack: ["TypeScript", "React", "Next", "Next-Auth", "Prisma", "PostgreSQL", "Google API",]
        },
        {
            period: "9/2023 - 12/2023",
            title: "Shipbroker Platform",
            company: "My Smart Broker",
            details: [
                "Developed an MVP for a shipbroker platform based on client specifications.",
                "Integrated secure login using Next-Auth.",
                "Built core platform components, focusing on scalability and maintainability for future enhancements."
            ],
            techStack: ["JavaScript", "TypeScript", "React", "Next", "Next-Auth", "Prisma", "PostgreSQL"]
        },        
        {
            period: "6/2023 - 9/2023",
            title: "Booking System for Restaurant",
            details: [
                "Automated the restaurant's table reservation system, enhancing customer experience and efficiency.",
                "Translated client expectations into technical specifications, implementing an interactive reservation system.",
                "Modernized and optimized the website, aligning it with brand values."
            ],
            techStack: ["Python", "Django", "JavaScript", "CSS", "HTML"]
        },
        {
            period: "3/2023 - 6/2023",
            title: "Enterprise Diagnostics with ChatGPT",
            details: [
                "Established a secure login system using Flask_login for user authentication.",
                "Developed real-time chat functionality with Flask_socketio.",
                "Designed prompts for GPT-generated questions and analyzed responses.",
                "Generated reports from chat history to provide insights."
            ],
            techStack: ["Python", "Flask", "Flask_login", "Flask_socketio", "MySQLAlchemy", "OpenAI", "GPT"]
        },
        {
            period: "1/2022 - 1/2023",
            highlight: true,
            title: "Internship - Full Stack Development",
            company: "Pollux, part of Accenture",
            details: [
                "Worked on a traceability project for medicines focused on Computer Vision and image processing.",
                "Implemented image processing techniques including datamatrix reading, grading, filters, and OCR.",
                "Created datasets for training ML models, enhancing data manipulation skills.",
                "Managed industrial cameras, developing scripts for capture and integration with systems."
            ],
            techStack: [
                "Python",
                "PostgreSQL",
                "OpenCV",
                "CV2",
                "OpenEvision",
                "Tesseract",
                "Keras",
                "Git",
                "Linux",
                "JIRA",
                "Scrum"
            ]
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
