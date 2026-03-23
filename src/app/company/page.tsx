import { SectionCard } from "@/components/ui/section-card";

export default function CompanyPage() {
  return (
    <div>
      <h1 className="page-title">About Innovation Bootcamp University</h1>
      <p className="mb-8 max-w-3xl text-[var(--text-muted)]">
        We are reworking the experience around a cooperative education model that moves students from foundational learning into paid project work.
      </p>
      <div className="grid gap-5 md:grid-cols-3">
        <SectionCard title="Mission">
          <p>Build practical, inclusive pathways into technology careers through structured instruction and applied work.</p>
        </SectionCard>
        <SectionCard title="What Makes Us Different">
          <p>
            Students progress from paying for foundational learning into earning while learning in advanced tiers with industry mentorship.
          </p>
        </SectionCard>
        <SectionCard title="Contact">
          <p>
            Keep this block as a placeholder for final contact channels from your content source before launch.
          </p>
        </SectionCard>
      </div>
    </div>
  );
}
