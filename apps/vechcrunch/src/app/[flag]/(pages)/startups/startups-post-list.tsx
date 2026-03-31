import { PostListItem } from "@/components/post-list-item";
import { getPosts } from "@/lib/blog";
import { flags, inBriefFlag } from "@/lib/flags";

export default async function StartupsPostList({ code }: { code: string }) {
  const [posts, showInBrief] = await Promise.all([
    getPosts({ category: "Startups" }),
    inBriefFlag(code, flags),
  ]);

  return (
    <div className="order-2 md:order-1 lg:col-span-8">
      <div>
        {posts.map((post) => (
          <PostListItem key={post.id} post={post} showInBrief={showInBrief} />
        ))}
      </div>
    </div>
  );
}
