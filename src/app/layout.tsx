import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "LinguaMaster Academy | Kursus Bahasa Inggris, Jepang, Korea Jakarta",
  description:
    "Kursus bahasa asing dengan pengajar native & berpengalaman. Inggris, Jepang, Korea, Mandarin. IELTS, JLPT, TOPIK preparation. Daftar sekarang!",
  keywords: [
    "kursus bahasa inggris",
    "kursus bahasa jepang",
    "kursus bahasa korea",
    "kursus bahasa mandarin",
    "kursus bahasa jerman",
    "kursus bahasa prancis",
    "IELTS preparation",
    "JLPT preparation",
    "TOPIK preparation",
    "HSK preparation",
    "belajar bahasa asing jakarta",
    "les bahasa asing",
  ],
  authors: [{ name: "LinguaMaster Academy" }],
  openGraph: {
    title: "LinguaMaster Academy | Kursus Bahasa Asing Terbaik",
    description:
      "Kuasai bahasa asing dengan pengajar berpengalaman. 6 bahasa, 50+ pengajar, 10.000+ alumni.",
    type: "website",
    locale: "id_ID",
    siteName: "LinguaMaster Academy",
  },
  twitter: {
    card: "summary_large_image",
    title: "LinguaMaster Academy",
    description: "Kuasai Dunia dengan Bahasa",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-body antialiased bg-[#F9FAFB]">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
