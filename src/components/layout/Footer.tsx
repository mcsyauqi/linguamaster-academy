import Link from "next/link";
import { GraduationCap, Phone, Mail, MapPin } from "lucide-react";

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
    { name: "Tentang Kami", href: "#" },
    { name: "Jadwal Kelas", href: "/jadwal" },
    { name: "Pengajar", href: "/pengajar" },
    { name: "Testimoni", href: "/testimoni" },
    { name: "FAQ", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="container-custom py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="font-heading font-bold text-lg">LinguaMaster</span>
                <span className="block text-xs text-gray-400">Academy</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm mb-4">
              Kuasai Dunia dengan Bahasa. Tempat terbaik untuk belajar bahasa asing dengan pengajar berpengalaman.
            </p>
          </div>

          {/* Program */}
          <div>
            <h3 className="font-heading font-bold mb-4">Program Bahasa</h3>
            <ul className="space-y-2">
              {footerLinks.program.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Informasi */}
          <div>
            <h3 className="font-heading font-bold mb-4">Informasi</h3>
            <ul className="space-y-2">
              {footerLinks.informasi.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h3 className="font-heading font-bold mb-4">Kontak</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>+62 21 1234 5678</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>info@linguamaster.id</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Jl. Pendidikan No. 123, Jakarta Selatan</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>&copy; 2025 LinguaMaster Academy. All rights reserved.</p>
            <p>
              Website ini dibuat dengan ❤️ oleh{" "}
              <a
                href="https://creativism.id"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-light transition-colors"
              >
                Creativism Digital Marketing Agency
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
