import { createFileRoute } from "@tanstack/react-router";
import hero from "@/assets/hero-work.jpg.asset.json";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero, Section } from "@/components/PageHero";
import { workCategories } from "@/data/work";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Our Work | Momentum Labs" },
      {
        name: "description",
        content:
          "Selected projects in economic policy, data-driven research, evaluation, growth advisory, training, and civil society support.",
      },
      { property: "og:title", content: "Our Work | Momentum Labs" },
      {
        property: "og:description",
        content:
          "Selected projects in economic policy, data-driven research, evaluation, growth advisory, training, and civil society support.",
      },
    ],
  }),
  component: WorkPage,
});

function WorkPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <PageHero
          image={hero.url}
          eyebrow="Our Work"
          title="Projects that turn questions into decisions"
          lead="A selection of engagements with governments, development partners, private-sector clients, and civil society organisations."
        />
        {workCategories.map((cat, i) => (
          <Section key={cat.id} eyebrow={cat.title} title={cat.short} muted={i % 2 === 1}>
            <p className="max-w-3xl text-base leading-relaxed text-muted-foreground">
              {cat.summary}
            </p>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {cat.projects.map((p) => (
                <article key={p.title} className="border border-border bg-card p-6">
                  <p className="text-xs uppercase tracking-[0.16em] text-primary">
                    {p.year}
                  </p>
                  <h3 className="mt-3 text-xl leading-snug">{p.title}</h3>
                  <p className="mt-2 text-sm font-medium">{p.client}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {p.body}
                  </p>
                </article>
              ))}
            </div>
          </Section>
        ))}
      </main>
      <Footer />
    </div>
  );
}
