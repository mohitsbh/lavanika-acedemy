import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Skilled OSCE Beginner Course",
  description: "Comprehensive 2-day beginner course covering all ADC Skilled OSCE stations from the ground up. Build confidence from day one.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
