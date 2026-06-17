import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Technical Skills Refresher Course",
  description: "A 1-week refresher for candidates who have completed basic training. Refine speed, precision, and efficiency under exam conditions.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
