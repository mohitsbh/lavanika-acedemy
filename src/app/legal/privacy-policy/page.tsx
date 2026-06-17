import type { Metadata } from "next"
import { siteConfig } from "@/lib/data"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy of ${siteConfig.companyName} — how we collect, use, and protect your personal information.`,
}

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-28 pb-20 px-5 max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold text-primary mb-2">Privacy Policy</h1>
      <p className="text-on-surface-variant mb-10">Last updated: 17 June 2026</p>

      <div className="glass rounded-3xl p-8 md:p-12 space-y-8 text-on-surface-variant leading-relaxed">
        <section>
          <h2 className="text-2xl font-semibold text-on-surface mb-3">1. Information We Collect</h2>
          <p>We collect personal information that you voluntarily provide to us when you enquire about or enrol in our courses, including:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Full name and contact details (email, phone number, address)</li>
            <li>Professional qualifications and educational background</li>
            <li>Course preferences, exam dates, and areas of interest</li>
            <li>Payment information processed through secure third-party gateways</li>
            <li>Communications you send to us via email, WhatsApp, or our contact form</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-on-surface mb-3">2. How We Use Your Information</h2>
          <p>We use your personal information for the following purposes:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>To respond to your enquiries and provide course information</li>
            <li>To process enrolments and manage your course participation</li>
            <li>To communicate important updates, schedules, and exam-related information</li>
            <li>To improve our courses and services based on feedback</li>
            <li>To send relevant promotional materials (only with your consent)</li>
            <li>To comply with legal and regulatory obligations</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-on-surface mb-3">3. Data Storage &amp; Security</h2>
          <p>We implement reasonable technical and organisational measures to protect your personal information from unauthorised access, alteration, disclosure, or destruction. Your data is stored on secure servers located in Australia and accessed only by authorised personnel who require it to perform their duties.</p>
          <p className="mt-2">We retain your personal information only for as long as necessary to fulfil the purposes for which it was collected, or as required by Australian law.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-on-surface mb-3">4. Third-Party Services</h2>
          <p>We may share your information with trusted third-party service providers who assist us in operating our business, including payment processors, email communication platforms, and learning management systems. These providers are contractually bound to protect your data and use it only for the services we engage them for.</p>
          <p className="mt-2">We do not sell, trade, or rent your personal information to third parties for marketing purposes.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-on-surface mb-3">5. Your Rights</h2>
          <p>Under the Australian Privacy Act 1988 (Cth), you have the right to:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate or incomplete information</li>
            <li>Request deletion of your personal information (subject to legal obligations)</li>
            <li>Withdraw consent for marketing communications at any time</li>
            <li>Lodge a complaint with the Office of the Australian Information Commissioner (OAIC)</li>
          </ul>
          <p className="mt-2">To exercise any of these rights, please contact us at <a href={`mailto:${siteConfig.email}`} className="text-primary hover:underline">{siteConfig.email}</a>.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-on-surface mb-3">6. Contact</h2>
          <p>If you have any questions about this Privacy Policy or how we handle your personal information, please contact us:</p>
          <div className="mt-2 space-y-1">
            <p><strong className="text-on-surface">Email:</strong> <a href={`mailto:${siteConfig.email}`} className="text-primary hover:underline">{siteConfig.email}</a></p>
            <p><strong className="text-on-surface">Phone:</strong> {siteConfig.phone}</p>
            <p><strong className="text-on-surface">Address:</strong> {siteConfig.address}</p>
          </div>
        </section>
      </div>
    </div>
  )
}
