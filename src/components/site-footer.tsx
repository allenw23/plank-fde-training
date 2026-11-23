import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-6 text-sm text-muted-foreground">
        <p>workbot</p>
        <Link href="/settings" className="hover:text-foreground">
          Settings
        </Link>
      </div>
    </footer>
  );
}
