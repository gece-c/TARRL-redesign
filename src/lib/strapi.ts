const CONTENT_STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;
const CONTENT_STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN;

interface StrapiResponse<T> {
  data: T;
}

// Internship interface
export interface Internship {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  status: "Open" | "Closed" | "Filled";
  location: string;
  description: string;
  internship_status?: string;
}

// Normalize status 
function normalizeInternship(item: Internship): Internship {
  const status = item.status ?? item.internship_status;

  return {
    ...item,
    status: (status ?? "Filled") as Internship["status"],
  };
}

// Generic fetch for content Strapi
async function fetchContentAPI<T>(path: string): Promise<T> {
  if (!CONTENT_STRAPI_URL) {
    throw new Error("Missing CONTENT_STRAPI_URL");
  }

  const res = await fetch(`${CONTENT_STRAPI_URL}/api${path}`, {
    headers: {
      "Content-Type": "application/json",
      ...(CONTENT_STRAPI_API_TOKEN && {
        Authorization: `Bearer ${CONTENT_STRAPI_API_TOKEN}`,
      }),
    },
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    const errorText = await res.text();
    console.error("Strapi error:", errorText);
    throw new Error(`Error ${res.status}`);
  }

  return res.json();
}

//
// GET ALL INTERNSHIPS
//
export async function getAllInternships(): Promise<Internship[]> {
  try {
    const response = await fetchContentAPI<StrapiResponse<Internship[]>>(
      "/internships?populate=*&pagination[pageSize]=100"
    );

    return (response.data || []).map(normalizeInternship);
  } catch (error) {
    console.error("Failed to fetch internships:", error);
    return [];
  }
}

//
// GET ONE INTERNSHIP BY SLUG
//
export async function getInternship(slug: string): Promise<Internship | null> {
  try {
    const response = await fetchContentAPI<StrapiResponse<Internship[]>>(
      `/internships?filters[slug][$eq]=${slug}&populate=*`
    );

    const item = response.data?.[0];
    return item ? normalizeInternship(item) : null;
  } catch (error) {
    console.error("Failed to fetch internship:", error);
    return null;
  }
}