"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import Image from "next/image";
import { Button } from "@/components/ui/button";

// Project turi uchun TypeScript interfeys
interface ProjectType {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

const projects: ProjectType[] = [
  {
    id: 1,
    title: "Online course Website",
    description:
      "The online course platform allows users to gain knowledge in various fields. The site may offer courses in programming, design, business, language learning, and marketing. Users can browse courses, read descriptions, and purchase them through convenient payment systems.",
    image: "/Images/onlinecourse.jpg",
    link: "https://beget-teach.vercel.app/",
  },
  {
    id: 2,
    title: "Ozbekiston Tourizm",
    description:
      "Uzbekistan's tourism is distinguished by its rich historical heritage, unique architectural monuments, and national traditions. The country is located at the heart of the Great Silk Road, making it a center of trade and cultural exchange since ancient times.",
    image: "/Images/ozbekiston-tourizm.jpg",
    link: "https://ozbekiston-tourizm.vercel.app/",
  },
  {
    id: 3,
    title: "Sport Shop",
    description:
      "The sports equipment store website you plan to create will allow users to purchase various sports gear. The site may include products for football, basketball, chess, checkers, running, fitness, and other sports.",
    image: "/Images/Sport-shop.jpg",
    link: "https://sport-shop-sooty.vercel.app/",
  },
];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(
    null
  );

  return (
    <section id="portfolio" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">
          My Portfolio
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-black p-6 rounded-lg shadow-lg border border-yellow-400 cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(250,204,21,0.3)]"
              whileHover={{ scale: 1.1 }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative w-full h-48 mb-4">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                {project.title}
              </h3>
              <p className="text-gray-400">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <Dialog
        open={!!selectedProject}
        onOpenChange={() => setSelectedProject(null)}
      >
        <DialogContent className="bg-gray-900 border border-yellow-400">
          {selectedProject && (
            <>
              <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <DialogHeader>
                <DialogTitle className="text-white text-2xl">
                  {selectedProject.title}
                </DialogTitle>
                <DialogDescription className="text-gray-400">
                  {selectedProject.description}
                </DialogDescription>
              </DialogHeader>
              <div className="mt-4 text-center">
                <Button asChild>
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white"
                  >
                    Visit Site
                  </a>
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Portfolio;
