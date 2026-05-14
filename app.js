const articles = [
    {
        slug: "ai-contracts-beat-prompts",
        title: "Why Architects Should Treat AI Like a Contract, Not a Prompt",
        date: "2026-05-14",
        status: "Draft for review",
        category: "Workflow Guides",
        readTime: "6 min",
        tags: ["AI Workflow", "Architecture Practice", "AEO"],
        excerpt: "Prompts are fragile. Contracts are durable. Here is a practical way to brief AI so your studio gets consistent outputs across a project.",
        image: "https://www.nomavek.com/landing/nomavek-east-asia-detail.png",
        quickAnswer: "If AI results change wildly from day to day, the problem is usually not the tool. It is the brief. Treat the AI task like a small contract: inputs, outputs, constraints, and checkpoints.",
        body: [
            { type: "h2", text: "What Goes Wrong With Prompt-Only Work" },
            { type: "p", text: "Most architects start with loose requests like make this render more premium, make it more Japanese minimal, or try a warmer afternoon light. These can work once, but they drift over time because the reference set changes, the team changes, and nobody remembers which decisions were already locked." },
            { type: "h2", text: "A Simple Contract Structure" },
            { type: "p", text: "Think of this as a one-page agreement between you and the AI. It does not need legal language. It needs clear project boundaries." },
            { type: "h3", text: "1. Inputs" },
            { type: "list", items: ["Base images: massing, clay render, or site photo", "Context: location, climate, usage", "References: 3 to 8 images max", "View list: exterior hero, courtyard, lobby, or selected frames"] },
            { type: "h3", text: "2. Outputs" },
            { type: "list", items: ["3 variations with distinct directions", "1 safe option and 2 stretch options", "One-sentence intent caption per image"] },
            { type: "h3", text: "3. Constraints" },
            { type: "list", items: ["Keep massing unchanged", "Keep camera angle unchanged", "Keep program cues readable", "Avoid fake signage or random foreground people"] },
            { type: "h2", text: "The Two Locks Rule" },
            { type: "p", text: "Two locks prevent most wasted cycles: lock the camera, then lock the material direction. Once those are fixed, iteration becomes useful instead of chaotic." },
            { type: "code", text: "AI BRIEF CONTRACT\n\nGoal:\n- [One sentence: what this image must communicate]\n\nInputs:\n- Base image(s):\n- References, max 8:\n- View list:\n\nOutputs:\n- Provide 3 variations: Safe / Stretch A / Stretch B\n- Provide 1-sentence intent caption per variation\n\nConstraints:\n- Camera:\n- Massing:\n- Program cues:\n- Materials to avoid:\n\nCheckpoints:\n- A: Choose direction, 1 only\n- B: Lock materials and lighting\n- C: Detail refinement only" },
            { type: "h2", text: "Nomavek Takeaway" },
            { type: "p", text: "This is why Nomavek treats the board as the product. A good AI workflow is not only the generated image. It is the locked brief, visible decisions, and a client-ready explanation of why one direction is stronger than another." }
        ]
    },
    {
        slug: "agentic-ai-architecture-guide",
        title: "What Is Agentic AI in Architecture?",
        date: "2026-04-24",
        status: "Draft for review",
        category: "AI Practice",
        readTime: "8 min",
        tags: ["Agentic AI", "Automation", "AEO"],
        excerpt: "A practical guide for design firms on agentic systems, multi-step workflows, and where human judgment still matters.",
        image: "https://www.nomavek.com/landing/nomavek-east-asia-render.png",
        quickAnswer: "Agentic AI goes beyond single prompts. It can plan multi-step work, use tools, check intermediate outputs, and prepare a more complete design workflow for review.",
        body: [
            { type: "h2", text: "What Makes It Different" },
            { type: "p", text: "Traditional AI tools respond to one prompt. Agentic systems coordinate several actions: reading inputs, planning steps, using tools, checking outputs, and packaging results." },
            { type: "h2", text: "Where It Helps Architects" },
            { type: "list", items: ["Concept render pipelines", "Site analysis reports", "Visualization coordination", "Presentation board preparation"] },
            { type: "h2", text: "Nomavek Takeaway" },
            { type: "p", text: "The useful starting point is not an autonomous office. It is one narrow pipeline from image and brief to design options and a board that someone can review." }
        ]
    },
    {
        slug: "ai-rendering-tools-2026-comparison",
        title: "AI Rendering Tools for Architects in 2026",
        date: "2026-04-23",
        status: "Published archive",
        category: "AI Design Tools",
        readTime: "7 min",
        tags: ["Rendering", "Tool Comparison"],
        excerpt: "A comparison of rendering tools for architects, framed around speed, cost, visual control, and workflow fit.",
        image: "https://www.nomavek.com/landing/nomavek-east-asia-houses.png",
        quickAnswer: "The best rendering tool depends on the decision you need to make. Early concept work needs speed; client presentation needs consistency; technical review needs control.",
        body: [
            { type: "h2", text: "The Real Comparison" },
            { type: "p", text: "Rendering tools are getting cheaper and faster. That means the studio value moves toward choosing directions, comparing options, and explaining why one image supports the brief." },
            { type: "h2", text: "Nomavek Takeaway" },
            { type: "p", text: "Cheap images are not the final product. A useful board turns options into decisions." }
        ]
    },
    {
        slug: "20min-competition-entry",
        title: "How to Make a Competition Entry in 20 Minutes",
        date: "2026-04-24",
        status: "Published archive",
        category: "Competitions",
        readTime: "6 min",
        tags: ["Competition", "Mobile Workflow"],
        excerpt: "A fast framework for turning one idea into a legible competition board using mobile AI tools.",
        image: "https://www.nomavek.com/landing/nomavek-east-asia-sketch.png",
        quickAnswer: "A 20-minute competition entry can work when it focuses on one clear concept, one strong image, and a short explanation.",
        body: [
            { type: "h2", text: "What Matters" },
            { type: "p", text: "Jurors need clarity. A rushed board should not try to look complete; it should make one design move obvious." },
            { type: "h2", text: "Nomavek Takeaway" },
            { type: "p", text: "The board is a thinking tool. It should make the next design decision easier." }
        ]
    }
];

