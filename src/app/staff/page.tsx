import type { Metadata } from "next"
import PageHeader from "@/components/page-header"
import SectionWrapper from "@/components/section-wrapper"
import GlassCard from "@/components/glass-card"
import StaffCard from "@/components/staff-card"
import { team } from "@/lib/data"

export const metadata: Metadata = {
  title: "Our Team",
  description: "Meet the expert team behind Lavanika Academy — Dr Lavanika, Dr Mahmoud, Alice and our dedicated instructors guiding your ADC journey.",
}

export default function StaffPage() {
  return (
    <div className="pt-20">
      <PageHeader
        badge="OUR TEAM"
        title={<>Meet the People <span className="text-primary">Steering Our Mission</span></>}
        description="Our leadership team combines clinical expertise, ADC exam experience, and a genuine passion for mentorship to keep the academy focused on what matters most — your success."
      />
      <SectionWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {team.map((member, i) => (
            <StaffCard key={i} {...member} />
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper withOrbs>
        <h2 className="text-2xl md:text-3xl font-bold text-on-surface text-center mb-10">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {[
            { title: "Empathy", desc: "We know this journey is demanding — not just academically, but personally. Our team has walked the ADC path and we design every course with that lived experience in mind." },
            { title: "Clarity", desc: "The ADC curriculum is complex. We break it down into structured, actionable frameworks so you always know exactly what to focus on and why." },
            { title: "Excellence", desc: "We hold ourselves and our students to high standards — not to intimidate, but because we believe every candidate is capable of passing with distinction when guided well." },
            { title: "Community", desc: "We succeed together. Our Facebook groups, batch WhatsApp chats, and peer networks mean you are never preparing alone — no matter where in the world you are." },
          ].map((v, i) => (
            <GlassCard key={i} contentClassName="p-0 space-y-3">
              <h3 className="text-xl font-semibold text-primary">{v.title}</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">{v.desc}</p>
            </GlassCard>
          ))}
        </div>
      </SectionWrapper>
    </div>
  )
}
