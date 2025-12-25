import Link from "next/link";
import { ArrowRight, BookOpen, Users, Award, GraduationCap, MessageSquare, Clock, Check, Star, PlayCircle, FileCheck, Calendar, Phone, ChevronRight } from "lucide-react";
import { programs } from "@/data/programs";
import { teachers } from "@/data/teachers";
import { testimonials } from "@/data/testimonials";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary py-16 lg:py-24">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-white">
              <span className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                🎓 10.000+ Alumni Sukses Berbahasa Asing
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6 leading-tight text-white">
                Kuasai Bahasa Asing dalam Hitungan Bulan
              </h1>
              <p className="text-lg text-white/90 mb-8">
                Metode pembelajaran interaktif dengan pengajar berpengalaman. Kelas reguler, privat, dan online tersedia untuk semua level.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <Link href="/pendaftaran" className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors">
                  Daftar Sekarang
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link href="/kontak" className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white font-semibold px-6 py-3 rounded-lg transition-colors">
                  <MessageSquare className="w-5 h-5" />
                  Konsultasi Gratis
                </Link>
              </div>
              <div className="flex gap-8">
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
            <div className="hidden lg:flex justify-center">
              <div className="relative w-80 h-80">
                <div className="absolute inset-0 bg-white/10 rounded-full"></div>
                <div className="absolute top-4 left-4 w-14 h-14 bg-white rounded-xl shadow-lg flex items-center justify-center text-3xl">🇬🇧</div>
                <div className="absolute top-4 right-4 w-14 h-14 bg-white rounded-xl shadow-lg flex items-center justify-center text-3xl">🇯🇵</div>
                <div className="absolute bottom-4 left-4 w-14 h-14 bg-white rounded-xl shadow-lg flex items-center justify-center text-3xl">🇰🇷</div>
                <div className="absolute bottom-4 right-4 w-14 h-14 bg-white rounded-xl shadow-lg flex items-center justify-center text-3xl">🇨🇳</div>
                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-14 h-14 bg-white rounded-xl shadow-lg flex items-center justify-center text-3xl">🇩🇪</div>
                <div className="absolute top-1/2 right-0 -translate-y-1/2 w-14 h-14 bg-white rounded-xl shadow-lg flex items-center justify-center text-3xl">🇫🇷</div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white rounded-2xl shadow-xl flex items-center justify-center text-5xl">🌍</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-8 bg-white border-b">
        <div className="container-custom">
          <p className="text-center text-gray-500 text-sm mb-6">Dipercaya oleh perusahaan dan institusi terkemuka</p>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16 opacity-50">
            {["🏢 Tokopedia", "🏢 Gojek", "🏢 Shopee", "🎓 UI", "🎓 ITB", "🏢 Bank BCA"].map((company, i) => (
              <span key={i} className="text-lg font-bold text-gray-400">{company}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-dark mb-4">
              Pilih Bahasa yang Ingin Anda Kuasai
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              6 pilihan bahasa dengan kurikulum terstruktur dan pengajar berpengalaman
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
                  {program.features.slice(0, 3).map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 bg-secondary rounded-full flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
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

          <div className="text-center mt-8">
            <Link href="/program" className="btn-outline">
              Lihat Semua Program
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-dark mb-4">
              Bagaimana Cara Bergabung?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              4 langkah mudah untuk memulai perjalanan bahasa Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: 1, icon: FileCheck, title: "Daftar Online", desc: "Isi formulir pendaftaran online atau hubungi tim kami via WhatsApp" },
              { step: 2, icon: MessageSquare, title: "Konsultasi", desc: "Tim kami akan menghubungi untuk konsultasi kebutuhan belajar Anda" },
              { step: 3, icon: BookOpen, title: "Tes Level", desc: "Ikuti tes level gratis untuk menentukan kelas yang sesuai" },
              { step: 4, icon: PlayCircle, title: "Mulai Belajar", desc: "Bergabung dengan kelas dan mulai perjalanan menguasai bahasa baru" },
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="card text-center h-full">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                    {item.step}
                  </div>
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-dark mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
                {i < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ChevronRight className="w-6 h-6 text-primary" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-dark mb-4">
              Mengapa Belajar di LinguaMaster?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Kami berkomitmen memberikan pengalaman belajar bahasa terbaik
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: GraduationCap, title: "Pengajar Berpengalaman", desc: "Native speaker dan pengajar Indonesia bersertifikat dengan pengalaman 5+ tahun mengajar.", color: "primary" },
              { icon: MessageSquare, title: "Metode Interaktif", desc: "Pembelajaran berbasis komunikasi aktif, bukan sekadar hafalan. Praktek langsung setiap pertemuan.", color: "secondary" },
              { icon: Clock, title: "Kelas Fleksibel", desc: "Pilih kelas reguler, privat, atau online sesuai jadwal dan kebutuhan Anda.", color: "accent" },
              { icon: Award, title: "Sertifikat Resmi", desc: "Dapatkan sertifikat kelulusan dan persiapan ujian internasional (IELTS, JLPT, TOPIK, HSK).", color: "primary" },
            ].map((item, i) => (
              <div key={i} className="text-center p-6 bg-background rounded-xl hover:shadow-lg transition-shadow">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center bg-${item.color}/10`}>
                  <item.icon className={`w-8 h-8 text-${item.color}`} />
                </div>
                <h3 className="text-lg font-heading font-bold text-dark mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              { value: "95%", label: "Tingkat Kelulusan Sertifikasi" },
              { value: "98%", label: "Tingkat Kepuasan Siswa" },
              { value: "4.9/5", label: "Rating dari Alumni" },
            ].map((stat, i) => (
              <div key={i} className="text-center p-6 bg-gradient-to-br from-primary to-secondary rounded-xl text-white">
                <p className="text-4xl font-bold mb-2">{stat.value}</p>
                <p className="text-white/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Class Types Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-dark mb-4">
              Pilih Tipe Kelas yang Sesuai
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Sesuaikan dengan gaya belajar dan kebutuhan Anda
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { name: "Reguler", icon: Users, price: "Rp 500rb", period: "/bulan", features: ["8-12 siswa per kelas", "Jadwal Fixed 2x/minggu", "Materi Standar Terstruktur", "Group Discussion", "Free Consultation"], highlight: false },
              { name: "Privat", icon: GraduationCap, price: "Rp 1.5jt", period: "/bulan", features: ["1-3 siswa saja", "Jadwal 100% Flexible", "Materi Custom sesuai kebutuhan", "Personal Focus & Attention", "Progress Report Berkala"], highlight: true },
              { name: "Online", icon: MessageSquare, price: "Rp 400rb", period: "/bulan", features: ["5-10 siswa via Zoom", "Jadwal Flexible", "Materi Digital Lengkap", "Recording Tersedia", "Belajar dari Mana Saja"], highlight: false },
            ].map((type, i) => (
              <div key={i} className={`rounded-xl p-6 ${type.highlight ? "bg-gradient-to-br from-primary to-secondary text-white scale-105 shadow-xl" : "bg-white border-2 border-gray-100 shadow-lg"}`}>
                {type.highlight && (
                  <span className="block text-center bg-accent text-white text-xs font-bold px-3 py-1 rounded-full mb-4 w-fit mx-auto">Paling Populer</span>
                )}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${type.highlight ? "bg-white/20" : "bg-primary/10"}`}>
                  <type.icon className={`w-6 h-6 ${type.highlight ? "text-white" : "text-primary"}`} />
                </div>
                <h3 className={`text-xl font-heading font-bold mb-2 ${type.highlight ? "text-white" : "text-dark"}`}>Kelas {type.name}</h3>
                <div className="mb-4">
                  <span className={`text-3xl font-bold ${type.highlight ? "text-white" : "text-dark"}`}>{type.price}</span>
                  <span className={type.highlight ? "text-white/70" : "text-gray-500"}>{type.period}</span>
                </div>
                <ul className="space-y-3 mb-6">
                  {type.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2">
                      <Check className={`w-5 h-5 flex-shrink-0 ${type.highlight ? "text-white" : "text-secondary"}`} />
                      <span className={`text-sm ${type.highlight ? "text-white/90" : "text-gray-600"}`}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/pendaftaran" className={`block text-center py-3 rounded-lg font-semibold transition-colors ${type.highlight ? "bg-accent hover:bg-accent-dark text-white" : "btn-outline w-full"}`}>
                  Pilih Kelas Ini
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/jadwal" className="text-primary hover:text-primary-dark font-medium inline-flex items-center gap-1">
              Lihat Jadwal Kelas Tersedia <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-12 bg-white border-y">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h3 className="text-xl font-heading font-bold text-dark mb-2">Persiapan Sertifikasi Internasional</h3>
            <p className="text-gray-600 text-sm">Tingkatkan karir dengan sertifikasi resmi</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-12">
            {[
              { name: "IELTS", flag: "🇬🇧" },
              { name: "TOEFL", flag: "🇺🇸" },
              { name: "JLPT", flag: "🇯🇵" },
              { name: "TOPIK", flag: "🇰🇷" },
              { name: "HSK", flag: "🇨🇳" },
              { name: "Goethe", flag: "🇩🇪" },
              { name: "DELF", flag: "🇫🇷" },
            ].map((cert, i) => (
              <div key={i} className="flex items-center gap-2 px-4 py-2 bg-background rounded-lg">
                <span className="text-2xl">{cert.flag}</span>
                <span className="font-bold text-dark">{cert.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teachers Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-dark mb-4">
              Belajar dari yang Terbaik
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Pengajar native speaker dan berpengalaman siap membimbing Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teachers.slice(0, 4).map((teacher) => (
              <div key={teacher.id} className="card text-center hover:shadow-xl transition-shadow">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                  <span className="text-3xl text-white">👨‍🏫</span>
                </div>
                <h3 className="font-heading font-bold text-dark mb-1">{teacher.name}</h3>
                <p className="text-primary text-sm font-medium mb-1">{teacher.language}</p>
                <p className="text-gray-500 text-sm mb-3">{teacher.origin}</p>
                <div className="flex items-center justify-center gap-1 text-accent text-sm">
                  <Star className="w-4 h-4 fill-accent" />
                  <span>{teacher.experience}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/pengajar" className="btn-outline">
              Lihat Semua Pengajar
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-dark mb-4">
              Apa Kata Alumni Kami
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ribuan alumni telah sukses berbahasa asing bersama LinguaMaster
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((testimonial) => (
              <div key={testimonial.id} className="card">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <span className="inline-block bg-secondary/10 text-secondary text-xs font-medium px-3 py-1 rounded-full mb-3">
                  {testimonial.achievement}
                </span>
                <p className="text-gray-600 italic mb-6">&ldquo;{testimonial.testimonial}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-dark">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">Alumni {testimonial.program}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/testimoni" className="btn-outline">
              Lihat Semua Testimoni
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-dark mb-4">
                Pertanyaan yang Sering Ditanyakan
              </h2>
              <p className="text-gray-600 mb-8">
                Temukan jawaban untuk pertanyaan umum tentang kursus bahasa di LinguaMaster Academy
              </p>
              <Link href="/faq" className="btn-primary">
                Lihat Semua FAQ <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
            <div className="space-y-4">
              {[
                { q: "Bagaimana cara mendaftar?", a: "Anda bisa mendaftar melalui website, WhatsApp, atau datang langsung ke kantor kami." },
                { q: "Apakah ada tes level gratis?", a: "Ya, semua calon siswa baru mendapatkan tes level gratis untuk menentukan kelas yang sesuai." },
                { q: "Apakah bisa refund?", a: "Ya, kami menyediakan garansi 14 hari. Jika tidak puas, uang kembali 100%." },
                { q: "Berapa lama durasi kursus?", a: "Tergantung program, rata-rata 3-12 bulan untuk mencapai level tertentu." },
              ].map((faq, i) => (
                <div key={i} className="card">
                  <h3 className="font-bold text-dark mb-2">{faq.q}</h3>
                  <p className="text-gray-600 text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Schedule Preview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-dark mb-4">
              Kelas yang Akan Segera Dimulai
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Daftar sekarang sebelum kelas penuh!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { program: "Bahasa Inggris", level: "Beginner", date: "6 Jan 2025", slots: "4 slot tersisa", icon: "🇬🇧" },
              { program: "Bahasa Jepang", level: "N5", date: "6 Jan 2025", slots: "1 slot tersisa", icon: "🇯🇵" },
              { program: "Bahasa Korea", level: "TOPIK I", date: "7 Jan 2025", slots: "PENUH", icon: "🇰🇷" },
              { program: "Bahasa Mandarin", level: "HSK 1", date: "7 Jan 2025", slots: "3 slot tersisa", icon: "🇨🇳" },
            ].map((schedule, i) => (
              <div key={i} className="card hover:shadow-xl transition-shadow">
                <span className="text-4xl mb-4 block">{schedule.icon}</span>
                <h3 className="font-heading font-bold text-dark mb-1">{schedule.program}</h3>
                <p className="text-primary font-medium text-sm mb-3">{schedule.level}</p>
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
                  <Calendar className="w-4 h-4" />
                  <span>Mulai: {schedule.date}</span>
                </div>
                <span className={`inline-block text-xs font-medium px-3 py-1 rounded-full ${schedule.slots === "PENUH" ? "bg-red-100 text-red-600" : "bg-accent/10 text-accent"}`}>
                  {schedule.slots}
                </span>
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

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary to-secondary">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-white mb-4">
            Siap Memulai Perjalanan Bahasa Anda?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Daftar sekarang dan dapatkan <span className="font-bold text-accent">TES LEVEL GRATIS</span> untuk menentukan kelas yang tepat!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/pendaftaran" className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg">
              Daftar Sekarang
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a href="https://wa.me/622112345678" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg">
              <Phone className="w-5 h-5" />
              Chat WhatsApp
            </a>
          </div>
          <p className="text-white/60 text-sm mt-6">
            Atau hubungi kami di +62 21 1234 5678
          </p>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                Tentang Kami
              </span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-dark mb-4">
                LinguaMaster Academy
              </h2>
              <p className="text-gray-600 mb-6">
                Berdiri sejak 2015, LinguaMaster Academy telah membantu lebih dari 10.000 siswa menguasai bahasa asing. Dengan metode pembelajaran interaktif dan pengajar berpengalaman, kami berkomitmen memberikan pendidikan bahasa berkualitas.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-4 bg-background rounded-lg">
                  <p className="text-2xl font-bold text-primary">2015</p>
                  <p className="text-gray-600 text-sm">Tahun Berdiri</p>
                </div>
                <div className="p-4 bg-background rounded-lg">
                  <p className="text-2xl font-bold text-secondary">50+</p>
                  <p className="text-gray-600 text-sm">Pengajar Expert</p>
                </div>
              </div>
              <Link href="/tentang" className="text-primary hover:text-primary-dark font-medium inline-flex items-center gap-1">
                Pelajari Lebih Lanjut <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-primary to-secondary p-6 rounded-xl text-white">
                  <GraduationCap className="w-8 h-8 mb-2" />
                  <p className="font-bold">Pengajar Tersertifikasi</p>
                </div>
                <div className="bg-background p-6 rounded-xl">
                  <Award className="w-8 h-8 text-accent mb-2" />
                  <p className="font-bold text-dark">Test Center Resmi</p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-background p-6 rounded-xl">
                  <Users className="w-8 h-8 text-secondary mb-2" />
                  <p className="font-bold text-dark">Komunitas Alumni</p>
                </div>
                <div className="bg-gradient-to-br from-secondary to-accent p-6 rounded-xl text-white">
                  <BookOpen className="w-8 h-8 mb-2" />
                  <p className="font-bold">Materi Lengkap</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
