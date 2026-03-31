import CategoryPageSkeleton from "@/components/skeletons/category-page-skeleton";

export default function StartupsLoading() {
  return (
    <CategoryPageSkeleton title="Startups">
      <p className="max-w-xl">
        Tech startup news that breaks down the funding, growth, and long-term
        trajectory of companies across every stage and industry. Startup coverage
        includes climate, crypto, fintech, SaaS, transportation, and consumer
        tech.
      </p>
    </CategoryPageSkeleton>
  );
}
