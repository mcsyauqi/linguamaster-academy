"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, Users, Filter, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card, CardContent } from "@/components/ui/Card";
import { schedules } from "@/data/schedule";
import { programs } from "@/data/programs";

const classTypes = ["Semua", "Reguler", "Privat", "Online"];

export default function JadwalPage() {
  const [selectedProgram, setSelectedProgram] = useState("Semua");
  const [selectedType, setSelectedType] = useState("Semua");

  const filteredSchedules = schedules.filter((schedule) => {
    const programMatch = selectedProgram === "Semua" || schedule.program === selectedProgram;
    const typeMatch = selectedType === "Semua" || schedule.type === selectedType;
    return programMatch && typeMatch;
  });

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
              <Calendar className="w-4 h-4 mr-2" />
              Jadwal Kelas
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">
              Jadwal Kelas Tersedia
            </h1>
            <p className="text-xl text-white/80">
              Temukan jadwal kelas yang sesuai dengan waktu dan kebutuhan Anda
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b sticky top-[72px] z-40">
        <Container>
          <div className="flex flex-wrap gap-4 items-center justify-between">
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-gray-500" />
              <span className="font-medium text-[#1F2937]">Filter:</span>
            </div>

            <div className="flex flex-wrap gap-4">
              {/* Program Filter */}
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedProgram("Semua")}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedProgram === "Semua"
                      ? "bg-[#4F46E5] text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  Semua Program
                </button>
                {programs.map((program) => (
                  <button
                    key={program.id}
                    onClick={() => setSelectedProgram(program.name)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedProgram === program.name
                        ? "bg-[#4F46E5] text-white"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    {program.icon} {program.name}
                  </button>
                ))}
              </div>

              {/* Type Filter */}
              <div className="flex gap-2">
                {classTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => setSelectedType(type)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedType === type
                        ? "bg-[#10B981] text-white"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Schedule Grid */}
      <section className="py-12 bg-[#F9FAFB]">
        <Container>
          <div className="mb-6">
            <p className="text-gray-600">
              Menampilkan <span className="font-bold text-[#1F2937]">{filteredSchedules.length}</span> kelas
            </p>
          </div>

          {filteredSchedules.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">Tidak ada kelas yang sesuai dengan filter.</p>
              <Button
                onClick={() => {
                  setSelectedProgram("Semua");
                  setSelectedType("Semua");
                }}
                variant="outline"
                className="mt-4"
              >
                Reset Filter
              </Button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredSchedules.map((schedule, index) => {
                const slotsLeft = schedule.slots - schedule.registered;
                const isFull = slotsLeft === 0;
                const isAlmostFull = slotsLeft <= 3 && slotsLeft > 0;

                return (
                  <Card key={schedule.id} delay={index * 0.05}>
                    <CardContent>
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex gap-2">
                          <Badge
                            variant={
                              schedule.type === "Reguler"
                                ? "primary"
                                : schedule.type === "Privat"
                                ? "secondary"
                                : "accent"
                            }
                          >
                            {schedule.type}
                          </Badge>
                          {isFull && (
                            <Badge variant="warning">Penuh</Badge>
                          )}
                          {isAlmostFull && (
                            <Badge variant="warning">Sisa {slotsLeft}</Badge>
                          )}
                        </div>
                        <span className="text-xs text-gray-400">{schedule.id}</span>
                      </div>

                      <h3 className="text-lg font-bold text-[#1F2937] font-heading mb-1">
                        {schedule.program}
                      </h3>
                      <p className="text-[#4F46E5] font-medium mb-4">{schedule.level}</p>

                      <div className="space-y-3 mb-6">
                        <div className="flex items-center gap-3 text-gray-600">
                          <Calendar className="w-5 h-5 text-[#4F46E5]" />
                          <span>{schedule.days.join(", ")}</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-600">
                          <Clock className="w-5 h-5 text-[#4F46E5]" />
                          <span>{schedule.time}</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-600">
                          <Users className="w-5 h-5 text-[#4F46E5]" />
                          <span>
                            {schedule.registered}/{schedule.slots} siswa terdaftar
                          </span>
                        </div>
                      </div>

                      <div className="mb-4">
                        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full ${
                              isFull
                                ? "bg-red-500"
                                : isAlmostFull
                                ? "bg-[#F59E0B]"
                                : "bg-[#10B981]"
                            }`}
                            style={{
                              width: `${(schedule.registered / schedule.slots) * 100}%`
                            }}
                          />
                        </div>
                      </div>

                      <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                        <div>
                          <p className="text-sm text-gray-500">Pengajar</p>
                          <p className="font-medium text-[#1F2937]">{schedule.teacher}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-500">Mulai</p>
                          <p className="font-medium text-[#1F2937]">{schedule.startDate}</p>
                        </div>
                      </div>

                      <div className="mt-6 flex items-center justify-between">
                        <p className="text-xl font-bold text-[#4F46E5]">{schedule.price}</p>
                        <Button
                          href="/pendaftaran"
                          size="sm"
                          disabled={isFull}
                          className={isFull ? "opacity-50 cursor-not-allowed" : ""}
                        >
                          {isFull ? "Penuh" : "Daftar"}
                          {!isFull && <ArrowRight className="ml-2 w-4 h-4" />}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-[#1F2937] font-heading mb-4">
              Tidak Menemukan Jadwal yang Sesuai?
            </h2>
            <p className="text-gray-600 mb-8">
              Hubungi kami untuk mengatur jadwal kelas privat yang sesuai dengan waktu Anda
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/kontak" size="lg">
                Hubungi Kami
              </Button>
              <Button href="/pendaftaran" variant="outline" size="lg">
                Daftar Kelas Privat
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}
