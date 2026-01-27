import React from "react";
import SectionTitle from "../components/SectionTitle.jsx";

export default function PrivacyPolicy() {
  return (
    <div>
      {/* HERO (same style as your other pages) */}
      <section className="bg-ink-900">
        <div className="container-app py-14 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white/80 mt-3">
            Legal
          </div>

          <h1 className="mt-5 text-4xl font-black tracking-tight text-white sm:text-5xl">
            Privacy Policy
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-white/70">
            How we collect, use, and protect your information when you visit
            Jubilee Apparel’s website.
          </p>
        </div>

        {/* soft transition */}
        <div className="h-14 bg-gradient-to-b from-white/0 to-white" />
      </section>

      {/* CONTENT */}
      <section className="bg-white">
        <div className="container-app py-14">
          <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
            {/* MAIN */}
            <div className="min-w-0">
              <div className="rounded-2xl border border-ink-900/10 bg-white p-7 shadow-soft">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <div className="text-xs font-semibold text-ink-500">
                      Effective Date
                    </div>
                    <div className="text-sm font-extrabold text-ink-900">
                      January 16, 2026
                    </div>
                  </div>

                  <div className="rounded-xl border border-ink-900/10 bg-ink-50 px-4 py-3 text-xs text-ink-700">
                    This policy applies to{" "}
                    <span className="font-bold text-ink-900">
                      www.jubilee-apparel.com
                    </span>
                  </div>
                </div>

                <div className="mt-6 space-y-6 text-sm leading-7 text-ink-700">
                  <p>
                    JUBILEE APPAREL PVT LTD (“we,” “our,” or “us”) values your
                    privacy and is committed to protecting your personal
                    information and maintaining a secure website experience.
                    This Privacy Policy explains how we collect, use, share, and
                    safeguard information when you visit our website or contact
                    us through forms or email.
                  </p>

                  <PolicySection title="1) Information We Collect">
                    <ul className="mt-3 space-y-2">
                      <li>
                        <span className="font-bold text-ink-900">
                          Information you provide:
                        </span>{" "}
                        name, email, phone number, company name, country/address
                        (if provided), and inquiry details (including any files
                        you voluntarily share such as tech packs/specs).
                      </li>
                      <li>
                        <span className="font-bold text-ink-900">
                          Automatically collected:
                        </span>{" "}
                        IP address, device/browser type, pages visited, time
                        spent, referral pages, and basic security/diagnostic
                        logs.
                      </li>
                    </ul>
                  </PolicySection>

                  <PolicySection title="2) How We Use Information">
                    <ul className="mt-3 space-y-2">
                      <li>Respond to inquiries and communicate with buyers.</li>
                      <li>
                        Provide requested information about products,
                        capabilities, and services.
                      </li>
                      <li>Improve website functionality and performance.</li>
                      <li>
                        Maintain website security and prevent spam, fraud, and
                        misuse.
                      </li>
                      <li>Comply with applicable legal obligations.</li>
                    </ul>
                    <div className="mt-4 rounded-xl border border-ink-900/10 bg-ink-50 p-4 text-xs text-ink-700">
                      <span className="font-bold text-ink-900">Note:</span> We
                      do not sell, rent, or trade your personal information.
                    </div>
                  </PolicySection>

                  <PolicySection title="3) Website Security & Abuse Prevention">
                    <p className="mt-3">
                      We use reasonable measures designed to keep the website
                      secure and reliable. This may include:
                    </p>
                    <ul className="mt-3 space-y-2">
                      <li>Traffic monitoring and security logging</li>
                      <li>Rate limiting / anti-bot protections</li>
                      <li>Filtering suspicious or malicious requests</li>
                      <li>Secure hosting and access controls</li>
                      <li>Restricted internal access to inquiry data</li>
                    </ul>
                    <p className="mt-3">
                      If we detect suspicious activity, we may block access from
                      certain IP addresses/devices to protect visitors and the
                      website.
                    </p>
                  </PolicySection>

                  <PolicySection title="4) Cookies & Tracking">
                    <p className="mt-3">
                      We may use cookies or similar technologies to improve
                      performance, analyze traffic, and enhance user experience.
                      You can disable cookies in your browser settings, but some
                      features may be affected.
                    </p>
                  </PolicySection>

                  <PolicySection title="5) Disclosure of Information">
                    <p className="mt-3">
                      We may share limited information only when necessary:
                    </p>
                    <ul className="mt-3 space-y-2">
                      <li>
                        With trusted service providers assisting website
                        operations (hosting, analytics, forms) under
                        confidentiality obligations.
                      </li>
                      <li>When required by law or legal process.</li>
                      <li>
                        To protect the rights, property, safety of Jubilee
                        Apparel and website visitors.
                      </li>
                    </ul>
                  </PolicySection>

                  <PolicySection title="6) Data Retention">
                    <p className="mt-3">
                      We keep personal information only as long as reasonably
                      necessary for business communication, operational record
                      keeping, and compliance. Security logs may be retained
                      longer for threat detection and abuse prevention.
                    </p>
                  </PolicySection>

                  <PolicySection title="7) Data Security">
                    <p className="mt-3">
                      We apply reasonable administrative, technical, and
                      physical safeguards. However, no online transmission is
                      fully secure. Please avoid sending highly sensitive
                      information through the website forms.
                    </p>
                  </PolicySection>

                  <PolicySection title="8) Your Rights">
                    <p className="mt-3">
                      Depending on your location, you may request access,
                      correction, deletion, or withdrawal of consent (where
                      applicable). Contact us using the details below.
                    </p>
                  </PolicySection>

                  <PolicySection title="9) Third-Party Links">
                    <p className="mt-3">
                      Our website may contain links to third-party websites. We
                      are not responsible for their privacy practices.
                    </p>
                  </PolicySection>

                  <PolicySection title="10) Children’s Privacy">
                    <p className="mt-3">
                      This website is not directed to children under 13. We do
                      not knowingly collect personal information from children.
                    </p>
                  </PolicySection>

                  <PolicySection title="11) Updates to This Policy">
                    <p className="mt-3">
                      We may update this Privacy Policy periodically. Any
                      changes will be posted here with an updated effective
                      date.
                    </p>
                  </PolicySection>

                  <PolicySection title="12) Contact Information">
                    <div className="mt-3 grid gap-3 sm:grid-cols-2">
                      <InfoRow label="Company" value="JUBILEE APPAREL PVT LTD" />
                      <InfoRow
                        label="Website"
                        value="www.jubilee-apparel.com"
                      />
                      <InfoRow label="Email" value="info@jubilee-apparel.com" />
                      <InfoRow label="Phone" value="+92 213 35080005" />
                      <div className="sm:col-span-2 rounded-xl border border-ink-900/10 bg-ink-50 p-4 text-xs text-ink-700">
                        <div className="font-bold text-ink-900">Address</div>
                        <div className="mt-1">
                          PLOT NO 2 &amp; 3, SECTOR A-IV, KEPZ, KARACHI – 75150,
                          PAKISTAN
                        </div>
                      </div>
                    </div>
                  </PolicySection>
                </div>
              </div>
            </div>

            {/* SIDEBAR */}
            <aside className="space-y-5">
              <div className="rounded-2xl border border-ink-900/10 bg-ink-50 p-6 shadow-soft">
                <div className="text-sm font-extrabold text-ink-900">
                  Quick summary
                </div>
                <ul className="mt-3 space-y-2 text-sm text-ink-700">
                  <li>• We use your info to respond to inquiries.</li>
                  <li>• We don’t sell personal data.</li>
                  <li>• We use security logs to prevent misuse.</li>
                  <li>• You can request updates or deletion.</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-ink-900/10 bg-white p-6 shadow-soft">
                <div className="text-sm font-extrabold text-ink-900">
                  Questions?
                </div>
                <p className="mt-2 text-sm text-ink-700">
                  For privacy-related requests or questions, email us:
                </p>

                <a
                  href="mailto:info@jubilee-apparel.com?subject=Privacy%20Policy%20Inquiry"
                  className="mt-4 inline-flex w-full items-center justify-center rounded-2xl bg-brand-700 px-4 py-3 text-sm font-bold text-white shadow-soft transition hover:bg-brand-800"
                >
                  Contact via Email
                </a>

                <p className="mt-3 text-xs text-ink-500">
                  We’ll respond as soon as possible during business hours.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ---------- Small UI Helpers (keeps page neat) ---------- */

function PolicySection({ title, children }) {
  return (
    <section className="scroll-mt-24">
      <div className="flex items-start gap-3">
        <div className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-brand-700" />
        <h2 className="text-base font-extrabold text-ink-900">{title}</h2>
      </div>
      <div className="pl-5">{children}</div>
    </section>
  );
}

function InfoRow({ label, value }) {
  return (
    <div className="rounded-xl border border-ink-900/10 bg-white p-4">
      <div className="text-[11px] font-bold text-ink-500">{label}</div>
      <div className="mt-1 text-sm font-semibold text-ink-900">{value}</div>
    </div>
  );
}
