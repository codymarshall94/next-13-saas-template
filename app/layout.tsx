import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { siteConfig } from '@/config/site';
import SupabaseProvider from '@/providers/supabase';
import { ThemeProvider } from '@/providers/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ThemeProvider attribute='class' defaultTheme='system'>
          <SupabaseProvider>{children}</SupabaseProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
