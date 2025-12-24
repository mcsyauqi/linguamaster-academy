"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Users, BookOpen, Award } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

const stats = [
  { icon: BookOpen, value: "6", label: "Bahasa" },
  { icon: Users, value: "50+", label: "Pengajar" },
  { icon: Award, value: "10.000+", label: "Alumni" },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#4F46E5]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#10B981]/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#F59E0B]/5 rounded-full blur-3xl" />
      </div>

      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge variant="accent" className="mb-6">
              🎓 10.000+ Alumni Sukses Berbahasa Asing
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1F2937] font-heading leading-tight mb-6">
              Kuasai Bahasa Asing dalam{" "}
              <span className="text-[#4F46E5]">Hitungan Bulan</span>
            </h1>

            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Metode pembelajaran interaktif dengan pengajar berpengalaman. Kelas reguler, privat, dan online tersedia untuk semua level.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Button href="/pendaftaran" size="lg">
                Daftar Sekarang
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button href="/kontak" variant="outline" size="lg">
                <MessageCircle className="mr-2 w-5 h-5" />
                Konsultasi Gratis
              </Button>
            </div>

            {/* Stats */}
            <div className="flex gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <stat.icon className="w-5 h-5 text-[#4F46E5]" />
                    <span className="text-2xl md:text-3xl font-bold text-[#1F2937]">
                      {stat.value}
                    </span>
                  </div>
                  <span className="text-gray-500 text-sm">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Hero Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Main Circle */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#4F46E5] to-[#10B981] rounded-full opacity-10" />

              {/* Language Flags */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-10 left-10 w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center text-3xl"
              >
                🇬🇧
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                className="absolute top-10 right-10 w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center text-3xl"
              >
                🇯🇵
              </motion.div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute bottom-10 left-10 w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center text-3xl"
              >
                🇰🇷
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                className="absolute bottom-10 right-10 w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center text-3xl"
              >
                🇨🇳
              </motion.div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 2 }}
                className="absolute top-1/2 left-0 -translate-y-1/2 w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center text-3xl"
              >
                🇩🇪
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 2.5 }}
                className="absolute top-1/2 right-0 -translate-y-1/2 w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center text-3xl"
              >
                🇫🇷
              </motion.div>

              {/* Center Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="w-32 h-32 bg-gradient-to-br from-[#4F46E5] to-[#10B981] rounded-3xl shadow-2xl flex items-center justify-center"
                >
                  <span className="text-6xl">🌍</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
