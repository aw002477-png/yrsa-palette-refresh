export function PageHero({
  image,
  eyebrow,
  title,
  lead,
}: {
  image: string;
  eyebrow: string;
  title: string;
  lead: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-foreground">
      <img
        src={image}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 size-full object-cover opacity-40"
      />
      <div className="relative mx-auto w-full max-w-6xl px-5 py-24 md:py-32">
        <p className="text-xs uppercase tracking-[0.28em] text-primary">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-4xl leading-tight text-background md:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-background/80">{lead}</p>
      </div>
    </section>
  );
}

export function Section({
  eyebrow,
  title,
  children,
  muted = false,
}: {
  eyebrow?: string;
  title?: string;
  children: React.ReactNode;
  muted?: boolean;
}) {
  return (
    <section className={muted ? "bg-muted" : "bg-background"}>
      <div className="mx-auto w-full max-w-6xl px-5 py-20">
        {eyebrow && (
          <p className="text-xs uppercase tracking-[0.28em] text-primary">{eyebrow}</p>
        )}
        {title && (
          <h2 className="mt-3 max-w-3xl text-3xl leading-tight md:text-4xl">{title}</h2>
        )}
        <div className={eyebrow || title ? "mt-10" : ""}>{children}</div>
      </div>
    </section>
  );
}
