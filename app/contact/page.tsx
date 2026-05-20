import Link from "next/link";
import { WhatsappContactForm } from "@/components/contact/whatsapp-contact-form";
import {
  ArrowLeft,
  AtSign,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

const whatsappHref =
  "https://wa.me/972501234567?text=%D7%A9%D7%9C%D7%95%D7%9D%2C%20%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%A7%D7%91%D7%9C%20%D7%A4%D7%A8%D7%98%D7%99%D7%9D%20%D7%A2%D7%9C%20%D7%90%D7%A7%D7%93%D7%9E%D7%99%D7%99%D7%AA%20Next%20Level";

const contactMethods = [
  {
    title: "טלפון",
    value: "050-123-4567",
    href: "tel:0501234567",
    icon: Phone,
  },
  {
    title: "WhatsApp",
    value: "שלחו הודעה ונחזור אליכם",
    href: whatsappHref,
    icon: MessageCircle,
  },
  {
    title: "אימייל",
    value: "info@nextlevel.co.il",
    href: "mailto:info@nextlevel.co.il",
    icon: Mail,
  },
  {
    title: "אינסטגרם",
    value: "@next_level_basketball_academy",
    href: "https://www.instagram.com/next_level_basketball_academy/",
    icon: AtSign,
  },
];

const details = [
  {
    title: "אזור פעילות",
    text: "אימונים קבוצתיים ואישיים במגרשי האקדמיה ובמתחמים שותפים.",
    icon: MapPin,
  },
  {
    title: "שעות מענה",
    text: "ימים א׳-ה׳ בין 09:00-20:00. הודעות WhatsApp מתקבלות בכל שעה.",
    icon: Clock,
  },
];

export default function ContactPage() {
  return (
    <div className="overflow-hidden">
      <section className="relative isolate py-[clamp(56px,8vw,96px)]">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_10%,rgb(var(--cyan-rgb)/0.2),transparent_24rem)]" />

        <div className="mx-auto grid w-[min(1180px,calc(100%_-_32px))] gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="mb-3 text-[0.95rem] font-extrabold tracking-normal text-[var(--cyan)]">
              צרו קשר
            </p>
            <h1 className="m-0 text-[clamp(3rem,8vw,7rem)] leading-[0.9]">
              בואו נעלה רמה.
            </h1>
            <p className="mt-5 max-w-[620px] text-[clamp(1.08rem,2vw,1.25rem)] leading-[1.85] text-[#a8b3bd]">
              רוצים לשמוע על אימון ניסיון, קבוצת גיל מתאימה או תוכנית אישית?
              השאירו פרטים או שלחו הודעה ישירה, ונחזור אליכם עם כל המידע.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[linear-gradient(135deg,var(--cyan),var(--cyan-light))] px-5 py-3 text-[1.02rem] font-extrabold text-[#001013] shadow-[0_0_34px_rgb(var(--cyan-rgb)/0.35),inset_0_1px_0_rgba(255,255,255,0.5)] transition duration-300 hover:-translate-y-0.5"
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
              >
                שליחת WhatsApp
                <ArrowLeft size={20} strokeWidth={2.6} />
              </a>
              <a
                className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/15 bg-white/[0.06] px-5 py-3 text-[1.02rem] font-extrabold text-[#f7fbff] transition duration-300 hover:-translate-y-0.5 hover:border-[rgb(var(--cyan-rgb)/0.6)] hover:bg-[rgb(var(--cyan-rgb)/0.12)]"
                href="tel:0501234567"
              >
                התקשרו עכשיו
              </a>
            </div>
          </div>

          <WhatsappContactForm />
        </div>
      </section>

      <section className="mx-auto grid w-[min(1180px,calc(100%_-_32px))] gap-4 pb-[clamp(72px,10vw,120px)] lg:grid-cols-[1.2fr_0.8fr]">
        <div className="grid gap-4 sm:grid-cols-2">
          {contactMethods.map((method) => {
            const Icon = method.icon;

            return (
              <a
                className="group rounded-lg border border-white/10 bg-white/[0.055] p-5 transition duration-300 hover:-translate-y-1 hover:border-[rgb(var(--cyan-rgb)/0.45)] hover:bg-white/[0.075]"
                href={method.href}
                key={method.title}
                target={method.href.startsWith("http") ? "_blank" : undefined}
                rel={method.href.startsWith("http") ? "noreferrer" : undefined}
              >
                <div className="mb-5 grid size-12 place-items-center rounded-lg bg-[rgb(var(--cyan-rgb)/0.14)] text-[var(--cyan)] transition duration-300 group-hover:bg-[rgb(var(--cyan-rgb)/0.22)]">
                  <Icon size={24} strokeWidth={2.4} />
                </div>
                <h2 className="m-0 text-[1.35rem] leading-tight">
                  {method.title}
                </h2>
                <p className="mt-2 text-[1rem] leading-[1.65] text-[#a8b3bd]">
                  {method.value}
                </p>
              </a>
            );
          })}
        </div>

        <div className="grid gap-4">
          {details.map((item) => {
            const Icon = item.icon;

            return (
              <div
                className="rounded-lg border border-white/10 bg-white/[0.055] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
                key={item.title}
              >
                <div className="mb-4 inline-grid size-11 place-items-center rounded-lg bg-[rgb(var(--cyan-rgb)/0.14)] text-[var(--cyan)]">
                  <Icon size={22} strokeWidth={2.4} />
                </div>
                <h2 className="m-0 text-[1.35rem] leading-tight">
                  {item.title}
                </h2>
                <p className="mt-2 text-[1rem] leading-[1.75] text-[#a8b3bd]">
                  {item.text}
                </p>
              </div>
            );
          })}

          <div className="rounded-lg border border-[rgb(var(--cyan-rgb)/0.32)] bg-[rgb(var(--cyan-rgb)/0.1)] p-5">
            <h2 className="m-0 text-[1.45rem] leading-tight">
              רוצים לראות את התוכניות קודם?
            </h2>
            <p className="mt-2 text-[1rem] leading-[1.75] text-[#a8b3bd]">
              אפשר לעבור לעמוד התוכניות ולבחור את המסלול שהכי מתאים לשחקן/ית.
            </p>
            <Link
              className="mt-4 inline-flex items-center gap-2 font-extrabold text-[var(--cyan)] transition duration-300 hover:translate-x-[-4px]"
              href="/programs"
            >
              לתוכניות האימונים
              <ArrowLeft size={18} strokeWidth={2.6} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
