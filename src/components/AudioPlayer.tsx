import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import { Volume2, VolumeX } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const AudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      <AnimatePresence>
        {isPlaying && (
          <motion.div 
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            className="hidden sm:block px-3 py-1.5 bg-black/60 backdrop-blur-md rounded-full border border-cyan-500/30 text-[10px] text-cyan-400 font-mono tracking-widest shadow-[0_0_10px_rgba(0,210,255,0.1)]"
          >
            NOW PLAYING: SYSTEM.BGM
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className={`p-3 md:p-3.5 rounded-full backdrop-blur-md border shadow-2xl transition-all duration-300 pointer-events-auto ${
          isPlaying 
            ? 'bg-cyan-900/40 border-cyan-500/50 text-cyan-400 shadow-cyan-500/20 shadow-[0_0_15px_rgba(0,210,255,0.3)]' 
            : 'bg-[#0f141e]/80 border-slate-700/50 text-slate-400 hover:text-white hover:border-slate-500/50'
        }`}
        title={isPlaying ? "BGM 정지" : "BGM 재생"}
      >
        {isPlaying ? <Volume2 size={24} /> : <VolumeX size={24} />}
      </button>
      
      <div className="absolute w-[1px] h-[1px] overflow-hidden opacity-0 pointer-events-none -z-10">
        <ReactPlayer 
          url="https://youtu.be/J4QGeOffqKg?si=iMoitVnDWqw4xrzd"
          playing={isPlaying}
          loop={true}
          volume={0.4}
          width="10px"
          height="10px"
          config={{
            youtube: {
              playerVars: { autoplay: 0, controls: 0 }
            }
          }}
        />
      </div>
    </div>
  );
};
