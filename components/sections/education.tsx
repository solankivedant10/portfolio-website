"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, BookOpen } from "lucide-react";

export function Education() {
  const courses = [
    "Advanced Algorithms",
    "Machine Learning",
    "Cloud Computing",
    "Database Management",
    "Software Engineering",
    "Web Development"
  ];

  return (
    <section id="education" className="pt-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-8"
      >
        <h2 className="text-3xl font-bold text-center">Education</h2>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-6 space-y-6">
              <div className="flex items-start justify-between flex-wrap gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="h-5 w-5" />
                    <h3 className="text-xl font-semibold">
                      MBIT College, CVM University
                    </h3>
                  </div>
                  <p className="text-muted-foreground">
                    Bachelor of Engineering in Information Technology
                  </p>
                  <p className="text-muted-foreground">
                    Anand, VV Nagar
                  </p>
                </div>
                <Badge variant="secondary">Sep 2021 - May 2025</Badge>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <p className="font-medium">
                    SEM 7 SGPA: 8.27
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-primary" />
                    <h4 className="font-medium">Key Coursework</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {courses.map((course, index) => (
                      <Badge key={index} variant="outline">
                        {course}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}