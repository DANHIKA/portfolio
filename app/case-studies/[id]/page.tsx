"use server";

import type { Metadata } from "next";
import CaseStudyClient from "@/components/case-study/CaseStudyClient";

type Params = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { id } = await params;
  try {
    const data = (await import(`@/data/case-studies/${id}.json`)).default as {
      title?: string;
      subtitle?: string;
      summary?: string;
    };
    return {
      title: data.title ? `${data.title} – Case Study` : "Case Study",
      description: data.summary || data.subtitle || "Case study details",
    };
  } catch {
    return {
      title: "Case Study",
      description: "Case study details",
    };
  }
}

type CaseStudyData = {
  id: string;
  title: string;
  subtitle?: string;
  summary?: string;
  problem?: string;
  solution?: string;
  pages?: Array<{
    name: string;
    purpose?: string;
    features?: string[];
    wireframe?: string;
    path?: string;
  }>;
  additionalWireframes?: Array<{
    name: string;
    purpose?: string;
    features?: string[];
    wireframe?: string;
    path?: string;
  }>;
};

export default async function CaseStudyPage({ params }: Params) {
  const { id } = await params;

  let data: CaseStudyData | null = null;
  try {
    // Dynamic import of the JSON data based on the id param
    const importedData = (await import(`@/data/case-studies/${id}.json`)).default as Omit<CaseStudyData, 'id'>;
    data = { ...importedData, id } as CaseStudyData;
  } catch {
    // Not found or missing data file
    return (
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Case study not found
          </h1>
          <p className="mt-4 text-muted-foreground">
            We couldn&apos;t find a case study for &quot;{id}&quot;. Please check the link or
            choose a different case study.
          </p>
        </div>
      </section>
    );
  }

  return <CaseStudyClient key={id} data={data} />;
}


