import Link from 'next/link';
import ArticleCard from './ArticleCard';
import type { Article } from '@/lib/articles';

type Props = {
  title: string;
  articles: Article[] | null;
  moreHref: string;
  moreLabel: string;
  bg?: string;
};

export default function ArticleSection({
  title,
  articles,
  moreHref,
  moreLabel,
  bg = 'bg-white',
}: Props) {
  return (
    <section className={`py-16 ${bg}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
          <Link
            href={moreHref}
            className="text-primary hover:text-primary-dark text-sm font-medium transition-colors"
          >
            {moreLabel} →
          </Link>
        </div>

        {articles === null ? (
          <div className="text-center py-12 bg-red-50 rounded-2xl border border-red-100">
            <p className="text-red-500">記事の取得に失敗しました</p>
          </div>
        ) : articles.length === 0 ? (
          <div className="text-center py-12 bg-gray-50 rounded-2xl border border-gray-100">
            <p className="text-gray-400">記事はまだありません</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {articles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
