"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { TypeAnimation } from "react-type-animation";
import { FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const stars: { x: number; y: number; radius: number; speed: number }[] =
      Array.from({ length: 100 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        speed: Math.random() * 2 + 0.5,
      }));

    function drawStars() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "white";

      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
      });
    }

    function animateStars() {
      stars.forEach((star) => {
        star.y += star.speed;
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
      });

      drawStars();
      requestAnimationFrame(animateStars);
    }

    gsap.to(stars, {
      duration: 2,
      ease: "power1.inOut",
      repeat: -1,
      stagger: 0.1,
      onUpdate: drawStars,
    });

    animateStars();

    const handleResize = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center bg-black">
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />
      <div className="relative z-10 text-center text-white">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <TypeAnimation
            sequence={[
              "Hello, I'm Ilyosbek",
              1500,
              "I'm a Frontend Developer",
              1500,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 text-lg font-semibold rounded-full bg-yellow-400 text-black transition-all duration-300 hover:bg-yellow-500 hover:shadow-[0_0_25px_rgba(250,204,21,0.8)] active:scale-95"
            whileTap={{ scale: 0.9 }}
          >
            <FaDownload /> Download CV
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;