// Blog data - embedded for GitHub Pages preview
const BLOG_DATA = {
    "meta": {
        "title": "Studio Nomad Blog",
        "description": "AI architecture workflow guides, prompt libraries, and rendering techniques",
        "url": "https://studionomad.vercel.app",
        "repo": "https://github.com/hktreasure926/arch-prompt-db",
        "workflow": "Draft → Review → Approve → Publish"
    },
    "published": [
        {
            "slug": "20min-competition-entry",
            "title": "How to Make a Winning Architectural Competition Entry in 20 Minutes (Using Only Your Phone)",
            "date": "2026-04-24",
            "status": "published",
            "tags": ["competition", "mobile-workflow", "nano-banana"],
            "excerpt": "A battle-tested framework for creating competition-worthy architectural submissions in under 20 minutes using only a smartphone and AI image generators.",
            "file": "posts/20min-competition-entry.md",
            "ai-summary": "Step-by-step guide for architects to create competition entries quickly using mobile AI tools, covering concept generation, image creation, and presentation layout."
        },
        {
            "slug": "bionic-architecture-ai-workflow",
            "title": "How to Use AI for Bionic Architecture: From Nature to Built Form",
            "date": "2026-04-23",
            "status": "published",
            "tags": ["bionic-architecture", "concept-board", "parametric", "s11-s12"],
            "excerpt": "A complete workflow for transforming natural forms into architectural concepts using AI image generation. From succulent rosette to urban public building.",
            "file": "posts/bionic-architecture-ai-workflow.md",
            "ai-summary": "Step-by-step guide on using AI tools to generate bionic architecture concept boards, covering inspiration analysis, parametric evolution, and material detailing."
        },
        {
            "slug": "ai-rendering-tools-2026-comparison",
            "title": "AI Rendering Tools for Architects in 2026: Complete Comparison",
            "date": "2026-04-23",
            "status": "published",
            "tags": ["nano-banana", "d5-render", "midjourney-v7", "stable-diffusion", "rendering"],
            "excerpt": "Compare Nano Banana Pro, D5 Render, Midjourney v7, and Stable Diffusion for architectural visualization.",
            "file": "posts/ai-rendering-tools-2026-comparison.md",
            "ai-summary": "A detailed comparison of 4 AI rendering tools for architects, covering speed, cost, quality, and workflow integration."
        },
        {
            "slug": "15-urban-schemes",
            "title": "15 Urban Waterfront Site Transformation Prompts for Studio Nomad",
            "date": "2026-04-21",
            "status": "published",
            "tags": ["urban-design", "waterfront", "prompt-library", "s11-s12"],
            "excerpt": "Transform any city center waterfront site with these 15 ready-to-use Studio Nomad prompt templates.",
            "file": "posts/15-urban-schemes.md",
            "ai-summary": "15 prompt templates for urban waterfront site transformation using Studio Nomad's S11+S12 framework."
        },
        {
            "slug": "s11-s12-framework",
            "title": "S11 + S12 Prompt Framework: How We Structure Architectural AI Prompts",
            "date": "2026-04-15",
            "status": "published",
            "tags": ["s11-s12", "prompt-engineering", "framework", "nano-banana"],
            "excerpt": "The S11+S12 framework separates Subject from Style for consistent architectural AI outputs.",
            "file": "posts/s11-s12-framework.md",
            "ai-summary": "Explains the S11+S12 prompt framework used in Studio Nomad for architectural AI generation."
        }
    ],
    "drafts": []
};

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    loadArticles();
});

function loadArticles() {
    const articles = [...BLOG_DATA.published, ...BLOG_DATA.drafts];
    
    // Extract unique tags
    const allTags = new Set();
    articles.forEach(article => {
        article.tags.forEach(tag => allTags.add(tag));
    });
    
    // Add filter buttons
    const filtersContainer = document.getElementById('filters');
    allTags.forEach(tag => {
        const btn = document.createElement('button');
        btn.className = 'filter-tag';
        btn.textContent = tag;
        btn.dataset.filter = tag;
        btn.onclick = () => filterArticles(tag);
        filtersContainer.appendChild(btn);
    });
    
    // Render articles
    renderArticles(articles);
}

function renderArticles(articles) {
    const grid = document.getElementById('article-grid');
    
    if (articles.length === 0) {
        grid.innerHTML = '<div class="loading">No articles yet.</div>';
        return;
    }
    
    grid.innerHTML = articles.map(article => `
        <article class="article-card" data-tags="${article.tags.join(' ')}">
            <div class="article-image">✦</div>
            <div class="article-content">
                <div class="article-meta">
                    <span class="article-date">${formatDate(article.date)}</span>
                    ${article.tags.slice(0, 2).map(tag => `<span class="article-tag">${tag}</span>`).join('')}
                </div>
                <h2 class="article-title">${article.title}</h2>
                <p class="article-excerpt">${article.excerpt}</p>
                <div class="article-footer">
                    <span class="article-status ${article.status}">${article.status}</span>
                    <a href="https://github.com/hktreasure926/arch-prompt-db/blob/main/blog/${article.file}" 
                       class="article-link" target="_blank">
                        Read →
                    </a>
                </div>
            </div>
        </article>
    `).join('');
}

function filterArticles(tag) {
    const buttons = document.querySelectorAll('.filter-tag');
    buttons.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.filter === tag);
    });
    
    const cards = document.querySelectorAll('.article-card');
    cards.forEach(card => {
        if (tag === 'all') {
            card.style.display = 'block';
        } else {
            const cardTags = card.dataset.tags;
            card.style.display = cardTags.includes(tag) ? 'block' : 'none';
        }
    });
}

function formatDate(dateStr) {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
}