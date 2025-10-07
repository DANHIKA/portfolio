"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import RotatingText from "@/animations/RotatingText/RotatingText";
import LightRays from "@/backgrounds/LightRays"
import SmoothDrawer from "@/components/smooth-drawer";
import Link from "next/link";
import { sendEmail } from "@/lib/api/email";

export default function Hero() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
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
        message: ""
      });
    } else {
      setStatus("error");
      setError(apiError || "Failed to send message. Please try again later.");
    }
  };

  return (
    <section className="relative flex flex-col">
      <div className="relative h-[500px] overflow-hidden">
        {/* Background layer */}
        <div className="absolute inset-0 -z-10">
        <LightRays

raysOrigin="top-center"

raysColor="#00ffff"

raysSpeed={1.5}

lightSpread={0.8}

rayLength={1.2}

followMouse={true}

mouseInfluence={0.1}

noiseAmount={0.1}

distortion={0.05}

className="custom-rays"

/>
        </div>

        {/* Foreground content */}
        <div className="relative z-10 container mx-auto px-4 md:px-6 h-full flex items-center isolate">
          <div className="flex flex-col items-center justify-center gap-8 text-center w-full">
            {/* Hero Content */}
            <div className="w-full max-w-3xl space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
                  Building{" "}
                  <RotatingText
                    texts={[
                      "digital experiences",
                      "modern web apps",
                      "delightful interfaces",
                    ]}
                    rotationInterval={2500}
                    splitBy="characters"
                    staggerDuration={0.02}
                    mainClassName="inline-flex bg-primary text-white rounded-lg px-4 py-2"
                    elementLevelClassName="will-change-transform"
                  />
                </h1>
                <div className="flex gap-4 justify-center">
                  <Link href="#projects">
                    <Button className="flex items-center gap-4 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                      View My Work
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
          </div>
        </div>
      </div>
    </section>
  );
}