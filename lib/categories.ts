import path from 'path';

export type Category = {
  id: string;
  title: string;
  description: string;
  thumbnailSrc: string;
}

export function getCategories(): Category[] {
  // Sử dụng dynamic import để chỉ import fs trên server
  // Next.js sẽ hiểu đây là server-only code
  if (typeof window === 'undefined') {
    // Server-side code
    const fs = require('fs');
    const categoriesPath = path.join(process.cwd(), 'data/categories.json');
    const categoriesData = JSON.parse(fs.readFileSync(categoriesPath, 'utf8'));
    return categoriesData;
  }
  
  // Client-side fallback (trả về dữ liệu rỗng hoặc mặc định)
  return [];
} 