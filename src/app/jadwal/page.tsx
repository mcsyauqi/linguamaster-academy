import Link from "next/link";
import { Calendar, Clock, Users, ArrowRight, CheckCircle, BookOpen, Award } from "lucide-react";
import { schedules } from "@/data/schedule";

export default function JadwalPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-secondary py-16">
        <div className="container-custom text-center text-white">
          <span className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Calendar className="w-4 h-4" /> Jadwal Kelas
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
            Jadwal Kelas Tersedia
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
            Temukan jadwal kelas yang sesuai dengan waktu dan kebutuhan Anda
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-accent" />
              <span>Kelas Pagi, Siang & Malam</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-accent" />
              <span>Weekday & Weekend</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-accent" />
              <span>Online & Offline</span>
            </div>
          </div>
        </div>
      </section>

      {/* Class Type Filter Info */}
      <section className="py-8 bg-white border-b">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 p-4 bg-primary/5 rounded-lg">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-bold text-dark">Kelas Reguler</p>
                <p className="text-sm text-gray-600">8-12 siswa, 2x/minggu</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-secondary/5 rounded-lg">
              <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                <Award className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <p className="font-bold text-dark">Kelas Privat</p>
                <p className="text-sm text-gray-600">1-3 siswa, jadwal fleksibel</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-accent/5 rounded-lg">
              <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="font-bold text-dark">Kelas Intensif</p>
                <p className="text-sm text-gray-600">4-5x/minggu, progres cepat</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="mb-6">
            <p className="text-gray-600">Menampilkan <span className="font-bold text-dark">{schedules.length}</span> kelas</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {schedules.map((schedule) => {
              const slotsLeft = schedule.slots - schedule.registered;
              const isFull = slotsLeft === 0;
              const isAlmostFull = slotsLeft <= 3 && slotsLeft > 0;

              return (
                <div key={schedule.id} className="card hover:shadow-xl transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex gap-2">
                      <span className={`text-xs font-medium px-3 py-1 rounded-full ${schedule.type === "Reguler" ? "bg-primary/10 text-primary" : schedule.type === "Privat" ? "bg-secondary/10 text-secondary" : "bg-accent/10 text-accent"}`}>
                        {schedule.type}
                      </span>
                      {isFull && <span className="text-xs font-medium px-3 py-1 rounded-full bg-red-100 text-red-600">Penuh</span>}
                      {isAlmostFull && <span className="text-xs font-medium px-3 py-1 rounded-full bg-yellow-100 text-yellow-600">Sisa {slotsLeft}</span>}
                    </div>
                    <span className="text-xs text-gray-400">{schedule.id}</span>
                  </div>

                  <h3 className="text-lg font-heading font-bold text-dark mb-1">{schedule.program}</h3>
                  <p className="text-primary font-medium mb-4">{schedule.level}</p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-3 text-gray-600 text-sm">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span>{schedule.days.join(", ")}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600 text-sm">
                      <Clock className="w-4 h-4 text-primary" />
                      <span>{schedule.time}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600 text-sm">
                      <Users className="w-4 h-4 text-primary" />
                      <span>{schedule.registered}/{schedule.slots} siswa terdaftar</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${isFull ? "bg-red-500" : isAlmostFull ? "bg-yellow-500" : "bg-secondary"}`}
                        style={{ width: `${(schedule.registered / schedule.slots) * 100}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center pt-4 border-t border-gray-100 mb-4">
                    <div>
                      <p className="text-xs text-gray-500">Pengajar</p>
                      <p className="font-medium text-dark">{schedule.teacher}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-500">Mulai</p>
                      <p className="font-medium text-dark">{schedule.startDate}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <p className="text-xl font-bold text-primary">{schedule.price}</p>
                    <Link
                      href={isFull ? "#" : "/pendaftaran"}
                      className={`inline-flex items-center gap-1 font-semibold px-4 py-2 rounded-lg transition-colors ${isFull ? "bg-gray-200 text-gray-500 cursor-not-allowed" : "bg-primary text-white hover:bg-primary-dark"}`}
                    >
                      {isFull ? "Penuh" : "Daftar"} {!isFull && <ArrowRight className="w-4 h-4" />}
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Jadwal Info */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-dark mb-4">
              Informasi Jadwal Kelas
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Beberapa hal yang perlu Anda ketahui tentang jadwal kelas kami
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="card">
              <h3 className="text-lg font-heading font-bold text-dark mb-4">Waktu Kelas</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <Clock className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-dark">Kelas Pagi</p>
                    <p className="text-sm text-gray-600">08:00 - 10:00 WIB</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <Clock className="w-5 h-5 text-secondary" />
                  <div>
                    <p className="font-medium text-dark">Kelas Siang</p>
                    <p className="text-sm text-gray-600">13:00 - 15:00 WIB</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <Clock className="w-5 h-5 text-accent" />
                  <div>
                    <p className="font-medium text-dark">Kelas Malam</p>
                    <p className="text-sm text-gray-600">18:00 - 20:00 WIB</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <h3 className="text-lg font-heading font-bold text-dark mb-4">Periode Kelas</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                  <Calendar className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium text-dark">Periode Reguler</p>
                    <p className="text-sm text-gray-600">3 bulan (12 minggu) per level</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                  <Calendar className="w-5 h-5 text-secondary mt-0.5" />
                  <div>
                    <p className="font-medium text-dark">Periode Intensif</p>
                    <p className="text-sm text-gray-600">1.5 bulan (6 minggu) per level</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                  <Calendar className="w-5 h-5 text-accent mt-0.5" />
                  <div>
                    <p className="font-medium text-dark">Batch Baru</p>
                    <p className="text-sm text-gray-600">Setiap awal bulan</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Batch */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-dark mb-4">
              Batch Terdekat
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Daftar sekarang untuk mengamankan tempat Anda di batch berikutnya
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="card border-2 border-primary/20 hover:border-primary transition-colors">
              <div className="flex items-center justify-between mb-4">
                <span className="bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full">JANUARI 2025</span>
                <span className="text-secondary font-bold">Tersedia</span>
              </div>
              <h3 className="text-lg font-heading font-bold text-dark mb-2">Batch 1 - Januari</h3>
              <p className="text-gray-600 text-sm mb-4">Mulai: 6 Januari 2025</p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-secondary" /> Semua level tersedia
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-secondary" /> 6 program bahasa
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-secondary" /> Early bird discount 15%
                </li>
              </ul>
              <Link href="/pendaftaran" className="btn-primary w-full text-center">Daftar Sekarang</Link>
            </div>

            <div className="card border-2 border-secondary/20 hover:border-secondary transition-colors">
              <div className="flex items-center justify-between mb-4">
                <span className="bg-secondary/10 text-secondary text-xs font-bold px-3 py-1 rounded-full">FEBRUARI 2025</span>
                <span className="text-secondary font-bold">Tersedia</span>
              </div>
              <h3 className="text-lg font-heading font-bold text-dark mb-2">Batch 2 - Februari</h3>
              <p className="text-gray-600 text-sm mb-4">Mulai: 3 Februari 2025</p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-secondary" /> Semua level tersedia
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-secondary" /> 6 program bahasa
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-secondary" /> Pendaftaran dibuka
                </li>
              </ul>
              <Link href="/pendaftaran" className="btn-outline w-full text-center">Daftar Sekarang</Link>
            </div>

            <div className="card border-2 border-accent/20 hover:border-accent transition-colors">
              <div className="flex items-center justify-between mb-4">
                <span className="bg-accent/10 text-accent text-xs font-bold px-3 py-1 rounded-full">MARET 2025</span>
                <span className="text-gray-500 font-bold">Segera</span>
              </div>
              <h3 className="text-lg font-heading font-bold text-dark mb-2">Batch 3 - Maret</h3>
              <p className="text-gray-600 text-sm mb-4">Mulai: 3 Maret 2025</p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-secondary" /> Semua level tersedia
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-secondary" /> 6 program bahasa
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <Clock className="w-4 h-4 text-accent" /> Pendaftaran segera dibuka
                </li>
              </ul>
              <button disabled className="btn-outline w-full text-center opacity-50 cursor-not-allowed">Segera Dibuka</button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-primary to-secondary">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-4">
            Tidak Menemukan Jadwal yang Sesuai?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Hubungi kami untuk mengatur jadwal kelas privat yang sesuai dengan waktu Anda
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/kontak" className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-primary font-semibold px-8 py-4 rounded-lg transition-colors">
              Hubungi Kami
            </Link>
            <Link href="/pendaftaran" className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-4 rounded-lg transition-colors">
              Daftar Kelas Privat <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
