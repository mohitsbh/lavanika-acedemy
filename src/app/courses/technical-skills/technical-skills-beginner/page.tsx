"use client"
import { usePathname } from "next/navigation"
import CourseDetailContent from "@/components/course-detail-content"
import { courseDetails } from "@/lib/data"

export default function CourseDetailPage() {
  const pathname = usePathname()
  const course = courseDetails.find(c => c.href === pathname)
  if (!course) return <div className="pt-28 pb-20 px-5 text-center text-on-surface-variant">Course not found. Please check the URL.</div>
  return <CourseDetailContent course={course} />
}
