"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  const featuredTestimonials = testimonials.slice(0, 3);

  return (
    <section className="py-20 bg-white">
      <Container>
        <SectionTitle
          title="Apa Kata Alumni Kami"
          subtitle="Ribuan alumni telah sukses berbahasa asing bersama LinguaMaster"
        />

        <div className="grid md:grid-cols-3 gap-8">
          {featuredTestimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative bg-gradient-to-br from-[#F9FAFB] to-white rounded-2xl p-8 shadow-lg"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-[#4F46E5]/10" />

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-[#F59E0B] text-[#F59E0B]"
                  />
                ))}
              </div>

              <p className="text-gray-600 mb-6 italic">
                &ldquo;{testimonial.testimonial}&rdquo;
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#4F46E5] to-[#10B981] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-bold text-[#1F2937]">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">
                    Alumni {testimonial.program}
                  </p>
                  <p className="text-sm text-[#10B981] font-medium">
                    {testimonial.achievement}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
