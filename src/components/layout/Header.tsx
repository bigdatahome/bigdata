"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // 네비게이션 링크 스타일을 결정하는 함수
  const getLinkClassName = (path: string) => {
    const isActive = pathname === path;
    return `font-medium transition-all duration-300 hover:scale-105 ${
      isActive 
        ? 'text-gray-900 font-bold' 
        : 'text-gray-600 hover:text-gray-900'
    }`;
  };

  // 모바일 메뉴 링크 스타일
  const getMobileLinkClassName = (path: string) => {
    const isActive = pathname === path;
    return `block px-4 py-3 text-base font-medium transition-colors duration-200 ${
      isActive 
        ? 'text-gray-900 bg-gray-50 font-bold' 
        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
    }`;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white border-b border-gray-100 w-full shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* 로고 섹션 */}
          <div className="flex items-center space-x-3">
            <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-300">
              <Image
                src="/images/logo_black.png"
                alt="BIGDATA T.I."
                width={36}
                height={36}
                className="w-9 h-9"
              />
              {/* 모바일에서 텍스트 숨김 */}
              <span className="hidden xl:block text-xl text-gray-900 tracking-tight">
                <span className="font-bold">빅데이터</span>
                <span className="font-light">기술연구원</span>
              </span>
            </Link>
          </div>

          {/* 데스크톱 네비게이션 */}
          <div className="hidden xl:flex items-center space-x-8">
            <Link href="/about" className={getLinkClassName('/about')}>About</Link>
            <Link href="/services" className={getLinkClassName('/services')}>Services</Link>
            <Link href="/solutions" className={getLinkClassName('/solutions')}>Solutions</Link>
            <Link href="/contact" className={getLinkClassName('/contact')}>Contact</Link>
          </div>

          {/* 우측 버튼들 */}
          <div className="flex items-center space-x-4">
            {/* 상담 버튼 */}
            <Link href="/consultation" className="relative bg-gray-900 text-white px-3 py-2 rounded-full hover:bg-gray-800 shadow-lg flex items-center justify-between min-w-[120px] xl:min-w-[170px]">
              <span className="text-base font-medium xl:block hidden">&nbsp;&nbsp;MVP 체험하기</span>
              <span className="text-sm font-medium xl:hidden block">&nbsp;MVP 체험</span>
              <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center ml-3">
                <img
                  src="/images/bold_black_arrow.svg"
                  alt="arrow"
                  className="w-3 h-3"
                />
              </div>
            </Link>

            {/* 모바일 햄버거 메뉴 */}
            <button
              onClick={toggleMobileMenu}
              className="xl:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200"
              aria-label="메뉴 열기"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* 모바일 드롭다운 메뉴 */}
        {isMobileMenuOpen && (
          <div className="xl:hidden border-t border-gray-100 bg-white">
            <div className="py-2">
              <Link 
                href="/about" 
                className={getMobileLinkClassName('/about')}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/services" 
                className={getMobileLinkClassName('/services')}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                href="/solutions" 
                className={getMobileLinkClassName('/solutions')}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Solutions
              </Link>
              <Link 
                href="/contact" 
                className={getMobileLinkClassName('/contact')}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 