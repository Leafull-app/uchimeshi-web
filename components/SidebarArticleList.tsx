import Image from 'next/image';
import Link from 'next/link';
import type { Article } from '@/lib/articles';
import { categoryLabels } from '@/components/ArticleCard';

function isValidUrl(url: string): boolean {
  try {
    const parsed = new URL(url);
    return parsed.protocol === 'http:' || parsed.protocol === 'https:';
  } catch {
    return false;
  }
}

export default function SidebarArticleList({
  title,
  articles,
}: {
  title: string;
  articles: Article[];
}) {
  if (articles.length === 0) return null;
  return (
    <div>
      <h3 className="font-semibold text-gray-900 mb-4 text-sm">{title}</h3>
      <div className="space-y-5">
        {articles.map((article) => (
          <Link key={article.id} href={`/articles/${article.id}`} className="block group">
            <div className="relative w-full h-36 rounded-xl overflow-hidden bg-orange-50 mb-2">
              {article.thumbnailURL && isValidUrl(article.thumbnailURL) ? (
                <Image
                  src={article.thumbnailURL}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 1024px) 100vw, 224px"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-3xl">🍳</div>
              )}
            </div>
            <span className="text-xs bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full font-medium">
              {categoryLabels[article.category] ?? article.category}
            </span>
            <p className="text-xs text-gray-800 font-semibold line-clamp-2 mt-1.5 group-hover:text-primary transition-colors leading-snug">
              {article.title}
            </p>
            <p className="text-xs text-gray-400 line-clamp-2 mt-1 leading-relaxed">
              {article.summary}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
