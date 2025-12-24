"use client";

import { motion } from "framer-motion";
import { ArrowRight, Gift } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#4F46E5] to-[#10B981] relative overflow-hidden">
      {/* Decorations */}
      <div className="absolute inset-0 -z-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6"
          >
            <Gift className="w-8 h-8 text-white" />
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-heading mb-6">
            Siap Memulai Perjalanan Bahasa Anda?
          </h2>

          <p className="text-xl text-white/80 mb-8">
            Daftar sekarang dan dapatkan{" "}
            <span className="font-bold text-[#F59E0B]">TES LEVEL GRATIS</span>{" "}
            untuk menentukan kelas yang tepat untuk Anda!
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/pendaftaran" variant="accent" size="lg">
              Daftar Sekarang
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              href="/kontak"
              variant="ghost"
              size="lg"
              className="text-white border-2 border-white/30 hover:bg-white/10"
            >
              Hubungi Kami
            </Button>
          </div>

          <p className="mt-8 text-white/60 text-sm">
            Sudah bergabung? 10.000+ siswa telah belajar bersama kami
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
