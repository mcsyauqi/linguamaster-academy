import Link from "next/link";
import { GraduationCap, Users, Award, Target, Heart, Globe, CheckCircle, ArrowRight } from "lucide-react";

export default function TentangPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-secondary py-16 lg:py-24">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <span className="inline-block bg-white/20 px-4 py-2 rounded-full text-sm font-medium mb-6">
                Tentang Kami
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6 leading-tight">
                LinguaMaster Academy
              </h1>
              <p className="text-lg text-white/90 mb-6">
                Lembaga kursus bahasa asing terkemuka di Indonesia yang telah berdiri sejak 2015. Kami berkomitmen membantu ribuan siswa menguasai bahasa asing dengan metode pembelajaran interaktif dan pengajar berpengalaman.
              </p>
              <p className="text-white/80">
                &ldquo;Kuasai Dunia dengan Bahasa&rdquo; - bukan sekadar tagline, tapi misi kami untuk membuka pintu kesempatan global bagi setiap siswa.
              </p>
            </div>
            <div className="hidden lg:flex justify-center">
              <div className="w-80 h-80 bg-white/10 rounded-full flex items-center justify-center">
                <div className="w-60 h-60 bg-white/10 rounded-full flex items-center justify-center">
                  <div className="w-40 h-40 bg-white rounded-full flex items-center justify-center">
                    <GraduationCap className="w-20 h-20 text-primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "2015", label: "Tahun Berdiri" },
              { value: "10.000+", label: "Alumni Sukses" },
              { value: "50+", label: "Pengajar Expert" },
              { value: "6", label: "Bahasa Tersedia" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visi Misi */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-dark mb-4">
              Visi & Misi Kami
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Komitmen kami untuk pendidikan bahasa berkualitas
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="card bg-gradient-to-br from-primary to-primary-dark text-white">
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-heading font-bold mb-4">Visi</h3>
              <p className="text-white/90 text-lg">
                Menjadi lembaga pendidikan bahasa asing terdepan di Indonesia yang menghasilkan lulusan berkompeten dan siap bersaing di tingkat global.
              </p>
            </div>

            <div className="card">
              <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-dark mb-4">Misi</h3>
              <ul className="space-y-3">
                {[
                  "Menyediakan pendidikan bahasa berkualitas dengan harga terjangkau",
                  "Mengembangkan metode pembelajaran inovatif dan interaktif",
                  "Mempersiapkan siswa untuk sertifikasi internasional",
                  "Membangun budaya belajar yang menyenangkan dan efektif",
                  "Menjalin kerjasama dengan institusi pendidikan global",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sejarah */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-dark mb-4">
              Perjalanan Kami
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Dari kelas kecil hingga menjadi lembaga bahasa terkemuka
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {[
              { year: "2015", title: "Awal Mula", desc: "LinguaMaster didirikan dengan 2 pengajar dan 15 siswa pertama di Jakarta Selatan. Fokus awal pada Bahasa Inggris dan Jepang." },
              { year: "2017", title: "Ekspansi Program", desc: "Menambahkan program Bahasa Korea dan Mandarin. Jumlah siswa meningkat hingga 500 orang." },
              { year: "2019", title: "Akreditasi & Sertifikasi", desc: "Mendapat akreditasi resmi dan menjadi authorized test center untuk IELTS, JLPT, dan TOPIK." },
              { year: "2020", title: "Go Digital", desc: "Meluncurkan program pembelajaran online dan berhasil menjangkau siswa dari seluruh Indonesia." },
              { year: "2022", title: "10.000 Alumni", desc: "Mencapai milestone 10.000 alumni dengan tingkat kelulusan sertifikasi 95%." },
              { year: "2024", title: "Hari Ini", desc: "50+ pengajar, 6 bahasa, dan terus berkembang untuk memberikan pendidikan bahasa terbaik." },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                    {item.year}
                  </div>
                  {i < 5 && <div className="w-0.5 h-full bg-primary/20 mt-2"></div>}
                </div>
                <div className="flex-1 pb-8">
                  <h3 className="text-xl font-heading font-bold text-dark mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-dark mb-4">
              Nilai-Nilai Kami
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Prinsip yang menjadi fondasi setiap langkah kami
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: GraduationCap, title: "Excellence", desc: "Berkomitmen pada kualitas tertinggi dalam setiap aspek pembelajaran", color: "primary" },
              { icon: Users, title: "Community", desc: "Membangun komunitas belajar yang saling mendukung dan menginspirasi", color: "secondary" },
              { icon: Globe, title: "Global Mindset", desc: "Mempersiapkan siswa dengan perspektif dan kompetensi global", color: "accent" },
              { icon: Heart, title: "Passion", desc: "Mengajar dengan hati dan antusiasme untuk keberhasilan setiap siswa", color: "primary" },
            ].map((item, i) => (
              <div key={i} className="card text-center hover:shadow-xl transition-shadow">
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

      {/* Accreditations */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-dark mb-4">
              Akreditasi & Kerjasama
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Diakui secara resmi dan bermitra dengan institusi terkemuka
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "IELTS Test Center", desc: "Authorized Partner" },
              { name: "JLPT Official", desc: "Test Center" },
              { name: "TOPIK Korea", desc: "Preparation Center" },
              { name: "HSK Hanban", desc: "Test Center" },
              { name: "Goethe Institut", desc: "Partner" },
              { name: "Alliance Française", desc: "Partner" },
              { name: "Cambridge English", desc: "Preparation Center" },
              { name: "Kemendikbud", desc: "Terakreditasi" },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-background rounded-xl text-center">
                <div className="w-16 h-16 mx-auto mb-3 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-dark text-sm">{item.name}</h3>
                <p className="text-gray-500 text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-dark mb-4">
              Fasilitas Kami
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Lingkungan belajar yang nyaman dan modern
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Ruang Kelas Modern", desc: "10 ruang kelas ber-AC dengan kapasitas 8-15 siswa, dilengkapi proyektor dan audio system", icon: "🏫" },
              { title: "Language Lab", desc: "Laboratorium bahasa dengan 20 workstation untuk latihan listening dan speaking", icon: "🎧" },
              { title: "Library Corner", desc: "Koleksi buku, majalah, manga, dan materi pembelajaran dalam berbagai bahasa", icon: "📚" },
              { title: "Multimedia Room", desc: "Ruang untuk menonton film, drama, dan konten edukatif dalam bahasa target", icon: "🎬" },
              { title: "Discussion Lounge", desc: "Area santai untuk diskusi kelompok dan conversation practice", icon: "💬" },
              { title: "Online Platform", desc: "LMS modern untuk akses materi, tugas, dan kelas online 24/7", icon: "💻" },
            ].map((item, i) => (
              <div key={i} className="card hover:shadow-xl transition-shadow">
                <span className="text-4xl mb-4 block">{item.icon}</span>
                <h3 className="text-lg font-heading font-bold text-dark mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary to-secondary">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-white mb-4">
            Bergabunglah dengan Keluarga LinguaMaster
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Mulai perjalanan bahasa Anda bersama 10.000+ alumni sukses kami
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/pendaftaran" className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-4 rounded-lg transition-colors">
              Daftar Sekarang <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/kontak" className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white font-semibold px-8 py-4 rounded-lg transition-colors">
              Hubungi Kami
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
