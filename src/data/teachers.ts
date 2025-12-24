export interface Teacher {
  id: string;
  name: string;
  title: string;
  language: string;
  photo: string;
  origin: string;
  certifications: string[];
  experience: string;
  description: string;
  specializations: string[];
}

export const teachers: Teacher[] = [
  {
    id: "1",
    name: "Mr. David Smith",
    title: "Senior English Instructor",
    language: "Bahasa Inggris",
    photo: "/teachers/david.jpg",
    origin: "Native Speaker dari UK",
    certifications: ["CELTA Certified", "MA in Applied Linguistics", "IELTS Examiner"],
    experience: "8 tahun pengalaman",
    description: "Mr. David adalah pengajar Bahasa Inggris berpengalaman dari London, UK. Dengan latar belakang pendidikan di bidang Applied Linguistics dan sertifikasi CELTA, beliau telah membantu ribuan siswa mencapai target IELTS mereka.",
    specializations: ["IELTS Preparation", "Academic Writing", "Business English", "Pronunciation"]
  },
  {
    id: "2",
    name: "Tanaka Yuki",
    title: "Sensei - Japanese Language Expert",
    language: "Bahasa Jepang",
    photo: "/teachers/tanaka.jpg",
    origin: "Native Speaker dari Tokyo",
    certifications: ["JLPT N1 Examiner", "Japanese Teaching License", "MA in Japanese Pedagogy"],
    experience: "10 tahun pengalaman",
    description: "Tanaka Sensei berasal dari Tokyo dan telah mengajar Bahasa Jepang selama 10 tahun. Dengan metode pengajaran yang unik dan interaktif, beliau membuat pembelajaran Bahasa Jepang menjadi menyenangkan.",
    specializations: ["JLPT Preparation", "Business Japanese", "Anime & Manga Japanese", "Keigo"]
  },
  {
    id: "3",
    name: "Kim Minjun",
    title: "Seonsaengnim - Korean Language Specialist",
    language: "Bahasa Korea",
    photo: "/teachers/kim.jpg",
    origin: "Native Speaker dari Seoul",
    certifications: ["TOPIK Examiner", "Korean Language Teaching Certificate", "BA in Korean Literature"],
    experience: "7 tahun pengalaman",
    description: "Kim Seonsaengnim adalah pengajar Bahasa Korea dari Seoul yang passionate tentang K-Culture. Beliau mengintegrasikan K-Pop dan K-Drama dalam pembelajarannya untuk membuat belajar Bahasa Korea lebih menarik.",
    specializations: ["TOPIK Preparation", "K-Culture Class", "Conversational Korean", "Korean for Entertainment Industry"]
  },
  {
    id: "4",
    name: "Li Wei",
    title: "老师 (Laoshi) - Mandarin Expert",
    language: "Bahasa Mandarin",
    photo: "/teachers/li.jpg",
    origin: "Native Speaker dari Beijing",
    certifications: ["HSK Examiner", "CTCSOL Certified", "PhD in Chinese Linguistics"],
    experience: "12 tahun pengalaman",
    description: "Li Laoshi adalah pakar Bahasa Mandarin dengan pengalaman 12 tahun mengajar. Beliau spesialis dalam Business Chinese dan telah membantu banyak profesional menguasai Mandarin untuk keperluan bisnis.",
    specializations: ["HSK Preparation", "Business Chinese", "Chinese Calligraphy", "Classical Chinese"]
  },
  {
    id: "5",
    name: "Anna Mueller",
    title: "Deutschlehrerin - German Instructor",
    language: "Bahasa Jerman",
    photo: "/teachers/anna.jpg",
    origin: "Native Speaker dari Berlin",
    certifications: ["Goethe-Institut Certified", "TestDaF Examiner", "MA in German as Foreign Language"],
    experience: "6 tahun pengalaman",
    description: "Frau Mueller berasal dari Berlin dan spesialis dalam persiapan siswa untuk studi dan kerja di Jerman. Beliau memiliki pengalaman khusus dalam German for Healthcare dan Ausbildung preparation.",
    specializations: ["TestDaF Preparation", "Ausbildung Prep", "German for Healthcare", "Study in Germany Consultation"]
  },
  {
    id: "6",
    name: "Pierre Dubois",
    title: "Professeur de Français",
    language: "Bahasa Prancis",
    photo: "/teachers/pierre.jpg",
    origin: "Native Speaker dari Paris",
    certifications: ["DALF C2", "Alliance Française Certified", "MA in French Literature"],
    experience: "9 tahun pengalaman",
    description: "Monsieur Dubois adalah pengajar Bahasa Prancis dari Paris dengan passion besar terhadap French Literature dan Culture. Beliau membuat belajar Bahasa Prancis menjadi pengalaman yang elegan dan menyenangkan.",
    specializations: ["DELF/DALF Preparation", "French Literature", "Business French", "French Culture & Etiquette"]
  },
  {
    id: "7",
    name: "Sarah Johnson",
    title: "English Communication Coach",
    language: "Bahasa Inggris",
    photo: "/teachers/sarah.jpg",
    origin: "Native Speaker dari USA",
    certifications: ["TESOL Certified", "Business English Certificate", "BA in Communication"],
    experience: "5 tahun pengalaman",
    description: "Ms. Sarah fokus pada English Communication Skills dan Public Speaking. Dengan background di bidang komunikasi, beliau membantu siswa menjadi komunikator yang percaya diri dalam Bahasa Inggris.",
    specializations: ["Public Speaking", "TOEFL Preparation", "American Accent Training", "Presentation Skills"]
  },
  {
    id: "8",
    name: "Dr. Rina Wijaya",
    title: "Senior Language Consultant",
    language: "Multi-Language",
    photo: "/teachers/rina.jpg",
    origin: "Indonesia - Multilingual Expert",
    certifications: ["PhD in Linguistics", "IELTS Band 9", "JLPT N1", "HSK 6"],
    experience: "15 tahun pengalaman",
    description: "Dr. Rina adalah pakar bahasa Indonesia yang menguasai multiple languages. Beliau adalah konsultan akademik yang membantu siswa memilih program bahasa yang tepat dan merancang learning path yang efektif.",
    specializations: ["Language Learning Strategy", "Multi-language Learning", "Academic Consultation", "Exam Strategy"]
  }
];
