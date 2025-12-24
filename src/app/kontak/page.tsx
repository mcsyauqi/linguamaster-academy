"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  MessageSquare,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Input, Textarea, Select } from "@/components/ui/Input";

const formSchema = z.object({
  nama: z.string().min(3, "Nama minimal 3 karakter"),
  email: z.string().email("Email tidak valid"),
  telepon: z.string().min(10, "Nomor telepon minimal 10 digit"),
  subjek: z.string().min(1, "Pilih subjek"),
  pesan: z.string().min(10, "Pesan minimal 10 karakter"),
});

type FormData = z.infer<typeof formSchema>;

const contactInfo = [
  {
    icon: MapPin,
    title: "Alamat",
    content: "Jl. Pendidikan No. 123, Kebayoran Baru, Jakarta Selatan 12110",
    link: "https://maps.google.com",
  },
  {
    icon: Phone,
    title: "Telepon",
    content: "+62 21 1234 5678",
    link: "tel:+622112345678",
  },
  {
    icon: Mail,
    title: "Email",
    content: "info@linguamaster.id",
    link: "mailto:info@linguamaster.id",
  },
  {
    icon: Clock,
    title: "Jam Operasional",
    content: "Senin - Sabtu: 08:00 - 21:00",
    link: null,
  },
];

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com/linguamaster", label: "Facebook", color: "#1877F2" },
  { icon: Instagram, href: "https://instagram.com/linguamaster", label: "Instagram", color: "#E4405F" },
  { icon: Twitter, href: "https://twitter.com/linguamaster", label: "Twitter", color: "#1DA1F2" },
  { icon: Youtube, href: "https://youtube.com/linguamaster", label: "Youtube", color: "#FF0000" },
];

export default function KontakPage() {
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
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log(data);
    setIsSubmitting(false);
    setIsSubmitted(true);
    reset();
  };

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
              <MessageSquare className="w-4 h-4 mr-2" />
              Hubungi Kami
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">
              Ada Pertanyaan?
            </h1>
            <p className="text-xl text-white/80">
              Tim kami siap membantu menjawab pertanyaan dan memberikan informasi yang Anda butuhkan
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-white">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#F9FAFB] rounded-2xl p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-[#4F46E5]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-7 h-7 text-[#4F46E5]" />
                </div>
                <h3 className="font-bold text-[#1F2937] mb-2">{info.title}</h3>
                {info.link ? (
                  <a
                    href={info.link}
                    target={info.link.startsWith("http") ? "_blank" : undefined}
                    rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-gray-600 hover:text-[#4F46E5] transition-colors"
                  >
                    {info.content}
                  </a>
                ) : (
                  <p className="text-gray-600">{info.content}</p>
                )}
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Form & Map */}
      <section className="py-16 bg-[#F9FAFB]">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-2xl font-bold text-[#1F2937] font-heading mb-6">
                  Kirim Pesan
                </h2>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 bg-[#10B981]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-[#10B981]" />
                    </div>
                    <h3 className="text-xl font-bold text-[#1F2937] mb-2">
                      Pesan Terkirim!
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Terima kasih telah menghubungi kami. Tim kami akan segera merespons.
                    </p>
                    <Button onClick={() => setIsSubmitted(false)} variant="outline">
                      Kirim Pesan Lagi
                    </Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
                      label="Nomor Telepon *"
                      type="tel"
                      placeholder="08xxxxxxxxxx"
                      {...register("telepon")}
                      error={errors.telepon?.message}
                    />

                    <Select
                      label="Subjek *"
                      {...register("subjek")}
                      error={errors.subjek?.message}
                    >
                      <option value="">Pilih subjek</option>
                      <option value="informasi-program">Informasi Program</option>
                      <option value="jadwal-kelas">Jadwal Kelas</option>
                      <option value="biaya-pembayaran">Biaya & Pembayaran</option>
                      <option value="kerjasama">Kerjasama</option>
                      <option value="karir">Karir / Lowongan</option>
                      <option value="lainnya">Lainnya</option>
                    </Select>

                    <Textarea
                      label="Pesan *"
                      placeholder="Tulis pesan Anda..."
                      {...register("pesan")}
                      error={errors.pesan?.message}
                    />

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
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Kirim Pesan
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Map & Social */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Map Placeholder */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-[#4F46E5]/10 to-[#10B981]/10 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-[#4F46E5] mx-auto mb-4" />
                    <p className="text-gray-600">Peta Lokasi</p>
                    <a
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#4F46E5] hover:underline font-medium"
                    >
                      Buka di Google Maps
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="font-bold text-[#1F2937] mb-6">Ikuti Kami</h3>
                <div className="grid grid-cols-4 gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="aspect-square rounded-xl flex items-center justify-center transition-transform hover:scale-110"
                      style={{ backgroundColor: `${social.color}15` }}
                    >
                      <social.icon
                        className="w-8 h-8"
                        style={{ color: social.color }}
                      />
                    </a>
                  ))}
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-2xl p-8 text-white">
                <h3 className="font-bold text-xl mb-4">Chat Langsung via WhatsApp</h3>
                <p className="text-white/80 mb-6">
                  Respon cepat untuk pertanyaan dan konsultasi
                </p>
                <a
                  href="https://wa.me/622112345678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#25D366] rounded-lg font-bold hover:bg-gray-100 transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Chat Sekarang
                </a>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* FAQ Preview */}
      <section className="py-20 bg-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-[#1F2937] font-heading mb-4">
              Pertanyaan Umum
            </h2>
            <p className="text-gray-600 mb-12">
              Jawaban untuk pertanyaan yang sering ditanyakan
            </p>

            <div className="space-y-4 text-left">
              {[
                {
                  q: "Bagaimana cara mendaftar?",
                  a: "Anda dapat mendaftar melalui halaman Pendaftaran di website kami atau langsung datang ke kantor kami."
                },
                {
                  q: "Apakah ada tes level gratis?",
                  a: "Ya, kami menyediakan tes level gratis untuk menentukan kelas yang sesuai dengan kemampuan Anda."
                },
                {
                  q: "Metode pembayaran apa yang tersedia?",
                  a: "Kami menerima pembayaran melalui transfer bank, kartu kredit, dan berbagai e-wallet."
                },
                {
                  q: "Apakah bisa refund jika tidak cocok?",
                  a: "Kami menyediakan garansi 14 hari. Jika tidak puas, uang kembali 100%."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-[#F9FAFB] rounded-xl p-6"
                >
                  <h3 className="font-bold text-[#1F2937] mb-2">{faq.q}</h3>
                  <p className="text-gray-600">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}
