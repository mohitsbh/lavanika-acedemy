"use client"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { siteConfig, courseDetails } from "@/lib/data"
import { ArrowLeft, Clock, MapPin, ArrowRight } from "lucide-react"

export default function ADCWrittenComparisonPage() {
  const courses = courseDetails.filter(c => c.category === "ADC Written Exam")

  return (
    <div className="pt-28 pb-20 px-5 max-w-7xl mx-auto">
      <Link href="/courses/adc-written-exam" className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline mb-8">
        <ArrowLeft className="h-4 w-4" /> Back to ADC Written Exam
      </Link>
      <div className="text-center mb-12">
        <Badge variant="default" className="mb-4">COMPARE</Badge>
        <h1 className="text-3xl md:text-4xl font-bold text-on-surface mb-4">Compare ADC Written Exam Options</h1>
        <p className="text-on-surface-variant max-w-2xl mx-auto">Review all ADC Written Exam options side-by-side.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, i) => (
          <Card key={i} className="glass rounded-3xl p-8 flex flex-col">
            <CardContent className="p-0 flex flex-col h-full">
              <Badge variant="default" className="mb-3 w-fit">{course.category}</Badge>
              <h3 className="text-lg font-semibold text-on-surface mb-2">{course.title}</h3>
              <p className="text-sm text-on-surface-variant mb-4 line-clamp-2">{course.description}</p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-on-surface-variant"><Clock className="h-4 w-4 text-primary shrink-0" /> {course.durationLabel}</div>
                <div className="flex items-center gap-2 text-sm text-on-surface-variant"><MapPin className="h-4 w-4 text-primary shrink-0" /> {course.location}</div>
              </div>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-2xl font-bold text-primary">{course.fee}</span>
                {course.feeOriginal && <span className="text-sm text-on-surface-variant line-through">{course.feeOriginal}</span>}
              </div>
              <div className="mt-auto">
                <Link href={course.href} className="inline-flex items-center justify-center w-full h-12 px-6 text-sm font-semibold rounded-full text-white bg-primary hover:bg-primary-container transition-all shadow-[0px_4px_12px_rgba(0,67,200,0.2)]">
                  View Details <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
