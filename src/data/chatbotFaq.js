
export const chatbotKnowledge = [
  // ───────── QUICK START / GREET ─────────
  {
    keywords: ["hi", "hello", "hey", "good morning", "good evening"],
    answer:
      "Hello 👋 Welcome to Jubilee Apparel. How can i help you today?."
  },

  // ───────── COMPANY OVERVIEW ─────────
  {
    keywords: ["who are you", "company", "jubilee", "about", "overview"],
    answer:
      "Jubilee Apparel is an export-oriented garment manufacturer based in Karachi, Pakistan. We support OEM and private-label production for international buyers with end-to-end manufacturing and export-ready finishing."
  },
  {
    keywords: ["experience", "years", "established", "history", "since"],
    answer:
      "We’ve been manufacturing garments since the early 1980s, with decades of experience supporting global buyers across knit and woven programs."
  },
  {
    keywords: ["where", "location", "address", "karachi", "pakistan", "epz", "export zone"],
    answer:
      "We operate from Karachi, Pakistan (Export Processing Zone). This supports efficient export logistics and documentation handling for international shipments."
  },

  // ───────── SCALE & CAPACITY ─────────
  {
    keywords: ["capacity", "production", "per day", "daily", "how many"],
    answer:
      "Our combined production capacity is approximately 25,000 garments per day across knits and wovens (program-dependent)."
  },
  {
    keywords: ["factory", "factories", "sites", "units", "facility"],
    answer:
      "We operate multiple integrated manufacturing units under one operational framework, enabling scalable programs with consistent output and controlled processes."
  },

  // ───────── WHAT YOU MAKE ─────────
  {
    keywords: ["what do you make", "products", "manufacture", "produce", "range"],
    answer:
      "We manufacture a wide range of knit and woven garments: T-shirts, polos, hoodies, sweatshirts, fleece pants/joggers, cargo pants, scrubs, safety wear, sleepwear, woven trousers, and custom OEM programs."
  },
  {
    keywords: ["t-shirt", "tee", "crewneck tee"],
    answer:
      "We produce T-shirts in multiple fits and fabric options (cotton, blends, polyester). Programs can include custom trims, labeling, and export-ready finishing."
  },
  {
    keywords: ["polo"],
    answer:
      "We manufacture polos with structured collars, plackets, and clean stitching—commonly used for uniforms, corporate wear, and retail basics."
  },
  {
    keywords: ["hoodie", "zipper hoodie", "pullover hoodie", "sherpa"],
    answer:
      "We produce multiple hoodie styles: pullover, zipper, sherpa-lined, fleece, and polyester hoodies—built for bulk OEM export programs."
  },
  {
    keywords: ["pants", "trousers", "cargo", "jogger", "fleece pants"],
    answer:
      "Our bottomwear range includes fleece pants, joggers, cargo pants, and woven trousers with export-ready construction and scalable output."
  },
  {
    keywords: ["scrubs", "medical scrubs", "healthcare"],
    answer:
      "We manufacture medical scrub sets designed for durability, comfort, and repeat production—ideal for healthcare buyers and institutional programs."
  },
  {
    keywords: ["safety vest", "hi vis", "high visibility", "reflective"],
    answer:
      "We offer safety wear and high-visibility options designed for worksite use, supporting functional fabric choices and buyer-required finishing."
  },

  // ───────── OEM / PRIVATE LABEL ─────────
  {
    keywords: ["oem", "private label", "white label", "your brand", "branding"],
    answer:
      "Yes—OEM and private-label manufacturing is a core focus. We support custom labeling, trims, hangtags, packaging, and buyer-specific presentation."
  },
  {
    keywords: ["labels", "neck label", "care label", "hangtag", "tags", "trim"],
    answer:
      "We can support buyer-specified labels and trims including neck labels, care labels, hangtags, barcode stickers, and custom accessories (as required)."
  },
  {
    keywords: ["packaging", "polybag", "carton", "barcode", "hanger", "packing"],
    answer:
      "We support export-ready packing: folding, polybagging, size stickers, barcode labeling, carton packing, and buyer-specific packing instructions."
  },
  {
    keywords: ["tech pack", "spec", "spec sheet", "measurement", "bom"],
    answer:
      "Yes—share your tech pack/specs and BOM through the Contact page. Our team can align production to your measurements, construction, and packaging requirements."
  },

  // ───────── SAMPLING / DEVELOPMENT ─────────
  {
    keywords: ["sample", "sampling", "prototype", "development", "design support"],
    answer:
      "Sampling can be arranged based on your program needs. Share your tech pack, fabric requirements, size range, and target dates via Contact for coordination."
  },
  {
    keywords: ["size set", "fit sample", "pp sample", "pre-production"],
    answer:
      "We can support common sampling stages (fit sample, size set, and pre-production steps) depending on the program. Please send details through Contact."
  },
  {
    keywords: ["lab dip", "color approval", "shade", "pantone"],
    answer:
      "For color control, programs can include shade approvals (e.g., references/Pantone targets). Share your color standards via Contact to align workflow."
  },

  // ───────── FABRICS / GSM / FINISH ─────────
  {
    keywords: ["fabric", "materials", "textile", "composition", "cotton", "polyester", "blend"],
    answer:
      "We work with a wide range of knit and woven fabrics including cotton, polyester, blends, fleece, and performance fabrics—aligned to buyer requirements."
  },
  {
    keywords: ["gsm", "weight", "fabric weight", "oz"],
    answer:
      "Yes—programs can be developed to specific GSM/oz targets. Share your required fabric weight and hand-feel via Contact for alignment."
  },
  {
    keywords: ["shrinkage", "shrink", "colorfast", "wash test", "testing"],
    answer:
      "Quality programs can include wash/shrinkage and performance considerations depending on buyer requirements. Share your test requirements via Contact."
  },

  // ───────── PRINT / EMBROIDERY / DECORATION ─────────
  {
    keywords: ["print", "screen print", "heat transfer", "sublimation", "printing"],
    answer:
      "Decoration can be supported based on program needs (e.g., printing methods). Share your artwork specs and placement via Contact."
  },
  {
    keywords: ["embroidery", "embroidered", "patch"],
    answer:
      "Embroidery and patch applications can be supported depending on design requirements. Send artwork, placement, and stitch details via Contact."
  },

  // ───────── QUALITY / AQL / INSPECTION ─────────
  {
    keywords: ["quality", "qc", "inspection", "aql", "final inspection"],
    answer:
      "Quality control is integrated across production: fabric inspection, in-line checks, and final inspection prior to shipment. If you follow AQL targets, share them via Contact."
  },
  {
    keywords: ["defects", "rework", "quality issues"],
    answer:
      "We maintain controlled processes to reduce defects and rework. For quality expectations (AQL/critical defects), share your standards through Contact."
  },

  // ───────── LEAD TIME / MOQ / ORDERING ─────────
  {
    keywords: ["lead time", "timeline", "delivery time", "how long"],
    answer:
      "Lead times vary by product complexity, fabric availability, and order volume. Share your quantities and target ship date via Contact for an accurate schedule."
  },
  {
    keywords: ["moq", "minimum", "minimum order", "small order"],
    answer:
      "MOQ depends on product type, fabric, and customization level. Submit an inquiry via Contact and our team will share MOQ options for your program."
  },
  {
    keywords: ["bulk", "production order", "repeat order", "reorder"],
    answer:
      "We support bulk and repeat programs with consistent specs and controlled processes—ideal for long-term partnerships and seasonal replenishment."
  },

  // ───────── EXPORT / INCOTERMS / SHIPPING ─────────
  {
    keywords: ["export", "shipping", "international", "worldwide", "overseas"],
    answer:
      "We work with international buyers and sourcing teams. Programs can include export-ready packing and documentation support for global shipments."
  },
  {
    keywords: ["incoterms", "fob", "cif", "exw", "ddp"],
    answer:
      "Shipping terms depend on buyer preference and logistics setup. Share your preferred incoterms and destination through Contact for coordination."
  },

  // ───────── BUSINESS / PARTNERSHIP ─────────
  {
    keywords: ["partner", "partnership", "sourcing", "buyer", "vendor", "supplier"],
    answer:
      "We support sourcing teams and global buyers with scalable OEM manufacturing. If you’re exploring a partnership, share your product list and target volumes via Contact."
  },
  {
    keywords: ["why choose", "why you", "different", "best", "trusted"],
    answer:
      "Global buyers choose us for scalable OEM production, controlled processes, consistent output, and export-ready finishing—built to support long-term programs."
  },

  // ───────── PRICING (BLOCK + LINK) ─────────
  {
    keywords: ["price", "pricing", "cost", "rate", "quotation", "quote"],
    answer:
      "Pricing depends on design, fabric, quantity, and delivery requirements. Please use **Contact** to request a formal quotation: [[CONTACT_LINK]]"
  },

  // ───────── CONTACT / EMAIL ─────────
  {
    keywords: ["contact", "email", "reach", "get in touch", "inquiry"],
    answer:
      "You can reach us via the inquiry form or email directly at info@jubilee-apparel.com. To send details now, go here: [[CONTACT_LINK]]"
  },

  // ───────── OUT-OF-SCOPE GUARDRAIL ─────────
  {
    keywords: ["politics", "religion", "adult", "crypto", "hack", "illegal"],
    answer:
      "I can help with Jubilee Apparel’s manufacturing, products, OEM programs, and export inquiries. For other topics, please use another source."
  },

  // ───────── FALLBACK ─────────
  {
    keywords: ["*"],
    answer:
      "Thanks for your question. I can help with products, OEM/private label, fabrics, sampling, MOQ, lead time, quality, packaging, and export. If you need a formal response from our team, use Contact: [[CONTACT_LINK]]"
  }
];
