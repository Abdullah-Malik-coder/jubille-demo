// import React from "react";
import { Link } from "react-router-dom";
import { Mail, MapPin } from "lucide-react";
import logo from "../assets/jubilee-logo.png";
import { company } from "../data/company.js";

export default function Footer() {
  return (
    <footer
      className="mt-20 border-t border-white/10 text-white relative overflow-hidden
      bg-gradient-to-br from-[#92b1d5] via-[#133360] to-[#0d254d]"
    >
      <div className="container-app py-12">
        <div className="grid gap-10 md:grid-cols-4">
          {/* LEFT: Brand + intro */}
          <div className="md:col-span-2 mt-4">
            {/* ✅ Mobile center, Desktop left */}
            <div className="flex flex-col items-center text-center md:flex-row md:items-start md:text-left gap-3">
              <img
                src={logo}
                alt="Jubilee Apparel"
                className="h-14 w-14 rounded-2xl object-cover"
              />

              <div>
                <div className="text-lg font-extrabold tracking-tight">
                  {company.shortName}
                </div>
                <div className="mt-0.5 text-sm text-white/70 font-mont">
                  Export-oriented OEM & private-label manufacturing partner
                </div>
              </div>
            </div>

            <p className="mt-4 max-w-xl text-sm leading-6 text-white/75 md:text-left text-center md:mx-0 mx-auto font-playfair">
              End-to-end apparel value chain under one roof — knitting, dyeing,
              cutting, stitching, finishing, and export-ready packing to support
              global sourcing teams and international buyers.
            </p>

            {/* Contact */}
            <div className="mt-5 flex flex-col gap-2 text-sm text-white/75 items-center md:items-start">
              <a
                href={`mailto:${company.email}`}
                className="inline-flex items-center gap-2 hover:text-white transition"
              >
                <Mail size={16} /> {company.email}
              </a>

              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  company.address
                )}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 hover:text-white transition"
                title="Open in Google Maps"
              >
                <MapPin size={16} /> {company.address}
              </a>
            </div>
          </div>

          {/* CENTER: Company */}
          <div className="text-center md:text-left mt-4">
            <div className="text-sm font-extrabold font-mont">Company</div>
            <ul className="mt-3 space-y-2 text-sm text-white/75">
              <li>
                <Link className="hover:text-white transition font-playfair" to="/about">
                  About Jubilee
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition font-playfair" to="/capabilities">
                  Capabilities
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition font-playfair" to="/products">
                  Products
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition font-playfair" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* RIGHT: Links */}
          <div className="text-center md:text-left mt-4">
            <div className="text-sm font-extrabold font-mont">Quick Links</div>
            <ul className="mt-3 space-y-2 text-sm text-white/75">
              <li>
                <Link className="hover:text-white transition font-playfair" to="/faq">
                  FAQ
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition font-playfair" to="/policy">
                  Privacy Policy
                </Link>
              </li>
            </ul>

            {/* Small note (optional but looks premium) */}
            <div className="mt-5 text-xs text-white/60 leading-5 font-playfair">
              For quotations and program details, please submit an inquiry via
              the Contact page.
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-white/10 pt-6 ">
          <div className="flex flex-col gap-2 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between text-center sm:text-left mb-4 font-mont">
            <div>
              © {new Date().getFullYear()} {company.shortName}. All rights
              reserved (Absoltix Solution).
            </div>
            <div className="text-white/60 mb-4" >
              Built for international sourcing & export-ready presentation.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
