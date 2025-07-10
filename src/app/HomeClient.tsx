"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Layout from "@/components/layout/Layout";

// videoList를 컴포넌트 외부로 이동 (무한 루프 방지)
const VIDEO_LIST = ["/images/movie4.mp4", "/images/movie3.mp4", "/images/movie2.mp4", "/images/movie1.mp4"];

export default function HomeClient() {
  const [videoSrc, setVideoSrc] = useState<string>("");
  const [currentVideoIndex, setCurrentVideoIndex] = useState<number>(0);

  // 다음 비디오로 전환하는 함수
  const playNextVideo = () => {
    const nextIndex = (currentVideoIndex + 1) % VIDEO_LIST.length;
    setCurrentVideoIndex(nextIndex);
    
    // 캐시 버스터 추가
    const timestamp = Date.now();
    const random = Math.floor(Math.random() * 10000);
    const finalVideo = `${VIDEO_LIST[nextIndex]}?v=${timestamp}&r=${random}`;
    
    setVideoSrc(finalVideo);
  };

  useEffect(() => {
    // 클라이언트에서만 초기 영상 설정
    if (typeof window !== 'undefined') {
      // 랜덤 인덱스로 시작
      const randomIndex = Math.floor(Math.random() * VIDEO_LIST.length);
      setCurrentVideoIndex(randomIndex);
      
      // 캐시 버스터 추가
      const timestamp = Date.now();
      const random = Math.floor(Math.random() * 10000);
      const finalVideo = `${VIDEO_LIST[randomIndex]}?v=${timestamp}&r=${random}`;
      
      setVideoSrc(finalVideo);
    }
  }, []); // 의존성 배열을 빈 배열로 변경 (최초 한 번만 실행)

  return (
    <Layout>

      {/* Hero Section with Background Video */}
      <section id="home" className="relative h-[calc(85vh+65px)] flex items-center">
        {/* Background Video with CRT scan lines */}
        <div className="absolute inset-0 overflow-hidden">
          {videoSrc ? (
            <div className="relative w-full h-full">
              <video
                key={videoSrc}
                autoPlay
                muted
                playsInline
                preload="metadata"
                poster="/images/bg_poster.jpg"
                onEnded={playNextVideo}
                className="w-full h-full object-cover object-center scale-105"
                style={{
                  filter: 'brightness(0.5)',
                }}
              >
                <source src={videoSrc} type="video/mp4" />
              </video>
              {/* CRT scan lines overlay */}
              <div 
                className="absolute inset-0 pointer-events-none z-10"
                style={{
                  background: 'linear-gradient(to bottom, transparent 50%, rgba(255, 255, 255, 0.15) 50%)',
                  backgroundSize: '100% 4px',
                  mixBlendMode: 'overlay',
                }}
              ></div>
            </div>
          ) : (
            <div className="w-full h-full bg-gray-900"></div>
          )}
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-left text-white w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4 animate-fade-in max-w-3xl">
            <div className="relative">
              <h1 className="text-2xl md:text-4xl lg:text-6xl mb-5 leading-none tracking-tighter">
                <span className="font-semibold">우리의 AI 기술은 이미,</span>
                <br />
                <span className="text-2xl md:text-3xl lg:text-5xl font-light">당신의 비즈니스 현장에 있습니다.</span>
              </h1>
            </div>
            
            <p className="text-base md:text-xl lg:text-2xl font-light text-gray-200 max-w-3xl leading-relaxed tracking-tight">
              AI와 빅데이터를 중소기업 현장에 실제로 적용하는<br />
              <span className="font-semibold text-white mt-1 inline-block">가장 현실적인 파트너</span>를 만나보세요.
            </p>
            
            <div className="pt-5 flex justify-start">
              <a 
                href="/consultation" 
                className="relative inline-flex items-center bg-white text-gray-900 px-8 py-3 rounded-full text-base font-bold hover:bg-gray-100 shadow-2xl"
              >
                <span className="relative z-10">지금 상담하기</span>
                <svg className="ml-3 w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 2.98.97 4.29L1 23l6.71-1.97C9.02 21.64 10.46 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zM8 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm4 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm4 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/>
                </svg>
                <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white rounded-full opacity-0"></div>
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-4 inset-x-0 flex justify-center text-white" style={{animation: 'gentle-bounce 1.2s ease-in-out infinite'}}>
          <svg className="w-10 h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <rect x="8" y="6" width="8" height="12" rx="4" strokeWidth={1.5} />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 10v2" />
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-gray-600 mb-5">
              C O M P A N Y
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            <span className="block md:inline">기업의 혁신과 AI 전환을</span>
            <span className="block md:inline"> 돕는 회사</span>
            </h2>
           
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Left side - Company info */}
            <div className="space-y-5">
              <div className="relative">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">빅데이터기술연구원(주)</h3>
                
              </div>
              
              <p className="text-lg text-gray-700 leading-relaxed tracking-tight">
                대한민국 <span className="font-bold text-gray-900">산업현장교수</span>이자 중소벤처기업부<br className="block md:hidden" /><span className="font-bold text-gray-900">기술지도사</span>가<br className="hidden md:block" />주도하는
                실행 중심의 AI·빅데이터 <br className="block md:hidden" />컨설팅 기업입니다.
              </p>

              <blockquote className="text-lg font-light text-gray-700 italic leading-relaxed mt-5">
                &quot;<span className="font-bold underline decoration-sky-400 decoration-2">현장에서 진짜 쓰이는 AI</span><br />
                <span className="text-gray-900">기술보다 실행이 먼저입니다.</span>&quot;
              </blockquote>

              <a 
                href="/about" 
                className="inline-flex items-center bg-gray-900 text-white px-5 py-2 rounded-full font-medium hover:bg-gray-800 shadow-lg"
              >
                회사 소개 전체 보기
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            {/* Right side - Visual element */}
            <div className="relative">
              <div className="relative bg-white rounded-3xl p-8 text-gray-800 shadow-sm border border-gray-200">
                <div className="text-center space-y-5">
                  <Image
                    src="/images/logo_black.png"
                    alt="BIGDATA T.I. 로고"
                    width={55}
                    height={55}
                    className="mx-auto"
                    style={{ aspectRatio: "1/1" }}
                  />
                  <div className="space-y-3">
                    <div className="flex items-center justify-between pb-2">
                      <span className="text-gray-500 text-sm">설립연도</span>
                      <span className="font-bold text-sm">2019. 7</span>
                    </div>
                    <div className="flex items-center justify-between pb-2">
                      <span className="text-gray-500 text-sm">핵심분야</span>
                      <span className="font-bold text-sm">생성형 AI 솔루션 · 빅데이터</span>
                    </div>
                    <div className="flex items-center justify-between pb-2">
                      <span className="text-gray-500 text-sm">주요고객</span>
                      <span className="font-bold text-sm">중소기업 및 AI 혁신 전환 기업</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 text-sm">대표자격</span>
                      <span className="font-bold text-sm">산업현장교수 · 기술지도사</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-gray-600 mb-5">
              S E R V I C E S
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              실전 중심의 AI 솔루션
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              중소기업 현장에서 바로 활용할 수 있는<br />
              <span className="font-semibold text-gray-900">실용적인 AI 기술과 컨설팅</span>을 제공합니다.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-3xl text-center">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">AI 기반 솔루션 개발</h3>
              <p className="text-gray-700 leading-relaxed">
                GPT, OCR, 음성인식 등을 활용한<br />
                맞춤형 AI 시스템 구축
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-3xl text-center">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">빅데이터 분석</h3>
              <p className="text-gray-700 leading-relaxed">
                기업 데이터를 활용한<br />
                인사이트 도출 및 의사결정 지원
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-3xl text-center">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">정부지원사업 자문</h3>
              <p className="text-gray-700 leading-relaxed">
                벤처기업 인증, 연구소 설립<br />
                사업계획서 작성 등 전문 자문
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <a 
              href="/services" 
              className="inline-flex items-center bg-gray-900 text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 shadow-lg"
            >
              서비스 전체 보기
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-gray-600 mb-5">
              S O L U T I O N S
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              검증된 프로젝트 실적
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              실제 고객사와 함께 진행한 AI 프로젝트들로<br />
              <span className="font-semibold text-gray-900">기술 역량과 현장 적용 능력</span>을 증명합니다.
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
                  <h3 className="text-xl font-bold text-gray-900">AI 문제은행 시스템</h3>
                  <p className="text-sm text-gray-600">영어학원 대상 제안 실적</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                OCR + GPT를 활용한 문제 자동 생성 및<br />
                개인별 맞춤 학습 시스템 구축
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">스마트팜 AI 플랫폼</h3>
                  <p className="text-sm text-gray-600">AI 농업기술경진대회 수상</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                농업과 치유를 결합한 혁신적인<br />
                AI 교감형 플랫폼 개발
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <a 
              href="/solutions" 
              className="inline-flex items-center bg-gray-900 text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 shadow-lg"
            >
              프로젝트 전체 보기
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 bg-gray-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
          <span className="block md:inline">당신의 AI 전환을 지금</span>
          <span className="block md:inline">시작하세요</span>
          </h2>
          <p className="text-xl md:text-2xl font-light text-gray-300 mb-8">
          <span className="block md:inline">산업현장교수와 기술지도사가</span>
          <span className="block md:inline">직접 상담해드립니다</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/consultation" 
              className="inline-flex items-center bg-white text-gray-900 px-8 py-3 rounded-full text-lg font-bold hover:bg-gray-100 shadow-2xl"
            >
              무료 상담 신청하기
              <svg className="ml-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            
            <a 
              href="/contact" 
              className="inline-flex items-center border-2 border-white text-white px-8 py-3 rounded-full text-lg font-bold hover:bg-white hover:text-gray-900 transition-colors"
            >
              1:1 문의하기
              <svg className="ml-3 w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 2.98.97 4.29L1 23l6.71-1.97C9.02 21.64 10.46 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zM8 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm4 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm4 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

    </Layout>
  );
} 