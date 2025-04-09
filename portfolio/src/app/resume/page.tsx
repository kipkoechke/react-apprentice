"use client";

import { FaCss3, FaHtml5, FaJs, FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiExpress,
  SiFigma,
  SiGit,
  SiGithub,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiPostgresql,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";

// About Me Data
const about = {
  title: "About Me",
  description:
    "I am a passionate web developer with experience in building responsive and user-friendly websites. I love coding and enjoy learning new technologies.",
  info: [
    { fieldName: "Name", fieldValue: "Kelvin Chepkwony" },
    { fieldName: "Phone", fieldValue: "+25497900350" },
    { fieldName: "Experience", fieldValue: "5+ Years of Experience" },
    { fieldName: "Nationality", fieldValue: "Kenyan" },
    { fieldName: "Email", fieldValue: "chepkwonyke2@gmail.com" },
    { fieldName: "Freelance", fieldValue: "Available" },
    { fieldName: "Language", fieldValue: "English, Swahili" },
    { fieldName: "Address", fieldValue: "Nairobi, Kenya" },
  ],
};

// Experience Data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description:
    " I have worked on various companies and projects, ranging from small personal websites to large-scale applications. My experience includes both frontend and backend development, and I am proficient in a variety of programming languages and frameworks.",
  items: [
    {
      company: "Devlogic Software Ltd.",
      position: "Front-End Developer",
      duration: "2023 - 2025",
    },

    {
      company: "Kenya Tea Packers Ltd.",
      position: "Front-End Developer",
      duration: "2022 - 2023",
    },
    {
      company: "Star Picks ",
      position: "Mobile Developer",
      duration: "2023",
    },
    {
      company: "Freelancing",
      position: "Full Stack Developer",
      duration: "2020 - Present",
    },
  ],
};

// Education Data
const education = {
  icon: "/assets/resume/badge.svg",
  title: "My Education",
  description:
    "I have a strong educational background in computer science and software engineering. I have completed various courses and certifications to enhance my skills and knowledge.",
  items: [
    {
      institution: "ALX Africa",
      degree: "Software Engineering Program",
      duration: "2023 - 2024",
    },
    {
      institution: "University of Eastern Africa, Baraton",
      degree: "Bachelor of Science in Software Engineering",
      duration: "2018 - 2023",
    },

    {
      institution: "Udemy",
      degree: "React and Nextjs Developer",
      duration: "2022",
    },
    {
      institution: "Udemy",
      degree: "Javascript Masterclass",
      duration: "2021",
    },
  ],
};

// Skills Data
const skills = {
  icon: "/assets/resume/badge.svg",
  title: "My Skills",
  description:
    "I am proficient in a variety of programming languages and frameworks. I am always eager to learn new technologies and improve my skills.",
  skillList: [
    { name: "HTML 5", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3 /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "React", icon: <FaReact /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "Nestjs", icon: <SiNestjs /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Git", icon: <SiGit /> },
    { name: "GitHub", icon: <SiGithub /> },
    { name: "Figma", icon: <SiFigma /> },
  ],
};

function Resume() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="flex min-h-[80vh] items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col gap-[60px] xl:flex-row"
        >
          <TabsList className="mx-auto flex w-full max-w-[380px] flex-col gap-6 xl:mx-0">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="mx-auto max-w-[600px] text-white/60 xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px] w-full rounded-md">
                  <ul className="grid grid-cols-1 gap-[30px] lg:grid-cols-2">
                    {experience.items.map((experience, index) => {
                      return (
                        <li
                          key={index}
                          className="flex h-[184px] flex-col items-center justify-center gap-1 rounded-xl bg-[#232329] px-10 py-6 lg:items-start"
                        >
                          <span className="text-accent">
                            {experience.duration}
                          </span>
                          <h3 className="min-h-[60px] max-w-[260px] text-center text-xl lg:text-left">
                            {experience.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="bg-accent h-[6px] w-[6px] rounded-full"></span>
                            <p>{experience.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="mx-auto max-w-[600px] text-white/60 xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px] w-full rounded-md">
                  <ul className="grid grid-cols-1 gap-[30px] lg:grid-cols-2">
                    {education.items.map((education, index) => {
                      return (
                        <li
                          key={index}
                          className="flex h-[184px] flex-col items-center justify-center gap-1 rounded-xl bg-[#232329] px-10 py-6 lg:items-start"
                        >
                          <span className="text-accent">
                            {education.duration}
                          </span>
                          <h3 className="min-h-[60px] max-w-[260px] text-center text-xl lg:text-left">
                            {education.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="bg-accent h-[6px] w-[6px] rounded-full"></span>
                            <p>{education.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="h-full w-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="mx-auto max-w-[600px] text-white/60 xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="xl:gap-30px] grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="group flex h-[150px] w-full items-center justify-center rounded-xl bg-[#232329]">
                              <div className="group-hover:text-accent text-6xl transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="mx-auto max-w-[600px] text-white/60 xl:mx-0">
                  {about.description}
                </p>
                <ul className="max-w-620px mx-auto grid grid-cols-1 gap-y-6 xl:mx-0 xl:grid-cols-2">
                  {about.info.map((info, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center gap-4 xl:justify-start"
                      >
                        <span className="text-white/60">{info.fieldName}</span>
                        <span className="text-xl">{info.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
}

export default Resume;
