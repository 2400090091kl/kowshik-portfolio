import type { Metadata } from "next";
import { Inter, Halant, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const halant = Halant({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kowshik-4402-portfolio.vercel.app"),
  title: "P. Kumara Veera Kowshik | Computer Science & IT (CSIT) Student",
  description:
    "Personal portfolio of P. Kumara Veera Kowshik, a 3rd-year Computer Science and Information Technology (CSIT) student and aspiring software engineer at KL University.",
  keywords: [
    "P. Kumara Veera Kowshik",
    "Kowshik Parsha",
    "Computer Science and Information Technology",
    "CSIT",
    "Software Engineer",
    "KL University",
    "MatchMind AI",
    "Azure Operations Dashboard",
    "Full-Stack Developer",
    "Cloud Computing",
  ],
  authors: [{ name: "P. Kumara Veera Kowshik" }],
  openGraph: {
    title: "P. Kumara Veera Kowshik | Portfolio",
    description:
      "3rd-Year Computer Science and Information Technology Student | Aspiring Software Engineer at KL University.",
    url: "https://kowshik-4402-portfolio.vercel.app",
    type: "website",
    locale: "en_US",
    siteName: "P. Kumara Veera Kowshik Portfolio",
    images: [
      {
        url: "/profile.jpeg",
        width: 699,
        height: 927,
        alt: "P. Kumara Veera Kowshik - Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "P. Kumara Veera Kowshik | Portfolio",
    description:
      "3rd-Year Computer Science and Information Technology Student | Aspiring Software Engineer at KL University.",
    images: ["/profile.jpeg"],
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
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${halant.variable} ${jetbrainsMono.variable} font-sans bg-[#080808] text-zinc-100 antialiased selection:bg-amber-500/20 selection:text-amber-300`}
      >
        {children}
      </body>
    </html>
  );
}
