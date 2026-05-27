const articles = [
    {
        slug: "ai-understand-project-not-prompt",
        title: "Can an AI Board Remember the Project, Not Just the Prompt?",
        date: "2026-05-27",
        status: "Published",
        category: "Workflow Guides",
        tags: ["AI Workflow", "Architecture Practice", "Project Memory"],
        imageApproved: true,
        image: "assets/ai-board-project-memory/high-rise-options-memory-dashboard.png",
        imageLayout: "landscape",
        excerpt: "AI image tools are getting better, but architecture studios need more than one good output. They need a board that remembers the brief, the reference, the option, and the next design decision.",
        quickAnswer: "The next useful architecture AI workflow is not just a better prompt box. It is a project-aware board that remembers the original reference, first AI output, brief summary, design constraints, visual direction, and next decision question.",
        body: [
            { type: "h2", text: "The Prompt Is Not The Project" },
            { type: "p", text: "A prompt is a temporary instruction. A project is different. A project has a brief, a client, a site, a visual direction, constraints, internal comments, rejected options, and a next step." },
            { type: "p", text: "Most AI image workflows still treat these as separate pieces. You upload an image, write a prompt, receive an output, download it, then start again. The image may be good, but the surrounding design logic often disappears." },
            { type: "h2", text: "Why This Matters More Than Prompt Tricks" },
            { type: "p", text: "Prompt tricks can improve a single result. Project memory improves the workflow around the result." },
            { type: "p", text: "For architecture work, that difference is important. A studio does not only need a nice image. It needs a way to review the image, compare it with the brief, decide what is working, and continue the project without restarting from zero." },
            { type: "image", src: "assets/ai-board-project-memory/project-memory-board-monitor.png", alt: "Architecture project-memory board on a studio monitor", layout: "landscape" },
            { type: "h2", text: "What A Project-Aware AI Board Should Hold" },
            { type: "h3", text: "1. Reference image" },
            { type: "p", text: "The reference shows where the work started. It may be a sketch, site photo, clay render, precedent, or previous option. Without the reference, the AI output floats without context." },
            { type: "h3", text: "2. First output" },
            { type: "p", text: "The output should sit near the reference so the difference is visible. This makes it easier to ask whether the AI moved the project in the right direction." },
            { type: "h3", text: "3. Brief and constraint notes" },
            { type: "list", items: ["What the project is trying to become", "What should not change", "What mood or material direction is being tested", "What the studio needs to decide next"] },
            { type: "h3", text: "4. Decision question" },
            { type: "p", text: "Every board should end with a decision question. This turns AI output into design progress. The image becomes part of a decision, not just another file." },
            { type: "h2", text: "What The Taipei Cowork Board Demo Is Testing" },
            { type: "p", text: "The current Nomavek Lab board direction starts with a simple Taipei Cowork Board demo. It tests one practical workflow: reference image, first AI output, brief summary, key constraints, visual language, and decision question." },
            { type: "p", text: "For small studios, this matters because many AI workflows become messy quickly. You may have ten outputs, three prompt versions, two reference folders, and no clear reason why one option is better than another. A board gives the project a visible memory." },
            { type: "h2", text: "Better AI Workflows May Look More Like Boards" },
            { type: "p", text: "The interesting shift in architecture AI is not only better image generation. The larger shift is that AI tools are starting to become more project-aware." },
            { type: "p", text: "Instead of only generating one image from one prompt, the workflow can begin to understand files, references, previous outputs, and design intent. For architects, this is the useful direction." },
            { type: "h2", text: "FAQ" },
            { type: "h3", text: "Is project memory the same as saving chat history?" },
            { type: "p", text: "No. Chat history records the conversation. Project memory should organize the design material: brief, references, options, constraints, and decisions." },
            { type: "h3", text: "Do small studios really need this?" },
            { type: "p", text: "Yes. Small studios usually have less time to reorganize scattered AI outputs, so a simple board can reduce confusion quickly." },
            { type: "h3", text: "Does this replace the architect's judgment?" },
            { type: "p", text: "No. It makes judgment easier to apply because the reference, output, and decision question stay visible together." },
            { type: "h2", text: "Nomavek Takeaway" },
            { type: "p", text: "Nomavek Lab is moving toward a board-first AI workflow because small studios need a clearer way to turn AI output into design decisions. The goal is not to make more random options. The goal is to make each option easier to review, compare, and continue." }
        ]
    },
    {
        slug: "ai-images-client-presentation",
        title: "Can Architects Use AI Images in Client Presentations?",
        date: "2026-05-16",
        status: "Published",
        category: "Client Presentation",
        tags: ["AI Images", "Studio Workflow", "Concept Boards"],
        imageApproved: true,
        excerpt: "Yes, but the image should be framed as a concept option, not as a finished design promise. Here is a simple presentation workflow for small studios.",
        image: "assets/ai-client-presentation/board-wall.png",
        imageLayout: "landscape",
        quickAnswer: "Architects can use AI images in client presentations when the role of the image is clear: concept direction, mood, material intent, or comparison. The safer workflow is to label AI images as concept options, keep a source trail, and turn the chosen direction into a decision board before moving into real drawings.",
        body: [
            { type: "h2", text: "Use AI Images As Direction, Not Proof" },
            { type: "p", text: "The common mistake is treating an AI image like a resolved design. A client may read the facade, window rhythm, material joint, shadow, or planting as a promise. That creates confusion later when the actual design needs to change." },
            { type: "p", text: "A better way is to present each AI image as a direction. The image helps the client choose atmosphere, massing mood, material language, or level of ambition. It should not pretend to settle structure, code, cost, or construction detail." },
            { type: "image", src: "assets/ai-client-presentation/presentation-board.png", alt: "Architecture presentation wall with AI-assisted board, model, diagrams, and material samples", layout: "landscape" },
            { type: "h2", text: "A Simple Client Caption" },
            { type: "p", text: "Use a short label under the image. Do not over-explain the technology. The label only needs to make the status of the image clear." },
            { type: "code", text: "Concept option, AI-assisted.\nThis image explores mood, material direction, and light.\nIt is not a construction detail.\nAfter a direction is selected, we will develop it into drawings, specifications, and coordinated design work." },
            { type: "h2", text: "Keep A Source Trail" },
            { type: "p", text: "For each image option, keep a small record. It does not need to be formal, but it should be enough for the studio to understand where the option came from and why it was shown." },
            { type: "list", items: ["Input image or sketch used", "Reference images used", "Prompt or short instruction", "Date and version label", "One sentence explaining the design intention"] },
            { type: "h2", text: "Show Fewer Options" },
            { type: "p", text: "Twelve beautiful images can make a client less confident. Three clear options usually work better: one safe direction, one stronger design move, and one more experimental option. The point is not volume. The point is decision quality." },
            { type: "image", src: "assets/ai-client-presentation/option-check.png", alt: "Three architecture options compared with decision markers", layout: "landscape" },
            { type: "h2", text: "Turn The Chosen Image Into A Board" },
            { type: "p", text: "The real value starts after the client reacts. The selected image should become a board with a brief summary, design direction, rationale, risks, and next steps. That board is what keeps the project moving instead of drifting between image variations." },
            { type: "h2", text: "Nomavek Takeaway" },
            { type: "p", text: "Nomavek Lab is building this workflow around boards: one project input, a small set of AI-assisted directions, and a clear record of what the studio should develop next. The image is useful, but the board is the working deliverable." }
        ]
    },
    {
        slug: "ai-contracts-beat-prompts",
        title: "Why Architects Should Treat AI Like a Contract, Not a Prompt",
        date: "2026-05-14",
        status: "Draft for review",
        category: "Workflow Guides",
        tags: ["AI Workflow", "Architecture Practice"],
        imageApproved: true,
        excerpt: "Prompts are fragile. Contracts are durable. Here is a practical way to brief AI so your studio gets consistent outputs across a project.",
        image: "https://www.nomavek.com/landing/nomavek-east-asia-detail.png",
        imageLayout: "portrait",
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
        tags: ["Agentic AI", "Automation"],
        imageApproved: true,
        excerpt: "A practical guide for design firms on agentic systems, multi-step workflows, and where human judgment still matters.",
        image: "https://www.nomavek.com/landing/nomavek-east-asia-render.png",
        imageLayout: "portrait",
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
        tags: ["Rendering", "Tool Comparison"],
        imageApproved: false,
        excerpt: "A comparison of rendering tools for architects, framed around speed, cost, visual control, and workflow fit.",
        image: "https://www.nomavek.com/landing/nomavek-east-asia-houses.png",
        imageLayout: "landscape",
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
        tags: ["Competition", "Mobile Workflow"],
        imageApproved: true,
        excerpt: "A fast framework for turning one idea into a legible competition board using mobile AI tools.",
        image: "https://www.nomavek.com/landing/nomavek-east-asia-sketch.png",
        imageLayout: "landscape",
        quickAnswer: "A 20-minute competition entry can work when it focuses on one clear concept, one strong image, and a short explanation.",
        body: [
            { type: "h2", text: "What Matters" },
            { type: "p", text: "Jurors need clarity. A rushed board should not try to look complete; it should make one design move obvious." },
            { type: "h2", text: "Nomavek Takeaway" },
            { type: "p", text: "The board is a thinking tool. It should make the next design decision easier." }
        ]
    }
];

