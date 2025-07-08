"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Layout from "@/components/layout/Layout";

// videoList를 컴포넌트 외부로 이동 (무한 루프 방지)
const VIDEO_LIST = ["/images/movie4.mp4", "/images/movie3.mp4", "/images/movie2.mp4", "/images/movie1.mp4"];

export default function Home() {
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
            기업의 혁신과 AI 전환을 돕는 회사
            </h2>
           
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Left side - Company info */}
            <div className="space-y-5">
              <div className="relative">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">빅데이터기술연구원(주)</h3>
                
              </div>
              
              <p className="text-lg text-gray-700 leading-relaxed tracking-tight">
                대한민국 <span className="font-bold text-gray-900">산업현장교수</span>이자 중소벤처기업부 <span className="font-bold text-gray-900">기술지도사</span>가 주도하는<br />
                실행 중심의 AI·빅데이터 컨설팅 기업입니다.
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
                    alt="BIGDATA T.I."
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
      <section id="services" className="py-24 relative overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/images/bg6.jpg')`,
            }}
          ></div>
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-gray-300 mb-5">
             S E R V I C E S
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            생산성 향상을 위한 AI 솔루션
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto tracking-tight">
            중소기업을 위한 실행 가능한 생성형 AI 솔루션을 제공합니다
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12 tracking-tight">
            {/* Service 1 */}
            <div className="relative">
             
              <div className="relative bg-white/60 p-6 rounded-3xl shadow-2xl hover:bg-gray-100">
                <div className="flex justify-center mb-5">
                  <svg className="w-12 h-12 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-5 text-center">
                  AI 기반 솔루션<br />데이터 분석 & 자동화
                </h3>
                <div className="space-y-3 text-gray-600 leading-none">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-gray-900 rounded-full mr-3"></div>
                    <span>데이터 시각화 대시보드</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-gray-900 rounded-full mr-3"></div>
                    <span>예측 분석 모델링</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <div className="w-2 h-2 bg-gray-900 rounded-full mr-3"></div>
                    <span>업무 프로세스 자동화</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Service 2 */}
            <div className="relative">
             
              <div className="relative bg-white/60 p-6 rounded-3xl shadow-2xl hover:bg-gray-100">
                <div className="flex justify-center mb-5">
                  <svg className="w-12 h-12 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-5 text-center">
                  정부사업 컨설팅<br />(벤처인증, 세액공제 등)
                </h3>
                <div className="space-y-3 text-gray-600 leading-none">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-gray-900 rounded-full mr-3"></div>
                    <span>벤처기업 인증 지원</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-gray-900 rounded-full mr-3"></div>
                    <span>R&D 세액공제 신청</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <div className="w-2 h-2 bg-gray-900 rounded-full mr-3"></div>
                    <span>정부지원사업 기획</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Service 3 */}
            <div className="relative">
             
              <div className="relative bg-white/60 p-6 rounded-3xl shadow-2xl hover:bg-gray-100">
                <div className="flex justify-center mb-5">
                  <svg className="w-12 h-12 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-5 text-center">
                  AI 튜터·문제은행 등<br />교육/검사 플랫폼 기획
                </h3>
                <div className="space-y-3 text-gray-600 leading-none">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-gray-900 rounded-full mr-3"></div>
                    <span>AI 개인 맞춤 학습</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-gray-900 rounded-full mr-3"></div>
                    <span>스마트 문제은행 구축</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <div className="w-2 h-2 bg-gray-900 rounded-full mr-3"></div>
                    <span>학습 분석 시스템</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a 
              href="/services" 
              className="inline-flex items-center bg-white/60 text-gray-900 px-8 py-4 rounded-full text-base font-bold hover:bg-gray-100 shadow-2xl"
            >
              서비스 전체 보기
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>


      {/* Solutions Section */}
      <section id="solutions" className="py-24 bg-white relative overflow-hidden">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-gray-600 mb-5">
              S O L U T I O N S
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5 tracking-tight">
            검증된 AI 솔루션 제공
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              실전 프로젝트 경험을 바탕으로 한 검증된 솔루션을 제공합니다
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {/* Project 1 */}
            <div className="relative">
              <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start space-x-8">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 tracking-tight">
                      문제은행 AI 시스템
                    </h3>
                    <p className="text-gray-600 text-base mb-3 tracking-tight">
                      OCR 기반 문항 자동 인식 및 유형 분류 시스템
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></div>
                        <span className="text-sm text-gray-500 leading-none">기출문제 딥러닝 LLM 기반 문제 출제</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></div>
                        <span className="text-sm text-gray-500 leading-none">Whisper 음성 AI 튜터</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="relative">
              <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start space-x-8">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 tracking-tight">
                      지문인식 적성검사 시스템
                    </h3>
                    <p className="text-gray-600 text-base mb-3 tracking-tight">
                      CNN 기반 지문 Feature 추출 및 코사인 유사도 매칭 로직
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></div>
                        <span className="text-sm text-gray-500 leading-none">다층 신경망 예측 모델</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></div>
                        <span className="text-sm text-gray-500 leading-none">지문인식 분야 응용프로그램 개발</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="relative">
              <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start space-x-8">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 tracking-tight">
                      AI 교감형 솔루션
                    </h3>
                    <p className="text-gray-600 text-base mb-3 tracking-tight">
                      STT, LLM, TTS 기반 감성 응답 캐릭터
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></div>
                        <span className="text-sm text-gray-500 leading-none">Wav2Lip, 페르소나 부여 및 Fine-tuned GPT classifier</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></div>
                        <span className="text-sm text-gray-500 leading-none">AI 창업경진대회 수상경력</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 4 */}
            <div className="relative">
              <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start space-x-8">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 tracking-tight">
                      AI 매칭 플랫폼
                    </h3>
                    <p className="text-gray-600 text-base mb-3 tracking-tight">
                      LLM 기반 소상공인 오픈마켓과 협업 매칭 플랫폼
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></div>
                        <span className="text-sm text-gray-500 leading-none">Supabase 기반 점포 DB</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></div>
                        <span className="text-sm text-gray-500 leading-none">Next.js 반응형 대시보드</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Capabilities */}
          <div className="space-y-6 mb-12">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-2 tracking-tighter">검증된 기술 스택으로 효율적인 솔루션을 구현합니다!</h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-8 rounded-3xl border border-gray-300 text-center">
                <h4 className="text-lg font-bold text-gray-900 mb-2">SaaS 플랫폼 구축</h4>
                <p className="text-gray-600 text-sm">Supabase, Next.js, Vercel 기반 2주 내 MVP 출시</p>
              </div>
              <div className="bg-white p-8 rounded-3xl border border-gray-300 text-center">
                <h4 className="text-lg font-bold text-gray-900 mb-2">AI 파이프라인 자동화</h4>
                <p className="text-gray-600 text-sm">OCR, Whisper, StyleTTS, GPT API 통합 시스템</p>
              </div>
              <div className="bg-white p-8 rounded-3xl border border-gray-300 text-center">
                <h4 className="text-lg font-bold text-gray-900 mb-2">비용 효율 아키텍처</h4>
                <p className="text-gray-600 text-sm">Firebase 대비 구축 비용 70% 절감</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a 
              href="/solutions" 
              className="inline-flex items-center bg-gray-900 text-white px-8 py-4 rounded-full text-base font-bold hover:bg-gray-800 shadow-2xl"
            >
              솔루션 자세히 보기
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/images/bg9.jpg')`,
            }}
          ></div>
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-gray-300 mb-5">
            C O N T A C T
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 tracking-normal">
            지금 바로 프로젝트를 시작해보세요!
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              빠른 문의는 아래 연락처를 이용해주세요
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 mb-16">
            {/* Email */}
            <div className="flex flex-col items-center text-white">
              <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">이메일</h3>
              <p className="text-gray-200 font-mono text-base">abc@bigdt.co.kr</p>
            </div>

            {/* Phone */}
            <div className="flex flex-col items-center text-white">
              <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">전화</h3>
              <p className="text-gray-200 font-mono text-base">010-5234-3535</p>
            </div>

            {/* Consultation */}
            <div className="flex flex-col items-center text-white">
              <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">상담</h3>
              <a 
                href="/consultation" 
                className="inline-flex items-center text-white font-semibold hover:text-gray-300 transition-colors"
              >
                상담하러 가기
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          <div className="text-center">
            <a 
              href="/consultation"
              className="inline-flex items-center bg-black/60 text-white px-8 py-4 rounded-full text-base font-bold shadow-2xl hover:bg-black transition-colors"
            >
              <svg className="w-5 h-5 mr-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              상담 및 문의를 기다리고 있습니다
            </a>
          </div>
        </div>
      </section>

    </Layout>
  );
}
