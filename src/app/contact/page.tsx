"use client";

import { useState, useEffect } from "react";
import Layout from "@/components/layout/Layout";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    captcha: "",
    privacyAgreed: false
  });

  const [captchaQuestion, setCaptchaQuestion] = useState({
    a: 5,
    b: 3
  });

  useEffect(() => {
    // 클라이언트에서만 랜덤 값 생성
    setCaptchaQuestion({
      a: Math.floor(Math.random() * 10) + 1,
      b: Math.floor(Math.random() * 10) + 1
    });
  }, []);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // 스팸방지 검증
    const correctAnswer = captchaQuestion.a + captchaQuestion.b;
    if (parseInt(formData.captcha) !== correctAnswer) {
      setSubmitMessage("스팸방지 계산이 올바르지 않습니다.");
      setIsSubmitting(false);
      return;
    }

    // 개인정보 동의 검증
    if (!formData.privacyAgreed) {
      setSubmitMessage("개인정보 이용 동의가 필요합니다.");
      setIsSubmitting(false);
      return;
    }

    // 폼 검증
    if (!formData.name || !formData.phone || !formData.email || !formData.message) {
      setSubmitMessage("모든 필드를 입력해 주세요.");
      setIsSubmitting(false);
      return;
    }

    // 실제 제출 로직은 여기에 구현
    // 현재는 시뮬레이션
    setTimeout(() => {
      setSubmitMessage("문의가 성공적으로 접수되었습니다. 1일 이내 연락드리겠습니다.");
      setFormData({ name: "", phone: "", email: "", message: "", captcha: "", privacyAgreed: false });
      setIsSubmitting(false);
    }, 1000);
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
              backgroundImage: `url('/images/bg14-3.jpg')`,
            }}
          ></div>
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
            언제든지 편하게 연락해 주세요
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 font-light mb-8 tracking-tight">
            AI 도입, 정부사업 자문, 기술 컨설팅 등 어떤 문의도 환영합니다
          </p>
          <div className="w-16 h-1 bg-white mx-auto"></div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
              1:1 문의하기
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              아래 항목을 작성하시면 담당자가 1일 이내 연락드립니다
            </p>
          </div>

          <div className="p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                    성함 <span className="text-orange-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-500 focus:border-transparent outline-none transition-all"
                    placeholder="이름을 입력해 주세요"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                    연락처 <span className="text-orange-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-500 focus:border-transparent outline-none transition-all"
                    placeholder="010-0000-0000"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                  이메일 <span className="text-orange-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-500 focus:border-transparent outline-none transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                  문의 내용 <span className="text-orange-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-500 focus:border-transparent outline-none transition-all resize-vertical"
                  placeholder="예) 우리 회사에 맞는 AI 컨설팅이 궁금합니다.&#10;예) 벤처기업 인증 연장을 도와주세요."
                />
              </div>

              {/* 스팸방지 계산 */}
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <label htmlFor="captcha" className="block text-sm font-semibold text-gray-900 mb-3">
                  스팸방지 확인 <span className="text-orange-500">*</span>
                </label>
                <div className="flex items-center space-x-4">
                  <span className="text-lg font-medium text-gray-700">
                    {captchaQuestion.a} + {captchaQuestion.b} = ?
                  </span>
                  <input
                    type="number"
                    id="captcha"
                    name="captcha"
                    value={formData.captcha}
                    onChange={handleInputChange}
                    required
                    className="w-20 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent outline-none transition-all text-center"
                    placeholder="답"
                  />
                </div>
              </div>

              {/* 개인정보 이용 동의 */}
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="privacyAgreed"
                    name="privacyAgreed"
                    checked={formData.privacyAgreed}
                    onChange={handleInputChange}
                    required
                    className="mt-1 w-5 h-5 text-gray-600 border-gray-300 rounded focus:ring-2 focus:ring-gray-500"
                  />
                  <div>
                    <label htmlFor="privacyAgreed" className="text-sm font-semibold text-gray-900 cursor-pointer">
                      개인정보 이용 동의 <span className="text-orange-500">*</span>
                    </label>
                    <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                      수집된 개인정보는 상담 목적으로만 사용되며, 상담 완료 후 즉시 폐기됩니다. 
                      제3자에게 제공되지 않으며, 마케팅 목적으로 사용되지 않습니다.
                    </p>
                  </div>
                </div>
              </div>

              {/* 제출 버튼 */}
              <div className="text-center pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center bg-gray-900 text-white px-12 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      접수 중...
                    </>
                  ) : (
                    "문의하기"
                  )}
                </button>

                {submitMessage && (
                  <p className={`mt-4 text-sm ${submitMessage.includes("성공") ? "text-green-600" : "text-red-600"}`}>
                    {submitMessage}
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
              연락처 정보
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              빅데이터기술연구원(주)는 항상 열려 있습니다<br />
              담당자가 신속하게 응답해드리겠습니다
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-200 text-center">
              <div className="flex justify-center mb-6">
                <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">전화 상담</h3>
              <p className="text-lg font-medium text-gray-700 mb-1">010-5234-3535</p>
              <p className="text-sm text-gray-600">평일 9:00 - 18:00</p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-200 text-center">
              <div className="flex justify-center mb-6">
                <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">이메일</h3>
              <p className="text-lg font-medium text-gray-700 mb-1">abc@bigdt.co.kr</p>
              <p className="text-sm text-gray-600">24시간 접수 가능</p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-200 text-center">
              <div className="flex justify-center mb-6">
                <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">본사 주소</h3>
              <p className="text-sm font-medium text-gray-700 leading-relaxed">
                대전광역시 유성구 가정북로 96<br />
                경제통상진흥원 303호
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Operating Hours */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
              운영 시간
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              아래 시간에 연락주시면 더욱 빠른 응답을 받으실 수 있습니다
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="mr-4">
                  <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">평일</h3>
                  <p className="text-sm text-gray-600">월요일 - 금요일</p>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-lg font-medium text-gray-700">오전 9:00 - 오후 6:00</p>
                <p className="text-sm text-gray-600">점심시간: 오후 12:00 - 1:00</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="mr-4">
                  <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">주말 및 공휴일</h3>
                  <p className="text-sm text-gray-600">토요일 - 일요일</p>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-lg font-medium text-gray-700">휴무</p>
                <p className="text-sm text-gray-600">이메일 문의는 24시간 접수 가능</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600">
              당신의 데이터 기반 혁신을 함께 하겠습니다.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
} 