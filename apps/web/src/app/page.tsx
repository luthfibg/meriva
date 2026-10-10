import { redirect } from "next/navigation";

// Halaman utama langsung ke ruang kerja; pengecekan login ada di layout dashboard.
export default function Home() {
  redirect("/events");
}
