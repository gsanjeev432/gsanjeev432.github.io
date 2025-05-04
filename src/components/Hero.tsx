
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-40 pb-20 overflow-hidden relative">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in-right">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Hi, I'm <span className="gradient-text">Sanjiv Gupta</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground">
              AI/ML/LLM Engineer & Data Engineer
            </h2>
            <p className="text-lg text-muted-foreground">
              Specialized in building intelligent systems with Generative AI,
              Machine Learning, and Cloud technologies.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild className="rounded-full transition-transform hover:scale-105 duration-300">
                <a href="#contact">
                  Contact Me <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" className="rounded-full transition-transform hover:scale-105 duration-300">
                <a href="#projects">
                  View Projects
                </a>
              </Button>
            </div>
            <div className="flex gap-4 pt-2">
              <a 
                href="https://www.linkedin.com/in/sanjiv-gupta" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-tech-purple transition-colors p-2 hover:bg-tech-lightPurple rounded-full hover:scale-110 transform transition-transform duration-300"
                aria-label="LinkedIn Profile"
              >
                <Linkedin />
              </a>
              <a 
                href="https://github.com/gsanjeev432" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-tech-purple transition-colors p-2 hover:bg-tech-lightPurple rounded-full hover:scale-110 transform transition-transform duration-300"
                aria-label="GitHub Profile"
              >
                <Github />
              </a>
              <a 
                href="mailto:gsanjeev432@gmail.com" 
                className="hover:text-tech-purple transition-colors p-2 hover:bg-tech-lightPurple rounded-full hover:scale-110 transform transition-transform duration-300"
                aria-label="Email Contact"
              >
                <Mail />
              </a>
            </div>
          </div>
          
          <div className="relative animate-fade-in-left">
            <div className="bg-gradient-to-br from-tech-purple to-tech-blue p-1 rounded-2xl rotate-3 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-rotate-1 transform">
              <div className="bg-white dark:bg-tech-dark p-6 rounded-2xl -rotate-3 hover:rotate-1 transition-transform duration-500">
                <div className="aspect-square relative overflow-hidden rounded-xl">
                  <Avatar className="w-full h-full rounded-xl">
                    <AvatarImage 
                      src="/lovable-uploads/00d9ca90-3588-4e59-a8d2-a4180666ea6a.png" 
                      alt="Sanjiv Gupta" 
                      className="object-cover"
                    />
                    <AvatarFallback className="text-6xl font-bold text-tech-purple">SG</AvatarFallback>
                  </Avatar>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-tech-lightPurple rounded-full filter blur-xl opacity-70 animate-float"></div>
            <div className="absolute -top-10 -right-10 w-16 h-16 bg-tech-blue rounded-full filter blur-xl opacity-60 animate-float" style={{animationDelay: '1s'}}></div>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-40 right-0 w-72 h-72 bg-tech-purple rounded-full filter blur-[120px] opacity-20"></div>
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-tech-blue rounded-full filter blur-[100px] opacity-20"></div>
    </section>
  );
};

export default Hero;
