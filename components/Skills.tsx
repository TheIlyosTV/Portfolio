"use client";

import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaBootstrap,
  FaGit,
  FaGithub,
  FaJs,
  FaReact,
} from "react-icons/fa";
import { SiNextdotjs, SiTypescript } from "react-icons/si";
import { CgCPlusPlus } from "react-icons/cg";

const skills = [
  { name: "HTML", icon: FaHtml5 },
  { name: "CSS", icon: FaCss3Alt },
  { name: "SASS", icon: FaSass },
  { name: "Bootstrap", icon: FaBootstrap },
  { name: "JavaScript", icon: FaJs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "React.js", icon: FaReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "C++", icon: CgCPlusPlus },
  { name: "Git", icon: FaGit },
  { name: "GitHub", icon: FaGithub },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">
          My Skills
        </h2>

        <motion.div
          className="flex gap-10 whitespace-nowrap"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        >
          {skills.concat(skills).map((skill, index) => (
            <div key={index} className="flex flex-col items-center mx-4">
              <motion.div
                className="w-20 h-20 rounded-full bg-yellow-400 flex items-center justify-center text-black text-4xl mb-2 shadow-lg"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.4 }}
              >
                <skill.icon />
              </motion.div>
              <span className="text-sm text-white">{skill.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
