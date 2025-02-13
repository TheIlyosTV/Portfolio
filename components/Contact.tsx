"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";
import { FaGithub, FaTelegram, FaInstagram } from "react-icons/fa";

const Contact = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const stars = Array.from({ length: 100 }, () => ({
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
    <section id="contact" className="relative py-20 bg-black text-center">
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />
      <div className="relative z-10">
        <h2 className="text-4xl font-bold text-yellow-400 mb-6">Contact Me</h2>
        <p className="text-gray-300 text-lg mb-12">
          I am available on multiple platforms. Feel free to reach out!
        </p>

        <div className="flex justify-center space-x-12">
          {[{
            name: "Telegram",
            Icon: FaTelegram,
            link: "https://t.me/Black_Haacker",
            color: "#0088cc",
          }, {
            name: "Instagram",
            Icon: FaInstagram,
            link: "https://www.instagram.com/ilyosbek_axmedjanov/",
            color: "#E1306C",
          }, {
            name: "GitHub",
            Icon: FaGithub,
            link: "https://github.com/TheIlyosTV",
            color: "#ffffff",
          }].map(({ name, Icon, link }, index) => (
            <motion.a
              key={index}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center space-y-2"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className="relative p-6 rounded-full bg-yellow-400 shadow-[0_0_20px_rgba(250,204,21,0.7)] transition-all duration-300">
                <Icon className="text-6xl text-black" />
              </div>
              <span className="text-yellow-400 text-lg font-semibold">
                {name}
              </span>
            </motion.a>
          ))}
        </div>

        <div className="mt-16 text-gray-400 text-sm">
          <p>Let&apos;s collaborate and build something amazing together! 🚀</p>
          <p>Available for freelance & open-source projects.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;