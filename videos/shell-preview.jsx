import { useEffect, useRef } from 'react';

export default function ShellSpatialComputing() {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const width = canvas.width = 800;
    const height = canvas.height = 450;

    // Shell Yellow
    const SHELL_YELLOW = '#FBCE07';
    const SHELL_YELLOW_RGB = { r: 251, g: 206, b: 7 };

    // Nodes for spatial computing grid
    const nodes = [];
    const dataPackets = [];
    let time = 0;

    // Create grid nodes
    const spacing = 80;
    for (let x = 0; x < width + spacing; x += spacing) {
      for (let y = 0; y < height + spacing; y += spacing) {
        nodes.push({
          x: x + (Math.random() - 0.5) * 30,
          y: y + (Math.random() - 0.5) * 30,
          baseX: x,
          baseY: y,
          pulse: Math.random() * Math.PI * 2,
          connections: [],
          active: Math.random() > 0.3
        });
      }
    }

    // Create connections
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].baseX - nodes[j].baseX;
        const dy = nodes[i].baseY - nodes[j].baseY;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < spacing * 1.5 && Math.random() > 0.4) {
          nodes[i].connections.push(j);
        }
      }
    }

    function animate() {
      // Dark background with trail
      ctx.fillStyle = 'rgba(26, 26, 26, 0.15)';
      ctx.fillRect(0, 0, width, height);

      time += 0.015;

      // Update nodes
      nodes.forEach(node => {
        node.x = node.baseX + Math.sin(time + node.pulse) * 6;
        node.y = node.baseY + Math.cos(time * 0.7 + node.pulse) * 6;
        node.pulse += 0.002;
      });

      // Draw connections
      nodes.forEach((node, i) => {
        node.connections.forEach(j => {
          const other = nodes[j];
          const dx = node.x - other.x;
          const dy = node.y - other.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          const alpha = Math.max(0.05, 0.25 - d / 800);

          ctx.beginPath();
          ctx.strokeStyle = `rgba(${SHELL_YELLOW_RGB.r}, ${SHELL_YELLOW_RGB.g}, ${SHELL_YELLOW_RGB.b}, ${alpha})`;
          ctx.lineWidth = 0.5;
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(other.x, other.y);
          ctx.stroke();
        });
      });

      // Create data packets
      if (Math.random() < 0.05) {
        const startIdx = Math.floor(Math.random() * nodes.length);
        if (nodes[startIdx].connections.length > 0) {
          const endIdx = nodes[startIdx].connections[Math.floor(Math.random() * nodes[startIdx].connections.length)];
          dataPackets.push({
            startNode: startIdx,
            endNode: endIdx,
            progress: 0,
            speed: 0.01 + Math.random() * 0.02,
            size: 3 + Math.random() * 4
          });
        }
      }

      // Update and draw packets
      for (let i = dataPackets.length - 1; i >= 0; i--) {
        const packet = dataPackets[i];
        packet.progress += packet.speed;

        if (packet.progress >= 1) {
          const currentNode = nodes[packet.endNode];
          if (currentNode.connections.length > 0 && Math.random() > 0.4) {
            packet.startNode = packet.endNode;
            packet.endNode = currentNode.connections[Math.floor(Math.random() * currentNode.connections.length)];
            packet.progress = 0;
          } else {
            dataPackets.splice(i, 1);
            continue;
          }
        }

        const start = nodes[packet.startNode];
        const end = nodes[packet.endNode];
        const x = start.x + (end.x - start.x) * packet.progress;
        const y = start.y + (end.y - start.y) * packet.progress;

        // Glow
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, packet.size * 2);
        gradient.addColorStop(0, `rgba(${SHELL_YELLOW_RGB.r}, ${SHELL_YELLOW_RGB.g}, ${SHELL_YELLOW_RGB.b}, 0.8)`);
        gradient.addColorStop(1, `rgba(${SHELL_YELLOW_RGB.r}, ${SHELL_YELLOW_RGB.g}, ${SHELL_YELLOW_RGB.b}, 0)`);
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, packet.size * 2, 0, Math.PI * 2);
        ctx.fill();

        // Core
        ctx.fillStyle = SHELL_YELLOW;
        ctx.beginPath();
        ctx.arc(x, y, packet.size * 0.3, 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw nodes
      nodes.forEach(node => {
        if (!node.active) return;

        const pulseSize = 3 + Math.sin(time * 2 + node.pulse) * 1.5;

        // Glow
        const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, pulseSize * 2);
        gradient.addColorStop(0, `rgba(${SHELL_YELLOW_RGB.r}, ${SHELL_YELLOW_RGB.g}, ${SHELL_YELLOW_RGB.b}, 0.4)`);
        gradient.addColorStop(1, `rgba(${SHELL_YELLOW_RGB.r}, ${SHELL_YELLOW_RGB.g}, ${SHELL_YELLOW_RGB.b}, 0)`);
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(node.x, node.y, pulseSize * 2, 0, Math.PI * 2);
        ctx.fill();

        // Core
        ctx.fillStyle = SHELL_YELLOW;
        ctx.beginPath();
        ctx.arc(node.x, node.y, pulseSize * 0.3, 0, Math.PI * 2);
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    }

    // Initial fill
    ctx.fillStyle = '#1A1A1A';
    ctx.fillRect(0, 0, width, height);

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div className="flex flex-col items-center gap-6 p-6 bg-gray-900 min-h-screen">
      <div className="text-center">
        <h1 className="text-2xl font-light text-white mb-2">Shell - Spatial Computing</h1>
        <p className="text-gray-400 text-sm">Energy data visualization with flowing particles</p>
      </div>

      <div className="rounded-xl overflow-hidden shadow-2xl border border-gray-700">
        <canvas ref={canvasRef} width={800} height={450} />
      </div>

      <div className="max-w-lg text-center">
        <p className="text-gray-300 text-sm leading-relaxed">
          This animation represents spatial computing data flows - nodes connected in a grid
          with data packets traveling between them, simulating wellsite monitoring and
          real-time operational data visualization.
        </p>
      </div>

      <div className="flex gap-4 mt-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#FBCE07' }}></div>
          <span className="text-gray-400 text-xs">Shell Yellow (#FBCE07)</span>
        </div>
      </div>
    </div>
  );
}
