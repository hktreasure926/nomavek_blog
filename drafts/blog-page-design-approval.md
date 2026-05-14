# Nomavek Blog Page Design - Approval Draft

Status: approval needed before implementation or public publishing

## Current Findings

- The repo is a lightweight static blog with `docs/index.html`, `docs/style.css`, `docs/app.js`, markdown posts, `index.json`, and `index.csv`.
- The live `blog.nomavek.com` root is currently returning the CSV index instead of the designed HTML blog page.
- The current blog is still branded as `Studio Nomad Blog`; public-facing blog wording should move to `Nomavek`.
- Existing content is useful but too narrow around prompt libraries and workflow guides. The new direction should cover broader AI news in architecture, design practice, visualization, tools, and studio operations.
- Existing article links point to GitHub markdown files instead of a reader-friendly blog article page.
- The linked Instagram seed post is from `@nomavek.lab`, dated May 5, 2026, with the caption: `Let's talk if you are freelancer architect or with small studio!`

## Recommended Blog Identity

Name: Nomavek Journal

Positioning:

> AI architecture briefings for design studios tracking how new tools change design decisions, visualization, client presentation, and practice workflows.

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
Nomavek Journal                         Nomavek Lab / Topics / Start Board

AI Architecture Briefing
Short practical signal on AI tools, design workflows, and architectural practice.

[Featured Briefing]
Large editorial article card:
Title
2-line answer
Topic / date / reading time

Latest Briefings
[Article] [Article] [Article]

Topics
AI Design Tools
Rendering & Visualization
Architecture Practice
Competitions
Client Presentation
Studio Automation

Field Notes
Shorter posts that can connect to Instagram carousels.

Nomavek Bridge
Have a sketch, render, or project question?
Turn it into visual options, rationale, and a client-ready board.
[Start QuickFix Board] [Visit Nomavek Lab]
────────────────────────────────────────
```

## Article Page Structure

```text
Article title
Date / category / reading time

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
[Start QuickFix Board] [Read more briefings]
```

## Visual Direction

- Quiet editorial layout, not a SaaS marketing page.
- Keep Nomavek Lab's architectural tone: warm paper background, restrained ink, muted accent.
- Use real architectural visuals, approved demo images, or approved generated images only.
- Avoid decorative gradient blobs, oversized marketing cards, or too much single-color beige.
- Keep article cards compact and scannable.
- Mobile should read like a clean publication, not a dashboard.

## Content Taxonomy

- AI Design Tools
- Rendering & Visualization
- Architecture Practice
- Competitions
- Client Presentation
- Studio Automation
- Field Notes

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

- Start QuickFix Board
- Turn a project image into design options
- Visit Nomavek Lab

## Publishing And Approval Rules

- Drafts can be prepared automatically.
- Public blog publishing needs user approval.
- Public Instagram posting needs user approval.
- AI-generated article images or demo images need user approval before use.
- Website deployment/public changes need approval.

## First Implementation Scope After Approval

1. Fix `blog.nomavek.com` so the root serves the HTML blog page, not `index.csv`.
2. Rebrand visible blog UI from `Studio Nomad Blog` to `Nomavek Journal`.
3. Update metadata to `Nomavek Journal`.
4. Add editorial homepage sections: Featured Briefing, Latest Briefings, Topics, Field Notes, Nomavek Bridge.
5. Change article links away from GitHub markdown links toward local reader-friendly article pages or a simple static article viewer.
6. Update index metadata and categories for broader AI architecture AEO.
7. Keep all posts as drafts unless user approves publication.

## First Three Draft Topics

1. `What Is Agentic AI in Architecture? A Practical Guide for Design Firms`
   - Existing draft can be adapted to the new Nomavek Journal style.
2. `AI Rendering Is Getting Cheaper. The Value Is Moving To Design Decisions.`
   - Strong bridge from market news to Nomavek's decision-board offer.
3. `How Small Architecture Studios Should Track AI Tool Changes Without Chasing Every Tool`
   - Broader practice article that can become an Instagram carousel.

## Instagram Bridge For The Seed Post

The May 5 Instagram post can become a blog/landing bridge:

```text
Instagram: Let's talk if you are freelancer architect or with small studio!
  -> Blog field note: What small studios should ask before adopting AI design tools
  -> Nomavek page: Start with one uploaded image and one decision board
  -> CTA: Start QuickFix Board
```

## Approval Needed

Please approve or revise:

1. Blog name: `Nomavek Journal`
2. Homepage structure above
3. Article page structure above
4. Topic taxonomy
5. First implementation scope
