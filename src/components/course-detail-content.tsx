"use client"

import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { siteConfig, type CourseDetail } from "@/lib/data"
import { Check, ArrowLeft, Clock, MapPin, Tag, BookOpen, Target, Users, Package, HelpCircle, ExternalLink } from "lucide-react"

export default function CourseDetailContent({ course }: { course: CourseDetail }) {
  return (
    <div className="pt-28 pb-20 px-5 max-w-5xl mx-auto">
      <Link href="/courses" className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline mb-8">
        <ArrowLeft className="h-4 w-4" /> Back to courses
      </Link>

      {/* Hero Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {course.image && (
          <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-primary/5">
            <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
          </div>
        )}
        <div className="space-y-5">
          <Badge variant="default">{course.category}</Badge>
          <h1 className="text-3xl md:text-4xl font-bold text-on-surface">{course.title}</h1>
          <p className="text-on-surface-variant leading-relaxed">{course.longDescription || course.description}</p>

          <div className="grid grid-cols-2 gap-3">
            <div className="flex items-center gap-2 text-sm text-on-surface-variant bg-primary/5 p-3 rounded-2xl"><Clock className="h-4 w-4 text-primary shrink-0" /> {course.durationLabel}</div>
            <div className="flex items-center gap-2 text-sm text-on-surface-variant bg-primary/5 p-3 rounded-2xl"><MapPin className="h-4 w-4 text-primary shrink-0" /> {course.location}</div>
            {course.startTime && course.startTime !== "-" && <div className="flex items-center gap-2 text-sm text-on-surface-variant bg-primary/5 p-3 rounded-2xl"><Clock className="h-4 w-4 text-primary shrink-0" /> {course.startTime}</div>}
            <div className="flex items-center gap-2 text-sm text-on-surface-variant bg-primary/5 p-3 rounded-2xl"><Tag className="h-4 w-4 text-primary shrink-0" /> {course.availability}</div>
          </div>

          <div className="flex items-baseline gap-3">
            <span className="text-3xl font-bold text-primary">{course.fee}</span>
            {course.feeOriginal && <span className="text-lg text-on-surface-variant line-through">{course.feeOriginal}</span>}
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            {course.stripeUrl && (
              <a href={course.stripeUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center h-12 px-8 text-sm font-semibold rounded-full text-white bg-primary hover:bg-primary-container transition-all shadow-[0px_4px_12px_rgba(0,67,200,0.2)]">Book Now <ExternalLink className="h-3.5 w-3.5 ml-1.5" /></a>
            )}
            <a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center h-12 px-8 text-sm font-semibold rounded-full glass text-primary hover:bg-white/40 transition-all">Enquire on WhatsApp</a>
            <Link href="/contact" className="inline-flex items-center justify-center h-12 px-8 text-sm font-semibold rounded-full glass text-primary hover:bg-white/40 transition-all">Contact Us</Link>
          </div>
        </div>
      </div>

      {/* Course Snapshot */}
      <Card className="p-6 md:p-8 mb-10">
        <CardContent className="p-0">
          <h2 className="text-xl font-semibold text-on-surface mb-5 flex items-center gap-2"><Package className="h-5 w-5 text-primary" /> Course Snapshot</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Duration", value: course.durationLabel },
              { label: "Location", value: course.location },
              { label: "Tasks", value: course.tasksLabel },
              { label: "Materials", value: course.materialsIncluded },
              { label: "Demos", value: course.demosIncluded },
              { label: "Access", value: course.accessDuration },
              { label: "Start Time", value: course.startTime !== "-" ? course.startTime : "Flexible" },
              { label: "Fee", value: course.fee.replace(" (AUD)", "") },
            ].map((item, i) => (
              <div key={i} className="text-center p-3 rounded-2xl bg-primary/5 border border-primary/10">
                <div className="text-xs text-on-surface-variant mb-1">{item.label}</div>
                <div className="text-sm font-semibold text-on-surface">{item.value}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Features */}
      {course.features && course.features.length > 0 && (
        <Card className="p-6 md:p-8 mb-10">
          <CardContent className="p-0">
            <h2 className="text-xl font-semibold text-on-surface mb-5 flex items-center gap-2"><Check className="h-5 w-5 text-primary" /> What's Included</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {course.features.map((f, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-2xl bg-primary/5 border border-primary/10">
                  <Check className="h-4 w-4 text-primary shrink-0" />
                  <span className="text-sm text-on-surface-variant">{f}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Who Is This For */}
      {course.whoFor && course.whoFor.length > 0 && (
        <Card className="p-6 md:p-8 mb-10">
          <CardContent className="p-0">
            <h2 className="text-xl font-semibold text-on-surface mb-5 flex items-center gap-2"><Users className="h-5 w-5 text-primary" /> Who Is This Course For</h2>
            <ul className="space-y-2">
              {course.whoFor.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-on-surface-variant">
                  <Target className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      {/* What You'll Learn */}
      {course.whatYouLearn && course.whatYouLearn.length > 0 && (
        <Card className="p-6 md:p-8 mb-10">
          <CardContent className="p-0">
            <h2 className="text-xl font-semibold text-on-surface mb-5 flex items-center gap-2"><BookOpen className="h-5 w-5 text-primary" /> What You'll Learn</h2>
            <ul className="space-y-2">
              {course.whatYouLearn.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-on-surface-variant">
                  <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      {/* Modules */}
      {course.modules && course.modules.length > 0 && (
        <Card className="p-6 md:p-8 mb-10">
          <CardContent className="p-0">
            <h2 className="text-xl font-semibold text-on-surface mb-5 flex items-center gap-2"><BookOpen className="h-5 w-5 text-primary" /> Course Modules</h2>
            <div className="space-y-4">
              {course.modules.map((mod, i) => (
                <div key={i} className="p-4 rounded-2xl bg-primary/5 border border-primary/10">
                  <h3 className="font-semibold text-on-surface mb-2">{mod.title}</h3>
                  <ul className="space-y-1">
                    {mod.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-on-surface-variant">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* What to Bring */}
      {course.whatToBring && course.whatToBring.length > 0 && (
        <Card className="p-6 md:p-8 mb-10">
          <CardContent className="p-0">
            <h2 className="text-xl font-semibold text-on-surface mb-5 flex items-center gap-2"><Package className="h-5 w-5 text-primary" /> What to Bring</h2>
            <ul className="space-y-2">
              {course.whatToBring.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-on-surface-variant">
                  <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      {/* Student Portal Link for Communication OSCE courses */}
      {(course.category === "Communication OSCE") && (
        <div className="mt-10 mb-10 glass rounded-3xl p-8 text-center">
          <p className="text-primary font-semibold mb-2">Already enrolled?</p>
          <a href={siteConfig.studentPortal} target="_blank" rel="noopener noreferrer" className="text-on-surface-variant hover:text-primary underline">Access your session recordings and course materials on our student portal →</a>
        </div>
      )}

      {/* FAQ */}
      {course.faq && course.faq.length > 0 && (
        <Card className="p-6 md:p-8 mb-10">
          <CardContent className="p-0">
            <h2 className="text-xl font-semibold text-on-surface mb-5 flex items-center gap-2"><HelpCircle className="h-5 w-5 text-primary" /> Course FAQs</h2>
            <div className="space-y-3">
              {course.faq.map((item, i) => (
                <details key={i} className="group p-4 rounded-2xl bg-primary/5 border border-primary/10 open:bg-primary/10 transition-colors">
                  <summary className="text-sm font-medium text-on-surface cursor-pointer list-none flex items-center justify-between">
                    {item.q}
                    <span className="text-primary group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="mt-3 text-sm text-on-surface-variant leading-relaxed">{item.a}</p>
                </details>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* CTA */}
      <div className="glass rounded-3xl p-8 md:p-12 text-center space-y-4">
        <h2 className="text-2xl font-semibold text-on-surface">Ready to get started?</h2>
        <p className="text-on-surface-variant max-w-xl mx-auto">Contact our team to find out about upcoming batch dates and availability.</p>
        <div className="flex flex-wrap gap-3 justify-center">
          {course.stripeUrl && (
            <a href={course.stripeUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center h-11 px-6 text-sm font-semibold rounded-full text-white bg-primary hover:bg-primary-container transition-all">Book Now</a>
          )}
          <a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center h-11 px-6 text-sm font-semibold rounded-full glass text-primary hover:bg-white/40 transition-all">Enquire on WhatsApp</a>
          <Link href="/contact" className="inline-flex items-center justify-center h-11 px-6 text-sm font-semibold rounded-full glass text-primary hover:bg-white/40 transition-all">Contact Us</Link>
        </div>
      </div>
    </div>
  )
}
