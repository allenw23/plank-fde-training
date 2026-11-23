import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export function SiteHeader() {
  return (
    <header className="border-b">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-3.5">
        <Link href="/" className="font-semibold">
          WorkBot
        </Link>
        <Link
          href="/settings"
          className={buttonVariants({ variant: "ghost", size: "sm" })}
        >
          Settings
        </Link>
      </div>
    </header>
  );
}