const topics = [
    ["AI Design Tools", "Which tools matter, when they matter, and what they change in practice."],
    ["Rendering & Visualization", "From fast outputs to consistent image sets and client-facing boards."],
    ["Architecture Practice", "How small studios can use AI without losing design judgment."],
    ["Competitions", "Fast concept framing, board logic, and visual clarity under deadline."],
    ["Client Presentation", "Turning options into a readable direction for non-design audiences."],
    ["Studio Automation", "Lean automations for briefs, files, approvals, and repeatable production."]
];

const app = document.getElementById("app");

function renderHome() {
    const featured = articles[0];
    app.innerHTML = `
        <div class="page-shell">
            <section class="hero" id="home">
                <div class="hero-copy">
                    <h1>AI Architecture Briefing</h1>
                    <p class="hero-summary">A practical journal for architecture teams tracking how AI tools change design decisions, visualization, client presentation, and studio workflows.</p>
                    <div class="hero-actions">
                        <a class="button" href="#article/${featured.slug}">Read featured briefing</a>
                        <a class="button secondary" href="https://www.nomavek.com/#cowork-board">Start QuickFix Board</a>
                    </div>
                </div>
                <aside class="visual-panel" aria-label="Nomavek visual workflow preview">
                    <img src="https://www.nomavek.com/landing/nomavek-east-asia-render.png" alt="Nomavek architectural render preview">
                    <div class="signal-strip" aria-label="Workflow signals">
                        <span>Read the image</span>
                        <span>Compare options</span>
                        <span>Prepare the board</span>
                    </div>
                </aside>
            </section>

            <section class="section" aria-labelledby="featured-title">
                <div class="section-title">
                    <h2 id="featured-title">Featured briefing</h2>
                    <p>The blog should give a useful answer first, then connect that insight back to architectural workflow decisions.</p>
                </div>
                ${renderFeatured(featured)}
            </section>

            <section class="section" aria-labelledby="latest-title">
                <div class="section-title">
                    <h2 id="latest-title">Latest briefings</h2>
                    <p>Broader AI architecture signals, not only product updates or prompt libraries.</p>
                </div>
                <div class="article-grid">
                    ${articles.slice(1).map(renderCard).join("")}
                </div>
            </section>

            <section class="section" id="topics" aria-labelledby="topics-title">
                <div class="section-title">
                    <h2 id="topics-title">Topics</h2>
                    <p>Organized for answer engines and for architects who need practical signals.</p>
                </div>
                <div class="topic-grid">
                    ${topics.map(([title, text]) => `<div class="topic-card"><strong>${title}</strong><span>${text}</span></div>`).join("")}
                </div>
            </section>

            <section class="section" id="field-notes" aria-labelledby="field-title">
                <div class="section-title">
                    <h2 id="field-title">Field notes</h2>
                    <p>Shorter ideas that can become Instagram posts, carousels, or deeper articles.</p>
                </div>
                <div class="field-layout">
                    <article class="field-note">
                        <div class="meta">Instagram seed / May 5, 2026</div>
                        <h3>For freelancer architects and small studios</h3>
                        <p>The first bridge from the Nomavek Instagram post: start with one project image, one design question, and one board instead of chasing another prompt trick.</p>
                        <a class="text-link" href="https://www.instagram.com/p/DX9ooGUFIMG/">View seed post</a>
                    </article>
                    <article class="field-note">
                        <div class="meta">Next field note</div>
                        <h3>What small studios should ask before adopting AI tools</h3>
                        <p>Does the tool help you decide, or only help you generate? That question should shape the blog, Instagram, and QuickFix offer.</p>
                        <a class="text-link" href="#article/ai-contracts-beat-prompts">Read the draft direction</a>
                    </article>
                </div>
            </section>

            <section class="cta-panel" aria-label="Nomavek call to action">
                <div>
                    <h2>Have a sketch, render, or design question?</h2>
                    <p>Turn it into visual options, rationale, and a client-ready board. The journal explains the shift; Nomavek turns the shift into a working decision process.</p>
                    <div class="cta-actions">
                        <a class="button" href="https://www.nomavek.com/#cowork-board">Start QuickFix Board</a>
                        <a class="button secondary" href="https://www.nomavek.com/">Visit Nomavek Lab</a>
                    </div>
                </div>
                <div class="cta-note">Public posting, public deployment, and image/demo use remain approval-gated.</div>
            </section>

            <footer class="site-footer">
                Nomavek Journal. AI architecture briefings for small studios and design teams.
            </footer>
        </div>
    `;
}

