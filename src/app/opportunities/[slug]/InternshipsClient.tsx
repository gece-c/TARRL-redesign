'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

interface Internship {
  id: number
  title: string
  slug: string
  status: string
}

const statusPriority: Record<string, number> = {
  Open: 0,
  'Closing Soon': 1,
  Pending: 2,
  Filled: 3,
}

function sortInternships(list: Internship[]) {
  return [...list].sort((a, b) => {
    const aPriority = statusPriority[a.status] ?? 99
    const bPriority = statusPriority[b.status] ?? 99

    if (aPriority !== bPriority) {
      return aPriority - bPriority
    }

    return a.title.localeCompare(b.title)
  })
}

export default function InternshipsClient({ internships }: { internships: Internship[] }) {
  const [filteredInternships, setFilteredInternships] = useState<Internship[]>([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    setFilteredInternships(sortInternships(internships))
  }, [internships])

  useEffect(() => {
    const filtered = internships.filter((internship) =>
      internship.title.toLowerCase().includes(searchTerm.toLowerCase())
    )

    setFilteredInternships(sortInternships(filtered))
  }, [searchTerm, internships])

  return (
    <main className="min-h-screen bg-white pt-20">
      <section className="py-16">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h1 className="text-4xl font-bold mb-6 text-[#00349B]">
            Internship Positions
          </h1>

          <input
            type="text"
            placeholder="Search internships..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 border rounded-lg"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredInternships.map((internship) => (
            <Link
              key={internship.id}
              href={`/internships/${internship.slug}`}
              className="p-6 border rounded-lg hover:shadow"
            >
              <h3>{internship.title}</h3>
              <span>{internship.status}</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}