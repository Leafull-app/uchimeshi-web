import Image from 'next/image';
import Link from 'next/link';
import type { Article } from '@/lib/articles';

export const categoryLabels: Record<string, string> = {
  recipe: '簡単レシピ',
  saving: '節約術',
  storage: '食材管理',
  specialty: '無添加・オーガニック',
};

const categoryColors: Record<string, string> = {
  recipe: 'bg-orange-100 text-orange-700',
  saving: 'bg-green-100 text-green-700',
  storage: 'bg-blue-100 text-blue-700',
  specialty: 'bg-emerald-100 text-emerald-700',
};

function isValidUrl(url: string): boolean {
  try {
    const parsed = new URL(url);
    return parsed.protocol === 'http:' || parsed.protocol === 'https:';
  } catch {
    return false;
  }
}

export default function ArticleCard({ article }: { article: Article }) {
  const formattedDate =
    article.createdAt instanceof Date
      ? article.createdAt.toLocaleDateString('ja-JP', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })
      : '';

  return (
    <Link href={`/articles/${article.id}`} className="block group h-full">
      <article className="bg-white rounded-2xl overflow-hidden shadow-sm border border-orange-50 hover:shadow-md transition-shadow h-full flex flex-col">
        <div className="relative h-48 bg-gray-100 flex-shrink-0">
          {article.thumbnailURL && isValidUrl(article.thumbnailURL) ? (
            <Image
              src={article.thumbnailURL}
              alt={article.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-orange-50">
              <span className="text-5xl">🍳</span>
            </div>
          )}
        </div>

        <div className="p-5 flex flex-col flex-1">
          <div className="flex items-center gap-2 mb-3">
            <span
              className={`text-xs px-2.5 py-1 rounded-full font-medium ${categoryColors[article.category] ?? 'bg-gray-100 text-gray-600'}`}
            >
              {categoryLabels[article.category] ?? article.category}
            </span>
            <span className="text-xs text-gray-400">{formattedDate}</span>
          </div>

          <h3 className="text-gray-900 font-semibold mb-2 line-clamp-2 group-hover:text-primary transition-colors leading-snug">
            {article.title}
          </h3>

          <p className="text-gray-500 text-sm line-clamp-3 flex-1 leading-relaxed">
            {article.summary}
          </p>
        </div>
      </article>
    </Link>
  );
}
