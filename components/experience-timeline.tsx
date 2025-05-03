import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, Building } from "lucide-react"

export default function ExperienceTimeline() {
  const experiences = [
    {
      title: "AI/ML/LLM Engineer",
      company: "Applied AI Consulting",
      period: "August 2019 - Present",
      location: "Pune",
      description: [
        "Built a Specialized AI chatbot tailored for the QA community using Generative AI, Langchain, RAG, PGVector, Postgres DB, LLM models to facilitate knowledge sharing.",
        "Designed and Developed an innovative AI/ML Model testing platform with Synthetic Data Generation feature to test, analyze, and interpret ML models using Python, Data Augmention, DynamoDB, and OpenAI API.",
        "Debugged and implemented fixes for Data Analytics Platform using Python, Django, Docker, Kubernetes, Facebook Graph API, Twitter API, Datadog, Runscope, Argo CD, Elasticsearch, Kibana, Kafka, RabbitMQ ensuring data integrity and optimizing performance.",
        "Developed IVR call automation system using Plivo and custom trained AI models reducing call handling time by 50%, integrated AWS Transcribe with 98% transcription accuracy, and utilized OpenAI's AI language model for 90% accurate information extraction.",
      ],
    },
    {
      title: "Programming Analyst Trainee",
      company: "Cognizant",
      period: "August 2018 - July 2019",
      location: "Pune",
      description: [
        "Engineered a Python equivalent BDD testing framework for CRAFT, initially developed in JAVA, enhancing testing efficiency and flexibility.",
        "Automated script generation in Cucumber, decreasing test case development time by 60% and ensuring consistency and accuracy in testing procedures.",
        "Conducted training sessions for team members on using the new testing framework, ensuring smooth adoption and transition.",
        "Integrated additional functionalities into the testing framework using Nightwatch.js, such as parallel test execution and reporting, resulting in a 30% reduction in test execution time.",
      ],
    },
    {
      title: "ML Engineer",
      company: "UshaiTechLabs Pvt Ltd",
      period: "May 2018 - August 2018",
      location: "Pune",
      description: [
        "Provided mentorship and guidance to over 50 Bachelors, Masters and Ph.D. students in developing projects related to Machine Learning and Computer Vision using Python and MATLAB.",
        "Applied TensorFlow, PyTorch, and Scikit-learn to develop over 30 projects encompassing a wide range of machine learning techniques, including CNNs, RNNs, LSTMs, Classification, Regression, and Price prediction.",
        "Led projects covering diverse areas such as NLP, Speech recognition, Object detection and Segmentation, Face recognition, and Sentiment analysis, providing students with exposure to various domains within machine learning and computer vision.",
      ],
    },
  ]

  return (
    <div className="space-y-8">
      {experiences.map((exp, index) => (
        <Card key={index} className="border-l-4 border-l-purple-600">
          <CardHeader>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
              <div>
                <CardTitle className="text-xl">{exp.title}</CardTitle>
                <CardDescription className="flex items-center gap-2 mt-1">
                  <Building size={16} />
                  {exp.company}
                </CardDescription>
              </div>
              <div className="flex flex-col sm:flex-row gap-2">
                <Badge variant="outline" className="flex items-center gap-1 whitespace-nowrap">
                  <CalendarDays size={14} />
                  {exp.period}
                </Badge>
                <Badge variant="outline">{exp.location}</Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              {exp.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
