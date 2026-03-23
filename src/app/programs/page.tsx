import { SectionCard } from "@/components/ui/section-card";
import { tracks } from "@/content/site-content";

export default function ProgramsPage() {
  return (
    <div>
      <h1 className="page-title">Programs</h1>
      <p className="mb-8 max-w-3xl text-[var(--text-muted)]">
        Choose your track and follow a structured curriculum that combines mentoring, real projects, and career preparation.
      </p>
      <div className="space-y-5">
        {tracks.map((track) => (
          <section key={track.slug} id={track.slug} aria-labelledby={`${track.slug}-title`}>
            <SectionCard title={track.name}>
              <h2 id={`${track.slug}-title`} className="sr-only">
                {track.name}
              </h2>
              <p>{track.summary}</p>
              <p className="mt-2 text-sm">
                {track.capacity} - {track.duration}
              </p>
              <p className="mt-3 font-semibold">Skills</p>
              <ul className="list-inside list-disc">
                {track.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
              <p className="mt-3 font-semibold">Career Paths</p>
              <ul className="list-inside list-disc">
                {track.careers.map((career) => (
                  <li key={career}>{career}</li>
                ))}
              </ul>
            </SectionCard>
          </section>
        ))}
      </div>
    </div>
  );
}
