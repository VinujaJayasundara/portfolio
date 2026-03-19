import { useMemo, useRef } from 'react';
import { motion } from 'framer-motion';

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  duration: number;
  delay: number;
}

interface ShootingStar {
  id: number;
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  duration: number;
  delay: number;
  angle: number;
  tailLength: number;
}

interface FloatingParticle {
  id: number;
  x: number;
  y: number;
  duration: number;
  delay: number;
}

// Seeded random function for consistent values
const seededRandom = (seed: number) => {
  const x = Math.sin(seed * 9999) * 10000;
  return x - Math.floor(x);
};

const StarryBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Generate static twinkling stars with seeded random
  const stars: Star[] = useMemo(() => 
    Array.from({ length: 80 }, (_, i) => ({
      id: i,
      x: seededRandom(i * 1.1) * 100,
      y: seededRandom(i * 2.2) * 100,
      size: seededRandom(i * 3.3) * 2 + 1,
      opacity: seededRandom(i * 4.4) * 0.5 + 0.3,
      duration: seededRandom(i * 5.5) * 3 + 2,
      delay: seededRandom(i * 6.6) * 5,
    })), []
  );

  // Generate shooting stars with seeded random - more variety
  const shootingStars: ShootingStar[] = useMemo(() =>
    Array.from({ length: 8 }, (_, i) => {
      const direction = seededRandom(i * 11 + 100) > 0.5 ? 1 : -1; // left-to-right or right-to-left
      const fromTop = seededRandom(i * 12 + 150) > 0.3; // most start from top
      
      let startX: number, startY: number, endX: number, endY: number;
      
      if (fromTop) {
        // Start from top edge
        startX = seededRandom(i * 13 + 200) * 80 + 10;
        startY = -5;
        endX = startX + (direction * (seededRandom(i * 14 + 250) * 60 + 40));
        endY = seededRandom(i * 15 + 300) * 60 + 40;
      } else {
        // Start from left or right edge
        startX = direction > 0 ? -5 : 105;
        startY = seededRandom(i * 16 + 350) * 40;
        endX = direction > 0 ? seededRandom(i * 17 + 400) * 80 + 20 : seededRandom(i * 17 + 400) * 80;
        endY = startY + seededRandom(i * 18 + 450) * 50 + 20;
      }
      
      const angle = Math.atan2(endY - startY, endX - startX) * (180 / Math.PI);
      
      return {
        id: i,
        startX,
        startY,
        endX,
        endY,
        duration: seededRandom(i * 19 + 500) * 1.5 + 0.8,
        delay: i * 3 + seededRandom(i * 20 + 550) * 5,
        angle,
        tailLength: seededRandom(i * 21 + 600) * 60 + 40,
      };
    }), []
  );

  // Generate floating particles with seeded random
  const floatingParticles: FloatingParticle[] = useMemo(() =>
    Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: seededRandom(i * 7 + 500) * 100,
      y: seededRandom(i * 7 + 600) * 100,
      duration: seededRandom(i * 7 + 700) * 5 + 5,
      delay: seededRandom(i * 7 + 800) * 5,
    })), []
  );

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Glassy overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-luna-darkest/20 to-luna-darkest/40 backdrop-blur-[1px]" />
      
      {/* Nebula-like glassy effects */}
      <motion.div
        className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(15, 66, 126, 0.15) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(74, 144, 217, 0.1) 0%, transparent 70%)',
          filter: 'blur(50px)',
        }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
      />

      {/* Static twinkling stars */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
          }}
          animate={{
            opacity: [star.opacity * 0.3, star.opacity, star.opacity * 0.3],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: star.delay,
          }}
        />
      ))}

      {/* Shooting stars */}
      {shootingStars.map((star) => {
        // Calculate the distance for animation
        const distanceX = (star.endX - star.startX) * (typeof window !== 'undefined' ? window.innerWidth / 100 : 15);
        const distanceY = (star.endY - star.startY) * (typeof window !== 'undefined' ? window.innerHeight / 100 : 10);
        
        return (
          <motion.div
            key={`shooting-${star.id}`}
            className="absolute z-10"
            style={{
              left: `${star.startX}%`,
              top: `${star.startY}%`,
            }}
            initial={{ opacity: 0, x: 0, y: 0 }}
            animate={{
              opacity: [0, 0.2, 1, 1, 0.5, 0],
              x: [0, distanceX * 0.3, distanceX * 0.6, distanceX],
              y: [0, distanceY * 0.3, distanceY * 0.6, distanceY],
            }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              repeatDelay: 8 + star.delay,
              ease: [0.25, 0.1, 0.25, 1],
              delay: star.delay,
            }}
          >
            {/* Star head with glow */}
            <div
              className="w-2 h-2 rounded-full bg-white"
              style={{
                boxShadow: '0 0 8px 3px rgba(255, 255, 255, 0.9), 0 0 16px 6px rgba(74, 144, 217, 0.7), 0 0 24px 8px rgba(74, 144, 217, 0.3)',
              }}
            />
            {/* Star tail */}
            <div
              className="absolute top-1/2 right-full"
              style={{
                width: `${star.tailLength}px`,
                height: '2px',
                background: 'linear-gradient(90deg, transparent 0%, rgba(74, 144, 217, 0.3) 30%, rgba(255, 255, 255, 0.9) 100%)',
                transformOrigin: 'right center',
                transform: `translateY(-50%) rotate(${star.angle + 180}deg)`,
              }}
            />
          </motion.div>
        );
      })}

      {/* Floating particles */}
      {floatingParticles.map((particle) => (
        <motion.div
          key={`particle-${particle.id}`}
          className="absolute w-0.5 h-0.5 rounded-full bg-luna-lightest/40"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: particle.delay,
          }}
        />
      ))}

      {/* Glass reflection lines */}
      <div className="absolute inset-0 overflow-hidden opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(135deg, transparent 40%, rgba(255,255,255,0.1) 45%, transparent 50%),
              linear-gradient(-135deg, transparent 40%, rgba(255,255,255,0.05) 45%, transparent 50%)
            `,
            backgroundSize: '200% 200%',
          }}
        />
      </div>
    </div>
  );
};

export default StarryBackground;
