import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/hero-home.jpg.asset.json";
import band from "@/assets/band-grounded.jpg.asset.json";
import clients from "@/assets/clients-wall.png.asset.json";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/PageHero";
import { site } from "@/data/site";
import { capabilityPreview } from "@/data/services";
import { homeStats, principles, sectors, testimonials } from "@/data/home";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Momentum Labs | Advancing Equitable Progress" },
      {
        name: "description",
        content:
          "A boutique consultancy in Birzeit, Palestine, delivering evidence-based research, evaluation, policy analysis, and growth advisory.",
      },
      { property: "og:title", content: "Momentum Labs | Advancing Equitable Progress" },
      {
        property: "og:description",
        content:
          "A boutique consultancy in Birzeit, Palestine, delivering evidence-based research, evaluation, policy analysis, and growth advisory.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative isolate overflow-hidden bg-foreground">
          <img
            src={hero.url}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 size-full object-cover opacity-45"
          />
          <div className="relative mx-auto flex min-h-[78vh] w-full max-w-6xl flex-col justify-center px-5 py-24">
            <p className="text-xs uppercase tracking-[0.3em] text-primary">
              {site.established}
            </p>
            <h1 className="mt-5 max-w-4xl text-5xl leading-[1.05] text-background md:text-7xl">
              {site.tagline}
            </h1>
            <p className="mt-3 text-2xl text-background/70">{site.taglineAr}</p>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-background/85">
              {site.blurb}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/services"
                className="bg-primary px-6 py-3 text-sm uppercase tracking-[0.16em] text-primary-foreground transition-opacity hover:opacity-90"
              >
                Our services
              </Link>
              <Link
                to="/work"
                className="border border-background/40 px-6 py-3 text-sm uppercase tracking-[0.16em] text-background transition-colors hover:border-primary hover:text-primary"
              >
                Our work
              </Link>
            </div>
          </div>
        </section>

        <Section eyebrow="How we think" title="Three principles behind every engagement">
          <div className="grid gap-8 md:grid-cols-3">
            {principles.map((p) => (
              <article key={p.index} className="border-t-2 border-primary pt-5">
                <p className="text-xs tracking-[0.2em] text-primary">
                  {p.index} · {p.label}
                </p>
                <h3 className="mt-3 text-2xl leading-snug">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </article>
            ))}
          </div>
        </Section>

        <section className="bg-foreground">
          <div className="mx-auto grid w-full max-w-6xl gap-8 px-5 py-20 md:grid-cols-5">
            {homeStats.map((s) => (
              <div key={s.label}>
                <p
                  className={`text-3xl md:text-4xl ${s.accent ? "text-primary" : "text-background"}`}
                >
                  {s.value}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-background/70">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        <Section eyebrow="Capabilities" title="What we do" muted>
          <div className="grid gap-6 md:grid-cols-4">
            {capabilityPreview.map((c) => (
              <article key={c.title} className="border border-border bg-background p-6">
                <h3 className="text-lg leading-snug">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
              </article>
            ))}
          </div>
          <Link
            to="/services"
            className="mt-8 inline-block text-sm uppercase tracking-[0.16em] text-primary hover:underline"
          >
            Explore all services
          </Link>
        </Section>

        <section className="relative isolate overflow-hidden">
          <img
            src={band.url}
            alt="Palestinian landscape"
            className="absolute inset-0 size-full object-cover"
            loading="lazy"
          />
          <div className="relative bg-foreground/70">
            <div className="mx-auto w-full max-w-6xl px-5 py-24 text-center">
              <h2 className="mx-auto max-w-3xl text-3xl leading-snug text-background md:text-4xl">
                Grounded in Palestine, connected to regional and international partners.
              </h2>
            </div>
          </div>
        </section>

        <Section eyebrow="Sectors" title="Where we work">
          <ul className="grid gap-4 md:grid-cols-4">
            {sectors.map((s) => (
              <li key={s.label} className="border border-border p-5 text-sm">
                {s.label}
              </li>
            ))}
          </ul>
        </Section>

        <Section eyebrow="Clients & partners" title="Trusted by" muted>
          <img
            src={clients.url}
            alt="Logos of Momentum Labs clients and partners"
            loading="lazy"
            className="w-full"
          />
        </Section>

        <Section eyebrow="Testimonials" title="What partners say">
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <blockquote key={t.name} className="border-l-2 border-primary pl-5">
                <p className="text-sm leading-relaxed">{t.quote}</p>
                <footer className="mt-4 text-sm">
                  <span className="font-medium">{t.name}</span>
                  <span className="text-muted-foreground"> · {t.org}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </Section>

        <section className="bg-primary">
          <div className="mx-auto flex w-full max-w-6xl flex-col items-start gap-6 px-5 py-16 md:flex-row md:items-center md:justify-between">
            <h2 className="max-w-2xl text-3xl leading-snug text-primary-foreground">
              Have a question that needs solid evidence behind it?
            </h2>
            <Link
              to="/contact"
              className="bg-background px-6 py-3 text-sm uppercase tracking-[0.16em] text-foreground"
            >
              Contact us
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
