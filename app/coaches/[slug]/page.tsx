import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Trophy,
  Users,
} from "lucide-react";
import { coaches } from "@/data/coaches";

type CoachPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function getCoach(slug: string) {
  return coaches.find((coach) => coach.slug === slug);
}

export function generateStaticParams() {
  return coaches.map((coach) => ({
    slug: coach.slug,
  }));
}

export async function generateMetadata({
  params,
}: CoachPageProps): Promise<Metadata> {
  const { slug } = await params;
  const coach = getCoach(slug);

  if (!coach) {
    return {
      title: "מאמן לא נמצא | Next Level",
    };
  }

  return {
    title: `${coach.name} | Next Level`,
    description: coach.description,
  };
}

export default async function CoachPage({ params }: CoachPageProps) {
  const { slug } = await params;
  const coach = getCoach(slug);

  if (!coach) {
    notFound();
  }

  const otherCoaches = coaches.filter((item) => item.slug !== coach.slug);

  return (
    <div className="overflow-hidden">
      <section className="relative isolate py-[clamp(56px,8vw,96px)]">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_76%_8%,rgb(var(--cyan-rgb)/0.18),transparent_24rem)]" />

        <div className="mx-auto grid w-[min(1180px,calc(100%_-_32px))] gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <Link
              className="mb-6 inline-flex items-center gap-2 font-extrabold text-[var(--cyan)] transition duration-300 hover:translate-x-1"
              href="/about"
            >
              <ArrowRight size={18} strokeWidth={2.6} />
              חזרה לאודות
            </Link>

            <p className="mb-3 inline-flex items-center gap-2 text-[0.95rem] font-extrabold tracking-normal text-[var(--cyan)]">
              <Users size={19} strokeWidth={2.4} />
              הצוות שלנו
            </p>
            <h1 className="m-0 text-[clamp(3rem,8vw,7rem)] leading-[0.9]">
              {coach.name}
            </h1>
            <p className="mt-4 text-[clamp(1.12rem,2vw,1.35rem)] font-extrabold text-[#f7fbff]/86">
              {coach.role}
            </p>
            <p className="mt-5 max-w-[680px] text-[clamp(1.05rem,2vw,1.22rem)] leading-[1.85] text-[#a8b3bd]">
              {coach.headline}
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-[500px] overflow-hidden rounded-lg border border-white/10 bg-white/[0.055] shadow-[0_28px_90px_rgba(0,0,0,0.34),inset_0_1px_0_rgba(255,255,255,0.1)]">
            <div className="aspect-[4/5] bg-[#0b1114]">
              <img
                className="h-full w-full object-cover"
                src={coach.image}
                alt={`תמונה של ${coach.name}`}
              />
            </div>
            <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(0deg,rgba(3,4,5,0.94),transparent)] p-5">
              <p className="m-0 inline-flex items-center gap-2 rounded-lg bg-[#030405]/74 px-3 py-2 text-[0.9rem] font-extrabold text-[var(--cyan)] backdrop-blur-md">
                <Sparkles size={16} strokeWidth={2.5} />
                {coach.role}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-[min(1180px,calc(100%_-_32px))] gap-8 pb-[clamp(72px,10vw,120px)] lg:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-lg border border-white/10 bg-white/[0.055] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
          <p className="mb-2 inline-flex items-center gap-2 text-[0.95rem] font-extrabold text-[var(--cyan)]">
            <Trophy size={18} strokeWidth={2.4} />
            על המאמן
          </p>
          <h2 className="m-0 text-[clamp(2rem,4vw,3.6rem)] leading-none">
            הדרך והגישה
          </h2>

          <div className="mt-6 grid gap-4">
            {coach.bio.map((paragraph) => (
              <p
                className="m-0 text-[1.05rem] leading-[1.85] text-[#a8b3bd]"
                key={paragraph}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="rounded-lg border border-white/10 bg-white/[0.055] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
          <p className="mb-2 text-[0.95rem] font-extrabold text-[var(--cyan)]">
            תחומי התמחות
          </p>
          <h2 className="m-0 text-[clamp(1.8rem,3vw,2.8rem)] leading-tight">
            במה הוא מתמקד באימונים
          </h2>

          <div className="mt-6 grid gap-3">
            {coach.focus.map((item) => (
              <div
                className="flex min-h-14 items-start gap-3 rounded-lg border border-white/10 bg-[#030405]/42 p-4 text-[1rem] font-extrabold leading-[1.55] text-[#f7fbff]/84"
                key={item}
              >
                <CheckCircle2
                  className="mt-1 shrink-0 text-[var(--cyan)]"
                  size={19}
                  strokeWidth={2.5}
                />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <Link
            className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[linear-gradient(135deg,var(--cyan),var(--cyan-light))] px-5 py-3 text-[1.02rem] font-extrabold text-[#001013] shadow-[0_0_28px_rgb(var(--cyan-rgb)/0.24),inset_0_1px_0_rgba(255,255,255,0.5)] transition duration-300 hover:-translate-y-0.5"
            href="/contact"
          >
            קביעת אימון ניסיון
            <ArrowLeft size={20} strokeWidth={2.6} />
          </Link>
        </div>
      </section>

      <section className="mx-auto w-[min(1180px,calc(100%_-_32px))] pb-[clamp(72px,10vw,120px)]">
        <div className="mb-6 max-w-[720px]">
          <p className="mb-2 text-[0.95rem] font-extrabold text-[var(--cyan)]">
            מאמנים נוספים
          </p>
          <h2 className="m-0 text-[clamp(2rem,4.5vw,4rem)] leading-none">
            הכירו את שאר הצוות
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {otherCoaches.slice(0, 4).map((item) => (
            <Link
              className="group overflow-hidden rounded-lg border border-white/10 bg-white/[0.055] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition duration-300 hover:-translate-y-1 hover:border-[rgb(var(--cyan-rgb)/0.42)] hover:bg-white/[0.075]"
              href={`/coaches/${item.slug}`}
              key={item.slug}
            >
              <div className="aspect-[4/3] overflow-hidden bg-[#0b1114]">
                <img
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  src={item.image}
                  alt={`תמונה של ${item.name}`}
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <p className="mb-1 text-[0.85rem] font-extrabold text-[var(--cyan)]">
                  {item.role}
                </p>
                <h3 className="m-0 text-[1.18rem] leading-tight">
                  {item.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
