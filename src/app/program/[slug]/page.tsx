import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, Clock, Calendar, Award } from "lucide-react";
import { programs, getProgramBySlug } from "@/data/programs";
import { teachers } from "@/data/teachers";
import { schedules } from "@/data/schedule";

export function generateStaticParams() {
  return programs.map((program) => ({ slug: program.slug }));
}

export default function ProgramDetailPage({ params }: { params: { slug: string } }) {
  const program = getProgramBySlug(params.slug);

  if (!program) {
    notFound();
  }

  const programTeachers = teachers.filter((t) => t.language === program.name);
  const programSchedules = schedules.filter((s) => s.program === program.name);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-secondary py-16">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="text-white">
              <span className="inline-block bg-white/20 px-4 py-2 rounded-full text-sm font-medium mb-4">
                {program.level}
              </span>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-5xl">{program.icon}</span>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold">{program.name}</h1>
              </div>
              <p className="text-white/90 text-lg mb-8">{program.description}</p>
              <div className="flex flex-wrap gap-4 mb-8">
                <Link href="/pendaftaran" className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors">
                  Daftar Sekarang <ArrowRight className="w-5 h-5" />
                </Link>
                <Link href="/jadwal" className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white font-semibold px-6 py-3 rounded-lg transition-colors">
                  <Calendar className="w-5 h-5" /> Lihat Jadwal
                </Link>
              </div>
              <div className="flex gap-8">
                <div className="text-center">
                  <p className="text-2xl font-bold">{program.price}</p>
                  <p className="text-white/70 text-sm">Mulai dari</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold">{programTeachers.length || 2}</p>
                  <p className="text-white/70 text-sm">Pengajar</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold">{program.examPrep.length}</p>
                  <p className="text-white/70 text-sm">Sertifikasi</p>
                </div>
              </div>
            </div>
            <div className="hidden lg:flex justify-center">
              <div className="w-64 h-64 bg-white/10 rounded-full flex items-center justify-center">
                <span className="text-[150px]">{program.icon}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-dark text-center mb-12">
            Apa yang Akan Anda Pelajari
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {program.features.map((feature, i) => (
              <div key={i} className="flex items-start gap-4 p-6 bg-background rounded-xl">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Check className="w-5 h-5 text-primary" />
                </div>
                <p className="text-gray-700">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-dark text-center mb-4">
            Kurikulum
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Kurikulum terstruktur dari level dasar hingga mahir
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {program.curriculum.map((level, i) => (
              <div key={i} className="card">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary text-white rounded-xl flex items-center justify-center font-bold text-lg">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-dark">{level.level}</h3>
                    <p className="text-sm text-gray-500 flex items-center gap-1">
                      <Clock className="w-4 h-4" /> {level.duration}
                    </p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {level.topics.map((topic, j) => (
                    <li key={j} className="flex items-center gap-2 text-gray-600 text-sm">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exam Prep */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-dark text-center mb-4">
            Persiapan Sertifikasi
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Persiapan ujian internasional untuk meningkatkan prospek karir Anda
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {program.examPrep.map((exam) => (
              <div key={exam} className="inline-flex items-center gap-2 bg-primary text-white font-bold px-6 py-3 rounded-xl shadow-lg">
                <Award className="w-5 h-5" /> {exam}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedules */}
      {programSchedules.length > 0 && (
        <section className="section-padding bg-background">
          <div className="container-custom">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-dark text-center mb-4">
              Jadwal Kelas Tersedia
            </h2>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
              Pilih jadwal yang sesuai dengan waktu Anda
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {programSchedules.slice(0, 3).map((schedule) => (
                <div key={schedule.id} className="card">
                  <div className="flex justify-between items-start mb-4">
                    <span className={`text-xs font-medium px-3 py-1 rounded-full ${schedule.type === "Reguler" ? "bg-primary/10 text-primary" : schedule.type === "Privat" ? "bg-secondary/10 text-secondary" : "bg-accent/10 text-accent"}`}>
                      {schedule.type}
                    </span>
                    <span className="text-xs text-gray-400">{schedule.id}</span>
                  </div>
                  <h3 className="font-bold text-dark mb-1">{schedule.level}</h3>
                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <p className="flex items-center gap-2"><Calendar className="w-4 h-4 text-primary" /> {schedule.days.join(", ")}</p>
                    <p className="flex items-center gap-2"><Clock className="w-4 h-4 text-primary" /> {schedule.time}</p>
                  </div>
                  <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                    <p className="font-bold text-primary">{schedule.price}</p>
                    <span className="text-sm text-gray-500">Mulai: {schedule.startDate}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/jadwal" className="btn-outline">
                Lihat Semua Jadwal
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-primary to-secondary">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-4">
            Mulai Belajar {program.name} Sekarang
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Bergabung dengan ribuan siswa yang telah sukses menguasai {program.name}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/pendaftaran" className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-4 rounded-lg transition-colors">
              Daftar Sekarang <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/kontak" className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white font-semibold px-8 py-4 rounded-lg transition-colors">
              Konsultasi Gratis
            </Link>
          </div>
        </div>
      </section>

      {/* Other Programs */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-dark text-center mb-12">
            Program Bahasa Lainnya
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {programs.filter((p) => p.slug !== params.slug).map((p) => (
              <Link key={p.id} href={`/program/${p.slug}`} className="card text-center hover:shadow-xl transition-shadow">
                <span className="text-3xl mb-2 block">{p.icon}</span>
                <h3 className="font-bold text-dark text-sm">{p.name}</h3>
                <p className="text-xs text-gray-500 mt-1">{p.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
