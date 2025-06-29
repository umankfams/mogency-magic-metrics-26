
import React, { useEffect, useRef } from 'react';

interface SplashCursorProps {
  color?: string;
  size?: number;
  duration?: number;
}

const SplashCursor: React.FC<SplashCursorProps> = ({
  color = '#0EA5E9',
  size = 20,
  duration = 800,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const splashes = useRef<Array<{
    x: number;
    y: number;
    timestamp: number;
    opacity: number;
  }>>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);

    const handleMouseMove = (e: MouseEvent) => {
      splashes.current.push({
        x: e.clientX,
        y: e.clientY,
        timestamp: Date.now(),
        opacity: 1,
      });
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const now = Date.now();
      splashes.current = splashes.current.filter(splash => {
        const age = now - splash.timestamp;
        if (age > duration) return false;

        const progress = age / duration;
        const opacity = 1 - progress;
        const currentSize = size * (1 + progress * 2);

        ctx.save();
        ctx.globalAlpha = opacity * 0.6;
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(splash.x, splash.y, currentSize, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        return true;
      });

      requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', updateCanvasSize);
    };
  }, [color, size, duration]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

export default SplashCursor;
