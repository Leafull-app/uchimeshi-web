'use client';

import { useState } from 'react';

type Props = {
  url: string;
  title: string;
};

export default function ShareButtons({ url, title }: Props) {
  const [copied, setCopied] = useState(false);

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  async function handleCopy() {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  const btnClass =
    'flex items-center justify-center gap-2 w-36 h-10 rounded-lg text-sm font-medium transition-colors';

  return (
    <div className="mt-12 pt-8 border-t border-gray-100">
      <p className="text-sm text-gray-500 mb-3 font-medium">この記事をシェア</p>
      <div className="flex flex-wrap gap-3">
        {/* X */}
        <a
          href={`https://x.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className={`${btnClass} bg-black text-white hover:bg-gray-800`}
        >
          <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="white">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.741l7.732-8.857L1.254 2.25H8.08l4.258 5.63 5.906-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
          Xでシェア
        </a>

        {/* LINE */}
        <a
          href={`https://social-plugins.line.me/lineit/share?url=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className={`${btnClass} bg-[#06C755] text-white hover:bg-green-600`}
        >
          <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="white">
            <path d="M24 10.304c0-5.369-5.383-9.738-12-9.738-6.616 0-12 4.369-12 9.738 0 4.814 4.269 8.846 10.036 9.608.391.084.922.258 1.057.592.121.303.079.771.038 1.087l-.164 1.026c-.045.303-.24 1.186 1.049.647 1.291-.539 6.916-4.070 9.436-6.975C23.176 14.393 24 12.458 24 10.304" />
          </svg>
          LINEでシェア
        </a>

        {/* リンクをコピー */}
        <button
          onClick={handleCopy}
          className={`${btnClass} ${copied ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
        >
          {copied ? (
            <>
              <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              コピーしました
            </>
          ) : (
            <>
              <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
              リンクをコピー
            </>
          )}
        </button>

        {/* メール */}
        <a
          href={`mailto:?subject=${encodedTitle}&body=${encodedUrl}`}
          className={`${btnClass} bg-gray-100 text-gray-700 hover:bg-gray-200`}
        >
          <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          メールで送る
        </a>
      </div>
    </div>
  );
}
