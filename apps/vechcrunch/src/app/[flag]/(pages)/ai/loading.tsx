import CategoryPageSkeleton from "@/components/skeletons/category-page-skeleton";

export default function AILoading() {
  return (
    <CategoryPageSkeleton title="AI">
      <p className="max-w-xl">
        News coverage on artificial intelligence and machine learning tech, the
        companies building them, and the ethical issues AI raises today. This
        encompasses generative AI, including large language models, text-to-image
        and text-to-video models; speech recognition and generation; and
        predictive analytics.
      </p>
    </CategoryPageSkeleton>
  );
}
