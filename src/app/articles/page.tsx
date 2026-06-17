import type { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { articles } from "@/lib/data"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Articles",
  description: "Read guides, tips, and insights for your ADC exam journey.",
}

export default function ArticlesPage() {
  return (
    <div className="pt-28 pb-20 px-5 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <Badge variant="default" className="mb-4">ARTICLES</Badge>
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Learn, Plan, Succeed</h1>
        <p className="text-lg text-on-surface-variant max-w-2xl mx-auto">
          Not sure where to begin or what to focus on? These articles will help you study smarter, avoid common mistakes, and gain clarity on the entire ADC process — from eligibility to results.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((a, i) => (
          <Card key={i} className="overflow-hidden group hover:-translate-y-1 transition-all duration-300">
            <div className="aspect-[4/3] overflow-hidden">
              <img src={a.image} alt={a.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <CardContent className="p-6 space-y-3">
              <div className="flex items-center gap-2">
                {a.tags.slice(0, 2).map((tag, j) => (
                  <span key={j} className="text-xs px-2.5 py-0.5 rounded-full bg-primary/10 text-primary font-medium">#{tag}</span>
                ))}
                <span className="text-xs text-on-surface-variant ml-auto">{a.date}</span>
              </div>
              <h2 className="text-lg font-semibold text-on-surface group-hover:text-primary transition-colors leading-snug">{a.title}</h2>
              <p className="text-sm text-on-surface-variant line-clamp-3">{a.description}</p>
              <Link href={a.href} className="inline-flex items-center gap-1 text-sm text-primary font-medium group-hover:gap-2 transition-all">
                Read More <ArrowRight className="h-4 w-4" />
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
