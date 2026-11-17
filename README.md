# J&T Express Shopify Plugin – Multilingual Interactive Help Center

> **Enterprise-Grade Interactive Documentation & Merchant Support Center for J&T Express Egypt × Shopify**

---

## 🌟 Executive Summary

The **J&T Express Shopify Plugin Multilingual Interactive Help Center** is a production-ready, highly accessible, animated documentation website designed specifically for Shopify merchants using the J&T Express logistics plugin in Egypt.

Unlike traditional static documentation pages, this platform acts as an **interactive merchant support hub**, combining:
1. **Interactive Documentation**: 9 structured modules covering the complete fulfillment lifecycle.
2. **Deep Multilingual Architecture**: Native support for **English**, **Arabic (العربية - RTL)**, and **Simplified Chinese (简体中文 - LTR)**.
3. **Instant Global Search & Navigation**: Real-time cross-language search, synonym expansion, token highlighting, instant dropdown results, and deep navigation to sections, workflow stages, and zoomable screenshots.
4. **Intelligent Floating Help Chatbot**: Dual-mode conversational assistant (Local Knowledge Base Mode + AI Backend Integration Hook) capable of guiding merchants step-by-step in Arabic, English, and Chinese.
5. **Interactive 8-Step Fulfillment Workflow**: Visual stepper with checklists, key actions, and synchronized real screenshots.
6. **22 Authentic Plugin Screenshots**: Illustrated with contextual captions, UI hotspot badges, and an interactive zoomable Lightbox modal viewer.
7. **Animated 3D Visual Experience**: Interactive 3D CSS delivery cube with orbiting status chips, cursor-tracking 3D perspective tilt with specular lighting glare on screenshot cards, and scroll-triggered entrance animations (`IntersectionObserver`).
8. **Animated J&T Rabbit Loader**: Custom high-energy vector running rabbit mascot carrying an express parcel, complete with dynamic hopping legs, ear physics, dust puffs, speed streaks, and multilingual progress percentage.
9. **J&T Express Egypt Brand Identity**: Corporate color palette (`#E60012`), clean typography, responsive layout, smooth micro-animations, and reading progress tracking.

---

## 📂 Project Directory Structure

```plaintext
c:\Users\02061483\Desktop\SHOPIFY\
├── index.html                  # Main responsive single-page web application
├── css/
│   └── styles.css              # Corporate design system, RTL/LTR layout, responsive grid
├── js/
│   ├── app.js                  # Main UI controller, stepper, lightbox, tabs, progress bar
│   ├── search.js               # Global search engine, synonym dictionary, token highlighter
│   └── chatbot.js              # Floating assistant logic (Mode 1 local + Mode 2 AI hook)
├── data/
│   └── docs-content.js         # Complete structured documentation knowledge base for all 9 sections
├── locales/
│   ├── en.js                   # English locale (taxonomy, UI strings, FAQs, screenshots)
│   ├── ar.js                   # Arabic (العربية RTL) locale with natural localization
│   └── zh.js                   # Chinese (简体中文 LTR) locale
├── screenshots/                # 22 authentic screenshots from the J&T Express Shopify Plugin
│   ├── 1.OVERVIEW.png
│   ├── 1.OVERVIEW-FEEDBACK.png
│   ├── 1.OVERVIEW-GUIDE.png
│   ├── 2.ORDERS.png
│   ├── 2.ORDERS-BULK-ACTIONS.png
│   ├── 2.ORDERS-CUSTOMIZE-COLUMNS.png
│   ├── 2.ORDERS-DOWNLOAD-CENTER.png
│   ├── 2.ORDERS-EDIT.png
│   ├── 2.ORDERS-EDIT-NOTE.png
│   ├── 2.ORDERS-FILTER.png
│   ├── 2.ORDERS-ITEMS-DETAILS.png
│   ├── 2.ORDERS-ORSER-DETAILS.png
│   ├── 3.SHIPMENTS.png
│   ├── 3.SHIPMENTS-FILTERS.png
│   ├── 3.SHIPMENTS-SEARCH.png
│   ├── 3.SHIPMENTS-TRACKING.png
│   ├── 4.SETTINGS-PROFILE.png
│   ├── 4.SETTINGS-AUTO-SYNC.png
│   ├── 4.SETTINGS-AUTO-SYNC-PROVINCES.png
│   ├── 4.SETTINGS-ADDRESSES.png
│   ├── 4.SETTINGS-ADDRESSES-ADD.png
│   └── 5.SHOPIFY-ORDERS.png
└── README.md                   # Complete documentation, setup, and AI integration guide
```

---

## 🚀 How to Run the Project

