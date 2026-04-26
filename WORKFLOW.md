# Studio Nomad Blog — Workflow

## Content Strategy (AEO-Focused)

### Content Mix
| Type | Ratio | Purpose |
|------|-------|---------|
| **Industry Trends** | 30% | AI建築工具評測、新技術解讀 (Perplexity/ChatGPT搜尋優化) |
| **Case Studies** | 30% | 真實項目AI設計過程 (建立權威性) |
| **Product Updates** | 20% | Studio Nomad 新功能、工作流更新 |
| **Prompt Library** | 15% | 可用Prompt直接複製貼上 (高實用性) |
| **Tutorials** | 5% | S11+S12框架教學 |

### AEO (Answer Engine Optimization) Guidelines
- 標題用 **問題格式** — "How to..." / "What is..." / "Best way to..."
- 開頭直接答問題 (15秒內給答案)
- 用 **列表/表格** 組織資訊 (AI容易抓取)
- 每段有清晰 **H2/H3 heading**
- 結尾加 **FAQ section** (常見問題)
- 標記 **Key Takeaways** 區塊

### Language
- **English only**
- 技術詞保留英文 (prompt, render, workflow)

---

## Publishing Workflow

```
Step 1: Kenji generates draft → blog/drafts/
Step 2: Herman reviews draft (GitHub PR or Telegram)
Step 3: Herman approves → move to blog/posts/
Step 4: Update blog/index.json status → "published"
Step 5: Auto-deploy (future: GitHub Pages / Vercel)
```

### File States
| Status | Location | Action |
|--------|----------|--------|
| `draft` | `blog/drafts/` | Kenji writes, Herman reviews |
| `approved` | `blog/drafts/` | Herman approved, ready to move |
| `published` | `blog/posts/` | Live on blog |
| `archived` | `blog/archive/` | Outdated content |

### Review Process
1. Kenji writes draft → commits to `blog/drafts/`
2. Telegram notification to Herman: "New draft: [title]"
3. Herman reads → replies "approve" / "edit: [feedback]"
4. If edit → Kenji revises → back to step 2
5. If approve → Kenji moves to `blog/posts/` + updates index

---

## Schedule

- **Frequency:** 2-3 posts per week
- **Draft generation:** Monday, Wednesday, Friday (morning HKT)
- **Review window:** 24 hours for Herman
- **Publish:** After approval (usually same day)

### Content Calendar Template
```
Week of [date]
- Mon: [Topic] → Draft by Kenji → Review by Herman
- Wed: [Topic] → Draft by Kenji → Review by Herman  
- Fri: [Topic] → Draft by Kenji → Review by Herman
```

---

## Draft Format

```markdown
---
title: "Question-format title for AEO"
date: "2026-04-23"
status: "draft"  # draft → approved → published
tags: ["tag1", "tag2"]
excerpt: "One sentence summary for index"
ai-summary: "2-3 sentence summary for AI search engines"
---

## Quick Answer (15-second read)
Direct answer here.

## Full Explanation
...

## Key Takeaways
- Point 1
- Point 2

## FAQ
**Q: Question?**
A: Answer.

---
Try Studio Nomad → [link]
```

---

## Automation

### Kenji's Tasks (Scheduled)
- [ ] Generate draft (Mon/Wed/Fri 9am HKT)
- [ ] Commit to `blog/drafts/`
- [ ] Send Telegram notification to Herman
- [ ] Revise based on feedback
- [ ] Move to `blog/posts/` after approval
- [ ] Update `blog/index.json`

### Herman's Tasks (Manual)
- [ ] Review draft within 24h
- [ ] Reply "approve" or feedback
- [ ] Optional: suggest next topics

---

*Last updated: 2026-04-23*