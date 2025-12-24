import Link from "next/link";
import { Calendar, Clock, Users, ArrowRight } from "lucide-react";
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
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Temukan jadwal kelas yang sesuai dengan waktu dan kebutuhan Anda
          </p>
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

      {/* CTA */}
      <section className="section-padding bg-background">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-dark mb-4">
            Tidak Menemukan Jadwal yang Sesuai?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Hubungi kami untuk mengatur jadwal kelas privat yang sesuai dengan waktu Anda
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/kontak" className="btn-primary">Hubungi Kami</Link>
            <Link href="/pendaftaran" className="btn-outline">Daftar Kelas Privat</Link>
          </div>
        </div>
      </section>
    </>
  );
}
