import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import SmoothScroll from "@/components/SmoothScroll";

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
      <head>
        <style>{`@import url('https://fonts.googleapis.com/css2?family=Google+Sans+Code:ital,wght@0,300..800;1,300..800&family=Google+Sans+Flex:opsz,wght@6..144,1..1000&display=swap');`}</style>
      </head>
      <body className="antialiased bg-background">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SmoothScroll />
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
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
