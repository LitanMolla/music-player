import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Timeline = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const timelineData = [
    {
      year: "2004",
      title: "Born",
      description:
        "Born In Sirajganj, February 24.",
      icon: "🔗",
    },
    {
      year: "2014",
      title: "Primary School End",
      description:
        "End the Primary Level of Education from ....",
      icon: "📘",
    },
    {
      year: "2018",
      title: "JSC",
      description:
        "Completed Junior School Certificate At.....",
      icon: "▶️",
    },
    {
      year: "2020",
      title: "SSC",
      description:
        "Completed Senior School Certificate At.....",
      icon: "🐦",
    },
    {
      year: "2024",
      title: "Basic Computer Application Course Complete",
      description:
        ".",
      icon: "🌀",
    },
    {
      year: "2024",
      title: "Diploma In Agriculture",
      description:
        "Complete the Diploma In Agriculture in 2024 with CGPA 3.77 out of 4.00",
      icon: "📌",
    },
    {
  year: "2025",
  title: "NHRDF Graphic Design Level-3",
  description: (
    <>
      Completed a course of NHRDF with result: <span className="font-bold text-green-400">Competent</span>
    </>
  ),
  icon: "📸",
},

  ];

  return (
    <div className="bg-bgDark py-12">
      <h1 className="text-4xl font-bold text-center text-brand mb-10"> TIMELINE</h1>
      <div className="relative max-w-5xl mx-auto">
        {/* Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-brand"></div>

        <div className="space-y-12">
          {timelineData.map((item, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div
                key={index}
                className={`relative w-full flex ${isLeft ? "justify-start" : "justify-end"}`}
                data-aos={isLeft ? "fade-right" : "fade-left"}
              >
                <div className="w-1/2 px-4">
                  <div className="bg-dark p-6 rounded-lg  border border-gray-700">
                    <h3 className="text-xl font-semibold text-brand flex items-center">
                      <span className="text-2xl mr-2">{item.icon}</span>
                      {item.year} - {item.title}
                    </h3>
                    <p className="text-white mt-2">{item.description}</p>
                  </div>
                </div>
                {/* Dot in the middle */}
                <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-800 rounded-full border-4 border-white z-10"></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
