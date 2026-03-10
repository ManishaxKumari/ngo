import { Hero } from "@/Components/hero";
import { Features } from "@/Components/features";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
     <Hero />
     <Features />
    </main>
  );
}