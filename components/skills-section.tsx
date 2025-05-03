import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function SkillsSection() {
  const skillCategories = [
    {
      id: "ai-ml",
      name: "AI & ML",
      skills: [
        {
          name: "Generative AI & LLM",
          items: ["Langchain", "OpenAI models", "Llamaindex", "RAG", "Huggingface", "LLM Finetuning"],
        },
        { name: "Deep Learning", items: ["ANN", "CNN", "RNN", "LSTM", "GAN", "VAE", "YOLOv5", "YOLOv8"] },
        { name: "OCR & NLP", items: ["Tesseract", "Azure Document Intelligence", "NLTK", "SpaCy"] },
        {
          name: "Machine Learning",
          items: [
            "SVM",
            "KNN",
            "Decision Trees",
            "Ensemble Models",
            "Random Forest",
            "XGBoost",
            "K-means Clustering",
            "Anomaly Detection",
          ],
        },
        {
          name: "Frameworks",
          items: [
            "Tensorflow",
            "Keras",
            "Pytorch",
            "OpenCV",
            "Django",
            "Flask",
            "Fastapi",
            "Strapi",
            "Smartsheets",
            "Streamlit",
          ],
        },
      ],
    },
    {
      id: "data",
      name: "Data & Databases",
      skills: [
        {
          name: "Python Packages",
          items: [
            "Numpy",
            "Pandas",
            "Scikit-Learn",
            "Stats-models",
            "Matplotlib",
            "Seaborn",
            "NLTK",
            "Spacy",
            "Plotly",
          ],
        },
        { name: "Databases", items: ["Postgres", "DynamoDB", "MS SQL", "SQLite", "MySQL", "Elasticsearch"] },
        { name: "Vector Databases", items: ["PGVector", "Pinecone", "FAISS", "Chroma"] },
      ],
    },
    {
      id: "cloud",
      name: "Cloud & DevOps",
      skills: [
        {
          name: "AWS",
          items: [
            "Lambda",
            "S3",
            "DynamoDB",
            "Sagemaker",
            "Transcribe",
            "SES",
            "SNS",
            "Cloudwatch",
            "Cloudformation",
            "ECS",
            "EC2",
            "Amazon Connect",
            "RDS",
            "Quicksight",
            "Athena",
            "Lake formation",
            "AWS Glue",
          ],
        },
        { name: "DevOps", items: ["Kubernetes", "Docker", "Serverless", "Terraform", "CI/CD", "Argo CD"] },
        { name: "Monitoring", items: ["Datadog", "Elasticsearch", "Kibana", "Runscope"] },
        { name: "Messaging", items: ["Kafka", "RabbitMQ"] },
      ],
    },
  ]

  return (
    <Tabs defaultValue="ai-ml" className="w-full">
      <TabsList className="grid grid-cols-3 mb-8">
        {skillCategories.map((category) => (
          <TabsTrigger key={category.id} value={category.id}>
            {category.name}
          </TabsTrigger>
        ))}
      </TabsList>

      {skillCategories.map((category) => (
        <TabsContent key={category.id} value={category.id} className="space-y-8">
          {category.skills.map((skillGroup, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold mb-4">{skillGroup.name}</h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, i) => (
                  <Badge
                    key={i}
                    className="px-3 py-1 bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300 hover:bg-purple-200 dark:hover:bg-purple-900/50 transition-all duration-300 hover:scale-105 hover:shadow-sm"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </TabsContent>
      ))}
    </Tabs>
  )
}
