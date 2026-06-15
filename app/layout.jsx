import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Strides Running Club',
  description: 'A social, casual distance running club at UCSD for runners of all skill levels.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-black min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
