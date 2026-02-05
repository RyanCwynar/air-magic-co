import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Air Magic Company | Free Mockup by Ryan Cwynar",
  description: "A free website redesign mockup for Air Magic Company, your trusted HVAC experts in Fort Lauderdale since 1969. This is a demo site created by Ryan Cwynar.",
  authors: [{ name: "Ryan Cwynar", url: "https://ryancwynar.com" }],
  creator: "Ryan Cwynar",
  publisher: "Byldr",
  robots: "noindex, nofollow",
  icons: {
    icon: [
      {
        url: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect fill='%230066cc' width='100' height='100' rx='15'/><text x='50' y='70' text-anchor='middle' font-size='50' fill='white'>❄️</text></svg>",
        type: "image/svg+xml",
      },
    ],
  },
  openGraph: {
    title: "Air Magic Company | Free Mockup",
    description: "A free website redesign mockup for Air Magic Company, created by Ryan Cwynar",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
