import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Technical Skills Beginner Course",
  description: "A comprehensive 2-week onsite beginner course covering composite, amalgam, provisional, crown cutting, caries, endo, and infection control.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
