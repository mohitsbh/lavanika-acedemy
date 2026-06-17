import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Star, GraduationCap, Award } from "lucide-react"
import { heroStats } from "@/lib/data"

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-20">
      <div className="absolute inset-0">
        <img src="/hero-bg.webp" alt="" className="w-full h-full object-cover mix-blend-multiply" fetchPriority="high" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/60" />
      </div>
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)", backgroundSize: "40px 40px" }} />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 py-16 md:py-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-white/10 border border-white/20 text-sm text-white font-medium">
            <GraduationCap className="h-4 w-4" />
            Trusted by 1,200+ overseas dentists worldwide
          </div>

          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.08] tracking-tight">
            Ace Your{" "}
            <span className="text-amber-400 relative whitespace-nowrap">
              ADC Exam
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-amber-400/60 to-transparent rounded-full" />
            </span>
          </h1>

          <p className="text-white/80 mt-6 text-lg md:text-xl leading-relaxed max-w-xl">
            Expert-led preparation for every stage of the ADC exam &mdash; live coaching, real mock exams, and a community that&apos;s already helped 1,200+ overseas dentists pass.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">
            <Button size="lg" className="shadow-lg shadow-black/25 hover:shadow-xl hover:shadow-black/30 transition-shadow" asChild>
              <Link href="/courses">
                Enrol Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Link
              href="/review"
              className="inline-flex items-center justify-center h-12 px-8 text-sm font-semibold rounded-full text-white ring-1 ring-white/40 hover:ring-white/80 hover:bg-white/10 transition-all active:scale-[0.97]"
            >
              Our Success Stories
            </Link>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-12 pt-8 border-t border-white/15">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-1.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <span className="text-sm font-semibold text-white">{heroStats[0].value}</span>
              <span className="text-sm text-white/60">Rating</span>
            </div>
            <span className="w-px h-5 bg-white/15" aria-hidden="true" />
            <div className="flex items-center gap-2">
              <Award className="h-4 w-4 text-amber-400" />
              <span className="text-sm font-semibold text-white">750+</span>
              <span className="text-sm text-white/60">Courses</span>
            </div>
            <span className="w-px h-5 bg-white/15" aria-hidden="true" />
            <div className="flex items-center gap-2">
              <Award className="h-4 w-4 text-amber-400" />
              <span className="text-sm font-semibold text-white">100+</span>
              <span className="text-sm text-white/60">Five-Star Reviews</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
