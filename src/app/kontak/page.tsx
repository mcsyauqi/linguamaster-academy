"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";

const contactInfo = [
  { icon: MapPin, title: "Alamat", content: "Jl. Pendidikan No. 123, Jakarta Selatan" },
  { icon: Phone, title: "Telepon", content: "+62 21 1234 5678" },
  { icon: Mail, title: "Email", content: "info@linguamaster.id" },
  { icon: Clock, title: "Jam Operasional", content: "Senin - Sabtu: 08:00 - 21:00" },
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
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Tim kami siap membantu menjawab pertanyaan Anda
          </p>
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
        </div>
      </section>
    </>
  );
}
