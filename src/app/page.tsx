"use client";

import { useEffect, useRef, useState } from "react";

const VIDEO_SRC =
  "https://videos.pexels.com/video-files/7884941/7884941-hd_1920_1080_25fps.mp4";

const NIGHTS = [
  {
    title: "Yacht Parties",
    copy: "Private decks, open water, and nights that start at golden hour and never quite end.",
  },
  {
    title: "Rooftop Nights",
    copy: "City skyline, cold drinks, warm company — curated evenings above the noise.",
  },
  {
    title: "Summer Socials",
    copy: "Members-only gatherings built for the season: sun, music, and the right crowd.",
  },
];

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    const play = async () => {
      try {
        await video.play();
        setReady(true);
      } catch {
        setReady(true);
      }
    };
    play();
  }, []);

  return (
    <main>
      <header className="fixed inset-x-0 top-0 z-40 mix-blend-difference">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a
            href="#top"
            className="font-[family-name:var(--font-display)] text-xl tracking-[0.12em] text-white"
          >
            LOCOS POLAKOS
          </a>
          <nav className="hidden gap-8 text-sm tracking-wide text-white/90 sm:flex">
            <a href="#nights" className="hover:text-white">
              Nights
            </a>
            <a href="#club" className="hover:text-white">
              The Club
            </a>
            <a href="#invite" className="hover:text-white">
              Invite
            </a>
          </nav>
        </div>
      </header>

      <section
        id="top"
        className="relative flex min-h-[100svh] items-end overflow-hidden"
      >
        <video
          ref={videoRef}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
            ready ? "opacity-100" : "opacity-0"
          }`}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="https://images.pexels.com/videos/7884941/pictures/preview-0.jpg"
        >
          <source src={VIDEO_SRC} type="video/mp4" />
        </video>

        <div className="hero-scrim absolute inset-0" aria-hidden />

        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-16 pt-32 sm:pb-20">
          <p className="animate-rise font-[family-name:var(--font-display)] text-5xl leading-[0.92] tracking-[0.02em] text-foam sm:text-7xl md:text-8xl lg:text-9xl">
            Locos Polakos
          </p>
          <p className="animate-rise-delay mt-5 max-w-xl text-base font-light leading-relaxed text-foam/90 sm:text-lg">
            A private summer social club for yacht parties, rooftop nights, and
            the people who actually show up.
          </p>
          <div className="animate-rise-delay-2 mt-9 flex flex-wrap gap-3">
            <a href="#invite" className="btn-primary">
              Request an invite
            </a>
            <a href="#nights" className="btn-ghost">
              See the nights
            </a>
          </div>
        </div>

        <div
          className="animate-drift absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-[11px] tracking-[0.35em] text-foam/70 uppercase"
          aria-hidden
        >
          Scroll
        </div>
      </section>

      <section id="nights" className="section-wave px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm tracking-[0.28em] text-sea uppercase">
            What we throw
          </p>
          <h2 className="mt-3 max-w-2xl font-[family-name:var(--font-display)] text-4xl leading-tight text-ink sm:text-5xl">
            Summer nights, properly done.
          </h2>

          <div className="mt-16 grid gap-12 border-t border-ink/10 pt-12 md:grid-cols-3 md:gap-10">
            {NIGHTS.map((night) => (
              <article key={night.title} className="group">
                <h3 className="font-[family-name:var(--font-display)] text-2xl text-ink transition-colors group-hover:text-sea sm:text-3xl">
                  {night.title}
                </h3>
                <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
                  {night.copy}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="club" className="night-panel px-6 py-24 text-foam sm:py-32">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="text-sm tracking-[0.28em] text-gold-bright uppercase">
              Private membership
            </p>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-4xl leading-tight sm:text-5xl md:text-6xl">
              Not a guest list.
              <br />
              A summer circle.
            </h2>
          </div>
          <p className="max-w-md text-base font-light leading-relaxed text-foam/85">
            Locos Polakos is invitation-led. We keep nights intimate, music
            sharp, and the vibe unmistakably summer — sea air, skyline light,
            and people who know how to celebrate.
          </p>
        </div>
      </section>

      <section id="invite" className="bg-sand px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-[family-name:var(--font-display)] text-4xl text-ink sm:text-5xl">
            Want in this season?
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-ink-soft">
            Tell us who you are. If the energy matches, we&apos;ll send an
            invite.
          </p>
          <form
            className="mt-10 grid gap-3 text-left sm:grid-cols-2"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thanks — we will be in touch soon.");
            }}
          >
            <label className="block sm:col-span-1">
              <span className="mb-2 block text-xs tracking-wider text-ink-soft uppercase">
                Name
              </span>
              <input
                required
                name="name"
                className="w-full border border-ink/15 bg-foam px-4 py-3 outline-none transition focus:border-sea"
              />
            </label>
            <label className="block sm:col-span-1">
              <span className="mb-2 block text-xs tracking-wider text-ink-soft uppercase">
                Email
              </span>
              <input
                required
                type="email"
                name="email"
                className="w-full border border-ink/15 bg-foam px-4 py-3 outline-none transition focus:border-sea"
              />
            </label>
            <label className="block sm:col-span-2">
              <span className="mb-2 block text-xs tracking-wider text-ink-soft uppercase">
                How do you know us?
              </span>
              <textarea
                name="note"
                rows={4}
                className="w-full resize-y border border-ink/15 bg-foam px-4 py-3 outline-none transition focus:border-sea"
              />
            </label>
            <div className="sm:col-span-2">
              <button type="submit" className="btn-primary w-full sm:w-auto">
                Request invite
              </button>
            </div>
          </form>
        </div>
      </section>

      <footer className="border-t border-ink/10 bg-sand-deep px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-[family-name:var(--font-display)] text-xl tracking-[0.08em] text-ink">
            Locos Polakos
          </p>
          <p className="text-sm text-ink-soft">
            Private summer social club · Yacht & rooftop nights
          </p>
        </div>
      </footer>
    </main>
  );
}
