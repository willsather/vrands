import HeroSkeleton from "@/components/skeletons/hero-skeleton";
import LatestPostsSkeleton from "@/components/skeletons/latest-posts-skeleton";
import VenturePostsSkeleton from "@/components/skeletons/venture-posts-skeleton";
import Separator from "@/components/separator";
import TitleSection from "@/app/[flag]/(home)/title";
import UpcomingEvents from "@/app/[flag]/(home)/upcoming-events";

export default function HomeLoadingPage() {
  return (
    <div className="min-h-screen bg-white">
      <TitleSection />

      <HeroSkeleton />

      <Separator />

      <main>
        <LatestPostsSkeleton />
        <VenturePostsSkeleton />

        <UpcomingEvents />
      </main>
    </div>
  );
}
