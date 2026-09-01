import { createFileRoute } from "@tanstack/react-router";
import hero from "@/assets/hero-services.jpg.asset.json";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero, Section } from "@/components/PageHero";
import { capabilities } from "@/data/services";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | Momentum Labs" },
      {
        name: "description",
        content:
          "Research, evaluation, strategy, policy analysis, and capacity building services grounded in Palestine.",
      },
      { property: "og:title", content: "Services | Momentum Labs" },
      {
        property: "og:description",
        content:
          "Research, evaluation, strategy, policy analysis, and capacity building services grounded in Palestine.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <PageHero
          image={hero.url}
          eyebrow="Services"
          title="Evidence, strategy, and delivery support"
          lead="We work across research, evaluation, strategy, policy, and capacity building, combining rigorous method with a deep reading of context."
        />
        <Section eyebrow="Capabilities" title="What we do">
          <div className="grid gap-8 md:grid-cols-2">
            {capabilities.map((c) => (
              <article key={c.num} className="border border-border bg-card p-7">
                <p className="text-xs tracking-[0.2em] text-primary">{c.num}</p>
                <h3 className="mt-3 text-2xl leading-snug">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {c.summary}
                </p>
                <ul className="mt-5 space-y-2 text-sm">
                  {c.items.map((i) => (
                    <li key={i} className="flex gap-2">
                      <span className="mt-2 size-1.5 shrink-0 bg-primary" />
                      {i}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
