"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useRef, useEffect } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { siteConfig } from "@/lib/data"

const navLinks = [
  { href: "/", label: "Home" },
  {
    label: "Our Courses",
    href: "/courses",
    dropdown: [
      { href: "/courses/communication-osce", label: "Communication OSCE" },
      { href: "/courses/skilled-osce", label: "Skilled OSCE" },
      { href: "/courses/technical-skills", label: "Technical Skills" },
      { href: "/courses/mock-exams", label: "Mock Exams" },
      { href: "/courses/adc-written-exam", label: "ADC Written Exam" },
      { href: "/courses/others", label: "Others" },
    ],
  },
  { href: "/about", label: "About Us" },
  { href: "/review", label: "Reviews" },
  { href: "/articles", label: "Articles" },
  { href: "/contact", label: "Contact" },
]

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLLIElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-2xl border-b border-gray-200/60 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-20 px-5">
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <img src="/logo.webp" alt="Lavanika Academy" className="h-10 sm:h-12 w-auto object-contain" />
          <span className="hidden sm:inline text-base tracking-tight leading-none">
            <span style={{ color: "#B00070" }} className="font-semibold">Lavanika</span>{" "}
            <span style={{ color: "#f2a007" }} className="font-medium">Academy</span>
          </span>
        </Link>

        <nav className="flex items-center">
          <ul className="hidden lg:flex lg:items-center lg:gap-0.5">
            {navLinks.map((link) =>
              link.dropdown ? (
                <li key={link.label} className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className={cn(
                      "flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-full transition-colors",
                      pathname.startsWith("/courses")
                        ? "text-primary bg-primary/10 font-semibold"
                        : "text-gray-700 hover:text-primary hover:bg-primary/5"
                    )}
                  >
                    {link.label}
                    <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", dropdownOpen && "rotate-180")} />
                  </button>
                  {dropdownOpen && (
                    <div className="absolute top-full mt-1.5 left-0 bg-white/90 backdrop-blur-2xl border border-gray-200/60 rounded-2xl shadow-lg py-2 min-w-[230px] z-50">
                      {link.dropdown.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          onClick={() => setDropdownOpen(false)}
                          className={cn(
                            "block px-5 py-2.5 text-sm transition-colors",
                            pathname === sub.href
                              ? "text-primary font-semibold bg-primary/10"
                              : "text-on-surface-variant hover:text-primary hover:bg-white/30"
                          )}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              ) : (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "px-3 py-2 text-sm font-medium rounded-full transition-colors",
                      pathname === link.href
                        ? "text-primary bg-primary/10 font-semibold"
                        : "text-gray-700 hover:text-primary hover:bg-primary/5"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            )}
          </ul>

          <div className="hidden lg:flex items-center gap-2 ml-3 pl-3 border-l border-gray-200/60">
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3.5 py-2 text-sm font-medium rounded-full text-gray-600 hover:text-primary transition-colors"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="#25D366" className="shrink-0">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-5 py-2 text-sm font-semibold rounded-full text-white bg-primary hover:bg-primary/90 transition-all shadow-sm"
            >
              Contact Us
            </Link>
          </div>

          <button
            className="lg:hidden relative z-50 ml-2 flex items-center justify-center w-11 h-11 rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors active:scale-95"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5 text-gray-700" /> : <Menu className="h-5 w-5 text-gray-700" />}
          </button>
        </nav>
      </div>

      {open && (
        <>
          <div className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm lg:hidden" onClick={() => setOpen(false)} />
          <div className="fixed inset-x-0 top-0 z-50 lg:hidden bg-white/95 backdrop-blur-2xl border-b border-gray-200/60 shadow-2xl max-h-screen overflow-y-auto pt-20">
            <div className="px-5 pb-8 pt-2 flex flex-col gap-0.5">
              {navLinks.map((link) =>
                link.dropdown ? (
                  <div key={link.label} className="mb-1">
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "flex items-center justify-between py-3.5 px-4 text-base font-medium rounded-2xl transition-colors",
                        pathname.startsWith("/courses")
                          ? "text-primary bg-primary/10 font-semibold"
                          : "text-gray-700"
                      )}
                    >
                      {link.label}
                      <ChevronDown className="h-4 w-4 text-gray-400" />
                    </Link>
                    <div className="ml-4 pl-4 border-l-2 border-primary/20 mt-1 flex flex-col gap-0.5">
                      {link.dropdown.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          onClick={() => setOpen(false)}
                          className={cn(
                            "block py-3 px-4 text-sm rounded-xl transition-colors",
                            pathname === sub.href
                              ? "text-primary font-semibold bg-primary/5"
                              : "text-gray-600 hover:text-primary hover:bg-gray-50"
                          )}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "py-3.5 px-4 text-base font-medium rounded-2xl transition-colors",
                      pathname === link.href
                        ? "text-primary bg-primary/10 font-semibold"
                        : "text-gray-700 hover:bg-gray-50"
                    )}
                  >
                    {link.label}
                  </Link>
                )
              )}
              <div className="mt-4 pt-4 border-t border-gray-200/60 flex flex-col gap-3">
                <a
                  href={siteConfig.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3.5 px-4 text-base font-medium rounded-2xl bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] hover:bg-[#25D366]/20 transition-colors"
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  WhatsApp
                </a>
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center py-3.5 px-4 text-base font-semibold rounded-2xl text-white bg-primary hover:bg-primary/90 transition-colors shadow-sm"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  )
}
