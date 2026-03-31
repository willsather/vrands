import { deserialize } from "flags/next";
import type { Metadata } from "next";
import { Suspense } from "react";

import RefreshDataCache from "@/components/refresh/refreshDataCache";
import PopularPostsSkeleton from "@/components/skeletons/popular-posts-skeleton";
import PostListSkeleton from "@/components/skeletons/post-list-skeleton";
import PopularPosts from "@/components/popular-posts";
import LatestPostList from "@/app/[flag]/latest/latest-post-list";
import { flags } from "@/lib/flags";

export const metadata: Metadata = {
  title: "Latest News",
  openGraph: {
    title: "Latest News",
  },
};

export default async function LatestPage({
  params,
}: {
  params: Promise<{ flag: string }>;
}) {
  const { flag } = await params;
  const decisions = await deserialize(flags, flag);
  const showInBrief = decisions["in-brief-flag"];

  return (
    <div className="container mx-auto px-4 py-8">
      <div>
        <div className="my-4 flex flex-col md:my-8 md:flex-row md:justify-between">
          <h1 className="my-2 text-6xl text-tc-green md:text-8xl">
            Latest News
          </h1>
        </div>

        <div className="my-4 border-tc-green border-t-8" />
      </div>
      <div className="grid gap-8 lg:grid-cols-12">
        <Suspense fallback={<PopularPostsSkeleton />}>
          <PopularPosts />
        </Suspense>

        <Suspense fallback={<PostListSkeleton />}>
          <LatestPostList showInBrief={showInBrief} />
        </Suspense>
      </div>

      <RefreshDataCache />
    </div>
  );
}
