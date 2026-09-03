import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="border-b bg-background">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
        <Link href="/" className="font-semibold tracking-tight">
          Claude Certification Prep
        </Link>
        <nav className="flex items-center gap-4 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground">
            Certifications
          </Link>
          <Link href="/content-status" className="hover:text-foreground">
            Content Status
          </Link>
        </nav>
      </div>
    </header>
  );
}
