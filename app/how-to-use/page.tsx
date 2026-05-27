import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'アプリの使い方',
  description: 'うちメシPlusの使い方をステップごとに解説します。',
  openGraph: {
    title: 'アプリの使い方 | うちメシPlus',
    description: 'うちメシPlusの使い方をステップごとに解説します。',
    url: 'https://uchimeshi.app/how-to-use',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'アプリの使い方 | うちメシPlus',
    description: 'うちメシPlusの使い方をステップごとに解説します。',
  },
};

const steps = [
  {
    step: 1,
    icon: '📲',
    title: 'アプリをダウンロードする',
    description:
      'App Store または Google Play からうちメシPlusをダウンロードしてインストールします。アカウント登録は不要で、すぐにご利用いただけます。',
  },
  {
    step: 2,
    icon: '🧊',
    title: '食材を登録する',
    description:
      '食材の名前・購入日・賞味期限・価格・数量を入力して登録します。冷蔵庫・冷凍庫・常温棚など、保管場所ごとに分けて管理できます。バーコードスキャン（プレミアム）を使えばさらに簡単に登録できます。',
  },
  {
    step: 3,
    icon: '🍳',
    title: '食材を使用する',
    description:
      '料理をしたら使った食材と量を記録します。使用量に応じてコストが自動計算され、残りの在庫も自動で更新されます。',
  },
  {
    step: 4,
    icon: '📅',
    title: 'カレンダーで食費を確認する',
    description:
      '毎日の食費がカレンダーに記録されます。月ごとの合計や推移を一覧で確認でき、節約目標の達成状況が一目でわかります（プレミアム機能）。',
  },
  {
    step: 5,
    icon: '🔔',
    title: '賞味期限の通知を受け取る',
    description:
      '食材の賞味期限が近づくと自動で通知が届きます。食品ロスを防いで、食材を無駄なく使い切りましょう。',
  },
  {
    step: 6,
    icon: '📊',
    title: '食費レポートを活用する',
    description:
      '週・月・年ごとの食費レポートで支出の傾向を分析できます。どのカテゴリで使いすぎているかを把握して、無理のない節約計画を立てましょう（プレミアム機能）。',
  },
];

const tips = [
  {
    icon: '💡',
    title: '買い物前に在庫を確認',
    description: '買い物前にアプリで在庫を確認することで、二重買いや買い忘れを防げます。',
  },
  {
    icon: '💡',
    title: '賞味期限が近い食材を優先',
    description: '期限が近い食材をアプリで確認して、優先的に使うことで食品ロスを減らせます。',
  },
  {
    icon: '💡',
    title: '月初に予算を設定',
    description: '月の食費予算をメモしておき、レポートと照らし合わせることで節約の意識が高まります。',
  },
];

export default function HowToUsePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* ページヘッダー */}
      <div className="text-center mb-12">
        <Link
          href="/about"
          className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-primary transition-colors mb-6"
        >
          ← アプリ紹介に戻る
        </Link>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          アプリの使い方
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          うちメシPlusを使いこなして、毎日の食材管理と食費節約を始めましょう。
        </p>
      </div>

      {/* ステップ */}
      <section className="mb-16">
        <h2 className="text-xl font-bold text-gray-900 mb-8">はじめ方</h2>
        <ol className="space-y-6">
          {steps.map((item) => (
            <li key={item.step} className="flex gap-5">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary text-white flex items-center justify-center font-bold text-sm">
                {item.step}
              </div>
              <div className="bg-white rounded-2xl p-5 shadow-sm border border-orange-50 flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">{item.icon}</span>
                  <h3 className="font-semibold text-gray-900">{item.title}</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* 活用のコツ */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-gray-900 mb-6">活用のコツ</h2>
        <div className="space-y-4">
          {tips.map((tip) => (
            <div
              key={tip.title}
              className="flex gap-4 bg-orange-50 rounded-2xl p-5"
            >
              <span className="text-xl flex-shrink-0">{tip.icon}</span>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">{tip.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {tip.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="text-center">
        <p className="text-gray-600 mb-6">さっそくうちメシPlusを使ってみましょう</p>
        <a
          href="#"
          className="inline-block bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-xl font-medium hover:opacity-90 transition-opacity"
        >
          無料でダウンロード
        </a>
      </div>
    </div>
  );
}
