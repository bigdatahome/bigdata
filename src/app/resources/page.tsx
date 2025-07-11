import type { Metadata } from "next";
import ResourcesClient from './ResourcesClient';

export const metadata: Metadata = {
  title: "자료실 - 빅데이터기술연구원(주)",
  description: "빅데이터기술연구원의 회사 카달로그, 연구개발 자료, 템플릿 등 다양한 자료를 다운로드하실 수 있습니다.",
  keywords: ["자료실", "빅데이터기술연구원", "카달로그", "연구개발", "연구노트", "사전심사", "다운로드"],
  openGraph: {
    title: "자료실 - 빅데이터기술연구원(주)",
    description: "빅데이터기술연구원의 회사 카달로그, 연구개발 자료, 템플릿 등 다양한 자료를 다운로드하실 수 있습니다.",
    url: "https://bigdt.co.kr/resources",
  },
  twitter: {
    card: "summary_large_image",
    title: "자료실 - 빅데이터기술연구원(주)",
    description: "빅데이터기술연구원의 회사 카달로그, 연구개발 자료, 템플릿 등 다양한 자료를 다운로드하실 수 있습니다.",
  },
  alternates: {
    canonical: "/resources",
  },
};

export default function ResourcesPage() {
  return <ResourcesClient />;
} 