import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award } from "lucide-react"

export default function EducationSection() {
  const education = [
    {
      degree: "Bachelor of Engineering in Electronics and Telecommunications",
      institution: "MIT College of Engineering",
      location: "Pune",
      year: "2018",
    },
    {
      degree: "Diploma in Electronics and Telecommunications",
      institution: "Cusrow Wadia Institute of Technology",
      location: "Pune",
      year: "2015",
    },
    {
      degree: "SSC",
      institution: "Indian Education Society School",
      location: "Pune",
      year: "2012",
    },
  ]

  const certifications = [
    {
      name: "AWS Certified Developer - Associate",
      issuer: "AWS",
    },
    {
      name: "AWS Machine Learning - Speciality",
      issuer: "AWS",
    },
    {
      name: "AWS Machine Learning Foundations",
      issuer: "Udacity",
    },
    {
      name: "Introduction to Self-driving cars",
      issuer: "Coursera",
    },
    {
      name: "Exploratory Data Analysis",
      issuer: "Coursera",
    },
    {
      name: "Improving Deep Neural Networks",
      issuer: "Coursera",
    },
    {
      name: "Neural Networks and Deep Learning",
      issuer: "Coursera",
    },
  ]

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div>
        <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
          <GraduationCap className="text-purple-600" />
          Education
        </h3>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{edu.degree}</CardTitle>
                <CardDescription className="flex flex-col sm:flex-row sm:items-center gap-2">
                  <span>
                    {edu.institution}, {edu.location}
                  </span>
                  <Badge className="sm:ml-auto whitespace-nowrap">{edu.year}</Badge>
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
          <Award className="text-purple-600" />
          Certifications
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className="bg-gradient-to-br from-purple-50 to-slate-50 dark:from-purple-950/20 dark:to-slate-900/50 border border-purple-100 dark:border-purple-900/50"
            >
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">{cert.name}</CardTitle>
                <CardDescription>{cert.issuer}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
