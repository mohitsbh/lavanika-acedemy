import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { StaffMember } from "@/lib/data"
import { User } from "lucide-react"

export default function StaffCard({ name, role, bio }: StaffMember) {
  return (
    <Card className="p-8 text-center group hover:-translate-y-1 transition-all duration-300">
      <CardContent className="p-0 space-y-4">
        <div className="relative mx-auto w-24 h-24">
          <div className="absolute inset-0 bg-primary-container/20 rounded-full scale-110 blur-sm group-hover:scale-125 transition-transform duration-500" />
          <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center relative z-10 border-4 border-white">
            <User className="h-10 w-10 text-primary" />
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-primary">{name}</h3>
          <p className="text-sm font-medium text-secondary uppercase tracking-wider mt-1">{role}</p>
        </div>
        <p className="text-sm text-on-surface-variant leading-relaxed">{bio}</p>
      </CardContent>
    </Card>
  )
}
