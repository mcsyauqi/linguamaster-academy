"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Award, X, BookOpen, Clock, Globe } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { teachers, Teacher } from "@/data/teachers";

const languages = ["Semua", "Bahasa Inggris", "Bahasa Jepang", "Bahasa Korea", "Bahasa Mandarin", "Bahasa Jerman", "Bahasa Prancis"];

export default function PengajarPage() {
  const [selectedLanguage, setSelectedLanguage] = useState("Semua");
  const [selectedTeacher, setSelectedTeacher] = useState<Teacher | null>(null);

  const filteredTeachers = teachers.filter(
    (teacher) =>
      selectedLanguage === "Semua" ||
      teacher.language === selectedLanguage ||
      teacher.language === "Multi-Language"
  );

  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#4F46E5] to-[#10B981] py-20">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white max-w-3xl mx-auto"
          >
            <Badge variant="accent" className="mb-6">
              50+ Pengajar Berpengalaman
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">
              Tim Pengajar Kami
            </h1>
            <p className="text-xl text-white/80">
              Belajar dari pengajar native speaker dan profesional bersertifikat dengan pengalaman bertahun-tahun
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Filter */}
      <section className="py-8 bg-white border-b sticky top-[72px] z-40">
        <Container>
          <div className="flex flex-wrap gap-2 justify-center">
            {languages.map((language) => (
              <button
                key={language}
                onClick={() => setSelectedLanguage(language)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedLanguage === language
                    ? "bg-[#4F46E5] text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {language}
              </button>
            ))}
          </div>
        </Container>
      </section>

      {/* Teachers Grid */}
      <section className="py-12 bg-[#F9FAFB]">
        <Container>
          <div className="mb-6">
            <p className="text-gray-600">
              Menampilkan <span className="font-bold text-[#1F2937]">{filteredTeachers.length}</span> pengajar
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredTeachers.map((teacher, index) => (
              <motion.div
                key={teacher.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedTeacher(teacher)}
                className="bg-white rounded-2xl overflow-hidden shadow-lg cursor-pointer group"
              >
                {/* Photo */}
                <div className="relative h-64 bg-gradient-to-br from-[#4F46E5] to-[#10B981] overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-5xl">👨‍🏫</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <span className="text-white font-medium">Lihat Profil</span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4">
                    <span className="inline-flex items-center gap-1 text-white text-sm">
                      <Star className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
                      {teacher.experience}
                    </span>
                  </div>
                </div>

                {/* Info */}
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
                    {teacher.certifications.length > 2 && (
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                        +{teacher.certifications.length - 2}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Teacher Modal */}
      <AnimatePresence>
        {selectedTeacher && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedTeacher(null)}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              {/* Header */}
              <div className="relative h-48 bg-gradient-to-br from-[#4F46E5] to-[#10B981]">
                <button
                  onClick={() => setSelectedTeacher(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                  <div className="w-32 h-32 bg-white rounded-full shadow-lg flex items-center justify-center">
                    <span className="text-6xl">👨‍🏫</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="pt-20 pb-8 px-8">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-[#1F2937] font-heading">
                    {selectedTeacher.name}
                  </h2>
                  <p className="text-[#4F46E5] font-medium">{selectedTeacher.title}</p>
                  <p className="text-gray-500">{selectedTeacher.origin}</p>
                </div>

                <div className="grid md:grid-cols-3 gap-4 mb-8">
                  <div className="bg-[#F9FAFB] rounded-xl p-4 text-center">
                    <BookOpen className="w-6 h-6 text-[#4F46E5] mx-auto mb-2" />
                    <p className="text-sm text-gray-500">Bahasa</p>
                    <p className="font-bold text-[#1F2937]">{selectedTeacher.language}</p>
                  </div>
                  <div className="bg-[#F9FAFB] rounded-xl p-4 text-center">
                    <Clock className="w-6 h-6 text-[#10B981] mx-auto mb-2" />
                    <p className="text-sm text-gray-500">Pengalaman</p>
                    <p className="font-bold text-[#1F2937]">{selectedTeacher.experience}</p>
                  </div>
                  <div className="bg-[#F9FAFB] rounded-xl p-4 text-center">
                    <Globe className="w-6 h-6 text-[#F59E0B] mx-auto mb-2" />
                    <p className="text-sm text-gray-500">Asal</p>
                    <p className="font-bold text-[#1F2937]">{selectedTeacher.origin.split(" dari ")[1] || selectedTeacher.origin}</p>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="font-bold text-[#1F2937] mb-4">Tentang</h3>
                  <p className="text-gray-600">{selectedTeacher.description}</p>
                </div>

                <div className="mb-8">
                  <h3 className="font-bold text-[#1F2937] mb-4">Sertifikasi</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedTeacher.certifications.map((cert) => (
                      <span
                        key={cert}
                        className="inline-flex items-center gap-1 bg-[#4F46E5]/10 text-[#4F46E5] px-3 py-2 rounded-full"
                      >
                        <Award className="w-4 h-4" />
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="font-bold text-[#1F2937] mb-4">Spesialisasi</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedTeacher.specializations.map((spec) => (
                      <span
                        key={spec}
                        className="bg-gray-100 text-gray-700 px-3 py-2 rounded-full"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                <Button href="/pendaftaran" className="w-full" size="lg">
                  Daftar Kelas dengan {selectedTeacher.name.split(" ")[0]}
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA */}
      <section className="py-20 bg-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-[#1F2937] font-heading mb-4">
              Bergabung dengan Tim Pengajar Kami
            </h2>
            <p className="text-gray-600 mb-8">
              Apakah Anda pengajar bahasa berpengalaman? Bergabunglah dengan LinguaMaster Academy
            </p>
            <Button href="/kontak" size="lg">
              Lamar Sekarang
            </Button>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}
