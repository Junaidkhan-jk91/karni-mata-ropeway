import React from 'react';

export function SectionSkeleton() {
  return (
    <div className="py-20 sm:py-24 px-6 sm:px-10 lg:px-16 max-w-5xl mx-auto w-full">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes skeletonShimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .skeleton-shimmer {
          background: linear-gradient(90deg, #f5ede4 25%, #e8e2d9 50%, #f5ede4 75%);
          background-size: 200% 100%;
          animation: skeletonShimmer 1.5s infinite linear;
        }
        .skeleton-shimmer-dark {
          background: linear-gradient(90deg, #2d2d2d 25%, #3a2f28 50%, #2d2d2d 75%);
          background-size: 200% 100%;
          animation: skeletonShimmer 1.5s infinite linear;
        }
      `}} />

      {/* Header Skeleton */}
      <div className="max-w-2xl mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-[2px] bg-stone/40" />
          <div className="w-20 h-3 rounded bg-stone/40 skeleton-shimmer" />
        </div>
        <div className="w-1/2 h-8 rounded bg-stone/50 skeleton-shimmer mb-4" />
        <div className="w-3/4 h-4 rounded bg-stone/30 skeleton-shimmer" />
      </div>

      {/* Grid Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="h-64 rounded-2xl bg-stone/20 border border-stone/35 p-7 flex flex-col justify-between">
          <div className="w-12 h-12 rounded-xl bg-stone/30 skeleton-shimmer" />
          <div>
            <div className="w-1/3 h-4 rounded bg-stone/40 skeleton-shimmer mb-2" />
            <div className="w-full h-3 rounded bg-stone/30 skeleton-shimmer mb-1.5" />
            <div className="w-2/3 h-3 rounded bg-stone/30 skeleton-shimmer" />
          </div>
        </div>
        <div className="h-64 rounded-2xl bg-stone/20 border border-stone/35 p-7 flex flex-col justify-between">
          <div className="w-12 h-12 rounded-xl bg-stone/30 skeleton-shimmer" />
          <div>
            <div className="w-1/3 h-4 rounded bg-stone/40 skeleton-shimmer mb-2" />
            <div className="w-full h-3 rounded bg-stone/30 skeleton-shimmer mb-1.5" />
            <div className="w-2/3 h-3 rounded bg-stone/30 skeleton-shimmer" />
          </div>
        </div>
        <div className="h-64 rounded-2xl bg-stone/20 border border-stone/35 p-7 flex flex-col justify-between">
          <div className="w-12 h-12 rounded-xl bg-stone/30 skeleton-shimmer" />
          <div>
            <div className="w-1/3 h-4 rounded bg-stone/40 skeleton-shimmer mb-2" />
            <div className="w-full h-3 rounded bg-stone/30 skeleton-shimmer mb-1.5" />
            <div className="w-2/3 h-3 rounded bg-stone/30 skeleton-shimmer" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function DarkSectionSkeleton() {
  return (
    <div className="py-20 sm:py-24 px-6 sm:px-10 lg:px-16 bg-stone-900 w-full">
      <div className="max-w-5xl mx-auto">
        {/* Header Skeleton */}
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-[2px] bg-stone-800" />
            <div className="w-20 h-3 rounded bg-stone-800 skeleton-shimmer-dark" />
          </div>
          <div className="w-1/2 h-8 rounded bg-stone-800 skeleton-shimmer-dark mb-4" />
          <div className="w-3/4 h-4 rounded bg-stone-800/60 skeleton-shimmer-dark" />
        </div>

        {/* Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="h-60 rounded-2xl bg-stone-950/40 border border-stone-800/40 p-7 flex flex-col justify-between">
            <div className="w-12 h-12 rounded-xl bg-stone-800 skeleton-shimmer-dark" />
            <div>
              <div className="w-1/3 h-4 rounded bg-stone-800 skeleton-shimmer-dark mb-2" />
              <div className="w-full h-3 rounded bg-stone-850 skeleton-shimmer-dark" />
            </div>
          </div>
          <div className="h-60 rounded-2xl bg-stone-950/40 border border-stone-800/40 p-7 flex flex-col justify-between">
            <div className="w-12 h-12 rounded-xl bg-stone-800 skeleton-shimmer-dark" />
            <div>
              <div className="w-1/3 h-4 rounded bg-stone-800 skeleton-shimmer-dark mb-2" />
              <div className="w-full h-3 rounded bg-stone-850 skeleton-shimmer-dark" />
            </div>
          </div>
          <div className="h-60 rounded-2xl bg-stone-950/40 border border-stone-800/40 p-7 flex flex-col justify-between">
            <div className="w-12 h-12 rounded-xl bg-stone-800 skeleton-shimmer-dark" />
            <div>
              <div className="w-1/3 h-4 rounded bg-stone-800 skeleton-shimmer-dark mb-2" />
              <div className="w-full h-3 rounded bg-stone-850 skeleton-shimmer-dark" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
