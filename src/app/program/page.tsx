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
    </>
  );
}
