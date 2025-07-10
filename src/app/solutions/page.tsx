import type { Metadata } from "next";
import SolutionsClient from "./SolutionsClient";

export const metadata: Metadata = {
  title: "프로젝트 실적 - 빅데이터기술연구원(주)",
  description: "실제 고객사와 함께 진행한 AI·빅데이터 프로젝트 실적을 확인하세요. 문제은행 AI 시스템, 지문인식 적성검사, 스마트팜 교감형 플랫폼 등 검증된 기술력을 보여드립니다.",
  keywords: ["AI프로젝트", "빅데이터실적", "문제은행시스템", "지문인식", "스마트팜", "AI매칭플랫폼", "OCR", "GPT", "CNN", "딥러닝", "Supabase", "Next.js"],
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
    canonical: "/solutions",
  },
  openGraph: {
    title: "프로젝트 실적 - 빅데이터기술연구원(주)",
    description: "실제 고객사와 함께 진행한 AI·빅데이터 프로젝트 실적을 확인하세요. 문제은행 AI 시스템, 지문인식 적성검사, 스마트팜 교감형 플랫폼 등 검증된 기술력을 보여드립니다.",
    url: "https://bigdt.co.kr/solutions",
    siteName: "빅데이터기술연구원(주)",
    images: [
      {
        url: "/images/og-solutions.jpg",
        width: 1200,
        height: 630,
        alt: "빅데이터기술연구원(주) 프로젝트 실적 소개",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "프로젝트 실적 - 빅데이터기술연구원(주)",
    description: "실제 고객사와 함께 진행한 AI·빅데이터 프로젝트 실적을 확인하세요. 검증된 기술력을 보여드립니다.",
    images: ["/images/og-solutions.jpg"],
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
};

// 프로젝트 실적 구조화된 데이터
const solutionsStructuredData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "빅데이터기술연구원(주) 프로젝트 실적",
  "description": "실제 고객사와 함께 진행한 AI·빅데이터 프로젝트 실적",
  "itemListElement": [
    {
      "@type": "CreativeWork",
      "name": "문제은행 AI 시스템",
      "description": "LLM 기반 문항 자동 인식 및 유형 분류 시스템",
      "creator": {
        "@type": "Organization",
        "name": "빅데이터기술연구원(주)"
      },
      "about": ["GPT-4", "OCR", "Supabase", "Whisper"],
      "audience": "영어학원"
    },
    {
      "@type": "CreativeWork",
      "name": "지문인식 기반 적성검사",
      "description": "CNN 기반 지문 Feature 추출 및 코사인 유사도 매칭 로직",
      "creator": {
        "@type": "Organization",
        "name": "빅데이터기술연구원(주)"
      },
      "about": ["CNN", "딥러닝", "Python", "매칭 알고리즘"],
      "audience": "B2B 기업"
    },
    {
      "@type": "CreativeWork",
      "name": "스마트팜 AI 교감형 플랫폼",
      "description": "농업과 치유를 결합한 혁신적인 AI 플랫폼",
      "creator": {
        "@type": "Organization",
        "name": "빅데이터기술연구원(주)"
      },
      "about": ["StyleTTS2", "IoT", "Firebase", "Node.js"],
      "award": "AI 농업기술경진대회 수상"
    },
    {
      "@type": "CreativeWork",
      "name": "AI 매칭 플랫폼",
      "description": "소상공인 오픈마켓과 협업 매칭 플랫폼",
      "creator": {
        "@type": "Organization",
        "name": "빅데이터기술연구원(주)"
      },
      "about": ["Supabase", "Next.js", "매칭 알고리즘", "대시보드"],
      "audience": "소상공인"
    }
  ],
  "provider": {
    "@type": "Organization",
    "name": "빅데이터기술연구원(주)",
    "url": "https://bigdt.co.kr"
  }
};

export default function SolutionsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(solutionsStructuredData),
        }}
      />
      <SolutionsClient />
    </>
  );
} 