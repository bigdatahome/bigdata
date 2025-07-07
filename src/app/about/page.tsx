"use client";

import React from "react";
import Layout from "@/components/layout/Layout";

export default function AboutPage() {
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
            "AI는 현장에 닿을 때 진짜 기술이 됩니다"
          </h2>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
              빅데이터기술연구원(주)
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              30년 이상의 IT 컨설팅 경험과 정부 인증 자격을 바탕으로<br />
              기업의 디지털 전환을 이끌어갑니다
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center mr-4">
                  <img
                    src="/images/korea_gv.png"
                    alt="고용노동부"
                    className="w-12 h-12"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">대한민국 산업현장교수</h3>
                  <p className="text-sm text-gray-600">고용노동부 제2018-04-006호</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                기업 현장에서 실제로 필요한 기술 교육과 컨설팅을 제공하며,<br />
                이론과 실무를 연결하는 교육 프로그램을 운영합니다.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center mr-4">
                  <img
                    src="/images/korea_gv.png"
                    alt="중소벤처기업부"
                    className="w-12 h-12"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">중소벤처기업부 기술지도사</h3>
                  <p className="text-sm text-gray-600">등록 제4380호</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                중소기업의 기술 혁신과 경영 개선을 위한 전문 컨설팅을 제공하며,<br />
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
              다양한 분야에서 축적된 경험을 바탕으로<br />
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
              다양한 기관과의 협력을 통해<br />
              더 나은 서비스를 제공합니다
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-200 text-center">
              <div className="flex items-center justify-center mx-auto mb-4">
                <img
                  src="/images/sslogo2.png"
                  alt="대한민국산업현장교수단"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-1">대한민국산업현장교수단</h3>
              <p className="text-sm text-gray-600">전문 교육 네트워크</p>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-200 text-center">
              <div className="flex items-center justify-center mx-auto mb-4">
                <img
                  src="/images/sslogo4.png"
                  alt="한국경영기술지도사회"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-1">한국경영기술지도사회</h3>
              <p className="text-sm text-gray-600">컨설팅 전문 단체</p>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-200 text-center">
              <div className="flex items-center justify-center mx-auto mb-4">
                <img
                  src="/images/sslogo1.png"
                  alt="국립대학교 연구실"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-1">국립대학교 연구실</h3>
              <p className="text-sm text-gray-600">한밭대·충남대 협력</p>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-200 text-center">
              <div className="flex items-center justify-center mx-auto mb-4">
                <img
                  src="/images/sslogo3.png"
                  alt="AI 전문 기관"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-1">AI 전문 기관</h3>
              <p className="text-sm text-gray-600">기업진단·인공지능협회</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">
            당신의 데이터 기반 혁신을 함께 하겠습니다
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            30년 이상의 경험과 정부 인증 자격을 바탕으로<br />
            실질적인 AI 솔루션을 제공합니다
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/consultation"
              className="inline-flex items-center bg-gray-900 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 shadow-lg"
            >
              무료 상담 받기
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a 
              href="/contact"
              className="inline-flex items-center border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-900 hover:text-white transition-all"
            >
              연락처 보기
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
} 