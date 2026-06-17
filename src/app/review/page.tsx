import type { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import AnimateOnScroll from "@/components/animate-on-scroll"
import { Star, Quote, ExternalLink } from "lucide-react"
import { reviews, siteConfig } from "@/lib/data"

export const metadata: Metadata = {
  title: "Reviews",
  description: "Read real reviews from dentists who passed the ADC exam with Lavanika Academy.",
}

function GoogleLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  )
}

export default function ReviewPage() {
  return (
    <div className="pt-20">
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-surface to-primary/10" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-5 text-center">
          <Badge className="mb-5 bg-primary/10 text-primary border-primary/20">TESTIMONIALS</Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-on-surface tracking-tight leading-[1.1]">
            Real Results.{" "}
            <span className="text-primary">Real Dentists. Real Journeys.</span>
          </h1>
          <p className="text-on-surface-variant text-lg md:text-xl mt-5 max-w-2xl mx-auto leading-relaxed">
            Hear from our successful candidates &mdash; real stories of dedication, expert guidance, and ADC success from dentists around the world.
          </p>
          <div className="flex items-center justify-center gap-3 mt-8">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 backdrop-blur border border-gray-100 shadow-sm">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-sm font-semibold text-on-surface">{siteConfig.rating}</span>
              <span className="text-xs text-on-surface-variant/60">| {siteConfig.reviews} reviews</span>
              <GoogleLogo className="h-4 w-4 ml-1" />
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-5 -mt-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { label: "Average Rating", value: `${siteConfig.rating}`, sub: "out of 5.0", icon: Star },
            { label: "Google Reviews", value: `${siteConfig.reviews}+`, sub: "verified reviews", icon: GoogleLogo },
            { label: "Candidates Trained", value: `${siteConfig.candidatesTrained}+`, sub: "worldwide", icon: null },
            { label: "Countries Reached", value: `${siteConfig.countriesReached}+`, sub: "across the globe", icon: null },
          ].map((s, i) => (
            <Card key={i} className="group p-5 text-center bg-white/70 backdrop-blur-xl border border-gray-100 hover:border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-500">
              <CardContent className="p-0 space-y-1">
                <div className="text-2xl font-bold text-primary">{s.value}</div>
                <p className="text-sm font-medium text-on-surface">{s.label}</p>
                <p className="text-xs text-on-surface-variant/60">{s.sub}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-5 py-20 md:py-28">
        <AnimateOnScroll>
        <div className="mb-14">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/[0.03] to-transparent border border-primary/10 p-8 md:p-10">
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-[80px] pointer-events-none" />
            <Quote className="h-8 w-8 text-primary/30 mb-4" />
            <blockquote className="text-lg md:text-xl text-on-surface font-medium leading-relaxed italic max-w-4xl">
              &ldquo;{reviews[0].text}&rdquo;
            </blockquote>
            <div className="mt-6 flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400/20 to-amber-400/5 flex items-center justify-center text-amber-600 font-bold text-lg capitalize">
                  {reviews[0].name.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <div className="text-sm font-semibold text-on-surface capitalize">{reviews[0].name}</div>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <div className="flex">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-xs text-on-surface-variant/60">{reviews[0].date}</span>
                  </div>
                </div>
              </div>
              {reviews[0].url && (
                <a href={reviews[0].url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm text-primary font-medium hover:underline">
                  Read on Google <ExternalLink className="h-3.5 w-3.5" />
                </a>
              )}
            </div>
          </div>
        </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {reviews.slice(1).map((r, i) => (
            <AnimateOnScroll key={i}>
            <Card className="group h-full p-6 bg-white/70 backdrop-blur-xl border border-gray-100 hover:border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-500">
              <CardContent className="p-0 space-y-4">
                <div className="flex items-center justify-between flex-wrap gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center text-primary font-semibold text-sm capitalize">
                      {r.name.split(" ").map(n => n[0]).join("")}
                    </div>
                    <div>
                      <h3 className="font-semibold text-on-surface capitalize text-sm">{r.name}</h3>
                      <span className="text-xs text-on-surface-variant/60">{r.date}</span>
                    </div>
                  </div>
                  <div className="flex">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-on-surface-variant/80 leading-relaxed">{r.text}</p>
                <div className="flex items-center gap-2 pt-1">
                  <GoogleLogo className="h-4 w-4" />
                  <span className="text-xs text-on-surface-variant/60">Google Review</span>
                  {r.url && (
                    <a href={r.url} target="_blank" rel="noopener noreferrer" className="ml-auto inline-flex items-center gap-1 text-xs text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      Read on Google <ExternalLink className="h-3 w-3" />
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
            </AnimateOnScroll>
          ))}
        </div>
      </section>
    </div>
  )
}