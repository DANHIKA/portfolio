"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Iphone } from "@/components/ui/iphone";
import { Button } from "@/components/ui/button";

import { sendEmail } from "@/lib/api/email";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

type CaseStudyFeature = {
  name: string;
  purpose?: string;
  features?: string[];
  wireframe?: string;
  path?: string;
};

type CaseStudyData = {
  id: string;
  title: string;
  subtitle?: string;
  summary?: string;
  problem?: string;
  solution?: string;
  pages?: CaseStudyFeature[];
  additionalWireframes?: CaseStudyFeature[];
};

type FormStatus = "idle" | "loading" | "success" | "error";

const defaultFormState = {
  name: "",
  email: "",
  message: "",
};

function formatFeature(feature: string) {
  const parts = feature.split(":");
  if (parts.length > 1) {
    const mainTerm = parts[0].trim();
    const description = parts.slice(1).join(":").trim();
    return (
      <>
        <span className="font-semibold text-foreground">{mainTerm}:</span> {description}
      </>
    );
  }
  return feature;
}

export default function CaseStudyClient({ data }: { data: CaseStudyData }) {
  const [formState, setFormState] = useState(defaultFormState);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [error, setError] = useState("");

  const pages = data.pages ?? [];
  const heroPage = pages[0];
  const remainingPages = pages.slice(1);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formState.name || !formState.email || !formState.message) {
      setStatus("error");
      setError("Please fill out all fields");
      return;
    }

    setStatus("loading");
    const { success, error: apiError } = await sendEmail(formState);

    if (success) {
      setStatus("success");
      setFormState(defaultFormState);
    } else {
      setStatus("error");
      setError(apiError || "Failed to send message. Please try again later.");
    }
  };

  return (
    <section className="container mx-auto max-w-5xl px-6 py-16 md:py-20 lg:py-28">
      <Breadcrumb className="mb-12 md:mb-16">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/case-studies">Case Studies</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{data.title}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <motion.header
        initial={false}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-20 md:mb-28 space-y-8"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
          {data.title}
        </h1>

        {heroPage && (heroPage.wireframe || heroPage.path) && (
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center py-8"
          >
            <div className="w-full max-w-sm md:max-w-md">
              <Iphone
                src={heroPage.wireframe ?? heroPage.path!}
                className="w-full"
                aria-label={`${data.title} preview`}
              />
            </div>
          </motion.div>
        )}

        {data.subtitle && (
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
            {data.subtitle}
          </p>
        )}
      </motion.header>

      {(data.problem || data.solution) && (
        <div className="mb-28 md:mb-36 space-y-20">
          {data.problem && (
            <motion.div
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="mb-6 text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">Problem</h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl">
                {data.problem}
              </p>
            </motion.div>
          )}

          {data.solution && (
            <motion.div
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className="mb-6 text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">Solution</h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl">
                {data.solution}
              </p>
            </motion.div>
          )}
        </div>
      )}

      {remainingPages.length > 0 && (
        <div className="space-y-28 md:space-y-36 mb-28 md:mb-36">
          {remainingPages.map((page, index) => {
            const imageSrc = page.wireframe ?? page.path;

            return (
              <motion.div
                key={`${page.name}-${index}`}
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="space-y-8"
              >
                <div className="space-y-4">
                  <div className="text-sm text-muted-foreground font-medium tracking-wider">
                    {String(index + 2).padStart(2, "0")}
                  </div>
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
                    {page.name}
                  </h3>
                  {page.purpose && (
                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl">
                      {page.purpose}
                    </p>
                  )}
                </div>

                {imageSrc && (
                  <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }} className="flex justify-center py-6">
                    <div className="w-full max-w-sm md:max-w-md">
                      <Iphone src={imageSrc} className="w-full" aria-label={`${page.name} wireframe`} />
                    </div>
                  </motion.div>
                )}

                {page.features && page.features.length > 0 && (
                  <div className="space-y-3 max-w-3xl">
                    {page.features.map((feature, featureIndex) => (
                      <motion.p
                        key={`${page.name}-${featureIndex}`}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: featureIndex * 0.05 }}
                        className="text-base text-muted-foreground leading-relaxed"
                      >
                        <span className="font-medium text-foreground mr-2">{featureIndex + 1}.</span>
                        {formatFeature(feature)}
                      </motion.p>
                    ))}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      )}

      {data.additionalWireframes && data.additionalWireframes.length > 0 && (
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-28 md:mb-36"
        >
          <h3 className="mb-12 text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">Additional Screens</h3>
          <div className="space-y-16">
            {data.additionalWireframes.map((wireframe, index) => {
              const imageSrc = wireframe.wireframe ?? wireframe.path;

              return (
                <motion.div
                  key={`${wireframe.name}-${index}`}
                  initial={false}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="space-y-6"
                >
                  {imageSrc && (
                    <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }} className="flex justify-center">
                      <div className="w-full max-w-sm md:max-w-md">
                        <Iphone src={imageSrc} className="w-full" aria-label={wireframe.name} />
                      </div>
                    </motion.div>
                  )}
                  <h4 className="text-2xl md:text-3xl font-medium tracking-tight text-center">{wireframe.name}</h4>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      )}

      <motion.div
        initial={false}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-16 text-center space-y-6 py-16"
      >
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight">Interested in working together?</h3>
        <p className="text-base md:text-lg text-muted-foreground">Let&apos;s discuss your next project</p>
        
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-12 border-t"
      >
        <Button asChild variant="outline" className="rounded-full">
          <Link href="/">
            ← Home
          </Link>
        </Button>
        <Button asChild variant="default" className="rounded-full">
          <Link href="/case-studies">
            All Case Studies
          </Link>
        </Button>
      </motion.div>
    </section>
  );
}


