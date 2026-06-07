# Phase 4 Planning: Make It Feel Premium

This document details the visual and technical changes required to implement **Phase 4 (Make It Feel Premium)**, based on [PORTFOLIO_AUDIT_SOURCE_OF_TRUTH.md](file:///Users/ayushjaipuriar/Documents/GitHub/Personal-Portfolio/PORTFOLIO_AUDIT_SOURCE_OF_TRUTH.md) and [PRODUCT_DESIGN_AUDIT_REPORT.md](file:///Users/ayushjaipuriar/Documents/GitHub/Personal-Portfolio/product-design-audit-2026-06-07/PRODUCT_DESIGN_AUDIT_REPORT.md).

The objective is to refine the portfolio into a premium "editorial dossier" by introducing varied layout rhythms, thin architectural connecting lines, and a high-converting recruiter contact experience.

---

## 📋 Implementation Checklist

- [x] **1. Architectural Divider Motif**
  - [x] Implement `.systems-divider` CSS rules in [assets/css/main.css](file:///Users/ayushjaipuriar/Documents/GitHub/Personal-Portfolio/assets/css/main.css) (thin lines with center/edge connection nodes)
  - [x] Apply these dividers between sections in [pages/index.vue](file:///Users/ayushjaipuriar/Documents/GitHub/Personal-Portfolio/pages/index.vue)
- [x] **2. High-Density Layout Rhythm (Learning Projects List)**
  - [x] Modify [pages/projects/index.vue](file:///Users/ayushjaipuriar/Documents/GitHub/Personal-Portfolio/pages/projects/index.vue) to render "learning builds" (e.g. Camunda dispute workflow, LangChain QA) in a clean, high-density table list layout instead of cards
  - [x] Highlight technologies, GitHub link, and project size within the table list
- [x] **3. Premium Closing & Recruiter Matrix on Contact Page**
  - [x] Redesign [pages/contact.vue](file:///Users/ayushjaipuriar/Documents/GitHub/Personal-Portfolio/pages/contact.vue) with a two-column desktop layout
  - [x] Left column: Implement a recruiter best-fit matrix (target roles, preferred domains, availability status, and copy-to-clipboard email button with micro-animation feedback)
  - [x] Right column: Polish the contact form style, adding subtle focus states and response time promises
- [x] **4. Verification & Validation**
  - [x] Run the unit test suite (`npm test`)
  - [x] Run the static generation build (`npm run generate`)
  - [x] Verify pages visually in the local preview

---

## 🎨 Proposed Design & Component Changes

### 1. Systems Divider Motif
We will add a custom divider class `.systems-divider` in `assets/css/main.css`. It will render a thin horizontal line with a small technical node dot in the center to signify system connectivity:
```css
.systems-divider {
  position: relative;
  height: 1px;
  background: linear-gradient(to right, transparent, rgba(128, 128, 128, 0.2), transparent);
}
.systems-divider::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 6px;
  height: 6px;
  border-radius: 99px;
  background: #007aff; /* apple-blue-600 */
  border: 1px solid rgba(0, 122, 255, 0.4);
}
```

### 2. High-Density Table for Learning Projects
To break card monotony on `/projects` index, we will display learning projects (IDs 8 & 9) in a compact, dossier-style list table:
* **Table Columns**:
  * **Build Name & Description**: Text details.
  * **Category/Stack**: Technologies list.
  * **Link**: Action link (e.g. GitHub).
* This differentiates large personal products (Forge, Phone Down, OnlyYours) from smaller learning builds, proving clear evidence prioritization.

### 3. Recruiter-Centric Contact Page Redesign
We will transform `/contact` into a conversion endpoint:
* **Two-Column Layout**:
  * **Left Column (Recruiter Dossier Card)**:
    * Best-Fit Roles: *Senior SWE, AI Agent Engineer, Applied AI, Platform/Backend*.
    * Target Domains: *Fintech, AI Automation, Distributed Systems*.
    * Interactive Copy Email Button: Sourced from a clipboard composable or utility, with instant visual feedback ("Copied!").
  * **Right Column (Form)**:
    * Clean text input fields with border transitions.
    * Expected response time callout: *"I usually reply within 24 hours."*

---

## 🧪 Verification Plan

* Run `npm test` to verify Vitest tests continue to pass.
* Run `npm run generate` to confirm static compiler pre-renders all routes without warning.
* Manually inspect `/projects` and `/contact` to verify the layout rhythms and clipboard interactions.
