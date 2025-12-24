"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Card, CardContent, CardFooter } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { programs } from "@/data/programs";

export function Programs() {
  return (
    <section className="py-20 bg-white">
      <Container>
        <SectionTitle
          title="Pilih Bahasa yang Ingin Anda Kuasai"
          subtitle="6 pilihan bahasa dengan kurikulum terstruktur dan pengajar berpengalaman"
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
                  {program.features.slice(0, 3).map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 bg-[#10B981] rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button href="/program" variant="outline" size="lg">
            Lihat Semua Program
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
