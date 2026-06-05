import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

const currentYear = new Date().getFullYear();

const navLinks = [
  { href: "/", label: "ראשי" },
  { href: "/about", label: "אודות" },
  { href: "/why-us", label: "למה לבחור בנו" },
  { href: "/gallery", label: "גלריה" },
  { href: "/programs", label: "תוכניות" },
  { href: "/camps", label: "מחנות" },
  { href: "/faq", label: "שאלות ותשובות" },
  { href: "/contact", label: "צור קשר" },
];

const contactLinks = [
  {
    href: "tel:+972553090366",
    label: "+972 55 309 0366",
    icon: Phone,
  },
  {
    href: "mailto:info@nextlevel.co.il",
    label: "info@nextlevel.co.il",
    icon: Mail,
  },
  {
    href: "https://wa.me/972553090366",
    label: "WhatsApp",
    icon: MessageCircle,
  },
  {
    href: "https://www.instagram.com/next_level_basketball_academy/",
    label: "@next_level_basketball_academy",
    // icon: AtSign,
    icon: InstagramIcon
  },
];

function InstagramIcon({
  size = 21,
  strokeWidth = 2.4,
}: {
  size?: number;
  strokeWidth?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth={strokeWidth}
      />
      <circle
        cx="12"
        cy="12"
        r="4"
        stroke="currentColor"
        strokeWidth={strokeWidth}
      />
      <circle cx="17.5" cy="6.5" r="1.35" fill="currentColor" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#030405]">
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,rgb(var(--cyan-rgb)/0.16),transparent_24rem),radial-gradient(circle_at_82%_8%,rgba(255,255,255,0.08),transparent_22rem)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-[min(1180px,calc(100%_-_32px))] py-[clamp(36px,7vw,72px)] max-[640px]:py-7">
        <div className="grid gap-9 max-[640px]:gap-5 lg:grid-cols-[1.2fr_0.75fr_0.9fr]">
          <div className="max-[640px]:text-center">
            <Link
              className="inline-flex items-center max-[640px]:justify-center"
              href="/"
              aria-label="Next Level - מעבר לעמוד הבית"
            >
              <Image
                className="h-auto w-32 object-contain max-[640px]:w-20"
                src="/assets/logo-navbar.png"
                alt="Next Level"
                width={160}
                height={110}
              />
            </Link>

            <p className="mt-4 max-w-[520px] text-[1rem] leading-[1.8] text-[#a8b3bd] max-[640px]:mx-auto max-[640px]:mt-2 max-[640px]:max-w-[330px] max-[640px]:text-[0.88rem] max-[640px]:leading-[1.55]">
              אקדמיית כדורסל לילדים ונוער, עם אימונים מקצועיים, יחס אישי
              ותהליך שמפתח טכניקה, ביטחון, חשיבה קבוצתית ואהבה למשחק.
            </p>

            <div className="mt-5 inline-flex items-start gap-2 text-[#f7fbff]/78 max-[640px]:mt-3 max-[640px]:max-w-[300px] max-[640px]:justify-center">
              <MapPin
                className="mt-1 shrink-0 text-[var(--cyan)] max-[640px]:mt-0.5"
                size={20}
                strokeWidth={2.4}
              />
              <span className="text-[0.98rem] leading-[1.7] max-[640px]:text-[0.84rem] max-[640px]:leading-[1.5]">
                נס ציונה - אימונים קבוצתיים ואישיים במגרשי האקדמיה ובמתחמים
                שותפים.
              </span>
            </div>
          </div>

          <nav
            aria-label="קישורי תחתית"
            className="max-[640px]:hidden max-[640px]:text-center"
          >
            <h2 className="m-0 text-[1.1rem] font-extrabold text-[#f7fbff] max-[640px]:text-[0.98rem]">
              ניווט מהיר
            </h2>
            <div className="mt-4 grid gap-2 max-[640px]:mt-2.5 max-[640px]:grid-cols-4 max-[640px]:gap-1.5">
              {navLinks.map((link) => (
                <Link
                  className="w-fit text-[1rem] font-bold text-[#a8b3bd] transition duration-300 hover:translate-x-[-4px] hover:text-[var(--cyan)] max-[640px]:mx-auto max-[640px]:w-full max-[640px]:rounded-md max-[640px]:bg-white/[0.045] max-[640px]:px-1.5 max-[640px]:py-1.5 max-[640px]:text-center max-[640px]:text-[0.76rem] max-[640px]:leading-tight"
                  href={link.href}
                  key={link.href}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>

          <div className="min-w-0 max-[640px]:text-center">
            <h2 className="m-0 text-[1.1rem] font-extrabold text-[#f7fbff] max-[640px]:text-[0.98rem]">
              פרטי התקשרות
            </h2>
            <div className="mt-4 grid gap-3 max-[640px]:mt-2.5 max-[640px]:grid-cols-2 max-[640px]:gap-1.5">
              {contactLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    className="group inline-flex w-fit min-w-0 items-center gap-3 text-[#a8b3bd] transition duration-300 hover:text-[var(--cyan)] max-[640px]:w-full max-[640px]:justify-start max-[640px]:gap-2 max-[640px]:rounded-md max-[640px]:bg-white/[0.045] max-[640px]:p-2 max-[640px]:text-right"
                    href={item.href}
                    key={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  >
                    <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-white/[0.06] text-[var(--cyan)] transition duration-300 group-hover:bg-[rgb(var(--cyan-rgb)/0.14)] max-[640px]:size-7 max-[640px]:rounded-md">
                      <Icon size={19} strokeWidth={2.4} />
                    </span>
                    <span
                      className="min-w-0 [overflow-wrap:anywhere] font-bold leading-[1.45] max-[640px]:text-[0.76rem] max-[640px]:leading-[1.25]"
                      dir={item.href.startsWith("tel:") ? "ltr" : undefined}
                    >
                      {item.label}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-5 text-[0.92rem] text-[#a8b3bd] max-[640px]:mt-5 max-[640px]:flex-col max-[640px]:justify-center max-[640px]:gap-2.5 max-[640px]:pt-3 max-[640px]:text-center max-[640px]:text-[0.76rem]">
          <p className="m-0">
            © {currentYear} Next Level Basketball Academy. כל הזכויות שמורות.
          </p>
          <Link
            className="font-bold transition duration-300 hover:text-[var(--cyan)]"
            href="/privacy"
          >
            מדיניות פרטיות
          </Link>
          <Link
            className="font-bold transition duration-300 hover:text-[var(--cyan)]"
            href="/terms"
          >
            תקנון ותנאי שימוש
          </Link>
          <Link
            className="font-bold transition duration-300 hover:text-[var(--cyan)]"
            href="/accessibility"
          >
            הצהרת נגישות
          </Link>
          <p className="m-0 max-[640px]:rounded-full max-[640px]:border max-[640px]:border-white/10 max-[640px]:bg-white/[0.045] max-[640px]:px-3 max-[640px]:py-1.5">
            Build by{" "}
            <a
              className="font-extrabold text-[var(--cyan)] transition duration-300 hover:text-[var(--cyan-light)]"
              href="https://example.com"
              target="_blank"
              rel="noreferrer"
            >
              Ido Shabat
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
