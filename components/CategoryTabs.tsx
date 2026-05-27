'use client';

import { useRouter, useSearchParams } from 'next/navigation';

const categories = [
  { value: '', label: 'すべて' },
  { value: 'recipe', label: 'レシピ' },
  { value: 'saving', label: '節約術' },
  { value: 'goods', label: '便利グッズ' },
  { value: 'specialty', label: '特産品' },
  { value: 'news', label: 'お知らせ' },
];

export default function CategoryTabs() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get('category') ?? '';

  const handleChange = (value: string) => {
    router.push(value ? `/articles?category=${value}` : '/articles');
  };

  return (
    <div className="flex flex-wrap gap-2" role="tablist" aria-label="カテゴリ絞り込み">
      {categories.map(({ value, label }) => (
        <button
          key={value}
          role="tab"
          aria-selected={currentCategory === value}
          onClick={() => handleChange(value)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            currentCategory === value
              ? 'bg-primary text-white shadow-sm'
              : 'bg-white text-gray-600 hover:bg-orange-50 border border-gray-200'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
