import type { Metadata } from 'next';
import HeroSection from '@/components/HeroSection';
import ArticleSection from '@/components/ArticleSection';
import AppIntroSection from '@/components/AppIntroSection';
import { getLatestArticles, getArticlesByCategory } from '@/lib/articles';


export const metadata: Metadata = {
  title: 'うちメシPlus - 冷蔵庫の食材を賢く管理して食品ロスと食費をゼロに',
  description:
    'うちメシPlusは食材管理・食費節約アプリです。冷蔵庫・冷凍庫・常温棚の食材を一元管理し、食品ロスと食費削減を実現します。',
  openGraph: {
    title: 'うちメシPlus - 食材管理・食費節約アプリ',
    description: '冷蔵庫の食材を賢く管理して食品ロスと食費をゼロに',
  },
};

export default async function HomePage() {
  const [newArticles, recipeArticles, savingArticles, organicArticles] = await Promise.all([
    getLatestArticles(4),
    getArticlesByCategory('recipe', 4),
    getArticlesByCategory('saving', 4),
    getArticlesByCategory('specialty', 4),
  ]);

  return (
    <>
      {/* ① ヒーローエリア */}
      <HeroSection />

      {/* ② 新着記事 */}
      <ArticleSection
        title="新着記事"
        articles={newArticles}
        moreHref="/articles"
        moreLabel="記事一覧をみる"
        bg="bg-white"
      />

      {/* ③ 簡単レシピ */}
      <ArticleSection
        title="簡単レシピ"
        articles={recipeArticles}
        moreHref="/recipe"
        moreLabel="簡単レシピをもっとみる"
        bg="bg-app-bg"
      />

      {/* ④ 節約術 */}
      <ArticleSection
        title="節約術"
        articles={savingArticles}
        moreHref="/saving"
        moreLabel="節約術をもっとみる"
        bg="bg-white"
      />

      {/* ⑤ 無添加・オーガニック */}
      <ArticleSection
        title="無添加・オーガニック"
        articles={organicArticles}
        moreHref="/specialty"
        moreLabel="無添加・オーガニックをもっとみる"
        bg="bg-app-bg"
      />

      {/* ⑥ アプリ紹介 */}
      <AppIntroSection />
    </>
  );
}
