"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import SmoothDrawer from "../smooth-drawer";
import { sendEmail } from "@/lib/api/email";

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
    <section className="relative overflow-hidden py-20 md:py-32 lg:py-40">
      <div className="absolute inset-0 -z-20" aria-hidden="true" />
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center gap-10 text-center">
          <h1 className="mx-auto mt-2 max-w-2xl text-center text-8xl font-semibold tracking-tight text-primary">
            Fearless digital experiences.
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground sm:text-xl">
            Transforming ambitious ideas into immersive digital journeys with clarity, performance, and a touch of drama.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
            <Link href="#projects" className="sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto">
                View Projects
              </Button>
            </Link>
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
    </section>
  );
}