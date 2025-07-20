import React, { useRef, useState, useEffect } from 'react';
import videojs from "video.js";
import 'video.js/dist/video-js.css';

const CustomVideoPlayer = ({ src }) => {
  const videoRef = useRef(null);
  const playerRef = useRef(null);
  const containerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPlayButton, setShowPlayButton] = useState(true);

  useEffect(() => {
    if (videoRef.current) {
      const player = videojs(videoRef.current, {
        controls: false, 
        autoplay: false,
        muted: true, 
        sources: [{ src: src, type: 'video/mp4' }]
      });

      playerRef.current = player;

      player.ready(() => {
        player.loop(true);
      });

      player.on('ended', () => {
        setShowPlayButton(true);
        setIsPlaying(false);
      });

      player.on('play', () => {
        setIsPlaying(true);
        setShowPlayButton(false);
      });
      player.on('pause', () => {
        setIsPlaying(false);
      });
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.dispose();
      }
    };
  }, [src]);

  const handlePlay = () => {
    if (playerRef.current) {
      playerRef.current.play();
    }
  };

  return (
    <div
      ref={containerRef}
      className='videoHolder'
      id='videoHolder'
      style={{ position: 'relative', width: '100%', maxWidth: '100%' }}
    >
      <video
        ref={videoRef}
        className='video-js'
        style={{ width: '100%', height: '100%' }}
      />

      {showPlayButton && (
        <div className='videoPlayer_playBtnHolder' onClick={handlePlay}>
          <div className='mainPurpleBg videoPlayer_playBtn' >
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='white'
              xmlns='http://www.w3.org/2000/svg'
            >
              <polygon points='8,5 19,12 8,19' />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomVideoPlayer;
