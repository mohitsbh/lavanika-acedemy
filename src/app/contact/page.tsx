"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import AnimateOnScroll from "@/components/animate-on-scroll"
import { Mail, Phone, MapPin, MessageSquare, Send, ExternalLink, Clock } from "lucide-react"
import { siteConfig } from "@/lib/data"

export default function ContactPage() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log("Form submitted")
  }

  return (
    <div className="pt-20">
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-surface to-primary/10" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-5 text-center">
          <Badge className="mb-5 bg-primary/10 text-primary border-primary/20">GET IN TOUCH</Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-on-surface tracking-tight leading-[1.1]">
            Contact{" "}
            <span className="text-primary">Lavanika Academy</span>
          </h1>
          <p className="text-on-surface-variant text-lg md:text-xl mt-5 max-w-2xl mx-auto leading-relaxed">
            Ready to start your ADC journey? Reach out to our team for course inquiries, bookings, or any questions you may have.
          </p>
        </div>
      </section>

      <AnimateOnScroll>
      <section className="max-w-7xl mx-auto px-5 -mt-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { icon: MessageSquare, label: "WhatsApp", value: siteConfig.phone, action: "Message on WhatsApp", href: siteConfig.whatsapp },
            { icon: Mail, label: "Email", value: siteConfig.email, action: "Send Email", href: `mailto:${siteConfig.email}` },
            { icon: Phone, label: "Phone", value: siteConfig.phone, action: "Call Us", href: `tel:${siteConfig.phone}` },
            { icon: MapPin, label: "Address", value: "View on Maps", action: "Get Directions", href: "https://maps.google.com/?q=Suite+205+838+Collins+St+Docklands+VIC+3008" },
          ].map((item, i) => (
            <Card key={i} className="group p-5 text-center bg-white/70 backdrop-blur-xl border border-gray-100 hover:border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-500">
              <CardContent className="p-0 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-500">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-on-surface">{item.label}</p>
                  <p className="text-xs text-on-surface-variant/60 mt-0.5">{item.value}</p>
                </div>
                <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="inline-flex items-center justify-center gap-1.5 h-9 px-4 text-xs font-semibold rounded-full bg-primary/5 text-primary hover:bg-primary hover:text-white transition-all duration-300 w-full">
                  {item.action} <ExternalLink className="h-3 w-3" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      </AnimateOnScroll>
      <AnimateOnScroll>
      <section className="max-w-7xl mx-auto px-5 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3">
            <div className="bg-white/70 backdrop-blur-xl border border-gray-100 rounded-3xl p-8 md:p-10 hover:shadow-lg transition-all duration-500">
              <h2 className="text-2xl font-bold text-on-surface tracking-tight mb-2">Send Us a Message</h2>
              <p className="text-sm text-on-surface-variant/70 mb-8">Fill in the form and we&apos;ll get back to you within 24 hours.</p>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-on-surface">Full Name *</label>
                    <input required className="w-full border border-gray-200 bg-white rounded-xl px-4 py-3 text-sm text-on-surface placeholder:text-on-surface-variant/40 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all" placeholder="Your name" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-on-surface">Email *</label>
                    <input required type="email" className="w-full border border-gray-200 bg-white rounded-xl px-4 py-3 text-sm text-on-surface placeholder:text-on-surface-variant/40 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all" placeholder="your@email.com" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-on-surface">Phone</label>
                    <input type="tel" className="w-full border border-gray-200 bg-white rounded-xl px-4 py-3 text-sm text-on-surface placeholder:text-on-surface-variant/40 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all" placeholder="+61 4XX XXX XXX" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-on-surface">Company / Dental School</label>
                    <input className="w-full border border-gray-200 bg-white rounded-xl px-4 py-3 text-sm text-on-surface placeholder:text-on-surface-variant/40 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all" placeholder="e.g. University of Melbourne" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-on-surface">Message *</label>
                  <textarea required className="w-full border border-gray-200 bg-white rounded-xl px-4 py-3 text-sm text-on-surface placeholder:text-on-surface-variant/40 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all resize-none" rows={4} placeholder="How can we help you?" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-on-surface">Exam Date</label>
                    <input type="date" className="w-full border border-gray-200 bg-white rounded-xl px-4 py-3 text-sm text-on-surface focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-on-surface">Preferred Course Date/s</label>
                    <input type="date" className="w-full border border-gray-200 bg-white rounded-xl px-4 py-3 text-sm text-on-surface focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-on-surface">Areas of Interest</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {["Communication OSCE", "Skilled OSCE", "Technical Skills", "Mock Exams", "ADC Written Exam"].map((area) => (
                      <label key={area} className="flex items-center gap-2.5 p-3 rounded-xl border border-gray-100 bg-white/50 hover:border-primary/30 hover:bg-primary/[0.02] cursor-pointer transition-all text-sm text-on-surface-variant">
                        <input type="checkbox" className="accent-primary w-4 h-4 rounded" />
                        {area}
                      </label>
                    ))}
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-on-surface">How Did You Hear About Us?</label>
                  <select className="w-full border border-gray-200 bg-white rounded-xl px-4 py-3 text-sm text-on-surface focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all">
                    <option value="">Select an option</option>
                    <option value="search">Search Engine</option>
                    <option value="social">Social Media</option>
                    <option value="friend">Friend / Colleague</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <label className="flex items-start gap-2.5 p-4 rounded-xl bg-primary/[0.02] border border-primary/10 text-sm text-on-surface-variant cursor-pointer">
                  <input type="checkbox" required className="accent-primary w-4 h-4 rounded mt-0.5" />
                  <span>I agree to the <a href="/legal/privacy-policy" className="text-primary font-medium hover:underline">Privacy Policy</a> and consent to Lavanika Academy collecting and storing my information.</span>
                </label>
                <button type="submit" className="inline-flex items-center justify-center gap-2 h-12 px-8 text-sm font-semibold rounded-full text-white bg-primary hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30">
                  Send Message <Send className="h-4 w-4" />
                </button>
              </form>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-5">
            <div className="bg-white/70 backdrop-blur-xl border border-gray-100 rounded-3xl p-8 hover:shadow-lg transition-all duration-500">
              <MessageSquare className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-bold text-on-surface mb-2">Join Our Facebook Community</h3>
              <p className="text-sm text-on-surface-variant/70 mb-5">Connect with 1,000+ ADC candidates for peer support, tips, and updates.</p>
              <a href={siteConfig.facebook} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 h-11 px-6 text-sm font-semibold rounded-full text-white bg-[#1877F2] hover:bg-[#1877F2]/90 transition-all shadow-lg shadow-[#1877F2]/25 w-full">
                Join Community <ExternalLink className="h-4 w-4" />
              </a>
            </div>

            <div className="bg-white/70 backdrop-blur-xl border border-gray-100 rounded-3xl p-8 hover:shadow-lg transition-all duration-500">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-on-surface">Visit Us</h3>
              </div>
              <p className="text-sm text-on-surface-variant/70 mb-4">{siteConfig.address}</p>
              <div className="rounded-2xl overflow-hidden bg-gray-100 border border-gray-200 h-40 flex items-center justify-center text-on-surface-variant/40 text-sm">
                <div className="text-center">
                  <MapPin className="h-8 w-8 mx-auto mb-1" />
                  Map
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/5 to-transparent border border-primary/10 rounded-3xl p-8 text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <p className="text-sm text-on-surface-variant/70 mb-1">Response Time</p>
              <p className="text-3xl font-bold text-primary">&lt; 24 hrs</p>
              <p className="text-xs text-on-surface-variant/60 mt-2">We typically respond within a few hours</p>
            </div>
          </div>
        </div>
      </section>
      </AnimateOnScroll>
    </div>
  )
}