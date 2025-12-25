import Link from "next/link";
import { Star, Award, Briefcase, GraduationCap, Globe, Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export default function TestimoniPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-secondary py-16">
        <div className="container-custom text-center text-white">
          <span className="inline-block bg-white/20 px-4 py-2 rounded-full text-sm font-medium mb-4">
            10.000+ Alumni Sukses
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
            Testimoni Alumni
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
            Dengarkan cerita sukses dari alumni LinguaMaster
          </p>
          <div className="flex flex-wrap justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-accent text-accent" />
            ))}
            <span className="ml-2 text-lg font-medium">4.9/5 dari 2.500+ review</span>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-b">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl md:text-4xl font-bold text-primary">10.000+</p>
              <p className="text-gray-500">Alumni</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-secondary">98%</p>
              <p className="text-gray-500">Tingkat Kepuasan</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-accent">95%</p>
              <p className="text-gray-500">Lulus Sertifikasi</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-primary">4.9/5</p>
              <p className="text-gray-500">Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="card hover:shadow-xl transition-shadow">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <span className="inline-block bg-secondary/10 text-secondary text-xs font-medium px-3 py-1 rounded-full mb-4">
                  {testimonial.achievement}
                </span>
                <p className="text-gray-600 italic mb-6">&ldquo;{testimonial.testimonial}&rdquo;</p>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-dark">{testimonial.name}</h4>
                    <p className="text-sm text-primary">Alumni {testimonial.program}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-dark mb-4">
              Cerita Sukses Alumni
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Alumni kami telah berhasil meraih berbagai pencapaian berkat kemampuan bahasa mereka
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="card border-l-4 border-primary">
              <Quote className="w-10 h-10 text-primary/30 mb-4" />
              <p className="text-gray-600 mb-6">
                &quot;Setelah lulus program Bahasa Jepang di LinguaMaster, saya berhasil mendapatkan beasiswa penuh S2 di Kyoto University. Kursus di sini benar-benar mempersiapkan saya dengan baik untuk hidup dan belajar di Jepang.&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                  <GraduationCap className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-dark">Ahmad Fauzi</h4>
                  <p className="text-sm text-gray-600">Beasiswa S2 Kyoto University</p>
                  <p className="text-xs text-primary">Alumni Bahasa Jepang 2022</p>
                </div>
              </div>
            </div>

            <div className="card border-l-4 border-secondary">
              <Quote className="w-10 h-10 text-secondary/30 mb-4" />
              <p className="text-gray-600 mb-6">
                &quot;Kemampuan bahasa Mandarin dari LinguaMaster membuka banyak peluang karir. Sekarang saya bekerja sebagai Business Development Manager di perusahaan multinasional dengan gaji 3x lipat dari sebelumnya.&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center">
                  <Briefcase className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-dark">Putri Handayani</h4>
                  <p className="text-sm text-gray-600">Business Development Manager</p>
                  <p className="text-xs text-secondary">Alumni Bahasa Mandarin 2021</p>
                </div>
              </div>
            </div>

            <div className="card border-l-4 border-accent">
              <Quote className="w-10 h-10 text-accent/30 mb-4" />
              <p className="text-gray-600 mb-6">
                &quot;Berkat program IELTS Preparation, saya berhasil mendapat skor 8.0 dan diterima di program PhD di University of Melbourne dengan beasiswa Australia Awards.&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center">
                  <Award className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-dark">Dr. Budi Santoso</h4>
                  <p className="text-sm text-gray-600">PhD Candidate, University of Melbourne</p>
                  <p className="text-xs text-accent">Alumni IELTS Prep 2020</p>
                </div>
              </div>
            </div>

            <div className="card border-l-4 border-primary">
              <Quote className="w-10 h-10 text-primary/30 mb-4" />
              <p className="text-gray-600 mb-6">
                &quot;Sekarang saya bekerja sebagai K-Pop content creator dengan followers 500K+. Kemampuan bahasa Korea dari LinguaMaster sangat membantu saya memahami dan menerjemahkan konten dengan akurat.&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                  <Globe className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-dark">Anisa Rahma</h4>
                  <p className="text-sm text-gray-600">Content Creator, 500K+ Followers</p>
                  <p className="text-xs text-primary">Alumni Bahasa Korea 2021</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievement Categories */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-dark mb-4">
              Pencapaian Alumni Kami
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Alumni LinguaMaster telah meraih berbagai pencapaian di berbagai bidang
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="card text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-primary mb-2">500+</h3>
              <p className="font-heading font-bold text-dark mb-2">Beasiswa Luar Negeri</p>
              <p className="text-gray-600 text-sm">Alumni yang berhasil mendapatkan beasiswa ke berbagai negara</p>
            </div>

            <div className="card text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-3xl font-bold text-secondary mb-2">2.000+</h3>
              <p className="font-heading font-bold text-dark mb-2">Karir Internasional</p>
              <p className="text-gray-600 text-sm">Alumni yang bekerja di perusahaan multinasional</p>
            </div>

            <div className="card text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-3xl font-bold text-accent mb-2">95%</h3>
              <p className="font-heading font-bold text-dark mb-2">Lulus Sertifikasi</p>
              <p className="text-gray-600 text-sm">Tingkat kelulusan ujian sertifikasi internasional</p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Testimonials Placeholder */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-dark mb-4">
              Video Testimoni
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Tonton video testimoni langsung dari alumni kami
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Rina Wijaya", program: "Bahasa Jepang", duration: "2:34" },
              { name: "Dimas Pratama", program: "Bahasa Inggris", duration: "3:12" },
              { name: "Sarah Putri", program: "Bahasa Korea", duration: "2:45" },
            ].map((video, i) => (
              <div key={i} className="card p-0 overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center relative">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                    <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-primary border-b-8 border-b-transparent ml-1"></div>
                  </div>
                  <span className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">{video.duration}</span>
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-dark">{video.name}</h4>
                  <p className="text-sm text-gray-600">Alumni {video.program}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-primary to-secondary">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-4">
            Jadilah Cerita Sukses Selanjutnya
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Bergabung dengan ribuan alumni yang telah berhasil menguasai bahasa asing
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/pendaftaran" className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-4 rounded-lg transition-colors">
              Mulai Perjalanan Anda
            </Link>
            <Link href="/program" className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-primary font-semibold px-8 py-4 rounded-lg transition-colors">
              Lihat Program Kami
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
