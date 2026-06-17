import Link from "next/link"

const tickerItems = [
  { text: "June-2026 Communication OSCE batch bookings closed! Sep-2026 booking in progress!", href: "/courses/communication-osce" },
  { text: "Technical Skills 2-week intensive — enrol now to secure your place.", href: "/courses/technical-skills" },
]

export default function NewsTicker() {
  return (
    <section className="bg-background/80 backdrop-blur border-y border-black/10">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-white/80 backdrop-blur">
          <div className="marquee" role="presentation">
            <div className="marquee__track">
              {[...Array(4)].map((_, idx) =>
                tickerItems.map((item, i) => (
                  <Link
                    key={`${idx}-${i}`}
                    href={item.href}
                    className="marquee__item"
                  >
                    {item.text}
                  </Link>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
