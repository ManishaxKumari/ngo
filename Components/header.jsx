import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header className="bg-transparent border-b border-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold">
            S
          </div>
          {/* <span className="font-bold text-lg text-green-500"></span> */}
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#home" className="text-gray-600 hover:text-gray-900 text-sm">Home</Link>
          <Link href="#about" className="text-gray-600 hover:text-gray-900 text-sm">About</Link>
          <Link href="#projects" className="text-gray-600 hover:text-gray-900 text-sm">Projects</Link>
          <Link href="#contact" className="text-gray-600 hover:text-gray-900 text-sm">Contact</Link>
        </nav>

        <Button className="bg-yellow-400 hover:bg-yellow-500 text-white rounded-full px-6">
          Donate
        </Button>
      </div>
    </header>
  );
}
