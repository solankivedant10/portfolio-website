"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function Experience() {
  const experiences = [
    {
      company: "Walmart USA",
      role: "Software Developer Intern",
      period: "April 2025",
      location: "USA Remote",
      description: "",
      achievements: [
        "Developed a novel version of a heap data structure in Java for Walmart's shipping department, showcasing strong problem-solving and algorithmic skills.",
        "Designed a UML class diagram for a data processor, considering different operating modes and database connections.",
        "Created an entity relationship diagram to design a new database accounting for all requirements provided by Walmart's pet department."
      ],
      technologies: ["Java", "UML", "Database Design", "Algorithms"]
    },
    {
      company: "Tech Elecon",
      role: "Data Science Intern",
      period: "May 2024 - July 2024",
      location: "Anand, VV Nagar",
      description: "",
      achievements: [
        "Developed a Signature Verification System using the YOLO Algorithm, achieving 95%+ accuracy.",
        "Performed Exploratory Data Analysis (EDA) on various datasets to identify patterns and improve model performance.",
        "Designed and optimized data extraction and transformation pipelines, improving processing efficiency by 30%."
      ],
      technologies: ["Python", "YOLO", "Data Analysis", "Machine Learning"]
    }
  ];

  return (
    <section id="experience" className="pt-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-8"
      >
        <h2 className="text-3xl font-bold text-center">Professional Experience</h2>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="p-6 space-y-4">
                <div className="flex flex-wrap justify-between items-start gap-4">
                  <div>
                    <h3 className="text-xl font-semibold">{exp.company}</h3>
                    <p className="text-lg text-muted-foreground">{exp.role}</p>
                    <p className="text-sm text-muted-foreground">{exp.location}</p>
                  </div>
                  <Badge variant="secondary">{exp.period}</Badge>
                </div>

                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <Badge key={i} variant="outline">{tech}</Badge>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}