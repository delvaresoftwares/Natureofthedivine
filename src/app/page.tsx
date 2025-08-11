import { HomeClient } from "./HomeClient";

// Generate static params for SEO (if applicable)
export async function generateStaticParams() {
  return [{ id: 'home' }]; // Adjust based on dynamic routes, if any
}

// Generate metadata for the home page
export const metadata = {
  title: "Nature of the Divine: A Philosophical Book on God, Nature & Existence",
  description: "Discover 'Nature of the Divine' by Alfas B, a philosophical exploration of God, consciousness, and existence. Align with the divine nature of reality.",
  alternates: {
    canonical: '/',
  },
};

export default async function Home() {
  // Pre-fetch or server-side data fetching (if needed)
  // Example: const data = await fetchHomeData();

  return (
    <section>
      <HomeClient />
    </section>
  );
}