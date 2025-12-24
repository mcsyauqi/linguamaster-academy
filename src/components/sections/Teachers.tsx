"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { teachers } from "@/data/teachers";

export function Teachers() {
  const featuredTeachers = teachers.slice(0, 4);

  return (
    <section className="py-20 bg-[#F9FAFB]">
      <Container>
        <SectionTitle
          title="Belajar dari yang Terbaik"
          subtitle="Pengajar native speaker dan berpengalaman siap membimbing Anda"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredTeachers.map((teacher, index) => (
            <motion.div
              key={teacher.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg group"
            >
              {/* Photo Placeholder */}
              <div className="relative h-64 bg-gradient-to-br from-[#4F46E5] to-[#10B981] overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-5xl">👨‍🏫</span>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4">
                  <span className="inline-flex items-center gap-1 text-white text-sm">
                    <Star className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
                    {teacher.experience}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-[#1F2937] font-heading mb-1">
                  {teacher.name}
                </h3>
                <p className="text-[#4F46E5] font-medium text-sm mb-2">
                  {teacher.language}
                </p>
                <p className="text-gray-500 text-sm mb-4">{teacher.origin}</p>

                <div className="flex flex-wrap gap-2">
                  {teacher.certifications.slice(0, 2).map((cert) => (
                    <span
                      key={cert}
                      className="text-xs bg-[#4F46E5]/10 text-[#4F46E5] px-2 py-1 rounded-full"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button href="/pengajar" variant="outline" size="lg">
            Lihat Semua Pengajar
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
