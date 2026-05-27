'use client';

import { useState, useMemo, useEffect } from 'react';
import type { Article } from '@/lib/articles';
import { getAllArticles } from '@/lib/articles';
import ArticleCard from './ArticleCard';
import SidebarArticleList from './SidebarArticleList';

type CategoryPageClientProps = {
  category: 'recipe' | 'saving' | 'specialty';
  title: string;
  emptyMessage: string;
};

export default function CategoryPageClient({ category, title, emptyMessage }: CategoryPageClientProps) {
  const [allArticles, setAllArticles] = useState<Article[] | null | undefined>(undefined);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    getAllArticles().then(setAllArticles);
  }, []);

  const articles = useMemo(() => {
    if (!allArticles) return allArticles ?? null;
    return allArticles.filter((a) => a.category === category);
  }, [allArticles, category]);

  const filteredArticles = useMemo(() => {
    if (!articles) return articles;
    const q = searchQuery.toLowerCase();
    if (!q) return articles;
    return articles.filter(
      (a) =>
        a.title.toLowerCase().includes(q) ||
        a.summary.toLowerCase().includes(q),
    );
  }, [articles, searchQuery]);

  const newArticles = useMemo(() => (allArticles ?? []).slice(0, 3), [allArticles]);
  const popularArticles = useMemo(
    () => [...(allArticles ?? [])].sort((a, b) => b.views - a.views).slice(0, 3),
    [allArticles],
  );

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">{title}</h1>

      {/* 検索窓 */}
      <div className="relative mb-6">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <input
          type="search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="記事を検索する"
          className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
        />
      </div>

      {/* スマホ：新着・人気 */}
      <div className="block lg:hidden space-y-4 mb-6">
        {newArticles.length > 0 && (
          <div className="bg-white rounded-xl p-4 border border-orange-50">
            <SidebarArticleList title="新着記事" articles={newArticles} />
          </div>
        )}
        {popularArticles.length > 0 && (
          <div className="bg-white rounded-xl p-4 border border-orange-50">
            <SidebarArticleList title="人気記事" articles={popularArticles} />
          </div>
        )}
      </div>

      {/* メインコンテンツ + サイドバー */}
      <div className="flex gap-8 items-start">
        {/* 記事グリッド */}
        <div className="flex-1 min-w-0">
          {filteredArticles === undefined ? (
            <div className="text-center py-20">
              <p className="text-gray-400">読み込み中...</p>
            </div>
          ) : filteredArticles === null ? (
            <div className="text-center py-20 bg-red-50 rounded-2xl border border-red-100">
              <p className="text-red-500 font-medium">記事の取得に失敗しました</p>
              <p className="text-red-400 text-sm mt-1">しばらく時間をおいて再度お試しください</p>
            </div>
          ) : filteredArticles.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-2xl border border-orange-50">
              <p className="text-gray-400 text-lg">
                {searchQuery ? '該当する記事が見つかりませんでした' : emptyMessage}
              </p>
              <p className="text-gray-300 text-sm mt-1">
                {searchQuery ? '検索条件を変えてお試しください' : 'しばらくお待ちください'}
              </p>
            </div>
          ) : (
            <>
              <p className="text-sm text-gray-400 mb-4">{filteredArticles.length}件の記事</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredArticles.map((article) => (
                  <ArticleCard key={article.id} article={article} />
                ))}
              </div>
            </>
          )}
        </div>

        {/* PC サイドバー */}
        <aside className="hidden lg:block w-64 shrink-0">
          <div className="bg-white rounded-2xl p-5 border border-orange-50 sticky top-24 space-y-6">
            {newArticles.length > 0 && (
              <SidebarArticleList title="新着記事" articles={newArticles} />
            )}
            {popularArticles.length > 0 && (
              <>
                <hr className="border-gray-100" />
                <SidebarArticleList title="人気記事" articles={popularArticles} />
              </>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
}
