import React, { useRef, useState, useEffect } from 'react';
import VideoPlayer from 'react-video-js-player';

const CustomVideoPlayer = ({ src, poster }) => {
  const playerRef = useRef(null);
  const videoPlayer= useRef(null)
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPlayButton, setShowPlayButton] = useState(true);

  const onPlayerReady = (player) => {
    console.log("Player is ready: ", player);
    playerRef.current = player;
    const videoParent = [...videoPlayer.current.children][0]
    const videoTag = videoParent.children[0]
    videoTag.setAttribute("loop", true)
    
  };

  const handlePlay = () => {
    if (playerRef.current) {
      playerRef.current.play();
      setIsPlaying(true);
      setShowPlayButton(false);
    }
  };

  const handlePause = () => {
    if (playerRef.current) {
      playerRef.current.pause();
      setIsPlaying(false);
      setShowPlayButton(true);
    }
  };

  const onVideoEnd = () => {
    setShowPlayButton(true);
    
    
  };
  

  return (
    <div ref={videoPlayer} className='videoHolder' id='videoHolder' style={{ position: 'relative', width: '100%', maxWidth: '100%' }}>
      {/* Disable default controls */}
      <VideoPlayer
        controls={false}
        src={src}
        poster={poster}
        width="100%"
        height="100%"
        onReady={onPlayerReady}
        onEnd={onVideoEnd}
        muted={true} // necessary for autoplay in many browsers
      />

      {/* Overlay Play Button */}
      {showPlayButton && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
            backgroundColor: 'rgba(0, 0, 0, 0.3)', // optional: semi-transparent background
          }}
          onClick={handlePlay}
        >
          <div
            className='mainPurpleBg'
            style={{
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
            }}
          >
            {/* Play Icon (triangle) */}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polygon points="8,5 19,12 8,19" />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomVideoPlayer;
