import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Header } from '@/Components/header';

export function Hero() {
  return (
    <section
      className="relative min-h-[100vh] bg-cover bg-center"
      style={{
        backgroundImage: 'url(/hero-section-bg.svg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
        <Header/>
      {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center">
        <div className="max-w-2xl w-full">
          <div className="mb-6">
            <span className="text-primary font-semibold text-lg">Together</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mt-2">
              <span className="text-[#f77336]">Together</span> We Will <br/>Rebuild Our Future
            </h1>
          </div>
          <p className="text-gray-700 text-lg mb-8 leading-relaxed">
            Empowering communities through sustainable projects, education, and humanitarian support across Africa.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-3 text-base font-semibold">
              Donate Now
            </Button>
            <Button variant="outline" className="rounded-full px-8 py-3 text-base font-semibold">
              Learn More
            </Button>
          </div>
        </div>
      </div> */}
    </section>
  );
}
