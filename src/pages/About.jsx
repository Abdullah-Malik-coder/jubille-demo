import React from "react";
import { Package, BadgeCheck } from "lucide-react";
import { company } from "../data/company.js";
import ref2 from "../assets/ref-2.png";
import ref3 from "../assets/ref-3.png";

export default function About() {
  return (
    <div>
      {/* HERO (keep as is) */}
      <section className="bg-ink-900">
        <div className="container-app py-14 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white/80 mt-3">
            About
          </div>
          <h1 className="mt-5 text-4xl font-black tracking-tight text-white sm:text-5xl">
            About Jubilee Apparel
          </h1>
        </div>
        <div className="h-14 bg-gradient-to-b from-white/0 to-white" />
      </section>

      {/* CONTENT */}
      <section className="bg-white">
        <div className="container-app py-14">
          {/* ✅ Row 1: Company introduction (left text) + Image (right) */}
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <h3 className="text-xl font-extrabold text-ink-900 font-mont">
                Company introduction
              </h3>
              <p className="mt-3 text-sm leading-6 text-ink-700 font-playfair">
                {company.intro.blurb}
              </p>

              {/* ✅ Added ONE good section (new) */}
              <div className="mt-8 rounded-2xl border border-ink-900/10 bg-ink-50 p-6">
                <div className="flex items-center gap-2 text-sm font-extrabold text-ink-900 font-mont">
                  <BadgeCheck size={18} className="text-brand-700" />
                  Compliance & buyer confidence
                </div>
                <p className="mt-2 text-sm text-ink-700 font-playfair">
                  Built around buyer expectations—documentation, measurement checks, and
                  packing discipline that supports audits, inspections, and smooth
                  handover for export programs.
                </p>
              </div>
            </div>

            <div className="space-y-5">
              <div className="overflow-hidden rounded-2xl border border-ink-900/10 bg-white shadow-soft">
                <img
                  src={ref3}
                  alt="Jubilee Apparel"
                  className="h-[280px] w-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* ✅ Row 2: Image (left) + History content + Brand-ready production (right) */}
          <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:items-start">
            {/* Left: image placed where History was */}
            <div className="space-y-5">
              <div className="overflow-hidden rounded-2xl border border-ink-900/10 bg-white shadow-soft">
                <img
                  src={ref2}
                  alt="Facility"
                  className="h-[320px] w-full object-cover"
                />
              </div>
            </div>

            {/* Right: History + Brand-ready production */}
            <div>
              <h3 className="text-xl font-extrabold text-ink-900 font-mont">
                History
              </h3>
              <p className="mt-3 text-sm leading-6 text-ink-700 font-playfair">
                {company.intro.history}
              </p>

              <div className="mt-8 rounded-2xl border border-ink-900/10 bg-ink-50 p-6">
                <div className="flex items-center gap-2 text-sm font-extrabold text-ink-900 font-mont">
                  <Package size={18} className="text-brand-700" />
                  Brand-Ready Production
                </div>
                <p className="mt-2 text-sm text-ink-700 font-playfair">
                  OEM aligned workflows for private label—custom trims, labels, hangtags,
                  polybags, and export-ready packing to support retail and e-commerce
                  presentation.
                </p>
              </div>
            </div>
          </div>

          {/* ✅ Small closing note (simple + trendy, not “intro cards”) */}
          <div className="mt-12 rounded-2xl border border-ink-900/10 bg-white p-7 shadow-soft">
            <div className="text-sm font-extrabold text-ink-900 font-mont">
              Built for long-term sourcing
            </div>
            <p className="mt-2 text-sm leading-6 text-ink-700 font-playfair">
              Jubilee is structured to support repeat programs—consistent specs, clean
              workmanship, and buyer-friendly communication from sampling to shipment.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
