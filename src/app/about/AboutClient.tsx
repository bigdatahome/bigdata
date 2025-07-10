"use client";

import React from "react";
import Layout from "@/components/layout/Layout";

export default function AboutClient() {
  return (
    <Layout>
      
      {/* Company Philosophy Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/images/bg11.jpg')`,
            }}
          ></div>
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
          <span className="block md:inline">&quot;AI는 현장에 닿을 때 진짜</span>
          <span className="block md:inline">기술이 됩니다&quot;</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 font-light mb-8 tracking-tight">
            대표 철학에서 출발한 실천 중심 접근법
          </p>
          <div className="w-16 h-1 bg-white mx-auto"></div>
        </div>
      </section>

      {/* CEO Profile */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm text-gray-600 mb-5">
              A B O U T
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
              빅데이터기술연구원(주)
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            <span className="block md:inline">30년 이상의 IT 컨설팅 경험과 정부 인증 </span>
                          <span className="block md:inline">바탕으로
              기업의 디지털 전환을 이끌어갑니다</span>
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center mr-4">
                  <img
                    src="/images/korea_gv.png"
                    alt="고용노동부 로고"
                    className="w-12 h-12"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">대한민국산업현장교수</h3>
                  <p className="text-sm text-gray-600">고용노동부 제2018-04-006호</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                              기업 현장에서 실제로 필요한 기술 교육과 컨설팅을 제공하며,<br className="hidden md:block" />
                이론과 실무를 연결하는 교육 프로그램을 운영합니다.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center mr-4">
                  <img
                    src="/images/korea_gv.png"
                    alt="중소벤처기업부 로고"
                    className="w-12 h-12"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">중소벤처기업부 기술지도사</h3>
                  <p className="text-sm text-gray-600">등록 제4380호</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                중소기업의 기술 혁신과 경영 개선을 위한 전문 컨설팅을 제공하며,<br className="hidden md:block" />
                정부 지원사업 기획 및 실행을 지원합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Activities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
              주요 활동 분야
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              다양한 분야에서 축적된 경험을 바탕으로<br className="block md:hidden" />
              실질적인 솔루션을 제공합니다
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">정부지원사업 자문</h3>
              <p className="text-sm text-gray-600">제안서 작성 및 사업 기획</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">기술 기반 창업 컨설팅</h3>
              <p className="text-sm text-gray-600">R&D 전략 수립 및 실행</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">AI·빅데이터 도입 기획</h3>
              <p className="text-sm text-gray-600">기업 맞춤형 솔루션 설계</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">사내 교육 및 시스템 개선</h3>
              <p className="text-sm text-gray-600">실무 중심 교육 프로그램</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Network */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
              협력 네트워크
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              다양한 기관과의 협력을 통해<br className="block md:hidden" />
              더 나은 서비스를 제공합니다
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-200 text-center">
              <div className="flex items-center justify-center mx-auto mb-4">
                <img
                  src="/images/sslogo2.png"
                  alt="대한민국산업현장교수단 로고"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-1">대한민국산업현장교수단</h3>
              <p className="text-sm text-gray-600">분야별 동료 교수</p>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-200 text-center">
              <div className="flex items-center justify-center mx-auto mb-4">
                <img
                  src="/images/sslogo4.png"
                  alt="한국경영기술지도사회 로고"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-1">한국경영기술지도사회</h3>
              <p className="text-sm text-gray-600">분야별 동료 지도사</p>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-200 text-center">
              <div className="flex items-center justify-center mx-auto mb-4">
                <img
                  src="/images/sslogo1.png"
                  alt="국립대학교 연구실 로고"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-1">국립대학교 연구실</h3>
              <p className="text-sm text-gray-600">한밭대 AI·충남대 빅데이터 협력</p>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-200 text-center">
              <div className="flex items-center justify-center mx-auto mb-4 space-x-2">
                <img
                  src="/images/sslogo3.png"
                  alt="기술 네트워크 로고"
                  className="w-12 h-12 object-contain"
                />
                <img
                  src="/images/sslogo5.png"
                  alt="기술 네트워크 로고"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-1">학회 활동</h3>
              <p className="text-sm text-gray-600">정보보호학회·인공지능학회 등</p>
            </div>
          </div>
        </div>
      </section>

      {/* CEO Message */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
              CEO 메시지
            </h2>
          </div>

          <div className="bg-gray-100 p-8 rounded-3xl">
            <blockquote className="text-center text-lg text-gray-800 italic leading-relaxed mb-6">
              &quot;20년 현장 경험과 2개 국립대학 AI 분야 공학 박사 연구로 검증된<br />
              MVP 기반 AI 솔루션을 고객과 함께 실용화합니다.&quot;
            </blockquote>
            <footer className="text-center">
              <cite className="text-gray-900 font-semibold">
                원장 배종옥
              </cite>
            </footer>
          </div>
        </div>
      </section>

    </Layout>
  );
} 