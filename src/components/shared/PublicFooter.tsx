"use client";

import Link from "next/link";
import { MapPinIcon } from "../ui/MapPinIcon";
import { MailIcon } from "../ui/MailIcon";
import { PhoneIcon } from "../ui/PhoneIcon";

interface FooterLinkSection {
  title: string;
  links: { label: string; href: string }[];
}

export default function PublicFooter() {
  const footerLinks: FooterLinkSection[] = [
    {
      title: "Quick Links",
      links: [
        { label: "Home", href: "/" },
        { label: "About Us", href: "/about" },
        { label: "Services", href: "/services" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "FAQ", href: "/faq" },
        { label: "Help Center", href: "/help" },
        { label: "Terms of Service", href: "/terms" },
        { label: "Privacy Policy", href: "/privacy" },
      ],
    },
  ];

  return (
    <footer className="border-t bg-background/80 backdrop-blur-md text-foreground">
      <div className="container mx-auto px-4 py-10">
        {/* === Grid Layout === */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* === Brand Info === */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-3">
              Health<span className="text-foreground">Care</span>
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Your health is our top priority. We’re dedicated to providing the
              best medical care and personalized support for a healthier future.
            </p>
          </div>

          {/* === Dynamic Footer Links === */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold mb-3 text-foreground">
                {section.title}
              </h4>
              <ul className="space-y-2 text-sm">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* === Contact Info === */}
          <div>
            <h4 className="font-semibold mb-3 text-foreground">Contact Us</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPinIcon
                  size={16}
                  className="text-primary shrink-0 mt-0.5"
                />
                <span>123 Medical Lane, Health City, PS 12345</span>
              </li>
              <li className="flex items-center gap-2">
                <MailIcon size={16} className="text-primary shrink-0" />
                <span>contact@healthcare.com</span>
              </li>
              <li className="flex items-center gap-2">
                <PhoneIcon size={16} className="text-primary shrink-0" />
                <span>+8801409-012843</span>
              </li>
            </ul>
          </div>
        </div>

        {/* === Divider + Copyright === */}
        <div className="mt-10 border-t pt-4 text-center text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} HealthCare. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
