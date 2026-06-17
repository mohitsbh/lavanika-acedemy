import { ReactNode } from "react"
import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"

interface GlassCardProps {
  children: ReactNode
  className?: string
  contentClassName?: string
  hover?: boolean
}

export default function GlassCard({ children, className, contentClassName, hover = true }: GlassCardProps) {
  return (
    <Card className={cn(
      "p-0 overflow-hidden border border-primary/5 bg-white/70 backdrop-blur-xl",
      hover && "hover:border-primary/20 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1.5 transition-all duration-500",
      className
    )}>
      <CardContent className={cn("p-7 space-y-4", contentClassName)}>
        {children}
      </CardContent>
    </Card>
  )
}

export function GlassCardIcon({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn(
      "w-11 h-11 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center",
      className
    )}>
      {children}
    </div>
  )
}
