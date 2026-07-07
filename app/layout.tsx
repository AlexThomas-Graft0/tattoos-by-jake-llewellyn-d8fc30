import { CookieBanner } from "@/components/CookieBanner";
import './globals.css';
import { Playfair_Display, JetBrains_Mono } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-playfair',
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata = {
  title: 'Tattoos by Jake Llewellyn',
  description: 'Tattoos by Jake Llewellyn',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${jetbrains.variable}`}>
      <body className="bg-white text-[#111827] min-h-screen antialiased selection:bg-blue-100">
        {children}
              <CookieBanner />
      </body>
    </html>
  );
}