"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Progress } from "@/components/ui/progress";

export function Skills() {
  const skillCategories = [
    {
      name: "Languages",
      skills: [
        { name: "Python", level: 90 },
        { name: "JavaScript/TypeScript", level: 85 },
        { name: "Java", level: 75 },
        { name: "C++", level: 70 }
      ]
    },
    {
      name: "Frontend",
      skills: [
        { name: "React.js", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "Tailwind CSS", level: 85 },
        { name: "HTML/CSS", level: 90 }
      ]
    },
    {
      name: "Backend",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 80 },
        { name: "FastAPI", level: 75 },
        { name: "Django", level: 70 }
      ]
    },
    {
      name: "AI/ML",
      skills: [
        { name: "TensorFlow", level: 80 },
        { name: "PyTorch", level: 75 },
        { name: "Scikit-learn", level: 85 },
        { name: "Natural Language Processing", level: 75 }
      ]
    },
    {
      name: "Databases",
      skills: [
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "Redis", level: 75 },
        { name: "MySQL", level: 80 }
      ]
    },
    {
      name: "Tools & Technologies",
      skills: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 80 },
        { name: "AWS", level: 75 },
        { name: "CI/CD", level: 80 }
      ]
    }
  ];

  return (
    <section id="skills" className="pt-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-8"
      >
        <h2 className="text-3xl font-bold text-center">Technical Skills</h2>

        <div className="max-w-4xl mx-auto">
          <Card className="p-6">
            <Accordion type="single" collapsible className="space-y-4">
              {skillCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <AccordionItem value={`item-${index}`} className="border rounded-lg px-4">
                    <AccordionTrigger className="text-lg font-medium">
                      {category.name}
                    </AccordionTrigger>
                    <AccordionContent className="space-y-4 pt-4">
                      {category.skills.map((skill, skillIndex) => (
                        <div key={skillIndex} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium">{skill.name}</span>
                            <span className="text-sm text-muted-foreground">{skill.level}%</span>
                          </div>
                          <Progress value={skill.level} className="h-2" />
                        </div>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </Card>
        </div>
      </motion.div>
    </section>
  );
}