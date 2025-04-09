import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FiDownload } from "react-icons/fi";

export default function Home() {
  return (
    <section>
      <div className="container mx-auto h-full">
        <div className="flex flex-col items-center justify-between xl:flex-row xl:pt-8 xl:pb-24">
          {/* Text Section */}
          <div className="order-2 mb-8 text-center xl:order-none xl:mb-0 xl:text-left">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1 mb-6">
              Hello I&apos;m <br />
              <span className="text-accent">Kelvin Chepkwony</span>
            </h1>
            <p className="mb-9 max-w-[500px] text-white/80">
              I excel at crafting elegant digital experiences and I am
              proficient in various programming languages and technologies.
            </p>
            {/* Buttons and Socials */}
            <div className="flex flex-col items-center gap-8 xl:flex-row">
              <Button
                size="lg"
                variant="outline"
                className="flex items-center gap-2 uppercase"
              >
                <Link
                  href="/files/kelvin-chepkwony-cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className="flex items-center gap-2"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Link>
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary transition-all duration-300"
                />
              </div>
            </div>
          </div>

          {/* Photo */}
          <div className="order-1 mb-8 xl:order-none xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
}