The application is written in clean, zero-dependency **vanilla HTML5, CSS3, and modern JavaScript (ES6+)**. No Node.js build step, bundler, or heavy framework is required.

### Method 1: Direct File Opening
Double-click `index.html` or open it in any modern browser (Chrome, Edge, Firefox, Safari).

### Method 2: Local Web Server
You can serve the directory using any HTTP server:
- **Python**:
  ```bash
  python -m http.server 8080
  ```
- **Node.js `http-server`**:
  ```bash
  npx http-server -p 8080
  ```
- **VS Code**: Right-click `index.html` and click **"Open with Live Server"**.

Visit `http://localhost:8080` in your browser.

---

## 🌐 Multilingual & RTL System

The application supports three fully localized languages:
- **Arabic (العربية)**: Automatic Right-to-Left (`dir="rtl"`) layout, Egyptian Arabic localization, and Arabic typography (`Cairo`).
- **English**: Left-to-Right (`dir="ltr"`), international standard terminology.
- **Simplified Chinese (简体中文)**: Left-to-Right (`dir="ltr"`), natural cross-border e-commerce terminology.

### Key Internationalization Features:
1. **Preservation of Native UI Terms**: In Arabic and Chinese, all Shopify plugin buttons and fields (`Deliver with J&T`, `Print waybill`, `Sync your orders`, `Auto syncing`, `Item Weight (kg)`) are preserved in English so merchants can directly match what they see on screen.
2. **Language Persistence**: User selection is saved in `localStorage` (`jnt_help_lang`) and retained across refreshes and page navigation.
3. **Adding a 4th Language**:
   To add a new language (e.g., French or Indonesian):
   1. Create `locales/fr.js` following the schema in `locales/en.js`.
   2. Add the French content in `data/docs-content.js`.
   3. Include `<script src="locales/fr.js"></script>` in `index.html`.
   4. Add the button `<button class="lang-btn" data-lang="fr">Français</button>` to `.lang-switcher`.

---

## 🔍 Instant Multilingual Global Search

The search engine (`js/search.js`) indexes all documentation sections, workflow steps, troubleshooting FAQs, and screenshots with zero UI clutter.

### Search Capabilities:
- **Cross-Language Search**: Searches across all three languages simultaneously (English, Arabic, and Chinese).
- **Synonym Expansion**: Typing "waybill" also searches for "tracking", "awb", "بوليصة", "运单", "单号".
- **Instant Debounced Feedback**: Results appear dynamically in a clean floating dropdown as you type.
- **Token Highlighting**: Matching words are highlighted with `<mark class="search-highlight">`.
- **Keyboard Shortcut**: Press `Ctrl + K` to focus the search bar from anywhere.
- **Direct Navigation**: Clicking any result smoothly scrolls directly to that feature, stage, or opens the zoomable screenshot in the Lightbox viewer.
- **Empty State Guidance**: Displays clear helpful suggestions when no matching record is found.

---

## 🤖 Intelligent Documentation Assistant (Chatbot)

The floating chatbot (`js/chatbot.js`) provides 24/7 interactive guidance.

### Architecture & Modes:
- **Mode 1 – Local Knowledge Assistant (Default & Active)**:
  - Operates 100% locally with zero external network calls.
  - Intent matching against verified plugin facts.
  - Detects whether the user asked in Arabic, English, or Chinese and answers in that language.
  - Never hallucinates, invents unsupported features, or claims to alter store data.
  - Provides direct navigation links and recommended next steps.
- **Mode 2 – AI Backend Integration Ready**:
  - Contains a pre-built hook (`askAIBackend`) for enterprise server-side AI integration (e.g. Gemini 1.5 Pro / Flash).
  - API keys are **never** exposed in client-side JavaScript.

### Connecting a Real AI Backend (Mode 2 Setup):

1. **Create a lightweight backend proxy** (e.g., in Node.js or Python FastAPI):
   ```python
   # Example: backend_ai_server.py
   from fastapi import FastAPI, HTTPException
   from pydantic import BaseModel
   import google.generativeai as genai
   import os

   app = FastAPI()
   genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

   class ChatRequest(BaseModel):
       prompt: str
       language: str
       context: str

   @app.post("/api/jnt-assistant")
   async def chat_handler(req: ChatRequest):
       model = genai.GenerativeModel("gemini-1.5-flash")
       system_instruction = (
           "You are the official J&T Express Shopify Plugin Assistant. "
           "Answer strictly using facts from the J&T Express Shopify documentation. "
           f"Answer in language: {req.language}."
       )
       response = model.generate_content(f"{system_instruction}\n\nUser Question: {req.prompt}")
       return {"reply": response.text}
   ```

