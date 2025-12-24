export interface Teacher {
  id: string;
  name: string;
  language: string;
  origin: string;
  certifications: string[];
  experience: string;
  specializations: string[];
}

export const teachers: Teacher[] = [
  {
    id: "1",
    name: "Mr. David Smith",
    language: "Bahasa Inggris",
    origin: "Native Speaker dari UK",
    certifications: ["CELTA Certified", "IELTS Examiner"],
    experience: "8 tahun pengalaman",
    specializations: ["IELTS Preparation", "Business English"],
  },
  {
    id: "2",
    name: "Tanaka Yuki",
    language: "Bahasa Jepang",
    origin: "Native Speaker dari Tokyo",
    certifications: ["JLPT N1 Examiner", "Japanese Teaching License"],
    experience: "10 tahun pengalaman",
    specializations: ["JLPT Preparation", "Business Japanese"],
  },
  {
    id: "3",
    name: "Kim Minjun",
    language: "Bahasa Korea",
    origin: "Native Speaker dari Seoul",
    certifications: ["TOPIK Examiner", "Korean Language Teaching Certificate"],
    experience: "7 tahun pengalaman",
    specializations: ["TOPIK Preparation", "K-Culture Class"],
  },
  {
    id: "4",
    name: "Li Wei",
    language: "Bahasa Mandarin",
    origin: "Native Speaker dari Beijing",
    certifications: ["HSK Examiner", "CTCSOL Certified"],
    experience: "12 tahun pengalaman",
    specializations: ["HSK Preparation", "Business Chinese"],
  },
  {
    id: "5",
    name: "Anna Mueller",
    language: "Bahasa Jerman",
    origin: "Native Speaker dari Berlin",
    certifications: ["Goethe-Institut Certified", "TestDaF Examiner"],
    experience: "6 tahun pengalaman",
    specializations: ["TestDaF Preparation", "Ausbildung Prep"],
  },
  {
    id: "6",
    name: "Pierre Dubois",
    language: "Bahasa Prancis",
    origin: "Native Speaker dari Paris",
    certifications: ["DALF C2", "Alliance Française Certified"],
    experience: "9 tahun pengalaman",
    specializations: ["DELF/DALF Preparation", "French Literature"],
  },
];
