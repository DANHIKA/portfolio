"use server";

import type { Metadata } from "next";
import CaseStudyClient from "@/components/case-study/CaseStudyClient";

type Params = {
  params: { id: string };
};

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { id } = params;
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

export default async function CaseStudyPage({ params }: Params) {
  const { id } = params;

  let data: any | null = null;
  try {
    // Dynamic import of the JSON data based on the id param
    data = (await import(`@/data/case-studies/${id}.json`)).default;
  } catch (e) {
    // Not found or missing data file
    return (
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Case study not found
          </h1>
          <p className="mt-4 text-muted-foreground">
            We couldn't find a case study for "{id}". Please check the link or
            choose a different case study.
          </p>
        </div>
      </section>
    );
  }

  return <CaseStudyClient key={id} data={data} />;
}


