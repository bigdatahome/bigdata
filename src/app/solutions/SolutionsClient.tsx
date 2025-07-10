"use client";

import React from "react";
import Link from "next/link";
import Layout from "@/components/layout/Layout";

export default function SolutionsClient() {
  return (
    <Layout>
      
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/images/bg13.jpg')`,
            }}
          ></div>
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
          <span className="block md:inline">검증된 실전 프로젝트로 </span>
          <span className="block md:inline">증명합니다</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 font-light mb-8 tracking-tight">
          <span className="block md:inline">AI·빅데이터 솔루션의 기획부터 구현까지, </span>
          <span className="block md:inline">실제 성과로 말하겠습니다</span>
          </p>
          <div className="w-16 h-1 bg-white mx-auto"></div>
        </div>
      </section>

      {/* Project Experience */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm text-gray-600 mb-5">
              S O L U T I O N S
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
              실전 프로젝트 경험
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              실제 고객사와 진행한 AI·빅데이터 프로젝트들로<br />
              기술적 역량과 현장 적용 능력을 검증받았습니다
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">문제은행 AI 시스템</h3>
                  <p className="text-sm text-gray-600">영어학원 대상 제안 실적</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
              LLM 기반 문항 자동 인식 및 유형 분류 시스템을 설계했습니다.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">GPT-4</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">OCR</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">Supabase</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">Whisper</span>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">지문인식 기반 적성검사</h3>
                  <p className="text-sm text-gray-600">B2B 제안서 구성</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                CNN 기반 지문 Feature 추출 및 코사인 유사도 매칭 로직을 설계했습니다.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">CNN</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">딥러닝</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">Python</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">매칭 알고리즘</span>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">스마트팜 AI 교감형 플랫폼</h3>
                  <p className="text-sm text-gray-600">AI 농업기술경진대회 수상</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
              농업과 치유를 결합한 혁신적인 플랫폼을 구현했습니다.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">StyleTTS2</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">IoT</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">Firebase</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">Node.js</span>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6m8 0H8" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">AI 매칭 플랫폼</h3>
                  <p className="text-sm text-gray-600">LLM 기반 협업 매칭</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                소상공인 오픈마켓과 협업 매칭 플랫폼을 기획하고 설계했습니다.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">Supabase</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">Next.js</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">매칭 알고리즘</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">대시보드</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Technical Capabilities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
              핵심 기술 역량
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              최신 기술 스택을 활용한 효율적이고<br />
              비용 최적화된 솔루션을 제공합니다
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-3xl text-center">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Supabase 기반 SaaS 신속 구축</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Supabase, Next.js, Vercel을 활용한 신속한 SaaS MVP 구축 역량을 보유하고 있습니다.
              </p>
              <div className="text-sm text-gray-600 bg-white p-3 rounded-xl flex items-center">
                <svg className="w-4 h-4 text-gray-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                2주 내 초기 서비스 출하 경험 다수 보유
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-3xl text-center">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">AI 파이프라인 자동화</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                OCR, Whisper, StyleTTS, GPT API를 결합한 AI 파이프라인 자동화 시스템을 구축합니다.
              </p>
              <div className="text-sm text-gray-600 bg-white p-3 rounded-xl flex items-center">
                <svg className="w-4 h-4 text-gray-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                교육, 의료, 행정 보고서 시스템 적용
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-3xl text-center">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">비용 최적화</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                중소기업 예산에 맞는 합리적인 비용으로 최대 효과를 얻을 수 있는 솔루션을 제공합니다.
              </p>
              <div className="text-sm text-gray-600 bg-white p-3 rounded-xl flex items-center">
                <svg className="w-4 h-4 text-gray-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                ROI 극대화를 위한 단계별 접근
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 tracking-tight">
            이런 프로젝트가 필요하시다면
          </h2>
          <p className="text-lg text-gray-600 mb-8">
          <span className="block md:inline">검증된 실적과 전문성으로 </span>
          <span className="block md:inline">귀하의 비즈니스를 한 단계 업그레이드하세요</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/consultation" 
              className="inline-flex items-center bg-gray-900 text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 shadow-lg"
            >
              프로젝트 상담하기
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            
            <Link 
              href="/contact" 
              className="inline-flex items-center border-2 border-gray-900 text-gray-900 px-8 py-3 rounded-full font-medium hover:bg-gray-900 hover:text-white transition-colors"
            >
              1:1 문의하기
              <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 2.98.97 4.29L1 23l6.71-1.97C9.02 21.64 10.46 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zM8 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm4 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm4 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

    </Layout>
  );
} 