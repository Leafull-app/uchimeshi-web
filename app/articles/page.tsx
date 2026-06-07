import type { Metadata } from 'next';
import ArticlesClient from '@/components/ArticlesClient';

export const metadata: Metadata = {
  title: '記事一覧',
  description:
    'うちメシPlusの記事一覧。レシピ・節約術・食材管理など食に関する情報をお届けします。',
  openGraph: {
    title: '記事一覧 | うちメシPlus',
    description: 'うちメシPlusの記事一覧。レシピ・節約術・食材管理など食に関する情報をお届けします。',
    url: 'https://uchimeshi.org/articles',
  },
  twitter: {
    card: 'summary_large_image',
    title: '記事一覧 | うちメシPlus',
    description: 'うちメシPlusの記事一覧。レシピ・節約術・食材管理など食に関する情報をお届けします。',
  },
};

export default function ArticlesPage() {
  return <ArticlesClient />;
}
