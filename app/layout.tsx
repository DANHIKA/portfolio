import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import "@/components/ProfileCard/ProfileCard.css";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import { BlueprintContainer } from "@/components/ui/blueprint-container";
import { FullWidthDivider } from "@/components/ui/divider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-poppins",
});

const galgo = localFont({
  src: [
    {
      path: "./fonts/Galgo.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-heading",
  fallback: ["sans-serif"],
});

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
      <body className={`${poppins.variable} ${galgo.variable} ${poppins.className} antialiased bg-gray-50 dark:bg-gray-900`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <BlueprintContainer maxWidth="6xl" className="py-20 pb-28 md:pb-32 min-h-screen">
            <Header />
            <main>
              {children}
            </main>
            <FullWidthDivider className="my-12" />
            <Footer />
          </BlueprintContainer>
        </ThemeProvider>
      </body>
    </html>
  );
}
