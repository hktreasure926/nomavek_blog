---
title: "S11 + S12 Prompt Framework: How We Structure Architectural AI Prompts"
date: "2026-04-15"
tags: ["s11-s12", "prompt-engineering", "framework", "nano-banana"]
excerpt: "The S11+S12 framework separates Subject (what to generate) from Style (how it looks). This is how Studio Nomad structures prompts for consistent, controllable architectural outputs."
coverImage: "/images/s11-s12-framework.jpg"
---

## The Problem with Architectural AI Prompts

Most AI image prompts mix everything together. "A modern building with glass facade at sunset with people walking by, photorealistic, 8k..."

This works for general images. But for architecture — where precision matters — it's unreliable.

Studio Nomad uses a different approach.

---

## S11 + S12 Framework

| Component | Purpose | Example |
|-----------|---------|---------|
| **S11 (Subject)** | What spatially exists | Building type, program, site context, spatial organization |
| **S12 (Style)** | How it visually presents | Rendering quality, lighting, atmosphere, camera specs |

**The rule:** S11 defines the architectural intent. S12 defines the visual delivery. They can be mixed and matched.

---

## How It Works

### S11 — Subject Skills

- **Massing Render**: Turn rough massing into presentation-ready exterior
- **Multi-Angle Grid**: Generate consistent 3×3 viewpoint sets
- **Concept Design Board**: Full competition board with evolution diagrams
- **Street Perspective**: Eye-level urban view with context
- **Site Analysis**: Sasaki-style layered context maps
- **Urban Transformation**: Adaptive reuse and programmatic change

### S12 — Style Skills

- **Technical Illustration**: Clean axonometric, vector-like lines
- **Twilight Warm Glow**: Cinematic evening rendering
- **Competition Board Layout**: Structured grid, white background, high density
- **Technical Photography**: Canon EOS R5 specs, f/8, late morning light
- **Sasaki Analytical**: Monochrome base, clean line grid, minimal flat design
- **Municipal Rendering**: HDR, cinematic, public-space atmosphere

---

## Combined Prompt Example

**S11 (Subject):** Street Perspective  
**S12 (Style):** Technical Photography

```
[Subject] Generate a street-level architectural perspective showing 
modern building in urban context. Slight diagonal camera angle. 
Include paved street, sidewalk, sparse deciduous trees with bare branches.

[Style] Camera: Canon EOS R5, 24-70mm f/2.8L, f/8, 1/100s. 
Late morning clear sky, soft diffused natural light. 
Color palette: terracotta red, sky blue, warm beige.
Post-processing: warm daylight white balance, minimal vignette, HDR.
```

---

## Why This Matters

1. **Reusability**: A single S12 style can be applied to any S11 subject
2. **Consistency**: Same camera specs across all renders in a project
3. **Predictability**: Separated concerns = fewer surprises in output
4. **Scalability**: New S11 subjects or S12 styles can be added without breaking existing combinations

---

## In Studio Nomad

The S11+S12 framework is built into the Studio Nomad workflow:

1. **Upload** your reference image
2. **AI analyzes** and suggests S11 subject classification
3. **Select** S12 style from the prompt library
4. **Generate** with separated, structured prompting

The framework lives in the [arch-prompt-db](https://github.com/hktreasure926/arch-prompt-db) repository — a growing collection of architectural AI prompts organized by S11 and S12 categories.

---

## Current Combined Prompts (April 2026)

| ID | S11 Subject | S12 Style | Use Case |
|----|-------------|-----------|----------|
| ARC-14-001 | Exploded Axonometric | Technical Illustration | Construction documentation |
| ARC-14-002 | Multi-Angle Grid | Twilight Warm Glow | Presentation visualization |
| ARC-14-003 | Concept Design Board | Competition Layout | Competition submission |
| ARC-14-004 | Street Perspective | Technical Photography | Hero render |
| ARC-14-005 | Site Analysis (3-layer) | Sasaki Analytical | Urban planning |
| ARC-14-006 | Urban Transformation | Municipal Rendering | Site redevelopment |

---

**Next:** Try the [15 Urban Waterfront Schemes](/blog/15-urban-schemes) prompt library — all built with S11+S12 structure.