function renderFeatured(article) {
    return `
        <article class="featured-card">
            <div class="featured-media">
                <img src="${article.image}" alt="Architectural visual for ${article.title}">
            </div>
            <div class="featured-copy">
                <div class="meta">${article.category} / ${article.date} / ${article.readTime}</div>
                <h3>${article.title}</h3>
                <p>${article.excerpt}</p>
                <a class="text-link" href="#article/${article.slug}">Open article view</a>
            </div>
        </article>
    `;
}

function renderCard(article) {
    return `
        <article class="article-card">
            <div class="meta">${article.category} / ${article.readTime}</div>
            <h3>${article.title}</h3>
            <p>${article.excerpt}</p>
            <a class="text-link" href="#article/${article.slug}">Read briefing</a>
        </article>
    `;
}

function renderArticle(slug) {
    const article = articles.find((item) => item.slug === slug) || articles[0];
    app.innerHTML = `
        <article class="article-view">
            <a class="text-link back-link" href="#home">Back to journal</a>
            <div class="meta">${article.category} / ${article.date} / ${article.readTime}</div>
            <h1>${article.title}</h1>
            <div class="article-actions">
                <span class="status-note">${article.status}</span>
                ${article.tags.map((tag) => `<span class="status-note">${tag}</span>`).join("")}
            </div>
            <section class="article-quick">
                <strong>Quick Answer</strong>
                <p>${article.quickAnswer}</p>
            </section>
            <div class="visual-panel">
                <img src="${article.image}" alt="Architectural visual for ${article.title}">
            </div>
            <section class="article-body">
                ${article.body.map(renderBlock).join("")}
            </section>
            <section class="cta-panel">
                <div>
                    <h2>Turn this into a project board</h2>
                    <p>Nomavek connects the article insight back to a practical decision workflow: one image, one brief, visual options, and a board.</p>
                    <div class="cta-actions">
                        <a class="button" href="https://www.nomavek.com/#cowork-board">Start QuickFix Board</a>
                        <a class="button secondary" href="#home">Read more briefings</a>
                    </div>
                </div>
                <div class="cta-note">This review page does not publish the draft article to production.</div>
            </section>
        </article>
    `;
}

function renderBlock(block) {
    if (block.type === "h2") return `<h2>${block.text}</h2>`;
    if (block.type === "h3") return `<h3>${block.text}</h3>`;
    if (block.type === "p") return `<p>${block.text}</p>`;
    if (block.type === "list") return `<ul>${block.items.map((item) => `<li>${item}</li>`).join("")}</ul>`;
    if (block.type === "code") return `<pre><code>${escapeHtml(block.text)}</code></pre>`;
    return "";
}

function escapeHtml(value) {
    return value
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;");
}

function route() {
    const hash = window.location.hash || "#home";
    if (hash.startsWith("#article/")) {
        renderArticle(hash.replace("#article/", ""));
    } else {
        renderHome();
    }
    requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: "auto" }));
}

window.addEventListener("hashchange", route);
route();
