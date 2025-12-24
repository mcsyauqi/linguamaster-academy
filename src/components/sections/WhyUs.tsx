"use client";

import { motion } from "framer-motion";
import { GraduationCap, MessageSquare, Clock, Award } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";

const features = [
  {
    icon: GraduationCap,
    title: "Pengajar Berpengalaman",
    description:
      "Native speaker dan pengajar Indonesia bersertifikat dengan pengalaman 5+ tahun mengajar.",
    color: "#4F46E5",
  },
  {
    icon: MessageSquare,
    title: "Metode Interaktif",
    description:
      "Pembelajaran berbasis komunikasi aktif, bukan sekadar hafalan. Praktek langsung setiap pertemuan.",
    color: "#10B981",
  },
  {
    icon: Clock,
    title: "Kelas Fleksibel",
    description:
      "Pilih kelas reguler, privat, atau online sesuai jadwal dan kebutuhan Anda.",
    color: "#F59E0B",
  },
  {
    icon: Award,
    title: "Sertifikat Resmi",
    description:
      "Dapatkan sertifikat kelulusan dan persiapan ujian internasional (IELTS, JLPT, TOPIK, HSK).",
    color: "#EF4444",
  },
];

export function WhyUs() {
  return (
    <section className="py-20 bg-[#F9FAFB]">
      <Container>
        <SectionTitle
          title="Mengapa Belajar di LinguaMaster?"
          subtitle="Kami berkomitmen memberikan pengalaman belajar bahasa terbaik untuk Anda"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: `${feature.color}15` }}
              >
                <feature.icon
                  className="w-8 h-8"
                  style={{ color: feature.color }}
                />
              </motion.div>
              <h3 className="text-lg font-bold text-[#1F2937] font-heading mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
