import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
}

export const metadata: Metadata = {
  title: "빅데이터기술연구원(주)",
  description: "AI와 빅데이터 솔루션 전문 기업",
  icons: {
    icon: '/images/favicon.ico',
    apple: '/images/favicon.ico',
  },
  other: {
    'naver-site-verification': '2aa503f202e40ef4787b1d99012192e7d3e01122',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
