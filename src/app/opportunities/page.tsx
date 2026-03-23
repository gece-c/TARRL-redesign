import { ButtonLink } from "@/components/ui/button-link";
import { SectionCard } from "@/components/ui/section-card";
import { opportunityPages } from "@/content/site-content";

export default function OpportunitiesPage() {
  return (
    <div className="space-y-10">
      <section className="text-center">
        <h1 className="page-title">Opportunities</h1>
        <p className="mx-auto mb-8 max-w-3xl text-[var(--text-muted)]">
          Discover pathways designed to help you gain experience, build networks, and grow into high-impact tech
          careers.
        </p>
      </section>

      <section aria-label="Opportunity categories" className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {opportunityPages.map((item) => (
          <SectionCard
            key={item.slug}
            title={item.title}
            footer={
              <ButtonLink href={`/opportunities/${item.slug}`} variant="secondary">
                {item.ctaLabel}
              </ButtonLink>
            }
          >
            <p>{item.summary}</p>
          </SectionCard>
        ))}
      </section>
    </div>
  );
}
