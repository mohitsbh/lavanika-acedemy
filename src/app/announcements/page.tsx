import type { Metadata } from "next"
import PageHeader from "@/components/page-header"
import SectionWrapper from "@/components/section-wrapper"
import AnnouncementCard from "@/components/announcement-card"
import { announcements } from "@/lib/data"

export const metadata: Metadata = {
  title: "Announcements",
  description: "Stay updated with the latest course announcements, batch openings, and ADC exam updates from Lavanika Academy.",
}

export default function AnnouncementsPage() {
  return (
    <div className="pt-20">
      <PageHeader
        badge="LATEST UPDATES"
        title={<>Announcements &amp; <span className="text-primary">Batch Updates</span></>}
        description="Stay updated with batch openings, course news, and the latest from Lavanika Academy."
      />
      <SectionWrapper>
        <div className="max-w-3xl mx-auto space-y-6">
          {announcements.map((a, i) => (
            <AnnouncementCard key={i} {...a} />
          ))}
        </div>
      </SectionWrapper>
    </div>
  )
}
