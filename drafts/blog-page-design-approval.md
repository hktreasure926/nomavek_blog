# Nomavek Blog Page Design - Approval Draft

Status: approval needed before implementation or public publishing

## Current Findings

- The repo is a lightweight static blog with `docs/index.html`, `docs/style.css`, `docs/app.js`, markdown posts, `index.json`, and `index.csv`.
- The live `blog.nomavek.com` root is currently returning the CSV index instead of the designed HTML blog page.
- The current blog is still branded as `Studio Nomad Blog`; public-facing blog wording should move to `Nomavek`.
- Existing content is useful but too narrow around prompt libraries and workflow guides. The new direction should cover broader AI news in architecture, design practice, visualization, tools, and studio operations.
- Existing article links point to GitHub markdown files instead of a reader-friendly blog article page.
- The linked Instagram seed post is from `@nomavek.lab`, dated May 5, 2026, with the caption: `Let's talk if you are freelancer architect or with small studio!`

## Current Blog Identity

Name: Nomavek Blog

Positioning:

> Practical AI and architecture blog posts for design studios tracking how new tools change design decisions, visualization, client presentation, and practice workflows.

Primary reader:

- small architecture studios
- design freelancers
- competition designers
- visualization leads
- design directors who need a practical AI signal, not tool hype

## Homepage Structure

```text
blog.nomavek.com
────────────────────────────────────────
Nomavek Blog                            Latest Blog / Related Posts / View Demo Board

Nomavek Blog
Compact intro on AI tools, design workflows, and architectural practice.

[Featured Blog Post]
Compact article card with image:
Title
2-line answer
Date / category / tags

Latest Blog
[Article] [Article] [Article]

Topics
AI Design Tools
Rendering & Visualization
Architecture Practice
Competitions
Client Presentation
Studio Automation

Related Posts
Short posts that can connect to Instagram carousels, demos, or deeper articles.

Nomavek Bridge
Have a sketch, render, or project question?
Turn it into visual options, rationale, and a client-ready board.
[View Demo Board] [Visit Nomavek Lab]
────────────────────────────────────────
```

## Article Page Structure

```text
Article title
Date / category / tags

Quick Answer
Direct 3-5 sentence answer for AEO.

What Changed
Short news/tool/practice context.

Why Architects Should Care
Practical implication for design work.

Workflow Takeaway
How a small studio can respond this week.

Nomavek Bridge
This is where Nomavek connects the topic back to project decisions.

FAQ
Short Q&A blocks for answer engines.

CTA
[View Demo Board] [Read more blog]
```

## Visual Direction

- Quiet editorial layout, not a SaaS marketing page.
- Keep Nomavek Lab's architectural tone: warm paper background, restrained ink, muted accent.
- Every blog block that uses an image must use an approved image before public publishing.
- Image approval status belongs in Codex and the private approval register, not as a visible label on the public blog page.
- Use real architectural visuals, approved demo images, approved internet-sourced images, or approved generated images only.
- Avoid decorative gradient blobs, oversized marketing cards, or too much single-color beige.
- Keep article cards compact and scannable.
- Keep the top of the blog compact; do not use a large landing-page hero.
- Mobile should read like a clean publication, not a dashboard.

## Content Taxonomy

- AI Design Tools
- Rendering & Visualization
- Architecture Practice
- Competitions
- Client Presentation
- Studio Automation
- Related Posts

## Conversion Pattern

The blog should not hard-sell at the top of every article.

Use this soft bridge:

```text
AI news or tool change
  -> what it means for architects
  -> what workflow decision it creates
  -> Nomavek can help turn that decision into a board
```

CTA copy:

- View Demo Board
- Turn a project image into design options
- Visit Nomavek Lab

## Publishing And Approval Rules

- Drafts can be prepared automatically.
- Public blog publishing needs user approval.
- Public Instagram posting needs user approval.
- Any public image needs user approval before use, including AI-generated images, internet-sourced images, demo images, and Nomavek-owned visual assets.
- Website deployment/public changes need approval.

## First Implementation Scope After Approval

1. Fix `blog.nomavek.com` so the root serves the HTML blog page, not `index.csv`.
2. Rebrand visible blog UI from `Studio Nomad Blog` to `Nomavek Blog`.
3. Update metadata to `Nomavek Blog`.
4. Add compact blog homepage sections: Featured Blog Post, Latest Blog, Topics, Related Posts, Nomavek Bridge.
5. Change article links away from GitHub markdown links toward local reader-friendly article pages or a simple static article viewer.
6. Update index metadata and categories for broader AI architecture AEO.
7. Keep all posts as drafts unless user approves publication.
8. Keep image usage approval-gated with a simple approval register.

## First Three Draft Topics

1. `What Is Agentic AI in Architecture? A Practical Guide for Design Firms`
   - Existing draft can be adapted to the new Nomavek Blog style.
2. `AI Rendering Is Getting Cheaper. The Value Is Moving To Design Decisions.`
   - Strong bridge from market news to Nomavek's decision-board offer.
3. `How Small Architecture Studios Should Track AI Tool Changes Without Chasing Every Tool`
   - Broader practice article that can become an Instagram carousel.

## Instagram Bridge For The Seed Post

The May 5 Instagram post can become a blog/landing bridge:

```text
Instagram: Let's talk if you are freelancer architect or with small studio!
  -> Related blog post: What small studios should ask before adopting AI design tools
  -> Nomavek page: Start with one uploaded image and one decision board
  -> CTA: View Demo Board
```

## Approval Needed

Please approve or revise:

1. Blog name: `Nomavek Blog`
2. Compact blog homepage structure above
3. Article page structure above
4. Topic taxonomy
5. First implementation scope
