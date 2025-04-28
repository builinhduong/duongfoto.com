/**
 * Đây là script để tạo danh sách ảnh từ thư mục dist/assets/highlight
 * Chạy script này bằng Node.js mỗi khi bạn thêm ảnh mới vào thư mục highlight
 * 
 * Cách sử dụng:
 * 1. Cài đặt Node.js
 * 2. Chạy: node generate_image_list.js
 */

const fs = require('fs');
const path = require('path');

// Đường dẫn đến thư mục highlight
const highlightDir = path.join(__dirname, 'dist', 'assets', 'highlight');
// Đường dẫn đến file JavaScript cần cập nhật
const targetFile = path.join(__dirname, 'highlight_gallery.js');

// Tạo dạng sách ảnh từ thư mục
function generateImageList() {
  try {
    // Đọc thư mục
    const files = fs.readdirSync(highlightDir);
    
    // Lọc ra chỉ file ảnh và bỏ qua các file hệ thống như .DS_Store
    const imageFiles = files.filter(file => {
      // Bỏ qua files không phải ảnh và file hệ thống
      const extension = path.extname(file).toLowerCase();
      return ['.jpg', '.jpeg', '.png', '.gif'].includes(extension) && 
             !file.startsWith('.');
    });
    
    // Sắp xếp danh sách ảnh
    imageFiles.sort();
    
    // Đọc nội dung file JavaScript hiện tại
    let jsContent = fs.readFileSync(targetFile, 'utf8');
    
    // Tạo string cho array ảnh
    const imageArrayString = imageFiles
      .map(file => `'${file}'`)
      .join(', ');
    
    // Định dạng chuỗi array với ngắt dòng và đúng định dạng
    const formattedImageArray = 
      imageArrayString.replace(/(,.{70,}?)(?=,)/g, '$1\n    ');
    
    // Thay thế array ảnh trong file
    const newJsContent = jsContent.replace(
      /const images = \[([\s\S]*?)\];/,
      `const images = [\n    ${formattedImageArray}\n  ];`
    );
    
    // Ghi lại file JavaScript
    fs.writeFileSync(targetFile, newJsContent);
    
    console.log(`Đã cập nhật thành công danh sách ${imageFiles.length} ảnh trong ${targetFile}`);
    
    // Hiển thị hướng dẫn
    console.log('\nHướng dẫn:');
    console.log('1. Đã cập nhật danh sách ảnh trong highlight_gallery.js');
    console.log('2. Mở trang web để xem kết quả');
    console.log('3. Bố cục trang web sẽ hiển thị hình ảnh dạng masonry (kiểu Pinterest) với hiệu ứng hover và lightbox');
    
  } catch (error) {
    console.error(`Lỗi: ${error.message}`);
  }
}

// Chạy hàm
generateImageList(); 