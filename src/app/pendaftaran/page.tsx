"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle, Phone } from "lucide-react";
import { programs } from "@/data/programs";

export default function PendaftaranPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-secondary" />
            </div>
            <h1 className="text-2xl md:text-3xl font-heading font-bold text-dark mb-4">
              Pendaftaran Berhasil!
            </h1>
            <p className="text-gray-600 mb-8">
              Terima kasih telah mendaftar di LinguaMaster Academy. Tim kami akan menghubungi Anda dalam 1x24 jam.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/" className="btn-outline">Kembali ke Beranda</Link>
              <button onClick={() => setIsSubmitted(false)} className="btn-primary">Daftar Lagi</button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-secondary py-16">
        <div className="container-custom text-center text-white">
          <span className="inline-block bg-white/20 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Daftar Sekarang
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
            Mulai Perjalanan Bahasa Anda
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Isi formulir dan tim kami akan menghubungi Anda
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-8 bg-white border-b">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: "🎁", text: "Tes Level Gratis" },
              { icon: "📚", text: "Materi Pembelajaran" },
              { icon: "🎓", text: "Sertifikat Kelulusan" },
              { icon: "💬", text: "Konsultasi Gratis" },
            ].map((benefit, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="text-2xl">{benefit.icon}</span>
                <span className="font-medium text-dark text-sm">{benefit.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <div className="card">
              <h2 className="text-xl font-heading font-bold text-dark mb-6 text-center">
                Formulir Pendaftaran
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-dark mb-2">Nama Lengkap *</label>
                    <input type="text" required placeholder="Masukkan nama lengkap" className="input-field" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-dark mb-2">Email *</label>
                    <input type="email" required placeholder="contoh@email.com" className="input-field" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-dark mb-2">Nomor Telepon/WhatsApp *</label>
                  <input type="tel" required placeholder="08xxxxxxxxxx" className="input-field" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-dark mb-2">Program Bahasa *</label>
                  <select required className="input-field">
                    <option value="">Pilih program bahasa</option>
                    {programs.map((program) => (
                      <option key={program.id} value={program.name}>
                        {program.icon} {program.name} - {program.price}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-dark mb-2">Tipe Kelas *</label>
                    <select required className="input-field">
                      <option value="">Pilih tipe kelas</option>
                      <option value="reguler">Reguler (8-12 siswa)</option>
                      <option value="privat">Privat (1-3 siswa)</option>
                      <option value="online">Online (5-10 siswa)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-dark mb-2">Level *</label>
                    <select required className="input-field">
                      <option value="">Pilih level</option>
                      <option value="beginner">Beginner (Pemula)</option>
                      <option value="intermediate">Intermediate (Menengah)</option>
                      <option value="advanced">Advanced (Mahir)</option>
                      <option value="tidak-tahu">Belum tahu (akan tes level)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-dark mb-2">Preferensi Jadwal *</label>
                  <select required className="input-field">
                    <option value="">Pilih preferensi jadwal</option>
                    <option value="weekday-pagi">Weekday Pagi (08:00 - 12:00)</option>
                    <option value="weekday-siang">Weekday Siang (13:00 - 17:00)</option>
                    <option value="weekday-malam">Weekday Malam (18:00 - 21:00)</option>
                    <option value="weekend">Weekend</option>
                    <option value="fleksibel">Fleksibel</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-dark mb-2">Pesan (Opsional)</label>
                  <textarea rows={4} placeholder="Tulis pesan atau pertanyaan..." className="input-field"></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full disabled:opacity-50"
                >
                  {isSubmitting ? "Mengirim..." : "Daftar Sekarang"}
                </button>

                <p className="text-xs text-gray-500 text-center">
                  Dengan mendaftar, Anda menyetujui Syarat & Ketentuan kami.
                </p>
              </form>
            </div>

            <div className="text-center mt-8">
              <p className="text-gray-600 mb-4">Butuh bantuan atau konsultasi?</p>
              <a
                href="https://wa.me/622112345678"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                <Phone className="w-5 h-5" /> Chat WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