const relatedPosts = [
    {
        meta: "Instagram seed / May 5, 2026",
        title: "For freelancer architects and small studios",
        text: "The first bridge from the Nomavek Instagram post: start with one project image, one design question, and one board instead of chasing another prompt trick.",
        href: "https://www.instagram.com/p/DX9ooGUFIMG/",
        linkText: "View seed post",
        image: "https://www.nomavek.com/landing/nomavek-east-asia-sketch.png",
        alt: "Sketch image candidate for small studio AI workflow note"
    },
    {
        meta: "Related post / Draft",
        title: "What small studios should ask before adopting AI tools",
        text: "Does the tool help you decide, or only help you generate? That question should shape the blog, Instagram, and the demo board direction.",
        href: "#article/ai-contracts-beat-prompts",
        linkText: "Read the draft direction",
        image: "https://www.nomavek.com/landing/nomavek-east-asia-detail.png",
        alt: "Facade detail image candidate for AI adoption related post"
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
const visibleArticles = articles.filter((article) => article.imageApproved !== false);

function renderHome() {
    const featured = visibleArticles[0];
    app.innerHTML = `
        <div class="page-shell">
            <section class="hero" id="home">
                <div class="hero-copy">
                    <h1>Nomavek Blog</h1>
                    <p class="hero-summary">Practical notes on AI tools, architectural design work, visualization, client presentation, and small studio workflows.</p>
                    <div class="hero-actions">
                        <a class="button" href="#latest-blog">View latest blog</a>
                        <a class="button secondary" href="https://www.nomavek.com/#cowork-board">View demo board</a>
                    </div>
                </div>
            </section>

            <section class="section latest-section" id="latest-blog" aria-labelledby="latest-title">
                <div class="section-title">
                    <h2 id="latest-title">Latest blog</h2>
                    <p>Useful AI and architecture notes first, with a practical link back to project workflow when relevant.</p>
                </div>
                ${renderFeatured(featured)}
                <div class="article-grid">
                    ${visibleArticles.slice(1).map(renderCard).join("")}
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

            <section class="section" id="related-posts" aria-labelledby="related-title">
                <div class="section-title">
                    <h2 id="related-title">Related posts</h2>
                    <p>Short posts connected to Instagram, demos, and deeper blog articles.</p>
                </div>
                <div class="field-layout">
                    ${relatedPosts.map(renderRelatedPost).join("")}
                </div>
            </section>

            <section class="cta-panel" aria-label="Nomavek call to action">
                <div>
                    <h2>Have a sketch, render, or design question?</h2>
                    <p>Turn it into visual options, rationale, and a client-ready board. The blog explains the shift; Nomavek turns the shift into a working decision process.</p>
                    <div class="cta-actions">
                        <a class="button" href="https://www.nomavek.com/#cowork-board">View demo board</a>
                        <a class="button secondary" href="https://www.nomavek.com/">Visit Nomavek Lab</a>
                    </div>
                </div>
                <div class="cta-note">Use the demo board to see how a rough input can become a clearer design decision.</div>
            </section>

            <footer class="site-footer">
                Nomavek Blog. AI architecture notes for small studios and design teams.
            </footer>
        </div>
    `;
}

function renderFeatured(article) {
    return `
        <article class="featured-card ${article.image ? "" : "text-only"}">
            ${article.image ? renderImage(article.image, `Architectural image for ${article.title}`, "featured-media") : ""}
            <div class="featured-copy">
                ${renderMeta(article)}
                <h3>${article.title}</h3>
                <p>${article.excerpt}</p>
                <a class="text-link" href="#article/${article.slug}">Open blog post</a>
            </div>
        </article>
    `;
}

function renderCard(article) {
    return `
        <article class="article-card ${article.image ? "" : "text-only"}">
            ${article.image ? renderImage(article.image, `Image for ${article.title}`, "card-image-wrap") : ""}
            ${renderMeta(article)}
            <h3>${article.title}</h3>
            <p>${article.excerpt}</p>
            <a class="text-link" href="#article/${article.slug}">Read blog</a>
        </article>
    `;
}

function renderArticle(slug) {
    const article = visibleArticles.find((item) => item.slug === slug) || visibleArticles[0];
    app.innerHTML = `
        <article class="article-view">
            <a class="text-link back-link" href="#home">Back to blog</a>
            ${renderMeta(article)}
            <h1>${article.title}</h1>
            <section class="article-intro ${article.imageLayout === "portrait" ? "portrait" : "landscape"}">
                <section class="article-quick">
                    <strong>Quick Answer</strong>
                    <p>${article.quickAnswer}</p>
                </section>
                ${article.image ? renderImage(article.image, `Architectural image for ${article.title}`, "visual-panel") : ""}
            </section>
            <section class="article-body">
                ${article.body.map(renderBlock).join("")}
            </section>
            <section class="cta-panel">
                <div>
                    <h2>Turn this into a project board</h2>
                    <p>Nomavek connects the article insight back to a practical decision workflow: one image, one brief, visual options, and a board.</p>
                    <div class="cta-actions">
                        <a class="button" href="https://www.nomavek.com/#cowork-board">View demo board</a>
                        <a class="button secondary" href="#home">Read more blog</a>
                    </div>
                </div>
                <div class="cta-note">Use the demo board to see how a rough input can become a clearer design decision.</div>
            </section>
        </article>
    `;
}

function renderRelatedPost(note) {
    return `
        <article class="field-note">
            ${renderImage(note.image, note.alt, "field-image-wrap")}
            <div class="meta">${note.meta}</div>
            <h3>${note.title}</h3>
            <p>${note.text}</p>
            <a class="text-link" href="${note.href}">${note.linkText}</a>
        </article>
    `;
}

function renderMeta(article) {
    return `
        <div class="blog-meta">
            <time class="meta-date" datetime="${article.date}">${formatDate(article.date)}</time>
            <div class="meta-tags">
                <span>${article.category}</span>
                ${article.tags.slice(0, 3).map((tag) => `<span>${tag}</span>`).join("")}
            </div>
        </div>
    `;
}

function renderImage(src, alt, className) {
    return `
        <figure class="image-frame ${className}">
            <img src="${src}" alt="${alt}">
        </figure>
    `;
}

function formatDate(dateString) {
    return new Intl.DateTimeFormat("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric"
    }).format(new Date(`${dateString}T00:00:00`));
}

function renderBlock(block) {
    if (block.type === "h2") return `<h2>${block.text}</h2>`;
    if (block.type === "h3") return `<h3>${block.text}</h3>`;
    if (block.type === "p") return `<p>${block.text}</p>`;
    if (block.type === "list") return `<ul>${block.items.map((item) => `<li>${item}</li>`).join("")}</ul>`;
    if (block.type === "code") return `<pre><code>${escapeHtml(block.text)}</code></pre>`;
    if (block.type === "image") return renderImage(block.src, block.alt, `body-image ${block.layout || ""}`);
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
