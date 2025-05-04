
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface Skill {
  category: string;
  items: {
    name: string;
    proficiency: number;
  }[];
}

const Skills: React.FC = () => {
  const skills: Skill[] = [
    {
      category: "AI & Machine Learning",
      items: [
        { name: "Generative AI & LLM", proficiency: 95 },
        { name: "Deep Learning (CNN, RNN, LSTM)", proficiency: 90 },
        { name: "TensorFlow, PyTorch, Keras", proficiency: 85 },
        { name: "NLP & OCR", proficiency: 85 },
        { name: "Computer Vision", proficiency: 80 },
      ]
    },
    {
      category: "Technologies & Frameworks",
      items: [
        { name: "Python & Data Science Libraries", proficiency: 95 },
        { name: "Langchain, RAG Architecture", proficiency: 90 },
        { name: "AWS Services", proficiency: 85 },
        { name: "Docker, Kubernetes", proficiency: 80 },
        { name: "Flask, FastAPI, Django", proficiency: 75 },
      ]
    },
    {
      category: "Data Engineering",
      items: [
        { name: "Data Processing & Analysis", proficiency: 90 },
        { name: "SQL & NoSQL Databases", proficiency: 85 },
        { name: "Vector Databases (PGVector, FAISS)", proficiency: 85 },
        { name: "ETL & Data Pipelines", proficiency: 80 },
        { name: "Data Visualization", proficiency: 80 },
      ]
    }
  ];

  const techStack = [
    "Langchain", "OpenAI", "LlamaIndex", "RAG", "Huggingface", 
    "TensorFlow", "PyTorch", "Keras", "AWS Sagemaker",
    "Docker", "Kubernetes", "Serverless", "PostgreSQL", "DynamoDB",
    "PGVector", "Pinecone", "FAISS", "Flask", "FastAPI", 
    "YOLOv5 & YOLOv8", "Streamlit", "Elasticsearch"
  ];

  return (
    <section id="skills" className="py-20">
      <div className="section-container">
        <div className="flex flex-col items-center mb-12">
          <h2 className="section-title">Technical Skills</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-tech-purple to-tech-blue rounded-full mt-1"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <Card key={index} className="overflow-hidden animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="bg-gradient-to-r from-tech-purple to-tech-blue h-2"></div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6">{skillGroup.category}</h3>
                <div className="space-y-4">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.proficiency}%</span>
                      </div>
                      <div className="skill-bar">
                        <div className="skill-progress" style={{ width: `${skill.proficiency}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">Tech Stack</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech, index) => (
              <span 
                key={index} 
                className="px-4 py-2 bg-tech-lightPurple text-tech-purple rounded-full text-sm font-medium animate-fade-in hover:bg-tech-purple hover:text-white transition-colors"
                style={{animationDelay: `${index * 0.05}s`}}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
