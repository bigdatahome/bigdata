"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-900 py-16 relative border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          
          {/* Company Info Column */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img
                src="/images/logo_black.png"
                alt="BIGDATA T.I."
                className="h-9 w-9"
              />
              <span className="text-lg font-bold text-gray-900">빅데이터기술연구원</span>
            </div>
            <div className="text-gray-600 text-sm leading-relaxed">
              <p className="font-medium text-gray-900 mb-2">BIGDATA T.I. Co., Ltd.</p>
              <p>AI와 빅데이터를 현실로 만드는 파트너</p>
              <p>실행 중심의 혁신적인 솔루션을 제공합니다</p>
            </div>
          </div>

          {/* Contact Info Column */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-gray-900">연락처</h4>
            <div className="text-gray-600 text-sm space-y-3">
              <div>
                <p className="text-gray-900 font-medium">주소</p>
                <p>대전광역시 유성구 가정북로 96,<br />경제통상진흥원 303호</p>
              </div>
              <div>
                <p className="text-gray-900 font-medium">전화</p>
                <p>010-5234-3535</p>
              </div>
              <div>
                <p className="text-gray-900 font-medium">이메일</p>
                <p>abc@bigdt.co.kr</p>
              </div>
            </div>
          </div>

          {/* Government Certification Column */}
          <div className="space-y-6 text-left">
            <h4 className="text-lg font-bold text-gray-900 text-left">정부 인증</h4>
            <div className="text-gray-600 text-sm space-y-6 text-left">
              <div className="text-left">
                <div className="flex items-center space-x-2 mb-2 justify-start">
                  <img
                    src="/images/korea_gv.png"
                    alt="중소벤처기업부"
                    className="w-5 h-5"
                  />
                  <span className="text-gray-900 font-medium">중소벤처기업부</span>
                </div>
                <div className="text-left">
                  <p className="text-gray-900 font-medium text-left">기술지도사사무소</p>
                  <p className="text-left">등록 제4380호</p>
                </div>
              </div>
              <div className="text-left">
                <div className="flex items-center space-x-2 mb-2 justify-start">
                  <img
                    src="/images/korea_gv.png"
                    alt="고용노동부"
                    className="w-5 h-5"
                  />
                  <span className="text-gray-900 font-medium">고용노동부</span>
                </div>
                <div className="text-left">
                  <p className="text-gray-900 font-medium text-left">대한민국 산업현장교수</p>
                  <p className="text-left">제2018-04-006호</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-gray-200">
          <div className="text-center space-y-2">
            <p className="text-gray-700 text-sm">
              빅데이터기술연구원(주) | 대표이사: 배종옥 | 사업자등록번호: 271-88-01540
            </p>
            <p className="text-gray-500 text-xs">
              중소벤처기업부 등록 제4380호 기술지도사사무소 | 고용노동부 대한민국 산업현장교수 제2018-04-006호
            </p>
            <p className="text-gray-700 text-sm pt-2">
              © 2025 BIGDATA T.I. Co., Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
} 