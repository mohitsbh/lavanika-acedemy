import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Communication OSCE course - Basic package",
  description: "Prepare for all ADC communication stations through 8 live roleplay sessions, structured feedback, and proven frameworks taught by Dr Lavanika.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
