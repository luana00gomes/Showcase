import { title } from "@/components/primitives";
import { Link } from "@nextui-org/link";

const projects = [
  {
    name: "mission-abort-controller",
    title: "Mission Abort Controller",
    description:
      "Deterministic emergency stop system for industrial equipment via Modbus TCP/PLC. Ensures safe mission interruption in real production environments.",
    stack: ["Python", "Modbus TCP", "PLC", "IIoT"],
    github: "https://github.com/luana00gomes/mission-abort-controller",
    gradient: "from-orange-500 to-red-600",
    icon: "🏭",
  },
  {
    name: "Neural-Network",
    title: "Neural Network from Scratch",
    description:
      "Full neural network implementation without ML frameworks — forward pass, backpropagation and training loop built from first principles.",
    stack: ["Python", "NumPy", "ML"],
    github: "https://github.com/luana00gomes/Neural-Network",
    gradient: "from-violet-500 to-purple-700",
    icon: "🧠",
  },
  {
    name: "Agent-Communication",
    title: "Agent Communication",
    description:
      "Multi-agent system where intelligent agents exchange messages and coordinate decisions autonomously.",
    stack: ["Python", "AI", "Multi-Agent"],
    github: "https://github.com/luana00gomes/Agent-Communication",
    gradient: "from-blue-500 to-cyan-600",
    icon: "🤖",
  },
  {
    name: "Herbalia",
    title: "Herbalia",
    description:
      "Smart garden IoT + web app — UFSC academic project combining sensors, automation and a web interface for plant monitoring.",
    stack: ["Python", "IoT", "Web", "Flask"],
    github: "https://github.com/luana00gomes/Herbalia",
    gradient: "from-green-500 to-emerald-700",
    icon: "🌿",
  },
  {
    name: "Motor-a-combustao-interna-de-dois-tempos",
    title: "Two-Stroke Engine Simulation",
    description:
      "ODE simulation of a two-stroke engine comparing Euler, Heun, RK4 and Runge-Kutta-Fehlberg methods for convergence analysis.",
    stack: ["Python", "ODE", "Numerical Methods"],
    github:
      "https://github.com/luana00gomes/Motor-a-combustao-interna-de-dois-tempos",
    gradient: "from-yellow-500 to-amber-600",
    icon: "⚙️",
  },
  {
    name: "Showcase",
    title: "This Portfolio",
    description:
      "This website — built with Next.js 14, TypeScript, TailwindCSS and deployed via GitHub Actions to GitHub Pages.",
    stack: ["Next.js", "TypeScript", "TailwindCSS"],
    github: "https://github.com/luana00gomes/Showcase",
    demo: "https://luana00gomes.github.io/Showcase",
    gradient: "from-pink-500 to-rose-600",
    icon: "💼",
  },
];

export default function ProjectsSection() {
  return (
    <section className="w-full mt-16">
      <h2 className={title({ size: "lg" })}>Projects</h2>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((project) => (
          <div
            key={project.name}
            className="flex flex-col rounded-xl border border-default-200 overflow-hidden hover:border-default-400 transition-colors"
          >
            {/* Card header */}
            <div
              className={`bg-gradient-to-br ${project.gradient} h-24 flex items-center justify-center`}
            >
              <span className="text-5xl">{project.icon}</span>
            </div>

            {/* Card body */}
            <div className="flex flex-col flex-1 p-4 gap-3">
              <h3 className="font-semibold text-base">{project.title}</h3>
              <p className="text-sm text-default-500 leading-relaxed flex-1">
                {project.description}
              </p>

              {/* Stack */}
              <div className="flex flex-wrap gap-1">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-0.5 rounded-full bg-default-100 text-default-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-3 pt-1">
                <Link
                  isExternal
                  href={project.github}
                  className="text-xs text-default-500 hover:text-primary flex items-center gap-1"
                >
                  GitHub →
                </Link>
                {project.demo && (
                  <Link
                    isExternal
                    href={project.demo}
                    className="text-xs text-primary flex items-center gap-1"
                  >
                    Live demo →
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
