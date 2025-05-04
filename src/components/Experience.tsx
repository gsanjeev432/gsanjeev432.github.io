
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase } from 'lucide-react';

interface JobExperience {
  company: string;
  position: string;
  period: string;
  location: string;
  responsibilities: string[];
}

const Experience: React.FC = () => {
  const experiences: JobExperience[] = [
    {
      company: "Applied AI Consulting",
      position: "AI/ML/LLM Engineer",
      period: "August 2019 - Present",
      location: "Pune",
      responsibilities: [
        "Built a Specialized AI chatbot tailored for the QA community using Generative AI, Langchain, RAG, and PGVector.",
        "Designed an AI/ML Model testing platform with Synthetic Data Generation feature for testing and analyzing ML models.",
        "Debugged and implemented fixes for Data Analytics Platform using various technologies like Docker, Kubernetes, and Elasticsearch.",
        "Developed IVR call automation system using Plivo and custom trained AI models reducing call handling time by 50%.",
        "Developed in-house SaaS product Marxeed using Python, Serverless framework and various AWS services.",
        "Designed architecture for MS SQL Server to Postgres DB migration with 99% query conversion accuracy."
      ]
    },
    {
      company: "Cognizant",
      position: "Programming Analyst Trainee",
      period: "August 2018 - July 2019",
      location: "Pune",
      responsibilities: [
        "Engineered a Python equivalent BDD testing framework for CRAFT, initially developed in JAVA.",
        "Automated script generation in Cucumber, decreasing test case development time by 60%.",
        "Conducted training sessions for team members on using the new testing framework.",
        "Integrated additional functionalities using Nightwatch.js, resulting in 30% reduction in test execution time."
      ]
    },
    {
      company: "UshaiTechLabs Pvt Ltd",
      position: "ML Engineer",
      period: "May 2018 - August 2018",
      location: "Pune",
      responsibilities: [
        "Provided mentorship to over 50 students in Machine Learning and Computer Vision projects.",
        "Applied TensorFlow, PyTorch, and Scikit-learn to develop over 30 projects covering various ML techniques.",
        "Led projects in NLP, Speech recognition, Object detection, Face recognition, and Sentiment analysis.",
        "Oversaw the entire ML project lifecycle from EDA to model deployment."
      ]
    }
  ];

  const certifications = [
    "AWS Certified Developer - Associate",
    "AWS Machine Learning - Specialty",
    "AWS Machine Learning Foundations",
    "Introduction to Self-driving cars",
    "Exploratory Data Analysis",
    "Improving Deep Neural Networks",
    "Neural Networks and Deep Learning"
  ];

  return (
    <section id="experience" className="py-20 bg-tech-gray/20">
      <div className="section-container">
        <div className="flex flex-col items-center mb-12">
          <h2 className="section-title">Professional Experience</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-tech-purple to-tech-blue rounded-full mt-1"></div>
        </div>

        <div className="relative">
          {/* Timeline connector */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-1 bg-tech-lightPurple z-0 hidden md:block"></div>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative z-10 animate-fade-in" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -mt-2">
                  <div className="w-10 h-10 rounded-full bg-tech-purple flex items-center justify-center">
                    <Briefcase className="text-white" size={18} />
                  </div>
                </div>
                
                <Card className={`md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'} shadow-lg border-tech-purple/20`}>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-3">
                      <div>
                        <h3 className="text-xl font-bold">{exp.position}</h3>
                        <p className="text-tech-purple font-semibold">{exp.company}</p>
                      </div>
                      <div className="text-right">
                        <Badge variant="outline" className="mb-1">{exp.period}</Badge>
                        <p className="text-sm text-muted-foreground">{exp.location}</p>
                      </div>
                    </div>
                    <ul className="list-disc pl-5 space-y-2 mt-4">
                      {exp.responsibilities.map((resp, rIdx) => (
                        <li key={rIdx} className="text-sm">{resp}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-8">Certifications</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {certifications.map((cert, index) => (
              <Card key={index} className="animate-fade-in hover:shadow-md transition-shadow" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-4 flex items-center">
                  <div className="w-8 h-8 rounded-full bg-tech-lightPurple flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-tech-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <p className="text-sm">{cert}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
