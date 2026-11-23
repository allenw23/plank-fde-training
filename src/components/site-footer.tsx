import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/settings", label: "Settings" },
];

export async function SiteFooter() {
  "use cache";

  return (
    <footer className="border-t">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-4 px-6 py-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; {new Date().getFullYear()} WorkBot. All rights reserved.</p>
        <nav aria-label="Footer">
          <ul className="flex gap-6">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className="hover:text-foreground">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
