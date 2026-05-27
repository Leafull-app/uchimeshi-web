import Link from 'next/link';

const APP_STORE_URL = '#';
const GOOGLE_PLAY_URL = '#';

const features = [
  { icon: '🧊', text: '冷蔵庫・冷凍庫・常温棚の食材管理' },
  { icon: '💰', text: '使った分だけ食費を自動計算' },
  { icon: '📅', text: 'カレンダーで毎日の食費を記録' },
  { icon: '🔔', text: '賞味/消費期限が近づくと通知' },
];

export default function AppIntroSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-yellow-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          うちメシ
        </h2>
        <p className="text-lg text-gray-700 mb-10 leading-relaxed">
          冷蔵庫の食材を賢く管理して
          <br className="sm:hidden" />
          食品ロスと食費をゼロに
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 text-left max-w-2xl mx-auto">
          {features.map(({ icon, text }) => (
            <div
              key={text}
              className="flex items-center gap-3 bg-white rounded-xl px-5 py-4 shadow-sm border border-orange-50"
            >
              <span className="text-2xl flex-shrink-0">{icon}</span>
              <span className="text-sm text-gray-700 font-medium">{text}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
          <a
            href={APP_STORE_URL}
            className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition-colors w-52"
          >
            <svg viewBox="0 0 24 24" className="w-7 h-7 flex-shrink-0" fill="white">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            <div className="text-left">
              <div className="text-xs opacity-80">Download on the</div>
              <div className="text-base font-semibold">App Store</div>
            </div>
          </a>
          <a
            href={GOOGLE_PLAY_URL}
            className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition-colors w-52"
          >
            <svg viewBox="0 0 24 24" className="w-7 h-7 flex-shrink-0" fill="white">
              <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-1.727l1.308.757a1 1 0 010 1.726l-1.308.757L15.396 12l2.302-2.02zM5.864 2.658L16.8 8.99l-2.302 2.302-8.635-8.634z" />
            </svg>
            <div className="text-left">
              <div className="text-xs opacity-80">GET IT ON</div>
              <div className="text-base font-semibold">Google Play</div>
            </div>
          </a>
        </div>

        <Link
          href="/about"
          className="inline-block border-2 border-primary text-primary px-8 py-3 rounded-xl font-medium hover:bg-primary hover:text-white transition-colors"
        >
          アプリ詳細をみる
        </Link>
      </div>
    </section>
  );
}
