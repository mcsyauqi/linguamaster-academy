"use client";

import { useState } from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, MessageCircle, Users, Building } from "lucide-react";

const contactInfo = [
  { icon: MapPin, title: "Alamat", content: "Jl. Pendidikan No. 123, Jakarta Selatan 12345" },
  { icon: Phone, title: "Telepon", content: "+62 21 1234 5678" },
  { icon: Mail, title: "Email", content: "info@linguamaster.id" },
  { icon: Clock, title: "Jam Operasional", content: "Senin - Sabtu: 08:00 - 21:00" },
];

const branches = [
  { name: "Jakarta Selatan (Pusat)", address: "Jl. Pendidikan No. 123, Kemang", phone: "+62 21 1234 5678" },
  { name: "Jakarta Barat", address: "Jl. Bahasa No. 45, Grogol", phone: "+62 21 2345 6789" },
  { name: "Bandung", address: "Jl. Linguistik No. 78, Dago", phone: "+62 22 1234 5678" },
  { name: "Surabaya", address: "Jl. Kursus No. 90, Gubeng", phone: "+62 31 1234 5678" },
];

export default function KontakPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-secondary py-16">
        <div className="container-custom text-center text-white">
          <span className="inline-block bg-white/20 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Hubungi Kami
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
            Ada Pertanyaan?
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
            Tim kami siap membantu menjawab pertanyaan Anda 24/7
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/622112345678"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              <MessageCircle className="w-5 h-5" /> Chat WhatsApp
            </a>
            <a
              href="tel:+622112345678"
              className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              <Phone className="w-5 h-5" /> Telepon Sekarang
            </a>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info) => (
              <div key={info.title} className="text-center p-6 bg-background rounded-xl">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-dark mb-1">{info.title}</h3>
                <p className="text-gray-600 text-sm">{info.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form & Map */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="card">
              <h2 className="text-xl font-heading font-bold text-dark mb-6">Kirim Pesan</h2>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="text-lg font-bold text-dark mb-2">Pesan Terkirim!</h3>
                  <p className="text-gray-600 mb-6">Tim kami akan segera merespons.</p>
                  <button onClick={() => setIsSubmitted(false)} className="btn-outline">
                    Kirim Pesan Lagi
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-dark mb-2">Nama Lengkap *</label>
                      <input type="text" required placeholder="Masukkan nama" className="input-field" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-dark mb-2">Email *</label>
                      <input type="email" required placeholder="contoh@email.com" className="input-field" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-dark mb-2">Nomor Telepon *</label>
                    <input type="tel" required placeholder="08xxxxxxxxxx" className="input-field" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-dark mb-2">Subjek *</label>
                    <select required className="input-field">
                      <option value="">Pilih subjek</option>
                      <option value="informasi">Informasi Program</option>
                      <option value="jadwal">Jadwal Kelas</option>
                      <option value="biaya">Biaya & Pembayaran</option>
                      <option value="kerjasama">Kerjasama</option>
                      <option value="karir">Karir / Lowongan</option>
                      <option value="lainnya">Lainnya</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-dark mb-2">Pesan *</label>
                    <textarea rows={4} required placeholder="Tulis pesan Anda..." className="input-field"></textarea>
                  </div>

                  <button type="submit" disabled={isSubmitting} className="btn-primary w-full disabled:opacity-50">
                    <Send className="w-5 h-5 mr-2" />
                    {isSubmitting ? "Mengirim..." : "Kirim Pesan"}
                  </button>
                </form>
              )}
            </div>

            {/* Map & WhatsApp */}
            <div className="space-y-6">
              <div className="card aspect-video flex items-center justify-center bg-gradient-to-br from-primary/5 to-secondary/5">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                  <p className="text-gray-600">Peta Lokasi</p>
                  <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">
                    Buka di Google Maps
                  </a>
                </div>
              </div>

              <div className="card bg-gradient-to-br from-green-500 to-green-600 text-white">
                <h3 className="font-bold text-lg mb-2">Chat via WhatsApp</h3>
                <p className="text-white/80 mb-4">Respon cepat untuk pertanyaan Anda</p>
                <a
                  href="https://wa.me/622112345678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-green-600 font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <Phone className="w-5 h-5" /> Chat Sekarang
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-dark text-center mb-12">
            Pertanyaan Umum
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { q: "Bagaimana cara mendaftar?", a: "Anda dapat mendaftar melalui halaman Pendaftaran atau langsung datang ke kantor kami." },
              { q: "Apakah ada tes level gratis?", a: "Ya, kami menyediakan tes level gratis untuk menentukan kelas yang sesuai." },
              { q: "Metode pembayaran apa yang tersedia?", a: "Kami menerima transfer bank, kartu kredit, dan e-wallet." },
              { q: "Apakah bisa refund?", a: "Kami menyediakan garansi 14 hari. Jika tidak puas, uang kembali 100%." },
            ].map((faq, i) => (
              <div key={i} className="p-6 bg-background rounded-xl">
                <h3 className="font-bold text-dark mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/faq" className="btn-outline">Lihat Semua FAQ</Link>
          </div>
        </div>
      </section>

      {/* Branch Locations */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-dark mb-4">
              Lokasi Cabang Kami
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Kunjungi cabang LinguaMaster terdekat di kota Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {branches.map((branch, i) => (
              <div key={i} className="card hover:shadow-lg transition-shadow">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Building className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-dark mb-2">{branch.name}</h3>
                <p className="text-gray-600 text-sm mb-2">{branch.address}</p>
                <a href={`tel:${branch.phone.replace(/\s/g, '')}`} className="text-primary hover:underline text-sm font-medium">
                  {branch.phone}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-dark mb-4">
              Pilih Cara Menghubungi Kami
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="card text-center hover:shadow-lg transition-shadow border-2 border-transparent hover:border-primary">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-heading font-bold text-dark mb-2">WhatsApp</h3>
              <p className="text-gray-600 text-sm mb-4">Respon cepat dalam hitungan menit</p>
              <a
                href="https://wa.me/622112345678"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-lg transition-colors text-sm"
              >
                Chat Sekarang
              </a>
            </div>

            <div className="card text-center hover:shadow-lg transition-shadow border-2 border-transparent hover:border-primary">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-dark mb-2">Telepon</h3>
              <p className="text-gray-600 text-sm mb-4">Senin - Sabtu, 08:00 - 21:00</p>
              <a
                href="tel:+622112345678"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-4 py-2 rounded-lg transition-colors text-sm"
              >
                +62 21 1234 5678
              </a>
            </div>

            <div className="card text-center hover:shadow-lg transition-shadow border-2 border-transparent hover:border-primary">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="font-heading font-bold text-dark mb-2">Email</h3>
              <p className="text-gray-600 text-sm mb-4">Respon dalam 1x24 jam</p>
              <a
                href="mailto:info@linguamaster.id"
                className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary-dark text-white font-semibold px-4 py-2 rounded-lg transition-colors text-sm"
              >
                Kirim Email
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-dark mb-4">
              Ikuti Kami di Media Sosial
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Dapatkan tips belajar, info promo, dan update terbaru dari LinguaMaster
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {[
              { name: "Instagram", handle: "@linguamaster.id", followers: "50K+", color: "bg-pink-500" },
              { name: "Facebook", handle: "LinguaMaster Academy", followers: "35K+", color: "bg-blue-600" },
              { name: "YouTube", handle: "LinguaMaster", followers: "25K+", color: "bg-red-600" },
              { name: "TikTok", handle: "@linguamaster", followers: "100K+", color: "bg-black" },
            ].map((social, i) => (
              <div key={i} className="card text-center w-40 hover:shadow-lg transition-shadow">
                <div className={`w-12 h-12 ${social.color} rounded-full flex items-center justify-center mx-auto mb-3`}>
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-dark text-sm">{social.name}</h3>
                <p className="text-gray-500 text-xs mb-1">{social.handle}</p>
                <p className="text-primary font-bold text-sm">{social.followers} followers</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-primary to-secondary">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-4">
            Siap Untuk Mulai Belajar?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Daftar sekarang dan dapatkan konsultasi gratis dari tim kami
          </p>
          <Link href="/pendaftaran" className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-4 rounded-lg transition-colors">
            Daftar Sekarang
          </Link>
        </div>
      </section>
    </>
  );
}
