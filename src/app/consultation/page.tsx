'use client';
import React from 'react';
import Layout from "@/components/layout/Layout";

export default function ConsultationPage() {
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
          <span className="block md:inline">당신의 기업에 AI는 너무 </span>
          <span className="block md:inline">이르다고 생각하시나요?</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 font-light mb-8 tracking-tight">
          <span className="block md:inline">중소기업을 위한 실전 AI 컨설팅, </span>
          <span className="block md:inline">지금도 늦지 않았습니다.</span>
          </p>
          <div className="w-16 h-1 bg-white mx-auto"></div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">
            <span className="block md:inline">Q. 이런 고민, 익숙하지 </span>
            <span className="block md:inline">않으신가요?</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-200 text-center">
              <svg className="w-8 h-8 text-gray-600 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-gray-700 leading-relaxed tracking-tight">
              <span className="block md:inline">사람은 부족하고, 데이터는 쌓이는데 </span>
              <span className="block md:inline">활용법을 모르겠다.</span>
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-200 text-center">
              <svg className="w-8 h-8 text-gray-600 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <p className="text-gray-700 leading-relaxed tracking-tight">
                정부 지원사업은 어렵고 복잡해서 도전하기 겁난다.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-200 text-center">
              <svg className="w-8 h-8 text-gray-600 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-gray-700 leading-relaxed tracking-tight">
              <span className="block md:inline">익숙하지 않은 AI가 좋다는 건 알지만, </span>
              <span className="block md:inline">우리 회사에 어떻게 적용해야 할지 모르겠다.</span>
              </p>
            </div>
          </div>
        </div>
       
      </section>
      <img
                    src="/images/logo_black.png"
                    alt="BIGDATA T.I."
                    className="mx-auto w-10 h-10"
                  />
      {/* Solution & Experience Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">
            <span className="block md:inline">A. 그래서 저희는 &lsquo;현장 중심 </span>
            <span className="block md:inline">AI 컨설팅&rsquo;을 제공합니다</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gray-100 p-8 rounded-3xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">AI 기반 문제은행 시스템</h3>
              <p className="text-gray-700 mb-2">실제 영어학원 제안 경험 보유</p>
            </div>
            
            <div className="bg-gray-100 p-8 rounded-3xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">지문인식 적성검사</h3>
              <p className="text-gray-700 mb-2">정부기관 대상 제안 수행</p>
            </div>
            
            <div className="bg-gray-100 p-8 rounded-3xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">OCR + GPT 기반 분석 자동화</h3>
              <p className="text-gray-700 mb-2">보고서, 교육 시스템 적용</p>
            </div>
            
            <div className="bg-gray-100 p-8 rounded-3xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">스마트팜 교감형 플랫폼</h3>
              <p className="text-gray-700 mb-2">실제 수상 실적</p>
            </div>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">
            <span className="block md:inline">당신의 데이터를 실전에서 </span>
            <span className="block md:inline">작동하게 만듭니다!</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-black rounded-full mr-3"></div>
                <span className="text-lg font-semibold text-gray-900 tracking-tight">30년 이상 IT 기반 컨설팅, 개발 실무 경험</span>
              </div>
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-black rounded-full mr-3"></div>
                <span className="text-lg font-semibold text-gray-900 tracking-tight">대표는 산업현장교수, 기술지도사 등록</span>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-black rounded-full mr-3"></div>
                <span className="text-lg font-semibold text-gray-900 tracking-tight">공공기관 사업 기획 + 실행까지 한 번에</span>
              </div>
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-black rounded-full mr-3"></div>
                <span className="text-lg font-semibold text-gray-900 tracking-tight">교육, 의료, 행정 등 다분야 경험 보유</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <img
                    src="/images/logo_black.png"
                    alt="BIGDATA T.I."
                    className="mx-auto w-10 h-10"
                  />
      {/* Case Studies Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">
            <span className="block md:inline">실제로 이런 기업들이 함께 </span>
            <span className="block md:inline">했습니다.</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-3xl text-center">
              <svg className="w-8 h-8 text-gray-600 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <h3 className="text-xl font-bold text-gray-900 mb-4">OOO 학원</h3>
              <p className="text-gray-700">AI 문제은행 + 튜터링 시스템 기획</p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-3xl text-center">
              <svg className="w-8 h-8 text-gray-600 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
              <h3 className="text-xl font-bold text-gray-900 mb-4">OOO 기업</h3>
              <p className="text-gray-700">AI 기반 진단툴 제안서 작성 및 영업 수행</p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-3xl text-center">
              <svg className="w-8 h-8 text-gray-600 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              <h3 className="text-xl font-bold text-gray-900 mb-4">스마트팜 프로젝트</h3>
              <p className="text-gray-700">스마트팜+AI 교감 시스템 공동 개발</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 tracking-tight">
            지금 바로 상담해보세요
          </h2>
          
          <div className="text-center mb-8">
            <a 
              href="/contact"
              className="inline-flex items-center bg-gray-900 text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-gray-800 shadow-2xl"
            >
              1 : 1 &nbsp;&nbsp;상담 문의하기
              <svg className="ml-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
          
          <div className="text-center">
            <p className="text-gray-600 text-lg italic">
              AI는 먼 미래가 아닙니다.
            </p>
            <p className="text-gray-900 text-xl font-bold mt-2">
              당신의 사업에 지금 필요한 실전 도구입니다.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
} 