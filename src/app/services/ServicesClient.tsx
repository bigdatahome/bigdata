'use client';
import React from 'react';
import Link from "next/link";
import Layout from "@/components/layout/Layout";

export default function ServicesClient() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/images/bg6.jpg')`,
            }}
          ></div>
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
            실전 중심의 AI 솔루션
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 font-light mb-8 tracking-tight">
            중소기업 현장에서 바로 활용할 수 있는 실용적인 AI 기술과 컨설팅
          </p>
          <div className="w-16 h-1 bg-white mx-auto"></div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
              주요 서비스
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              검증된 기술 스택으로 실질적인 솔루션을 제공합니다
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-gray-50 p-8 rounded-3xl">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">AI 기반 솔루션 개발</h3>
              <p className="text-gray-700 leading-relaxed text-center">
                GPT, OCR, 음성인식 등을 활용한<br />
                맞춤형 AI 시스템 구축
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-gray-50 p-8 rounded-3xl">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">빅데이터 분석</h3>
              <p className="text-gray-700 leading-relaxed text-center">
                기업 데이터를 활용한<br />
                인사이트 도출 및 의사결정 지원
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-gray-50 p-8 rounded-3xl">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">정부지원사업 자문</h3>
              <p className="text-gray-700 leading-relaxed text-center">
                벤처기업 인증, 연구소 설립<br />
                사업계획서 작성 등 전문 자문
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
              상세 서비스
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              각 분야별 전문성을 바탕으로 한 세부 서비스를 제공합니다
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* AI Solutions */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">AI 솔루션 개발</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-gray-900 rounded-full mt-2 mr-3"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">OCR + GPT 문제은행 시스템</h4>
                    <p className="text-sm text-gray-600">문항 자동 인식 및 유형 분류</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-gray-900 rounded-full mt-2 mr-3"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">음성 AI 튜터 시스템</h4>
                    <p className="text-sm text-gray-600">Whisper 기반 음성인식 교육</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-gray-900 rounded-full mt-2 mr-3"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">AI 매칭 플랫폼</h4>
                    <p className="text-sm text-gray-600">LLM 기반 소상공인 매칭</p>
                  </div>
                </div>
              </div>
            </div>

            {/* BigData Analytics */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">빅데이터 분석</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-gray-900 rounded-full mt-2 mr-3"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">데이터 시각화 대시보드</h4>
                    <p className="text-sm text-gray-600">실시간 데이터 모니터링</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-gray-900 rounded-full mt-2 mr-3"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">예측 분석 모델링</h4>
                    <p className="text-sm text-gray-600">머신러닝 기반 예측 시스템</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-gray-900 rounded-full mt-2 mr-3"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">업무 프로세스 자동화</h4>
                    <p className="text-sm text-gray-600">반복 업무 자동화 솔루션</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Government Support */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">정부지원사업</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-gray-900 rounded-full mt-2 mr-3"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">벤처기업 인증 지원</h4>
                    <p className="text-sm text-gray-600">벤처기업 확인 신청 지원</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-gray-900 rounded-full mt-2 mr-3"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">R&D 세액공제 신청</h4>
                    <p className="text-sm text-gray-600">연구개발비 세액공제 지원</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-gray-900 rounded-full mt-2 mr-3"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">정부지원사업 기획</h4>
                    <p className="text-sm text-gray-600">사업 계획서 작성 및 제출</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Education Platform */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">교육 플랫폼</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-gray-900 rounded-full mt-2 mr-3"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">AI 개인 맞춤 학습</h4>
                    <p className="text-sm text-gray-600">학습자별 맞춤형 커리큘럼</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-gray-900 rounded-full mt-2 mr-3"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">스마트 문제은행 구축</h4>
                    <p className="text-sm text-gray-600">AI 기반 문제 자동 생성</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-gray-900 rounded-full mt-2 mr-3"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">학습 분석 시스템</h4>
                    <p className="text-sm text-gray-600">학습 패턴 분석 및 피드백</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
              기술 스택
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              검증된 기술 스택으로 안정적이고 효율적인 솔루션을 구축합니다
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-3xl text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Backend & Database</h3>
              <div className="space-y-2">
                <p className="text-gray-700">Supabase</p>
                <p className="text-gray-700">PostgreSQL</p>
                <p className="text-gray-700">Next.js API Routes</p>
                <p className="text-gray-700">Python FastAPI</p>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-3xl text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">AI & Machine Learning</h3>
              <div className="space-y-2">
                <p className="text-gray-700">GPT API</p>
                <p className="text-gray-700">OpenAI Whisper</p>
                <p className="text-gray-700">TensorFlow</p>
                <p className="text-gray-700">PyTorch</p>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-3xl text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Frontend & Deployment</h3>
              <div className="space-y-2">
                <p className="text-gray-700">Next.js</p>
                <p className="text-gray-700">React</p>
                <p className="text-gray-700">Tailwind CSS</p>
                <p className="text-gray-700">Vercel</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
            당신의 비즈니스에 맞는 AI 솔루션을 만나보세요
          </h2>
          <p className="text-xl font-light text-gray-300 mb-8">
            검증된 기술과 실전 경험으로 최적의 솔루션을 제공합니다
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/consultation" 
              className="inline-flex items-center bg-white text-gray-900 px-8 py-3 rounded-full text-lg font-bold hover:bg-gray-100 shadow-2xl"
            >
              무료 상담 신청
              <svg className="ml-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            
            <Link 
              href="/solutions" 
              className="inline-flex items-center border-2 border-white text-white px-8 py-3 rounded-full text-lg font-bold hover:bg-white hover:text-gray-900 transition-colors"
            >
              프로젝트 실적 보기
              <svg className="ml-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
} 