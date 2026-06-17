import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Hero from "@/components/hero"
import NewsTicker from "@/components/news-ticker"
import ServiceCard from "@/components/service-card"
import { ArrowRight, Stethoscope, Heart, Shield, Award, MonitorPlay, BookOpen, Users, Sparkles, TrendingUp, Star } from "lucide-react"
import { courses, features, stats, announcements, values } from "@/lib/data"

export default function HomePage() {
  return (
    <>
      <Hero />
      <NewsTicker />

      <section className="py-16 md:py-24 px-5 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <Badge variant="default" className="mb-4">EXPLORE OUR ADC PREP COURSES</Badge>
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

      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.02] via-transparent to-primary/[0.02]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-5">
          <div className="text-center mb-14">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 hover:bg-primary/15">CORE FEATURES</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-on-surface mb-4 tracking-tight">
              Focused Coaching, Proven Results
            </h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto text-lg">
              Every element at Lavanika Academy is created with one focus &mdash; your ADC success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <Card
                key={i}
                className="group relative p-0 overflow-hidden border border-primary/5 bg-white/70 backdrop-blur-xl hover:border-primary/20 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1.5 transition-all duration-500"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardContent className="p-7 space-y-4">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center group-hover:scale-125 group-hover:shadow-md group-hover:shadow-primary/10 group-hover:rotate-3 transition-all duration-500">
                    {f.icon === "LiveIcon" && <MonitorPlay className="h-5 w-5 text-primary" />}
                    {f.icon === "BookIcon" && <BookOpen className="h-5 w-5 text-primary" />}
                    {f.icon === "UsersIcon" && <Users className="h-5 w-5 text-primary" />}
                    {f.icon === "HeartIcon" && <Sparkles className="h-5 w-5 text-primary" />}
                    {f.icon === "TrendingUpIcon" && <TrendingUp className="h-5 w-5 text-primary" />}
                    {f.icon === "StarIcon" && <Star className="h-5 w-5 text-primary" />}
                  </div>
                  <h3 className="text-lg font-semibold text-on-surface group-hover:text-primary transition-colors duration-500">{f.title}</h3>
                  <p className="text-sm text-on-surface-variant/80 leading-relaxed">{f.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-5 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Badge variant="default">CAMPUS HEALTH & WELLNESS</Badge>
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
                  <item.icon className="h-6 w-6 text-primary shrink-0 transition-all duration-300 group-hover:scale-110" />
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
                <a href={process.env.NEXT_PUBLIC_CONTACT_PHONE || "https://wa.me/61468434447"} target="_blank" rel="noopener noreferrer">
                  Emergency Contact
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.02] via-transparent to-primary/[0.02]" />
        <div className="absolute bottom-0 right-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-5">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
            <div className="space-y-3">
              <Badge className="bg-amber-50 text-amber-700 border-amber-200 hover:bg-amber-100">LATEST UPDATES</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-on-surface tracking-tight">Campus Updates</h2>
              <p className="text-on-surface-variant max-w-lg">Stay informed about new courses, batch openings, and important announcements.</p>
            </div>
            <Link href="/announcements" className="hidden md:inline-flex items-center gap-1.5 h-10 px-5 text-sm font-medium rounded-full text-primary bg-primary/5 border border-primary/10 hover:bg-primary/10 hover:border-primary/20 transition-all whitespace-nowrap">
              View All Announcements <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {announcements.slice(0, 4).map((a, i) => (
              <Card
                key={i}
                className="group relative p-0 overflow-hidden bg-white/70 backdrop-blur-xl border border-gray-100 hover:border-gray-200 hover:shadow-xl hover:shadow-gray-200/50 hover:-translate-y-1 transition-all duration-500"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary/30 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <Badge
                      variant="outline"
                      className={
                        a.category === "Course Update"
                          ? "bg-sky-50 text-sky-700 border-sky-200"
                          : a.category === "Guide"
                          ? "bg-violet-50 text-violet-700 border-violet-200"
                          : "bg-emerald-50 text-emerald-700 border-emerald-200"
                      }
                    >
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
        </div>
      </section>

      <section className="py-16 md:py-24 px-5 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <Badge variant="default" className="mb-4">TRUSTED BY DENTISTS WORLDWIDE</Badge>
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

      <section className="py-16 md:py-24 bg-primary/5">
        <div className="max-w-4xl mx-auto px-5 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-on-surface">
            Ready to Start Your ADC Journey?
          </h2>
          <p className="text-lg text-on-surface-variant max-w-2xl mx-auto">
            Join Lavanika Academy and Prepare with Confidence. Get expert mentorship, real exam practice, and a supportive learning environment tailored for overseas-trained dentists.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/services">Start Learning Now <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
          <p className="text-sm text-on-surface-variant">
            Trusted by 1,200+ overseas dentists worldwide
          </p>
        </div>
      </section>

      <div className="fixed bottom-6 right-6 z-40 md:hidden">
        <Button size="icon" className="h-14 w-14 rounded-full shadow-2xl" asChild>
          <a href={process.env.NEXT_PUBLIC_CONTACT_PHONE || "https://wa.me/61468434447"} target="_blank" rel="noopener noreferrer">
            <Stethoscope className="h-6 w-6" />
          </a>
        </Button>
      </div>
    </>
  )
}
