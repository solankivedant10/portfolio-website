"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function About() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <section id="about" className="pt-20">
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={{
          initial: { opacity: 0 },
          animate: { opacity: 1, transition: { staggerChildren: 0.2 } }
        }}
        className="space-y-8"
      >
        <motion.h2 variants={fadeIn} className="text-3xl font-bold text-center">
          About Me
        </motion.h2>

        <motion.div variants={fadeIn} className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-muted-foreground">
            I am a passionate Full Stack Developer and AI enthusiast with a strong foundation in modern web technologies
            and machine learning. Currently pursuing my final year in Information Technology Engineering, I combine technical expertise
            with creative problem-solving to build innovative solutions.
          </p>
        </motion.div>

        <motion.div variants={fadeIn} className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Card className="p-6 space-y-4">
            <h3 className="text-xl font-semibold">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <a href="mailto:vedants1084@gmail.com" className="hover:text-primary">
                  vedants1084@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-muted-foreground" />
                <a href="tel:+919484697392" className="hover:text-primary">
                  +91 9484697392
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-muted-foreground" />
                <span>Gujarat, India</span>
              </div>
            </div>
          </Card>

          <Card className="p-6 space-y-4">
            <h3 className="text-xl font-semibold">Professional Links</h3>
            <div className="space-y-3">
              <Button variant="outline" className="w-full justify-start" asChild>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn Profile
                </a>
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Mail className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </div>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  );
}