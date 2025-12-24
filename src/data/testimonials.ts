export interface Testimonial {
  id: string;
  name: string;
  program: string;
  achievement: string;
  testimonial: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Anita Sari",
    program: "Bahasa Jepang",
    achievement: "Lulus JLPT N3",
    testimonial: "Dari nol bisa lulus JLPT N3 dalam 1.5 tahun! Senseinya sabar dan metodenya fun.",
    rating: 5,
  },
  {
    id: "2",
    name: "Reza Pratama",
    program: "Bahasa Inggris",
    achievement: "IELTS Band 7.5",
    testimonial: "IELTS band 7.5 padahal target cuma 6.5. Mr. David the best!",
    rating: 5,
  },
  {
    id: "3",
    name: "Dewi Kusuma",
    program: "Bahasa Korea",
    achievement: "Kerja di Perusahaan Korea",
    testimonial: "Sekarang sudah kerja di perusahaan Korea berkat belajar di LinguaMaster.",
    rating: 5,
  },
  {
    id: "4",
    name: "Budi Santoso",
    program: "Bahasa Mandarin",
    achievement: "HSK 4",
    testimonial: "Belajar Mandarin untuk bisnis, sekarang sudah expand ke China!",
    rating: 5,
  },
  {
    id: "5",
    name: "Fika Rahmawati",
    program: "Bahasa Jerman",
    achievement: "Diterima Ausbildung",
    testimonial: "Berhasil diterima Ausbildung di Jerman berkat program persiapan LinguaMaster!",
    rating: 5,
  },
  {
    id: "6",
    name: "Andi Wijaya",
    program: "Bahasa Prancis",
    achievement: "DELF B2",
    testimonial: "Monsieur Dubois membuat belajar Prancis jadi menyenangkan. Lulus DELF B2!",
    rating: 5,
  },
];
