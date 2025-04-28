// Script để tạo gallery từ thư mục dist/assets/highlight
document.addEventListener('DOMContentLoaded', function() {
  const galleryContainer = document.getElementById('highlight-gallery');
  
  // Danh sách hình ảnh (danh sách tĩnh này có thể được cập nhật thủ công khi thêm ảnh mới)
  const images = [
    'img_1.jpg', 'img_2.jpg', 'img_3.jpg', 'img_5.jpg', 'img_6.jpg', 
    'img_7.jpg', 'img_8.jpg', 'img_9.jpg', 'img_10.jpg', 'img_12.jpg',
    'img_13.jpg', 'img_22.jpg', 'img_23.jpg', 'img_24.jpg', 'img_25.jpg',
    'img_26.jpg', 'img_27.jpg', 'img_31.jpg', 'img_32.jpg', 'img_33.jpg',
    'img_34.jpg', 'img_38.jpg', 'img_39.jpg', 'img_40.jpg', 'img_41.jpg'
  ];
  
  // Xóa nội dung hiện tại của gallery container
  galleryContainer.innerHTML = '';
  
  // Tạo layout cho gallery với Masonry
  const galleryWrapper = document.createElement('div');
  galleryWrapper.className = 'grid-wrapper';
  
  // Thêm từng ảnh vào gallery
  images.forEach((image, index) => {
    const imagePath = `dist/assets/highlight/${image}`;
    
    // Tạo container cho mỗi ảnh
    const itemElement = document.createElement('div');
    itemElement.className = 'grid-item';
    
    // Tạo kích thước ngẫu nhiên cho một số ảnh để tạo layout động hơn
    // 20% ảnh sẽ có kích thước lớn gấp đôi
    if (index % 5 === 0) {
      itemElement.className += ' grid-item--width2';
    }
    // 15% ảnh sẽ có chiều cao gấp đôi
    if (index % 7 === 3) {
      itemElement.className += ' grid-item--height2';
    }
    
    // Tạo container overflow cho hiệu ứng hover
    const overflowContainer = document.createElement('div');
    overflowContainer.className = 'overflow-hidden h-full w-full';
    
    // Tạo link fancybox
    const link = document.createElement('a');
    link.href = imagePath;
    link.setAttribute('data-fancybox', 'gallery');
    
    // Tạo thẻ img
    const img = document.createElement('img');
    img.alt = `Highlight photo - ${image}`;
    img.className = 'w-full h-full object-cover opacity-0 animate-fade-in transition duration-500 transform scale-100 hover:scale-110';
    img.src = imagePath;
    
    // Xếp các element lại với nhau
    link.appendChild(img);
    overflowContainer.appendChild(link);
    itemElement.appendChild(overflowContainer);
    galleryWrapper.appendChild(itemElement);
  });
  
  // Thêm vào DOM
  galleryContainer.appendChild(galleryWrapper);
  
  // Thêm CSS cho Masonry layout
  const style = document.createElement('style');
  style.textContent = `
    .grid-wrapper {
      width: 100%;
    }
    .grid-item {
      width: calc(33.333% - 8px);
      margin-bottom: 8px;
      border-radius: 4px;
      overflow: hidden;
    }
    .grid-item--width2 {
      width: calc(66.666% - 8px);
    }
    .grid-item--height2 img {
      height: 450px !important;
    }
    @media (max-width: 1024px) {
      .grid-item {
        width: calc(50% - 8px);
      }
      .grid-item--width2 {
        width: calc(100% - 8px);
      }
    }
    @media (max-width: 640px) {
      .grid-item {
        width: 100%;
      }
      .grid-item--width2 {
        width: 100%;
      }
    }
  `;
  document.head.appendChild(style);

  // Khởi tạo Masonry sau khi tất cả ảnh đã được tải
  imagesLoaded(galleryWrapper, function() {
    new Masonry(galleryWrapper, {
      itemSelector: '.grid-item',
      columnWidth: '.grid-item',
      percentPosition: true,
      gutter: 8
    });
    
    // Khởi tạo lại Fancybox sau khi thêm ảnh
    Fancybox.bind("[data-fancybox]", {});
    
    // Kích hoạt animation fade-in cho các hình ảnh
    const fadeInElements = document.querySelectorAll('.animate-fade-in');
    fadeInElements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.remove('opacity-0');
      }, index * 50); // Tạo hiệu ứng fade in tuần tự
    });
  });
}); 