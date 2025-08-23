import type { Metadata } from "next";
import "./globals.css";
import "@/components/ProfileCard/ProfileCard.css";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";

export const metadata: Metadata = {
  title: "Daniel Ntandika | Portfolio",
  description: "Showcasing my projects, skills, and experience as a software developer.",
  keywords: ["portfolio", "software developer", "web development", "React", "TypeScript", "Next.js"],
  authors: [{ name: "Daniel Ntandika", url: "https://danhika.com" }],
  creator: "Daniel Ntandika",
  publisher: "Daniel Ntandika",
  openGraph: {
    title: "Daniel Ntandika | Portfolio",
    description: "Showcasing my projects, skills, and experience as a software developer.",
    url: "https://danhika.com",
    siteName: "Daniel's Portfolio",
    images: [
      {
        url: "https://danhika.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Daniel Ntandika's Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel Ntandika | Portfolio",
    description: "Showcasing my projects, skills, and experience as a software developer.",
    images: ["https://danhika.com/twitter-image.jpg"],
    creator: "@danhika",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased bg-gray-50 dark:bg-gray-900">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="max-w-8xl mx-auto px-4 py-20 pb-28 md:pb-32 min-h-screen">
            <Header />
            <main>
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
