import React, { useState, useEffect, useRef } from 'react';
import { Music, Music2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // We are creating a dummy audio element, replace src with actual cinematic wedding BGM
    audioRef.current = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3');
    audioRef.current.loop = true;
    audioRef.current.volume = 0.4;
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(e => console.log('Audio playback prevented by browser'));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, duration: 0.5 }}
      onClick={togglePlay}
      className={`fixed bottom-8 right-8 w-14 h-14 rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(212,175,55,0.4)] z-50 transition-all duration-300 ${isPlaying ? 'bg-gold text-white' : 'glass-card bg-white/80 text-gold hover:bg-white'}`}
    >
      <AnimatePresence mode="wait">
        {isPlaying ? (
          <motion.div
            key="playing"
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 90 }}
            className="flex items-center justify-center gap-1"
          >
            <div className="w-1 h-3 bg-white animate-pulse" />
            <div className="w-1 h-5 bg-white animate-pulse" style={{ animationDelay: '0.2s' }} />
            <div className="w-1 h-3 bg-white animate-pulse" style={{ animationDelay: '0.4s' }} />
          </motion.div>
        ) : (
          <motion.div
            key="paused"
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 90 }}
          >
            <Music size={24} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default FloatingMusic;
