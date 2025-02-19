import Image from "next/image";
import Link from "next/link";
import React from "react";

const DownloadApp = () => {
  return (
    <section className="w-full md:h-[364px] bg-accent mb-16 rounded-2xl bg-pattern bg-cover p-10 xl:p-20 bg-blend-multiply flex items-center justify-center ">
      <div className="flex flex-col xl:flex-row items-center gap-6">
        <div className="flex-1 text-center xl:text-left">
          <h2 className="h2 mb-4">Experience Events In Your Pocket Today</h2>
          <p className="mx-w-[410px] mx-auto xl:mx-0">
            Download our App and get instant access to upcoming events and
            tailored recommmendations
          </p>
        </div>
        <div className="flex-1 flex items-center justify-end flex-col gap-4">
          <Link href="/" className="relative flex w-[192px] h-[64px]">
            <Image
              src="/assets/download/app-store.svg"
              alt="App Store"
              fill
              className="object-contain"
            />
          </Link>
          <Link href="/" className="relative flex w-[216px] h-[64px]">
            <Image
              src="/assets/download/google-play.svg"
              alt="Google Play"
              fill
              className="object-contain"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
