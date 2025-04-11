"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, FileText } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />

      <div className="relative z-10 text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-6">
            <img
              src="https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=400&h=400&fit=crop"
              alt="Batman Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Vedant Solanki
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground">
            Full Stack Developer | AI Enthusiast
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Button variant="default" size="lg">
            <Mail className="mr-2 h-4 w-4" />
            Contact Me
          </Button>
          <Button variant="outline" size="lg">
            <FileText className="mr-2 h-4 w-4" />
            Resume
          </Button>
          <Button variant="outline" size="lg">
            <Github className="mr-2 h-4 w-4" />
            GitHub
          </Button>
          <Button variant="outline" size="lg">
            <Linkedin className="mr-2 h-4 w-4" />
            LinkedIn
          </Button>
        </motion.div>
      </div>
    </section>
  );
}