"use client";

import { useEffect, useRef } from "react";

export default function HeroCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let width = 0;
    let height = 0;
    let dpr = 1;

    // Mouse tracking for subtle parallax effect
    const mouse = {
      x: 0,
      y: 0,
      targetX: 0,
      targetY: 0,
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      if (centerX <= 0 || centerY <= 0) return;
      mouse.targetX = (e.clientX - rect.left - centerX) / centerX;
      mouse.targetY = (e.clientY - rect.top - centerY) / centerY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // 1. Ascending Ambient Growth Arrow Particles
    let risingArrows = [];
    const risingArrowCount = 18;

    const initRisingArrows = () => {
      risingArrows = [];
      for (let i = 0; i < risingArrowCount; i++) {
        risingArrows.push({
          x: Math.random() * (width || 1000),
          y: (height || 800) + Math.random() * 200,
          speed: Math.random() * 0.75 + 0.55,
          size: Math.random() * 9 + 7,
          alpha: Math.random() * 0.35 + 0.15,
          phase: Math.random() * Math.PI * 2,
        });
      }
    };

    // 2. Volume Bar Chart
    let barChartBars = [];
    const barCount = 30;

    const initBarChart = () => {
      barChartBars = [];
      const currentWidth = width || 1000;
      const currentHeight = height || 800;
      const barWidth = currentWidth / barCount;

      for (let i = 0; i < barCount; i++) {
        const heightMultiplier = Math.pow(i / barCount, 1.35);
        const baseH = Math.random() * 35 + 20 + heightMultiplier * (currentHeight * 0.26);
        barChartBars.push({
          x: i * barWidth + barWidth * 0.15,
          w: barWidth * 0.7,
          baseHeight: baseH,
          phase: Math.random() * Math.PI * 2,
          speed: Math.random() * 0.025 + 0.012,
          hasTopArrow: i % 5 === 0 || i === barCount - 2,
        });
      }
    };

    // 3. Constellation Particles
    let particles = [];
    const particleCount = 28;

    const initParticles = () => {
      particles = [];
      const currentWidth = width || 1000;
      const currentHeight = height || 800;

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * currentWidth,
          y: Math.random() * currentHeight,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
          radius: Math.random() * 2 + 1.2,
          alpha: Math.random() * 0.35 + 0.18,
          pulseSpeed: Math.random() * 0.015 + 0.006,
          pulseAngle: Math.random() * Math.PI * 2,
        });
      }
    };

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      const parentW = canvas.parentElement ? canvas.parentElement.clientWidth : 0;
      const parentH = canvas.parentElement ? canvas.parentElement.clientHeight : 0;

      width = parentW > 0 ? parentW : window.innerWidth;
      height = parentH > 0 ? parentH : window.innerHeight;

      if (!width || !height || width <= 0 || height <= 0 || !isFinite(width) || !isFinite(height)) {
        return;
      }

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);
      initParticles();
      initRisingArrows();
      initBarChart();
    };

    resize();
    window.addEventListener("resize", resize);

    let animStep = 0;

    // Helper: Draw Arrow Triangle
    const drawArrowHead = (ctx, x, y, size, angle, color) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(angle);
      ctx.beginPath();
      ctx.moveTo(0, -size);
      ctx.lineTo(size * 0.75, size * 0.75);
      ctx.lineTo(0, size * 0.3);
      ctx.lineTo(-size * 0.75, size * 0.75);
      ctx.closePath();
      ctx.fillStyle = color;
      ctx.fill();
      ctx.restore();
    };

    // Pre-calculate dense linear points along straight line segments (sharp corners)
    const generateDenseLinearPath = (keypoints, samplesPerSeg = 25) => {
      const dense = [];
      if (keypoints.length < 2) return dense;

      for (let i = 0; i < keypoints.length - 1; i++) {
        const p1 = keypoints[i];
        const p2 = keypoints[i + 1];
        const segAngle = Math.atan2(p2.y - p1.y, p2.x - p1.x) + Math.PI / 2;

        for (let s = 0; s < samplesPerSeg; s++) {
          const t = s / samplesPerSeg;
          const x = p1.x + (p2.x - p1.x) * t;
          const y = p1.y + (p2.y - p1.y) * t;
          dense.push({ x, y, angle: segAngle });
        }
      }
      const lastP = keypoints[keypoints.length - 1];
      const prevP = keypoints[keypoints.length - 2];
      const lastAngle = Math.atan2(lastP.y - prevP.y, lastP.x - prevP.x) + Math.PI / 2;
      dense.push({ x: lastP.x, y: lastP.y, angle: lastAngle });

      return dense;
    };

    const render = () => {
      if (!width || !height || width <= 0 || height <= 0 || !isFinite(width) || !isFinite(height)) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      const outerRadius = Math.max(width, height) * 0.75;
      if (outerRadius <= 0 || !isFinite(outerRadius)) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      animStep += 0.007;

      // Smooth mouse interpolation (lerp)
      mouse.x += (mouse.targetX - mouse.x) * 0.045;
      mouse.y += (mouse.targetY - mouse.y) * 0.045;

      ctx.clearRect(0, 0, width, height);

      // A. Ambient Radial Glow Background
      const glowGrad = ctx.createRadialGradient(
        width * 0.5 + mouse.x * 25,
        height * 0.35 + mouse.y * 15,
        40,
        width * 0.5,
        height * 0.4,
        outerRadius
      );
      glowGrad.addColorStop(0, "rgba(224, 242, 254, 0.85)");
      glowGrad.addColorStop(0.4, "rgba(186, 230, 253, 0.35)");
      glowGrad.addColorStop(0.8, "rgba(240, 249, 255, 0.15)");
      glowGrad.addColorStop(1, "rgba(255, 255, 255, 0)");

      ctx.fillStyle = glowGrad;
      ctx.fillRect(0, 0, width, height);

      // B. Render Volume/Lead Bar Chart (Bottom)
      const barBaseY = height * 0.96 + mouse.y * 6;
      for (let i = 0; i < barChartBars.length; i++) {
        const bar = barChartBars[i];
        bar.phase += bar.speed;
        const currentH = bar.baseHeight + Math.sin(bar.phase) * 6;

        const bx = bar.x + mouse.x * (6 + (i / barChartBars.length) * 6);
        const by = barBaseY - currentH;

        const barGrad = ctx.createLinearGradient(bx, barBaseY, bx, by);
        barGrad.addColorStop(0, "rgba(186, 230, 253, 0.04)");
        barGrad.addColorStop(0.5, "rgba(56, 189, 248, 0.16)");
        barGrad.addColorStop(1, "rgba(37, 99, 235, 0.3)");

        ctx.fillStyle = barGrad;
        ctx.beginPath();
        if (ctx.roundRect) {
          ctx.roundRect(bx, by, bar.w, currentH, [3, 3, 0, 0]);
        } else {
          ctx.rect(bx, by, bar.w, currentH);
        }
        ctx.fill();

        ctx.fillStyle = "rgba(14, 165, 233, 0.4)";
        ctx.fillRect(bx, by, bar.w, 1.5);

        if (bar.hasTopArrow && i > 4) {
          const arrowAlpha = 0.35 + Math.sin(bar.phase) * 0.2;
          drawArrowHead(
            ctx,
            bx + bar.w / 2,
            by - 8,
            6,
            0,
            `rgba(37, 99, 235, ${arrowAlpha})`
          );
        }
      }

      // C. Continuous Sharp-Cornered ZigZag Arrow Traveling From Bottom to Top
      const waveFloat = Math.sin(animStep * 1.5) * 5;
      const mX = mouse.x;
      const mY = mouse.y;

      const zigzagKeypoints = [
        { x: width * 0.04 + mX * -8, y: height * 0.88 + mY * 10 + waveFloat },
        { x: width * 0.12 + mX * -4, y: height * 0.74 + mY * 6 - waveFloat },
        { x: width * 0.18 + mX * -1, y: height * 0.84 + mY * 3 + waveFloat },
        { x: width * 0.28 + mX * 3, y: height * 0.62 + mY * -3 - waveFloat },
        { x: width * 0.36 + mX * 6, y: height * 0.76 + mY * -1 + waveFloat },
        { x: width * 0.48 + mX * 11, y: height * 0.46 + mY * -8 - waveFloat },
        { x: width * 0.58 + mX * 14, y: height * 0.62 + mY * -5 + waveFloat },
        { x: width * 0.7 + mX * 18, y: height * 0.32 + mY * -11 - waveFloat },
        { x: width * 0.81 + mX * 22, y: height * 0.44 + mY * -8 + waveFloat },
        { x: width * 0.95 + mX * 25, y: height * 0.07 + mY * -18 - waveFloat },
      ];

      const densePath = generateDenseLinearPath(zigzagKeypoints, 25);

      // 1. Permanent Light Background Track Guide Line
      ctx.beginPath();
      if (densePath.length > 0) {
        ctx.moveTo(densePath[0].x, densePath[0].y);
        for (let i = 1; i < densePath.length; i++) {
          ctx.lineTo(densePath[i].x, densePath[i].y);
        }
      }
      ctx.strokeStyle = "rgba(186, 230, 253, 0.35)";
      ctx.lineWidth = 3.5;
      ctx.lineJoin = "miter";
      ctx.miterLimit = 4;
      ctx.stroke();

      // 2. Loop Progression for Upward Traveling Arrow
      const cycleLength = 1.3;
      const travelCycle = (animStep * 0.35) % cycleLength;

      let travelRatio = 0;
      let lineAlpha = 1;

      if (travelCycle <= 1.0) {
        travelRatio = travelCycle;
        lineAlpha = Math.min(1, travelCycle * 4);
      } else {
        travelRatio = 1.0;
        lineAlpha = Math.max(0, 1 - (travelCycle - 1.0) / 0.3);
      }

      if (lineAlpha > 0 && densePath.length > 2 && travelRatio > 0.005) {
        const activeCount = Math.max(2, Math.floor(travelRatio * (densePath.length - 1)));

        const pStart = densePath[0];
        const pEnd = densePath[densePath.length - 1];
        const curveGrad = ctx.createLinearGradient(pStart.x, pStart.y, pEnd.x, pEnd.y);
        curveGrad.addColorStop(0, `rgba(186, 230, 253, ${0.15 * lineAlpha})`);
        curveGrad.addColorStop(0.35, `rgba(56, 189, 248, ${0.75 * lineAlpha})`);
        curveGrad.addColorStop(0.75, `rgba(37, 99, 235, ${0.95 * lineAlpha})`);
        curveGrad.addColorStop(1, `rgba(29, 78, 216, ${lineAlpha})`);

        ctx.beginPath();
        ctx.moveTo(densePath[0].x, densePath[0].y);
        for (let i = 1; i <= activeCount; i++) {
          ctx.lineTo(densePath[i].x, densePath[i].y);
        }
        ctx.strokeStyle = curveGrad;
        ctx.lineWidth = 4.5;
        ctx.lineJoin = "miter";
        ctx.miterLimit = 4;
        ctx.stroke();

        // Outer Glow Trail
        ctx.beginPath();
        ctx.moveTo(densePath[0].x, densePath[0].y);
        for (let i = 1; i <= activeCount; i++) {
          ctx.lineTo(densePath[i].x, densePath[i].y);
        }
        ctx.strokeStyle = `rgba(56, 189, 248, ${0.25 * lineAlpha})`;
        ctx.lineWidth = 11;
        ctx.lineJoin = "miter";
        ctx.miterLimit = 4;
        ctx.stroke();

        // 3. Compute Tip Position & Direction Angle for Upward Arrow
        const tipPos = densePath[activeCount];

        drawArrowHead(
          ctx,
          tipPos.x,
          tipPos.y,
          18,
          tipPos.angle,
          `rgba(29, 78, 216, ${lineAlpha})`
        );

        ctx.beginPath();
        ctx.arc(tipPos.x, tipPos.y, 14, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(37, 99, 235, ${0.35 * lineAlpha})`;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(tipPos.x, tipPos.y, 5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${0.95 * lineAlpha})`;
        ctx.fill();
      }

      // D. Render Fast Ascending Ambient Lead Arrows
      for (let i = 0; i < risingArrows.length; i++) {
        const arrow = risingArrows[i];
        arrow.y -= arrow.speed;
        arrow.phase += 0.02;

        const progress = (height - arrow.y) / height;
        if (progress > 0.85) {
          arrow.alpha -= 0.01;
        }

        if (arrow.y < -30 || arrow.alpha <= 0) {
          arrow.y = height + 30 + Math.random() * 50;
          arrow.x = Math.random() * width;
          arrow.alpha = Math.random() * 0.32 + 0.12;
          arrow.speed = Math.random() * 0.75 + 0.55;
        }

        const ax = arrow.x + Math.sin(arrow.phase) * 10 + mouse.x * 8;
        drawArrowHead(
          ctx,
          ax,
          arrow.y,
          arrow.size,
          0,
          `rgba(37, 99, 235, ${Math.max(0, arrow.alpha)})`
        );
      }

      // E. Render Constellation Network Particles
      const maxConnectDist = 110;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxConnectDist) {
            const opacity = (1 - dist / maxConnectDist) * 0.16;
            ctx.beginPath();
            ctx.moveTo(
              particles[i].x + mouse.x * 6,
              particles[i].y + mouse.y * 6
            );
            ctx.lineTo(
              particles[j].x + mouse.x * 6,
              particles[j].y + mouse.y * 6
            );
            ctx.strokeStyle = `rgba(56, 189, 248, ${opacity})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }
      }

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        p.pulseAngle += p.pulseSpeed;
        const currentAlpha = p.alpha + Math.sin(p.pulseAngle) * 0.1;

        const px = p.x + mouse.x * 6;
        const py = p.y + mouse.y * 6;

        ctx.beginPath();
        ctx.arc(px, py, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(14, 165, 233, ${Math.max(0, currentAlpha)})`;
        ctx.fill();
      }

      // F. Bottom Edge Soft Dissolve Gradient Mask
      const bottomFadeGrad = ctx.createLinearGradient(0, height * 0.75, 0, height);
      bottomFadeGrad.addColorStop(0, "rgba(255, 255, 255, 0)");
      bottomFadeGrad.addColorStop(0.65, "rgba(240, 249, 255, 0.7)");
      bottomFadeGrad.addColorStop(1, "rgba(255, 255, 255, 1)");

      ctx.fillStyle = bottomFadeGrad;
      ctx.fillRect(0, height * 0.75, width, height * 0.25);

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}
