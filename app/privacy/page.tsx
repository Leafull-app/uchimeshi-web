import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'プライバシーポリシー',
  description: 'ウチメシのプライバシーポリシーです。',
  openGraph: {
    title: 'プライバシーポリシー | うちメシPlus',
    description: 'ウチメシのプライバシーポリシーです。',
    url: 'https://uchimeshi.app/privacy',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'プライバシーポリシー | うちメシPlus',
    description: 'ウチメシのプライバシーポリシーです。',
  },
};

const sections = [
  {
    title: '第1条（収集する情報）',
    content: (
      <>
        <p className="mb-4">当社は、本アプリの提供にあたり、以下の情報を収集することがあります。</p>
        <p className="font-medium text-gray-800 mb-2">1. ユーザーが登録・入力する情報</p>
        <ul className="list-none space-y-1 mb-4 ml-2 text-gray-600">
          <li>・メールアドレス（会員登録時）</li>
          <li>・ユーザー名（表示名）</li>
          <li>・食材情報（食材名・購入量・購入金額・購入日・賞味/消費期限・保管場所）</li>
          <li>・料理情報（料理名・使用食材・人数・日付・食事タイプ・料理写真）</li>
        </ul>
        <p className="font-medium text-gray-800 mb-2">2. 自動的に収集される情報</p>
        <ul className="list-none space-y-1 ml-2 text-gray-600">
          <li>・端末情報（機種・OSバージョン）</li>
          <li>・アプリの利用状況（Google Analyticsによる分析）</li>
          <li>・クラッシュレポート（Firebase Crashlytics）</li>
        </ul>
      </>
    ),
  },
  {
    title: '第2条（情報の利用目的）',
    content: (
      <>
        <p className="mb-4">当社は、収集した情報を以下の目的で利用します。</p>
        <ul className="list-none space-y-1 ml-2 text-gray-600">
          <li>1. 本アプリのサービス提供・改善</li>
          <li>2. ユーザーサポートへの対応</li>
          <li>3. 賞味/消費期限に関するプッシュ通知の送信</li>
          <li>4. サービスに関するお知らせの送信</li>
          <li>5. 不正利用の防止およびセキュリティの確保</li>
          <li>6. 統計データの作成（個人を特定しない形式）</li>
        </ul>
      </>
    ),
  },
  {
    title: '第3条（第三者提供）',
    content: (
      <>
        <p className="mb-4">当社は、以下の場合を除き、ユーザーの個人情報を第三者に提供しません。</p>
        <ul className="list-none space-y-1 ml-2 text-gray-600">
          <li>1. ユーザーの事前の同意がある場合</li>
          <li>2. 法令に基づく場合</li>
          <li>3. 人の生命・身体・財産の保護のために必要な場合</li>
        </ul>
      </>
    ),
  },
  {
    title: '第4条（外部サービスの利用）',
    content: (
      <>
        <p className="mb-4">本アプリは、以下の外部サービスを利用しており、各サービスのプライバシーポリシーが適用されます。</p>
        <div className="space-y-4">
          <div className="p-4 bg-orange-50 rounded-xl">
            <p className="font-medium text-gray-800 mb-2">1. Firebase（Google LLC）</p>
            <ul className="list-none space-y-1 ml-2 text-gray-600 text-sm">
              <li>・Firebase Authentication（認証）</li>
              <li>・Cloud Firestore（データ保存）</li>
              <li>・Firebase Storage（画像保存）</li>
              <li>・Firebase Cloud Messaging（プッシュ通知）</li>
              <li>・Googleプライバシーポリシー：
                <a href="https://policies.google.com/privacy" className="text-[#FF6F00] hover:underline ml-1" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy</a>
              </li>
            </ul>
          </div>
          <div className="p-4 bg-orange-50 rounded-xl">
            <p className="font-medium text-gray-800 mb-2">2. Google AdMob（Google LLC）</p>
            <ul className="list-none space-y-1 ml-2 text-gray-600 text-sm">
              <li>・広告の配信（無料会員・ゲストユーザー向け）</li>
              <li>・Googleプライバシーポリシー：
                <a href="https://policies.google.com/privacy" className="text-[#FF6F00] hover:underline ml-1" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy</a>
              </li>
            </ul>
          </div>
          <div className="p-4 bg-orange-50 rounded-xl">
            <p className="font-medium text-gray-800 mb-2">3. RevenueCat, Inc.</p>
            <ul className="list-none space-y-1 ml-2 text-gray-600 text-sm">
              <li>・サブスクリプション管理・課金処理</li>
              <li>・RevenueCatプライバシーポリシー：
                <a href="https://www.revenuecat.com/privacy" className="text-[#FF6F00] hover:underline ml-1" target="_blank" rel="noopener noreferrer">https://www.revenuecat.com/privacy</a>
              </li>
            </ul>
          </div>
        </div>
      </>
    ),
  },
  {
    title: '第5条（データの保管・管理）',
    content: (
      <p className="text-gray-600">当社は、収集した情報を適切なセキュリティ対策を講じて管理します。</p>
    ),
  },
  {
    title: '第6条（データの削除）',
    content: (
      <p className="text-gray-600">ユーザーは、本アプリ内の設定画面からアカウントを削除することができます。</p>
    ),
  },
  {
    title: '第7条（プッシュ通知）',
    content: (
      <p className="text-gray-600">本アプリは、賞味/消費期限のアラートおよびサービスに関するお知らせのためにプッシュ通知を送信します。</p>
    ),
  },
  {
    title: '第8条（広告について）',
    content: (
      <p className="text-gray-600">無料会員およびゲストユーザーには、Google AdMobによる広告が表示されます。有料会員には広告は表示されません。</p>
    ),
  },
  {
    title: '第9条（子どものプライバシー）',
    content: (
      <p className="text-gray-600">本アプリは、13歳未満の子どもを対象としていません。</p>
    ),
  },
  {
    title: '第10条（ポリシーの変更）',
    content: (
      <p className="text-gray-600">当社は、必要に応じて本ポリシーを変更することがあります。</p>
    ),
  },
  {
    title: '第11条（お問い合わせ）',
    content: (
      <div className="p-5 bg-orange-50 rounded-xl text-gray-600 space-y-1">
        <p><span className="font-medium text-gray-800">社名：</span>株式会社Leafull</p>
        <p><span className="font-medium text-gray-800">アプリ名：</span>ウチメシ</p>
        <p>
          <span className="font-medium text-gray-800">メールアドレス：</span>
          <a href="mailto:contact@leafull.life" className="text-[#FF6F00] hover:underline">contact@leafull.life</a>
        </p>
      </div>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6 py-12">
        {/* タイトル */}
        <h1 className="text-3xl font-bold text-gray-900 mb-2">プライバシーポリシー</h1>
        <p className="text-gray-500 text-sm mb-4">制定日：2026年5月27日</p>
        <p className="text-gray-500 text-sm mb-10">株式会社Leafull</p>

        {/* 前文 */}
        <p className="text-base text-gray-600 leading-relaxed mb-10">
          株式会社Leafull（以下「当社」といいます）は、当社が提供するスマートフォンアプリケーション「ウチメシ」において、ユーザーの個人情報の取扱いについて、以下のとおりプライバシーポリシーを定めます。
        </p>

        {/* 各条文 */}
        <div className="space-y-0">
          {sections.map((section, index) => (
            <div key={section.title}>
              <section className="py-8">
                <h2 className="text-lg font-bold mb-4" style={{ color: '#FF6F00' }}>
                  {section.title}
                </h2>
                <div className="text-base leading-relaxed">
                  {section.content}
                </div>
              </section>
              {index < sections.length - 1 && (
                <hr className="border-gray-200" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
