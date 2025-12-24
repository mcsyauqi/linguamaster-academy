import Link from "next/link";
import { Star, Award } from "lucide-react";
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
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Belajar dari pengajar native speaker dan profesional bersertifikat
          </p>
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

      {/* CTA */}
      <section className="section-padding bg-background">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-dark mb-4">
            Bergabung dengan Tim Pengajar Kami
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Apakah Anda pengajar bahasa berpengalaman? Bergabunglah dengan LinguaMaster Academy
          </p>
          <Link href="/kontak" className="btn-primary">Lamar Sekarang</Link>
        </div>
      </section>
    </>
  );
}
