import React, { useMemo, useState } from "react";
import { Search, ChevronDown, Mail, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import SectionTitle from "../components/SectionTitle.jsx"; // if you already use it
import Button from "../components/ui/Button.jsx"; // if you already use it

// If you don't have SectionTitle/Button components, tell me and I'll replace them with plain JSX.

const faqData = [
  // ✅ ABOUT / COMPANY
  {
    category: "Company",
    q: "Who is Jubilee Apparel?",
    a: "Jubilee Apparel is an export-oriented OEM & private-label garment manufacturer based in Karachi, Pakistan. We support global buyers with knit and woven apparel production and export-ready presentation."
  },
  {
    category: "Company",
    q: "Where is your factory located?",
    a: "Our operations are based in Karachi, Pakistan (KEPZ area), enabling efficient export handling and logistics."
  },
  {
    category: "Company",
    q: "Do you work with international buyers?",
    a: "Yes. We work with international brands, sourcing teams, wholesalers, and institutional buyers for OEM and private-label programs."
  },

  // ✅ PRODUCTS
  {
    category: "Products",
    q: "What products do you manufacture?",
    a: "We manufacture knits and wovens including T-shirts, polo shirts, hoodies, sweatshirts, fleece pants/cargo pants, thermal styles, scrubs, safety wear, woven trousers, and custom-developed programs."
  },
  {
    category: "Products",
    q: "Can you manufacture custom designs?",
    a: "Yes. We can manufacture buyer-specified styles based on your tech pack, reference samples, artwork, and construction requirements."
  },
  {
    category: "Products",
    q: "Do you offer sizing and fit development?",
    a: "Yes. We can support fit development through sampling and spec confirmation based on your size charts and fit standards."
  },

  // ✅ OEM / PRIVATE LABEL
  {
    category: "OEM & Private Label",
    q: "Do you provide private-label services?",
    a: "Yes. We support private-label programs including labels, hangtags, packaging, and export-ready presentation as per buyer requirements."
  },
  {
    category: "OEM & Private Label",
    q: "Can you support custom branding (printing/embroidery)?",
    a: "Yes. We support embellishment options such as embroidery and printing methods depending on artwork, fabric, and program needs."
  },

  // ✅ MATERIALS / FABRICS
  {
    category: "Fabrics",
    q: "What fabrics do you work with?",
    a: "We work with a wide range of knitted and woven fabrics including cotton, polyester, blends, fleece, performance fabrics, and buyer-specified developments."
  },
  {
    category: "Fabrics",
    q: "Can you match colors (heathers/melange/solids)?",
    a: "Yes. We can support solid shades and heathers/melange ranges based on buyer requirements and availability."
  },

  // ✅ SAMPLING / MOQ / LEAD TIME
  {
    category: "Sampling & MOQ",
    q: "Do you offer samples before bulk production?",
    a: "Yes. Sampling can be arranged to confirm fit, fabric, trims, artwork, and finishing before bulk production."
  },
  {
    category: "Sampling & MOQ",
    q: "What is your MOQ?",
    a: "MOQ varies by product, fabric, and construction. Please submit your inquiry through the Contact page to receive MOQ guidance for your program."
  },
  {
    category: "Sampling & MOQ",
    q: "What is your production lead time?",
    a: "Lead time depends on style complexity, quantities, fabric availability, and production scheduling. Submit an inquiry and we’ll share a realistic timeline."
  },

  // ✅ QUALITY
  {
    category: "Quality",
    q: "How do you ensure quality?",
    a: "Quality control is integrated throughout production with fabric inspection, in-line checks, and final inspection prior to dispatch and shipment."
  },
  {
    category: "Quality",
    q: "Can you follow buyer QC requirements?",
    a: "Yes. We can align inspection checkpoints, packaging standards, labeling, and export presentation based on buyer requirements shared during inquiry."
  },

  // ✅ PACKING / EXPORT
  {
    category: "Export & Shipping",
    q: "Do you provide export-ready packing?",
    a: "Yes. We support labeling, tagging, carton marking, polybag requirements, and export-ready packing as per buyer instructions."
  },
  {
    category: "Export & Shipping",
    q: "Can you help with shipping documents?",
    a: "We support export documentation and standard shipment preparation according to agreed terms and buyer requirements."
  },

  // ✅ PRICING (SAFE RESPONSE)
  {
    category: "Pricing",
    q: "Can you share pricing or a rate card?",
    a: "Pricing depends on style, fabric, trims, quantities, and delivery targets. Please go to the Contact page and submit an inquiry for an official quotation."
  },
  {
    category: "Pricing",
    q: "How can I request a quote?",
    a: "Use the Contact page to send your tech pack, quantities, target dates, and any reference images. Our team will respond with next steps."
  }
];

const categories = ["All", "Company", "Products", "OEM & Private Label", "Fabrics", "Sampling & MOQ", "Quality", "Export & Shipping", "Pricing"];

function FaqItem({ item, forceOpen = false }) {
  const [open, setOpen] = useState(forceOpen);

  return (
    <div className="overflow-hidden rounded-2xl border border-ink-900/10 bg-white shadow-soft">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
      >
        <div className="min-w-0">
          <div className="text-xs font-bold text-brand-800">{item.category}</div>
          <div className="mt-1 text-sm font-extrabold text-ink-900">{item.q}</div>
        </div>

        <div
          className={[
            "grid h-9 w-9 place-items-center rounded-xl border border-ink-900/10 bg-ink-50 text-ink-700 transition",
            open ? "rotate-180" : ""
          ].join(" ")}
        >
          <ChevronDown size={18} />
        </div>
      </button>

      {open ? (
        <div className="border-t border-ink-900/10 px-5 py-4">
          <p className="text-sm leading-6 text-ink-700">{item.a}</p>

          {/* Pricing CTA helper */}
          {item.category === "Pricing" ? (
            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <Button as={Link} to="/contact" variant="primary">
                Go to Contact <ArrowRight size={18} />
              </Button>
              <Button as="a" href="mailto:info@jubilee-apparel.com?subject=RFQ%20%E2%80%94%20Jubilee%20Apparel" variant="secondary">
                Email RFQ <Mail size={18} />
              </Button>
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}

export default function Faq() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    return faqData.filter((x) => {
      const catOk = cat === "All" ? true : x.category === cat;
      const textOk =
        !query ||
        x.q.toLowerCase().includes(query) ||
        x.a.toLowerCase().includes(query) ||
        x.category.toLowerCase().includes(query);
      return catOk && textOk;
    });
  }, [q, cat]);

  return (
    <div>
      {/* HERO */}
      <section className="bg-ink-900">
        <div className="container-app py-14 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white/80 mt-3">
            Help Center
          </div>
          <h1 className="mt-5 text-4xl font-black tracking-tight text-white sm:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-white/70">
            Find quick answers about our manufacturing, products, quality, and export support.
            For pricing or custom programs, use the Contact page.
          </p>
        </div>
        <div className="h-14 bg-gradient-to-b from-white/0 to-white" />
      </section>

      {/* Filters */}
      <section className="bg-white mt-7">
        <div className="container-app py-10">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            {/* Category pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setCat(c)}
                  className={[
                    "rounded-full px-4 py-2 text-xs font-semibold transition whitespace-nowrap",
                    cat === c
                      ? "bg-brand-700 text-white shadow-soft"
                      : "border border-ink-900/10 bg-white text-ink-700 hover:bg-ink-50"
                  ].join(" ")}
                >
                  {c}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-400" size={18} />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search FAQs (MOQ, lead time, scrubs, hoodies, export...)"
                className="w-full rounded-2xl border border-ink-900/10 bg-white py-3 pl-10 pr-4 text-sm text-ink-900 outline-none focus:border-brand-300 focus:ring-4 focus:ring-brand-100"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ list */}
      <section className="bg-white">
        <div className="container-app pb-16">
          {/* Optional section title */}
          <div className="mt-2">
            <SectionTitle
              eyebrow="Support"
              title="Answers for sourcing teams & global buyers"
              desc="If you don’t find your question here, submit an inquiry and our team will respond."
              align="left"
            />
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {filtered.map((item) => (
              <FaqItem key={item.q} item={item} />
            ))}
          </div>

          {filtered.length === 0 ? (
            <div className="mt-8 rounded-2xl border border-ink-900/10 bg-ink-50 p-6 text-sm text-ink-700">
              No results found. Try a different keyword or open the Contact page to send an inquiry.
            </div>
          ) : null}

          {/* Bottom CTA */}
          <div className="mt-10 flex flex-col items-start justify-between gap-4 rounded-2xl border border-ink-900/10 bg-ink-900 p-8 text-white shadow-soft md:flex-row md:items-center">
            <div>
              <div className="text-lg font-extrabold">Need a custom program or quotation?</div>
              <div className="mt-1 text-sm text-white/70">
                Share your tech pack, quantities, and target dates — we’ll guide you on next steps.
              </div>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button as={Link} to="/contact" variant="secondary">
                Contact us
              </Button>
              <Button
                as="a"
                href="mailto:info@jubilee-apparel.com?subject=RFQ%20%E2%80%94%20Jubilee%20Apparel"
                variant="primary"
              >
                Email RFQ <Mail size={18} />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
