"use client";

import { useState } from "react";
import { sendEmail } from "@/lib/api/email";
import { MechanicalWaves } from "@/components/mechanical-waves";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

export default function ContactPage() {
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
    <div className="min-h-screen w-full flex flex-col lg:flex-row">
      {/* Left side - Background visualization area */}
      <div className="lg:w-1/2 w-full relative min-h-[400px] lg:min-h-screen">
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full overflow-hidden">
            {/* Mechanical Waves Background */}
            <MechanicalWaves
              fill
              backgroundColor="transparent"
              foregroundColor="hsl(var(--primary))"
              speed={0.03}
              amplitude={12}
              peakHeight={36}
              className="absolute inset-0"
            />
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-background/70 dark:bg-background/85 pointer-events-none"></div>
          </div>
        </div>
        
        <div className="relative z-10 h-full flex items-center justify-center px-6 py-12 lg:px-12 lg:py-16">
          <div className="text-left max-w-xl lg:ml-16">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-4">
              Let&apos;s work together
            </h1>
            <p className="text-base md:text-lg text-muted-foreground/90 mt-4">
              Have a project in mind or want to discuss collaboration opportunities?
            </p>
          </div>
        </div>
      </div>

      {/* Right side - Contact form */}
      <div className="lg:w-1/2 w-full flex items-center justify-center p-8 lg:p-16 bg-background">
        <div className="w-full max-w-md">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-2">
              Get in touch
            </h2>
            <p className="text-muted-foreground">
              Fill out the form below and I&apos;ll get back to you as soon as possible.
            </p>
          </div>

          {status === "success" ? (
            <div className="text-center py-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 mb-4">
                <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
              <p className="text-muted-foreground mb-6">
                Thank you for reaching out. I&apos;ll get back to you soon.
              </p>
              <Button onClick={() => setStatus("idle")} className="w-full">
                Send Another Message
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="h-12"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className="h-12"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={5}
                  className="resize-none"
                />
              </div>

              {status === "error" && (
                <div className="text-red-600 dark:text-red-400 text-sm py-2">
                  {error}
                </div>
              )}

              <Button 
                type="submit" 
                className="w-full h-12"
                disabled={status === "loading"}
              >
                {status === "loading" ? (
                  <>
                    <span className="inline-block h-4 w-4 border-2 border-t-transparent border-current rounded-full animate-spin mr-2"></span>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} className="mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}