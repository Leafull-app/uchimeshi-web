import type { Metadata } from 'next';
import CategoryPageClient from '@/components/CategoryPageClient';

export const metadata: Metadata = {
  title: '簡単レシピ｜うちメシPlus',
  description: 'うちメシPlusが厳選した家庭料理の簡単レシピをご紹介します。',
};

export default function RecipePage() {
  return (
    <CategoryPageClient
      category="recipe"
      title="簡単レシピ"
      emptyMessage="簡単レシピ記事を準備中です"
    />
  );
}
