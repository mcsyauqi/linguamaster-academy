"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Search, MessageCircle, Phone } from "lucide-react";

const faqCategories = [
  {
    name: "Pendaftaran",
    faqs: [
      { q: "Bagaimana cara mendaftar di LinguaMaster?", a: "Anda dapat mendaftar melalui website kami di halaman Pendaftaran, menghubungi WhatsApp kami, atau langsung datang ke kantor kami di Jakarta Selatan. Tim kami akan membantu proses pendaftaran dan menjadwalkan tes level gratis." },
      { q: "Apakah ada biaya pendaftaran?", a: "Tidak ada biaya pendaftaran. Anda hanya perlu membayar biaya kursus sesuai program dan tipe kelas yang dipilih. Kami juga menyediakan tes level gratis untuk semua calon siswa baru." },
      { q: "Kapan periode pendaftaran dibuka?", a: "Pendaftaran dibuka sepanjang tahun. Kelas baru dimulai setiap awal bulan. Untuk jadwal spesifik, silakan cek halaman Jadwal atau hubungi tim kami." },
      { q: "Berapa usia minimal untuk mendaftar?", a: "Kami menerima siswa mulai usia 12 tahun untuk kelas reguler. Untuk anak di bawah 12 tahun, kami menyediakan program khusus Kids Class dengan metode pembelajaran yang disesuaikan." },
    ],
  },
  {
    name: "Biaya & Pembayaran",
    faqs: [
      { q: "Berapa biaya kursus di LinguaMaster?", a: "Biaya bervariasi tergantung program dan tipe kelas: Reguler mulai Rp 400.000-700.000/bulan, Privat mulai Rp 1.500.000/bulan, dan Online mulai Rp 350.000/bulan. Harga sudah termasuk materi pembelajaran." },
      { q: "Metode pembayaran apa yang diterima?", a: "Kami menerima transfer bank (BCA, Mandiri, BNI, BRI), kartu kredit/debit, GoPay, OVO, Dana, ShopeePay, dan pembayaran tunai di kantor. Cicilan 0% tersedia untuk kartu kredit tertentu." },
      { q: "Apakah bisa bayar per bulan?", a: "Ya, pembayaran dilakukan per bulan. Kami juga menawarkan diskon untuk pembayaran 3 bulan (5%), 6 bulan (10%), atau 12 bulan (15%) di muka." },
      { q: "Apakah ada refund jika tidak cocok?", a: "Ya, kami menyediakan garansi 14 hari. Jika Anda merasa tidak cocok dalam 2 minggu pertama, uang kursus akan dikembalikan 100% (dikurangi biaya materi yang sudah digunakan)." },
    ],
  },
  {
    name: "Kelas & Pembelajaran",
    faqs: [
      { q: "Apa perbedaan kelas Reguler, Privat, dan Online?", a: "Reguler: 8-12 siswa, jadwal fixed, harga terjangkau. Privat: 1-3 siswa, jadwal fleksibel, materi custom. Online: 5-10 siswa via Zoom, jadwal fleksibel, bisa dari mana saja." },
      { q: "Berapa lama durasi satu sesi kelas?", a: "Kelas reguler dan privat: 90 menit (1.5 jam). Kelas online: 60 menit. Kelas intensif weekend: 180 menit (3 jam) dengan break." },
      { q: "Apakah ada kelas di hari weekend?", a: "Ya, tersedia kelas weekend untuk semua program bahasa. Jadwal weekend biasanya pagi (09:00-12:00) atau siang (13:00-16:00)." },
      { q: "Bagaimana jika saya tidak bisa hadir?", a: "Untuk kelas reguler, Anda bisa mengikuti kelas pengganti (make-up class) di jadwal lain dalam bulan yang sama. Untuk kelas privat, jadwal bisa di-reschedule dengan pemberitahuan minimal 24 jam." },
      { q: "Apakah materi pembelajaran disediakan?", a: "Ya, semua materi pembelajaran (buku, worksheet, audio, video) sudah termasuk dalam biaya kursus. Untuk kelas online, materi diberikan dalam format digital." },
    ],
  },
  {
    name: "Sertifikasi & Ujian",
    faqs: [
      { q: "Apakah LinguaMaster menyediakan persiapan IELTS/TOEFL?", a: "Ya, kami memiliki program khusus persiapan IELTS, TOEFL, TOEIC dengan pengajar yang merupakan examiner bersertifikat. Success rate siswa kami mencapai target skor 95%." },
      { q: "Bagaimana dengan persiapan JLPT, TOPIK, HSK?", a: "Kami menyediakan program persiapan lengkap untuk JLPT N5-N1, TOPIK I-II, dan HSK 1-6. Kelas intensif tersedia menjelang jadwal ujian resmi." },
      { q: "Apakah ada sertifikat setelah selesai kursus?", a: "Ya, setiap siswa yang menyelesaikan program akan mendapat sertifikat kelulusan dari LinguaMaster Academy yang mencantumkan level kompetensi yang dicapai." },
      { q: "Apakah LinguaMaster adalah test center resmi?", a: "Ya, kami adalah authorized test center untuk beberapa ujian. Untuk ujian resmi seperti JLPT dan TOPIK, kami bekerja sama dengan penyelenggara resmi dan membantu proses pendaftaran." },
    ],
  },
  {
    name: "Pengajar",
    faqs: [
      { q: "Siapa pengajar di LinguaMaster?", a: "Tim pengajar kami terdiri dari native speaker dari negara asal bahasa dan pengajar Indonesia bersertifikat dengan pengalaman minimal 3 tahun. Semua pengajar telah lulus proses seleksi ketat." },
      { q: "Apakah bisa request pengajar tertentu?", a: "Untuk kelas privat, Anda bisa request pengajar tertentu sesuai ketersediaan. Untuk kelas reguler, pengajar sudah ditentukan sesuai jadwal kelas." },
      { q: "Bagaimana kualifikasi native speaker?", a: "Native speaker kami memiliki sertifikasi mengajar (CELTA, TESOL, dll), pengalaman mengajar minimal 3 tahun, dan kemampuan berkomunikasi dalam Bahasa Indonesia untuk membantu pemula." },
    ],
  },
  {
    name: "Lainnya",
    faqs: [
      { q: "Dimana lokasi LinguaMaster Academy?", a: "Kantor dan kelas kami berlokasi di Jl. Pendidikan No. 123, Kebayoran Baru, Jakarta Selatan. Dekat dengan stasiun MRT Blok M (5 menit jalan kaki)." },
      { q: "Apakah ada parkir?", a: "Ya, tersedia parkir mobil dan motor gratis untuk siswa selama jam kelas. Kapasitas terbatas, disarankan datang lebih awal atau menggunakan transportasi umum." },
      { q: "Bagaimana protokol kesehatan di kelas?", a: "Ruang kelas dilengkapi AC dengan sirkulasi udara baik, pembersihan rutin, dan hand sanitizer tersedia. Kapasitas kelas dibatasi untuk kenyamanan." },
      { q: "Apakah bisa trial class sebelum daftar?", a: "Ya, kami menyediakan free trial class 1x pertemuan untuk Anda merasakan suasana belajar sebelum memutuskan mendaftar. Hubungi tim kami untuk jadwalkan trial." },
    ],
  },
];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("Pendaftaran");
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState("");

  const currentCategory = faqCategories.find((cat) => cat.name === activeCategory);

  const allFaqs = faqCategories.flatMap((cat) => cat.faqs);
  const filteredFaqs = searchQuery
    ? allFaqs.filter(
        (faq) =>
          faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
          faq.a.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : currentCategory?.faqs || [];

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-secondary py-16">
        <div className="container-custom text-center text-white">
          <span className="inline-block bg-white/20 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Pusat Bantuan
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
            Temukan jawaban untuk pertanyaan yang sering ditanyakan
          </p>

          {/* Search */}
          <div className="max-w-xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Cari pertanyaan..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl text-dark focus:ring-2 focus:ring-accent outline-none"
            />
          </div>
        </div>
      </section>

      {/* Categories & FAQ */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar Categories */}
            {!searchQuery && (
              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <h3 className="font-heading font-bold text-dark mb-4">Kategori</h3>
                  <div className="space-y-2">
                    {faqCategories.map((cat) => (
                      <button
                        key={cat.name}
                        onClick={() => {
                          setActiveCategory(cat.name);
                          setOpenFaq(0);
                        }}
                        className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                          activeCategory === cat.name
                            ? "bg-primary text-white"
                            : "bg-background text-dark hover:bg-primary/10"
                        }`}
                      >
                        {cat.name}
                        <span className="float-right text-sm opacity-70">
                          ({cat.faqs.length})
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* FAQ List */}
            <div className={searchQuery ? "lg:col-span-4" : "lg:col-span-3"}>
              {searchQuery && (
                <p className="text-gray-600 mb-6">
                  Menampilkan {filteredFaqs.length} hasil untuk &ldquo;{searchQuery}&rdquo;
                </p>
              )}

              {filteredFaqs.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-500 mb-4">Tidak ada hasil ditemukan</p>
                  <button
                    onClick={() => setSearchQuery("")}
                    className="text-primary hover:underline"
                  >
                    Hapus pencarian
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {filteredFaqs.map((faq, i) => (
                    <div key={i} className="card">
                      <button
                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                        className="w-full flex items-center justify-between text-left"
                      >
                        <h3 className="font-heading font-bold text-dark pr-4">{faq.q}</h3>
                        <ChevronDown
                          className={`w-5 h-5 text-primary flex-shrink-0 transition-transform ${
                            openFaq === i ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {openFaq === i && (
                        <p className="text-gray-600 mt-4 pt-4 border-t border-gray-100">
                          {faq.a}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-dark mb-4">
              Masih Ada Pertanyaan?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Tim kami siap membantu menjawab pertanyaan Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="card text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-xl flex items-center justify-center">
                <MessageCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-dark mb-2">Chat dengan Kami</h3>
              <p className="text-gray-600 text-sm mb-4">
                Respon cepat via WhatsApp setiap hari 08:00-21:00
              </p>
              <a
                href="https://wa.me/622112345678"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full"
              >
                <Phone className="w-5 h-5 mr-2" /> Chat WhatsApp
              </a>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-secondary/10 rounded-xl flex items-center justify-center">
                <MessageCircle className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="font-heading font-bold text-dark mb-2">Kirim Email</h3>
              <p className="text-gray-600 text-sm mb-4">
                Kami akan merespons dalam 1x24 jam kerja
              </p>
              <Link href="/kontak" className="btn-secondary w-full">
                Kirim Pesan
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-dark mb-4">
              Link Cepat
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { title: "Daftar Kursus", href: "/pendaftaran", icon: "📝" },
              { title: "Lihat Program", href: "/program", icon: "📚" },
              { title: "Jadwal Kelas", href: "/jadwal", icon: "📅" },
              { title: "Hubungi Kami", href: "/kontak", icon: "📞" },
            ].map((link, i) => (
              <Link key={i} href={link.href} className="card text-center hover:shadow-xl transition-shadow">
                <span className="text-3xl mb-2 block">{link.icon}</span>
                <h3 className="font-bold text-dark text-sm">{link.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
