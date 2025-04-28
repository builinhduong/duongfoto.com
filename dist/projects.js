/**
 * Project Gallery Loader
 * Loads and displays projects from JSON data
 */

// Fetch projects data from JSON file
async function fetchProjects(category) {
  try {
    console.log(`Fetching projects for category: ${category}`);
    const response = await fetch(`data/${category}.json`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(`Projects fetched successfully:`, data);
    return data;
  } catch (error) {
    console.error('Could not fetch projects:', error);
    return [];
  }
}

// Create project card HTML
function createProjectCard(project, category) {
  return `
    <div class="project-card bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 opacity-0 animate-fade-in" data-project-id="${project.id}">
      <div class="overflow-hidden h-60">
        <img 
          src="${project.thumbnail}" 
          alt="${project.title}" 
          class="w-full h-full object-contain transition duration-500 transform hover:scale-110"
        >
      </div>
      <div class="p-4">
        <h3 class="text-xl font-bold mb-1">${project.title}</h3>
        <div class="flex items-center text-gray-500 text-sm mb-2">
          <span class="mr-3">${project.date}</span>
          <span>${project.location}</span>
        </div>
        <p class="text-gray-700 mb-4">${project.description}</p>
        <a href="project-detail.html?id=${project.id}&category=${category}" class="text-black font-medium hover:underline">
          Xem chi tiết
        </a>
      </div>
    </div>
  `;
}

// Initialize the project gallery
async function initProjects(category) {
  console.log(`Initializing projects for category: ${category}`);
  const projectsContainer = document.getElementById('projects-container');
  
  if (!projectsContainer) {
    console.error('Projects container not found');
    return;
  }
  
  const projects = await fetchProjects(category);
  
  if (projects.length === 0) {
    console.log('No projects found, displaying empty message');
    projectsContainer.innerHTML = '<p class="text-center py-10">Không có dự án nào được tìm thấy.</p>';
    return;
  }
  
  // Create project cards
  let projectsHTML = '';
  
  projects.forEach(project => {
    projectsHTML += createProjectCard(project, category);
  });
  
  projectsContainer.innerHTML = projectsHTML;
  
  // Apply fade-in animation to project cards
  const fadeElements = document.querySelectorAll('.animate-fade-in');
  function fadeInElements() {
    fadeElements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.remove('opacity-0');
      }, 100 * index);
    });
  }
  
  // Start fade-in animation
  fadeInElements();
  console.log('Projects initialized successfully');
}