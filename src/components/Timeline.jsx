import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Timeline = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const timelineData = [
    {
      year: "2002",
      title: "LinkedIn",
      description:
        "A business and employment-oriented service that operates via websites and mobile apps.",
      icon: "🔗",
    },
    {
      year: "2004",
      title: "Facebook",
      description:
        "An online social media and networking platform launched in California.",
      icon: "📘",
    },
    {
      year: "2005",
      title: "YouTube",
      description:
        "Video-sharing platform where users can upload, view, and share videos.",
      icon: "▶️",
    },
    {
      year: "2006",
      title: "Twitter",
      description:
        "A microblogging site for sharing short posts, thoughts, and news.",
      icon: "🐦",
    },
    {
      year: "2007",
      title: "Tumblr",
      description:
        "A platform for multimedia blogging and creative content sharing.",
      icon: "🌀",
    },
    {
      year: "2010",
      title: "Pinterest",
      description:
        "A visual discovery engine for finding ideas like recipes and design.",
      icon: "📌",
    },
    {
      year: "2010",
      title: "Instagram",
      description:
        "A platform for sharing photos and videos with filters and captions.",
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
