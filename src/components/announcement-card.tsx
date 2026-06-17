import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Announcement } from "@/lib/data"

export default function AnnouncementCard({ title, date, description, category }: Announcement) {
  return (
    <Card className="p-6 group hover:-translate-y-1 transition-all duration-300">
      <CardContent className="p-0 space-y-3">
        <div className="flex items-center gap-2 flex-wrap">
          <Badge variant={category === "Course Update" ? "destructive" : "default"}>{category}</Badge>
          <span className="text-xs text-on-surface-variant">{date}</span>
        </div>
        <h3 className="text-lg font-semibold text-on-surface group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-sm text-on-surface-variant">{description}</p>
      </CardContent>
    </Card>
  )
}
