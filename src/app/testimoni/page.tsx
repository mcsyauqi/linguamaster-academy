import Link from "next/link";
import { Star } from "lucide-react";
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
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Dengarkan cerita sukses dari alumni LinguaMaster
          </p>
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

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-primary to-secondary">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-4">
            Jadilah Cerita Sukses Selanjutnya
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Bergabung dengan ribuan alumni yang telah berhasil menguasai bahasa asing
          </p>
          <Link href="/pendaftaran" className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-4 rounded-lg transition-colors">
            Mulai Perjalanan Anda
          </Link>
        </div>
      </section>
    </>
  );
}
