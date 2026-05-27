const features = [
  {
    icon: '🧊',
    title: '食材管理',
    description:
      '冷蔵庫・冷凍庫・常温棚ごとに食材を管理。在庫状況が一目でわかり、買い物の重複や買い忘れを防ぎます。',
  },
  {
    icon: '💰',
    title: '食費計算',
    description:
      '使った分だけコストを自動計算。食材ごとの単価から使用量に応じた費用が算出され、食費の見える化を実現。',
  },
  {
    icon: '📅',
    title: 'カレンダー',
    description:
      '毎日の食費をカレンダーに記録。月ごとの食費の推移を一覧で確認でき、節約目標の達成状況を把握できます。',
  },
  {
    icon: '🔔',
    title: '賞味期限通知',
    description:
      '食材の賞味期限が近づくと通知でお知らせ。期限切れによる食品ロスを防ぎ、食材を無駄なく使い切れます。',
  },
];

export default function FeatureSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-3">
          主な機能
        </h2>
        <p className="text-center text-gray-500 mb-12">
          食材管理に必要なすべてがひとつのアプリに
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-app-bg rounded-2xl p-6 border border-orange-100 hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
