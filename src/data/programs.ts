export interface Program {
  id: string;
  name: string;
  slug: string;
  icon: string;
  shortDesc: string;
  level: string;
  price: string;
  priceValue: number;
  features: string[];
  curriculum: { level: string; topics: string[]; duration: string }[];
  examPrep: string[];
  description: string;
}

export const programs: Program[] = [
  {
    id: "1",
    name: "Bahasa Inggris",
    slug: "inggris",
    icon: "🇬🇧",
    shortDesc: "Dari basic hingga IELTS/TOEFL preparation",
    level: "Beginner - Advanced",
    price: "Rp 500.000/bulan",
    priceValue: 500000,
    features: [
      "Kelas Speaking & Listening intensif",
      "Persiapan IELTS & TOEFL",
      "Business English",
      "Conversation Class dengan Native Speaker",
    ],
    curriculum: [
      { level: "Beginner", topics: ["Basic Grammar", "Vocabulary Building", "Simple Conversations"], duration: "3 bulan" },
      { level: "Intermediate", topics: ["Advanced Grammar", "Essay Writing", "Presentation Skills"], duration: "4 bulan" },
      { level: "Advanced", topics: ["IELTS/TOEFL Prep", "Academic Writing", "Professional Communication"], duration: "4 bulan" },
    ],
    examPrep: ["IELTS", "TOEFL iBT", "TOEIC"],
    description: "Program Bahasa Inggris komprehensif dari level pemula hingga mahir dengan pengajar native speaker.",
  },
  {
    id: "2",
    name: "Bahasa Jepang",
    slug: "jepang",
    icon: "🇯🇵",
    shortDesc: "Persiapan JLPT N5-N1, kelas percakapan",
    level: "Beginner - Advanced",
    price: "Rp 600.000/bulan",
    priceValue: 600000,
    features: [
      "Pembelajaran Hiragana, Katakana, Kanji",
      "Persiapan JLPT N5-N1",
      "Kelas Percakapan Harian",
      "Japanese Culture Class",
    ],
    curriculum: [
      { level: "Beginner (N5-N4)", topics: ["Hiragana & Katakana", "Basic Kanji", "Daily Conversations"], duration: "6 bulan" },
      { level: "Intermediate (N3)", topics: ["Kanji 600", "Complex Grammar", "Reading Comprehension"], duration: "6 bulan" },
      { level: "Advanced (N2-N1)", topics: ["Advanced Kanji", "Business Japanese", "Literature"], duration: "12 bulan" },
    ],
    examPrep: ["JLPT N5", "JLPT N4", "JLPT N3", "JLPT N2", "JLPT N1"],
    description: "Program Bahasa Jepang lengkap dari pengenalan huruf hingga persiapan JLPT N1.",
  },
  {
    id: "3",
    name: "Bahasa Korea",
    slug: "korea",
    icon: "🇰🇷",
    shortDesc: "TOPIK preparation, K-culture class",
    level: "Beginner - Advanced",
    price: "Rp 550.000/bulan",
    priceValue: 550000,
    features: [
      "Pembelajaran Hangeul dari nol",
      "Persiapan TOPIK I & II",
      "K-Pop & K-Drama Class",
      "Conversation dengan Native Speaker",
    ],
    curriculum: [
      { level: "Beginner (TOPIK I)", topics: ["Hangeul", "Basic Grammar", "Daily Expressions"], duration: "4 bulan" },
      { level: "Intermediate (TOPIK II 3-4)", topics: ["Intermediate Grammar", "Reading & Writing"], duration: "6 bulan" },
      { level: "Advanced (TOPIK II 5-6)", topics: ["Advanced Grammar", "Academic Korean"], duration: "8 bulan" },
    ],
    examPrep: ["TOPIK I", "TOPIK II"],
    description: "Belajar Bahasa Korea dengan metode menyenangkan, dilengkapi K-Culture class.",
  },
  {
    id: "4",
    name: "Bahasa Mandarin",
    slug: "mandarin",
    icon: "🇨🇳",
    shortDesc: "HSK preparation, business Chinese",
    level: "Beginner - Advanced",
    price: "Rp 650.000/bulan",
    priceValue: 650000,
    features: [
      "Pembelajaran Pinyin & Hanzi",
      "Persiapan HSK 1-6",
      "Business Chinese",
      "Conversation dengan Native Speaker",
    ],
    curriculum: [
      { level: "Beginner (HSK 1-2)", topics: ["Pinyin", "Basic Hanzi", "Daily Conversations"], duration: "4 bulan" },
      { level: "Intermediate (HSK 3-4)", topics: ["Intermediate Hanzi", "Complex Grammar"], duration: "6 bulan" },
      { level: "Advanced (HSK 5-6)", topics: ["Advanced Hanzi", "Business Chinese"], duration: "12 bulan" },
    ],
    examPrep: ["HSK 1", "HSK 2", "HSK 3", "HSK 4", "HSK 5", "HSK 6"],
    description: "Kuasai Bahasa Mandarin dengan pengajar native speaker dari Tiongkok.",
  },
  {
    id: "5",
    name: "Bahasa Jerman",
    slug: "jerman",
    icon: "🇩🇪",
    shortDesc: "Persiapan Ausbildung, TestDaF",
    level: "Beginner - Intermediate",
    price: "Rp 700.000/bulan",
    priceValue: 700000,
    features: [
      "Persiapan Ausbildung ke Jerman",
      "TestDaF & Goethe-Zertifikat",
      "German for Healthcare",
      "Study in Germany Preparation",
    ],
    curriculum: [
      { level: "Beginner (A1-A2)", topics: ["Basic Grammar", "Vocabulary Building", "Daily Conversations"], duration: "4 bulan" },
      { level: "Intermediate (B1-B2)", topics: ["Complex Grammar", "TestDaF Preparation"], duration: "8 bulan" },
    ],
    examPrep: ["Goethe-Zertifikat A1-B2", "TestDaF"],
    description: "Program Bahasa Jerman untuk persiapan studi dan kerja di Jerman.",
  },
  {
    id: "6",
    name: "Bahasa Prancis",
    slug: "prancis",
    icon: "🇫🇷",
    shortDesc: "DELF/DALF preparation",
    level: "Beginner - Intermediate",
    price: "Rp 700.000/bulan",
    priceValue: 700000,
    features: [
      "Persiapan DELF/DALF",
      "French for Business",
      "French Literature & Culture",
      "Study in France Preparation",
    ],
    curriculum: [
      { level: "Beginner (A1-A2)", topics: ["Basic Grammar", "Pronunciation", "Daily Conversations"], duration: "4 bulan" },
      { level: "Intermediate (B1-B2)", topics: ["Complex Grammar", "DELF Preparation"], duration: "8 bulan" },
    ],
    examPrep: ["DELF A1-B2", "DALF C1-C2"],
    description: "Pelajari bahasa cinta dan diplomasi dengan pengajar native dari Paris.",
  },
];

export function getProgramBySlug(slug: string): Program | undefined {
  return programs.find((p) => p.slug === slug);
}
