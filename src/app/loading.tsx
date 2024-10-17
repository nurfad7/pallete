import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const LoadingVideo = dynamic(() => import("@/components/Loading"), {
  suspense: true,
});

export default function Loading() {
  return (
    <Suspense fallback={<div className="w-full h-full z-20 absolute overflow-hidden">Video Loading</div>}>
      <LoadingVideo />
    </Suspense>
  );
}