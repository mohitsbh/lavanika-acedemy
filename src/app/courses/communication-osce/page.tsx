"use client"

import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { courseDetails, siteConfig } from "@/lib/data"
import { ArrowRight } from "lucide-react"

export default function CommOSCEPage() {
  const courses = courseDetails.filter(c => c.category === "Communication OSCE")

  return (
    <div className="pt-28 pb-20 px-5 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <Badge variant="default" className="mb-4">COMMUNICATION OSCE</Badge>
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Communication OSCE Courses</h1>
        <p className="text-lg text-on-surface-variant max-w-2xl mx-auto">
          Prepare for ADC OSCE communication stations through interactive training focused on patient-centred care, structured feedback, and real-exam strategies by Dr Lavanika.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {courses.map((course, i) => (
          <div key={i} className="glass rounded-3xl overflow-hidden group hover:-translate-y-1 transition-all duration-300">
            <div className="aspect-[16/9] overflow-hidden">
              <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-6 space-y-3">
              <h3 className="text-xl font-semibold text-on-surface group-hover:text-primary transition-colors">{course.title}</h3>
              <p className="text-sm text-on-surface-variant line-clamp-2">{course.description}</p>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-on-surface-variant">
                <span>Duration: {course.durationLabel}</span>
                <span>Location: {course.location}</span>
              </div>
              <div className="flex items-center gap-3 pt-2">
                {course.feeOriginal ? (
                  <>
                    <span className="text-lg font-bold text-primary">{course.fee.replace(" (AUD)", "")}</span>
                    <span className="text-sm text-on-surface-variant line-through">{course.feeOriginal.replace(" (AUD)", "")}</span>
                  </>
                ) : (
                  <span className="text-lg font-bold text-primary">{course.fee.replace(" (AUD)", "")}</span>
                )}
                <span className="text-xs text-on-surface-variant">AUD</span>
              </div>
              <div className="flex items-center gap-3 pt-1">
                <Link href={course.href} className="inline-flex items-center justify-center h-10 px-5 text-sm font-semibold rounded-full text-white bg-primary hover:bg-primary-container transition-all">
                  View Details <ArrowRight className="h-3.5 w-3.5 ml-1" />
                </Link>
                <Link href="/courses/communication-osce/comparison" className="text-sm text-primary hover:underline">
                  Compare courses
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="glass rounded-3xl p-8 md:p-12 text-center space-y-4">
        <h2 className="text-2xl font-semibold text-on-surface">Ready to ace your Communication OSCE?</h2>
        <p className="text-on-surface-variant max-w-xl mx-auto">Get personalised guidance from Dr Lavanika and join 1,200+ successful ADC candidates.</p>
        <div className="flex flex-wrap gap-3 justify-center">
          <a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center h-11 px-6 text-sm font-semibold rounded-full text-white bg-primary hover:bg-primary-container transition-all">Enquire Now</a>
          <Link href="/contact" className="inline-flex items-center justify-center h-11 px-6 text-sm font-semibold rounded-full glass text-primary hover:bg-white/40 transition-all">Contact Us</Link>
        </div>
      </div>
    </div>
  )
}
