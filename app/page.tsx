'use client';
import { useEffect } from 'react';

export default function Page() {
  useEffect(() => {
    (async () => {
      const res = await fetch('/api/getMinuDustFrcstDspth', {
        method: 'POST',
      });
      const { response } = await res.json();

      if (response?.result === 'false') {
        console.log('error!');
      } else {
        console.log('🚀 ~ file: page.tsx:11 ~ data:', response.body);
      }
    })();
  }, []);
  return (
    <div className="w-full h-full">
      <div className="flex items-center justify-center w-full h-full">
        <div className="border-2 text-xl text-gray-200 p-5">hellow</div>
      </div>
    </div>
  );
}
