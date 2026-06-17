import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Hero from "@/components/hero"
import NewsTicker from "@/components/news-ticker"
import ServiceCard from "@/components/service-card"
import SectionWrapper from "@/components/section-wrapper"
import GlassCard, { GlassCardIcon } from "@/components/glass-card"
import { ArrowRight, MonitorPlay, BookOpen, Users, Sparkles, TrendingUp, Star, Stethoscope, Heart, Shield, Award } from "lucide-react"
import { courses, features, stats, announcements } from "@/lib/data"

const featureIcons: Record<string, React.ReactNode> = {
  LiveIcon: <MonitorPlay className="h-5 w-5 text-primary" />,
  BookIcon: <BookOpen className="h-5 w-5 text-primary" />,
  UsersIcon: <Users className="h-5 w-5 text-primary" />,
  HeartIcon: <Sparkles className="h-5 w-5 text-primary" />,
  TrendingUpIcon: <TrendingUp className="h-5 w-5 text-primary" />,
  StarIcon: <Star className="h-5 w-5 text-primary" />,
}

const announcementBadge: Record<string, string> = {
  "Course Update": "bg-sky-50 text-sky-700 border-sky-200",
  "Guide": "bg-violet-50 text-violet-700 border-violet-200",
  "Story": "bg-emerald-50 text-emerald-700 border-emerald-200",
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <NewsTicker />

      <section className="py-16 md:py-24 max-w-7xl mx-auto px-5">
        <div className="text-center mb-12">
          <Badge className="mb-4">EXPLORE OUR ADC PREP COURSES</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-on-surface mb-4">
            Structured Training for Every Stage of the ADC Exam
          </h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto">
            Every course is designed to match real ADC exam requirements &mdash; with the structure, support, and strategy you need to succeed.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, i) => (
            <ServiceCard key={i} {...course} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Button variant="secondary" asChild>
            <Link href="/services">Browse All Courses <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>

      <SectionWrapper withOrbs>
        <div className="text-center mb-14">
          <Badge className="mb-4">CORE FEATURES</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-on-surface mb-4 tracking-tight">
            Focused Coaching, Proven Results
          </h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto text-lg">
            Every element at Lavanika Academy is created with one focus &mdash; your ADC success.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <GlassCard key={i} className="group" contentClassName="space-y-4">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <GlassCardIcon className="group-hover:scale-125 group-hover:shadow-md group-hover:shadow-primary/10 group-hover:rotate-3 transition-all duration-500">
                {featureIcons[f.icon] || <MonitorPlay className="h-5 w-5 text-primary" />}
              </GlassCardIcon>
              <h3 className="text-lg font-semibold text-on-surface group-hover:text-primary transition-colors duration-500">{f.title}</h3>
              <p className="text-sm text-on-surface-variant/80 leading-relaxed">{f.description}</p>
            </GlassCard>
          ))}
        </div>
      </SectionWrapper>

      <section className="py-16 md:py-24 max-w-7xl mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Badge>CAMPUS HEALTH &amp; WELLNESS</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-on-surface leading-tight">
              Health Services for Our Campus Community
            </h2>
            <p className="text-on-surface-variant">
              The Lavanika Academy Infirmary provides comprehensive healthcare services dedicated to the physical and mental well-being of our students, faculty, and staff.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: Stethoscope, label: "General Checkups", desc: "Regular wellness exams" },
                { icon: Heart, label: "24/7 Emergency", desc: "Always here for you" },
                { icon: Shield, label: "Vaccination", desc: "Immunization programs" },
                { icon: Heart, label: "Counseling", desc: "Mental health support" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 rounded-2xl bg-primary/5 border border-primary/10 hover:bg-primary/10 hover:-translate-y-0.5 hover:shadow-md hover:shadow-primary/5 transition-all duration-300">
                  <item.icon className="h-6 w-6 text-primary shrink-0" />
                  <div>
                    <div className="text-sm font-semibold text-on-surface">{item.label}</div>
                    <div className="text-xs text-on-surface-variant">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <Button asChild>
              <Link href="/health">Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
          <div className="glass rounded-3xl p-8 md:p-12">
            <div className="text-center space-y-4">
              <div className="text-5xl font-bold text-primary">24/7</div>
              <p className="text-on-surface-variant">Emergency services available around the clock</p>
              <div className="w-16 h-0.5 bg-primary/20 mx-auto" />
              <p className="text-sm text-on-surface-variant">
                Suite 205, 838 Collins St, Docklands, VIC 3008
              </p>
              <Button variant="secondary" asChild>
                <a href="https://wa.me/61468434447" target="_blank" rel="noopener noreferrer">
                  Emergency Contact
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <SectionWrapper withOrbs>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <div className="space-y-3">
            <Badge className="bg-amber-50 text-amber-700 border-amber-200">LATEST UPDATES</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-on-surface tracking-tight">Campus Updates</h2>
            <p className="text-on-surface-variant max-w-lg">Stay informed about new courses, batch openings, and important announcements.</p>
          </div>
          <Link href="/announcements" className="hidden md:inline-flex items-center gap-1.5 h-10 px-5 text-sm font-medium rounded-full text-primary bg-primary/5 border border-primary/10 hover:bg-primary/10 hover:border-primary/20 transition-all whitespace-nowrap">
            View All Announcements <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {announcements.slice(0, 4).map((a, i) => (
            <Card key={i} className="group relative p-0 overflow-hidden bg-white/70 backdrop-blur-xl border border-gray-100 hover:border-gray-200 hover:shadow-xl hover:shadow-gray-200/50 hover:-translate-y-1 transition-all duration-500">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary/30 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className={announcementBadge[a.category] || ""}>
                    {a.category}
                  </Badge>
                  <span className="text-xs text-on-surface-variant/60">{a.date}</span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-base font-semibold text-on-surface group-hover:text-primary leading-snug transition-colors duration-500">{a.title}</h3>
                  <p className="text-sm text-on-surface-variant/80 leading-relaxed line-clamp-2">{a.description}</p>
                </div>
                <div className="flex items-center gap-1 text-xs text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  Read more <ArrowRight className="h-3 w-3" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-10 md:hidden">
          <Button variant="secondary" asChild>
            <Link href="/announcements">View All Announcements <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </SectionWrapper>

      <section className="py-16 md:py-24 max-w-7xl mx-auto px-5">
        <div className="text-center mb-12">
          <Badge className="mb-4">TRUSTED BY DENTISTS WORLDWIDE</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-on-surface mb-4">
            Focused on One Outcome &mdash; Your ADC Success
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <Card key={i} className="group p-8 text-center hover:-translate-y-1.5 hover:shadow-lg hover:shadow-primary/5 transition-all duration-500 border border-transparent hover:border-primary/10">
              <CardContent className="p-0 space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-primary transition-all duration-500 group-hover:scale-110 group-hover:text-primary/80">
                  {s.value}{s.suffix}
                </div>
                <p className="text-sm text-on-surface-variant">{s.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-primary/[0.01] to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-5 text-center">
          <Badge className="mb-5 bg-primary/10 text-primary border-primary/20">GET STARTED TODAY</Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-on-surface tracking-tight leading-[1.15]">
            Ready to Start Your{" "}
            <span className="text-primary">ADC Journey?</span>
          </h2>
          <p className="text-lg text-on-surface-variant mt-5 max-w-2xl mx-auto leading-relaxed">
            Join Lavanika Academy and Prepare with Confidence. Get expert mentorship, real exam practice, and a supportive learning environment tailored for overseas-trained dentists.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Button size="lg" className="shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-shadow" asChild>
              <Link href="/courses">Explore Courses <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            <Button variant="outline" size="lg" className="ring-1 ring-gray-200 hover:ring-primary/30 hover:text-primary" asChild>
              <Link href="/contact">Book a Consultation</Link>
            </Button>
          </div>
          <div className="flex items-center justify-center gap-8 mt-10 pt-8 border-t border-gray-100">
            {stats.slice(0, 3).map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl font-bold text-primary">{s.value}{s.suffix}</div>
                <p className="text-xs text-on-surface-variant/60 mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="fixed bottom-6 right-6 z-40 md:hidden">
        <a
          href="https://wa.me/61468434447"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center h-14 w-14 rounded-full bg-[#25D366] shadow-2xl hover:bg-[#25D366]/90 transition-all active:scale-95"
        >
          <svg viewBox="0 0 24 24" fill="white" className="h-7 w-7">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>
      </div>
    </>
  )
}
