import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'お問い合わせ',
  description:
    'うちメシPlusへのお問い合わせページです。ご質問・ご意見をお気軽にご送信ください。',
  openGraph: {
    title: 'お問い合わせ | うちメシPlus',
    description: 'うちメシPlusへのお問い合わせページです。ご質問・ご意見をお気軽にご送信ください。',
    url: 'https://uchimeshi.org/contact',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'お問い合わせ | うちメシPlus',
    description: 'うちメシPlusへのお問い合わせページです。ご質問・ご意見をお気軽にご送信ください。',
  },
};

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">
          お問い合わせ
        </h1>
        <p className="text-gray-600">
          ご質問・ご意見・不具合報告などお気軽にご連絡ください。
          <br />
          通常2〜3営業日以内にご返答いたします。
        </p>
      </div>

      <div className="bg-white rounded-2xl p-8 shadow-sm border border-orange-50">
        <ContactForm />
      </div>

      <div className="mt-8 p-5 bg-orange-50 rounded-xl text-center">
        <p className="text-sm text-gray-600">
          直接メールでのお問い合わせは{' '}
          <a
            href="mailto:contact@leafull.life"
            className="text-primary font-medium hover:underline"
          >
            contact@leafull.life
          </a>{' '}
          まで
        </p>
      </div>
    </div>
  );
}
