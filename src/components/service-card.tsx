import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import type { Course } from "@/lib/data"

export default function ServiceCard({ title, description, href, price, image }: Course) {
  return (
    <Link href={href}>
      <Card className="h-full overflow-hidden group hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 cursor-pointer border border-transparent hover:border-primary/20">
        <div className="aspect-[16/10] overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110" />
        </div>
        <CardContent className="p-5 space-y-3">
          <h3 className="text-lg font-semibold text-on-surface group-hover:text-primary transition-colors leading-snug">{title}</h3>
          <p className="text-sm text-on-surface-variant line-clamp-2">{description}</p>
          <div className="flex items-center justify-between pt-1">
            <span className="text-xs font-semibold text-primary">{price}</span>
            <span className="flex items-center gap-1 text-sm text-primary font-medium group-hover:gap-3 transition-all">
              Explore <ArrowRight className="h-4 w-4 transition-all group-hover:translate-x-1" />
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
