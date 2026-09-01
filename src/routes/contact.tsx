import { createFileRoute } from "@tanstack/react-router";
import hero from "@/assets/hero-contact.jpg.asset.json";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero, Section } from "@/components/PageHero";
import { site, socialLinks } from "@/data/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Momentum Labs" },
      {
        name: "description",
        content:
          "Reach Momentum Labs at Techno Park, Birzeit University, Birzeit, Palestine, or by email.",
      },
      { property: "og:title", content: "Contact | Momentum Labs" },
      {
        property: "og:description",
        content:
          "Reach Momentum Labs at Techno Park, Birzeit University, Birzeit, Palestine, or by email.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <PageHero
          image={hero.url}
          eyebrow="Contact"
          title="Let us talk about the question you need answered"
          lead="Write to us with a brief outline of your question, timeline, and context, and we will respond with how we would approach it."
        />
        <Section eyebrow="Get in touch" title="Where to find us">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h3 className="text-xs uppercase tracking-[0.18em] text-primary">Office</h3>
              <ul className="mt-3 space-y-1 text-base">
                {site.addressLines.map((l) => (
                  <li key={l}>{l}</li>
                ))}
              </ul>
              <h3 className="mt-8 text-xs uppercase tracking-[0.18em] text-primary">
                Email
              </h3>
              <a
                href={`mailto:${site.email}`}
                className="mt-3 inline-block text-lg text-primary hover:underline"
              >
                {site.email}
              </a>
              <h3 className="mt-8 text-xs uppercase tracking-[0.18em] text-primary">
                Follow
              </h3>
              <ul className="mt-3 space-y-1">
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
            <div className="min-h-80 border border-border">
              <iframe
                title="Momentum Labs office location"
                src={`https://www.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&output=embed`}
                loading="lazy"
                className="size-full min-h-80"
              />
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
