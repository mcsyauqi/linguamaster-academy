import Link from "next/link";
import { Star, Award, Users, BookOpen, Globe, CheckCircle } from "lucide-react";
import { teachers } from "@/data/teachers";

export default function PengajarPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-secondary py-16">
        <div className="container-custom text-center text-white">
          <span className="inline-block bg-white/20 px-4 py-2 rounded-full text-sm font-medium mb-4">
            50+ Pengajar Berpengalaman
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
            Tim Pengajar Kami
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
            Belajar dari pengajar native speaker dan profesional bersertifikat
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold mb-1">50+</div>
              <p className="text-white/70 text-sm">Pengajar</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-1">15+</div>
              <p className="text-white/70 text-sm">Native Speaker</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-1">10+</div>
              <p className="text-white/70 text-sm">Tahun Pengalaman</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-1">4.9</div>
              <p className="text-white/70 text-sm">Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Our Teachers */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">Bersertifikat</h3>
              <p className="text-gray-600 text-sm">Semua pengajar memiliki sertifikasi internasional</p>
            </div>
            <div className="text-center p-6">
              <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Globe className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="font-bold text-dark mb-2">Native Speaker</h3>
              <p className="text-gray-600 text-sm">Pengajar asli dari negara asal bahasa</p>
            </div>
            <div className="text-center p-6">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-bold text-dark mb-2">Berpengalaman</h3>
              <p className="text-gray-600 text-sm">Minimal 5 tahun pengalaman mengajar</p>
            </div>
            <div className="text-center p-6">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-2">Ramah & Sabar</h3>
              <p className="text-gray-600 text-sm">Menciptakan suasana belajar yang nyaman</p>
            </div>
          </div>
        </div>
      </section>

      {/* Teachers Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teachers.map((teacher) => (
              <div key={teacher.id} className="card hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-4xl text-white">👨‍🏫</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-bold text-dark">{teacher.name}</h3>
                    <p className="text-primary font-medium text-sm">{teacher.language}</p>
                    <p className="text-gray-500 text-sm">{teacher.origin}</p>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-accent mb-4">
                  <Star className="w-4 h-4 fill-accent" />
                  <span className="font-medium">{teacher.experience}</span>
                </div>

                <div className="mb-4">
                  <h4 className="font-bold text-dark text-sm mb-2">Sertifikasi</h4>
                  <div className="flex flex-wrap gap-2">
                    {teacher.certifications.map((cert) => (
                      <span key={cert} className="inline-flex items-center gap-1 text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                        <Award className="w-3 h-3" /> {cert}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-dark text-sm mb-2">Spesialisasi</h4>
                  <div className="flex flex-wrap gap-2">
                    {teacher.specializations.map((spec) => (
                      <span key={spec} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Methodology */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-dark mb-4">
              Metode Pengajaran Kami
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Pengajar kami menggunakan metode terbaik untuk memastikan proses belajar yang efektif
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="font-heading font-bold text-dark mb-2">Communicative Approach</h3>
              <p className="text-gray-600 text-sm">Fokus pada kemampuan berkomunikasi aktif dengan praktik langsung dalam situasi nyata.</p>
            </div>
            <div className="card">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🎮</span>
              </div>
              <h3 className="font-heading font-bold text-dark mb-2">Gamification</h3>
              <p className="text-gray-600 text-sm">Pembelajaran interaktif dengan game, quiz, dan reward untuk meningkatkan motivasi belajar.</p>
            </div>
            <div className="card">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🎬</span>
              </div>
              <h3 className="font-heading font-bold text-dark mb-2">Immersive Learning</h3>
              <p className="text-gray-600 text-sm">Menggunakan media autentik seperti film, musik, dan berita untuk paparan bahasa natural.</p>
            </div>
            <div className="card">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="font-heading font-bold text-dark mb-2">Pair & Group Work</h3>
              <p className="text-gray-600 text-sm">Latihan berpasangan dan kelompok untuk meningkatkan kepercayaan diri berbicara.</p>
            </div>
            <div className="card">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="font-heading font-bold text-dark mb-2">Progress Tracking</h3>
              <p className="text-gray-600 text-sm">Evaluasi berkala dengan feedback personal untuk memantau perkembangan setiap siswa.</p>
            </div>
            <div className="card">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="font-heading font-bold text-dark mb-2">Cultural Integration</h3>
              <p className="text-gray-600 text-sm">Memahami budaya negara asal bahasa untuk konteks komunikasi yang lebih baik.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Teacher Requirements */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-dark mb-6">
                Standar Pengajar Kami
              </h2>
              <p className="text-gray-600 mb-6">
                Kami hanya merekrut pengajar terbaik yang memenuhi standar ketat untuk memastikan kualitas pembelajaran.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-dark">Pendidikan Formal</h4>
                    <p className="text-gray-600 text-sm">Minimal S1 dari universitas terkemuka dengan jurusan relevan</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-dark">Sertifikasi Mengajar</h4>
                    <p className="text-gray-600 text-sm">TESOL, TEFL, CELTA, atau sertifikasi setara untuk setiap bahasa</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-dark">Pengalaman Mengajar</h4>
                    <p className="text-gray-600 text-sm">Minimal 5 tahun pengalaman mengajar bahasa asing</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-dark">Training Berkelanjutan</h4>
                    <p className="text-gray-600 text-sm">Wajib mengikuti program pengembangan profesional berkala</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="card bg-gradient-to-br from-primary to-secondary text-white p-8">
              <h3 className="text-xl font-heading font-bold mb-4">Bergabung dengan Tim Kami</h3>
              <p className="text-white/80 mb-6">
                Apakah Anda pengajar bahasa berpengalaman yang ingin bergabung dengan tim profesional?
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2 text-white/90">
                  <CheckCircle className="w-5 h-5" /> Gaji kompetitif
                </li>
                <li className="flex items-center gap-2 text-white/90">
                  <CheckCircle className="w-5 h-5" /> Lingkungan kerja profesional
                </li>
                <li className="flex items-center gap-2 text-white/90">
                  <CheckCircle className="w-5 h-5" /> Pengembangan karir
                </li>
                <li className="flex items-center gap-2 text-white/90">
                  <CheckCircle className="w-5 h-5" /> Benefit lengkap
                </li>
              </ul>
              <Link href="/kontak" className="inline-flex items-center gap-2 bg-white text-primary font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
                Lamar Sekarang
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials from Students */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-dark mb-4">
              Apa Kata Siswa Kami
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Testimoni dari siswa tentang pengalaman belajar dengan pengajar kami
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="card">
              <div className="flex items-center gap-1 text-accent mb-4">
                <Star className="w-4 h-4 fill-accent" />
                <Star className="w-4 h-4 fill-accent" />
                <Star className="w-4 h-4 fill-accent" />
                <Star className="w-4 h-4 fill-accent" />
                <Star className="w-4 h-4 fill-accent" />
              </div>
              <p className="text-gray-600 mb-4">&quot;Sensei Yuki sangat sabar dalam mengajar. Berkat beliau, saya berhasil lulus JLPT N3 dalam waktu 1 tahun!&quot;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-lg">👨</span>
                </div>
                <div>
                  <p className="font-bold text-dark">Andi Prasetyo</p>
                  <p className="text-sm text-gray-500">Siswa Bahasa Jepang</p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="flex items-center gap-1 text-accent mb-4">
                <Star className="w-4 h-4 fill-accent" />
                <Star className="w-4 h-4 fill-accent" />
                <Star className="w-4 h-4 fill-accent" />
                <Star className="w-4 h-4 fill-accent" />
                <Star className="w-4 h-4 fill-accent" />
              </div>
              <p className="text-gray-600 mb-4">&quot;Mr. James membuat belajar bahasa Inggris menjadi sangat menyenangkan. Pronunciation saya jadi jauh lebih baik.&quot;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center">
                  <span className="text-lg">👩</span>
                </div>
                <div>
                  <p className="font-bold text-dark">Siti Rahayu</p>
                  <p className="text-sm text-gray-500">Siswa Bahasa Inggris</p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="flex items-center gap-1 text-accent mb-4">
                <Star className="w-4 h-4 fill-accent" />
                <Star className="w-4 h-4 fill-accent" />
                <Star className="w-4 h-4 fill-accent" />
                <Star className="w-4 h-4 fill-accent" />
                <Star className="w-4 h-4 fill-accent" />
              </div>
              <p className="text-gray-600 mb-4">&quot;Seonsaengnim Park sangat interaktif dalam mengajar. Sekarang saya bisa menonton drama Korea tanpa subtitle!&quot;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                  <span className="text-lg">👩</span>
                </div>
                <div>
                  <p className="font-bold text-dark">Maya Dewi</p>
                  <p className="text-sm text-gray-500">Siswa Bahasa Korea</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link href="/testimoni" className="btn-outline">Lihat Semua Testimoni</Link>
          </div>
        </div>
      </section>
    </>
  );
}
