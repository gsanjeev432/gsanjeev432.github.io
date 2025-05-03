import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import ExperienceTimeline from "@/components/experience-timeline"
import ProjectShowcase from "@/components/project-showcase"
import SkillsSection from "@/components/skills-section"
import EducationSection from "@/components/education-section"
import ContactSection from "@/components/contact-section"
import ThemeToggle from "@/components/theme-toggle"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-950">
      {/* Navigation */}
      <nav className="container mx-auto py-6 px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center text-white font-bold text-lg">
            SG
          </div>
          <span className="font-bold text-xl">Sanjiv Gupta</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex gap-6">
            <Link href="#about" className="hover:text-purple-600 transition-colors">
              About
            </Link>
            <Link href="#experience" className="hover:text-purple-600 transition-colors">
              Experience
            </Link>
            <Link href="#projects" className="hover:text-purple-600 transition-colors">
              Projects
            </Link>
            <Link href="#skills" className="hover:text-purple-600 transition-colors">
              Skills
            </Link>
            <Link href="#contact" className="hover:text-purple-600 transition-colors">
              Contact
            </Link>
          </div>
          <ThemeToggle />
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-6">
          <div className="space-y-2">
            <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">
              Sanjiv Gupta
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold">AI/ML/LLM Engineer</h2>
          </div>

          <p className="text-lg text-slate-700 dark:text-slate-300 max-w-2xl">
            Experienced AI engineer with expertise in Generative AI, LLMs, and RAG architectures. Building intelligent
            solutions that solve real-world problems.
          </p>

          <div className="flex flex-wrap gap-3">
            <Badge variant="outline" className="flex items-center gap-1 px-3 py-1">
              <MapPin size={14} /> Pune, Maharashtra, India
            </Badge>
            <Badge variant="outline" className="flex items-center gap-1 px-3 py-1">
              <Mail size={14} /> gsanjeev432@gmail.com
            </Badge>
            <Badge variant="outline" className="flex items-center gap-1 px-3 py-1">
              <Phone size={14} /> +91 97627 67218
            </Badge>
          </div>

          <div className="flex gap-4">
            <Button asChild>
              <Link href="#contact">Contact Me</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="#projects">View Projects</Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://linkedin.com/in/sanjiv-gupta" target="_blank">
                <Linkedin />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com/gsanjeev432" target="_blank">
                <Github />
              </Link>
            </Button>
          </div>
        </div>

        <div className="flex-1 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 group">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-600 to-blue-500 blur-xl opacity-20 group-hover:opacity-40 group-hover:blur-2xl transition-all duration-700 animate-pulse-glow"></div>
            <div className="relative h-full w-full rounded-full border-2 border-purple-500 overflow-hidden">
              <Image
                src="/images/profile.jpeg"
                alt="Sanjiv Gupta"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
            <span className="h-8 w-1 bg-purple-600 rounded-full"></span>
            About Me
          </h2>

          <div className="space-y-6 text-lg">
            <p>
              I'm an AI/ML/LLM Engineer with 6+ years of experience in building intelligent systems. My expertise spans
              across Generative AI, LLMs, RAG architectures, and deep learning frameworks.
            </p>
            <p>
              I've developed solutions like Terms & Conditions Copilot, Billing Validation AI, and Defect Detection
              Systems that leverage cutting-edge AI technologies to solve complex business problems.
            </p>
            <p>
              With a strong background in data engineering on AWS and proficiency in ML frameworks like TensorFlow,
              PyTorch, and scikit-learn, I bring a comprehensive skill set to any AI project.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="hover-lift">
              <CardHeader className="pb-2">
                <CardTitle className="text-4xl font-bold text-purple-600">6+</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Years of ML & Deep Learning Experience</p>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader className="pb-2">
                <CardTitle className="text-4xl font-bold text-purple-600">5+</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Years of Data Engineering on AWS</p>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader className="pb-2">
                <CardTitle className="text-4xl font-bold text-purple-600">30+</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Projects Completed</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="bg-slate-100 dark:bg-slate-800/50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-2">
            <span className="h-8 w-1 bg-purple-600 rounded-full"></span>
            Work Experience
          </h2>

          <ExperienceTimeline />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-2">
          <span className="h-8 w-1 bg-purple-600 rounded-full"></span>
          Featured Projects
        </h2>

        <ProjectShowcase />
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-slate-100 dark:bg-slate-800/50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-2">
            <span className="h-8 w-1 bg-purple-600 rounded-full"></span>
            Skills & Expertise
          </h2>

          <SkillsSection />
        </div>
      </section>

      {/* Education & Certifications */}
      <section id="education" className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-2">
          <span className="h-8 w-1 bg-purple-600 rounded-full"></span>
          Education & Certifications
        </h2>

        <EducationSection />
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-slate-100 dark:bg-slate-800/50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-2">
            <span className="h-8 w-1 bg-purple-600 rounded-full"></span>
            Get In Touch
          </h2>

          <ContactSection />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center text-white font-bold text-lg">
                  SG
                </div>
                <span className="font-bold text-xl">Sanjiv Gupta</span>
              </div>
              <p className="mt-2 text-slate-400">AI/ML/LLM Engineer</p>
            </div>

            <div className="flex gap-6">
              <Link
                href="https://linkedin.com/in/sanjiv-gupta"
                target="_blank"
                className="hover:text-purple-500 transition-colors"
              >
                <Linkedin size={24} />
              </Link>
              <Link
                href="https://github.com/gsanjeev432"
                target="_blank"
                className="hover:text-purple-500 transition-colors"
              >
                <Github size={24} />
              </Link>
              <Link href="mailto:gsanjeev432@gmail.com" className="hover:text-purple-500 transition-colors">
                <Mail size={24} />
              </Link>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-slate-800 text-center text-slate-400">
            <p>© {new Date().getFullYear()} Sanjiv Gupta. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
