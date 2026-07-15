const articles = [
    {
        slug: "ai-architectural-assistant-2026",
        title: "Will AI Replace the Architectural Assistant in 2026?",
        date: "2026-06-04",
        status: "Published",
        category: "AI Practice",
        tags: ["AI Workflow", "Architecture Practice", "AI Assistant"],
        imageApproved: true,
        excerpt: "AI is moving from prompt boxes into CAD, BIM, Rhino, and space-planning workflows. The role most exposed in 2026 is the repetitive production assistant layer.",
        image: "docs/approvals/2026-06-04-ai-architectural-assistant-2026/ai-assistant-cad-space-planning.png",
        imageLayout: "landscape",
        quickAnswer: "AI will not replace the architect in 2026, but it can replace parts of the architectural assistant role: repetitive model queries, early option studies, space-planning tests, board preparation, and documentation searches.",
        body: [
            { type: "h2", text: "Why 2026 Feels Different" },
            { type: "p", text: "Architecture AI is moving out of the loose prompt box. The new direction is AI that can read project material, call tools, search model data, generate first tests, and prepare options for review." },
            { type: "h2", text: "The Assistant Work That AI Can Take First" },
            { type: "list", items: ["Model and drawing search", "Option setup", "Space-planning tests", "Board preparation", "Documentation support", "Rhino or Grasshopper automation"] },
            { type: "h2", text: "Tool Connection Is The Big Change" },
            { type: "p", text: "MCP lets AI applications connect to external tools through servers that expose actions, data, and reusable prompts. Codex can connect to MCP servers, and RhinoMCP-style experiments show how AI can inspect or act on model data instead of only writing text." },
            { type: "h2", text: "Space Planning Is Another Assistant Layer" },
            { type: "p", text: "AI space-planning tools can already generate early layout alternatives from project requirements. That does not remove human review. It changes the first pass: the assistant prepares options, and the architect checks fit, logic, compliance, and client judgment." },
            { type: "h2", text: "Nomavek Lab Takeaway" },
            { type: "p", text: "The target is not an AI pretending to be an architect. The target is a board workflow where AI acts like a fast architectural assistant: organize the brief, create options, keep project memory visible, and leave the decision to the architect." }
        ]
    },
    {
        slug: "project-memory-demo-entry",
        title: "Project Memory Is the Missing Layer in Architecture AI",
        date: "2026-06-02",
        status: "Published",
        category: "Workflow Guides",
        tags: ["AI Workflow", "Architecture Practice", "Project Memory"],
        imageApproved: true,
        excerpt: "AI image tools can create options quickly, but small studios need a workflow that remembers the reference, constraints, selected direction, and next design question.",
        image: "docs/approvals/2026-06-02-project-memory-demo-entry/project-memory-demo-board-ui.png",
        imageLayout: "landscape",
        quickAnswer: "Most AI image workflows stop after one output. Architecture work needs project memory: reference, output, constraints, decision, and next move kept together so the studio can continue from the last decision.",
        body: [
            { type: "h2", text: "The Image Is Not The Whole Project" },
            { type: "p", text: "A generated render can look convincing and still be difficult to use. The problem is not only image quality. The surrounding project logic often disappears: what reference started the direction, what constraint shaped the option, which image was selected, and what still needs to be tested." },
            { type: "h2", text: "What Project Memory Should Keep Visible" },
            { type: "list", items: ["Reference: the image, sketch, site photo, or direction that started the work", "Output: the AI-generated option or board that came from it", "Constraints: height, program, visual language, site condition, or client preference", "Decision: what the studio selected, rejected, or still needs to compare", "Next move: generate another option, make a diagram, refine the facade, or prepare a cleaner board"] },
            { type: "h2", text: "Why This Matters For AI Architecture Tools" },
            { type: "p", text: "Many AI tools are still built around a single prompt or a single image. That is useful for fast exploration, but architecture practice usually moves through a chain: reference, option, review, decision, next version, presentation." },
            { type: "h2", text: "Where Nomavek Is Going" },
            { type: "p", text: "Nomavek is being shaped around a project-memory workflow for small studios: upload a reference or brief, generate options, keep constraints and notes beside the output, mark a selected direction, and prepare the next board or design step." },
            { type: "h2", text: "Takeaway" },
            { type: "p", text: "Better images are useful. But for architecture work, the bigger shift is project memory: a workflow that remembers why an image exists, what it should become, and what decision comes next." }
        ]
    },
    {
        slug: "agentic-ai-architecture-guide",
        title: "What Is Agentic AI in Architecture?",
        date: "2026-04-24",
        status: "Draft for review",
        category: "AI Practice",
        tags: ["Agentic AI", "Automation", "AEO"],
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

const topics = [
    ["AI Design Tools", "Which tools matter, when they matter, and what they change in practice."],
    ["Rendering & Visualization", "From fast outputs to consistent image sets and client-facing boards."],
    ["Architecture Practice", "How small studios can use AI without losing design judgment."],
    ["Competitions", "Fast concept framing, board logic, and visual clarity under deadline."],
    ["Client Presentation", "Turning options into a readable direction for non-design audiences."],
    ["Studio Automation", "Lean automations for briefs, files, approvals, and repeatable production."]
];

const templateStorageKey = "nomavek-blog-article-template-v1";
const articleTemplateDefaults = {
    titleScale: "compact",
    headingScale: "compact",
    articleWidth: "standard",
    imageMode: "auto",
    ctaMode: "board",
    statusVisibility: "show"
};
const templateOptions = {
    titleScale: {
        compact: "Compact title",
        standard: "Standard title",
        editorial: "Editorial title"
    },
    headingScale: {
        compact: "Compact section titles",
        standard: "Standard section titles"
    },
    articleWidth: {
        narrow: "Narrow reading width",
        standard: "Standard reading width",
        wide: "Wide reading width"
    },
    imageMode: {
        auto: "Auto image placement",
        side: "Side image",
        full: "Full-width image"
    },
    ctaMode: {
        board: "View demo board",
        lab: "Visit Nomavek Lab"
    },
    statusVisibility: {
        show: "Show review status",
        hide: "Hide review status"
    }
};

const app = document.getElementById("app");
const visibleArticles = articles.filter((article) => article.imageApproved !== false);

function renderHome() {
    const featured = visibleArticles[0];
    app.innerHTML = `
        <div class="page-shell">
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

            <section class="cta-panel" aria-label="Nomavek call to action">
                <div>
                    <h2>Have a sketch, render, or design question?</h2>
                    <p>Turn it into visual options, rationale, and a client-ready board. The blog explains the shift; Nomavek turns the shift into a working decision process.</p>
                    <div class="cta-actions">
                        <a class="button" href="https://www.nomavek.com/#cowork-board">View demo board</a>
                        <a class="button secondary" href="https://www.nomavek.com/">Visit Nomavek Lab</a>
                    </div>
                </div>
                <div class="cta-note">Public posting, public deployment, and image/demo use remain approval-gated.</div>
            </section>

            <footer class="site-footer">
                Nomavek Blog. AI architecture notes for small studios and design teams.
            </footer>
        </div>
    `;
    applyArticleTemplate(getArticleTemplate());
}

function renderFeatured(article) {
    return `
        <article class="featured-card">
            ${renderImage(article.image, `Architectural image candidate for ${article.title}`, "featured-media")}
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
        <article class="article-card">
            ${renderImage(article.image, `Image candidate for ${article.title}`, "card-image-wrap")}
            ${renderMeta(article)}
            <h3>${article.title}</h3>
            <p>${article.excerpt}</p>
            <a class="text-link" href="#article/${article.slug}">Read blog</a>
        </article>
    `;
}

function renderArticle(slug) {
    const article = visibleArticles.find((item) => item.slug === slug) || visibleArticles[0];
    const template = getArticleTemplate();
    app.innerHTML = renderArticleMarkup(article, template);
    applyArticleTemplate(template);
}

function renderArticleMarkup(article, template, options = {}) {
    const cta = getTemplateCta(template);
    return `
        <article class="article-view">
            ${options.preview ? "" : `<a class="text-link back-link" href="#latest-blog">Back to blog</a>`}
            ${renderMeta(article)}
            <h1>${article.title}</h1>
            <div class="article-actions ${template.statusVisibility === "hide" ? "is-hidden" : ""}">
                <span class="status-note">${article.status}</span>
            </div>
            <section class="article-intro ${getIntroLayout(article, template)}">
                <section class="article-quick">
                    <strong>Quick Answer</strong>
                    <p>${article.quickAnswer}</p>
                </section>
                ${renderImage(article.image, `Architectural image candidate for ${article.title}`, "visual-panel")}
            </section>
            <section class="article-body">
                ${article.body.map(renderBlock).join("")}
            </section>
            <section class="cta-panel">
                <div>
                    <h2>${cta.heading}</h2>
                    <p>${cta.body}</p>
                    <div class="cta-actions">
                        <a class="button" href="${cta.primaryHref}">${cta.primaryLabel}</a>
                        <a class="button secondary" href="#latest-blog">Read more blog</a>
                    </div>
                </div>
                <div class="cta-note">${cta.note}</div>
            </section>
        </article>
    `;
}

function renderTemplateConsole() {
    const template = getArticleTemplate();
    const previewArticle = visibleArticles[0];
    app.innerHTML = `
        <section class="template-console">
            <div class="template-header">
                <div>
                    <a class="text-link back-link" href="#latest-blog">Back to blog</a>
                    <h1>Blog Template Console</h1>
                    <p>This review-only screen controls the shared single-post template. Change the template once and every article page uses the same layout rules in this browser preview.</p>
                </div>
                <div class="template-state">
                    <span>Review mode</span>
                    <strong>Not published</strong>
                </div>
            </div>

            <div class="template-layout">
                <form class="template-controls" aria-label="Article template controls">
                    ${renderTemplateSelect("titleScale", "Post title size", template)}
                    ${renderTemplateSelect("headingScale", "Section title size", template)}
                    ${renderTemplateSelect("articleWidth", "Reading width", template)}
                    ${renderTemplateSelect("imageMode", "Image placement", template)}
                    ${renderTemplateSelect("ctaMode", "Call to action", template)}
                    ${renderTemplateSelect("statusVisibility", "Review status", template)}
                    <button class="button secondary" type="button" data-reset-template>Reset template</button>
                </form>

                <section class="template-preview" aria-label="Article template preview">
                    <div class="template-preview-bar">
                        <span>Single-post preview</span>
                        <a class="text-link" href="#article/${previewArticle.slug}">Open as article</a>
                    </div>
                    ${renderArticleMarkup(previewArticle, template, { preview: true })}
                </section>
            </div>
        </section>
    `;
    applyArticleTemplate(template);
    bindTemplateConsole();
}

function renderTemplateSelect(key, label, template) {
    return `
        <label class="template-field">
            <span>${label}</span>
            <select data-template-key="${key}">
                ${Object.entries(templateOptions[key]).map(([value, text]) => `
                    <option value="${value}" ${template[key] === value ? "selected" : ""}>${text}</option>
                `).join("")}
            </select>
        </label>
    `;
}

function bindTemplateConsole() {
    document.querySelectorAll("[data-template-key]").forEach((control) => {
        control.addEventListener("change", () => {
            const template = getArticleTemplate();
            template[control.dataset.templateKey] = control.value;
            saveArticleTemplate(template);
            renderTemplateConsole();
        });
    });

    const reset = document.querySelector("[data-reset-template]");
    if (reset) {
        reset.addEventListener("click", () => {
            localStorage.removeItem(templateStorageKey);
            renderTemplateConsole();
        });
    }
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

function getArticleTemplate() {
    try {
        const saved = JSON.parse(localStorage.getItem(templateStorageKey) || "{}");
        return { ...articleTemplateDefaults, ...saved };
    } catch {
        return { ...articleTemplateDefaults };
    }
}

function saveArticleTemplate(template) {
    localStorage.setItem(templateStorageKey, JSON.stringify(template));
}

function applyArticleTemplate(template) {
    const root = document.documentElement;
    const titleSizes = {
        compact: "clamp(26px, 2.6vw, 36px)",
        standard: "clamp(30px, 3.2vw, 42px)",
        editorial: "clamp(34px, 4vw, 52px)"
    };
    const headingSizes = {
        compact: "clamp(18px, 1.8vw, 24px)",
        standard: "clamp(21px, 2.25vw, 32px)"
    };
    const widths = {
        narrow: "860px",
        standard: "980px",
        wide: "1120px"
    };

    root.style.setProperty("--article-title-size", titleSizes[template.titleScale]);
    root.style.setProperty("--article-h2-size", headingSizes[template.headingScale]);
    root.style.setProperty("--article-width", widths[template.articleWidth]);
}

function getIntroLayout(article, template) {
    if (template.imageMode === "side") return "portrait";
    if (template.imageMode === "full") return "landscape";
    return article.imageLayout === "portrait" ? "portrait" : "landscape";
}

function getTemplateCta(template) {
    if (template.ctaMode === "lab") {
        return {
            heading: "Connect this back to Nomavek Lab",
            body: "Nomavek turns article ideas into a practical service workflow for small architecture studios.",
            primaryLabel: "Visit Nomavek Lab",
            primaryHref: "https://www.nomavek.com/",
            note: "Public posting and public website changes still need approval before release."
        };
    }

    return {
        heading: "Turn this into a project board",
        body: "Nomavek connects the article insight back to a practical decision workflow: one image, one brief, visual options, and a board.",
        primaryLabel: "View demo board",
        primaryHref: "https://www.nomavek.com/#cowork-board",
        note: "This review page does not publish the draft article to production."
    };
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
    return "";
}

function escapeHtml(value) {
    return value
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;");
}

function route() {
    const hash = window.location.hash || "#latest-blog";
    if (hash.startsWith("#article/")) {
        renderArticle(hash.replace("#article/", ""));
    } else if (hash === "#template-console") {
        renderTemplateConsole();
    } else {
        renderHome();
    }
    requestAnimationFrame(() => {
        const target = document.querySelector(hash);
        if (target && hash.startsWith("#") && hash !== "#template-console") {
            target.scrollIntoView({ block: "start", behavior: "auto" });
            return;
        }
        window.scrollTo({ top: 0, behavior: "auto" });
    });
}

window.addEventListener("hashchange", route);
route();
