
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-tech-gray/20 relative">
      <div className="section-container">
        <div className="flex flex-col items-center mb-12">
          <h2 className="section-title">About Me</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-tech-purple to-tech-blue rounded-full mt-1"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 space-y-6 animate-fade-in">
            <p className="text-lg">
              An experienced AI/ML/LLM Engineer with 6+ years of expertise in building intelligent solutions 
              across various domains. My specialization includes Generative AI, LLM fine-tuning, and implementing RAG architectures.
            </p>
            
            <p className="text-lg">
              I've successfully developed AI-driven systems for{" "}
              <span className="text-tech-purple font-medium hover:underline cursor-pointer link-highlight">
                contract validation
              </span>, {" "}
              <span className="text-tech-purple font-medium hover:underline cursor-pointer link-highlight">
                billing automation
              </span>, {" "}
              <HoverCard>
                <HoverCardTrigger asChild>
                  <span className="text-tech-purple font-medium hover:underline cursor-pointer">
                    defect detection in manufacturing
                  </span>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold">Defect Detection System</h4>
                    <p className="text-xs">
                      Built with YOLOv5 & YOLOv8, enhancing anomaly detection in manufacturing belts through custom object detection models.
                    </p>
                  </div>
                </HoverCardContent>
              </HoverCard>, and{" "}
              <span className="text-tech-purple font-medium hover:underline cursor-pointer link-highlight">
                intelligent chatbots
              </span>. My technical expertise spans 
              Machine Learning frameworks, Cloud technologies, and modern development practices.
            </p>
            
            <p className="text-lg">
              Based in <a href="https://goo.gl/maps/UBpgNAHGLgoa7Wz66" target="_blank" rel="noopener noreferrer" className="text-tech-purple hover:underline link-highlight">Pune, Maharashtra, India</a>, I'm passionate about leveraging cutting-edge AI technologies 
              to solve complex business challenges and drive innovation.
            </p>
            
            <div className="pt-4">
              <Button asChild className="rounded-full hover-scale">
                <a href="/sanjiv_gupta_resume.pdf" download>
                  <Download className="mr-2 h-4 w-4" /> Download Resume
                </a>
              </Button>
            </div>
          </div>
          
          <div className="lg:col-span-4 animate-fade-in">
            <div className="bg-gradient-to-br from-tech-purple to-tech-blue p-6 rounded-xl text-white h-full hover-glow hover-lift">
              <h3 className="text-xl font-bold mb-4">Quick Info</h3>
              
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-white/80">Location</h4>
                  <p>Pune, Maharashtra, India</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-white/80">Email</h4>
                  <a href="mailto:gsanjeev432@gmail.com" className="hover:text-white/90 transition-colors">
                    gsanjeev432@gmail.com
                  </a>
                </div>
                
                <div>
                  <h4 className="font-semibold text-white/80">Phone</h4>
                  <a href="tel:+919762767218" className="hover:text-white/90 transition-colors">
                    +91 97627 67218
                  </a>
                </div>
                
                <div>
                  <h4 className="font-semibold text-white/80">LinkedIn</h4>
                  <a 
                    href="https://www.linkedin.com/in/sanjiv-gupta" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-white/90 transition-colors"
                  >
                    in/sanjiv-gupta
                  </a>
                </div>
                
                <div>
                  <h4 className="font-semibold text-white/80">Portfolio</h4>
                  <a 
                    href="https://gsanjeev432.github.io" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-white/90 transition-colors"
                  >
                    gsanjeev432.github.io
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
