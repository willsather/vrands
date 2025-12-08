import type { Metadata } from "next";

import RefreshDataCache from "@/app/(components)/(refresh)/refreshDataCache";
import PopularPosts from "@/app/(components)/popular-posts";
import LatestPostList from "@/app/latest/latest-post-list";

export const metadata: Metadata = {
  title: "Latest News",
  openGraph: {
    title: "Latest News",
  },
};

export default async function LatestPage() {
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
        {/* Popular Posts Sidebar */}
        <PopularPosts />

        {/* Main Content */}
        <LatestPostList />
      </div>

      <RefreshDataCache />
    </div>
  );
}
