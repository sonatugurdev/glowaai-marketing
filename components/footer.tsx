import { Logo } from "./logo";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-forest text-cream/80">
      {/* Subtle mesh glow */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[400px] w-[600px] -translate-x-1/2 rounded-full opacity-20 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(93,184,122,0.4) 0%, transparent 70%)"
        }}
        aria-hidden
      />

      <div className="container-edge relative py-16 md:py-20">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Logo variant="light" />
            <p className="mt-5 max-w-xs text-[14px] leading-[1.7] text-cream/60">
              AI pre-visit intelligence for independent medspas. Built by
              clinicians and engineers who think medspas deserve better than
              clipboards.
            </p>
          </div>

          <FooterCol
            title="Product"
            links={[
              { label: "How it works", href: "#how" },
              { label: "Features", href: "#product" },
              { label: "FAQ", href: "#faq" },
              { label: "Waitlist", href: "#waitlist" }
            ]}
          />

          <FooterCol
            title="Company"
            links={[
              { label: "About", href: "#" },
              { label: "Careers", href: "#" },
              { label: "Contact", href: "mailto:hello@glowaai.com" }
            ]}
          />

          <FooterCol
            title="Legal"
            links={[
              { label: "Privacy", href: "/privacy" },
              { label: "Terms", href: "/terms" },
              { label: "HIPAA", href: "/hipaa" }
            ]}
          />
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-cream/10 pt-8 md:flex-row md:items-center">
          <p className="text-[12px] text-cream/50">
            &copy; {new Date().getFullYear()} Glowa AI. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.14em] text-cream/50">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-mint" />
            </span>
            In private beta
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h4 className="mb-4 text-[11px] font-medium uppercase tracking-[0.14em] text-cream/50">
        {title}
      </h4>
      <ul className="space-y-2.5">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="text-[14px] text-cream/80 transition-colors hover:text-mint-light"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
