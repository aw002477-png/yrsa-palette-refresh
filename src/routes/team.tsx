import { createFileRoute } from "@tanstack/react-router";
import hero from "@/assets/hero-team.jpg.asset.json";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero, Section } from "@/components/PageHero";
import { team } from "@/data/team";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team | Momentum Labs" },
      {
        name: "description",
        content:
          "The researchers, economists, and advisors behind Momentum Labs in Birzeit, Palestine.",
      },
      { property: "og:title", content: "Team | Momentum Labs" },
      {
        property: "og:description",
        content:
          "The researchers, economists, and advisors behind Momentum Labs in Birzeit, Palestine.",
      },
    ],
  }),
  component: TeamPage,
});

function TeamPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <PageHero
          image={hero.url}
          eyebrow="Team"
          title="People who read context as carefully as data"
          lead="A multidisciplinary team of researchers, economists, and advisors working across policy, markets, and institutions."
        />
        <Section eyebrow="Our people" title="Meet the team">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {team.map((m) => (
              <article key={m.name} className="border border-border bg-card">
                <img
                  src={m.photo}
                  alt={m.name}
                  loading="lazy"
                  className="aspect-4/5 w-full object-cover grayscale"
                />
                <div className="p-6">
                  <h3 className="text-xl">{m.name}</h3>
                  <p className="mt-1 text-sm uppercase tracking-[0.14em] text-primary">
                    {m.role}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {m.bio}
                  </p>
                  <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                    {m.education}
                  </p>
                  <a
                    href={m.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-block text-sm text-primary hover:underline"
                  >
                    LinkedIn
                  </a>
                </div>
              </article>
            ))}
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
