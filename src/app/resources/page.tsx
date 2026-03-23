import { SectionCard } from "@/components/ui/section-card";
import { resources } from "@/content/site-content";
import { ButtonLink } from "@/components/ui/button-link";

export default function ResourcesPage() {
  return (
    <div className="space-y-10">
      <section className="text-center">
        <h1 className="page-title">Learning Resources</h1>
        <p className="mx-auto mb-8 max-w-3xl text-[var(--text-muted)]">
          Access our comprehensive collection of learning materials, tutorials, and guides to support your learning
          journey.
        </p>
      </section>

      <section aria-label="Resource categories" className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {resources.map((resource) => (
          <SectionCard
            key={resource.slug}
            title={resource.title}
            footer={
              <ButtonLink href={`/resources/${resource.slug}`} variant="secondary">
                Open Page
              </ButtonLink>
            }
          >
            <p>{resource.summary}</p>
          </SectionCard>
        ))}
      </section>

      <section aria-labelledby="featured-resources-title">
        <h2 id="featured-resources-title" className="mb-4 text-3xl font-semibold">
          Featured Resources
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          <SectionCard title="Complete Web Development Guide">
            <p className="text-sm text-[var(--text-muted)]">Guide · 8 hours</p>
            <p className="mt-3">A comprehensive guide covering HTML, CSS, JavaScript, and modern frameworks.</p>
          </SectionCard>
          <SectionCard title="React Best Practices">
            <p className="text-sm text-[var(--text-muted)]">Tutorial · 4 hours</p>
            <p className="mt-3">Learn the best practices for building scalable React applications.</p>
          </SectionCard>
          <SectionCard title="API Development with Node.js">
            <p className="text-sm text-[var(--text-muted)]">Course · 6 hours</p>
            <p className="mt-3">Build robust and scalable APIs using Node.js and Express.</p>
          </SectionCard>
        </div>
      </section>
    </div>
  );
}
