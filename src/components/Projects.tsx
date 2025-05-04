
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface Project {
  id: number;
  title: string;
  company: string;
  shortDescription: string;
  fullDescription: string[];
  tags: string[];
  link?: string;
}

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  const projects: Project[] = [
    {
      id: 1,
      title: "Terms & Conditions Copilot",
      company: "Applied AI Consulting",
      shortDescription: "AI-driven contract validation system using Azure Document Intelligence",
      fullDescription: [
        "Engineered an AI-driven contract validation system using Azure Document Intelligence for OCR and OpenAI embeddings via RAG architecture, reducing contract-payment mismatches by 80%.",
        "Automated anomaly detection by comparing extracted contract terms with Purchase Order (PO) data, improving compliance accuracy by 90%.",
        "Designed and implemented a PostgreSQL database with SQLModel and Alembic for versioning, ensuring scalable and efficient data storage.",
        "Integrated Azure AI Search for fast and precise document embeddings, enhancing query retrieval speed by 75%."
      ],
      tags: ["RAG", "OpenAI", "Azure Document Intelligence", "PostgreSQL"]
    },
    {
      id: 2,
      title: "Billing Validation AI",
      company: "Applied AI Consulting",
      shortDescription: "Smart system automating PO, delivery proof and timesheet validation",
      fullDescription: [
        "Developed a Smart Billing Validation system, automating PO, Proof of Delivery, Delivery Acceptance Certificates, and timesheet validation, reducing manual verification time by 90%.",
        "Integrated Azure Document Intelligence for OCR-based automated signature detection, improving document verification accuracy by 95%.",
        "Optimized billing workflows, cutting validation errors by 90% and enhancing processing efficiency.",
        "Collaborated with cross-functional teams to ensure seamless integration and compliance with business requirements."
      ],
      tags: ["Azure Intelligence", "OCR", "Workflow Automation", "AI"]
    },
    {
      id: 3,
      title: "Defect Detection System",
      company: "Applied AI Consulting",
      shortDescription: "AI-driven detection system for manufacturing belts using YOLOv5 & YOLOv8",
      fullDescription: [
        "Developed an automated defect detection system for manufacturing belts using YOLOv5 & YOLOv8.",
        "Implemented image preprocessing techniques such as noise reduction, skew correction, and contrast adjustment, enhancing defect visibility in low-quality scans.",
        "Trained custom object detection models using PyTorch and TensorFlow, enabling precise defect classification based on texture and shape anomalies.",
        "Optimized the OCR pipeline using Tesseract, improving defect-related text extraction for inspection reports."
      ],
      tags: ["YOLOv5", "YOLOv8", "Computer Vision", "PyTorch", "TensorFlow"]
    },
    {
      id: 4,
      title: "QualityX",
      company: "Applied AI Consulting",
      shortDescription: "QA Chatbot integrating with existing QA tools, reducing response time by 40%",
      fullDescription: [
        "Architect and develop the QualityX Chatbot using LangChain, seamlessly integrating with existing QA tools, resulting in a 40% reduction in average query response time.",
        "Develop a robust system for user contributions to the knowledge base, ensuring quality and relevance.",
        "Implement secure storage for user interaction history, facilitating learning from past queries.",
        "Design an intuitive onboarding process and create interactive tutorials to enhance user experience, leading to a 50% increase in user engagement within the first month of launch.",
        "Monitor user feedback and analytics to enhance Chatbot performance and user satisfaction."
      ],
      tags: ["LangChain", "RAG", "ChatBot", "QA Tools Integration"],
      link: "qualityx.io"
    },
    {
      id: 5,
      title: "AiTest",
      company: "Applied AI Consulting",
      shortDescription: "AI Model Testing platform with Synthetic Data Generation",
      fullDescription: [
        "Spearheaded the design and implementation of the synthetic data generation feature, resulting in a 30% increase in data synthesis efficiency and a 50% reduction in time required for model testing setup.",
        "Integrated the platform with the ability to accept both model files and model endpoints, providing users with 70% more flexibility in testing models across various environments.",
        "Implemented various testing modules, resulting in a 20% improvement in overall model testing coverage and a 40% increase in the detection of potential model vulnerabilities.",
        "Developed data analysis tools to generate comprehensive graphs and visualizations for each test, providing users with actionable insights into their model's performance and behavior."
      ],
      tags: ["AI Testing", "Synthetic Data", "Python", "Data Visualization"]
    },
    {
      id: 6,
      title: "Promantra",
      company: "Applied AI Consulting",
      shortDescription: "IVR call automation system reducing claim status retrieval time by 50%",
      fullDescription: [
        "Developed and deployed an IVR call automation system for Promantra, reducing claim status retrieval time by 50%.",
        "Integrated AWS Transcribe for call audio transcription, achieving an accuracy rate of 95% in converting audio to text.",
        "Implemented a dynamic dialing mechanism for accurate data retrieval and collaborated on system design and integration."
      ],
      tags: ["AWS Transcribe", "IVR Automation", "OpenAI"],
      link: "promantra.us"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="section-container">
        <div className="flex flex-col items-center mb-12">
          <h2 className="section-title">Featured Projects</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-tech-purple to-tech-blue rounded-full mt-1"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card 
              key={project.id}
              className="overflow-hidden group hover:shadow-lg transition-shadow cursor-pointer animate-fade-in"
              onClick={() => setSelectedProject(project)}
              style={{animationDelay: `${(project.id - 1) * 0.1}s`}}
            >
              <div className="h-2 bg-gradient-to-r from-tech-purple to-tech-blue group-hover:h-3 transition-all"></div>
              <CardContent className="p-6">
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                    <p className="text-sm text-tech-purple mb-4">{project.company}</p>
                    <p className="text-sm mb-4">{project.shortDescription}</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.slice(0, 3).map((tag, idx) => (
                      <Badge key={idx} variant="secondary" className="bg-tech-lightPurple text-tech-purple">
                        {tag}
                      </Badge>
                    ))}
                    {project.tags.length > 3 && (
                      <Badge variant="outline">+{project.tags.length - 3}</Badge>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
          {selectedProject && (
            <DialogContent className="max-w-2xl overflow-y-auto max-h-[90vh]">
              <DialogHeader>
                <DialogTitle className="text-2xl">{selectedProject.title}</DialogTitle>
                <DialogDescription className="text-tech-purple">{selectedProject.company}</DialogDescription>
              </DialogHeader>
              
              <div className="mt-4">
                <h4 className="text-lg font-semibold mb-2">Project Description</h4>
                <ul className="list-disc pl-5 space-y-2">
                  {selectedProject.fullDescription.map((desc, idx) => (
                    <li key={idx}>{desc}</li>
                  ))}
                </ul>
                
                {selectedProject.link && (
                  <div className="mt-4">
                    <h4 className="text-lg font-semibold mb-2">Project Link</h4>
                    <a 
                      href={`https://${selectedProject.link}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-tech-purple hover:underline"
                    >
                      {selectedProject.link}
                    </a>
                  </div>
                )}
                
                <div className="mt-4">
                  <h4 className="text-lg font-semibold mb-2">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag, idx) => (
                      <Badge key={idx} variant="secondary" className="bg-tech-lightPurple text-tech-purple">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </DialogContent>
          )}
        </Dialog>
      </div>
    </section>
  );
};

export default Projects;
