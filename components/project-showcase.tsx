import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ProjectShowcase() {
  const projects = [
    {
      title: "Terms & Conditions Copilot",
      description:
        "AI-driven contract validation system using Azure Document Intelligence for OCR and OpenAI embeddings via RAG architecture.",
      image: "/images/terms-copilot.png",
      tags: ["RAG", "OpenAI", "Azure Document Intelligence", "PostgreSQL"],
      highlights: [
        "Reduced contract-payment mismatches by 80%",
        "Improved compliance accuracy by 90%",
        "Enhanced query retrieval speed by 75%",
      ],
      link: "#",
    },
    {
      title: "Billing Validation AI",
      description: "Smart Billing Validation system automating PO, Proof of Delivery, and timesheet validation.",
      image: "/images/billing-validation.png",
      tags: ["Azure Document Intelligence", "OCR", "AI", "Workflow Automation"],
      highlights: [
        "Reduced manual verification time by 90%",
        "Improved document verification accuracy by 95%",
        "Cut validation errors by 90%",
      ],
      link: "#",
    },
    {
      title: "Defect Detection System",
      description: "Automated defect detection system for manufacturing belts using YOLOv5 & YOLOv8.",
      image: "/images/defect-detection.png",
      tags: ["YOLOv5", "YOLOv8", "PyTorch", "TensorFlow", "Computer Vision"],
      highlights: [
        "Enhanced defect visibility in low-quality scans",
        "Precise defect classification based on texture and shape anomalies",
        "Improved defect-related text extraction for inspection reports",
      ],
      link: "#",
    },
    {
      title: "QualityX",
      description: "QA community chatbot using Generative AI, Langchain, RAG, and PGVector.",
      image: "/images/qualityx.png",
      tags: ["LangChain", "RAG", "PGVector", "LLM", "Generative AI"],
      highlights: [
        "40% reduction in average query response time",
        "50% increase in user engagement",
        "Secure storage for user interaction history",
      ],
      link: "https://qualityx.io/",
    },
    {
      title: "AiTest: AI Model Testing",
      description: "AI/ML Model testing platform with Synthetic Data Generation feature.",
      image: "/images/aitest.png",
      tags: ["Python", "OpenAI", "DynamoDB", "Data Augmentation"],
      highlights: [
        "30% increase in data synthesis efficiency",
        "50% reduction in model testing setup time",
        "20% improvement in model testing coverage",
      ],
      link: "https://qualityx.io/aitest/",
    },
    {
      title: "Promantra IVR System",
      description: "IVR call automation system using Plivo and custom trained AI models.",
      image: "/images/promantra.png",
      tags: ["AWS Transcribe", "IVR", "AI Models", "Plivo"],
      highlights: [
        "Reduced claim status retrieval time by 50%",
        "95% accuracy in audio transcription",
        "Dynamic dialing mechanism for accurate data retrieval",
      ],
      link: "https://promantra.us/",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <Card
          key={index}
          className="flex flex-col h-full overflow-hidden group border border-slate-200 dark:border-slate-800 hover:border-purple-300 dark:hover:border-purple-700 transition-colors duration-300"
        >
          <div className="relative h-48 overflow-hidden">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-4">
              <h3 className="text-white text-xl font-bold mb-2 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                {project.title}
              </h3>
              <div className="flex gap-2 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                {project.link !== "#" ? (
                  <Button size="sm" variant="default" asChild className="bg-purple-600 hover:bg-purple-700">
                    <Link href={project.link} target="_blank" className="flex items-center gap-1">
                      Visit <ExternalLink size={14} />
                    </Link>
                  </Button>
                ) : (
                  <Button size="sm" variant="default" className="bg-purple-600 hover:bg-purple-700">
                    Details <ArrowRight size={14} className="ml-1" />
                  </Button>
                )}
              </div>
            </div>
          </div>
          <CardHeader>
            <CardTitle>{project.title}</CardTitle>
            <CardDescription>{project.description}</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, i) => (
                <Badge
                  key={i}
                  variant="secondary"
                  className="bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300 hover:bg-purple-200 dark:hover:bg-purple-900/50 transition-colors duration-300"
                >
                  {tag}
                </Badge>
              ))}
            </div>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              {project.highlights.map((highlight, i) => (
                <li key={i}>{highlight}</li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            {project.link !== "#" ? (
              <Button
                variant="outline"
                asChild
                className="w-full group-hover:border-purple-400 group-hover:text-purple-600 dark:group-hover:border-purple-700 dark:group-hover:text-purple-400 transition-colors duration-300"
              >
                <Link href={project.link} target="_blank" className="flex items-center justify-center gap-2">
                  Visit Project <ExternalLink size={16} />
                </Link>
              </Button>
            ) : (
              <Button
                variant="outline"
                className="w-full group-hover:border-purple-400 group-hover:text-purple-600 dark:group-hover:border-purple-700 dark:group-hover:text-purple-400 transition-colors duration-300"
              >
                View Details{" "}
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            )}
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
