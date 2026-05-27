export type Article = {
  id: string;
  title: string;
  summary: string;
  body: string;
  thumbnailURL: string;
  articleURL: string;
  category: string;
  isPublished: boolean;
  createdAt: Date;
  views: number;
};

type FSValue =
  | { stringValue: string }
  | { booleanValue: boolean }
  | { timestampValue: string }
  | { integerValue: string };

type FSDoc = {
  name: string;
  fields: Record<string, FSValue>;
};

const PROJECT_ID = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;
const API_KEY = process.env.NEXT_PUBLIC_FIREBASE_API_KEY;
const BASE = `https://firestore.googleapis.com/v1/projects/${PROJECT_ID}/databases/(default)/documents`;

function str(f: FSValue | undefined): string {
  return f && 'stringValue' in f ? f.stringValue : '';
}
function bool(f: FSValue | undefined): boolean {
  return f && 'booleanValue' in f ? f.booleanValue : false;
}
function timestamp(f: FSValue | undefined): Date {
  return f && 'timestampValue' in f ? new Date(f.timestampValue) : new Date(0);
}
function int(f: FSValue | undefined): number {
  return f && 'integerValue' in f ? parseInt(f.integerValue, 10) : 0;
}

function toArticle(doc: FSDoc): Article {
  const f = doc.fields;
  // handle legacy field name with leading space
  const createdAtField = f['createdAt'] ?? f[' createdAt'];
  return {
    id: doc.name.split('/').pop() ?? '',
    title: str(f['title']),
    summary: str(f['summary']),
    body: str(f['body']),
    thumbnailURL: str(f['thumbnailURL']),
    articleURL: str(f['articleURL']),
    category: str(f['category']),
    isPublished: bool(f['isPublished']),
    createdAt: timestamp(createdAtField),
    views: int(f['views']),
  };
}

async function fetchPublished(): Promise<Article[]> {
  const res = await fetch(`${BASE}/articles?key=${API_KEY}&pageSize=200`, {
    next: { revalidate: 60 },
  });
  if (!res.ok) throw new Error(`Firestore REST error: ${res.status}`);
  const data = await res.json();
  const docs: FSDoc[] = data.documents ?? [];
  return docs
    .map(toArticle)
    .filter((a) => a.isPublished)
    .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
}

export async function getAllArticles(): Promise<Article[] | null> {
  try {
    return await fetchPublished();
  } catch (e) {
    console.error('[articles] getAllArticles error:', e);
    return null;
  }
}

export async function getLatestArticles(count: number): Promise<Article[] | null> {
  try {
    const articles = await fetchPublished();
    return articles.slice(0, count);
  } catch (e) {
    console.error('[articles] getLatestArticles error:', e);
    return null;
  }
}

export async function getArticleById(id: string): Promise<Article | null> {
  try {
    const res = await fetch(`${BASE}/articles/${id}?key=${API_KEY}`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return null;
    const doc: FSDoc = await res.json();
    const article = toArticle(doc);
    return article.isPublished ? article : null;
  } catch (e) {
    console.error('[articles] getArticleById error:', e);
    return null;
  }
}

export async function getArticlesByCategory(
  category: string,
  limitCount?: number,
): Promise<Article[] | null> {
  try {
    const articles = await fetchPublished();
    const filtered = articles.filter((a) => a.category === category);
    return limitCount ? filtered.slice(0, limitCount) : filtered;
  } catch (e) {
    console.error('[articles] getArticlesByCategory error:', e);
    return null;
  }
}
