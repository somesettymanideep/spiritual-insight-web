import { SiteLayout, PageHero } from "@/components/SiteLayout";
import { SITE } from "@/lib/site";

export default function PrivacyPolicyPage() {
  return (
    <SiteLayout>
      <PageHero
        title="Privacy Policy"
        subtitle="This page is maintained by Sri Durga Matha Astrology to explain how we handle your information."
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-invert max-w-none text-muted-foreground">
            <p className="text-sm">
              <strong className="text-foreground">Note:</strong> This privacy policy is provided by the app owner for general information. It is not legal advice or a certification of compliance with any specific law or regulation.
            </p>

            <h2 className="font-display text-2xl font-semibold text-foreground mt-10 mb-4">1. Information We Collect</h2>
            <p className="mb-4">
              When you use our website, consultation forms, WhatsApp, email, or phone services, we may collect personal information such as your name, phone number, email address, and any details you share about your situation so we can provide astrology and spiritual guidance.
            </p>

            <h2 className="font-display text-2xl font-semibold text-foreground mt-10 mb-4">2. How We Use Your Information</h2>
            <ul className="list-disc pl-5 mb-4 space-y-2">
              <li>Respond to your questions and consultation requests.</li>
              <li>Schedule and deliver astrology, pooja, and spiritual services.</li>
              <li>Communicate with you via phone, WhatsApp, or email.</li>
              <li>Maintain records of our consultations as needed to serve you.</li>
            </ul>

            <h2 className="font-display text-2xl font-semibold text-foreground mt-10 mb-4">3. Sharing of Information</h2>
            <p className="mb-4">
              We do not sell or rent your personal information. We only share your information when necessary to deliver the services you request, or when required by law.
            </p>

            <h2 className="font-display text-2xl font-semibold text-foreground mt-10 mb-4">4. Data Security</h2>
            <p className="mb-4">
              We use reasonable safeguards to protect the information you provide. However, no internet transmission or storage system can be guaranteed to be completely secure.
            </p>

            <h2 className="font-display text-2xl font-semibold text-foreground mt-10 mb-4">5. Data Retention</h2>
            <p className="mb-4">
              We keep your information only for as long as needed to provide our services and maintain business records. You may contact us to ask about deleting your information.
            </p>

            <h2 className="font-display text-2xl font-semibold text-foreground mt-10 mb-4">6. Your Choices</h2>
            <p className="mb-4">
              You can choose not to provide certain information, but this may limit our ability to respond or deliver services. You may also contact us to update or request deletion of your personal details.
            </p>

            <h2 className="font-display text-2xl font-semibold text-foreground mt-10 mb-4">7. Third-Party Services</h2>
            <p className="mb-4">
              Our website may use third-party services such as hosting, analytics, and messaging platforms (for example, WhatsApp). These services have their own privacy practices, which we encourage you to review.
            </p>

            <h2 className="font-display text-2xl font-semibold text-foreground mt-10 mb-4">8. Changes to This Policy</h2>
            <p className="mb-4">
              We may update this privacy policy from time to time. The latest version will always be posted on this page.
            </p>

            <h2 className="font-display text-2xl font-semibold text-foreground mt-10 mb-4">9. Contact Us</h2>
            <p className="mb-4">
              If you have any questions about this privacy policy or how we handle your information, please contact us:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Email: <a href={`mailto:${SITE.email}`} className="text-primary hover:underline">{SITE.email}</a></li>
              <li>Phone: <a href={SITE.phoneHref} className="text-primary hover:underline">{SITE.phone}</a></li>
              <li>Address: {SITE.address}</li>
            </ul>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
