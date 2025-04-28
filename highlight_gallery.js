// Script để tạo gallery từ thư mục dist/assets/highlight
document.addEventListener('DOMContentLoaded', function() {
  const galleryContainer = document.getElementById('highlight-gallery');
  
  const imageFiles = [
    'img_1.jpg', 'img_2.jpg', 'img_3.jpg', 'img_5.jpg', 'img_6.jpg', 
    'img_7.jpg', 'img_8.jpg', 'img_9.jpg', 'img_10.jpg', 'img_12.jpg',
    'img_13.jpg', 'img_22.jpg', 'img_23.jpg', 'img_24.jpg', 'img_25.jpg',
    'img_26.jpg', 'img_27.jpg', 'img_31.jpg', 'img_32.jpg', 'img_33.jpg',
    'img_34.jpg', 'img_38.jpg', 'img_39.jpg', 'img_40.jpg', 'img_41.jpg'
  ];
  
  // Xóa nội dung hiện tại của gallery container
  galleryContainer.innerHTML = '';
  
  // Tạo container cho gallery
  const galleryHtml = `
    <div class="gallery-grid">
      ${imageFiles.map((image, index) => {
        const imagePath = `./dist/assets/highlights/${image}`;
        // Áp dụng lớp đặc biệt cho một số ảnh
        let extraClass = '';
        if (index % 5 === 0) extraClass = 'gallery-item-wide';
        if (index % 7 === 3) extraClass = 'gallery-item-tall';
        
        return `
          <div class="gallery-item ${extraClass}">
            <a href="${imagePath}" data-fancybox="gallery">
              <img src="${imagePath}" alt="Highlight photo - ${image}" class="gallery-img">
            </a>
          </div>
        `;
      }).join('')}
    </div>
  `;
  
  // Thêm gallery vào container
  galleryContainer.innerHTML = galleryHtml;
  
  // Thêm CSS độc lập để đảm bảo hiển thị đúng
  const style = document.createElement('style');
  style.textContent = `
    /* Gallery grid layout */
    .gallery-grid {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      width: 100%;
    }
    
    .gallery-item {
      width: calc(33.333% - 6px);
      margin-bottom: 8px;
      border-radius: 4px;
      overflow: hidden;
      height: 280px;
    }
    
    .gallery-item-wide {
      width: calc(66.666% - 4px);
    }
    
    .gallery-item-tall {
      height: 420px;
    }
    
    .gallery-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
      display: block;
    }
    
    .gallery-img:hover {
      transform: scale(1.05);
    }
    
    @media (max-width: 1024px) {
      .gallery-item {
        width: calc(50% - 4px);
      }
      
      .gallery-item-wide {
        width: calc(100% - 0px);
      }
    }
    
    @media (max-width: 640px) {
      .gallery-item {
        width: 100%;
        height: 300px;
      }
      
      .gallery-item-wide {
        width: 100%;
      }
    }
  `;
  document.head.appendChild(style);
  
  // Khởi tạo Fancybox
  Fancybox.bind("[data-fancybox]", {
    Image: {
      zoom: true,
    }
  });
  
  // Tạo hiệu ứng fade-in cho hình ảnh 
  const galleryImages = document.querySelectorAll('.gallery-img');
  galleryImages.forEach((img, index) => {
    // Bắt đầu với opacity 0
    img.style.opacity = '0';
    
    // Khi hình ảnh tải xong
    img.onload = function() {
      setTimeout(() => {
        // Hiệu ứng fade in
        img.style.transition = 'opacity 0.5s ease';
        img.style.opacity = '1';
      }, index * 50); // Mỗi hình ảnh hiện sau hình trước 50ms
    };
    
    // Trong trường hợp hình ảnh đã được cache
    if (img.complete) {
      setTimeout(() => {
        img.style.transition = 'opacity 0.5s ease';
        img.style.opacity = '1';
      }, index * 50);
    }
  });
}); 