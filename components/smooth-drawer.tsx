"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { motion, Variants, Transition } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import Link from "next/link";
import { Fingerprint } from "lucide-react";

interface DrawerContentProps {
  type: 'pricing' | 'contact';
  title?: string;
  description?: string;
  primaryButtonText?: string;
  onSecondaryAction?: () => void;
  formState?: {
    name: string;
    email: string;
    message: string;
  };
  onFormChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onSubmit?: (e: React.FormEvent) => void;
  status?: 'idle' | 'loading' | 'success' | 'error';
  error?: string;
  onClose?: () => void;
}

const drawerVariants: Variants = {
  hidden: {
    y: "100%",
    opacity: 0,
    rotateX: 5,
    transition: {
      type: "spring" as const,
      stiffness: 300,
      damping: 30,
    } satisfies Transition,
  },
  visible: {
    y: 0,
    opacity: 1,
    rotateX: 0,
    transition: {
      type: "spring" as const,
      stiffness: 300,
      damping: 30,
      mass: 0.8,
      staggerChildren: 0.07,
      delayChildren: 0.2,
    } satisfies Transition,
  },
};

const itemVariants: Variants = {
  hidden: {
    y: 20,
    opacity: 0,
    transition: {
      type: "spring" as const,
      stiffness: 300,
      damping: 30,
    } satisfies Transition,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring" as const,
      stiffness: 300,
      damping: 30,
      mass: 0.8,
    } satisfies Transition,
  },
};

export default function SmoothDrawer({
  type = 'pricing',
  title = "Get in touch",
  description = "Have a project in mind or want to discuss collaboration opportunities?",
  primaryButtonText = "Send message",
  formState,
  onFormChange,
  onSubmit,
  status,
  error,
  onClose
}: DrawerContentProps) {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">{type === 'contact' ? 'Contact Me' : 'Open Drawer'}</Button>
      </DrawerTrigger>
      <DrawerContent className="max-w-fit mx-auto p-6 rounded-2xl shadow-xl">
        <motion.div
          variants={drawerVariants}
          initial="hidden"
          animate="visible"
          className="mx-auto w-full max-w-[340px] space-y-6"
        >
          <motion.div variants={itemVariants}>
            <DrawerHeader className="px-0 space-y-2.5">
              <DrawerTitle className="text-2xl font-semibold tracking-tighter">
                {title}
              </DrawerTitle>
              <DrawerDescription className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 tracking-tighter">
                {description}
              </DrawerDescription>
            </DrawerHeader>
          </motion.div>

          {type === 'contact' ? (
            <motion.div variants={itemVariants}>
              {status === "success" ? (
                <div className="text-center space-y-4">
                  <div className="text-green-600 dark:text-green-400 text-lg font-medium">
                    Message sent successfully!
                  </div>
                  <Button 
                    onClick={() => {
                      setTimeout(() => onClose?.(), 1000);
                    }}
                    className="w-full"
                  >
                    Close
                  </Button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-4">
                  <Input
                    name="name"
                    value={formState?.name || ''}
                    onChange={onFormChange}
                    placeholder="Name"
                  />
                  
                  <Input
                    name="email"
                    type="email"
                    value={formState?.email || ''}
                    onChange={onFormChange}
                    placeholder="Email"
                  />
                  
                  <Textarea
                    name="message"
                    value={formState?.message || ''}
                    onChange={onFormChange}
                    placeholder="Message"
                    rows={4}
                  />
                  
                  {status === "error" && (
                    <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
                  )}
                  
                  <Button 
                    type="submit"
                    className="w-full"
                    disabled={status === "loading"}
                  >
                    {status === "loading" ? (
                      <span className="inline-block h-4 w-4 border-2 border-t-transparent border-current rounded-full animate-spin mr-2"></span>
                    ) : (
                      <Send size={14} className="mr-2" />
                    )}
                    {status === "loading" ? "Sending" : primaryButtonText}
                  </Button>
                </form>
              )}
            </motion.div>
          ) : (
            <>
              <motion.div variants={itemVariants}>
                <DrawerFooter className="flex flex-col gap-3 px-0">
                  <Link
                    href="https://kokonutui.pro/#pricing"
                    target="_blank"
                    className="group w-full relative overflow-hidden inline-flex items-center justify-center h-11 rounded-xl bg-gradient-to-r from-rose-500 to-pink-500 dark:from-rose-600 dark:to-pink-600 text-white text-sm font-semibold tracking-wide shadow-lg shadow-rose-500/20 transition-all duration-500 hover:shadow-xl hover:shadow-rose-500/30 hover:from-rose-600 hover:to-pink-600 dark:hover:from-rose-500 dark:hover:to-pink-500"
                  >
                    <motion.span
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%]"
                      whileHover={{
                        x: ["-200%", "200%"],
                      }}
                      transition={{
                        duration: 1.5,
                        ease: "easeInOut",
                        repeat: 0,
                      }}
                    />
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="relative flex items-center gap-2 tracking-tighter"
                    >
                      {primaryButtonText}
                      <motion.div
                        animate={{
                          rotate: [0, 15, -15, 0],
                          y: [0, -2, 2, 0],
                        }}
                        transition={{
                          duration: 2,
                          ease: "easeInOut",
                          repeat: Number.POSITIVE_INFINITY,
                          repeatDelay: 1,
                        }}
                      >
                        <Fingerprint className="w-4 h-4" />
                      </motion.div>
                    </motion.div>
                  </Link>
                </DrawerFooter>
              </motion.div>
            </>
          )}
        </motion.div>
      </DrawerContent>
    </Drawer>
  );
}
