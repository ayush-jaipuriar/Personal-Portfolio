# Phase 3 Planning: Upgrade Visual Taste

This document details the visual and technical changes required to implement **Phase 3 (Upgrade Visual Taste)**. The objective is to move the portfolio away from standard card templates and establish an authentic "systems/agent engineering dossier" style.

---

## 📋 Implementation Checklist

- [x] **1. Style Layer & Global Motif**
  - [x] Add `.bg-grid-motif` CSS rules to [assets/css/main.css](file:///Users/ayushjaipuriar/Documents/GitHub/Personal-Portfolio/assets/css/main.css)
- [x] **2. Section Backgrounds & Layout Integration**
  - [x] Apply `.bg-grid-motif` to the homepage hero container in [pages/index.vue](file:///Users/ayushjaipuriar/Documents/GitHub/Personal-Portfolio/pages/index.vue)
  - [x] Apply `.bg-grid-motif` to the projects header container in [pages/projects/index.vue](file:///Users/ayushjaipuriar/Documents/GitHub/Personal-Portfolio/pages/projects/index.vue)
- [x] **3. OnlyYours Mobile Game Asset Generation**
  - [x] Generate `only-yours-product.png` using the `generate_image` tool
  - [x] Save the generated image under [public/images/projects/](file:///Users/ayushjaipuriar/Documents/GitHub/Personal-Portfolio/public/images/projects/)
  - [x] Update OnlyYours project image path in [data/projects.ts](file:///Users/ayushjaipuriar/Documents/GitHub/Personal-Portfolio/data/projects.ts)
- [x] **4. Redesign Project Cards as "Evidence Cards"**
  - [x] Redesign [components/CaseStudyCard.vue](file:///Users/ayushjaipuriar/Documents/GitHub/Personal-Portfolio/components/CaseStudyCard.vue) to include the macOS-style terminal header (with circular control dots, custom filename/class indicator, and status badge)
  - [x] Redesign [components/ProjectCard.vue](file:///Users/ayushjaipuriar/Documents/GitHub/Personal-Portfolio/components/ProjectCard.vue) with the same macOS terminal style card header
  - [x] Align card content in [components/PersonalProducts.vue](file:///Users/ayushjaipuriar/Documents/GitHub/Personal-Portfolio/components/PersonalProducts.vue) with the new card aesthetic
- [x] **5. Verification & Validation**
  - [x] Run the unit test suite (`npm test`)
  - [x] Run the static generation build (`npm run generate`)
  - [x] Verify generated routes in local preview

---

## 🎨 Proposed Design & Component Changes

### 1. CSS Background Grid Motif
We will add a clean systems-inspired background grid class `.bg-grid-motif` in `assets/css/main.css`:
```css
.bg-grid-motif {
  background-size: 40px 40px;
  background-image: linear-gradient(to right, rgba(128, 128, 128, 0.04) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(128, 128, 128, 0.04) 1px, transparent 1px);
}
.dark .bg-grid-motif {
  background-image: linear-gradient(to right, rgba(255, 255, 255, 0.015) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(255, 255, 255, 0.015) 1px, transparent 1px);
}
```

### 2. macOS Terminal Window Card Shell
Instead of standard rounded boxes with soft shadows, both `CaseStudyCard` and `ProjectCard` will feature a terminal top bar that gives a strong "designed systems dossier" feeling:
* **Terminal Top Bar HTML Structure**:
  ```html
  <div class="flex items-center justify-between h-8 px-4 bg-gray-50/80 dark:bg-gray-950/80 border-b border-gray-200 dark:border-gray-800 text-xs font-mono text-gray-500 dark:text-gray-400 select-none">
    <!-- Close/Min/Max Dots -->
    <div class="flex items-center gap-1.5">
      <span class="w-3 h-3 rounded-full bg-red-400/30 border border-red-500/20"></span>
      <span class="w-3 h-3 rounded-full bg-yellow-400/30 border border-yellow-500/20"></span>
      <span class="w-3 h-3 rounded-full bg-green-400/30 border border-green-500/20"></span>
    </div>
    <!-- File/Class tag -->
    <div class="font-semibold select-all">
      {{ cardFileName }}
    </div>
    <!-- Status tag -->
    <div class="flex items-center gap-1.5">
      <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
      <span>{{ cardStatus }}</span>
    </div>
  </div>
  ```

* **Metadata Customizations**:
  We will introduce custom card headers based on the project's nature:
  1. *AI Agents*: `[agent_graph.py]`, Status: `[active]`
  2. *TB-Scale Search*: `[query_router.trino]`, Status: `[stable]`
  3. *Enterprise Parsing*: `[parsing_pipeline.java]`, Status: `[optimized]`
  4. *Accountability Bot*: `[supervisor_agent.py]`, Status: `[active]`
  5. *Forge PWA*: `[daily_planner.pwa]`, Status: `[ready]`
  6. *Phone Down Android*: `[focus_timer.kt]`, Status: `[local]`
  7. *OnlyYours Mobile*: `[websocket_sync.java]`, Status: `[realtime]`
  8. *Learning Camunda*: `[dispute_workflow.bpmn]`, Status: `[demo]`
  9. *Learning LangChain*: `[qa_retrieval.ipynb]`, Status: `[demo]`

---

## 🧪 Verification Plan

* Run `npm test` to make sure regression tests pass successfully.
* Run `npm run generate` to verify complete prerendering of all 57 static routes.
* Inspect cards and backgrounds using local preview server to confirm responsiveness, visual quality, and alignment with Apple-style typography.
