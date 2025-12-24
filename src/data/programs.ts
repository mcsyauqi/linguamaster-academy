export interface Program {
  id: string;
  name: string;
  slug: string;
  icon: string;
  flag: string;
  shortDesc: string;
  level: string;
  price: string;
  priceValue: number;
  color: string;
  features: string[];
  curriculum: {
    level: string;
    topics: string[];
    duration: string;
  }[];
  examPrep: string[];
  description: string;
}

export const programs: Program[] = [
  {
    id: "1",
    name: "Bahasa Inggris",
    slug: "inggris",
    icon: "🇬🇧",
    flag: "GB",
    shortDesc: "Dari basic hingga IELTS/TOEFL preparation",
    level: "Beginner - Advanced",
    price: "Rp 500.000/bulan",
    priceValue: 500000,
    color: "#4F46E5",
    features: [
      "Kelas Speaking & Listening intensif",
      "Persiapan IELTS & TOEFL",
      "Business English",
      "Academic Writing",
      "Conversation Class dengan Native Speaker"
    ],
    curriculum: [
      {
        level: "Beginner",
        topics: ["Basic Grammar", "Vocabulary Building", "Simple Conversations", "Reading Comprehension"],
        duration: "3 bulan"
      },
      {
        level: "Intermediate",
        topics: ["Advanced Grammar", "Essay Writing", "Presentation Skills", "Debate & Discussion"],
        duration: "4 bulan"
      },
      {
        level: "Advanced",
        topics: ["IELTS/TOEFL Preparation", "Academic Writing", "Research Paper", "Professional Communication"],
        duration: "4 bulan"
      }
    ],
    examPrep: ["IELTS", "TOEFL iBT", "TOEIC", "Cambridge English"],
    description: "Program Bahasa Inggris komprehensif yang dirancang untuk membawa Anda dari level pemula hingga mahir. Dengan pengajar native speaker dan metode pembelajaran interaktif, Anda akan menguasai semua aspek bahasa Inggris termasuk speaking, listening, reading, dan writing."
  },
  {
    id: "2",
    name: "Bahasa Jepang",
    slug: "jepang",
    icon: "🇯🇵",
    flag: "JP",
    shortDesc: "Persiapan JLPT N5-N1, kelas percakapan",
    level: "Beginner - Advanced",
    price: "Rp 600.000/bulan",
    priceValue: 600000,
    color: "#DC2626",
    features: [
      "Pembelajaran Hiragana, Katakana, Kanji",
      "Persiapan JLPT N5-N1",
      "Kelas Percakapan Harian",
      "Business Japanese",
      "Japanese Culture Class"
    ],
    curriculum: [
      {
        level: "Beginner (N5-N4)",
        topics: ["Hiragana & Katakana", "Basic Kanji (300)", "Daily Conversations", "Basic Grammar"],
        duration: "6 bulan"
      },
      {
        level: "Intermediate (N3)",
        topics: ["Kanji (600)", "Complex Grammar", "Reading Comprehension", "Listening Practice"],
        duration: "6 bulan"
      },
      {
        level: "Advanced (N2-N1)",
        topics: ["Advanced Kanji (2000+)", "Academic Japanese", "Business Japanese", "Literature"],
        duration: "12 bulan"
      }
    ],
    examPrep: ["JLPT N5", "JLPT N4", "JLPT N3", "JLPT N2", "JLPT N1"],
    description: "Program Bahasa Jepang yang komprehensif mulai dari pengenalan huruf Hiragana hingga persiapan JLPT N1. Pengajar native speaker dari Jepang akan membimbing Anda memahami bahasa dan budaya Jepang secara mendalam."
  },
  {
    id: "3",
    name: "Bahasa Korea",
    slug: "korea",
    icon: "🇰🇷",
    flag: "KR",
    shortDesc: "TOPIK preparation, K-culture class",
    level: "Beginner - Advanced",
    price: "Rp 550.000/bulan",
    priceValue: 550000,
    color: "#2563EB",
    features: [
      "Pembelajaran Hangeul dari nol",
      "Persiapan TOPIK I & II",
      "K-Pop & K-Drama Class",
      "Business Korean",
      "Conversation dengan Native Speaker"
    ],
    curriculum: [
      {
        level: "Beginner (TOPIK I)",
        topics: ["Hangeul", "Basic Grammar", "Daily Expressions", "Korean Culture"],
        duration: "4 bulan"
      },
      {
        level: "Intermediate (TOPIK II Level 3-4)",
        topics: ["Intermediate Grammar", "Reading & Writing", "Listening Practice", "K-Culture Deep Dive"],
        duration: "6 bulan"
      },
      {
        level: "Advanced (TOPIK II Level 5-6)",
        topics: ["Advanced Grammar", "Academic Korean", "Business Communication", "Media Korean"],
        duration: "8 bulan"
      }
    ],
    examPrep: ["TOPIK I", "TOPIK II"],
    description: "Belajar Bahasa Korea dengan metode yang menyenangkan! Dari dasar Hangeul hingga persiapan TOPIK, dilengkapi dengan K-Culture class yang membahas K-Pop, K-Drama, dan budaya Korea modern."
  },
  {
    id: "4",
    name: "Bahasa Mandarin",
    slug: "mandarin",
    icon: "🇨🇳",
    flag: "CN",
    shortDesc: "HSK preparation, business Chinese",
    level: "Beginner - Advanced",
    price: "Rp 650.000/bulan",
    priceValue: 650000,
    color: "#EF4444",
    features: [
      "Pembelajaran Pinyin & Hanzi",
      "Persiapan HSK 1-6",
      "Business Chinese",
      "Chinese Calligraphy",
      "Conversation dengan Native Speaker"
    ],
    curriculum: [
      {
        level: "Beginner (HSK 1-2)",
        topics: ["Pinyin", "Basic Hanzi (300)", "Daily Conversations", "Tones & Pronunciation"],
        duration: "4 bulan"
      },
      {
        level: "Intermediate (HSK 3-4)",
        topics: ["Intermediate Hanzi (1200)", "Complex Grammar", "Reading & Writing", "Chinese Culture"],
        duration: "6 bulan"
      },
      {
        level: "Advanced (HSK 5-6)",
        topics: ["Advanced Hanzi (2500+)", "Business Chinese", "Academic Writing", "Literature"],
        duration: "12 bulan"
      }
    ],
    examPrep: ["HSK 1", "HSK 2", "HSK 3", "HSK 4", "HSK 5", "HSK 6"],
    description: "Kuasai Bahasa Mandarin, bahasa dengan penutur terbanyak di dunia. Program kami mencakup pembelajaran Pinyin, Hanzi, dan percakapan dengan pengajar native speaker dari Tiongkok."
  },
  {
    id: "5",
    name: "Bahasa Jerman",
    slug: "jerman",
    icon: "🇩🇪",
    flag: "DE",
    shortDesc: "Persiapan Ausbildung, TestDaF",
    level: "Beginner - Intermediate",
    price: "Rp 700.000/bulan",
    priceValue: 700000,
    color: "#FBBF24",
    features: [
      "Persiapan Ausbildung ke Jerman",
      "TestDaF & Goethe-Zertifikat",
      "German for Healthcare",
      "Business German",
      "Study in Germany Preparation"
    ],
    curriculum: [
      {
        level: "Beginner (A1-A2)",
        topics: ["Basic Grammar", "Vocabulary Building", "Daily Conversations", "German Culture"],
        duration: "4 bulan"
      },
      {
        level: "Intermediate (B1-B2)",
        topics: ["Complex Grammar", "Professional German", "TestDaF Preparation", "Academic German"],
        duration: "8 bulan"
      }
    ],
    examPrep: ["Goethe-Zertifikat A1-B2", "TestDaF", "telc Deutsch"],
    description: "Program Bahasa Jerman khusus untuk persiapan studi dan kerja di Jerman. Fokus pada persiapan Ausbildung, TestDaF, dan German for specific purposes seperti healthcare dan engineering."
  },
  {
    id: "6",
    name: "Bahasa Prancis",
    slug: "prancis",
    icon: "🇫🇷",
    flag: "FR",
    shortDesc: "DELF/DALF preparation",
    level: "Beginner - Intermediate",
    price: "Rp 700.000/bulan",
    priceValue: 700000,
    color: "#3B82F6",
    features: [
      "Persiapan DELF/DALF",
      "French for Business",
      "French Literature & Culture",
      "Conversation avec locuteur natif",
      "Study in France Preparation"
    ],
    curriculum: [
      {
        level: "Beginner (A1-A2)",
        topics: ["Basic Grammar", "Pronunciation", "Daily Conversations", "French Culture"],
        duration: "4 bulan"
      },
      {
        level: "Intermediate (B1-B2)",
        topics: ["Complex Grammar", "French Literature", "DELF Preparation", "Professional French"],
        duration: "8 bulan"
      }
    ],
    examPrep: ["DELF A1-B2", "DALF C1-C2", "TCF"],
    description: "Pelajari bahasa cinta dan diplomasi! Program Bahasa Prancis kami mencakup persiapan DELF/DALF, French culture, dan persiapan studi di Prancis atau negara-negara francophone."
  }
];

export function getProgramBySlug(slug: string): Program | undefined {
  return programs.find(p => p.slug === slug);
}
