const SCOPE = 'article-body';

function scopeInlineStyles(html: string): string {
  return html.replace(
    /<style([^>]*)>([\s\S]*?)<\/style>/gi,
    (_, attrs, css) => {
      const scoped = css
        // * { } → .article-body * { }
        .replace(/\*(\s*\{)/g, `.${SCOPE} *$1`)
        // :root { } → .article-body { }  (keeps CSS variables accessible via inheritance)
        .replace(/:root(\s*\{)/g, `.${SCOPE}$1`)
        // body { } → .article-body { }  (prevents body styles leaking to the page)
        .replace(/\bbody\b(\s*\{)/g, `.${SCOPE}$1`);
      return `<style${attrs}>${scoped}</style>`;
    }
  );
}

export default function MarkdownRenderer({ content }: { content: string }) {
  return (
    <div
      className={`${SCOPE} text-gray-700`}
      dangerouslySetInnerHTML={{ __html: scopeInlineStyles(content) }}
    />
  );
}
