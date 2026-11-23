export async function SiteFooter() {
  "use cache";

  return (
    <footer className="border-t">
      <p className="mx-auto w-full max-w-5xl px-6 py-6 text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} WorkBot. All rights reserved.
      </p>
    </footer>
  );
}
