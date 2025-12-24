import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "LinguaMaster Academy | Kursus Bahasa Inggris, Jepang, Korea Jakarta",
  description: "Kursus bahasa asing dengan pengajar native & berpengalaman. Inggris, Jepang, Korea, Mandarin. IELTS, JLPT, TOPIK preparation. Daftar sekarang!",
  keywords: ["kursus bahasa inggris", "kursus bahasa jepang", "kursus bahasa korea", "les bahasa asing jakarta"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>
        <Header />
        <main className="pt-16 lg:pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
