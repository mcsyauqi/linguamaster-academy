"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, GraduationCap } from "lucide-react";

const navigation = [
  { name: "Beranda", href: "/" },
  {
    name: "Program",
    href: "/program",
    children: [
      { name: "Bahasa Inggris", href: "/program/inggris" },
      { name: "Bahasa Jepang", href: "/program/jepang" },
      { name: "Bahasa Korea", href: "/program/korea" },
      { name: "Bahasa Mandarin", href: "/program/mandarin" },
      { name: "Bahasa Jerman", href: "/program/jerman" },
      { name: "Bahasa Prancis", href: "/program/prancis" },
    ],
  },
  { name: "Jadwal", href: "/jadwal" },
  { name: "Pengajar", href: "/pengajar" },
  { name: "Testimoni", href: "/testimoni" },
  { name: "Kontak", href: "/kontak" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="container-custom">
        <nav className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <span className="font-heading font-bold text-lg text-dark">LinguaMaster</span>
              <span className="block text-xs text-gray-500">Kuasai Dunia dengan Bahasa</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 text-dark hover:text-primary font-medium transition-colors py-2"
                >
                  {item.name}
                  {item.children && <ChevronDown className="w-4 h-4" />}
                </Link>

                {item.children && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 w-48 bg-white shadow-lg rounded-lg py-2 mt-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className="block px-4 py-2 text-dark hover:bg-primary/5 hover:text-primary transition-colors"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link href="/pendaftaran" className="btn-primary">
              Daftar Sekarang
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="container-custom py-4">
            {navigation.map((item) => (
              <div key={item.name} className="py-2">
                <Link
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-dark hover:text-primary font-medium"
                >
                  {item.name}
                </Link>
                {item.children && (
                  <div className="pl-4 mt-2 space-y-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block text-gray-600 hover:text-primary text-sm"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 mt-4 border-t">
              <Link
                href="/pendaftaran"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-primary w-full text-center"
              >
                Daftar Sekarang
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
