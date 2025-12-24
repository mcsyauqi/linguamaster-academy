"use client";

import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Users, Award } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Card, CardContent, CardFooter } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { programs } from "@/data/programs";

export default function ProgramPage() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#4F46E5] to-[#10B981] py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        </div>
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white max-w-3xl mx-auto"
          >
            <Badge variant="accent" className="mb-6">
              6 Pilihan Bahasa
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">
              Program Bahasa Kami
            </h1>
            <p className="text-xl text-white/80">
              Pilih bahasa yang ingin Anda kuasai dan mulai perjalanan Anda bersama pengajar berpengalaman
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex justify-center gap-8 mt-12"
          >
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-1">
                <BookOpen className="w-5 h-5 text-[#F59E0B]" />
                <span className="text-3xl font-bold text-white">6</span>
              </div>
              <span className="text-white/70 text-sm">Bahasa</span>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-1">
                <Users className="w-5 h-5 text-[#F59E0B]" />
                <span className="text-3xl font-bold text-white">50+</span>
              </div>
              <span className="text-white/70 text-sm">Pengajar</span>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-1">
                <Award className="w-5 h-5 text-[#F59E0B]" />
                <span className="text-3xl font-bold text-white">10.000+</span>
              </div>
              <span className="text-white/70 text-sm">Alumni</span>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Programs Grid */}
      <section className="py-20">
        <Container>
          <SectionTitle
            title="Pilih Program Bahasa"
            subtitle="Setiap program dirancang khusus untuk membantu Anda menguasai bahasa dengan efektif"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <Card key={program.id} delay={index * 0.1}>
                <CardContent>
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-5xl">{program.icon}</div>
                    <Badge variant="secondary">{program.level}</Badge>
                  </div>

                  <h3 className="text-xl font-bold text-[#1F2937] font-heading mb-2">
                    {program.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{program.shortDesc}</p>

                  <ul className="space-y-2 mb-4">
                    {program.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 bg-[#10B981] rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {program.examPrep.slice(0, 3).map((exam) => (
                      <span
                        key={exam}
                        className="text-xs bg-[#4F46E5]/10 text-[#4F46E5] px-2 py-1 rounded-full"
                      >
                        {exam}
                      </span>
                    ))}
                    {program.examPrep.length > 3 && (
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                        +{program.examPrep.length - 3} lagi
                      </span>
                    )}
                  </div>
                </CardContent>

                <CardFooter className="flex items-center justify-between">
                  <div>
                    <span className="text-sm text-gray-500">Mulai dari</span>
                    <p className="text-lg font-bold text-[#4F46E5]">{program.price}</p>
                  </div>
                  <Link
                    href={`/program/${program.slug}`}
                    className="flex items-center gap-1 text-[#4F46E5] hover:text-[#4338CA] font-medium transition-colors"
                  >
                    Detail
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
