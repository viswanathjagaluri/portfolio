import { useEffect, useState, useCallback } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
}

export const CursorEffect = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);

  const createParticle = useCallback((x: number, y: number) => {
    const particle: Particle = {
      id: Date.now() + Math.random(),
      x: x + (Math.random() - 0.5) * 20,
      y: y + (Math.random() - 0.5) * 20,
      size: Math.random() * 8 + 4,
      opacity: 1,
    };
    return particle;
  }, []);

  useEffect(() => {
    let lastX = 0;
    let lastY = 0;
    let particleInterval: NodeJS.Timeout;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      const distance = Math.sqrt(
        Math.pow(e.clientX - lastX, 2) + Math.pow(e.clientY - lastY, 2)
      );

      if (distance > 10) {
        lastX = e.clientX;
        lastY = e.clientY;
        
        setParticles(prev => {
          const newParticle = createParticle(e.clientX, e.clientY);
          const updated = [...prev, newParticle].slice(-20);
          return updated;
        });
      }

      const target = e.target as HTMLElement;
      const isClickable =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        !!target.closest("a") ||
        !!target.closest("button") ||
        window.getComputedStyle(target).cursor === "pointer";
      setIsPointer(isClickable);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    // Fade out particles
    particleInterval = setInterval(() => {
      setParticles(prev =>
        prev
          .map(p => ({ ...p, opacity: p.opacity - 0.05 }))
          .filter(p => p.opacity > 0)
      );
    }, 50);

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      clearInterval(particleInterval);
    };
  }, [createParticle]);

  if (!isVisible) return null;

  return (
    <>
      {/* Particle trail */}
      {particles.map(particle => (
        <div
          key={particle.id}
          className="pointer-events-none fixed z-40 rounded-full bg-gradient-to-r from-primary to-accent"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            opacity: particle.opacity,
            transform: "translate(-50%, -50%)",
            filter: `blur(${particle.size / 4}px)`,
          }}
        />
      ))}

      {/* Main glow orb */}
      <div
        className="pointer-events-none fixed z-50 mix-blend-screen transition-transform duration-75 ease-out"
        style={{
          left: position.x,
          top: position.y,
          transform: `translate(-50%, -50%) scale(${isPointer ? 1.5 : 1})`,
        }}
      >
        <div
          className={`rounded-full bg-gradient-to-r from-primary/60 to-accent/60 blur-xl transition-all duration-300 ${
            isPointer ? "w-16 h-16" : "w-10 h-10"
          }`}
        />
      </div>

      {/* Inner dot */}
      <div
        className="pointer-events-none fixed z-50 transition-transform duration-100 ease-out"
        style={{
          left: position.x,
          top: position.y,
          transform: `translate(-50%, -50%) scale(${isPointer ? 0 : 1})`,
        }}
      >
        <div className="w-2 h-2 rounded-full bg-primary" />
      </div>

      {/* Trailing glow */}
      <div
        className="pointer-events-none fixed z-40 mix-blend-screen transition-all duration-300 ease-out"
        style={{
          left: position.x,
          top: position.y,
          transform: "translate(-50%, -50%)",
        }}
      >
        <div className="w-32 h-32 rounded-full bg-primary/10 blur-3xl" />
      </div>
    </>
  );
};
