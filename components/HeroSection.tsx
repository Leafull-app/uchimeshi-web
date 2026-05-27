import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-app-bg via-orange-50 to-yellow-50 py-10 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-8">
          食から始まる、賢い暮らし。
        </h1>

        <p className="text-base md:text-lg text-gray-600 mb-4 max-w-2xl mx-auto leading-relaxed">
          うちメシPlusは、食材管理・レシピ・節約術を通じて一般家庭の食品ロス削減と食費節約をサポートするメディアです。
        </p>

        <p className="text-base md:text-lg text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          そのうちメシPlusが開発したアプリ『うちメシPlus』は冷蔵庫の在庫管理・賞味/消費期限通知・食費計算をまとめて管理できるスマートなキッチンアプリです。毎日の食生活をもっと賢く、経済的に。
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/articles"
            className="px-8 py-3 bg-primary text-white rounded-xl font-semibold text-base hover:bg-orange-600 transition-colors"
          >
            記事を読む
          </Link>
          <Link
            href="/about"
            className="px-8 py-3 bg-transparent text-primary border-2 border-primary rounded-xl font-semibold text-base hover:bg-orange-50 transition-colors"
          >
            アプリをみる
          </Link>
        </div>
      </div>
    </section>
  );
}
