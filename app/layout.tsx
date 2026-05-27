import type { Metadata } from 'next';
import { Noto_Sans_JP } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const notoSansJP = Noto_Sans_JP({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-noto-sans-jp',
});

export const metadata: Metadata = {
  title: {
    default: 'うちメシPlus - 食材管理・食費節約アプリ',
    template: '%s | うちメシPlus',
  },
  description: 'うちメシPlusは食材管理・食費節約アプリです。冷蔵庫の食材を賢く管理して、食品ロスと食費をゼロに。',
  openGraph: {
    title: 'うちメシPlus - 食材管理・食費節約アプリ',
    description: '冷蔵庫の食材を賢く管理して食品ロスと食費をゼロに',
    type: 'website',
    locale: 'ja_JP',
    siteName: 'うちメシPlus公式サイト',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'うちメシPlus - 食材管理・食費節約アプリ',
    description: '冷蔵庫の食材を賢く管理して食品ロスと食費をゼロに',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-app-bg text-gray-900">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
