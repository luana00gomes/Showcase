"use client";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import Image from "next/image";

import { siteConfig } from "@/config/site";
import ChipArray from "@/components/chipArray";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import TypingText from "@/components/typingText/TypingText";
import CodeTerminal from "@/components/terminal/Terminal"


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
    return <div className="inline-block w-xl text-start justify-center">
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
            <strong> (UFSC) </strong>
          </Link>
        </h5>
          
        <h5 className={subtitle({class: "mt-4"})}>&nbsp;</h5>
        <br />
      </div>
  }
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="flex flex-row items-center justify-center gap-4 py-9">
        <PresentationText />
          <Image
            width={300}
            height={300}
            alt="Personal picture"
            src="/personal_pic.jpeg"
            style={{borderRadius: "100px", height: '200px'}}
          />
      </div>

      <div className="mt-8">
        <CodeTerminal>
          <TypingText />
        </CodeTerminal>
      </div>

      <div className="mt-8">
        <div className="flex gap-3">
          <Link
            isExternal
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
            })}
            href={siteConfig.links.whatsApp}
            >
            Request quotes
          </Link>
          <Link
            isExternal
            className={buttonStyles({ variant: "bordered", radius: "full" })}
            href={siteConfig.links.github}
            >
            <GithubIcon size={20} />
            GitHub
          </Link> 
        </div>
      </div>
      <div style={{marginTop: '50px', width: '55rem'}}>
        <ChipArray items={webSkills} />
      </div>

      <div className="mt-8">
        <Snippet hideCopyButton hideSymbol variant="bordered">
          <span>
          Committed to delivering cutting-edge solutions that drive success.
          </span>
        </Snippet>
      </div>
    </section>
  );
}
