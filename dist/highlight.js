document.addEventListener('DOMContentLoaded', function() {
    initHighlightGallery();
});

async function initHighlightGallery() {
    // Define the images - based on the directory listing
    const highlightImages = [
        'img_1.jpg', 'img_4.jpg', 'img_11.jpg', 'img_14.jpg', 
        'img_15.jpg', 'img_16.jpg', 'img_17.jpg', 'img_18.jpg',
        'img_19.jpg', 'img_20.jpg', 'img_21.jpg', 'img_22.jpg',
        'img_23.jpg', 'img_24.jpg', 'img_28.jpg', 'img_29.jpg',
        'img_30.jpg', 'img_31.jpg', 'img_35.jpg', 'img_36.jpg',
        'img_37.jpg', 'img_38.jpg', 'img_39.jpg', 'img_40.jpg',
        'img_41.jpg'
    ];
    
    // Get the highlight container
    const highlightContainer = document.getElementById('highlight-container');
    if (!highlightContainer) return;
    
    // Clear existing content
    highlightContainer.innerHTML = '';
    
    // Create left and right columns
    const leftColumn = document.createElement('div');
    leftColumn.className = 'flex w-full md:w-1/2 flex-wrap';
    
    const rightColumn = document.createElement('div');
    rightColumn.className = 'flex w-full md:w-1/2 flex-wrap';
    
    // Distribute images between columns
    highlightImages.forEach((image, index) => {
        const column = index % 2 === 0 ? leftColumn : rightColumn;
        const imageHtml = createImageElement(image);
        column.innerHTML += imageHtml;
    });
    
    // Add columns to container
    highlightContainer.appendChild(leftColumn);
    highlightContainer.appendChild(rightColumn);
    
    // Initialize image fade-in
    initImageFadeIn();
}

function createImageElement(imageName) {
    const imagePath = `dist/assets/highlight/${imageName}`;
    
    return `
        <div class="w-full md:w-1/2 p-1">
            <div class="overflow-hidden h-full w-full">
                <a href="${imagePath}" data-fancybox="gallery">
                    <img alt="Highlight photo" 
                        class="block h-full w-full object-cover object-center opacity-0 animate-fade-in transition duration-500 transform scale-100 hover:scale-110"
                        src="${imagePath}" />
                </a>
            </div>
        </div>
    `;
}

function initImageFadeIn() {
    // Select all images with the animate-fade-in class
    const images = document.querySelectorAll('.animate-fade-in');
    
    // Create an intersection observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the opacity-100 class to fade in the image
                entry.target.classList.remove('opacity-0');
                entry.target.classList.add('opacity-100');
                // Stop observing the image
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    // Observe each image
    images.forEach(image => {
        observer.observe(image);
    });
} 