"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="py-20 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            className="md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 text-white">About Me</h2>
            <motion.p
              className="text-gray-300 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
            Ilyosbek Axmedjanov is a skilled Frontend Developer specializing in HTML, CSS, JavaScript, TypeScript, ReactJS, and Next.js. With expertise in TailwindCSS and modern UI design, he builds dynamic, user-friendly, and responsive web applications. Passionate about scalable solutions, cross-browser compatibility, and continuous learning, his diverse projects are available on GitHub.
            </motion.p>
         
          </motion.div>
          <motion.div
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-full border-4 border-yellow-400 shadow-xl">
              <Image
                src="/Images/Ilyosbek.jpg"
                alt="Ilyosbek"
                layout="fill"
                objectFit="cover"
                className="hover:scale-110 transition-transform duration-300"
              />
            </div>
          </motion.div>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-transparent pointer-events-none" />
    </section>
  );
};

export default About;