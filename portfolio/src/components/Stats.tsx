"use client";

import CountUp from "react-countup";

const stats = [
  { num: 5, text: "Years of Experience" },
  { num: 20, text: "Projects Completed" },
  { num: 10, text: "Technologies Mastered" },
  { num: 500, text: "Code commits" },
];
function Stats() {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="max-w[80vw] mx-auto flex flex-wrap gap-6 xl:max-w-none">
          {stats.map((stat, index) => {
            return (
              <div
                key={index}
                className="flex flex-1 items-center justify-center gap-4 xl:justify-start"
              >
                <CountUp
                  end={stat.num}
                  duration={5}
                  delay={2}
                  className="text-4xl font-extrabold xl:text-6xl"
                />
                <p
                  className={`${stat.text.length < 15 ? "mx-w-[100px]" : "mx-w-[150px]"} leading-snug text-white/80`}
                >
                  {stat.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Stats;
