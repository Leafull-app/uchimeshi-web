import { notFound } from 'next/navigation';
import Image from 'next/image';
import type { Metadata } from 'next';
import { getArticleById, getArticlesByCategory, getAllArticles } from '@/lib/articles';
import ArticleCard from '@/components/ArticleCard';
import MarkdownRenderer from '@/components/MarkdownRenderer';
import ShareButtons from '@/components/ShareButtons';
import ViewCounter from '@/components/ViewCounter';
import SidebarArticleList from '@/components/SidebarArticleList';
import { categoryLabels } from '@/components/ArticleCard';

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const article = await getArticleById(id);
  if (!article) return { title: '記事が見つかりません' };
  return {
    title: article.title,
    description: article.summary,
    openGraph: {
      title: article.title,
      description: article.summary,
      images: article.thumbnailURL ? [article.thumbnailURL] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.summary,
    },
  };
}

function isValidUrl(url: string): boolean {
  try {
    const parsed = new URL(url);
    return parsed.protocol === 'http:' || parsed.protocol === 'https:';
  } catch {
    return false;
  }
}

export default async function ArticleDetailPage({ params }: Props) {
  const { id } = await params;
  const [article, allArticles] = await Promise.all([
    getArticleById(id),
    getAllArticles(),
  ]);

  if (!article) notFound();

  const relatedArticles = await getArticlesByCategory(article.category);
  const related = (relatedArticles ?? []).filter((a) => a.id !== article.id).slice(0, 3);

  const allSorted = allArticles ?? [];
  const newArticles = allSorted.slice(0, 3);
  const popularArticles = [...allSorted].sort((a, b) => b.views - a.views).slice(0, 3);

  const formattedDate =
    article.createdAt instanceof Date
      ? article.createdAt.toLocaleDateString('ja-JP', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })
      : '';

  return (
    <>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex gap-10 items-start">
          {/* 記事本文 */}
          <article className="flex-1 min-w-0">
            {/* ヘッダー */}
            <header className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-medium">
                  {categoryLabels[article.category] ?? article.category}
                </span>
                <time className="text-sm text-gray-400">{formattedDate}</time>
              </div>

              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-6">
                {article.title}
              </h1>

              {article.thumbnailURL && isValidUrl(article.thumbnailURL) && (
                <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden">
                  <Image
                    src={article.thumbnailURL}
                    alt={article.title}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, 768px"
                  />
                </div>
              )}
            </header>

            {/* ビューカウンター（非表示） */}
            <ViewCounter articleId={article.id} />

            {/* 本文 */}
            <MarkdownRenderer content={article.body} />

            {/* SNSシェアボタン */}
            <ShareButtons url={`https://uchimeshi.app/articles/${article.id}`} title={article.title} />
          </article>

          {/* PC サイドバー */}
          <aside className="hidden lg:block w-64 shrink-0 sticky top-24 space-y-6">
            {newArticles.length > 0 && (
              <div className="bg-white rounded-2xl p-5 border border-orange-50">
                <SidebarArticleList title="新着記事" articles={newArticles} />
              </div>
            )}
            {popularArticles.length > 0 && (
              <div className="bg-white rounded-2xl p-5 border border-orange-50">
                <SidebarArticleList title="人気記事" articles={popularArticles} />
              </div>
            )}
          </aside>
        </div>

        {/* スマホ：新着・人気（本文下） */}
        <div className="block lg:hidden mt-10 space-y-6">
          {newArticles.length > 0 && (
            <div className="bg-white rounded-2xl p-5 border border-orange-50">
              <SidebarArticleList title="新着記事" articles={newArticles} />
            </div>
          )}
          {popularArticles.length > 0 && (
            <div className="bg-white rounded-2xl p-5 border border-orange-50">
              <SidebarArticleList title="人気記事" articles={popularArticles} />
            </div>
          )}
        </div>
      </div>

      {/* 関連記事 */}
      {related.length > 0 && (
        <section className="bg-white py-12 border-t border-gray-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">関連記事</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((a) => (
                <ArticleCard key={a.id} article={a} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
