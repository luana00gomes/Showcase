"use client";
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import Image from "next/image";

import { siteConfig } from "@/config/site";
import ChipArray from "@/components/chipArray";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import TypingText from "@/components/typingText/TypingText";
import CodeTerminal from "@/components/terminal/Terminal"
import ExperienceSection from "@/components/experienceSection/experienceSection"
import { VisitorCounter } from "@/components/counter"
import ProjectsSection from "@/components/projectsSection/projectsSection"
import IIoTSection from "@/components/iiotSection/iiotSection"
import GitHubStats from "@/components/githubStats/githubStats"


export default function Home() {
const webSkills = [
  { name: 'JavaScript', size: 'md' },
  { name: 'TypeScript', size: 'md' },
  { name: 'Node.js', size: 'md' },
  { name: 'React', size: 'lg' },
  { name: 'Next.js', size: 'md' },
  { name: 'CSS3', size: 'md' },
  { name: 'HTML5', size: 'md' },
  { name: 'PostgreSQL', size: 'md' },
  { name: 'MongoDB', size: 'lg' },
  { name: 'MySQL', size: 'small' },
  { name: 'Flask', size: 'md' },
  { name: 'Django', size: 'md' },
  { name: 'Python', size: 'lg' },
  { name: 'OpenCV', size: 'md' },
  { name: 'Tesseract', size: 'md' },
  { name: 'Keras', size: 'md' },
  { name: 'C', size: 'md' },
  { name: 'C++', size: 'md' },
  { name: 'C#', size: 'md' },
  { name: 'Git', size: 'lg' },
  { name: 'Scrum', size: 'md' },
  { name: 'Linux', size: 'md' },
  { name: 'Microcontrollers', size: 'md' },
];

  const PresentationText = () =>{
    return <div className="w-full max-w-xl text-start">
        <h5 className={title({size: 'sm'})}>Software Developer&nbsp;</h5>
        <h5 className={title({size: 'sm',  color: "violet"})}>with 3 years of experience. &nbsp;</h5>
        <h5 className={title({size: 'sm'})}>Known for innovative problem-solving,&nbsp;</h5>
        <h5 className={title({size: 'sm',  color: "pink"})}>with a record in AI/ML applications,&nbsp;</h5>
        <h5 className={title({size: 'sm', color: "pink"})}>computer vision,&nbsp;</h5>
        <h5 className={title({size: 'sm', color: "pink"})}>and data analysis.&nbsp;</h5>
        <h5 className={subtitle({class: "mt-4"})}>
          Mechatronics Engineering &nbsp;
          <Link
            isExternal
            href={siteConfig.links.ufsc}
            color="foreground"
            >
            <strong> (UFSC, 2026) </strong>
          </Link>
        </h5>
          
        <h5 className={subtitle({class: "mt-4"})}>&nbsp;</h5>
        <br />
      </div>
  }
  return (
    <section className="flex flex-col items-center justify-center gap-4">
      <div className="m-1 flex flex-col lg:flex-row items-center justify-center gap-4 py-6 lg:py-9">
        <PresentationText />
          <Image
            width={200}
            height={200}
            alt="Personal picture"
            src="/personal_pic.jpeg"
            className="rounded-[100px] max-w-full"
          />
      </div>

      <div className="w-full">
        <CodeTerminal>
          <TypingText />
        </CodeTerminal>
      </div>

      <div className="mt-8 flex flex-col items-center">
        <div className="flex flex-wrap gap-3 justify-center">
          <Link
            isExternal
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
            })}
            href={siteConfig.links.linkedin}
            >
            Connect on LinkedIn
          </Link>
          <Link
            isExternal
            className={buttonStyles({ variant: "bordered", radius: "full" })}
            href={siteConfig.links.github}
            >
            <GithubIcon size={20} />
            GitHub
          </Link>
          <a
            href="/Showcase/cv.pdf"
            download="Luana_Gomes_CV.pdf"
            className={buttonStyles({ variant: "bordered", radius: "full" })}
          >
            ↓ Download CV
          </a>
        </div>
      </div>
      <div className="w-full mt-12">
        <ChipArray items={webSkills} />
      </div>

      
      <ProjectsSection />

      <IIoTSection />

      <GitHubStats />

      <div className="w-full mt-16">
        <ExperienceSection />
      </div>

      <div className="mt-8 border-1 rounded-full">
          <p className="m-1 pr-2 pl-2 text-center">
            Committed to delivering cutting-edge solutions that drive success.
          </p>
      </div>

      <VisitorCounter />
      
    </section>
  );
}
