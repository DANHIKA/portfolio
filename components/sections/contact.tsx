"use client";

import { useState } from "react";
import SmoothDrawer from "@/components/smooth-drawer";
import { Spotlight } from "@/components/motion-primitives/spotlight";
import { sendEmail } from "@/lib/api/email";

export default function ContactSection() {
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
    <section id="contact" className="bg-gray-50 dark:bg-gray-900 py-12">
      <div className="mx-auto px-4">
        <div className="relative rounded-xl p-8 text-center overflow-hidden">
          <Spotlight className="-z-0" size={300} />
          
          <div className="relative z-10">
            <h2 className="text-8xl font-bold mb-4 text-primary">Let&apos;s work together</h2>
            <p className="mb-6 max-w-2xl mx-auto">
              Have a project in mind or want to discuss collaboration opportunities?
            </p>
            
            
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