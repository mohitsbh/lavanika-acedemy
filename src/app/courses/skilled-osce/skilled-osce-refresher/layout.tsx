import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Skilled OSCE Refresher Course",
  description: "A focused 1-day refresher for candidates who have prior experience. Polish your techniques across X-rays, scaling, LA, extraction, and emergency response.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
