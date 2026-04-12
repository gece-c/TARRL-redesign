import { getAllInternships } from '@/lib/strapi'
import InternshipsClient from './InternshipsClient'

export default async function InternshipsPage() {
  const internships = await getAllInternships()

  return <InternshipsClient internships={internships} />
}