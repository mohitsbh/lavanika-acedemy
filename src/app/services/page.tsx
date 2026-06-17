import type { Metadata } from "next"
import PageHeader from "@/components/page-header"
import SectionWrapper from "@/components/section-wrapper"
import GlassCard, { GlassCardIcon } from "@/components/glass-card"
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
    <div className="pt-20">
      <PageHeader
        badge="OUR COURSES"
        title={<>ADC Exam <span className="text-primary">Preparation Services</span></>}
        description="Comprehensive training programs designed to match real ADC exam requirements with expert mentorship and proven results."
      />
      <SectionWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <GlassCard key={i} hover className="group p-8" contentClassName="p-0 space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                {iconMap[s.icon] || <BookOpen className="h-6 w-6 text-white" />}
              </div>
              <h3 className="text-xl font-semibold text-on-surface group-hover:text-primary transition-colors">{s.title}</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">{s.description}</p>
            </GlassCard>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper withOrbs>
        <div className="glass rounded-3xl p-10 md:p-14 text-center max-w-4xl mx-auto bg-gradient-to-b from-white/80 to-white/50 backdrop-blur-2xl border border-gray-200/60 shadow-sm">
          <h2 className="text-2xl md:text-3xl font-bold text-on-surface mb-4">Ready to Start Your Preparation?</h2>
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
      </SectionWrapper>
    </div>
  )
}
