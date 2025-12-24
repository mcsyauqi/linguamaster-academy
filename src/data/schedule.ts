export interface ClassSchedule {
  id: string;
  program: string;
  level: string;
  type: "Reguler" | "Privat" | "Online";
  days: string[];
  time: string;
  teacher: string;
  slots: number;
  registered: number;
  startDate: string;
  price: string;
}

export const schedules: ClassSchedule[] = [
  {
    id: "ENG-REG-001",
    program: "Bahasa Inggris",
    level: "Beginner",
    type: "Reguler",
    days: ["Senin", "Rabu"],
    time: "18:30 - 20:00",
    teacher: "Mr. David Smith",
    slots: 12,
    registered: 8,
    startDate: "6 Januari 2025",
    price: "Rp 500.000/bulan",
  },
  {
    id: "ENG-IELTS-001",
    program: "Bahasa Inggris",
    level: "IELTS Preparation",
    type: "Reguler",
    days: ["Sabtu"],
    time: "09:00 - 12:00",
    teacher: "Mr. David Smith",
    slots: 10,
    registered: 7,
    startDate: "11 Januari 2025",
    price: "Rp 800.000/bulan",
  },
  {
    id: "JPN-REG-001",
    program: "Bahasa Jepang",
    level: "Beginner (N5)",
    type: "Reguler",
    days: ["Senin", "Rabu"],
    time: "18:30 - 20:00",
    teacher: "Tanaka Sensei",
    slots: 12,
    registered: 11,
    startDate: "6 Januari 2025",
    price: "Rp 600.000/bulan",
  },
  {
    id: "KOR-REG-001",
    program: "Bahasa Korea",
    level: "Beginner (TOPIK I)",
    type: "Reguler",
    days: ["Selasa", "Kamis"],
    time: "18:30 - 20:00",
    teacher: "Kim Seonsaengnim",
    slots: 12,
    registered: 12,
    startDate: "7 Januari 2025",
    price: "Rp 550.000/bulan",
  },
  {
    id: "CHN-REG-001",
    program: "Bahasa Mandarin",
    level: "Beginner (HSK 1-2)",
    type: "Reguler",
    days: ["Selasa", "Kamis"],
    time: "18:30 - 20:00",
    teacher: "Li Laoshi",
    slots: 10,
    registered: 7,
    startDate: "7 Januari 2025",
    price: "Rp 650.000/bulan",
  },
  {
    id: "GER-REG-001",
    program: "Bahasa Jerman",
    level: "Beginner (A1-A2)",
    type: "Reguler",
    days: ["Senin", "Rabu"],
    time: "18:30 - 20:00",
    teacher: "Frau Mueller",
    slots: 10,
    registered: 6,
    startDate: "6 Januari 2025",
    price: "Rp 700.000/bulan",
  },
  {
    id: "FRA-REG-001",
    program: "Bahasa Prancis",
    level: "Beginner (A1-A2)",
    type: "Reguler",
    days: ["Selasa", "Kamis"],
    time: "18:30 - 20:00",
    teacher: "Monsieur Dubois",
    slots: 10,
    registered: 5,
    startDate: "7 Januari 2025",
    price: "Rp 700.000/bulan",
  },
  {
    id: "ENG-ONL-001",
    program: "Bahasa Inggris",
    level: "Beginner",
    type: "Online",
    days: ["Senin", "Rabu", "Jumat"],
    time: "19:00 - 20:00",
    teacher: "Mr. David Smith",
    slots: 15,
    registered: 12,
    startDate: "6 Januari 2025",
    price: "Rp 400.000/bulan",
  },
];
