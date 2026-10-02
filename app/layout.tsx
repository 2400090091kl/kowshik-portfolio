import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Kumara Veera Kowshik Parsha | Computer Science & IT (CSIT) Student",
  description:
    "Personal portfolio of Kumara Veera Kowshik Parsha, a Computer Science and Information Technology (CSIT) student and aspiring software engineer specializing in software development, full-stack applications, backend technologies, databases, and cloud technologies.",
  keywords: [
    "Kumara Veera Kowshik Parsha",
    "Kowshik Parsha",
    "Computer Science and Information Technology",
    "CSIT",
    "Software Engineer",
    "KL University",
    "Full-Stack Developer",
    "React",
    "Spring Boot",
    "AWS",
    "Portfolio",
  ],
  authors: [{ name: "Kumara Veera Kowshik Parsha" }],
  openGraph: {
    title: "Kumara Veera Kowshik Parsha | Computer Science & IT (CSIT) Student",
    description:
      "Personal portfolio of Kumara Veera Kowshik Parsha, a Computer Science and Information Technology (CSIT) student and aspiring software engineer.",
    type: "website",
    locale: "en_US",
    siteName: "Kumara Veera Kowshik Parsha Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kumara Veera Kowshik Parsha | Computer Science & IT (CSIT) Student",
    description:
      "Personal portfolio of Kumara Veera Kowshik Parsha, a Computer Science and Information Technology (CSIT) student and aspiring software engineer.",
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
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-gray-950 text-slate-100 antialiased selection:bg-cyan-500/20 selection:text-cyan-300`}
      >
        {children}
      </body>
    </html>
  );
}
