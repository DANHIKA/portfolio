import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import SmoothScroll from "@/components/SmoothScroll";
import Preloader from "@/components/preloader";

export const metadata: Metadata = {
  title: "Daniel Ntandika | Portfolio",
  description: "Showcasing my projects, skills, and experience as a software developer.",
  keywords: ["portfolio", "software developer", "web development", "React", "TypeScript", "Next.js"],
  authors: [{ name: "Daniel Ntandika", url: "https://portfolio-vert-zeta-3zljuxqg7n.vercel.app/" }],
  creator: "Daniel Ntandika",
  publisher: "Daniel Ntandika",
  openGraph: {
    title: "Daniel Ntandika | Portfolio",
    description: "Showcasing my projects, skills, and experience as a software developer.",
    url: "https://portfolio-vert-zeta-3zljuxqg7n.vercel.app/",
    siteName: "Daniel's Portfolio",
    images: [
      {
        url: "https://portfolio-vert-zeta-3zljuxqg7n.vercel.app/og-image.jpg",
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
    images: ["https://portfolio-vert-zeta-3zljuxqg7n.vercel.app/twitter-image.jpg"],
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
    <html lang="en" suppressHydrationWarning className="h-full">
      <head>
        <style>{`@import url('https://fonts.googleapis.com/css2?family=Geom:ital,wght@0,300..900;1,300..900&family=Google+Sans+Code:ital,wght@0,300..800;1,300..800&family=Google+Sans+Flex:opsz,wght@6..144,1..1000&display=swap');`}</style>
      </head>
      <body className="antialiased bg-background h-full">
        <Preloader />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SmoothScroll />
          <div className="w-full h-full overflow-auto page-reveal">
            <div className="relative mx-auto w-full px-4 sm:px-6 lg:px-8">
              <Header />
              <main>
                {children}
              </main>
            </div>
            <Footer />
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}