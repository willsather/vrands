import type { ReactNode } from "react";
import { Suspense } from "react";

import Footer from "@/components/footer";
import Header from "@/components/header";
import HeaderSkeleton from "@/components/skeletons/header-skeleton";

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Suspense fallback={<HeaderSkeleton showLogo={false} />}>
        <Header />
      </Suspense>
      {children}
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </>
  );
}
