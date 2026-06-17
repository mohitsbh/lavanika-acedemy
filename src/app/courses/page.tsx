import type { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import ServiceCard from "@/components/service-card"
import { courses } from "@/lib/data"

export const metadata: Metadata = {
  title: "Our Courses",
  description: "Browse all ADC exam preparation courses including Communication OSCE, Skilled OSCE, Technical Skills, Mock Exams, and ADC Written Exam coaching.",
}

export default function CoursesPage() {
  return (
    <div className="pt-32 pb-20 px-5 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <Badge variant="default" className="mb-4">OUR COURSES</Badge>
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Structured Training for Every Stage of the ADC Exam</h1>
        <p className="text-lg text-on-surface-variant max-w-2xl mx-auto">
          Every course is designed to match real ADC exam requirements — with the structure, support, and strategy you need to succeed.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, i) => (
          <ServiceCard key={i} {...course} />
        ))}
      </div>
    </div>
  )
}
