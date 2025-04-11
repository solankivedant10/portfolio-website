"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "SensAI - AI Career Coach",
      description: "A full-stack career coaching web application designed to empower users with personalized, data-driven career insights and tools.",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop",
      technologies: ["Next.js", "Shadcn UI", "Tailwind CSS", "Gemini API", "Prisma", "Clerk", "Neon DB", "Inngest Dev Server", "Vercel"],
      features: [
        "Industry Insights: Regularly updated trends and data",
        "Resume & Cover Letter Builders: Automated tools",
        "Interview Prep: Interactive quizzes with performance analysis",
        "Personalized career recommendations"
      ],
      demo: "https://sensai-jet-delta.vercel.app/"
    },
    {
      title: "AI Desktop Assistant",
      description: "Voice-controlled desktop assistant with natural language processing",
      image: "https://images.unsplash.com/photo-1593642532744-d377ab507dc8?w=800&h=400&fit=crop",
      technologies: ["Python", "PyQt", "OpenAI", "Speech Recognition"],
      features: [
        "Voice command recognition",
        "Task automation",
        "Calendar integration",
        "Email management"
      ],
      demo: "https://tubular-tapioca-b5fce0.netlify.app/"
    },
    {
      title: "IPL Match Winner Prediction Model",
      description: "Machine learning model for predicting IPL match outcomes",
      image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=800&h=400&fit=crop",
      technologies: ["Python", "Scikit-learn", "Pandas", "Streamlit", "MongoDB"],
      features: [
        "Historical data analysis",
        "Real-time predictions",
        "Player performance tracking",
        "Interactive visualizations"
      ],
      github: "https://github.com/solankivedant10/IPL-win_predictor"
    }
  ];

  return (
    <section id="projects" className="pt-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-8"
      >
        <h2 className="text-3xl font-bold text-center">Featured Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="overflow-hidden h-full flex flex-col">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 space-y-4 flex-1">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary">{tech}</Badge>
                    ))}
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-medium">Key Features:</h4>
                    <ul className="list-disc list-inside text-sm text-muted-foreground">
                      {project.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-3 mt-4">
                    {project.github && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </a>
                      </Button>
                    )}
                    {project.demo && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}