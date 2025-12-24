"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Star, Quote, Filter } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { testimonials } from "@/data/testimonials";

const programs = ["Semua", "Bahasa Inggris", "Bahasa Jepang", "Bahasa Korea", "Bahasa Mandarin", "Bahasa Jerman", "Bahasa Prancis"];

export default function TestimoniPage() {
  const [selectedProgram, setSelectedProgram] = useState("Semua");

  const filteredTestimonials = testimonials.filter(
    (testimonial) =>
      selectedProgram === "Semua" || testimonial.program === selectedProgram
  );

  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#4F46E5] to-[#10B981] py-20">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white max-w-3xl mx-auto"
          >
            <Badge variant="accent" className="mb-6">
              10.000+ Alumni Sukses
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">
              Testimoni Alumni
            </h1>
            <p className="text-xl text-white/80">
              Dengarkan cerita sukses dari alumni LinguaMaster yang telah berhasil menguasai bahasa asing
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-b">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <p className="text-4xl font-bold text-[#4F46E5]">10.000+</p>
              <p className="text-gray-500">Alumni</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <p className="text-4xl font-bold text-[#10B981]">98%</p>
              <p className="text-gray-500">Tingkat Kepuasan</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <p className="text-4xl font-bold text-[#F59E0B]">95%</p>
              <p className="text-gray-500">Lulus Sertifikasi</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <p className="text-4xl font-bold text-[#EF4444]">4.9/5</p>
              <p className="text-gray-500">Rating</p>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Filter */}
      <section className="py-8 bg-white border-b sticky top-[72px] z-40">
        <Container>
          <div className="flex items-center gap-4 overflow-x-auto pb-2">
            <div className="flex items-center gap-2 flex-shrink-0">
              <Filter className="w-5 h-5 text-gray-500" />
              <span className="font-medium text-[#1F2937]">Filter:</span>
            </div>
            <div className="flex gap-2">
              {programs.map((program) => (
                <button
                  key={program}
                  onClick={() => setSelectedProgram(program)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                    selectedProgram === program
                      ? "bg-[#4F46E5] text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {program}
                </button>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Testimonials Grid */}
      <section className="py-12 bg-[#F9FAFB]">
        <Container>
          <div className="mb-6">
            <p className="text-gray-600">
              Menampilkan <span className="font-bold text-[#1F2937]">{filteredTestimonials.length}</span> testimoni
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="relative bg-white rounded-2xl p-8 shadow-lg"
              >
                <Quote className="absolute top-6 right-6 w-10 h-10 text-[#4F46E5]/10" />

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-[#F59E0B] text-[#F59E0B]"
                    />
                  ))}
                </div>

                {/* Achievement Badge */}
                <div className="mb-4">
                  <Badge variant="success">{testimonial.achievement}</Badge>
                </div>

                {/* Testimonial */}
                <p className="text-gray-600 mb-6 italic leading-relaxed">
                  &ldquo;{testimonial.testimonial}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#4F46E5] to-[#10B981] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1F2937]">{testimonial.name}</h4>
                    <p className="text-sm text-[#4F46E5]">Alumni {testimonial.program}</p>
                    <p className="text-xs text-gray-400">{testimonial.date}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Video Testimonials Placeholder */}
      <section className="py-20 bg-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-[#1F2937] font-heading mb-4">
              Video Testimoni
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Tonton cerita lengkap dari alumni kami
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="aspect-video bg-gradient-to-br from-[#4F46E5] to-[#10B981] rounded-2xl flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity"
              >
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <div className="w-0 h-0 border-t-8 border-b-8 border-l-12 border-transparent border-l-[#4F46E5] ml-1" />
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#4F46E5] to-[#10B981]">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-white max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
              Jadilah Cerita Sukses Selanjutnya
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Bergabung dengan ribuan alumni yang telah berhasil menguasai bahasa asing
            </p>
            <Button href="/pendaftaran" variant="accent" size="lg">
              Mulai Perjalanan Anda
            </Button>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}
