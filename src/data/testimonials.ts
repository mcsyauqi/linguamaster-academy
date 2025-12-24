export interface Testimonial {
  id: string;
  name: string;
  photo: string;
  program: string;
  achievement: string;
  testimonial: string;
  rating: number;
  date: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Anita Sari",
    photo: "/testimonials/anita.jpg",
    program: "Bahasa Jepang",
    achievement: "Lulus JLPT N3",
    testimonial: "Dari nol bisa lulus JLPT N3 dalam 1.5 tahun! Senseinya sabar dan metodenya fun. Sekarang sudah bisa nonton anime tanpa subtitle dan percaya diri berbicara dengan teman Jepang saya.",
    rating: 5,
    date: "2024"
  },
  {
    id: "2",
    name: "Reza Pratama",
    photo: "/testimonials/reza.jpg",
    program: "Bahasa Inggris",
    achievement: "IELTS Band 7.5",
    testimonial: "IELTS band 7.5 padahal target cuma 6.5. Mr. David the best! Teknik-teknik yang diajarkan sangat membantu, terutama untuk speaking dan writing. Sekarang sudah diterima di universitas di Australia.",
    rating: 5,
    date: "2024"
  },
  {
    id: "3",
    name: "Dewi Kusuma",
    photo: "/testimonials/dewi.jpg",
    program: "Bahasa Korea",
    achievement: "Kerja di Perusahaan Korea",
    testimonial: "Sekarang sudah kerja di perusahaan Korea berkat belajar di LinguaMaster. Kim Seonsaengnim tidak hanya mengajarkan bahasa, tapi juga budaya kerja Korea yang sangat membantu dalam pekerjaan saya.",
    rating: 5,
    date: "2024"
  },
  {
    id: "4",
    name: "Budi Santoso",
    photo: "/testimonials/budi.jpg",
    program: "Bahasa Mandarin",
    achievement: "HSK 4 & Business Expansion",
    testimonial: "Sebagai pebisnis, belajar Mandarin adalah keputusan terbaik. Li Laoshi mengajarkan Business Chinese yang langsung aplikatif. Sekarang bisnis saya sudah expand ke China dan komunikasi dengan partner jadi lebih lancar.",
    rating: 5,
    date: "2024"
  },
  {
    id: "5",
    name: "Fika Rahmawati",
    photo: "/testimonials/fika.jpg",
    program: "Bahasa Jerman",
    achievement: "Diterima Ausbildung di Jerman",
    testimonial: "Berkat program persiapan Ausbildung di LinguaMaster, saya berhasil diterima program Ausbildung Krankenpflege di Jerman! Frau Mueller sangat membantu dalam persiapan bahasa dan dokumen.",
    rating: 5,
    date: "2024"
  },
  {
    id: "6",
    name: "Andi Wijaya",
    photo: "/testimonials/andi.jpg",
    program: "Bahasa Prancis",
    achievement: "DELF B2",
    testimonial: "Monsieur Dubois membuat belajar Bahasa Prancis jadi menyenangkan. Tidak hanya bahasa, tapi juga culture dan literature. Berhasil lulus DELF B2 dan sekarang sedang mempersiapkan studi di Prancis.",
    rating: 5,
    date: "2024"
  },
  {
    id: "7",
    name: "Maya Putri",
    photo: "/testimonials/maya.jpg",
    program: "Bahasa Jepang",
    achievement: "JLPT N2 & Beasiswa MEXT",
    testimonial: "Tanaka Sensei adalah guru terbaik yang pernah saya temui. Metode pengajarannya sangat efektif. Saya berhasil lulus JLPT N2 dan mendapat beasiswa MEXT untuk kuliah di Jepang!",
    rating: 5,
    date: "2024"
  },
  {
    id: "8",
    name: "Rizky Hakim",
    photo: "/testimonials/rizky.jpg",
    program: "Bahasa Inggris",
    achievement: "TOEFL iBT 105",
    testimonial: "Dari TOEFL 80 naik ke 105 dalam waktu 4 bulan! Ms. Sarah sangat fokus pada kelemahan saya dan memberikan latihan yang targeted. Highly recommended untuk yang mau studi ke luar negeri.",
    rating: 5,
    date: "2024"
  },
  {
    id: "9",
    name: "Sinta Maharani",
    photo: "/testimonials/sinta.jpg",
    program: "Bahasa Korea",
    achievement: "TOPIK Level 5",
    testimonial: "Awalnya belajar Korea karena suka K-Pop, sekarang sudah bisa kerja sebagai translator! Kim Seonsaengnim mengajarkan bahasa Korea yang natural, bukan yang kaku dari buku saja.",
    rating: 5,
    date: "2024"
  }
];
