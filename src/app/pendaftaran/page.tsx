"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { CheckCircle, User, Mail, Phone, BookOpen, Users, Calendar, MessageSquare } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Input, Textarea, Select } from "@/components/ui/Input";
import { programs } from "@/data/programs";

const formSchema = z.object({
  nama: z.string().min(3, "Nama minimal 3 karakter"),
  email: z.string().email("Email tidak valid"),
  telepon: z.string().min(10, "Nomor telepon minimal 10 digit"),
  program: z.string().min(1, "Pilih program bahasa"),
  tipeKelas: z.string().min(1, "Pilih tipe kelas"),
  level: z.string().min(1, "Pilih level"),
  jadwal: z.string().min(1, "Pilih preferensi jadwal"),
  pesan: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function PendaftaranPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log(data);
    setIsSubmitting(false);
    setIsSubmitted(true);
    reset();
  };

  if (isSubmitted) {
    return (
      <div className="pt-24 pb-20">
        <Container>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto text-center py-20"
          >
            <div className="w-24 h-24 bg-[#10B981]/10 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="w-12 h-12 text-[#10B981]" />
            </div>
            <h1 className="text-3xl font-bold text-[#1F2937] font-heading mb-4">
              Pendaftaran Berhasil!
            </h1>
            <p className="text-gray-600 mb-8">
              Terima kasih telah mendaftar di LinguaMaster Academy. Tim kami akan menghubungi Anda dalam 1x24 jam untuk konfirmasi jadwal dan informasi pembayaran.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/" variant="outline">
                Kembali ke Beranda
              </Button>
              <Button onClick={() => setIsSubmitted(false)}>
                Daftar Lagi
              </Button>
            </div>
          </motion.div>
        </Container>
      </div>
    );
  }

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
              Daftar Sekarang
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">
              Mulai Perjalanan Bahasa Anda
            </h1>
            <p className="text-xl text-white/80">
              Isi formulir di bawah ini dan tim kami akan menghubungi Anda untuk proses selanjutnya
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Benefits */}
      <section className="py-12 bg-white border-b">
        <Container>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: "🎁", text: "Tes Level Gratis" },
              { icon: "📚", text: "Materi Pembelajaran" },
              { icon: "🎓", text: "Sertifikat Kelulusan" },
              { icon: "💬", text: "Konsultasi Gratis" },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4"
              >
                <span className="text-3xl">{benefit.icon}</span>
                <span className="font-medium text-[#1F2937]">{benefit.text}</span>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-[#F9FAFB]">
        <Container>
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
            >
              <h2 className="text-2xl font-bold text-[#1F2937] font-heading mb-8 text-center">
                Formulir Pendaftaran
              </h2>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Personal Info */}
                <div className="space-y-4">
                  <h3 className="font-bold text-[#1F2937] flex items-center gap-2">
                    <User className="w-5 h-5 text-[#4F46E5]" />
                    Data Diri
                  </h3>

                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      label="Nama Lengkap *"
                      placeholder="Masukkan nama lengkap"
                      {...register("nama")}
                      error={errors.nama?.message}
                    />
                    <Input
                      label="Email *"
                      type="email"
                      placeholder="contoh@email.com"
                      {...register("email")}
                      error={errors.email?.message}
                    />
                  </div>

                  <Input
                    label="Nomor Telepon/WhatsApp *"
                    type="tel"
                    placeholder="08xxxxxxxxxx"
                    {...register("telepon")}
                    error={errors.telepon?.message}
                  />
                </div>

                {/* Program Selection */}
                <div className="space-y-4 pt-6 border-t">
                  <h3 className="font-bold text-[#1F2937] flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-[#4F46E5]" />
                    Pilihan Program
                  </h3>

                  <Select
                    label="Program Bahasa *"
                    {...register("program")}
                    error={errors.program?.message}
                  >
                    <option value="">Pilih program bahasa</option>
                    {programs.map((program) => (
                      <option key={program.id} value={program.name}>
                        {program.icon} {program.name} - {program.price}
                      </option>
                    ))}
                  </Select>

                  <div className="grid md:grid-cols-2 gap-4">
                    <Select
                      label="Tipe Kelas *"
                      {...register("tipeKelas")}
                      error={errors.tipeKelas?.message}
                    >
                      <option value="">Pilih tipe kelas</option>
                      <option value="reguler">Reguler (8-12 siswa) - Rp 500rb/bulan</option>
                      <option value="privat">Privat (1-3 siswa) - Rp 1.5jt/bulan</option>
                      <option value="online">Online (5-10 siswa) - Rp 400rb/bulan</option>
                    </Select>

                    <Select
                      label="Level *"
                      {...register("level")}
                      error={errors.level?.message}
                    >
                      <option value="">Pilih level</option>
                      <option value="beginner">Beginner (Pemula)</option>
                      <option value="intermediate">Intermediate (Menengah)</option>
                      <option value="advanced">Advanced (Mahir)</option>
                      <option value="tidak-tahu">Belum tahu (akan tes level)</option>
                    </Select>
                  </div>
                </div>

                {/* Schedule */}
                <div className="space-y-4 pt-6 border-t">
                  <h3 className="font-bold text-[#1F2937] flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-[#4F46E5]" />
                    Preferensi Jadwal
                  </h3>

                  <Select
                    label="Jadwal yang Diinginkan *"
                    {...register("jadwal")}
                    error={errors.jadwal?.message}
                  >
                    <option value="">Pilih preferensi jadwal</option>
                    <option value="weekday-pagi">Weekday Pagi (08:00 - 12:00)</option>
                    <option value="weekday-siang">Weekday Siang (13:00 - 17:00)</option>
                    <option value="weekday-malam">Weekday Malam (18:00 - 21:00)</option>
                    <option value="weekend-pagi">Weekend Pagi (09:00 - 12:00)</option>
                    <option value="weekend-siang">Weekend Siang (13:00 - 17:00)</option>
                    <option value="fleksibel">Fleksibel</option>
                  </Select>
                </div>

                {/* Message */}
                <div className="space-y-4 pt-6 border-t">
                  <h3 className="font-bold text-[#1F2937] flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 text-[#4F46E5]" />
                    Pesan Tambahan
                  </h3>

                  <Textarea
                    label="Pesan (Opsional)"
                    placeholder="Tulis pesan atau pertanyaan tambahan..."
                    {...register("pesan")}
                  />
                </div>

                {/* Submit */}
                <div className="pt-6">
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                        Mengirim...
                      </>
                    ) : (
                      "Daftar Sekarang"
                    )}
                  </Button>

                  <p className="text-sm text-gray-500 text-center mt-4">
                    Dengan mendaftar, Anda menyetujui{" "}
                    <a href="#" className="text-[#4F46E5] hover:underline">
                      Syarat & Ketentuan
                    </a>{" "}
                    serta{" "}
                    <a href="#" className="text-[#4F46E5] hover:underline">
                      Kebijakan Privasi
                    </a>{" "}
                    kami.
                  </p>
                </div>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 text-center"
            >
              <p className="text-gray-600 mb-4">
                Butuh bantuan atau ingin konsultasi terlebih dahulu?
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="https://wa.me/622112345678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white rounded-lg font-medium hover:bg-[#128C7E] transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Chat WhatsApp
                </a>
                <a
                  href="tel:+622112345678"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#4F46E5] text-white rounded-lg font-medium hover:bg-[#4338CA] transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  +62 21 1234 5678
                </a>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>
    </div>
  );
}
