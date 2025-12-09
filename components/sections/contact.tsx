"use client";

import { useState } from "react";
import SmoothDrawer from "@/components/smooth-drawer";
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
    <section id="contact" className="relative py-12 md:py-16 lg:py-20 overflow-hidden w-screen -mx-[calc((100vw-100%)/2)] bg-primary">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative rounded-xl p-6 sm:p-8 lg:p-12 text-center overflow-hidden">
          <div className="relative z-10">
            <p className="text-center text-base font-semibold leading-7 text-white">Contact</p>
            <h2 className="mx-auto mt-2 max-w-2xl text-center text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
              Let&apos;s work together
            </h2>
            <p className="mt-4 mb-6 sm:mb-8 max-w-2xl mx-auto text-center text-white text-sm sm:text-base lg:text-lg">
              Have a project in mind or want to discuss collaboration opportunities?
            </p>
            
            <div className="flex justify-center">
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
    </section>
  );
}