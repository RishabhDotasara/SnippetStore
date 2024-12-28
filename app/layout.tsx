import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "@/layouts/Layout";
import { ThemeProvider } from "@/providers/theme-provider";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Snippet Store",
  description: "Crafted with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
          <Layout showSearch title="Snippet Store">
            {children}
          </Layout>
        </ThemeProvider>
      </body>
    </html>
  );
}
