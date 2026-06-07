import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-400 py-12 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">🍳</span>
              <span className="text-xl font-bold text-white">うちメシPlus</span>
            </div>
            <p className="text-sm leading-relaxed">
              冷蔵庫の食材を賢く管理して
              <br />
              食品ロスと食費をゼロに
            </p>
          </div>

          <div>
            <h3 className="text-white font-medium mb-3">コンテンツ</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/recipe" className="hover:text-white transition-colors">
                  簡単レシピ
                </Link>
              </li>
              <li>
                <Link href="/saving" className="hover:text-white transition-colors">
                  節約術
                </Link>
              </li>
              <li>
                <Link href="/specialty" className="hover:text-white transition-colors">
                  無添加・オーガニック
                </Link>
              </li>
              <li>
                <Link href="/articles" className="hover:text-white transition-colors">
                  記事一覧
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-medium mb-3">その他</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  アプリ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  お問い合わせ
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  プライバシーポリシー
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-medium mb-3">お問い合わせ</h3>
            <p className="text-sm">
              <a
                href="mailto:contact@leafull.life"
                className="hover:text-white transition-colors"
              >
                contact@leafull.life
              </a>
            </p>
            <p className="text-sm mt-2">株式会社Leafull</p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-center text-sm">
          <p>© {year} 株式会社Leafull. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
