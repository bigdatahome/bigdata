import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "회사소개 - 빅데이터기술연구원(주)",
  description: "30년 이상 IT 컨설팅 경험의 대한민국 산업현장교수와 중소벤처기업부 기술지도사가 이끄는 AI·빅데이터 전문 기업입니다.",
  keywords: ["회사소개", "빅데이터기술연구원", "산업현장교수", "기술지도사", "AI컨설팅", "빅데이터전문기업", "배종옥", "MVP 방법론", "빠른 AI 구현", "애자일 개발", "신속 프로토타이핑", "고객 중심 개발", "반복 개발"],
  openGraph: {
    title: "회사소개 - 빅데이터기술연구원(주)",
    description: "30년 이상 IT 컨설팅 경험의 대한민국 산업현장교수와 중소벤처기업부 기술지도사가 이끄는 AI·빅데이터 전문 기업입니다.",
    url: "https://bigdt.co.kr/about",
    images: [
      {
        url: "/api/og?title=" + encodeURIComponent("회사소개") + "&subtitle=" + encodeURIComponent("30년 이상 IT 컨설팅 경험의 전문 기업"),
        width: 1200,
        height: 630,
        alt: "빅데이터기술연구원(주) 회사소개",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "회사소개 - 빅데이터기술연구원(주)",
    description: "30년 이상 IT 컨설팅 경험의 대한민국 산업현장교수와 중소벤처기업부 기술지도사가 이끄는 AI·빅데이터 전문 기업입니다.",
    images: ["/api/og?title=" + encodeURIComponent("회사소개") + "&subtitle=" + encodeURIComponent("30년 이상 IT 컨설팅 경험의 전문 기업")],
  },
  alternates: {
    canonical: "/about",
  },
};

// 구조화된 데이터 추가
const personStructuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "배종옥",
        "jobTitle": "원장",
  "worksFor": {
    "@type": "Organization",
    "name": "빅데이터기술연구원(주)"
  },
  "description": "30년 이상의 IT 컨설팅 경험을 가진 대한민국 산업현장교수 및 중소벤처기업부 기술지도사",
  "hasCredential": [
    {
      "@type": "EducationalOccupationalCredential",
      "name": "대한민국 산업현장교수",
      "credentialCategory": "고용노동부 제2018-04-006호"
    },
    {
      "@type": "EducationalOccupationalCredential", 
      "name": "기술지도사",
      "credentialCategory": "중소벤처기업부 등록 제4380호"
    }
  ]
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personStructuredData),
        }}
      />
      <AboutClient />
    </>
  );
} 