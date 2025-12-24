"use client";

import { motion } from "framer-motion";
import { Check, Users, User, Laptop } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";

const classTypes = [
  {
    name: "Reguler",
    icon: Users,
    price: "Rp 500rb",
    period: "/bulan",
    features: [
      { label: "Jumlah Siswa", value: "8-12 orang" },
      { label: "Jadwal", value: "Fixed" },
      { label: "Materi", value: "Standar" },
      { label: "Interaksi", value: "Group Discussion" },
    ],
    highlight: false,
    color: "#4F46E5",
  },
  {
    name: "Privat",
    icon: User,
    price: "Rp 1.5jt",
    period: "/bulan",
    features: [
      { label: "Jumlah Siswa", value: "1-3 orang" },
      { label: "Jadwal", value: "Flexible" },
      { label: "Materi", value: "Custom" },
      { label: "Interaksi", value: "Personal Focus" },
    ],
    highlight: true,
    color: "#10B981",
  },
  {
    name: "Online",
    icon: Laptop,
    price: "Rp 400rb",
    period: "/bulan",
    features: [
      { label: "Jumlah Siswa", value: "5-10 orang" },
      { label: "Jadwal", value: "Flexible" },
      { label: "Materi", value: "Standar" },
      { label: "Interaksi", value: "Virtual Class" },
    ],
    highlight: false,
    color: "#F59E0B",
  },
];

export function ClassTypes() {
  return (
    <section className="py-20 bg-white">
      <Container>
        <SectionTitle
          title="Pilih Tipe Kelas yang Sesuai"
          subtitle="Sesuaikan dengan gaya belajar dan kebutuhan Anda"
        />

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {classTypes.map((type, index) => (
            <motion.div
              key={type.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`relative rounded-2xl p-8 ${
                type.highlight
                  ? "bg-gradient-to-br from-[#4F46E5] to-[#10B981] text-white shadow-2xl scale-105"
                  : "bg-white border-2 border-gray-100 shadow-lg"
              }`}
            >
              {type.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#F59E0B] text-white text-sm font-bold px-4 py-1 rounded-full">
                  Populer
                </div>
              )}

              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
                  type.highlight ? "bg-white/20" : ""
                }`}
                style={{
                  backgroundColor: type.highlight ? undefined : `${type.color}15`,
                }}
              >
                <type.icon
                  className="w-7 h-7"
                  style={{ color: type.highlight ? "white" : type.color }}
                />
              </div>

              <h3
                className={`text-2xl font-bold font-heading mb-2 ${
                  type.highlight ? "text-white" : "text-[#1F2937]"
                }`}
              >
                Kelas {type.name}
              </h3>

              <div className="mb-6">
                <span
                  className={`text-4xl font-bold ${
                    type.highlight ? "text-white" : "text-[#1F2937]"
                  }`}
                >
                  {type.price}
                </span>
                <span
                  className={type.highlight ? "text-white/70" : "text-gray-500"}
                >
                  {type.period}
                </span>
              </div>

              <ul className="space-y-4 mb-8">
                {type.features.map((feature) => (
                  <li key={feature.label} className="flex items-center gap-3">
                    <Check
                      className={`w-5 h-5 flex-shrink-0 ${
                        type.highlight ? "text-white" : "text-[#10B981]"
                      }`}
                    />
                    <div>
                      <span
                        className={`text-sm ${
                          type.highlight ? "text-white/70" : "text-gray-500"
                        }`}
                      >
                        {feature.label}:
                      </span>
                      <span
                        className={`ml-1 font-medium ${
                          type.highlight ? "text-white" : "text-[#1F2937]"
                        }`}
                      >
                        {feature.value}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>

              <Button
                href="/pendaftaran"
                variant={type.highlight ? "accent" : "outline"}
                className="w-full"
              >
                Pilih Kelas Ini
              </Button>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
