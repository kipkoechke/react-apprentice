"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";

const services = [
  {
    num: "01",
    text: "Web Development",
    desc: "I create responsive and user-friendly websites using the latest technologies.",
    href: "",
  },
  {
    num: "02",
    text: "Backend Development",
    desc: "I build robust and scalable backend systems using Node.js and Express.",
    href: "",
  },
  {
    num: "03",
    text: "UI/UX Design",
    desc: "I design intuitive and visually appealing user interfaces.",
    href: "",
  },
  {
    num: "04",
    text: "SEO Optimization",
    desc: "I optimize websites to rank higher on search engines and improve visibility.",
    href: "",
  },
  {
    num: "05",
    text: "Mobile App Development",
    desc: "I develop mobile applications for both Android and iOS platforms.",
    href: "",
  },
  {
    num: "06",
    text: "Cloud Computing",
    desc: "I leverage cloud services to build scalable and efficient applications.",
    href: "",
  },
  {
    num: "07",
    text: "DevOps",
    desc: "I implement CI/CD pipelines for faster and more reliable software delivery.",
    href: "",
  },
  {
    num: "08",
    text: "Data Analysis",
    desc: "I analyze data to derive insights and support decision-making.",
    href: "",
  },
];

function Services() {
  return (
    <section className="flex min-h-[80vh] flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
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
          className="grid grid-cols-1 gap-[60px] md:grid-cols-2"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="group flex flex-1 flex-col items-center justify-center gap-6"
              >
                {/* Top */}
                <div className="flex w-full items-center justify-between">
                  <div className="service-num text-5xl font-extrabold text-transparent transition-all duration-300">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="group-hover:bg-accent flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white transition-all duration-500 hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>

                {/* Title  */}
                <h2 className="group-hover:text-accent text-[42px] leading-none font-bold text-white transition-all duration-500">
                  {service.text}
                </h2>

                {/* Description */}
                <p className="text-white/60">{service.desc}</p>

                {/* Border */}
                <div className="w-full border-b border-white/20"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default Services;
