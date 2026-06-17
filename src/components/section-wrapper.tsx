import { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface SectionWrapperProps {
  children: ReactNode
  className?: string
  innerClassName?: string
  withOrbs?: boolean
  withGrid?: boolean
}

export default function SectionWrapper({ children, className, innerClassName, withOrbs = false, withGrid = false }: SectionWrapperProps) {
  return (
    <section className={cn("relative py-16 md:py-24 overflow-hidden", className)}>
      {withOrbs && (
        <>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/[0.03] rounded-full blur-[100px] pointer-events-none" />
        </>
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.02] via-transparent to-primary/[0.02]" />
      {withGrid && (
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)", backgroundSize: "40px 40px" }} />
      )}
      <div className={cn("relative max-w-7xl mx-auto px-5", innerClassName)}>
        {children}
      </div>
    </section>
  )
}
