import type { Metadata } from 'next';
import CategoryPageClient from '@/components/CategoryPageClient';

export const metadata: Metadata = {
  title: '節約術｜うちメシPlus',
  description: '食費を賢く節約するテクニックをご紹介します。',
};

export default function SavingPage() {
  return (
    <CategoryPageClient
      category="saving"
      title="節約術"
      emptyMessage="節約術の記事を準備中です"
    />
  );
}
