import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-sky-50 to-white px-4">
      <div className="text-center max-w-md">
        <span className="text-7xl font-extrabold text-royal">404</span>
        <h1 className="mt-4 text-2xl sm:text-3xl font-bold text-foreground">
          Page Not Found
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you are looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-royal hover:bg-royal-dark text-white text-sm font-semibold px-6 py-2.5 rounded-full transition-all duration-300 shadow-md shadow-royal/20"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
