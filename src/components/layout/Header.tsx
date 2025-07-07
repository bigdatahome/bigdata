"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  // 네비게이션 링크 스타일을 결정하는 함수
  const getLinkClassName = (path: string) => {
    const isActive = pathname === path;
    return `font-medium transition-all duration-300 hover:scale-105 ${
      isActive 
        ? 'text-gray-900 font-bold' 
        : 'text-gray-600 hover:text-gray-900'
    }`;
  };

  return (
    <nav className="bg-white border-b border-gray-100 w-full shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3">
            <a href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-300">
              <Image
                src="/images/logo_black.png"
                alt="BIGDATA T.I."
                width={35}
                height={35}
                style={{ aspectRatio: "1/1" }}
              />
              <span className="text-xl text-gray-900 tracking-tight">
                <span className="font-bold">빅데이터</span>
                <span className="font-light">기술연구원</span>
              </span>
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="/about" className={getLinkClassName('/about')}>About</a>
            <a href="/services" className={getLinkClassName('/services')}>Services</a>
            <a href="/solutions" className={getLinkClassName('/solutions')}>Solutions</a>
            <a href="/contact" className={getLinkClassName('/contact')}>Contact</a>
          </div>
          <a href="/consultation" className="relative bg-gray-900 text-white px-3 py-2 rounded-full hover:bg-gray-800 shadow-lg flex items-center justify-between min-w-[170px]">
            <span className="text-base font-medium">&nbsp;&nbsp;무료 기업 상담</span>
            <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center ml-3">
              <Image
                src="/images/bold_black_arrow.svg"
                alt="arrow"
                width={12}
                height={12}
                className="w-3 h-3"
              />
            </div>
          </a>
        </div>
      </div>
    </nav>
  );
} 