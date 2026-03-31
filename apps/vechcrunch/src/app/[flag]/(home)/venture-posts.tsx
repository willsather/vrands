import Link from "next/link";

import PostCard from "@/components/post-card";
import { PostListItem } from "@/components/post-list-item";
import { ArrowIcon } from "@/icons/arrow-icon";
import { getPosts } from "@/lib/blog";
import { flags, inBriefFlag } from "@/lib/flags";

export default async function VenturePostsSection({
  code,
}: {
  code: string;
}) {
  const [posts, showInBrief] = await Promise.all([
    getPosts({ category: "Venture" }),
    inBriefFlag(code, flags),
  ]);

  const [featuredPost, ...otherPosts] = posts;

  return (
    <section className="relative bg-tc-yellow">
      <div className="container mx-auto px-4 py-12">
        {/* Section Header */}
        <div className="mb-8 flex flex-col md:flex-row md:items-center md:gap-8">
          <h1 className="font-extrabold text-7xl text-tc-purple md:m-0">
            Venture
          </h1>
          <Link
            href="/latest"
            className="inline-flex max-w-xs items-center gap-2 rounded-full border-2 border-tc-green fill-tc-black px-4 py-4 font-medium text-sm hover:bg-tc-black hover:fill-white hover:text-white"
          >
            See More
            <ArrowIcon className="size-4 rotate-45" />
          </Link>
        </div>

        {/* Featured Article (Always on Top) */}
        {featuredPost != null ? (
          <div className="mb-8">
            <PostCard post={featuredPost} />
          </div>
        ) : null}

        {/* Other Posts List (Always Below Featured) */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {otherPosts.slice(0, 6).map((post) => (
            <PostListItem key={post.id} post={post} theme="alternate" showInBrief={showInBrief} />
          ))}
        </div>
      </div>
    </section>
  );
}
