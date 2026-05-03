import Image from "next/image";
import Link from "next/link";
import { AtSign, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

const currentYear = new Date().getFullYear();

const navLinks = [
  { href: "/", label: "ראשי" },
  { href: "/about", label: "אודות" },
  { href: "/players", label: "שחקנים שלנו" },
  { href: "/gallery", label: "גלריה" },
  { href: "/programs", label: "תוכניות" },
  { href: "/camps", label: "מחנות" },
  { href: "/faq", label: "שאלות ותשובות" },
  { href: "/contact", label: "צור קשר" },
];

const contactLinks = [
  {
    href: "tel:0501234567",
    label: "050-123-4567",
    icon: Phone,
  },
  {
    href: "mailto:info@nextlevel.co.il",
    label: "info@nextlevel.co.il",
    icon: Mail,
  },
  {
    href: "https://wa.me/972501234567",
    label: "WhatsApp",
    icon: MessageCircle,
  },
  {
    href: "https://www.instagram.com/next_level_basketball_academy/",
    label: "@next_level_basketball_academy",
    icon: AtSign,
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#030405]">
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,rgb(var(--cyan-rgb)/0.16),transparent_24rem),radial-gradient(circle_at_82%_8%,rgba(255,255,255,0.08),transparent_22rem)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-[min(1180px,calc(100%_-_32px))] py-[clamp(36px,7vw,72px)]">
        <div className="grid gap-9 max-[640px]:gap-8 lg:grid-cols-[1.2fr_0.75fr_0.9fr]">
          <div className="max-[640px]:text-center">
            <Link
              className="inline-flex items-center max-[640px]:justify-center"
              href="/"
              aria-label="Next Level - מעבר לעמוד הבית"
            >
              <Image
                className="h-auto w-32 object-contain max-[640px]:w-28"
                src="/assets/logo-navbar.png"
                alt="Next Level"
                width={160}
                height={110}
              />
            </Link>

            <p className="mt-4 max-w-[520px] text-[1rem] leading-[1.8] text-[#a8b3bd] max-[640px]:mx-auto max-[640px]:text-[0.98rem]">
              אקדמיית כדורסל לילדים ונוער, עם אימונים מקצועיים, יחס אישי
              ותהליך שמפתח טכניקה, ביטחון, חשיבה קבוצתית ואהבה למשחק.
            </p>

            <div className="mt-5 inline-flex items-start gap-2 text-[#f7fbff]/78 max-[640px]:max-w-[320px] max-[640px]:justify-center">
              <MapPin
                className="mt-1 shrink-0 text-[var(--cyan)]"
                size={20}
                strokeWidth={2.4}
              />
              <span className="text-[0.98rem] leading-[1.7]">
                אימונים קבוצתיים ואישיים במגרשי האקדמיה ובמתחמים שותפים.
              </span>
            </div>
          </div>

          <nav aria-label="קישורי תחתית" className="max-[640px]:text-center">
            <h2 className="m-0 text-[1.1rem] font-extrabold text-[#f7fbff] max-[640px]:text-[1.05rem]">
              ניווט מהיר
            </h2>
            <div className="mt-4 grid gap-2 max-[640px]:grid-cols-2 max-[640px]:gap-2.5">
              {navLinks.map((link) => (
                <Link
                  className="w-fit text-[1rem] font-bold text-[#a8b3bd] transition duration-300 hover:translate-x-[-4px] hover:text-[var(--cyan)] max-[640px]:mx-auto max-[640px]:rounded-lg max-[640px]:bg-white/[0.045] max-[640px]:px-3 max-[640px]:py-2 max-[640px]:text-[0.95rem]"
                  href={link.href}
                  key={link.href}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>

          <div className="min-w-0 max-[640px]:text-center">
            <h2 className="m-0 text-[1.1rem] font-extrabold text-[#f7fbff] max-[640px]:text-[1.05rem]">
              פרטי התקשרות
            </h2>
            <div className="mt-4 grid gap-3">
              {contactLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    className="group inline-flex w-fit min-w-0 items-center gap-3 text-[#a8b3bd] transition duration-300 hover:text-[var(--cyan)] max-[640px]:w-full max-[640px]:justify-start max-[640px]:rounded-lg max-[640px]:bg-white/[0.045] max-[640px]:p-3 max-[640px]:text-right"
                    href={item.href}
                    key={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  >
                    <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-white/[0.06] text-[var(--cyan)] transition duration-300 group-hover:bg-[rgb(var(--cyan-rgb)/0.14)]">
                      <Icon size={19} strokeWidth={2.4} />
                    </span>
                    <span className="min-w-0 [overflow-wrap:anywhere] font-bold leading-[1.45]">
                      {item.label}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-5 text-[0.92rem] text-[#a8b3bd] max-[640px]:mt-8 max-[640px]:justify-center max-[640px]:text-center max-[640px]:text-[0.86rem]">
          <p className="m-0">
            © {currentYear} Next Level Basketball Academy. כל הזכויות שמורות.
          </p>
          <p className="m-0">
            נבנה על ידי{" "}
            <a
              className="font-extrabold text-[var(--cyan)] transition duration-300 hover:text-[var(--cyan-light)]"
              href="https://example.com"
              target="_blank"
              rel="noreferrer"
            >
              עידו שבת
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
