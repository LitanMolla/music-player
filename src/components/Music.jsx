import React, { useRef, useState } from 'react';
import playlist from './playlist'
import Timeline from './Timeline';

export const Music = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);


  const currentTrack = currentTrackIndex !== null ? playlist[currentTrackIndex] : null;

  const playTrack = (index) => {
    setCurrentTrackIndex(index);
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }, 100);
  };

  const togglePlayPause = () => {
    if (!currentTrack) return;
    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const handlePrev = () => {
    if (currentTrackIndex > 0) {
      playTrack(currentTrackIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentTrackIndex < playlist.length - 1) {
      playTrack(currentTrackIndex + 1);
    }
  };

  return (
    <>
      <section className="bg-bgDark py-50 min-h-screen" id='music'>
        <div className="max-w-customContainer m-auto px-4 md:px-6 lg:px-8">
          <h3 className="text-white text-center text-4xl font-bold mb-12">
            <span className="text-brand">My</span> Music
          </h3>
          {playlist.map((item, index) => (
            <div
              key={item.id}
              onClick={() => playTrack(index)}
              className="cursor-pointer max-w-3xl mx-auto bg-dark p-4 hover:bg-darkHover duration-300 transition-all w-full rounded-sm my-3"
            >
              <div className="flex justify-between items-center">
                <div className="flex gap-x-3 items-center">
                  <div className="w-10 h-10 flex justify-center items-center bg-[#333333] rounded-sm">
                    <i className="fa-solid fa-music text-brand"></i>
                  </div>
                  <div>
                    <h6 className="text-base text-white">{item.title}</h6>
                    <p className="text-sm text-[#9CA3AF]">{item.artist}</p>
                  </div>
                </div>
                <p className="text-sm text-[#9CA3AF]">{item.duration}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Player */}
      {currentTrack && (
        <div className="fixed bottom-0 left-0 right-0 bg-dark border-t border-[#444] z-50">
          <div className="max-w-customContainer mx-auto px-4 py-3 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 flex justify-center items-center bg-[#333333] rounded-sm">
                <i className="fa-solid fa-music text-brand"></i>
              </div>
              <div>
                <h6 className="text-base text-white">{currentTrack.title}</h6>
                <p className="text-sm text-[#9CA3AF]">{currentTrack.artist}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                disabled={currentTrackIndex === 0}
                className="text-white px-3 py-1 rounded hover:bg-brand/80 bg-[#444]"
              >
                ⏮️
              </button>

              <button
                onClick={togglePlayPause}
                className="text-white bg-brand px-4 py-1 rounded hover:bg-brand/80 transition"
              >
                {isPlaying ? 'Pause' : 'Play'}
              </button>

              <button
                onClick={handleNext}
                disabled={currentTrackIndex === playlist.length - 1}
                className="text-white px-3 py-1 rounded hover:bg-brand/80 bg-[#444]"
              >
                ⏭️
              </button>

              <p className="text-sm text-[#9CA3AF] ml-3">
                {formatTime(currentTime)} / {formatTime(duration)}
              </p>
            </div>
          </div>

          <audio
            ref={audioRef}
            src={currentTrack.url}
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
            onEnded={() => setIsPlaying(false)}
          />
        </div>
      )}
      {/* Timeline */}
      <Timeline/>
    </>
  );
};
