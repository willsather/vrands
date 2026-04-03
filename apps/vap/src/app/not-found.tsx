import Link from "next/link";

export default function RootNotFound() {
  return (
    <main>
      <div className="flex min-h-screen items-center justify-center pt-32">
        <div className="text-center">
          <h1 className="mb-4 text-2xl font-semibold">Page Not Found</h1>
          <p className="mb-8 text-gray-600">
            The page you are looking for does not exist.
          </p>
          <Link
            href="/"
            className="inline-block bg-black px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-800"
            prefetch
          >
            Return to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
