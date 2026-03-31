import CategoryPageSkeleton from "@/components/skeletons/category-page-skeleton";

export default function AppsLoading() {
  return (
    <CategoryPageSkeleton title="Apps">
      <p className="max-w-xl">
        The app economy continues to grow, having produced a record number of
        downloads and consumer spending across both the iOS and Google Play
        stores. Keep up with this fast-moving industry in one place, with the
        latest from the world of apps, including news, updates, startup fundings,
        mergers and acquisitions, and much more.
      </p>
    </CategoryPageSkeleton>
  );
}
