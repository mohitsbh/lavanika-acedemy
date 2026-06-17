import type { Metadata } from "next"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { courseDetails } from "@/lib/data"
import { Check, ArrowLeft, Clock, MapPin } from "lucide-react"

export const metadata: Metadata = {
  title: "Compare Communication OSCE Courses",
  description: "Compare all Communication OSCE course packages side by side — basic, extra roleplay, recordings, and more.",
}

const category = "Communication OSCE"
const courses = courseDetails.filter(c => c.category === category)

export default function ComparisonPage() {
  return (
    <div className="pt-28 pb-20 px-5 max-w-7xl mx-auto">
      <Link href="/courses" className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline mb-8">
        <ArrowLeft className="h-4 w-4" /> Back to courses
      </Link>

      <Badge variant="default" className="mb-4">{category}</Badge>
      <h1 className="text-3xl md:text-4xl font-bold text-on-surface mb-4">Compare our {category} courses</h1>
      <p className="text-on-surface-variant mb-10 max-w-2xl">
        Find the right Communication OSCE package for your preparation style and budget.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <Card key={course.href} className="glass rounded-3xl p-6 flex flex-col">
            <CardContent className="p-0 flex flex-col h-full">
              {course.image && (
                <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-5">
                  <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                </div>
              )}
              <h3 className="text-lg font-semibold text-on-surface mb-2">{course.title}</h3>
              <p className="text-sm text-on-surface-variant mb-4 line-clamp-2">{course.description}</p>

              <div className="space-y-2 mb-4 text-sm text-on-surface-variant">
                <div className="flex items-center gap-2"><Clock className="h-3.5 w-3.5 text-primary" /> {course.durationLabel}</div>
                <div className="flex items-center gap-2"><MapPin className="h-3.5 w-3.5 text-primary" /> {course.location}</div>
              </div>

              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-xl font-bold text-primary">{course.fee}</span>
                {course.feeOriginal && <span className="text-sm text-on-surface-variant line-through">{course.feeOriginal}</span>}
              </div>

              {course.features && course.features.length > 0 && (
                <div className="space-y-1.5 mb-6 flex-1">
                  {course.features.slice(0, 3).map((f, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Check className="h-3.5 w-3.5 text-primary shrink-0" />
                      <span className="text-xs text-on-surface-variant">{f}</span>
                    </div>
                  ))}
                  {course.features.length > 3 && (
                    <p className="text-xs text-primary ml-5">+{course.features.length - 3} more</p>
                  )}
                </div>
              )}

              <Link
                href={course.href}
                className="inline-flex items-center justify-center h-10 px-6 text-sm font-semibold rounded-full text-white bg-primary hover:bg-primary-container transition-all mt-auto"
              >
                View details
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
