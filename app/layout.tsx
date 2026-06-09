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
    default: 'ウチメシ｜食材管理・食費節約アプリ',
    template: '%s | うちメシPlus',
  },
  description: '冷蔵庫の食材を賢く管理して食品ロスと食費をゼロに。食材の在庫管理・賞味期限通知・食費計算をまとめて管理できるスマートなキッチンアプリです。',
  openGraph: {
    title: 'ウチメシ｜食材管理・食費節約アプリ',
    description: '冷蔵庫の食材を賢く管理して食品ロスと食費をゼロに。',
    url: 'https://uchimeshi.org',
    siteName: 'ウチメシ',
    images: [
      {
        url: 'https://uchimeshi.org/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ウチメシ',
      },
    ],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ウチメシ｜食材管理・食費節約アプリ',
    description: '冷蔵庫の食材を賢く管理して食品ロスと食費をゼロに。',
    images: ['https://uchimeshi.org/og-image.png'],
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
