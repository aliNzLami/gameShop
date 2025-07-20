import React, { useRef, useState, useEffect } from 'react';
import videojs from "video.js";
import 'video.js/dist/video-js.css';

const CustomVideoPlayer = ({ src, poster }) => {
  const videoRef = useRef(null);
  const playerRef = useRef(null);
  const containerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPlayButton, setShowPlayButton] = useState(true);

  useEffect(() => {
    // Initialize Video.js player
    if (videoRef.current) {
      const player = videojs(videoRef.current, {
        controls: false, // disable default controls
        // poster: poster,
        autoplay: false,
        muted: true, // for autoplay
        sources: [{ src: src, type: 'video/mp4' }], // adjust type if needed
      });

      playerRef.current = player;

      // Set loop attribute
      player.ready(() => {
        player.loop(true);
      });

      // Event: when video ends
      player.on('ended', () => {
        setShowPlayButton(true);
        setIsPlaying(false);
      });

      // Optional: Handle play/pause state if needed
      player.on('play', () => {
        setIsPlaying(true);
        setShowPlayButton(false);
      });
      player.on('pause', () => {
        setIsPlaying(false);
        // Keep showPlayButton based on your logic
      });
    }

    // Cleanup on unmount
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
      {/* Video.js player */}
      <video
        ref={videoRef}
        className='video-js'
        style={{ width: '100%', height: '100%' }}
        // poster={poster}
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
            backgroundColor: 'rgba(0, 0, 0, 0.3)', // semi-transparent background
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
