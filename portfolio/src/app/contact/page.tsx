"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { SelectLabel } from "@radix-ui/react-select";
import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkedAlt, FaPhoneAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+254) 797 900 350",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "chepkwonyke2@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Location",
    description: "Nairobi, Kenya",
  },
];

function Contact() {
  return (
    <div>
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
        className="py-6"
      >
        <div className="container mx-auto">
          <div className="flex flex-col gap-[30px] xl:flex-row">
            {/* form */}
            <div className="order-2 xl:order-none xl:w-[50%]">
              <form className="flex flex-col gap-6 rounded-xl bg-[#27272c] p-10">
                <h3>Let&apos;s work together.</h3>
                <p className="mb-6 text-white/80">
                  I am always open to discussing product design work or
                  partnerships.
                </p>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <Input type="text" placeholder="First Name" />
                  <Input type="text" placeholder="Last Name" />
                  <Input type="email" placeholder="Email address" />
                  <Input type="phone" placeholder="Phone No" />
                </div>

                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select a service</SelectLabel>
                      <SelectItem value="est">Web Development</SelectItem>
                      <SelectItem value="cst">Backend Development</SelectItem>
                      <SelectItem value="mst">Mobile Development</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>

                <Textarea
                  className="h-[220px]"
                  placeholder="Type your message here"
                />

                <Button size="md" className="max-4-40">
                  Send message
                </Button>
              </form>
            </div>

            {/* info */}
            <div className="order-1 mb-8 flex flex-1 items-center xl:order-none xl:mb-0 xl:justify-end">
              <ul className="flex flex-col gap-10">
                {info.map((item, index) => {
                  return (
                    <li key={index} className="flex items-center gap-6">
                      <div className="text-accent flex h-[52px] w-[52px] items-center justify-center rounded-md bg-[#27272c] xl:h-[72px] xl:w-[72px]">
                        <div className="text-[28px]">{item.icon}</div>
                      </div>
                      <div className="flex-1">
                        <p className="text-white/60">{item.title}</p>
                        <h3 className="text-xl">{item.description}</h3>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}

export default Contact;
