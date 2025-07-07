/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // ESLint 에러를 빌드 시 무시
    ignoreDuringBuilds: true,
  },
  typescript: {
    // TypeScript 에러를 빌드 시 무시
    ignoreBuildErrors: true,
  },
  images: {
    // 이미지 최적화 비활성화
    unoptimized: true,
  },
}

module.exports = nextConfig 