/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'standalone',
  experimental: {
    // Giải quyết vấn đề với thư mục không tồn tại
    serverComponentsExternalPackages: ["fs", "path"]
  },
  // Tắt tính năng tĩnh hóa cho các trang cụ thể gặp lỗi
  unstable_excludeFiles: ['**/app/hmmm/hmm/**/*'],
}

export default nextConfig
