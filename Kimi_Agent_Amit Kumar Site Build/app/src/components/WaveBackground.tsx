import { useEffect, useRef } from 'react';

export function WaveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener('resize', resize);

    const lines: { y: number; amplitude: number; frequency: number; speed: number; offset: number; opacity: number }[] = [];
    const numLines = 25;

    for (let i = 0; i < numLines; i++) {
      lines.push({
        y: canvas.height * (0.3 + (i / numLines) * 0.5),
        amplitude: 20 + Math.random() * 40,
        frequency: 0.002 + Math.random() * 0.003,
        speed: 0.3 + Math.random() * 0.5,
        offset: Math.random() * Math.PI * 2,
        opacity: 0.03 + (i / numLines) * 0.08,
      });
    }

    const animate = () => {
      ctx.fillStyle = '#0a1628';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      lines.forEach((line) => {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(255, 255, 255, ${line.opacity})`;
        ctx.lineWidth = 1;

        for (let x = 0; x < canvas.width; x += 2) {
          const y =
            line.y +
            Math.sin(x * line.frequency + time * line.speed + line.offset) *
              line.amplitude +
            Math.sin(x * line.frequency * 0.5 + time * line.speed * 0.7) *
              (line.amplitude * 0.5);

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        ctx.stroke();
      });

      time += 0.01;
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ background: '#0a1628' }}
    />
  );
}
