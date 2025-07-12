// DOM Elements
const newsGrid = document.getElementById('newsGrid');
const searchInput = document.querySelector('.search-input');
const searchButtons = document.querySelectorAll('.search-btn');

// API URL
const API_URL = 'https://dummyjson.com/posts';

let allArticles = [];
let displayedCount = 0;
const ARTICLES_PER_PAGE = 3;
const loadMoreBtn = document.getElementById('loadMoreBtn');

// Load news articles when page loads
document.addEventListener('DOMContentLoaded', function() {
    loadNewsArticles();
    setupSearchFunctionality();
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', handleLoadMore);
    }
});

// Fetch and store all news articles
async function loadNewsArticles() {
    try {
        newsGrid.innerHTML = '<div class="loading">Loading news articles...</div>';
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        allArticles = data.posts;
        displayedCount = 0;
        displayNewsArticles();
    } catch (error) {
        console.error('Error fetching news articles:', error);
        newsGrid.innerHTML = '<div class="error">Failed to load news articles. Please try again later.</div>';
        if (loadMoreBtn) loadMoreBtn.style.display = 'none';
    }
}

// Display next set of news articles
function displayNewsArticles() {
    // Remove all children first
    newsGrid.innerHTML = '';
    const articlesToShow = allArticles.slice(0, displayedCount + ARTICLES_PER_PAGE);
    articlesToShow.forEach((article, idx) => {
        const tags = extractTags(article.body);
        const card = document.createElement('div');
        card.className = 'news-card';
        card.innerHTML = `
            <h3>${article.title}</h3>
            <p>${truncateText(article.body, 150)}</p>
            <div class="news-meta">
                <div class="news-tags">
                    ${tags.map(tag => `<span class="news-tag">${tag}</span>`).join('')}
                </div>
                <span>ID: ${article.id}</span>
            </div>
            <button class="delete-btn" style="margin-top:10px;background:#d93025;color:#fff;border:none;padding:6px 12px;border-radius:4px;cursor:pointer;">Hide</button>
        `;
        // Add delete functionality
        card.querySelector('.delete-btn').addEventListener('click', function() {
            removeArticle(article.id);
        });
        newsGrid.appendChild(card);
    });
    displayedCount = articlesToShow.length;
    // Show or hide Load More button
    if (loadMoreBtn) {
        if (displayedCount >= allArticles.length) {
            loadMoreBtn.style.display = 'none';
        } else {
            loadMoreBtn.style.display = 'block';
        }
    }
    if (articlesToShow.length === 0) {
        newsGrid.innerHTML = '<div class="error">No news articles available.</div>';
    }
}

// Handle Load More button click
function handleLoadMore() {
    displayNewsArticles();
}

// Remove article by id
function removeArticle(id) {
    allArticles = allArticles.filter(article => article.id !== id);
    displayedCount = Math.max(displayedCount - 1, 0);
    displayNewsArticles();
}

// Extract tags from article content
function extractTags(content) {
    const commonTags = ['technology', 'science', 'health', 'business', 'politics', 'entertainment', 'sports', 'education'];
    const contentLower = content.toLowerCase();
    const foundTags = [];
    
    commonTags.forEach(tag => {
        if (contentLower.includes(tag)) {
            foundTags.push(tag);
        }
    });
    
    // If no tags found, add a generic one
    if (foundTags.length === 0) {
        foundTags.push('general');
    }
    
    // Return max 3 tags
    return foundTags.slice(0, 3);
}

// Truncate text to specified length
function truncateText(text, maxLength) {
    if (text.length <= maxLength) {
        return text;
    }
    return text.substring(0, maxLength) + '...';
}

// Setup search functionality
function setupSearchFunctionality() {
    // Search input functionality
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleSearch();
        }
    });
    
    // Search buttons functionality
    searchButtons.forEach(button => {
        button.addEventListener('click', function() {
            handleSearch();
        });
    });
    
    // Microphone icon functionality
    const micIcon = document.querySelector('.mic-icon');
    micIcon.addEventListener('click', function() {
        alert('Voice search is not implemented in this demo.');
    });
}

// Handle search functionality
function handleSearch() {
    const searchTerm = searchInput.value.trim();
    
    if (searchTerm === '') {
        alert('Please enter a search term.');
        return;
    }
    
    // In a real implementation, this would redirect to Google search
    // For this demo, we'll just show an alert
    alert(`Searching for: "${searchTerm}"\n\n.`);
}

// Add some interactive effects
document.addEventListener('DOMContentLoaded', function() {
    // Add hover effects to news cards
    document.addEventListener('mouseover', function(e) {
        if (e.target.closest('.news-card')) {
            e.target.closest('.news-card').style.transform = 'translateY(-2px)';
        }
    });
    
    document.addEventListener('mouseout', function(e) {
        if (e.target.closest('.news-card')) {
            e.target.closest('.news-card').style.transform = 'translateY(0)';
        }
    });
    
    // Add click effects to search buttons
    searchButtons.forEach(button => {
        button.addEventListener('mousedown', function() {
            this.style.transform = 'scale(0.98)';
        });
        
        button.addEventListener('mouseup', function() {
            this.style.transform = 'scale(1)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
});

// Add smooth scrolling for better UX
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add some Google-like animations
function addGoogleAnimations() {
    // Logo animation on page load
    const logo = document.querySelector('.logo-text');
    if (logo) {
        logo.style.opacity = '0';
        logo.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            logo.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            logo.style.opacity = '1';
            logo.style.transform = 'translateY(0)';
        }, 100);
    }
    
    // Search box animation
    const searchBox = document.querySelector('.search-box');
    if (searchBox) {
        searchBox.style.opacity = '0';
        searchBox.style.transform = 'scale(0.9)';
        
        setTimeout(() => {
            searchBox.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            searchBox.style.opacity = '1';
            searchBox.style.transform = 'scale(1)';
        }, 300);
    }
}

// Initialize animations when page loads
window.addEventListener('load', addGoogleAnimations); 