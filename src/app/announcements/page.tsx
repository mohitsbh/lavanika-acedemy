import type { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import AnnouncementCard from "@/components/announcement-card"
import { announcements } from "@/lib/data"

export const metadata: Metadata = {
  title: "Announcements",
  description: "Stay updated with the latest course announcements, batch openings, and ADC exam updates from Lavanika Academy.",
}

export default function AnnouncementsPage() {
  return (
    <div className="pt-28 pb-20 px-5 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <Badge variant="default" className="mb-4">LATEST UPDATES</Badge>
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Announcements</h1>
        <p className="text-lg text-on-surface-variant max-w-2xl mx-auto">
          Stay updated with batch openings, course news, and the latest from Lavanika Academy.
        </p>
      </div>

      <div className="space-y-6">
        {announcements.map((a, i) => (
          <AnnouncementCard key={i} {...a} />
        ))}
      </div>
    </div>
  )
}
