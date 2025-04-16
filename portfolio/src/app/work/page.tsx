"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import WorkSliderBtns from "@/components/WorkSliderBtns";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import "swiper/css"; // Import Swiper core styles
import "swiper/css/navigation"; // Optional: Navigation styles
import "swiper/css/pagination"; // Optional: Pagination styles
import { Swiper, SwiperSlide } from "swiper/react";

interface Project {
  num: string;
  category: string;
  title: string;
  description: string;
  stack: { name: string }[];
  image: string;
  live: string;
  github: string;
}

interface SwiperInstance {
  activeIndex: number;
}

const projects: Project[] = [
  {
    num: "01",
    category: "frontend",
    title: "Cabins Management Admin",
    description: `A modern hotel management system for staff to manage cabins, bookings, guests, and check-ins/check-outs. Features authentication, profile settings, CRUD operations, and a stats dashboard with charts for bookings, sales, and occupancy. Includes dark mode and app-wide configuration.`,
    stack: [
      { name: "React" },
      { name: "Supabase" },
      { name: "React Router" },
      { name: "Styled Components" },
      { name: "React Query" },
      { name: "Context API" },
      { name: "React Hook Form" },
      { name: "Recharts" },
    ],
    image: "/assets/work/cabin-admin.png",
    live: "https://cabins-oasis-admin.vercel.app/",
    github:
      "https://github.com/kipkoechke/react-apprentice/tree/main/24-the-wild-oasis-admin",
  },
  {
    num: "02",
    category: "fullstack",
    title: "Cabins Booking Website",
    description: `A modern hotel website where guests can browse and filter luxurious cabins, check booked dates, reserve stays, and manage their profiles. Features include authentication, reservation management, and shared Supabase backend synced with the admin app.`,
    stack: [
      { name: "React" },
      { name: "Nextjs" },
      { name: "Supabase" },
      { name: "Context Api" },
      { name: "Tailwind CSS" },
    ],
    image: "/assets/work/cabin-user.png",
    live: "https://cabins-oasis.vercel.app/",
    github:
      "https://github.com/kipkoechke/react-apprentice/tree/main/25-the-wild-oasis-client",
  },
  {
    num: "03",
    category: "fullstack",
    title: "Events Platform",
    description: `Developed a responsive event platform enabling users to explore, and  filter events by name, type, date, and location. Integrated seat booking, countdown timers, and event detail pages with organizer's information. Strengthened UI development skills, responsive design and filtering logic that mirrors real-world booking workflows.
`,
    stack: [
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "MongoDB" },
      { name: "REST API" },
      { name: "Framer Motion" },
    ],
    image: "/assets/work/events.png",
    live: "https://keventz.vercel.app/",
    github: "https://github.com/kipkoechke/react-apprentice/tree/main/eventz",
  },
  {
    num: "04",
    category: "frontend",
    title: "Fitness Gym Website",
    description: `Created a modern, responsive gym website to showcase services, trainers, pricing plans, and testimonials. Implemented smooth scrolling, animations, and strong visuals to enhance UX, focusing on responsive design and engaging UI components.`,
    stack: [
      { name: "React" },
      { name: "Tailwind CSS" },
      { name: "Framer Motion" },
      { name: "Nextjs" },
    ],
    image: "/assets/work/gym.png",
    live: "https://fitphysique-six.vercel.app/",
    github:
      "https://github.com/kipkoechke/react-apprentice/tree/main/fitphysique",
  },
];

{
  /* {
    num: "02",
    category: "frontend",
    title: "Fast React Pizza",
    description: `A pizza ordering app with a simple UI and real-time cart updates. Users can order multiple pizzas, provide GPS location for delivery, and optionally mark orders as priority (+20% fee). Orders are sent to the API and assigned unique IDs for tracking. No login required.`,
    stack: [
      { name: "React" },
      { name: "React Router" },
      { name: "Tailwind CSS" },
      { name: "Redux" },
      { name: "API Integration" },
      { name: "Geolocation API" },
    ],
    image: "/assets/work/thumb2.png",
    live: "https://fast-pizza-alpha.vercel.app/cart",
    github: "https://github.com/kevin-dev/fast-react-pizza",
  },*/
}

function Work() {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper: SwiperInstance) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="flex min-h-[80vh] flex-col justify-center xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[20px]">
          <div className="order-2 flex w-full flex-col xl:order-none xl:h-[460px] xl:w-[50%] xl:justify-between">
            <div className="flex h-[50%] flex-col gap-[20px]">
              <div className="group">
                <div className="service-num cursor-pointer text-8xl leading-none font-extrabold text-transparent">
                  {project.num}
                </div>
              </div>
              {/* <h2 className="text-[42px] leading-none font-bold text-white capitalize transition-all duration-500">
                {project.category} project
              </h2> */}
              <h2 className="text-[42px] leading-none font-bold text-white capitalize transition-all duration-500">
                {project.title}
              </h2>
              <p className="mt-2 text-lg font-normal text-gray-400">
                {project.description}
              </p>
              <ul className="flex flex-wrap gap-1">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-accent text-xl">
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>

              <div className="border border-white/20"></div>

              <div className="flex items-center gap-4">
                <Link
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="group flex h-[70px] w-[70px] cursor-pointer items-center justify-center rounded-full bg-white/5">
                        <BsArrowUpRight className="group-hover:text-accent text-3xl text-white" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="group flex h-[70px] w-[70px] cursor-pointer items-center justify-center rounded-full bg-white/5">
                        <BsGithub className="group-hover:text-accent text-3xl text-white" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="mb-12 xl:h-[520px]"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="group relative flex h-[460px] items-center justify-center bg-pink-50/20">
                    {/* Overlay  */}
                    <div className="bg-primary/90 absolute top-0 bottom-0 z-10 h-full w-full"></div>

                    {/* Image */}
                    <div className="relative z-40 h-full w-full transition-transform duration-500 group-hover:scale-110">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        quality={100}
                        className="z-40 object-contain"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}

              {/* Slider buttons */}
              <WorkSliderBtns
                containerStyles="flex absolute gap-2 right-0 bottom-calc(50%_ - _20px) z-20 xl:bottom-0 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="flex h-[44px] justify-center items-center text-[22px] w-[44px] cursor-pointer items-center justify-center text-primary bg-accent hover:bg-accent-hover"
                iconStyles=""
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Work;
