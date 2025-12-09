"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import SmoothDrawer from "../smooth-drawer";
import { sendEmail } from "@/lib/api/email";
import { DrawText } from "../ui/draw-text";

export default function Hero() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
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
      setFormState({
        name: "",
        email: "",
        message: "",
      });
    } else {
      setStatus("error");
      setError(apiError || "Failed to send message. Please try again later.");
    }
  };

  return (
    <section className="relative overflow-hidden pt-8 md:pt-12 lg:pt-16">
      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12 py-12 lg:py-16 min-h-[60vh]">
          {/* Left side - Text content */}
          <div className="flex-1 w-full lg:text-left text-center">
            <DrawText
              as="h1"
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight animate-fade-in-up mb-6 text-left"
            >
              A creative{" "}
              <span className="text-primary inline-block hover:scale-105 transition-transform duration-300 cursor-default">
                developer
              </span>
            </DrawText>

            <p className="text-lg text-muted-foreground sm:text-xl max-w-2xl leading-relaxed animate-fade-in-up delay-100 mb-8 text-left">
              I collaborate with brands globally to design impactful, mission-focused websites that drive results and achieve business goals.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 animate-fade-in-up delay-200 lg:justify-start justify-center">
              <Button 
                size="lg" 
                variant="outline"
                className="w-full sm:w-auto group relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg"
                asChild
              >
                <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  <span className="relative z-10">My Resume</span>
                  <span className="absolute inset-0 bg-primary/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </Link>
              </Button>
              <SmoothDrawer 
                type="contact"
                formState={formState}
                onFormChange={handleChange}
                onSubmit={handleSubmit}
                status={status}
                error={error}
              />
            </div>
          </div>

          {/* Right side - Image */}
          <div className="flex-1 w-full flex justify-center lg:justify-end">
            <div className="relative bg-primary rounded-2xl p-4 md:p-6 lg:p-8 w-full max-w-md animate-fade-in-up delay-300">
              {/* Decorative badge - positioned on image */}
              <div className="absolute -top-2 -right-2 z-10 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background border border-primary/20 w-fit animate-fade-in shadow-lg">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <span className="text-sm font-medium text-primary">Available for projects</span>
              </div>
              <div className="relative w-full aspect-square rounded-xl overflow-hidden">
                <Image
                  src="/me.png"
                  alt="Daniel Ntandika"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }

        .delay-100 {
          animation-delay: 0.1s;
        }

        .delay-200 {
          animation-delay: 0.2s;
        }

        .delay-300 {
          animation-delay: 0.3s;
        }

        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
}