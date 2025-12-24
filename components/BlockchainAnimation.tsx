'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export function BlockchainAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Blockchain blocks configuration
    const blocks: Array<{
      x: number;
      y: number;
      size: number;
      vx: number;
      vy: number;
      connections: number[];
      opacity: number;
    }> = [];

    const blockCount = 15;
    const connectionDistance = 200;

    // Initialize blocks
    for (let i = 0; i < blockCount; i++) {
      blocks.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: 8 + Math.random() * 12,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        connections: [],
        opacity: 0.1 + Math.random() * 0.2,
      });
    }

    // Calculate connections
    const updateConnections = () => {
      blocks.forEach((block, i) => {
        block.connections = [];
        blocks.forEach((other, j) => {
          if (i !== j) {
            const dx = other.x - block.x;
            const dy = other.y - block.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < connectionDistance) {
              block.connections.push(j);
            }
          }
        });
      });
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update block positions
      blocks.forEach((block) => {
        block.x += block.vx;
        block.y += block.vy;

        // Bounce off edges
        if (block.x < 0 || block.x > canvas.width) block.vx *= -1;
        if (block.y < 0 || block.y > canvas.height) block.vy *= -1;

        // Keep within bounds
        block.x = Math.max(0, Math.min(canvas.width, block.x));
        block.y = Math.max(0, Math.min(canvas.height, block.y));
      });

      updateConnections();

      // Draw connections
      blocks.forEach((block, i) => {
        block.connections.forEach((connIndex) => {
          const connected = blocks[connIndex];
          const dx = connected.x - block.x;
          const dy = connected.y - block.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const opacity = (1 - distance / connectionDistance) * 0.15;

          ctx.strokeStyle = `rgba(3, 2, 93, ${opacity})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(block.x, block.y);
          ctx.lineTo(connected.x, connected.y);
          ctx.stroke();
        });
      });

      // Draw blocks
      blocks.forEach((block) => {
        // Glow effect
        const gradient = ctx.createRadialGradient(
          block.x,
          block.y,
          0,
          block.x,
          block.y,
          block.size * 2
        );
        gradient.addColorStop(0, `rgba(3, 2, 93, ${block.opacity * 0.8})`);
        gradient.addColorStop(0.5, `rgba(3, 2, 93, ${block.opacity * 0.4})`);
        gradient.addColorStop(1, 'rgba(3, 2, 93, 0)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(block.x, block.y, block.size * 2, 0, Math.PI * 2);
        ctx.fill();

        // Block
        ctx.fillStyle = `rgba(3, 2, 93, ${block.opacity * 0.6})`;
        ctx.beginPath();
        ctx.arc(block.x, block.y, block.size, 0, Math.PI * 2);
        ctx.fill();

        // Inner highlight
        ctx.fillStyle = `rgba(255, 255, 255, ${block.opacity * 0.3})`;
        ctx.beginPath();
        ctx.arc(block.x - block.size * 0.3, block.y - block.size * 0.3, block.size * 0.4, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <motion.canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      style={{ mixBlendMode: 'screen' }}
    />
  );
}

