import { ButtonLink } from "@/components/ui/button-link";
import { IndustryFeedbackCarousel } from "@/components/industry-feedback-carousel";
import { SectionCard } from "@/components/ui/section-card";
import Image from "next/image";
import {
  careerOpportunitiesSection,
  faqAccordionItems,
  hero,
  industryFeedbackSection,
  tiers,
  tracks,
  whyChoose
} from "@/content/site-content";

export default function HomePage() {
  return (
    <div className="space-y-14">
      <section aria-labelledby="home-title" className="hero-reference">
        <div className="hero-reference__content">
          <p className="mb-3 inline-block rounded-full border border-[var(--primary)] px-3 py-1 text-sm text-[var(--primary)]">
            {hero.badge}
          </p>
          <h1 id="home-title" className="page-title">
            Applications Open for 2026
            <br />
            <span className="hero-reference__title-accent">Launch Your Tech Career</span>
          </h1>
          <p className="max-w-2xl text-[var(--text-muted)]">{hero.body}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <ButtonLink href={hero.actions[0].href}>{hero.actions[0].label}</ButtonLink>
            <ButtonLink href={hero.actions[1].href} variant="ghost">
              {hero.actions[1].label}
            </ButtonLink>
          </div>
        </div>

        <div className="hero-reference__media-wrap" aria-label="Hero program highlights">
          <div className="hero-reference__blob hero-reference__blob--cyan" aria-hidden="true" />
          <div className="hero-reference__blob hero-reference__blob--purple" aria-hidden="true" />
          <Image
            src="/hero-person.svg"
            alt="Student standing in front of abstract shapes"
            width={531}
            height={582}
            className="hero-reference__person"
            priority
          />
          {hero.stats.map((stat, index) => (
            <article
              key={stat.label}
              className={`hero-stat-card hero-stat-card--${index + 1}`}
              aria-label={`${stat.label}: ${stat.value}`}
            >
              <p className="hero-stat-card__icon" aria-hidden="true">
                {index === 0 ? "◌◌" : index === 1 ? "$" : index === 2 ? "○" : "</>"}
              </p>
              <p className="hero-stat-card__value">{stat.value}</p>
              <p className="hero-stat-card__label">{stat.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="why-choose-title" className="rounded-2xl bg-[var(--surface)] p-8">
        <p className="mb-3 inline-block rounded-full border border-[var(--primary)] px-3 py-1 text-sm text-[var(--primary)]">
          {whyChoose.badge}
        </p>
        <h2 id="why-choose-title" className="page-title max-w-3xl">
          {whyChoose.title}
        </h2>
        <p className="max-w-3xl text-[var(--text-muted)]">{whyChoose.body}</p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {whyChoose.points.map((point) => (
            <article
              key={point.title}
              className="rounded-xl border border-[#4a4a4a] bg-[var(--bg)]/45 p-5"
            >
              <div className="mb-4 text-2xl leading-none" aria-hidden="true">
                {point.icon}
              </div>
              <h3 className="mb-2 text-xl font-semibold">{point.title}</h3>
              <p className="text-[var(--text-muted)]">{point.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="tracks-title">
        <h2 id="tracks-title" className="mb-6 text-3xl font-semibold">
          Specialized Learning Tracks
        </h2>
        <div className="grid gap-5 md:grid-cols-3">
          {tracks.map((track) => (
            <SectionCard
              key={track.slug}
              title={track.name}
              footer={
                <ButtonLink href={`/programs#${track.slug}`} variant="secondary">
                  Explore Track
                </ButtonLink>
              }
            >
              <p>{track.summary}</p>
              <p className="mt-3 text-sm">
                {track.capacity} - {track.duration}
              </p>
            </SectionCard>
          ))}
        </div>
      </section>

      <section aria-labelledby="tiers-title">
        <h2 id="tiers-title" className="mb-6 text-3xl font-semibold">
          From Paying to Earning
        </h2>
        <p className="mb-8 max-w-3xl text-[var(--text-muted)]">
          Our cooperative education model transitions you from student to paid professional. Start with
          foundational learning, then progress to earning while continuing your education.
        </p>
        <div className="grid gap-5 md:grid-cols-3">
          {tiers.map((tier, index) => (
            <article
              key={tier.id}
              className="flex h-full flex-col overflow-hidden rounded-xl border border-[#4a4a4a] bg-[var(--surface)]"
            >
              <div
                className={`p-5 ${
                  index === 0
                    ? "bg-gradient-to-br from-[#0d8fae] via-[var(--primary)] to-[#39c7e8]"
                    : index === 1
                      ? "bg-gradient-to-br from-[#6f45c2] via-[var(--secondary)] to-[#b187e5]"
                      : "bg-gradient-to-br from-[#0b7d98] via-[#13a7cb] to-[#8b7ce6]"
                } flex min-h-[300px] flex-col`}
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/15 text-sm font-semibold text-white">
                    {index + 1}
                  </span>
                  <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white">
                    Tier {index + 1}
                  </span>
                </div>
                <h3 className="mb-2 text-2xl font-semibold text-white">{tier.title}</h3>
                <p className="text-white/90">
                  {index === 0
                    ? "Build a strong foundation in web development fundamentals with expert instruction and hands-on projects."
                    : index === 1
                      ? "Accelerate your learning with advanced concepts and begin earning through real-world project participation."
                      : "Work on complex projects, lead development teams, and earn higher compensation with advanced skills."}
                </p>
              </div>

              <div className="mt-auto grid grid-cols-2 gap-3 p-5">
                <div className="rounded-lg border border-[#4a4a4a] bg-[var(--bg)]/40 p-3 text-center">
                  <p className="text-xs text-[var(--text-muted)]">Potential Earnings</p>
                  <p className="mt-1 text-2xl font-semibold text-[var(--primary)]">{tier.earning}</p>
                </div>
                <div className="rounded-lg border border-[#4a4a4a] bg-[var(--bg)]/40 p-3 text-center">
                  <p className="text-xs text-[var(--text-muted)]">Duration</p>
                  <p className="mt-1 text-2xl font-semibold text-[var(--secondary)]">{tier.duration}</p>
                </div>
              </div>

              <div className="px-5 pb-5">
                <p className="mb-2 text-sm font-semibold">Key Skills</p>
                <div className="flex flex-wrap gap-2">
                  {tier.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-[#4a4a4a] bg-[var(--bg)]/45 px-2 py-1 text-sm text-[var(--text-muted)]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="career-opportunities-title" className="rounded-2xl bg-[var(--surface)] p-8">
        <h2 id="career-opportunities-title" className="mb-4 text-3xl font-semibold">
          Career <span className="text-[var(--primary)]">Opportunities</span>
        </h2>
        <p className="max-w-3xl text-[var(--text-muted)]">{careerOpportunitiesSection.body}</p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {careerOpportunitiesSection.highlights.map((item) => (
            <article
              key={item.label}
              className="rounded-xl border border-[#4a4a4a] bg-[var(--bg)]/35 p-5 text-center"
            >
              <div className="mx-auto mb-4 text-3xl leading-none" aria-hidden="true">
                {item.icon}
              </div>
              <p className="text-4xl font-semibold">{item.value}</p>
              <p className="mt-1 text-[var(--text-muted)]">{item.label}</p>
            </article>
          ))}
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-4">
          {careerOpportunitiesSection.roles.map((role) => (
            <article
              key={role.title}
              className="rounded-xl border border-[#4a4a4a] bg-[var(--bg)]/35 p-5"
            >
              <div className="mb-4 text-2xl leading-none" aria-hidden="true">
                {role.icon}
              </div>
              <h3 className="mb-2 text-xl font-semibold">{role.title}</h3>
              <p className="text-sm text-[var(--text-muted)]">{role.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="industry-feedback-title" className="rounded-2xl bg-[var(--surface)] p-8">
        <p className="mb-3 inline-block rounded-full border border-[var(--primary)] px-3 py-1 text-sm text-[var(--primary)]">
          {industryFeedbackSection.badge}
        </p>
        <h2 id="industry-feedback-title" className="page-title max-w-3xl">
          {industryFeedbackSection.title}
        </h2>
        <p className="max-w-3xl text-[var(--text-muted)]">{industryFeedbackSection.body}</p>

        <IndustryFeedbackCarousel testimonials={industryFeedbackSection.testimonials} />
      </section>

      <section aria-labelledby="faq-title">
        <h2 id="faq-title" className="mb-6 text-3xl font-semibold">
          Frequently Asked Questions
        </h2>
        <div className="space-y-3">
          {faqAccordionItems.map((item) => (
            <details key={item.question} className="rounded-xl border border-[#4a4a4a] bg-[var(--surface)] p-4">
              <summary className="focus-ring cursor-pointer rounded font-semibold">{item.question}</summary>
              <p className="mt-3 text-[var(--text-muted)]">{item.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
