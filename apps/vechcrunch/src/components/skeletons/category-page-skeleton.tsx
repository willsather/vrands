import type { ReactNode } from "react";

import PopularPostsSkeleton from "@/components/skeletons/popular-posts-skeleton";
import PostListSkeleton from "@/components/skeletons/post-list-skeleton";

export default function CategoryPageSkeleton({
  title,
  children,
}: {
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div>
        <div className="my-4 flex flex-col md:my-8 md:flex-row md:justify-between">
          <h1 className="my-2 text-6xl text-tc-green md:text-8xl">{title}</h1>
          {children}
        </div>

        <div className="my-4 border-tc-green border-t-8" />
      </div>

      <div className="grid gap-8 lg:grid-cols-12">
        <PopularPostsSkeleton />
        <PostListSkeleton />
      </div>
    </div>
  );
}
