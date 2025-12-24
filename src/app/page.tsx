import Link from "next/link";
import { ArrowRight, BookOpen, Users, Award, GraduationCap, MessageSquare, Clock, Check, Star } from "lucide-react";
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
                      <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
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

      {/* Why Us Section */}
      <section className="section-padding bg-background">
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
              <div key={i} className="text-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center bg-${item.color}/10`}>
                  <item.icon className={`w-8 h-8 text-${item.color}`} />
                </div>
                <h3 className="text-lg font-heading font-bold text-dark mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Class Types Section */}
      <section className="section-padding bg-white">
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
              { name: "Reguler", icon: Users, price: "Rp 500rb", period: "/bulan", features: ["8-12 siswa", "Jadwal Fixed", "Materi Standar", "Group Discussion"], highlight: false },
              { name: "Privat", icon: GraduationCap, price: "Rp 1.5jt", period: "/bulan", features: ["1-3 siswa", "Jadwal Flexible", "Materi Custom", "Personal Focus"], highlight: true },
              { name: "Online", icon: MessageSquare, price: "Rp 400rb", period: "/bulan", features: ["5-10 siswa", "Jadwal Flexible", "Materi Standar", "Virtual Class"], highlight: false },
            ].map((type, i) => (
              <div key={i} className={`rounded-xl p-6 ${type.highlight ? "bg-gradient-to-br from-primary to-secondary text-white scale-105 shadow-xl" : "bg-white border-2 border-gray-100 shadow-lg"}`}>
                {type.highlight && (
                  <span className="block text-center bg-accent text-white text-xs font-bold px-3 py-1 rounded-full mb-4 w-fit mx-auto">Populer</span>
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
                      <Check className={`w-5 h-5 ${type.highlight ? "text-white" : "text-secondary"}`} />
                      <span className={type.highlight ? "text-white/90" : "text-gray-600"}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/pendaftaran" className={`block text-center py-3 rounded-lg font-semibold transition-colors ${type.highlight ? "bg-accent hover:bg-accent-dark text-white" : "btn-outline w-full"}`}>
                  Pilih Kelas Ini
                </Link>
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
                <p className="text-gray-600 italic mb-6">&ldquo;{testimonial.testimonial}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-dark">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">Alumni {testimonial.program}</p>
                    <p className="text-sm text-secondary font-medium">{testimonial.achievement}</p>
                  </div>
                </div>
              </div>
            ))}
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
            <Link href="/kontak" className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg">
              Hubungi Kami
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
