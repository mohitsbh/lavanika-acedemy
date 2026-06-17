import type { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Stethoscope, Heart, Shield, Pill, Phone, AmbulanceIcon as FirstAid, Brain, Syringe } from "lucide-react"
import { siteConfig } from "@/lib/data"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Health & Infirmary",
  description: "Lavanika Academy campus health services — infirmary, emergency care, counseling, and wellness support for students.",
}

export default function HealthPage() {
  return (
    <div className="pt-28 pb-20">
      <div className="px-5 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="default" className="mb-4">CAMPUS HEALTH & WELLNESS</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Health & Infirmary</h1>
          <p className="text-lg text-on-surface-variant max-w-2xl mx-auto">
            A comprehensive healthcare facility dedicated to the physical and mental well-being of the Lavanika Academy community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <Card className="p-8 col-span-1 md:col-span-2 lg:col-span-1">
            <CardContent className="p-0 space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-primary-container flex items-center justify-center">
                <Stethoscope className="h-7 w-7 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-on-surface">General Checkups</h2>
              <p className="text-sm text-on-surface-variant">
                Regular wellness exams tailored for student life, including vitals monitoring, nutrition counseling, and holistic health assessments to ensure peak academic performance.
              </p>
            </CardContent>
          </Card>

          <Card className="p-8 bg-error-container/10 border-error/20">
            <CardContent className="p-0 space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-error/10 flex items-center justify-center">
                <FirstAid className="h-7 w-7 text-error" />
              </div>
              <h2 className="text-2xl font-bold text-on-surface">Emergency Care</h2>
              <p className="text-sm text-on-surface-variant">
                Rapid response medical intervention available 24/7. Our specialized triage team is always on standby for on-campus incidents.
              </p>
              <div className="pt-4 border-t border-error/10">
                <span className="text-xs font-semibold text-error uppercase tracking-widest">Available 24/7</span>
              </div>
            </CardContent>
          </Card>

          <Card className="p-8">
            <CardContent className="p-0 space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center">
                <Syringe className="h-7 w-7 text-secondary" />
              </div>
              <h2 className="text-2xl font-bold text-on-surface">Vaccination</h2>
              <p className="text-sm text-on-surface-variant">
                Immunization programs designed to keep our campus community safe. We provide seasonal flu shots and routine travel vaccinations.
              </p>
            </CardContent>
          </Card>

          <Card className="p-8">
            <CardContent className="p-0 space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-tertiary/10 flex items-center justify-center">
                <Brain className="h-7 w-7 text-tertiary" />
              </div>
              <h2 className="text-2xl font-bold text-on-surface">Counseling</h2>
              <p className="text-sm text-on-surface-variant">
                Confidential mental health support and academic stress management. Our licensed counselors provide a safe space for growth and well-being.
              </p>
            </CardContent>
          </Card>

          <Card className="p-8">
            <CardContent className="p-0 space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Pill className="h-7 w-7 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-on-surface">Pharmacy</h2>
              <p className="text-sm text-on-surface-variant">
                Full-service on-campus dispensary for prescription medication and health supplies, ensuring students have immediate access to the care they need.
              </p>
            </CardContent>
          </Card>

          <Card className="p-8">
            <CardContent className="p-0 space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-primary-container flex items-center justify-center">
                <Heart className="h-7 w-7 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-on-surface">Wellness Programs</h2>
              <p className="text-sm text-on-surface-variant">
                Mindfulness sessions, stress management workshops, and fitness programs designed to support holistic student health throughout the academic year.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="glass rounded-3xl p-8 md:p-12 bg-error-container/5 border-error/10 mb-16">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-error/10 flex items-center justify-center shrink-0">
              <Phone className="h-8 w-8 text-error" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl font-bold text-on-surface mb-1">Emergency Contact</h2>
              <p className="text-on-surface-variant text-sm">Available 24/7 for urgent medical situations on campus</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-error">{siteConfig.phone}</p>
              <p className="text-xs text-on-surface-variant mt-1">WhatsApp emergency line</p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-on-surface text-center mb-10">Campus Health Guidelines</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Shield, title: "Stay Protected", desc: "Keep your vaccinations up to date. Free flu shots available every semester at the infirmary." },
              { icon: Heart, title: "Mental Wellness", desc: "Free counseling sessions available. Reach out to our wellness team for confidential support." },
              { icon: FirstAid, title: "Emergency Ready", desc: "Know your nearest emergency exit and infirmary location. Campus security can guide you 24/7." },
            ].map((item, i) => (
              <Card key={i} className="p-6 text-center">
                <CardContent className="p-0 space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-primary-container flex items-center justify-center mx-auto">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-on-surface">{item.title}</h3>
                  <p className="text-sm text-on-surface-variant">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center glass rounded-3xl p-10">
          <h2 className="text-2xl md:text-3xl font-bold text-on-surface mb-4">Need Medical Assistance?</h2>
          <p className="text-on-surface-variant mb-8 max-w-xl mx-auto">
            Visit the infirmary or contact our medical team. Your health and safety are our top priority.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild>
              <a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer">Contact Health Services</a>
            </Button>
            <Button variant="secondary" asChild>
              <Link href="/contact">General Inquiries</Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="fixed bottom-6 right-6 z-40 md:hidden">
        <Button size="icon" className="h-14 w-14 rounded-full shadow-2xl" asChild>
          <a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer">
            <Phone className="h-6 w-6" />
          </a>
        </Button>
      </div>
    </div>
  )
}
