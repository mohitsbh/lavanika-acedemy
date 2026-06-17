import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { services } from "@/lib/data"
import { MessageSquare, Stethoscope, Wrench, ClipboardCheck, BookOpen, Calendar } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const iconMap: Record<string, React.ReactNode> = {
  MessageSquare: <MessageSquare className="h-6 w-6 text-white" />,
  Stethoscope: <Stethoscope className="h-6 w-6 text-white" />,
  Wrench: <Wrench className="h-6 w-6 text-white" />,
  ClipboardCheck: <ClipboardCheck className="h-6 w-6 text-white" />,
  BookOpen: <BookOpen className="h-6 w-6 text-white" />,
  Calendar: <Calendar className="h-6 w-6 text-white" />,
}

export const metadata: Metadata = {
  title: "Our Services",
  description: "Explore ADC exam preparation courses including Communication OSCE, Skilled OSCE, Technical Skills, Mock Exams, and Written Exam coaching.",
}

export default function ServicesPage() {
  return (
    <div className="pt-28 pb-20 px-5 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <Badge variant="default" className="mb-4">OUR COURSES</Badge>
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">ADC Exam Preparation Services</h1>
        <p className="text-lg text-on-surface-variant max-w-2xl mx-auto">
          Comprehensive training programs designed to match real ADC exam requirements with expert mentorship and proven results.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <Card key={i} className="p-8 group hover:-translate-y-1 transition-all duration-300">
            <CardContent className="p-0 space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-primary-container flex items-center justify-center group-hover:scale-110 transition-transform">
                {iconMap[s.icon] || <BookOpen className="h-6 w-6 text-white" />}
              </div>
              <h3 className="text-xl font-semibold text-on-surface group-hover:text-primary transition-colors">{s.title}</h3>
              <p className="text-sm text-on-surface-variant">{s.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-16 glass rounded-3xl p-10 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Ready to Start Your Preparation?</h2>
        <p className="text-on-surface-variant mb-8 max-w-xl mx-auto">
          Choose the course that matches your exam stage and get expert guidance every step of the way.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button asChild>
            <a href="https://wa.me/61468434447" target="_blank" rel="noopener noreferrer">
              Book a Consultation <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button variant="secondary" asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
