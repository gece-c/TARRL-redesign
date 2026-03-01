import React, { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

const MAX_NODES = 80;

export const ParticleNetwork: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    const nodes: Node[] = [];

    const resize = () => {
      const { innerWidth, innerHeight } = window;
      canvas.width = innerWidth;
      canvas.height = innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const initNodes = () => {
      nodes.length = 0;
      const count = prefersReducedMotion ? 25 : MAX_NODES;
      for (let i = 0; i < count; i++) {
        nodes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.2,
          vy: (Math.random() - 0.5) * 0.2
        });
      }
    };

    initNodes();

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgba(242, 242, 242, 0.08)";
      ctx.strokeStyle = "rgba(242, 242, 242, 0.06)";

      for (const node of nodes) {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x <= 0 || node.x >= canvas.width) node.vx *= -1;
        if (node.y <= 0 || node.y >= canvas.height) node.vy *= -1;

        ctx.beginPath();
        ctx.arc(node.x, node.y, 2, 0, Math.PI * 2);
        ctx.fill();
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distSq = dx * dx + dy * dy;
          if (distSq < 140 * 140) {
            const opacity = 0.06 * (1 - distSq / (140 * 140));
            ctx.strokeStyle = `rgba(242, 242, 242, ${opacity.toFixed(3)})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    if (!prefersReducedMotion) {
      draw();
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const node of nodes) {
        ctx.beginPath();
        ctx.arc(node.x, node.y, 2, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [prefersReducedMotion]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full"
      aria-hidden="true"
    />
  );
};

