import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Communication OSCE course - Course Records",
  description: "Access to complete course recordings for self-paced study. Review all sessions at your own pace without live participation.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
