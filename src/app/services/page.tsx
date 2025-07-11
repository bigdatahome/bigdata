import type { Metadata } from "next";
import Link from "next/link";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "서비스 - 빅데이터기술연구원(주)",
  description: "AI·빅데이터 기반 기획 및 솔루션, 정부지원사업 자문, 실전 중심의 AI 솔루션을 제공합니다. OCR+GPT 문제은행, 지문인식 적성검사, 스마트팜 플랫폼 등 검증된 실적 보유.",
  keywords: ["AI솔루션", "빅데이터분석", "정부지원사업", "벤처기업인증", "OCR", "GPT", "문제은행", "지문인식", "스마트팜", "AI플랫폼", "MVP", "AI MVP", "빠른 AI 구현", "신속 AI 도입", "AI 프로토타입", "맞춤형 AI", "신속개발", "AI 파일럿", "빠른 솔루션"],
  openGraph: {
    title: "서비스 - 빅데이터기술연구원(주)",
    description: "AI·빅데이터 기반 기획 및 솔루션, 정부지원사업 자문, 실전 중심의 AI 솔루션을 제공합니다. OCR+GPT 문제은행, 지문인식 적성검사, 스마트팜 플랫폼 등 검증된 실적 보유.",
    url: "https://bigdt.co.kr/services",
    images: [
      {
        url: "/api/og/services?service=" + encodeURIComponent("빠른 AI MVP") + "&description=" + encodeURIComponent("신속 구현과 맞춤형 솔루션"),
        width: 1200,
        height: 630,
        alt: "빅데이터기술연구원(주) 서비스 소개",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "서비스 - 빅데이터기술연구원(주)",
    description: "AI·빅데이터 기반 기획 및 솔루션, 정부지원사업 자문, 실전 중심의 AI 솔루션을 제공합니다.",
    images: ["/api/og/services?service=" + encodeURIComponent("빠른 AI MVP") + "&description=" + encodeURIComponent("신속 구현과 맞춤형 솔루션")],
  },
  alternates: {
    canonical: "/services",
  },
};

// 서비스 구조화된 데이터
const serviceStructuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "AI·빅데이터 솔루션",
  "provider": {
    "@type": "Organization",
    "name": "빅데이터기술연구원(주)"
  },
  "description": "AI·빅데이터 기반 기획 및 솔루션, 정부지원사업 자문, 실전 중심의 AI 솔루션을 제공합니다.",
  "serviceType": [
    "AI 기반 솔루션 개발",
    "빅데이터 분석",
    "정부지원사업 자문",
    "교육 플랫폼 구축",
    "AI MVP 개발",
    "빠른 AI 프로토타입 구현",
    "신속 AI 도입 컨설팅",
    "맞춤형 AI 파일럿 프로젝트"
  ],
  "areaServed": "대한민국",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "AI·빅데이터 서비스",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "OCR + GPT 문제은행 시스템",
          "description": "문항 자동 인식 및 유형 분류 시스템"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "음성 AI 튜터 시스템",
          "description": "Whisper 기반 음성인식 교육"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "벤처기업 인증 지원",
          "description": "벤처기업 확인 신청 지원"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "AI MVP 개발",
          "description": "빠른 AI 프로토타입 및 최소기능제품 구현"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "신속 AI 도입 컨설팅",
          "description": "고객사 맞춤형 AI 파일럿 프로젝트 및 신속 구현"
        }
      }
    ]
  }
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceStructuredData),
        }}
      />
      <ServicesClient />
    </>
  );
} 