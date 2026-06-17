import type { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import StaffCard from "@/components/staff-card"
import { team } from "@/lib/data"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Our Team",
  description: "Meet the expert team behind Lavanika Academy — Dr Lavanika, Dr Mahmoud, Alice and our dedicated instructors guiding your ADC journey.",
}

export default function StaffPage() {
  return (
    <div className="pt-28 pb-20">
      <div className="px-5 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="default" className="mb-4">OUR TEAM</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Meet the People Steering Our Mission</h1>
          <p className="text-lg text-on-surface-variant max-w-2xl mx-auto">
            Our leadership team combines clinical expertise, ADC exam experience, and a genuine passion for mentorship to keep the academy focused on what matters most &mdash; your success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <StaffCard key={i} {...member} />
          ))}
        </div>

        <div className="mt-20">
          <h2 className="text-2xl md:text-3xl font-bold text-on-surface text-center mb-10">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Empathy", desc: "We know this journey is demanding — not just academically, but personally. Our team has walked the ADC path and we design every course with that lived experience in mind." },
              { title: "Clarity", desc: "The ADC curriculum is complex. We break it down into structured, actionable frameworks so you always know exactly what to focus on and why." },
              { title: "Excellence", desc: "We hold ourselves and our students to high standards — not to intimidate, but because we believe every candidate is capable of passing with distinction when guided well." },
              { title: "Community", desc: "We succeed together. Our Facebook groups, batch WhatsApp chats, and peer networks mean you are never preparing alone — no matter where in the world you are." },
            ].map((v, i) => (
              <Card key={i} className="p-8">
                <CardContent className="p-0 space-y-3">
                  <h3 className="text-xl font-semibold text-primary">{v.title}</h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed">{v.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
