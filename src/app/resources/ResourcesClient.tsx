"use client";

import React, { useState } from "react";
import Layout from "@/components/layout/Layout";

// 자료 데이터 타입
interface Resource {
  id: number;
  title: string;
  category: string;
  description: string;
  filename: string;
  filesize: string;
  downloadUrl: string;
  uploadDate: string;
}

// 샘플 데이터
const sampleResources: Resource[] = [
  {
    id: 1,
    title: "빅데이터기술연구원(주) 카달로그",
    category: "회사소개",
    description: "빅데이터기술연구원의 소개 카달로그입니다. 회사의 주요 사업 영역과 기술 역량, 서비스 소개를 담고 있습니다.",
    filename: "빅데이터기술연구원(주)카달로그.zip",
    filesize: "4.1MB",
    downloadUrl: "https://storage.googleapis.com/bigdt-resource-2025/files/빅데이터기술연구원(주)카달로그.zip",
    uploadDate: "2025-07-11"
  },
  {
    id: 2,
    title: "연구노트",
    category: "연구개발",
    description: "연구개발시 사용가능한 연구 노트 샘플입니다. 체계적인 연구 진행을 위한 템플릿과 가이드라인을 제공합니다.",
    filename: "연구노트제본용2025.zip",
    filesize: "81.9KB",
    downloadUrl: "https://storage.googleapis.com/bigdt-resource-2025/files/연구노트제본용2025.zip",
    uploadDate: "2025-07-10"
  },
  {
    id: 3,
    title: "연구개발비사전심사신청 자료",
    category: "연구개발",
    description: "연구개발비 사전심사에 필요한 자료입니다. 연구 노트 및 기타 필요한 서류 양식이 포함되어 있습니다.",
    filename: "연구개발비사전심사신청자료.zip",
    filesize: "6.5MB",
    downloadUrl: "https://storage.googleapis.com/bigdt-resource-2025/files/연구개발비사전심사신청자료.zip",
    uploadDate: "2025-07-05"
  }
];

// 카테고리 목록
const categories = ["전체보기", "회사소개", "연구개발", "사업솔루션", "정부공공", "컨설팅교육"];

export default function ResourcesClient() {
  const [selectedCategory, setSelectedCategory] = useState("전체보기");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // 카테고리 필터링
  const filteredResources = selectedCategory === "전체보기" 
    ? sampleResources 
    : sampleResources.filter(resource => resource.category === selectedCategory);

  // 페이징 처리
  const totalPages = Math.ceil(filteredResources.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentResources = filteredResources.slice(startIndex, startIndex + itemsPerPage);

  // 다운로드 함수
  const handleDownload = (resource: Resource) => {
    window.open(resource.downloadUrl, '_blank');
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/images/bg1.jpg')`,
            }}
          ></div>
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
            <span className="block md:inline">지식과 경험을 </span>
            <span className="block md:inline">함께 나눕니다</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 font-light mb-8 tracking-tight">
            <span className="block md:inline">빅데이터기술연구원의 연구 성과와 </span>
            <span className="block md:inline">실무 노하우를 담은 자료들</span>
          </p>
          <div className="w-16 h-1 bg-white mx-auto"></div>
        </div>
      </section>

      {/* 메인 컨텐츠 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* 왼쪽 분류 버튼 */}
          <div className="lg:w-56 flex-shrink-0">
            <div className="sticky top-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">자료 분류</h2>
              <div className="space-y-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      setSelectedCategory(category);
                      setCurrentPage(1);
                    }}
                    className={`w-full px-4 py-2.5 rounded-full text-center transition-all duration-200 ${
                      selectedCategory === category
                        ? 'bg-gray-900 text-white shadow-lg'
                        : 'border border-gray-300 bg-white text-gray-700 hover:border-gray-400 hover:bg-gray-50'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* 오른쪽 자료 목록 */}
          <div className="flex-1">
            {/* 검색 결과 헤더 */}
            <div className="mb-6">
              <p className="text-gray-600">
                <span className="font-medium text-gray-900">{filteredResources.length}개</span>의 자료를 찾았습니다.
              </p>
            </div>

            {/* 자료 목록 */}
            <div className="space-y-6">
              {currentResources.map((resource) => (
                <div key={resource.id} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow duration-200">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex-1">
                      {/* 카테고리 */}
                      <div className="mb-2">
                        <span className="inline-block px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full">
                          {resource.category}
                        </span>
                      </div>
                      
                      {/* 제목 */}
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {resource.title}
                      </h3>
                      
                      {/* 설명 (2줄) */}
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {resource.description}
                      </p>
                      
                      {/* 파일 정보 */}
                      <div className="flex items-center text-sm text-gray-500 space-x-4">
                        <button
                          onClick={() => handleDownload(resource)}
                          className="text-gray-700 hover:text-gray-900 hover:underline cursor-pointer transition-colors duration-200"
                        >
                          {resource.filename}
                        </button>
                        <span>•</span>
                        <span>{resource.filesize}</span>
                        <span>•</span>
                        <span>{resource.uploadDate}</span>
                      </div>
                    </div>
                    
                    {/* 다운로드 버튼 */}
                    <div className="mt-4 sm:mt-0 sm:ml-6">
                      <button
                        onClick={() => handleDownload(resource)}
                        className="flex items-center justify-center w-full sm:w-auto px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200"
                      >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        다운로드
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* 페이징 */}
            {totalPages > 1 && (
              <div className="mt-12 flex justify-center">
                <div className="flex space-x-2">
                  {/* 이전 페이지 */}
                  <button
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                    className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    이전
                  </button>
                  
                  {/* 페이지 번호 */}
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
                        currentPage === page
                          ? 'bg-gray-900 text-white'
                          : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                  
                  {/* 다음 페이지 */}
                  <button
                    onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    다음
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        </div>
      </section>
    </Layout>
  );
} 