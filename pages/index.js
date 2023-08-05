/** @jsxImportSource theme-ui */
'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const { push } = useRouter();
  useEffect(() => {
    push('https://imsety.com');
  }, []);

  return <p></p>;
}
