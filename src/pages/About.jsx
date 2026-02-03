

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
            Who We Are
          </div>
          <h1 className="mt-5 text-4xl font-black tracking-tight text-white sm:text-5xl">
            About Jubilee Apparel
          </h1>
        </div>
        <div className="h-14 bg-gradient-to-b from-white/0 to-white" />
      </section>

      {/* CONTENT */}
      <section className="bg-white">
        <div className="container-app py-14 ">
          {/* ✅ Row 1: Company introduction (left text) + Image (right) */}
          <div className="grid gap-10 lg:grid-cols-2 mt-5 lg:items-start">
            <div>
              <h3 className="text-2xl font-extrabold text-ink-900 font-mont underline underline-offset-8 decoration-2">
                Company introduction
              </h3>
              <p className="mt-4 text-lg font-medium leading-6 text-ink-700 font-playfair">
                {company.intro.blurb}
              </p>
<p className="mt-4 text-lg leading-6 font-medium text-ink-700 font-playfair">
                {company.intro.blurbs}
              </p>
              
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
               <h3 className="text-2xl font-extrabold text-ink-900 font-mont underline underline-offset-8 decoration-2">
    History
  </h3>
              <p className="mt-4 text-lg  font-medium leading-6 text-ink-700 font-playfair">
                {company.intro.history}
              </p>
  <p className="mt-4 text-lg leading-6 font-medium text-ink-700 font-playfair">
                {company.intro.historys}
              </p>
              
            </div>
          </div>

          {/* ✅ Small closing note (simple + trendy, not “intro cards”) */}
          
        </div>
      </section>
    </div>
  );
}
