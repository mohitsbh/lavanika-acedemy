import type { Metadata } from "next"
import { siteConfig } from "@/lib/data"

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of Service for ${siteConfig.companyName} — governing the use of our website and enrolment in our courses.`,
}

export default function TermsOfServicePage() {
  return (
    <div className="pt-28 pb-20 px-5 max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold text-primary mb-2">Terms of Service</h1>
      <p className="text-on-surface-variant mb-10">Last updated: 17 June 2026</p>

      <div className="glass rounded-3xl p-8 md:p-12 space-y-8 text-on-surface-variant leading-relaxed">
        <section>
          <h2 className="text-2xl font-semibold text-on-surface mb-3">1. Acceptance of Terms</h2>
          <p>By accessing or using the {siteConfig.companyName} website, enrolling in any course, or otherwise engaging with our services, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you must not use our website or services.</p>
          <p className="mt-2">These terms apply to all visitors, users, and students of {siteConfig.companyName}.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-on-surface mb-3">2. Description of Services</h2>
          <p>{siteConfig.companyName} provides ADC examination preparation courses including but not limited to Communication OSCE, Skilled OSCE, Technical Skills, Mock Exams, and ADC Written Exam coaching. Services are delivered online, onsite at our Melbourne facility, or in a hybrid format as specified for each course.</p>
          <p className="mt-2">Course descriptions, schedules, fees, and availability are published on our website and may be updated from time to time. We reserve the right to modify or discontinue any course with reasonable notice to enrolled students.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-on-surface mb-3">3. Booking &amp; Payment</h2>
          <p>Course bookings are confirmed only upon receipt of full payment or a deposit as specified at the time of enrolment. Payment must be made via the methods provided on our website or as agreed in writing.</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>All prices are quoted in Australian Dollars (AUD) unless stated otherwise</li>
            <li>Discounts and promotional offers are subject to specific terms and conditions</li>
            <li>Course fees are non-transferable between different courses without prior approval</li>
            <li>We reserve the right to cancel or reschedule courses due to insufficient enrolment or unforeseen circumstances. In such cases, a full refund or credit will be offered</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-on-surface mb-3">4. Cancellation Policy</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Cancellations made 14 or more days before the course start date: full refund minus an administrative fee of 10% of the course fee</li>
            <li>Cancellations made 7–13 days before the course start date: 50% refund</li>
            <li>Cancellations made less than 7 days before the course start date: no refund</li>
            <li>No-shows on the day of the course are not eligible for a refund or transfer</li>
            <li>Refund requests must be submitted in writing to <a href={`mailto:${siteConfig.email}`} className="text-primary hover:underline">{siteConfig.email}</a></li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-on-surface mb-3">5. Intellectual Property</h2>
          <p>All course materials, including but not limited to presentations, recordings, handouts, frameworks, and assessment tools, are the intellectual property of {siteConfig.companyName}. These materials are provided for your personal educational use only.</p>
          <p className="mt-2">You may not reproduce, distribute, modify, or commercially exploit any course materials without our prior written consent. Recording or unauthorised sharing of live sessions is strictly prohibited.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-on-surface mb-3">6. Limitation of Liability</h2>
          <p>{siteConfig.companyName} provides educational preparation services for the ADC examination. While we strive to deliver high-quality instruction and support, we do not guarantee specific exam outcomes or results. Your success in the ADC examination depends on various factors including your own preparation, effort, and the assessment criteria set by the Australian Dental Council.</p>
          <p className="mt-2">To the maximum extent permitted by Australian law, {siteConfig.companyName} shall not be liable for any indirect, incidental, or consequential damages arising from your use of our services.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-on-surface mb-3">7. Governing Law</h2>
          <p>These Terms of Service are governed by and construed in accordance with the laws of Victoria, Australia. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts of Victoria, Australia.</p>
          <p className="mt-2">If any provision of these terms is found to be unenforceable or invalid, the remaining provisions shall continue to apply.</p>
        </section>
      </div>
    </div>
  )
}
