import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <header className="flex items-center justify-between border-b px-6 py-4">
        <span className="text-lg font-semibold">WorkBot</span>
        <Link href="/settings" className={buttonVariants({ variant: "link" })}>
          Settings
        </Link>
      </header>
      <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col justify-center gap-6 p-6">
        <h1 className="text-3xl font-semibold tracking-tight">WorkBot</h1>
        <p className="text-muted-foreground">
          WorkBot is an enterprise workflow platform.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link href="/settings" className={buttonVariants()}>
            Open settings
          </Link>
          <a
            href="/api/health"
            className={buttonVariants({ variant: "outline" })}
          >
            Health check
          </a>
        </div>
      </main>
    </div>
  );
}
