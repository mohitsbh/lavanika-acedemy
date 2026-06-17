import type { Metadata } from "next"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { siteConfig } from "@/lib/data"
import { ExternalLink, Mail } from "lucide-react"

export const metadata: Metadata = {
  title: "Student Portal",
  description: "Access your Lavanika Academy course recordings, study materials, and resources.",
}

export default function StudentPortalPage() {
  return (
    <div className="pt-28 pb-20 px-5 max-w-7xl mx-auto">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <Badge variant="default" className="mb-4">STUDENT PORTAL</Badge>
        <h1 className="text-4xl md:text-5xl font-bold text-on-surface mb-4">Access Your Course Materials</h1>
        <p className="text-on-surface-variant text-lg leading-relaxed max-w-2xl mx-auto">
          Enrolled students can access session recordings, study resources, and course materials through our student portal.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
        <Card className="glass rounded-3xl p-8 border-0">
          <CardContent className="p-0 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
              <ExternalLink className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-on-surface">Access Recordings</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              Log in to study.lavanika.academy to view your course recordings, track your progress, and download study materials.
            </p>
            <a
              href={siteConfig.studentPortal}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-12 px-8 text-sm font-semibold rounded-full text-white bg-primary hover:bg-primary-container transition-all shadow-[0px_4px_12px_rgba(0,67,200,0.2)]"
            >
              Go to Portal <ExternalLink className="h-3.5 w-3.5 ml-1.5" />
            </a>
          </CardContent>
        </Card>

        <Card className="glass rounded-3xl p-8 border-0">
          <CardContent className="p-0 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-on-surface">Contact Support</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              Need help accessing your courses or have a question about your enrolment? Our support team is here to help.
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center justify-center h-12 px-8 text-sm font-semibold rounded-full glass text-primary hover:bg-white/40 transition-all"
            >
              Email Support
            </a>
          </CardContent>
        </Card>
      </div>

      <div className="max-w-2xl mx-auto">
        <Card className="glass rounded-3xl p-8 border-0">
          <CardContent className="p-0 space-y-6">
            <h2 className="text-xl font-semibold text-on-surface">Login Information</h2>
            <div className="space-y-4 text-sm text-on-surface-variant leading-relaxed">
              <p>
                Your student portal account is created when you enrol in a course. You will receive your login credentials via email within 24 hours of enrolment.
              </p>
              <div className="bg-primary/5 rounded-2xl p-5 space-y-3">
                <h3 className="font-semibold text-on-surface">Quick Tips</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                    Use the same email address you used during enrolment to log in.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                    If you have not received your login details, please check your spam folder.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                    For login issues, email us at{" "}
                    <a href={`mailto:${siteConfig.email}`} className="text-primary hover:underline">{siteConfig.email}</a>.
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="text-center mt-10">
        <Link href="/courses" className="text-sm text-primary hover:underline">
          Browse our courses →
        </Link>
      </div>
    </div>
  )
}
