import Link from "next/link";
import { ArrowRight, BookOpen, Users, Award } from "lucide-react";
import { programs } from "@/data/programs";

export default function ProgramPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-secondary py-16">
        <div className="container-custom text-center text-white">
          <span className="inline-block bg-white/20 px-4 py-2 rounded-full text-sm font-medium mb-4">
            6 Pilihan Bahasa
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
            Program Bahasa Kami
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
            Pilih bahasa yang ingin Anda kuasai dan mulai perjalanan bersama pengajar berpengalaman
          </p>
          <div className="flex justify-center gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-1">
                <BookOpen className="w-5 h-5 text-accent" />
                <span className="text-2xl font-bold">6</span>
              </div>
              <span className="text-white/70 text-sm">Bahasa</span>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-1">
                <Users className="w-5 h-5 text-accent" />
                <span className="text-2xl font-bold">50+</span>
              </div>
              <span className="text-white/70 text-sm">Pengajar</span>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-1">
                <Award className="w-5 h-5 text-accent" />
                <span className="text-2xl font-bold">10.000+</span>
              </div>
              <span className="text-white/70 text-sm">Alumni</span>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-dark mb-4">
              Pilih Program Bahasa
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Setiap program dirancang untuk membantu Anda menguasai bahasa dengan efektif
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((program) => (
              <div key={program.id} className="card hover:shadow-xl transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-4xl">{program.icon}</span>
                  <span className="bg-secondary/10 text-secondary text-xs font-medium px-3 py-1 rounded-full">
                    {program.level}
                  </span>
                </div>
                <h3 className="text-xl font-heading font-bold text-dark mb-2">{program.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{program.shortDesc}</p>
                <ul className="space-y-2 mb-4">
                  {program.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 bg-secondary rounded-full flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mb-4">
                  {program.examPrep.slice(0, 3).map((exam) => (
                    <span key={exam} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                      {exam}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div>
                    <span className="text-xs text-gray-500">Mulai dari</span>
                    <p className="text-lg font-bold text-primary">{program.price}</p>
                  </div>
                  <Link href={`/program/${program.slug}`} className="text-primary hover:text-primary-dark font-medium text-sm flex items-center gap-1">
                    Detail <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Class Types */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-dark mb-4">
              Pilih Tipe Kelas yang Sesuai
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Kami menyediakan berbagai tipe kelas untuk memenuhi kebutuhan belajar Anda
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                <Users className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold text-dark mb-2">Kelas Reguler</h3>
              <p className="text-primary font-bold text-2xl mb-4">Rp 400.000 - 700.000<span className="text-sm font-normal text-gray-500">/bulan</span></p>
              <ul className="text-left space-y-3 mb-6">
                <li className="flex items-start gap-2 text-gray-600 text-sm">
                  <span className="w-5 h-5 bg-secondary/20 text-secondary rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-0.5">✓</span>
                  8-12 siswa per kelas
                </li>
                <li className="flex items-start gap-2 text-gray-600 text-sm">
                  <span className="w-5 h-5 bg-secondary/20 text-secondary rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-0.5">✓</span>
                  2x pertemuan per minggu
                </li>
                <li className="flex items-start gap-2 text-gray-600 text-sm">
                  <span className="w-5 h-5 bg-secondary/20 text-secondary rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-0.5">✓</span>
                  90 menit per sesi
                </li>
                <li className="flex items-start gap-2 text-gray-600 text-sm">
                  <span className="w-5 h-5 bg-secondary/20 text-secondary rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-0.5">✓</span>
                  Materi pembelajaran termasuk
                </li>
                <li className="flex items-start gap-2 text-gray-600 text-sm">
                  <span className="w-5 h-5 bg-secondary/20 text-secondary rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-0.5">✓</span>
                  Sertifikat kelulusan
                </li>
              </ul>
              <Link href="/pendaftaran" className="btn-primary w-full">Daftar Sekarang</Link>
            </div>

            <div className="card text-center hover:shadow-xl transition-shadow border-2 border-primary relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-4 py-1 rounded-full">POPULER</span>
              <div className="w-20 h-20 mx-auto mb-6 bg-secondary/10 rounded-full flex items-center justify-center">
                <Award className="w-10 h-10 text-secondary" />
              </div>
              <h3 className="text-xl font-heading font-bold text-dark mb-2">Kelas Privat</h3>
              <p className="text-primary font-bold text-2xl mb-4">Rp 1.500.000+<span className="text-sm font-normal text-gray-500">/bulan</span></p>
              <ul className="text-left space-y-3 mb-6">
                <li className="flex items-start gap-2 text-gray-600 text-sm">
                  <span className="w-5 h-5 bg-secondary/20 text-secondary rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-0.5">✓</span>
                  1-3 siswa per kelas
                </li>
                <li className="flex items-start gap-2 text-gray-600 text-sm">
                  <span className="w-5 h-5 bg-secondary/20 text-secondary rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-0.5">✓</span>
                  Jadwal fleksibel
                </li>
                <li className="flex items-start gap-2 text-gray-600 text-sm">
                  <span className="w-5 h-5 bg-secondary/20 text-secondary rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-0.5">✓</span>
                  Materi custom sesuai kebutuhan
                </li>
                <li className="flex items-start gap-2 text-gray-600 text-sm">
                  <span className="w-5 h-5 bg-secondary/20 text-secondary rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-0.5">✓</span>
                  Progress report bulanan
                </li>
                <li className="flex items-start gap-2 text-gray-600 text-sm">
                  <span className="w-5 h-5 bg-secondary/20 text-secondary rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-0.5">✓</span>
                  Konsultasi gratis
                </li>
              </ul>
              <Link href="/pendaftaran" className="btn-primary w-full">Daftar Sekarang</Link>
            </div>

            <div className="card text-center hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 mx-auto mb-6 bg-accent/10 rounded-full flex items-center justify-center">
                <BookOpen className="w-10 h-10 text-accent" />
              </div>
              <h3 className="text-xl font-heading font-bold text-dark mb-2">Kelas Online</h3>
              <p className="text-primary font-bold text-2xl mb-4">Rp 350.000 - 600.000<span className="text-sm font-normal text-gray-500">/bulan</span></p>
              <ul className="text-left space-y-3 mb-6">
                <li className="flex items-start gap-2 text-gray-600 text-sm">
                  <span className="w-5 h-5 bg-secondary/20 text-secondary rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-0.5">✓</span>
                  5-10 siswa per kelas
                </li>
                <li className="flex items-start gap-2 text-gray-600 text-sm">
                  <span className="w-5 h-5 bg-secondary/20 text-secondary rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-0.5">✓</span>
                  Belajar dari mana saja
                </li>
                <li className="flex items-start gap-2 text-gray-600 text-sm">
                  <span className="w-5 h-5 bg-secondary/20 text-secondary rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-0.5">✓</span>
                  60 menit via Zoom
                </li>
                <li className="flex items-start gap-2 text-gray-600 text-sm">
                  <span className="w-5 h-5 bg-secondary/20 text-secondary rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-0.5">✓</span>
                  Rekaman kelas tersedia
                </li>
                <li className="flex items-start gap-2 text-gray-600 text-sm">
                  <span className="w-5 h-5 bg-secondary/20 text-secondary rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-0.5">✓</span>
                  Materi digital
                </li>
              </ul>
              <Link href="/pendaftaran" className="btn-primary w-full">Daftar Sekarang</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Path */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-dark mb-4">
              Jalur Pembelajaran
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Dari pemula hingga mahir, kami memandu perjalanan belajar Anda
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20"></div>

              <div className="space-y-8">
                <div className="relative flex gap-6">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0 z-10">1</div>
                  <div className="card flex-1">
                    <h3 className="text-lg font-heading font-bold text-dark mb-2">Level Beginner</h3>
                    <p className="text-gray-600 text-sm mb-3">Durasi: 3-4 bulan</p>
                    <p className="text-gray-600">Mempelajari dasar-dasar bahasa: alfabet, pengucapan, kosakata dasar, dan percakapan sederhana sehari-hari.</p>
                  </div>
                </div>

                <div className="relative flex gap-6">
                  <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0 z-10">2</div>
                  <div className="card flex-1">
                    <h3 className="text-lg font-heading font-bold text-dark mb-2">Level Elementary</h3>
                    <p className="text-gray-600 text-sm mb-3">Durasi: 3-4 bulan</p>
                    <p className="text-gray-600">Memperdalam tata bahasa, memperluas kosakata, dan meningkatkan kemampuan berbicara dalam situasi umum.</p>
                  </div>
                </div>

                <div className="relative flex gap-6">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0 z-10">3</div>
                  <div className="card flex-1">
                    <h3 className="text-lg font-heading font-bold text-dark mb-2">Level Intermediate</h3>
                    <p className="text-gray-600 text-sm mb-3">Durasi: 4-6 bulan</p>
                    <p className="text-gray-600">Mampu berkomunikasi dengan lancar, memahami teks kompleks, dan menulis dengan struktur yang baik.</p>
                  </div>
                </div>

                <div className="relative flex gap-6">
                  <div className="w-16 h-16 bg-primary-dark rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0 z-10">4</div>
                  <div className="card flex-1">
                    <h3 className="text-lg font-heading font-bold text-dark mb-2">Level Advanced</h3>
                    <p className="text-gray-600 text-sm mb-3">Durasi: 6+ bulan</p>
                    <p className="text-gray-600">Menguasai bahasa secara menyeluruh, siap untuk ujian sertifikasi internasional dan penggunaan profesional.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-dark mb-4">
              Mengapa Belajar di LinguaMaster?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "🎓", title: "Pengajar Bersertifikat", desc: "Native speaker & pengajar lokal dengan sertifikasi internasional" },
              { icon: "📚", title: "Kurikulum Terstruktur", desc: "Materi pembelajaran sistematis dari dasar hingga mahir" },
              { icon: "🏆", title: "Persiapan Ujian", desc: "Program khusus untuk IELTS, JLPT, TOPIK, HSK, dan lainnya" },
              { icon: "💬", title: "Praktik Intensif", desc: "70% waktu kelas untuk praktik speaking dan conversation" },
              { icon: "📱", title: "Akses Digital", desc: "Platform e-learning dengan materi tambahan 24/7" },
              { icon: "👥", title: "Kelas Kecil", desc: "Maksimal 12 siswa untuk perhatian optimal" },
              { icon: "📝", title: "Progress Report", desc: "Laporan kemajuan berkala untuk monitoring perkembangan" },
              { icon: "🎁", title: "Bonus & Diskon", desc: "Promo menarik untuk pendaftaran paket" },
            ].map((item, i) => (
              <div key={i} className="card text-center hover:shadow-lg transition-shadow">
                <span className="text-4xl mb-4 block">{item.icon}</span>
                <h3 className="font-heading font-bold text-dark mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-primary to-secondary">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-4">
            Siap Memulai Perjalanan Bahasa Anda?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Dapatkan konsultasi gratis dan tes level untuk menentukan kelas yang tepat
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/pendaftaran" className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-4 rounded-lg transition-colors">
              Daftar Sekarang <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/jadwal" className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-primary font-semibold px-8 py-4 rounded-lg transition-colors">
              Lihat Jadwal Kelas
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
