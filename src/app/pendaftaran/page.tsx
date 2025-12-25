"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle, Phone, Clock, CreditCard, Shield } from "lucide-react";
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
            <p className="text-gray-600 mb-4">
              Terima kasih telah mendaftar di LinguaMaster Academy. Tim kami akan menghubungi Anda dalam 1x24 jam.
            </p>
            <div className="card bg-primary/5 mb-8">
              <h3 className="font-bold text-dark mb-3">Langkah Selanjutnya:</h3>
              <ul className="text-left space-y-2">
                <li className="flex items-center gap-2 text-gray-600 text-sm">
                  <span className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs">1</span>
                  Tim kami akan menghubungi Anda via WhatsApp/Telepon
                </li>
                <li className="flex items-center gap-2 text-gray-600 text-sm">
                  <span className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs">2</span>
                  Jadwalkan tes level gratis
                </li>
                <li className="flex items-center gap-2 text-gray-600 text-sm">
                  <span className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs">3</span>
                  Konfirmasi jadwal dan pembayaran
                </li>
                <li className="flex items-center gap-2 text-gray-600 text-sm">
                  <span className="w-6 h-6 bg-secondary text-white rounded-full flex items-center justify-center text-xs">4</span>
                  Mulai belajar!
                </li>
              </ul>
            </div>
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
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
            Isi formulir dan tim kami akan menghubungi Anda dalam 1x24 jam
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-accent" />
              <span>Tes Level Gratis</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-accent" />
              <span>Garansi 14 Hari</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-accent" />
              <span>Cicilan 0%</span>
            </div>
          </div>
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

      {/* Registration Steps */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-dark mb-4">
              Proses Pendaftaran
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Langkah mudah untuk memulai belajar di LinguaMaster Academy
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4 relative">
                1
                <div className="hidden md:block absolute left-full top-1/2 w-full h-0.5 bg-primary/30"></div>
              </div>
              <h3 className="font-heading font-bold text-dark mb-2">Isi Formulir</h3>
              <p className="text-gray-600 text-sm">Lengkapi formulir pendaftaran online</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4 relative">
                2
                <div className="hidden md:block absolute left-full top-1/2 w-full h-0.5 bg-secondary/30"></div>
              </div>
              <h3 className="font-heading font-bold text-dark mb-2">Tes Level</h3>
              <p className="text-gray-600 text-sm">Ikuti tes level gratis untuk menentukan kelas</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4 relative">
                3
                <div className="hidden md:block absolute left-full top-1/2 w-full h-0.5 bg-accent/30"></div>
              </div>
              <h3 className="font-heading font-bold text-dark mb-2">Pembayaran</h3>
              <p className="text-gray-600 text-sm">Pilih metode pembayaran yang nyaman</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-dark rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                4
              </div>
              <h3 className="font-heading font-bold text-dark mb-2">Mulai Belajar</h3>
              <p className="text-gray-600 text-sm">Bergabung dengan kelas sesuai jadwal</p>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-dark mb-4">
              Metode Pembayaran
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Berbagai pilihan pembayaran untuk kemudahan Anda
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="card text-center hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <CreditCard className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-dark mb-2">Transfer Bank</h3>
              <p className="text-gray-600 text-sm mb-4">BCA, Mandiri, BNI, BRI, dan bank lainnya</p>
              <span className="text-xs bg-secondary/10 text-secondary px-3 py-1 rounded-full">Verifikasi Instan</span>
            </div>
            <div className="card text-center hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Phone className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="font-heading font-bold text-dark mb-2">E-Wallet</h3>
              <p className="text-gray-600 text-sm mb-4">GoPay, OVO, DANA, ShopeePay, LinkAja</p>
              <span className="text-xs bg-secondary/10 text-secondary px-3 py-1 rounded-full">Proses Cepat</span>
            </div>
            <div className="card text-center hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-heading font-bold text-dark mb-2">Cicilan 0%</h3>
              <p className="text-gray-600 text-sm mb-4">Cicilan hingga 12 bulan tanpa bunga</p>
              <span className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full">Kartu Kredit</span>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-secondary/10 text-secondary text-sm font-medium px-4 py-2 rounded-full mb-4">
                Jaminan Kepuasan
              </span>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-dark mb-6">
                Garansi 14 Hari Uang Kembali
              </h2>
              <p className="text-gray-600 mb-6">
                Kami yakin dengan kualitas pembelajaran kami. Jika Anda tidak puas dalam 14 hari pertama, kami akan mengembalikan 100% biaya pendaftaran Anda tanpa pertanyaan.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-600">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                  Refund 100% dalam 14 hari pertama
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                  Proses refund maksimal 7 hari kerja
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                  Tanpa syarat dan ketentuan rumit
                </li>
              </ul>
            </div>
            <div className="card bg-gradient-to-br from-primary to-secondary text-white p-8">
              <Shield className="w-16 h-16 mb-6" />
              <h3 className="text-2xl font-heading font-bold mb-4">100% Risk-Free</h3>
              <p className="text-white/80 mb-6">
                Tidak ada risiko dalam mencoba. Jika tidak cocok, uang Anda kembali sepenuhnya.
              </p>
              <ul className="space-y-2 text-white/90">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" /> Bebas risiko
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" /> Tanpa biaya tersembunyi
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" /> Proses mudah
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-dark mb-4">
              Pertanyaan Seputar Pendaftaran
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { q: "Berapa lama proses pendaftaran?", a: "Proses pendaftaran hanya membutuhkan waktu sekitar 5-10 menit. Setelah mengisi formulir, tim kami akan menghubungi Anda dalam 1x24 jam." },
              { q: "Apakah ada biaya pendaftaran?", a: "Tidak ada biaya pendaftaran. Anda hanya membayar biaya kursus sesuai program yang dipilih." },
              { q: "Bagaimana jika saya tidak tahu level saya?", a: "Kami menyediakan tes level gratis untuk menentukan kelas yang tepat untuk Anda. Tes ini dapat dilakukan online atau langsung di kantor kami." },
              { q: "Apakah bisa pindah jadwal atau kelas?", a: "Ya, Anda bisa mengajukan perubahan jadwal atau pindah kelas dengan menghubungi admin. Ketentuan berlaku sesuai kebijakan yang ada." },
              { q: "Apakah ada diskon untuk pendaftaran paket?", a: "Ya, kami menawarkan diskon hingga 20% untuk pendaftaran paket 3 bulan atau lebih. Hubungi tim kami untuk informasi lebih lanjut." },
            ].map((faq, i) => (
              <div key={i} className="card hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-dark mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/faq" className="btn-outline">Lihat Semua FAQ</Link>
          </div>
        </div>
      </section>
    </>
  );
}
