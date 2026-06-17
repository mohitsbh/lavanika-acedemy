import { ReactNode } from "react"
import { Badge } from "@/components/ui/badge"

interface PageHeaderProps {
  badge?: string
  title: ReactNode
  description?: string
  children?: ReactNode
}

export default function PageHeader({ badge, title, description, children }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-surface to-primary/10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="relative max-w-4xl mx-auto px-5 text-center">
        {badge && <Badge className="mb-5 bg-primary/10 text-primary border-primary/20">{badge}</Badge>}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-on-surface tracking-tight leading-[1.1]">
          {title}
        </h1>
        {description && (
          <p className="text-on-surface-variant text-lg md:text-xl mt-5 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        )}
        {children}
      </div>
    </section>
  )
}
