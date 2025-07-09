import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "빅데이터기술연구원(주) - AI와 빅데이터를 현실로 만드는 파트너",
  description: "산업현장교수가 이끄는 AI·빅데이터 컨설팅 전문기업. 중소기업 맞춤 AI솔루션과 정부지원사업 자문 제공",
  keywords: ["AI", "빅데이터", "인공지능", "머신러닝", "데이터분석", "컨설팅", "산업현장교수", "기술지도사", "정부지원사업", "중소기업"],
  authors: [{ name: "빅데이터기술연구원(주)" }],
  creator: "빅데이터기술연구원(주)",
  publisher: "빅데이터기술연구원(주)",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://bigdt.co.kr'),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "빅데이터기술연구원(주) - AI와 빅데이터를 현실로 만드는 파트너",
    description: "산업현장교수가 이끄는 AI·빅데이터 컨설팅 전문기업. 중소기업 맞춤 AI솔루션과 정부지원사업 자문 제공",
    url: "https://bigdt.co.kr",
    siteName: "빅데이터기술연구원(주)",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "빅데이터기술연구원(주) - AI와 빅데이터 전문 기업",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "빅데이터기술연구원(주) - AI와 빅데이터를 현실로 만드는 파트너",
    description: "산업현장교수가 이끄는 AI·빅데이터 컨설팅 전문기업. 중소기업 맞춤 AI솔루션과 정부지원사업 자문 제공",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
    yahoo: "yahoo-site-verification-code",
  },
};

// 구조화된 데이터 (JSON-LD)
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "빅데이터기술연구원(주)",
  "alternateName": "BIGDATA T.I. Co., Ltd.",
  "url": "https://bigdt.co.kr",
  "logo": "https://bigdt.co.kr/images/logo_black.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+82-10-5234-3535",
    "contactType": "customer service",
    "areaServed": "KR",
    "availableLanguage": "Korean"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "가정북로 96, 경제통상진흥원 303호",
    "addressLocality": "유성구",
    "addressRegion": "대전광역시",
    "addressCountry": "KR"
  },
  "founder": {
    "@type": "Person",
    "name": "배종옥"
  },
  "foundingDate": "2019-07",
  "sameAs": [
    "https://www.bigdt.co.kr"
  ],
  "description": "산업현장교수가 이끄는 AI·빅데이터 컨설팅 전문기업. 중소기업 맞춤 AI솔루션과 정부지원사업 자문 제공",
  "knowsAbout": [
    "인공지능",
    "빅데이터",
    "머신러닝",
    "데이터분석",
    "AI 컨설팅",
    "정부지원사업",
    "기술지도"
  ],
  "areaServed": {
    "@type": "Country",
    "name": "대한민국"
  },
  "serviceType": [
    "AI 솔루션 개발",
    "빅데이터 컨설팅",
    "정부지원사업 자문",
    "기술 교육",
    "시스템 구축"
  ]
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <HomeClient />
    </>
  );
}
