'use client';

import { useEffect } from 'react';
import { doc, updateDoc, increment } from 'firebase/firestore';
import { db } from '@/lib/firebase';

export default function ViewCounter({ articleId }: { articleId: string }) {
  useEffect(() => {
    updateDoc(doc(db, 'articles', articleId), { views: increment(1) }).catch(() => {});
  }, [articleId]);

  return null;
}
