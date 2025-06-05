"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

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
    
    // Validation
    if (!formState.name || !formState.email || !formState.message) {
      setStatus("error");
      setError("Please fill out all fields");
      return;
    }
    
    setStatus("loading");
    
    // Simulate API call
    setTimeout(() => {
      // For demo purposes, always succeed
      setStatus("success");
      setFormState({
        name: "",
        email: "",
        message: ""
      });
    }, 1500);
  };

  return (
    <section id="contact">
      <div className="content-container">
        <h2>Get in touch</h2>
        
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {/* Contact Info */}
          <div>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed text-center md:text-left">
              Have a project in mind or want to discuss collaboration opportunities? I&apos;d love to hear from you.
            </p>
          </div>

          {/* Contact Form */}
          <div>
            {status === "success" ? (
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <h3 className="text-2xl font-medium mb-4">Message sent</h3>
                <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">
                  Thank you for reaching out. I&apos;ll get back to you as soon as possible.
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">
                  Let&apos;s create something amazing together!
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => setStatus("idle")}
                  className="text-base px-8"
                >
                  Send another message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="Name"
                    className="bg-white dark:bg-gray-800"
                  />
                </div>
                
                <div>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="bg-white dark:bg-gray-800"
                  />
                </div>
                
                <div>
                  <Textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Message"
                    rows={4}
                    className="bg-white dark:bg-gray-800"
                  />
                </div>

                {status === "error" && (
                  <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
                )}
                
                <Button 
                  type="submit"
                  className="w-full md:w-auto px-8"
                  variant="outline"
                  disabled={status === "loading"}
                >
                  {status === "loading" ? (
                    <span className="inline-block h-4 w-4 border-2 border-t-transparent border-current rounded-full animate-spin mr-2"></span>
                  ) : (
                    <Send size={14} className="mr-2" />
                  )}
                  {status === "loading" ? "Sending" : "Send message"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}