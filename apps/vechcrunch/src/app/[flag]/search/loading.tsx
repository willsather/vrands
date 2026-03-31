import PopularPostsSkeleton from "@/app/(components)/(skeletons)/popular-posts-skeleton";
import PostListSkeleton from "@/app/(components)/(skeletons)/post-list-skeleton";

export default function SearchLoadingPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div>
        <div className="my-4 flex flex-col md:my-8 md:justify-between">
          <h1 className="my-2 text-6xl text-tc-green capitalize md:text-8xl">
            ...
          </h1>

          <p className="my-2 text-tc-black">...</p>
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
