import { Link } from "@tanstack/react-router";
import logo from "@/assets/momentum-logo.png.asset.json";
import { navLinks, site, socialLinks } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-foreground text-background">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-14 md:grid-cols-4">
        <div>
          <img src={logo.url} alt={`${site.name} logo`} className="h-9 w-auto" />
          <p className="mt-4 text-sm leading-relaxed text-background/70">{site.blurb}</p>
        </div>
        <div>
          <h2 className="text-xs uppercase tracking-[0.18em] text-primary">Navigate</h2>
          <ul className="mt-4 space-y-2 text-sm text-background/80">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-primary">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-xs uppercase tracking-[0.18em] text-primary">Contact</h2>
          <ul className="mt-4 space-y-2 text-sm text-background/80">
            {site.addressLines.map((line) => (
              <li key={line}>{line}</li>
            ))}
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-primary">
                {site.email}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-xs uppercase tracking-[0.18em] text-primary">Follow</h2>
          <ul className="mt-4 space-y-2 text-sm text-background/80">
            {socialLinks.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-primary"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-background/15 px-5 py-6 text-center text-xs text-background/60">
        {site.established} · © {new Date().getFullYear()} {site.name}
      </div>
    </footer>
  );
}
