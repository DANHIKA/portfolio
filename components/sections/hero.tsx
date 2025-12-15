"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import SmoothDrawer from "../smooth-drawer";
import { sendEmail } from "@/lib/api/email";
import { MechanicalWaves } from "../mechanical-waves";
import { TextHighlighter } from "@/components/fancy/text/text-highlighter";

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
    <section className="relative w-screen -mx-[calc((100vw-100%)/2)] overflow-hidden min-h-[80vh] flex items-center">
      {/* Background Image - extends to whole hero */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          
          {/* Mechanical Waves Background */}
          <MechanicalWaves
            fill
            backgroundColor="transparent"
            foregroundColor="hsl(var(--primary))"
            speed={0.03}
            amplitude={12}
            peakHeight={36}
            className=""
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-background/60 dark:bg-background/80 pointer-events-none"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10 max-w-7xl w-full py-20 pointer-events-none">
        <div className="flex flex-col items-center justify-center min-h-[70vh]">
          {/* Large Text with Image Integrated */}
          <div className="relative mb-12 flex items-center justify-center">
            <div className="relative max-w-5xl text-center z-10">
              <h1 className="text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-bold tracking-tight leading-[0.9] text-foreground text-center">
                <span className="block">Software</span>
                <span className="block">Developer</span>
              </h1>
              {/* Image overlapping the text */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="relative w-20 h-28 md:w-28 md:h-40 lg:w-36 lg:h-52 xl:w-44 xl:h-64 rounded-full overflow-hidden border-4 border-primary shadow-2xl">
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

          {/* Tagline */}
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground text-center mb-12 max-w-3xl animate-fade-in-up delay-100">
            Crafting intuitive digital <TextHighlighter highlightColor="hsl(160, 50%, 70%)">experiences</TextHighlighter> through clean, efficient code and thoughtful design.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 animate-fade-in-up delay-200 pointer-events-auto">
            <Button 
              size="lg" 
              variant="default"
              className="w-full sm:w-auto transition-all duration-300 hover:scale-105 hover:shadow-lg"
              asChild
            >
              <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                My Resume
              </Link>
            </Button>
            <div className="pointer-events-auto">
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