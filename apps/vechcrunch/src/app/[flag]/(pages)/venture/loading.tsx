import CategoryPageSkeleton from "@/components/skeletons/category-page-skeleton";

export default function VentureLoading() {
  return (
    <CategoryPageSkeleton title="Venture">
      <p className="max-w-xl">
        Our venture capital news features interviews and analysis on all the VCs,
        the VC-backed startups, and the investment trends that founders,
        investors, students, academics – and anyone else interested in the way
        that tech is transforming the world – should be tracking.
      </p>
    </CategoryPageSkeleton>
  );
}
