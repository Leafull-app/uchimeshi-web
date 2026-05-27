import type { Metadata } from 'next';
import CategoryPageClient from '@/components/CategoryPageClient';

export const metadata: Metadata = {
  title: '無添加・オーガニック｜うちメシPlus',
  description: '無添加・オーガニック食材を使った料理や、健康的な食生活のヒントをご紹介します。',
};

export default function SpecialtyPage() {
  return (
    <CategoryPageClient
      category="specialty"
      title="無添加・オーガニック"
      emptyMessage="無添加・オーガニックの記事を準備中です"
    />
  );
}
