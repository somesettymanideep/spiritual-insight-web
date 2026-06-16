import { Link } from "react-router-dom";
import { SiteLayout } from "@/components/SiteLayout";

export default function NotFoundPage() {
  return (
    <SiteLayout>
      <div className="flex flex-1 items-center justify-center bg-background min-h-[60vh]">
        <div className="max-w-md text-center">
          <h1 className="text-7xl font-bold text-gradient-primary font-display">404</h1>
          <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="mt-6">
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-full bg-gradient-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-elegant hover:scale-105 transition-transform"
            >
              Go home
            </Link>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
