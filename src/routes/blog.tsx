import { createFileRoute } from "@tanstack/react-router";
import hero from "@/assets/hero-blog.jpg.asset.json";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero, Section } from "@/components/PageHero";
import { media, publications } from "@/data/insights";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog | Momentum Labs" },
      {
        name: "description",
        content:
          "Publications, podcasts, and public speaking from the Momentum Labs team on the Palestinian economy and policy.",
      },
      { property: "og:title", content: "Blog | Momentum Labs" },
      {
        property: "og:description",
        content:
          "Publications, podcasts, and public speaking from the Momentum Labs team on the Palestinian economy and policy.",
      },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <PageHero
          image={hero.url}
          eyebrow="Blog"
          title="Publications, podcasts, and public conversations"
          lead="Writing and speaking that puts Palestinian economic and social realities on the record."
        />
        <Section eyebrow="Publications" title="Research and writing">
          <div className="grid gap-6 md:grid-cols-2">
            {publications.map((p) => (
              <a
                key={p.title}
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className="group border border-border bg-card p-6 transition-colors hover:border-primary"
              >
                <p className="text-xs uppercase tracking-[0.16em] text-primary">{p.type}</p>
                <h3 className="mt-3 text-xl leading-snug group-hover:text-primary">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.meta}</p>
                {p.authors && <p className="mt-1 text-sm font-medium">{p.authors}</p>}
                {p.body && (
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {p.body}
                  </p>
                )}
              </a>
            ))}
          </div>
        </Section>
        <Section eyebrow="Media" title="Podcasts, video, and public speaking" muted>
          <div className="grid gap-4 md:grid-cols-2">
            {media.map((m) => (
              <a
                key={m.title}
                href={m.href}
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col border border-border bg-background p-5 transition-colors hover:border-primary"
              >
                <p className="text-xs uppercase tracking-[0.16em] text-primary">{m.type}</p>
                <h3 className="mt-2 text-lg leading-snug group-hover:text-primary">
                  {m.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{m.meta}</p>
              </a>
            ))}
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