2. **Activate Mode 2 in the frontend**:
   Open browser developer console (or invoke in code):
   ```javascript
   window.jntBot.configureAIBackend("https://your-domain.com/api/jnt-assistant", "optional-bearer-token");
   ```
   The chatbot header will automatically update its badge to **"Mode 2: AI Backend Connected"**.

---

## 📸 Real Screenshot Mapping (22 Screenshots)

| Screenshot Filename | Section | Key Features Highlighted |
|---|---|---|
| `1.OVERVIEW.png` | 3. Overview | Egypt banner, Tracking Query (100 tracking numbers), Quick Actions |
| `1.OVERVIEW-FEEDBACK.png` | 3. Overview | Give Feedback popup (up to 500 characters) |
| `1.OVERVIEW-GUIDE.png` | 3. Overview | Getting Started Guide 4-step modal |
| `2.ORDERS.png` | 4. Orders | Orders table, multi-filters, action toolbar, Synced vs Placed |
| `2.ORDERS-BULK-ACTIONS.png` | 4. Orders | Bulk checkbox activation for "Deliver with J&T", "Print waybill", "Export" |
| `2.ORDERS-CUSTOMIZE-COLUMNS.png` | 4. Orders | Columns drawer, toggle and drag-to-reorder 15 table columns |
| `2.ORDERS-DOWNLOAD-CENTER.png` | 4. Orders | Download Center modal, export status, and Excel download |
| `2.ORDERS-EDIT-NOTE.png` | 4. Orders | Row actions (...) menu, View details, Reorder, Edit notes, Cancel order |
| `2.ORDERS-EDIT.png` | 4. Orders | Edit Order modal: Sender, Receiver, Province, City, Area, Item Weight (kg) |
| `2.ORDERS-FILTER.png` | 4. Orders | Order status, Label status, Confirm status, Created at calendar picker |
| `2.ORDERS-ITEMS-DETAILS.png` | 4. Orders | Picking details modal: Item Name, Quantity, SKU |
| `2.ORDERS-ORSER-DETAILS.png` | 4. Orders | View Details read-only modal with Send failed diagnostic status |
| `3.SHIPMENTS.png` | 5. Shipments | Shipments table: Tracking no., Status, Payment, View tracking |
| `3.SHIPMENTS-FILTERS.png` | 5. Shipments | Live logistics status filter: Picked up, In transit, Delivered, Returning |
| `3.SHIPMENTS-SEARCH.png` | 5. Shipments | Number search input matching J&T tracking code or Shopify Order ID |
| `3.SHIPMENTS-TRACKING.png` | 5. Shipments | Tracking Details chronological timeline (Pickup, Sending, Arrival, Delivery scan) |
| `4.SETTINGS-PROFILE.png` | 6. Settings | Merchant Customer Code, store domain, Assigned J&T pickup branch (HQ) |
| `4.SETTINGS-AUTO-SYNC.png` | 6. Settings | Auto Syncing toggle, province selection, cancellation sync notice |
| `4.SETTINGS-AUTO-SYNC-PROVINCES.png`| 6. Settings | Province multi-select dropdown (Giza, Alexandria, Gharbia, etc.) |
| `4.SETTINGS-ADDRESSES.png` | 6. Settings | Saved Sender & Receiver address book with Default badges |
| `4.SETTINGS-ADDRESSES-ADD.png` | 6. Settings | Add Address modal: Name, Phone, Province, City, Street, Set default |
| `5.SHOPIFY-ORDERS.png` | 4. Orders / 9. Notes | Native Shopify Admin Orders view showing automatic `J&T_synced` tags |

---

## 📌 Critical Operational Rules Summary

1. **Independent Cancellations**:
   Cancelling an order in Shopify Admin does **NOT** cancel the J&T shipment. Cancelling inside J&T does **NOT** cancel the Shopify order. Automatic cancellation sync is currently under development.
2. **Order Edits Require Manual Re-Sync**:
   Auto Syncing imports *newly created* orders. If customer address or phone is updated in Shopify, merchants **must** click **`Sync your orders`** manually.
3. **Weight & Geographic Dropdowns**:
   Every order requires an `Item Weight (kg) > 0` and standard `Province`, `City`, and `Area` dropdown values to avoid `Send failed` errors.
4. **Waybill Printing**:
   Only orders with Status `Placed` and an assigned J&T Tracking number can have their waybills printed via **`Print waybill`**.

---

## 📄 License & Credits

- **Copyright**: © 2026 J&T Express Egypt. All rights reserved.
- **Integration**: Shopify Embedded App Architecture.

