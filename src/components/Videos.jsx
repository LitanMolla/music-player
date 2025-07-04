import React, { useState } from "react";

const videos = [
  {
    id: "tVTM0bRcC14",
    title: 'Russian Bandana Bangla Version"',
    description: "Russian Bandana Bangla Version 😄",
    thumbnail: `https://img.youtube.com/vi/tVTM0bRcC14/maxresdefault.jpg`,
  },
  {
    id: "1jUj2OhjeFU",
    title: "Loke Bole · Bayazid Hasan ( Official Audio )",
    description: "Love flourishes in the garden of nurturing hearts..",
    thumbnail: `https://img.youtube.com/vi/1jUj2OhjeFU/maxresdefault.jpg`,
  },
  {
    id: "seR3Juh5qs",
    title: "Sanjida",
    description: "Sanjida By Bayazid Hasan",
    thumbnail: `https://img.youtube.com/vi/5seR3Juh5qs/maxresdefault.jpg`,
  },
];

const Videos = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <section className="bg-black py-20" id="videos">
      <div className="max-w-customContainer m-auto px-4 md:px-6 lg:px-8">
        <h3 className="text-white text-center text-4xl font-bold mb-12">
          <span className="text-brand">My</span> Videos
        </h3>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Side: Thumbnails */}
          <div className="md:w-[30%] space-y-4">
            {videos.map((item) => (
              <div
                key={item.id}
                className="cursor-pointer border-2 border-darkHover rounded-xl overflow-hidden hover:scale-105 transition"
                onClick={() => setSelectedVideo(item)}
              >
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full rounded-xl"
                />
              </div>
            ))}
          </div>

          {/* Right Side: Video Player */}
          <div className="md:w-[70%] flex items-center justify-center">
            {selectedVideo ? (
              <div className="relative w-full pb-[56.25%] h-0">
                <iframe
                  src={`https://www.youtube.com/embed/${selectedVideo.id}`}
                  title={selectedVideo.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full border-4 border-darkHover rounded-2xl"
                ></iframe>
              </div>
            ) : (
              <div className="w-full h-[74%] border-4 border-darkHover rounded-2xl flex items-center justify-center text-white text-lg bg-gray-800">
                <p>Select a video to play</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Videos;
