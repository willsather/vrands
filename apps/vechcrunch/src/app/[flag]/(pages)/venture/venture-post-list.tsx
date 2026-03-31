import { PostListItem } from "@/components/post-list-item";
import { getPosts } from "@/lib/blog";

export default async function VenturePostList({
  showInBrief,
}: {
  showInBrief?: boolean;
}) {
  const posts = await getPosts({ category: "Venture" });

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
