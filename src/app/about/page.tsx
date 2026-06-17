import type { Metadata } from "next"
import Link from "next/link"
import PageHeader from "@/components/page-header"
import SectionWrapper from "@/components/section-wrapper"
import GlassCard, { GlassCardIcon } from "@/components/glass-card"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import AnimateOnScroll from "@/components/animate-on-scroll"
import { siteConfig, milestones as dataMilestones, values as dataValues, team } from "@/lib/data"
import { ArrowRight, Users, Globe, Clock, HeartHandshake, GraduationCap, Target, Sparkles, Quote, Star, Mail } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Lavanika Academy's story, mission, values, and the team behind Australia's specialist ADC exam coaching provider.",
}

const iconMap: Record<string, React.ReactNode> = {
  Empathy: <HeartHandshake className="h-5 w-5" />,
  Clarity: <Target className="h-5 w-5" />,
  Excellence: <Sparkles className="h-5 w-5" />,
  Community: <Users className="h-5 w-5" />,
}

export default function AboutPage() {
  return (
    <div className="pt-20">
      <PageHeader
        badge="ABOUT US"
        title={<>More Than a Course. <span className="text-primary">A Community That Guides You.</span></>}
        description="At Lavanika Academy, we support overseas-trained dentists through every step of the ADC journey — with expert mentorship, real-world strategies, and a learning environment that feels like home."
      />

      <AnimateOnScroll>
        <section className="max-w-7xl mx-auto px-5 -mt-10 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {[
            { icon: Users, label: "Candidates Trained", value: `${siteConfig.candidatesTrained}+`, desc: "Trusted worldwide" },
            { icon: Globe, label: "Countries Reached", value: `${siteConfig.countriesReached}+`, desc: "Global community" },
            { icon: Clock, label: "Live Coaching", value: `${siteConfig.liveHours}+ hrs`, desc: "Expert-led sessions" },
            { icon: GraduationCap, label: "Community", value: `${siteConfig.communityMembers}+`, desc: "Active learners" },
          ].map((s, i) => (
            <GlassCard key={i} className="group" contentClassName="p-0 text-center">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-500">
                <s.icon className="h-5 w-5 text-primary" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-primary group-hover:scale-105 transition-transform duration-500">{s.value}</div>
              <div>
                <p className="text-sm font-semibold text-on-surface">{s.label}</p>
                <p className="text-xs text-on-surface-variant/60 mt-0.5">{s.desc}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>
      </AnimateOnScroll>

      <AnimateOnScroll>
      <section className="max-w-7xl mx-auto px-5 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="space-y-6">
            <Badge className="bg-primary/10 text-primary border-primary/20">OUR STORY</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-on-surface tracking-tight">From Mentorship to Movement</h2>
            <div className="space-y-4 text-on-surface-variant leading-relaxed">
              <p>
                Founded by <strong className="text-on-surface">Dr. Lavanika</strong>, an overseas dentist who personally walked the ADC path, our academy began with a simple mission: to make preparation easier, clearer, and more compassionate.
              </p>
              <p>
                What started as peer-to-peer mentoring has grown into a trusted training ground for thousands of dentists worldwide. Every course we create is grounded in empathy, experience, and the belief that no candidate should feel alone.
              </p>
            </div>
            <div className="relative pl-6 border-l-2 border-primary/30 space-y-4">
              {[
                "Live course and mentoring sessions",
                "Hands-on clinical practice and scenario-based exercises",
                "Dedicated Facebook groups for doubt clarification and peer support",
                "Exam success workshops on communication, time management, and exam-day confidence",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Star className="h-3 w-3 text-primary" />
                  </div>
                  <span className="text-sm text-on-surface-variant">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="glass rounded-3xl p-8 md:p-10 bg-gradient-to-br from-primary/[0.02] to-transparent border border-primary/10">
              <Quote className="h-8 w-8 text-primary/30 mb-4" />
              <blockquote className="text-lg md:text-xl text-on-surface font-medium leading-relaxed italic">
                &ldquo;I started with just a few students in my living room. Today, we&apos;ve helped over 1,200 dentists from 25 countries. Every success story reminds me why I began this journey.&rdquo;
              </blockquote>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-primary font-bold text-lg">DL</div>
                <div>
                  <div className="text-sm font-semibold text-on-surface">Dr. Lavanika</div>
                  <div className="text-xs text-on-surface-variant/60">Founder & Head Instructor</div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/5 rounded-full blur-[60px] pointer-events-none" />
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      <AnimateOnScroll>
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.03] via-transparent to-primary/[0.03]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/[0.04] rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/[0.03] rounded-full blur-[80px] pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-5">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">MILESTONES</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-on-surface tracking-tight">Our Journey</h2>
            <p className="text-on-surface-variant mt-3 max-w-xl mx-auto">From a small mentorship circle to a global academy — here&apos;s how we grew.</p>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 -translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/30 via-primary/20 to-transparent" />

            {dataMilestones.map((m, i) => {
              const icons = [Sparkles, Users, GraduationCap, Globe]
              const Icon = icons[i]
              const isLeft = i % 2 === 0
              return (
                <div key={i} className={`relative md:grid md:grid-cols-[1fr_auto_1fr] md:gap-6 ${i > 0 ? "mt-8 md:mt-0" : ""}`}>
                  <div className={`md:flex ${isLeft ? "md:justify-end" : "md:order-3 md:justify-start"}`}>
                    <div className="md:w-full max-w-lg">
                      <div className={`group relative bg-white/70 backdrop-blur-xl border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-500 rounded-2xl p-6 md:p-8 ${isLeft ? "" : "md:text-left"}`}>
                        <div className="absolute left-1/2 -translate-x-1/2 -top-3 md:hidden w-6 h-6 rounded-full bg-primary ring-[5px] ring-white z-10" />
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center shrink-0">
                            <Icon className="h-5 w-5 text-primary" />
                          </div>
                          <div className="flex items-center gap-3 flex-1">
                            <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-wide">{m.year || "Present"}</span>
                            <div className="h-px flex-1 bg-gradient-to-r from-primary/20 to-transparent" />
                          </div>
                        </div>
                        <h3 className="text-lg font-semibold text-on-surface group-hover:text-primary transition-colors">{m.title}</h3>
                        <p className="text-sm text-on-surface-variant/80 leading-relaxed mt-2.5">{m.description}</p>
                        <div className="mt-4 pt-4 border-t border-gray-100/60 flex items-center gap-2 text-xs text-on-surface-variant/40">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary/30" />
                          Milestone {i + 1} of {dataMilestones.length}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="hidden md:flex flex-col items-center relative">
                    <div className="w-[14px] h-[14px] rounded-full bg-primary ring-[6px] ring-primary/15 z-10 relative" />
                    {i < dataMilestones.length - 1 && (
                      <div className="w-0.5 flex-1 bg-gradient-to-b from-primary/20 to-transparent" />
                    )}
                  </div>

                  <div className="hidden md:block" />
                </div>
              )
            })}
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      <AnimateOnScroll>
      <section className="max-w-7xl mx-auto px-5 py-20 md:py-28">
        <div className="text-center mb-14">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">WHAT WE STAND FOR</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-on-surface tracking-tight">Our Values</h2>
          <p className="text-on-surface-variant mt-3 max-w-xl mx-auto">Four principles that guide everything we do.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {dataValues.map((v, i) => (
            <GlassCard key={i} className="group" contentClassName="p-0 space-y-4">
              <GlassCardIcon className="group-hover:scale-110 group-hover:shadow-md transition-all duration-500">
                {iconMap[v.title] || <HeartHandshake className="h-5 w-5 text-primary" />}
              </GlassCardIcon>
              <h3 className="text-xl font-semibold text-on-surface group-hover:text-primary transition-colors">{v.title}</h3>
              <p className="text-sm text-on-surface-variant/80 leading-relaxed">{v.description}</p>
            </GlassCard>
          ))}
        </div>
      </section>
      </AnimateOnScroll>

      <AnimateOnScroll>
      <section className="relative overflow-hidden py-20 md:py-28 bg-gradient-to-b from-primary/[0.02] via-transparent to-primary/[0.02]">
        <div className="relative max-w-7xl mx-auto px-5 text-center">
          <Badge className="mb-5 bg-primary/10 text-primary border-primary/20">MEET THE TEAM</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-on-surface tracking-tight mb-14">The People Behind the Academy</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {team.map((member, i) => (
              <GlassCard key={i} className="group text-center" contentClassName="p-0 space-y-4">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mx-auto text-2xl font-bold text-primary group-hover:scale-110 transition-transform duration-500">
                  {member.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-on-surface">{member.name}</h3>
                  <p className="text-sm text-primary font-medium">{member.role}</p>
                </div>
                <p className="text-sm text-on-surface-variant/80 leading-relaxed">{member.bio}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>
      </AnimateOnScroll>

      <AnimateOnScroll>
      <section className="max-w-4xl mx-auto px-5 py-20 md:py-28">
        <div className="glass rounded-3xl p-10 md:p-14 text-center bg-gradient-to-b from-white/80 to-white/50 backdrop-blur-2xl border border-gray-200/60 shadow-sm">
          <h2 className="text-2xl md:text-4xl font-bold text-on-surface tracking-tight mb-4">Ready to Start Your ADC Journey With Us?</h2>
          <p className="text-on-surface-variant mb-8 max-w-xl mx-auto">
            Explore our courses, reach out to our team, or book a discovery call. We&apos;ll help you find the right course for your exam timeline and goals.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">Contact Our Team <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <Link href="/courses">Explore Our Courses</Link>
            </Button>
          </div>
        </div>
      </section>
      </AnimateOnScroll>
    </div>
  )
}