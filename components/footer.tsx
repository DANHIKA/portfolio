"use client";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export default function Footer() {
	return (
		<footer className="border-t bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.white/8%),transparent)]">
			<div className="relative mx-auto max-w-5xl px-4">
				<div className="relative grid grid-cols-1 border-x md:grid-cols-4 md:divide-x">
					<div>
						<a
              href="https://web.facebook.com/hika.ntandiks"
              className="flex items-center justify-between border-y p-2 text-sm md:border-t-0 w-full h-full relative group transition-colors duration-300"
              target="_blank"
            >
              <span className="font-medium relative z-10">Facebook</span>
              <ArrowRight className="h-4 w-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
              <div className="absolute inset-0 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </a>
					</div>
					<div>
						<a
              href="https://linkedin.com/in/hika-ntandika-34961b28"
              className="flex items-center justify-between border-y p-2 text-sm md:border-t-0 w-full h-full relative group transition-colors duration-300"
              target="_blank"
            >
              <span className="font-medium relative z-10">LinkedIn</span>
              <ArrowRight className="h-4 w-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
              <div className="absolute inset-0 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </a>
					</div>
					<div>
						<a
              href="https://github.com/DANHIKA"
              className="flex items-center justify-between border-y p-2 text-sm md:border-t-0 w-full h-full relative group transition-colors duration-300"
              target="_blank"
            >
              <span className="font-medium relative z-10">GitHub</span>
              <ArrowRight className="h-4 w-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
              <div className="absolute inset-0 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </a>
					</div>
					<div>
						<a
              href="https://twitter.com/danhika"
              className="flex items-center justify-between border-y p-2 text-sm md:border-t-0 w-full h-full relative group transition-colors duration-300"
              target="_blank"
            >
              <span className="font-medium relative z-10">Twitter</span>
              <ArrowRight className="h-4 w-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
              <div className="absolute inset-0 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </a>
					</div>
				</div>
			</div>
			<div className="flex flex-col border-t p-6 max-w-5xl mx-auto px-4">
				<p className="text-foreground font-bold text-4xl md:text-5xl text-left">
					Daniel Ntandika
				</p>
				<p className="text-muted-foreground text-sm mt-4 text-left max-w-2xl">
					Software Developer & UI/UX Designer specializing in creating beautiful, functional web experiences with modern technologies.
				</p>
			</div>
			<div className="flex justify-center border-t p-3">
				<p className="text-muted-foreground text-xs">
					&copy; {new Date().getFullYear()} Daniel Ntandika, All rights reserved
				</p>
			</div>
		</footer>
	);
}