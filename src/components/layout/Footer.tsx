"use client";

import Link from "next/link";
import { GraduationCap, Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Container } from "@/components/ui/Container";

const footerLinks = {
  program: [
    { name: "Bahasa Inggris", href: "/program/inggris" },
    { name: "Bahasa Jepang", href: "/program/jepang" },
    { name: "Bahasa Korea", href: "/program/korea" },
    { name: "Bahasa Mandarin", href: "/program/mandarin" },
    { name: "Bahasa Jerman", href: "/program/jerman" },
    { name: "Bahasa Prancis", href: "/program/prancis" },
  ],
  informasi: [
    { name: "Tentang Kami", href: "/tentang" },
    { name: "Jadwal Kelas", href: "/jadwal" },
    { name: "Pengajar", href: "/pengajar" },
    { name: "Testimoni", href: "/testimoni" },
    { name: "FAQ", href: "/faq" },
    { name: "Blog", href: "/blog" },
  ],
  kontak: [
    { icon: Phone, text: "+62 21 1234 5678", href: "tel:+622112345678" },
    { icon: Mail, text: "info@linguamaster.id", href: "mailto:info@linguamaster.id" },
    { icon: MapPin, text: "Jl. Pendidikan No. 123, Jakarta Selatan", href: "#" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com/linguamaster", label: "Facebook" },
  { icon: Instagram, href: "https://instagram.com/linguamaster", label: "Instagram" },
  { icon: Twitter, href: "https://twitter.com/linguamaster", label: "Twitter" },
  { icon: Youtube, href: "https://youtube.com/linguamaster", label: "Youtube" },
];

export function Footer() {
  return (
    <footer className="bg-[#1F2937] text-white">
      <Container className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-[#4F46E5] rounded-xl flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="font-bold text-xl font-heading">LinguaMaster</span>
                <span className="block text-xs text-gray-400">Academy</span>
              </div>
            </Link>
            <p className="text-gray-400 mb-6">
              Kuasai Dunia dengan Bahasa. Tempat terbaik untuk belajar bahasa asing dengan pengajar berpengalaman dan metode pembelajaran interaktif.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#4F46E5] transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Program */}
          <div>
            <h3 className="font-bold text-lg mb-6 font-heading">Program Bahasa</h3>
            <ul className="space-y-3">
              {footerLinks.program.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Informasi */}
          <div>
            <h3 className="font-bold text-lg mb-6 font-heading">Informasi</h3>
            <ul className="space-y-3">
              {footerLinks.informasi.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h3 className="font-bold text-lg mb-6 font-heading">Kontak</h3>
            <ul className="space-y-4">
              {footerLinks.kontak.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors"
                  >
                    <item.icon className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span>{item.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>

      {/* Footer Bottom */}
      <div className="border-t border-white/10">
        <Container className="py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2025 LinguaMaster Academy. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm text-center md:text-right">
              Website ini dibuat dengan ❤️ oleh{" "}
              <a
                href="https://creativism.id"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4F46E5] hover:text-[#10B981] transition-colors font-medium"
              >
                Creativism Digital Marketing Agency
              </a>
            </p>
          </div>
        </Container>
      </div>
    </footer>
  );
}
