import type { Metadata } from 'next';
import Link from 'next/link';
import DownloadBanner from '@/components/DownloadBanner';

export const metadata: Metadata = {
  title: 'アプリ',
  description:
    'うちメシPlusの機能詳細と料金プランをご紹介します。基本機能は無料でご利用いただけます。',
  openGraph: {
    title: 'アプリ | うちメシPlus',
    description: 'うちメシPlusの機能詳細と料金プランをご紹介します。基本機能は無料でご利用いただけます。',
    url: 'https://uchimeshi.org/about',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'アプリ | うちメシPlus',
    description: 'うちメシPlusの機能詳細と料金プランをご紹介します。基本機能は無料でご利用いただけます。',
  },
};

const features = [
  {
    icon: '🧊',
    title: '食材管理',
    description:
      '冷蔵庫・冷凍庫・常温棚ごとに食材を登録・管理できます。食材の在庫状況が一目でわかり、買い物の重複や買い忘れを防ぎます。',
  },
  {
    icon: '💰',
    title: '食費計算',
    description:
      '食材を使った分だけコストを自動計算します。食材ごとの単価から使用量に応じた費用が算出され、食費の見える化を実現します。',
  },
  {
    icon: '📅',
    title: 'カレンダー機能',
    description:
      '毎日の食費をカレンダーに記録・表示します。月ごとの食費の推移を一覧で確認でき、節約目標の達成状況を把握できます。',
  },
  {
    icon: '🔔',
    title: '賞味期限通知',
    description:
      '食材の賞味期限が近づくと通知でお知らせします。期限切れによる食品ロスを防ぎ、食材を無駄なく使い切れます。',
  },
  {
    icon: '📊',
    title: '食費レポート',
    description:
      '週・月・年ごとの食費レポートを確認できます。食費の傾向を分析して、無駄遣いを見つけやすくします。',
  },
  {
    icon: '🔍',
    title: 'バーコードスキャン',
    description:
      '商品のバーコードをスキャンするだけで食材を簡単登録。入力の手間を大幅に削減します（プレミアム機能）。',
  },
];

const freeFeatures = [
  '食材登録（最大20品）',
  '冷蔵庫・冷凍庫・常温棚の管理',
  '賞味期限通知',
  '月間食費の確認',
];

const premiumFeatures = [
  'すべての無料機能',
  '食材登録（無制限）',
  '詳細な食費計算',
  'カレンダー・食費レポート',
  'バーコードスキャン',
  '広告非表示',
];

export default function AboutPage() {
  return (
    <>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* ページヘッダー */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            アプリ
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            うちメシPlusは食材管理・食費節約のためのスマートなキッチンアプリです。
            毎日の食生活をより豊かで経済的にサポートします。
          </p>
          <div className="mt-8">
            <Link
              href="/how-to-use"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-xl font-medium hover:opacity-90 transition-opacity"
            >
              アプリの使い方を見る →
            </Link>
          </div>
        </div>

        {/* 機能一覧 */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-3 text-center">
            機能一覧
          </h2>
          <p className="text-center text-gray-500 mb-10">
            食材管理に必要なすべてがひとつのアプリに
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-2xl p-6 shadow-sm border border-orange-50"
              >
                <div className="text-3xl mb-3">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 料金プラン比較 */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-3 text-center">
            料金プラン
          </h2>
          <p className="text-center text-gray-500 mb-10">
            基本機能は完全無料。プレミアムプランで全機能を解放。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* 無料プラン */}
            <div className="bg-white rounded-2xl p-8 border-2 border-gray-100 shadow-sm">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  無料プラン
                </h3>
                <div className="flex items-end gap-1">
                  <span className="text-4xl font-bold text-gray-900">¥0</span>
                  <span className="text-gray-500 mb-1">/ 月</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                {freeFeatures.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-gray-700"
                  >
                    <span className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0 text-xs font-bold">
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="block text-center border-2 border-primary text-primary py-3 rounded-xl font-medium hover:bg-primary hover:text-white transition-colors"
              >
                無料でダウンロード
              </a>
            </div>

            {/* プレミアムプラン */}
            <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 shadow-lg">
              <div className="mb-6">
                <div className="inline-block bg-white/20 text-white text-xs px-3 py-1 rounded-full mb-2 font-medium">
                  おすすめ
                </div>
                <h3 className="text-xl font-bold text-white mb-1">
                  プレミアムプラン
                </h3>
                <div className="flex items-end gap-1">
                  <span className="text-4xl font-bold text-white">¥300</span>
                  <span className="text-white/80 mb-1">/ 月</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                {premiumFeatures.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-white"
                  >
                    <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 text-xs font-bold">
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="block text-center bg-white text-primary py-3 rounded-xl font-medium hover:bg-white/90 transition-colors"
              >
                プレミアムで始める
              </a>
            </div>
          </div>

          {/* 比較表 */}
          <div className="mt-10 max-w-3xl mx-auto overflow-x-auto">
            <table className="w-full bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left p-4 text-sm font-semibold text-gray-700">機能</th>
                  <th className="text-center p-4 text-sm font-semibold text-gray-700">無料</th>
                  <th className="text-center p-4 text-sm font-semibold text-primary">プレミアム</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {[
                  ['食材登録数', '最大20品', '無制限'],
                  ['賞味期限通知', '✓', '✓'],
                  ['食費計算', '基本', '詳細'],
                  ['カレンダー', '—', '✓'],
                  ['食費レポート', '—', '✓'],
                  ['バーコードスキャン', '—', '✓'],
                  ['広告', 'あり', 'なし'],
                ].map(([feature, free, premium]) => (
                  <tr key={feature}>
                    <td className="p-4 text-sm text-gray-700">{feature}</td>
                    <td className="p-4 text-sm text-center text-gray-500">{free}</td>
                    <td className="p-4 text-sm text-center text-primary font-medium">{premium}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>

      <DownloadBanner />
    </>
  );
}
