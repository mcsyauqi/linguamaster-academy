"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowRight, Check, Clock, Users, BookOpen, Award, Calendar } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card, CardContent } from "@/components/ui/Card";
import { programs, getProgramBySlug } from "@/data/programs";
import { teachers } from "@/data/teachers";
import { schedules } from "@/data/schedule";

export default function ProgramDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const program = getProgramBySlug(slug);

  if (!program) {
    return (
      <div className="pt-24 pb-20">
        <Container>
          <div className="text-center py-20">
            <h1 className="text-4xl font-bold text-[#1F2937] mb-4">Program Tidak Ditemukan</h1>
            <p className="text-gray-600 mb-8">Maaf, program yang Anda cari tidak tersedia.</p>
            <Button href="/program">Lihat Semua Program</Button>
          </div>
        </Container>
      </div>
    );
  }

  const programTeachers = teachers.filter(
    (t) => t.language === program.name || t.language === "Multi-Language"
  );
  const programSchedules = schedules.filter((s) => s.program === program.name);

  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section
        className="py-20 relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${program.color}15 0%, ${program.color}05 100%)`
        }}
      >
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <Badge
                className="mb-6"
                style={{
                  backgroundColor: `${program.color}15`,
                  color: program.color
                }}
              >
                {program.level}
              </Badge>

              <div className="flex items-center gap-4 mb-6">
                <span className="text-6xl">{program.icon}</span>
                <h1 className="text-4xl md:text-5xl font-bold text-[#1F2937] font-heading">
                  {program.name}
                </h1>
              </div>

              <p className="text-lg text-gray-600 mb-8">
                {program.description}
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <Button href="/pendaftaran" size="lg">
                  Daftar Sekarang
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button href="/jadwal" variant="outline" size="lg">
                  <Calendar className="mr-2 w-5 h-5" />
                  Lihat Jadwal
                </Button>
              </div>

              <div className="flex gap-8">
                <div className="text-center">
                  <p className="text-2xl font-bold text-[#1F2937]">{program.price}</p>
                  <p className="text-sm text-gray-500">Mulai dari</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-[#1F2937]">{programTeachers.length}</p>
                  <p className="text-sm text-gray-500">Pengajar</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-[#1F2937]">{program.examPrep.length}</p>
                  <p className="text-sm text-gray-500">Sertifikasi</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <div
                className="aspect-square max-w-md mx-auto rounded-3xl flex items-center justify-center"
                style={{ backgroundColor: `${program.color}15` }}
              >
                <motion.span
                  className="text-[200px]"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  {program.icon}
                </motion.span>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <Container>
          <h2 className="text-3xl font-bold text-[#1F2937] font-heading text-center mb-12">
            Apa yang Akan Anda Pelajari
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {program.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 p-6 bg-[#F9FAFB] rounded-xl"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${program.color}15` }}
                >
                  <Check className="w-5 h-5" style={{ color: program.color }} />
                </div>
                <p className="text-gray-700">{feature}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Curriculum */}
      <section className="py-20 bg-[#F9FAFB]">
        <Container>
          <h2 className="text-3xl font-bold text-[#1F2937] font-heading text-center mb-4">
            Kurikulum
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Kurikulum terstruktur dari level dasar hingga mahir
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {program.curriculum.map((level, index) => (
              <Card key={index} delay={index * 0.1}>
                <CardContent>
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold"
                      style={{ backgroundColor: program.color }}
                    >
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-bold text-[#1F2937]">{level.level}</h3>
                      <p className="text-sm text-gray-500 flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {level.duration}
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {level.topics.map((topic, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-600">
                        <span
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ backgroundColor: program.color }}
                        />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Exam Preparation */}
      <section className="py-20 bg-white">
        <Container>
          <h2 className="text-3xl font-bold text-[#1F2937] font-heading text-center mb-4">
            Persiapan Sertifikasi
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Persiapan ujian internasional untuk meningkatkan prospek karir Anda
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {program.examPrep.map((exam) => (
              <motion.div
                key={exam}
                whileHover={{ scale: 1.05 }}
                className="px-6 py-4 bg-gradient-to-r rounded-xl text-white font-bold shadow-lg"
                style={{
                  background: `linear-gradient(135deg, ${program.color} 0%, ${program.color}99 100%)`
                }}
              >
                <Award className="w-5 h-5 inline mr-2" />
                {exam}
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Teachers */}
      {programTeachers.length > 0 && (
        <section className="py-20 bg-[#F9FAFB]">
          <Container>
            <h2 className="text-3xl font-bold text-[#1F2937] font-heading text-center mb-4">
              Pengajar {program.name}
            </h2>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
              Belajar dari pengajar berpengalaman dan bersertifikat
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {programTeachers.slice(0, 4).map((teacher, index) => (
                <motion.div
                  key={teacher.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg"
                >
                  <div
                    className="h-48 flex items-center justify-center"
                    style={{ backgroundColor: `${program.color}15` }}
                  >
                    <span className="text-5xl">👨‍🏫</span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-[#1F2937]">{teacher.name}</h3>
                    <p className="text-sm text-gray-500">{teacher.origin}</p>
                    <p className="text-sm font-medium mt-2" style={{ color: program.color }}>
                      {teacher.experience}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button href="/pengajar" variant="outline">
                Lihat Semua Pengajar
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </Container>
        </section>
      )}

      {/* Schedule Preview */}
      {programSchedules.length > 0 && (
        <section className="py-20 bg-white">
          <Container>
            <h2 className="text-3xl font-bold text-[#1F2937] font-heading text-center mb-4">
              Jadwal Kelas Tersedia
            </h2>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
              Pilih jadwal yang sesuai dengan waktu Anda
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {programSchedules.slice(0, 3).map((schedule, index) => (
                <Card key={schedule.id} delay={index * 0.1}>
                  <CardContent>
                    <div className="flex justify-between items-start mb-4">
                      <Badge
                        variant={
                          schedule.type === "Reguler"
                            ? "primary"
                            : schedule.type === "Privat"
                            ? "secondary"
                            : "accent"
                        }
                      >
                        {schedule.type}
                      </Badge>
                      <span className="text-sm text-gray-500">{schedule.id}</span>
                    </div>

                    <h3 className="font-bold text-[#1F2937] mb-2">{schedule.level}</h3>

                    <div className="space-y-2 text-sm text-gray-600 mb-4">
                      <p className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {schedule.days.join(", ")}
                      </p>
                      <p className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {schedule.time}
                      </p>
                      <p className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        {schedule.registered}/{schedule.slots} siswa
                      </p>
                    </div>

                    <div className="flex justify-between items-center pt-4 border-t">
                      <p className="font-bold" style={{ color: program.color }}>
                        {schedule.price}
                      </p>
                      <span className="text-sm text-gray-500">
                        Mulai: {schedule.startDate}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button href="/jadwal" variant="outline">
                Lihat Semua Jadwal
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </Container>
        </section>
      )}

      {/* CTA */}
      <section
        className="py-20 relative overflow-hidden"
        style={{ backgroundColor: program.color }}
      >
        <div className="absolute inset-0">
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
            <h2 className="text-3xl md:text-4xl font-bold text-white font-heading mb-6">
              Mulai Belajar {program.name} Sekarang
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Bergabung dengan ribuan siswa yang telah sukses menguasai {program.name}
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
                Konsultasi Gratis
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Other Programs */}
      <section className="py-20 bg-[#F9FAFB]">
        <Container>
          <h2 className="text-3xl font-bold text-[#1F2937] font-heading text-center mb-12">
            Program Bahasa Lainnya
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {programs
              .filter((p) => p.slug !== slug)
              .map((p) => (
                <Link
                  key={p.id}
                  href={`/program/${p.slug}`}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 text-center"
                >
                  <span className="text-4xl mb-4 block">{p.icon}</span>
                  <h3 className="font-bold text-[#1F2937]">{p.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">{p.price}</p>
                </Link>
              ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
