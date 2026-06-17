import type { Metadata } from "next"
import PageHeader from "@/components/page-header"
import SectionWrapper from "@/components/section-wrapper"
import ServiceCard from "@/components/service-card"
import { courses } from "@/lib/data"

export const metadata: Metadata = {
  title: "Our Courses",
  description: "Browse all ADC exam preparation courses including Communication OSCE, Skilled OSCE, Technical Skills, Mock Exams, and ADC Written Exam coaching.",
}

export default function CoursesPage() {
  return (
    <div className="pt-20">
      <PageHeader
        badge="OUR COURSES"
        title={<>Structured Training for <span className="text-primary">Every Stage of the ADC Exam</span></>}
        description="Every course is designed to match real ADC exam requirements — with the structure, support, and strategy you need to succeed."
      />
      <SectionWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, i) => (
            <ServiceCard key={i} {...course} />
          ))}
        </div>
      </SectionWrapper>
    </div>
  )
}
