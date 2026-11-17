/* ==========================================================================
   Main Application Controller & Interactive UI Orchestrator
   J&T Express Shopify Plugin – Multilingual Interactive Help Center
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Language Initialization
  let currentLang = localStorage.getItem('jnt_help_lang') || 'en';
  if (!['en', 'ar', 'zh'].includes(currentLang)) {
    currentLang = 'en';
  }

  // State management
  let currentWorkflowStep = 1;
  let activeLightboxIndex = 0;
  let lightboxZoomLevel = 1.0;
  let allScreenshotsList = [];

  // DOM Elements
  const htmlElem = document.documentElement;
  const langButtons = document.querySelectorAll('.lang-btn');
  const sidebarLinksContainer = document.getElementById('sidebar-nav-container');
  const docSectionsContainer = document.getElementById('docs-sections-container');
  const workflowMount = document.getElementById('interactive-workflow-mount');
  const progressBar = document.getElementById('reading-progress-bar');
  const sidebarToggleBtn = document.getElementById('sidebar-toggle-btn') || document.getElementById('mobile-menu-btn');
  const appLayout = document.querySelector('.app-layout');
  const sidebar = document.getElementById('sidebar');
  const sidebarBackdrop = document.getElementById('sidebar-backdrop');

  // Multi-Theme Controller State & Elements
  let currentTheme = localStorage.getItem('jnt_theme') || 'light';
  const themeSwitcher = document.getElementById('theme-switcher');
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const themeActiveIcon = document.getElementById('theme-active-icon');
  const themeActiveLabel = document.getElementById('theme-active-label');
  const themeOptionBtns = document.querySelectorAll('.theme-option-btn');

  // Lightbox Elements
  const lightboxBackdrop = document.getElementById('lightbox-backdrop');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxDesc = document.getElementById('lightbox-desc');
  const lightboxCounter = document.getElementById('lightbox-counter');
  const lightboxHotspots = document.getElementById('lightbox-hotspots');
  const lightboxCloseBtn = document.getElementById('lightbox-close-btn');
  const lightboxPrevBtn = document.getElementById('lightbox-prev-btn');
  const lightboxNextBtn = document.getElementById('lightbox-next-btn');
  const lightboxZoomInBtn = document.getElementById('lightbox-zoom-in');
  const lightboxZoomOutBtn = document.getElementById('lightbox-zoom-out');

  // Floating Action Elements
  const backToTopBtn = document.getElementById('back-to-top-btn');
  const chatbotFab = document.getElementById('chatbot-fab');
  const chatbotWindow = document.getElementById('chatbot-window');
  const chatbotCloseBtn = document.getElementById('chatbot-close-btn');
  const chatbotClearBtn = document.getElementById('chatbot-clear-btn');
  const chatbotMessagesContainer = document.getElementById('chatbot-messages');
  const chatbotInput = document.getElementById('chatbot-input');
  const chatbotSendBtn = document.getElementById('chatbot-send-btn');
  const chatbotSuggestions = document.getElementById('chatbot-suggestions');

  // Real-Time Global Search Elements & State
  const globalSearchInput = document.getElementById('global-search-input');
  const searchClearBtn = document.getElementById('search-clear-btn');
  const searchDropdownMenu = document.getElementById('search-dropdown-menu');
  const searchDropdownHeader = document.getElementById('search-dropdown-header');
  const searchDropdownCount = document.getElementById('search-dropdown-count');
  const searchDropdownResults = document.getElementById('search-dropdown-results');
  const searchStatusBanner = document.getElementById('search-status-banner');
  const searchStatusText = document.getElementById('search-status-text');
  const btnResetSearchFilter = document.getElementById('btn-reset-search-filter');
  const btnResetSearchText = document.getElementById('btn-reset-search-text');
  const heroSearchBtn = document.getElementById('hero-search-btn');
  let activeSearchQuery = '';
  let selectedDropdownIndex = -1;

  /**
   * Set Application Language
   */
  function setLanguage(lang) {
    if (!window.JNT_LOCALES[lang]) return;
    currentLang = lang;
    localStorage.setItem('jnt_help_lang', lang);

    const locale = window.JNT_LOCALES[lang];

    // Update HTML Tag
    htmlElem.setAttribute('lang', locale.meta.code);
    htmlElem.setAttribute('dir', locale.meta.dir);

    // Update Active Language Switcher Buttons
    langButtons.forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    // Update Language Dropdown Active Label
    const langNames = {
      ar: 'العربية',
      en: 'English',
      zh: '简体中文'
    };
    const langActiveLabel = document.getElementById('lang-active-label');
    if (langActiveLabel) {
      langActiveLabel.textContent = langNames[lang] || 'English';
    }

    const langDropdownWrap = document.getElementById('lang-dropdown-wrap');
    if (langDropdownWrap) {
      langDropdownWrap.classList.remove('open');
      const langToggleBtn = document.getElementById('lang-toggle-btn');
      if (langToggleBtn) langToggleBtn.setAttribute('aria-expanded', 'false');
    }

    // Apply Static UI Translations
    applyUITranslations(locale);

    // Render Documentation Sections
    renderDocumentationSections(lang);

    // Render Interactive Workflow
    renderInteractiveWorkflow(lang);

    // Re-initialize Scroll Animations
    if (typeof initScrollAnimations === 'function') {
      initScrollAnimations();
    }

    // Populate Chatbot UI Strings & Initial Welcome
    renderChatbotUI(locale);

    // Rebuild Screens List
    allScreenshotsList = locale.screenshots || [];

    // Re-index search engine for the new language
    if (window.jntSearch) {
      window.jntSearch.buildIndex();
    }

    // Re-apply real-time search filter if query exists
    if (globalSearchInput && globalSearchInput.value.trim()) {
      performRealtimeSearch(globalSearchInput.value);
    }
  }

  /**
   * Apply UI Translations from Locale Object
   */
  function applyUITranslations(locale) {
    const ui = locale.ui;

    // Sidebar Toggle Tooltip & Accessibility
    updateSidebarToggleTooltip();

    // Scroll to Top Button Accessibility & Tooltip
    if (backToTopBtn) {
      const topTitle = ui.backToTop || 'Back to top';
      backToTopBtn.setAttribute('title', topTitle);
      backToTopBtn.setAttribute('aria-label', topTitle);
    }
    setText('#btn-view-workflow-text', ui.workflowBtn);

    // 3D Orbiting Chips
    const chipTranslations = {
      en: ['Shopify Sync', 'Print Waybill', 'In Transit', 'Delivered'],
      ar: ['مزامنة شوبيفاي', 'طباعة البوليصة', 'قيد الشحن', 'تم التسليم'],
      zh: ['Shopify同步', '面单打印', '运输中', '已签收']
    }[locale.meta.code] || ['Shopify Sync', 'Print Waybill', 'In Transit', 'Delivered'];

    setText('#orbit-chip-1', chipTranslations[0]);
    setText('#orbit-chip-2', chipTranslations[1]);
    setText('#orbit-chip-3', chipTranslations[2]);
    setText('#orbit-chip-4', chipTranslations[3]);

    // Sidebar
    setText('#sidebar-group-label', ui.sidebarNavTitle);

    // Hero Banner
    setText('#hero-badge-1', ui.heroBadge1);
    setText('#hero-badge-2', ui.heroBadge2);
    setText('#hero-title', ui.heroTitle);
    setText('#hero-subtitle', ui.heroSubtitle);
    setText('#hero-start-text', ui.heroStartBtn);
    setText('#hero-search-text', ui.heroSearchBtn || 'Explore All Features');

    // Search Bar & Banner Translations
    setPlaceholder('#global-search-input', ui.searchPlaceholder);
    setText('#btn-reset-search-text', ui.searchResetBtn || 'Show All Sections ✕');

    setText('#stat-sections-val', ui.statSectionsVal);
    setText('#stat-sections-label', ui.statSectionsLabel);
    setText('#stat-screenshots-val', ui.statScreenshotsVal);
    setText('#stat-screenshots-label', ui.statScreenshotsLabel);
    setText('#stat-tracking-val', ui.statTrackingVal);
    setText('#stat-tracking-label', ui.statTrackingLabel);
    setText('#stat-langs-val', ui.statLangsVal);
    setText('#stat-langs-label', ui.statLangsLabel);

    // Lightbox Controls
    setText('#lightbox-zoom-in-text', ui.lightboxZoomIn);
    setText('#lightbox-zoom-out-text', ui.lightboxZoomOut);
    setText('#lightbox-prev-text', ui.lightboxPrev);
    setText('#lightbox-next-text', ui.lightboxNext);
    setText('#lightbox-close-text', ui.lightboxClose);

    // Chatbot UI
    setText('#chatbot-fab-text', ui.chatbotFabLabel);
    setText('#chatbot-header-title', ui.chatbotTitle);
    setText('#chatbot-mode-label', ui.chatbotModeLocal);
    setPlaceholder('#chatbot-input', ui.chatbotInputPlaceholder);

    // Theme Switcher Texts
    setText('#theme-name-light', ui.themeLight);
    setText('#theme-desc-light', ui.themeLightDesc);
    setText('#theme-name-dark', ui.themeDark);
    setText('#theme-desc-dark', ui.themeDarkDesc);
    setText('#theme-name-midnight', ui.themeMidnight);
    setText('#theme-desc-midnight', ui.themeMidnightDesc);
    setText('#theme-name-emerald', ui.themeEmerald);
    setText('#theme-desc-emerald', ui.themeEmeraldDesc);
    setText('#theme-name-auto', ui.themeAuto);
    setText('#theme-desc-auto', ui.themeAutoDesc);
    updateThemeButtonLabel();
  }

  const themeIcons = {
    light: '☀️',
    dark: '🌙',
    midnight: '🔴',
    emerald: '🌲',
    auto: '💻'
  };

  function updateThemeButtonLabel() {
    if (!themeActiveLabel || !themeActiveIcon) return;
    const locales = window.JNT_LOCALES || {};
    const locale = locales[currentLang] || locales['en'] || {};
    const ui = locale.ui || {};

    const labels = {
      light: ui.themeLight || 'Light',
      dark: ui.themeDark || 'Dark Slate',
      midnight: ui.themeMidnight || 'Midnight Red',
      emerald: ui.themeEmerald || 'Shopify Emerald',
      auto: ui.themeAuto || 'System Sync'
    };

    themeActiveIcon.textContent = themeIcons[currentTheme] || '☀️';
    themeActiveLabel.textContent = labels[currentTheme] || 'Light';

    if (themeToggleBtn) {
      themeToggleBtn.setAttribute('data-current-theme', currentTheme);
    }

    // Update active class on option buttons
    themeOptionBtns.forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-theme') === currentTheme);
    });
  }

  function setTheme(theme) {
    if (!['light', 'dark', 'midnight', 'emerald', 'auto'].includes(theme)) {
      theme = 'light';
    }
    currentTheme = theme;
    localStorage.setItem('jnt_theme', theme);
    htmlElem.setAttribute('data-theme', theme);
    updateThemeButtonLabel();
  }

  function setText(selector, text) {
    const el = document.querySelector(selector);
    if (el && text !== undefined) el.textContent = text;
  }

  function setPlaceholder(selector, text) {
    const el = document.querySelector(selector);
    if (el && text !== undefined) el.placeholder = text;
  }

  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  /**
   * Smoothly navigates to a documentation section with a pulse highlight
   */
  function navigateToSection(targetId) {
    if (!targetId) return;
    const cleanId = targetId.replace(/^#/, '');
    const target = document.getElementById(cleanId);
    if (!target) return;

    // Ensure section is visible
    target.style.display = 'block';

    // Smooth scroll into view
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });

    // Trigger visual pulse glow animation
    target.classList.remove('highlight-pulse');
    void target.offsetWidth;
    target.classList.add('highlight-pulse');
    setTimeout(() => {
      target.classList.remove('highlight-pulse');
    }, 3600);
  }

  /**
   * Real-Time Global Search Engine & In-Page Section Filter
   */
  function performRealtimeSearch(rawQuery) {
    activeSearchQuery = (rawQuery || '').trim();
    const query = activeSearchQuery.toLowerCase();

    // Toggle Clear button visibility inside search input
    if (searchClearBtn) {
      searchClearBtn.style.display = activeSearchQuery ? 'inline-flex' : 'none';
    }

    // If query is empty, reset filter and restore all sections
    if (!query) {
      clearRealtimeSearch(false);
      return;
    }

    const locales = window.JNT_LOCALES || {};
    const locale = locales[currentLang] || locales['en'] || {};
    const ui = locale.ui || {};

    // 1. Search with JNTSearchEngine
    let searchResults = [];
    if (window.jntSearch) {
      searchResults = window.jntSearch.search(query, { lang: currentLang, limit: 16 });
    }

    // 2. Collect matching section IDs
    const matchingSectionIds = new Set();
    searchResults.forEach(r => {
      if (r.sectionId) matchingSectionIds.add(r.sectionId);
    });

    // 3. Match directly against docs sections for the current language
    const docsData = window.JNT_DOCS_DATA || {};
    const docs = docsData[currentLang] || docsData['en'] || [];
    const queryTokens = query.split(/\s+/).filter(Boolean);

    docs.forEach(doc => {
      const titleLower = (doc.title || '').toLowerCase();
      const shortTitleLower = (doc.shortTitle || '').toLowerCase();
      const subtitleLower = (doc.subtitle || '').toLowerCase();
      const badgeLower = (doc.badge || '').toLowerCase();
      const contentLower = (doc.contentHtml || '').toLowerCase();

      const isDirectMatch = queryTokens.some(token => 
        titleLower.includes(token) || 
        shortTitleLower.includes(token) || 
        subtitleLower.includes(token) || 
        badgeLower.includes(token) || 
        contentLower.includes(token)
      );

      if (isDirectMatch) {
        matchingSectionIds.add(doc.id);
        if (!searchResults.some(r => r.sectionId === doc.id && r.type === 'section')) {
          searchResults.unshift({
            id: `doc-${currentLang}-${doc.id}`,
            type: 'section',
            lang: currentLang,
            sectionId: doc.id,
            title: doc.title,
            subtitle: doc.subtitle,
            content: doc.subtitle,
            targetSelector: `#${doc.id}`,
            badge: doc.badge || 'Module',
            score: 100
          });
        }
      }
    });

    // 4. In-Page Filter: Show ONLY matching sections, hide non-matching sections
    const allSections = docSectionsContainer ? docSectionsContainer.querySelectorAll('.doc-section') : [];
    allSections.forEach(sec => {
      const isMatch = matchingSectionIds.has(sec.id);
      sec.style.display = isMatch ? 'block' : 'none';
      sec.classList.toggle('search-match-section', isMatch);
    });

    // 5. Sidebar Filter: Show ONLY matching nav links
    const allNavItems = sidebarLinksContainer ? sidebarLinksContainer.querySelectorAll('li') : [];
    allNavItems.forEach(li => {
      const link = li.querySelector('.sidebar-nav-link');
      const secId = link ? link.getAttribute('data-section') : '';
      const isMatch = matchingSectionIds.has(secId);
      li.style.display = isMatch ? '' : 'none';
      if (link) link.classList.toggle('search-nav-match', isMatch);
    });

    // 6. In-Page Status Banner Update
    if (searchStatusBanner && searchStatusText) {
      searchStatusBanner.style.display = 'flex';

      if (matchingSectionIds.size > 0) {
        const countStr = `<strong>${matchingSectionIds.size}</strong>`;
        const queryStr = `<em>${escapeHtml(activeSearchQuery)}</em>`;
        const bannerTemplate = ui.searchBannerShowing || 'Showing {count} sections related to "{query}"';
        searchStatusText.innerHTML = bannerTemplate.replace('{count}', countStr).replace('{query}', queryStr);
      } else {
        const queryStr = `<em>${escapeHtml(activeSearchQuery)}</em>`;
        const bannerTemplate = ui.searchBannerNone || 'No sections found matching "{query}"';
        searchStatusText.innerHTML = bannerTemplate.replace('{query}', queryStr);
      }
    }

    // 7. Update Live Dropdown Results
    renderSearchDropdown(searchResults, matchingSectionIds, activeSearchQuery, ui);
  }

  function renderSearchDropdown(results, matchingSectionIds, query, ui) {
    if (!searchDropdownMenu || !searchDropdownResults) return;

    if (!query) {
      searchDropdownMenu.style.display = 'none';
      if (globalSearchInput) globalSearchInput.setAttribute('aria-expanded', 'false');
      return;
    }

    selectedDropdownIndex = -1;

    if (results.length > 0) {
      const template = ui.searchDropdownCount || '{count} results found in {sections} sections';
      if (searchDropdownCount) {
        searchDropdownCount.textContent = template.replace('{count}', results.length).replace('{sections}', matchingSectionIds.size);
      }

      searchDropdownResults.innerHTML = results.slice(0, 8).map((res, idx) => {
        const badgeClass = res.type === 'screenshot' ? 'badge-screenshot' : 
                          (res.type === 'workflow' ? 'badge-workflow' : 
                          (res.type === 'troubleshooting' ? 'badge-troubleshooting' : 'badge-section'));
        const badgeLabel = res.type === 'screenshot' ? 'Screenshot' : 
                          (res.type === 'workflow' ? 'Workflow' : 
                          (res.type === 'troubleshooting' ? 'FAQ' : 'Module'));

        const titleText = res.title || '';
        const highlightedTitle = window.jntSearch ? window.jntSearch.highlight(titleText, query) : escapeHtml(titleText);

        const snippet = res.subtitle || (res.content ? res.content.slice(0, 120) + '...' : '');
        const highlightedSnippet = window.jntSearch ? window.jntSearch.highlight(snippet, query) : escapeHtml(snippet);

        return `
          <div class="search-result-item" data-index="${idx}" data-target-id="${res.sectionId || ''}" role="option">
            <div class="search-item-header">
              <span class="search-result-badge ${badgeClass}">${badgeLabel}</span>
              <span class="search-result-title">${highlightedTitle}</span>
            </div>
            <p class="search-result-snippet">${highlightedSnippet}</p>
          </div>
        `;
      }).join('');

      searchDropdownResults.querySelectorAll('.search-result-item').forEach(item => {
        item.addEventListener('click', (e) => {
          e.preventDefault();
          const targetId = item.getAttribute('data-target-id');
          if (targetId) {
            navigateToSection(targetId);
          }
          searchDropdownMenu.style.display = 'none';
          if (globalSearchInput) globalSearchInput.setAttribute('aria-expanded', 'false');
        });
      });

      searchDropdownMenu.style.display = 'flex';
      if (globalSearchInput) globalSearchInput.setAttribute('aria-expanded', 'true');
    } else {
      if (searchDropdownCount) {
        searchDropdownCount.textContent = '0 results';
      }
      searchDropdownResults.innerHTML = `
        <div style="padding: 18px 14px; text-align: center; color: var(--text-muted); font-size: 0.86rem;">
          ${ui.searchDropdownNoResults || 'No matching topics found'}
        </div>
      `;
      searchDropdownMenu.style.display = 'flex';
      if (globalSearchInput) globalSearchInput.setAttribute('aria-expanded', 'true');
    }
  }

  function clearRealtimeSearch(clearInput = true) {
    if (clearInput && globalSearchInput) {
      globalSearchInput.value = '';
    }
    activeSearchQuery = '';
    selectedDropdownIndex = -1;

    if (searchClearBtn) {
      searchClearBtn.style.display = 'none';
    }

    if (searchDropdownMenu) {
      searchDropdownMenu.style.display = 'none';
    }
    if (globalSearchInput) {
      globalSearchInput.setAttribute('aria-expanded', 'false');
    }

    // Hide In-Page Status Banner
    if (searchStatusBanner) {
      searchStatusBanner.style.display = 'none';
    }

    // Restore all sections
    const allSections = docSectionsContainer ? docSectionsContainer.querySelectorAll('.doc-section') : [];
    allSections.forEach(sec => {
      sec.style.display = 'block';
      sec.classList.remove('search-match-section');
    });

    // Restore all sidebar links
    const allNavItems = sidebarLinksContainer ? sidebarLinksContainer.querySelectorAll('li') : [];
    allNavItems.forEach(li => {
      li.style.display = '';
      const link = li.querySelector('.sidebar-nav-link');
      if (link) link.classList.remove('search-nav-match');
    });
  }

  function initRealtimeSearchListeners() {
    if (!globalSearchInput) return;

    // Real-Time typing event
    globalSearchInput.addEventListener('input', (e) => {
      performRealtimeSearch(e.target.value);
    });

    // Re-open dropdown on focus if input has text
    globalSearchInput.addEventListener('focus', () => {
      if (globalSearchInput.value.trim()) {
        performRealtimeSearch(globalSearchInput.value);
      }
    });

    // Keyboard navigation inside search input
    globalSearchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        clearRealtimeSearch(true);
        globalSearchInput.blur();
        return;
      }

      const items = searchDropdownResults ? searchDropdownResults.querySelectorAll('.search-result-item') : [];
      if (items.length === 0) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        selectedDropdownIndex = (selectedDropdownIndex + 1) % items.length;
        updateSelectedDropdownItem(items);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        selectedDropdownIndex = (selectedDropdownIndex - 1 + items.length) % items.length;
        updateSelectedDropdownItem(items);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (selectedDropdownIndex >= 0 && items[selectedDropdownIndex]) {
          items[selectedDropdownIndex].click();
        } else if (items[0]) {
          items[0].click();
        }
      }
    });

    function updateSelectedDropdownItem(items) {
      items.forEach((item, idx) => {
        item.classList.toggle('selected', idx === selectedDropdownIndex);
        if (idx === selectedDropdownIndex) {
          item.scrollIntoView({ block: 'nearest' });
        }
      });
    }

    // Clear Button in Search Pill
    if (searchClearBtn) {
      searchClearBtn.addEventListener('click', () => {
        clearRealtimeSearch(true);
        globalSearchInput.focus();
      });
    }

    // Reset Button in In-Page Status Banner
    if (btnResetSearchFilter) {
      btnResetSearchFilter.addEventListener('click', () => {
        clearRealtimeSearch(true);
        globalSearchInput.focus();
      });
    }

    // Global Shortcut: Ctrl+K, Cmd+K, or / to Focus Search
    document.addEventListener('keydown', (e) => {
      const activeTag = document.activeElement ? document.activeElement.tagName.toLowerCase() : '';
      const isInput = activeTag === 'input' || activeTag === 'textarea' || document.activeElement.isContentEditable;

      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        globalSearchInput.focus();
        globalSearchInput.select();
        return;
      }

      if (e.key === '/' && !isInput) {
        e.preventDefault();
        globalSearchInput.focus();
        globalSearchInput.select();
        return;
      }

      if (e.key === 'Escape' && document.activeElement === globalSearchInput) {
        clearRealtimeSearch(true);
        globalSearchInput.blur();
      }
    });

    // Dismiss dropdown on outside click
    document.addEventListener('click', (e) => {
      const searchContainer = document.getElementById('header-search-container');
      if (searchContainer && !searchContainer.contains(e.target)) {
        if (searchDropdownMenu) {
          searchDropdownMenu.style.display = 'none';
        }
        if (globalSearchInput) {
          globalSearchInput.setAttribute('aria-expanded', 'false');
        }
      }
    });
  }

  function updateSidebarToggleTooltip(forceCollapsed) {
    if (!sidebarToggleBtn) return;
    const locales = window.JNT_LOCALES || {};
    const locale = locales[currentLang] || locales['en'] || {};
    const ui = locale.ui || {};
    const isDesk = window.innerWidth > 992;
    const isCollapsed = forceCollapsed !== undefined ? forceCollapsed : (
      isDesk ? (appLayout && appLayout.classList.contains('sidebar-collapsed')) : (sidebar && !sidebar.classList.contains('open'))
    );
    const label = isCollapsed ? (ui.sidebarShow || 'Show Sidebar') : (ui.sidebarHide || 'Hide Sidebar');
    sidebarToggleBtn.setAttribute('title', `${label} (Ctrl+B)`);
    sidebarToggleBtn.setAttribute('aria-label', label);
  }

  /**
   * Returns a modern SVG icon for each documentation section
   */
  function getSectionIcon(sectionId, size = 16) {
    const s = size;
    const stroke = size > 18 ? '2.3' : '2.2';
    const icons = {
      // 01 Introduction & Plugin Overview (Layers)
      'introduction': `<svg class="section-svg svg-introduction" width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${stroke}" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>`,
      // 02 Login & Account Linking (Connection / Link)
      'login-linking': `<svg class="section-svg svg-login-linking" width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${stroke}" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>`,
      // 03 Overview Dashboard & Quick Tools (Dashboard)
      'overview': `<svg class="section-svg svg-overview" width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${stroke}" stroke-linecap="round" stroke-linejoin="round"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>`,
      // 04 Orders Management & Delivery (Package Box)
      'orders': `<svg class="section-svg svg-orders" width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${stroke}" stroke-linecap="round" stroke-linejoin="round"><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>`,
      // 05 Shipments & Real-Time Tracking (Delivery Express Truck)
      'shipments': `<svg class="section-svg svg-shipments" width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${stroke}" stroke-linecap="round" stroke-linejoin="round"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/></svg>`,
      // 06 Settings & Configurations (Settings Gear)
      'settings': `<svg class="section-svg svg-settings" width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${stroke}" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`,
      // 07 Complete Merchant Workflow (Cycle Workflow)
      'workflow': `<svg class="section-svg svg-workflow" width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${stroke}" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"/><path d="M16 16h5v5"/></svg>`,
      // 08 Troubleshooting & FAQs (Help Circle)
      'troubleshooting-faq': `<svg class="section-svg svg-troubleshooting-faq" width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${stroke}" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
      // 09 Important Rules & Operational Notes (Alert Shield)
      'important-notes': `<svg class="section-svg svg-important-notes" width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${stroke}" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`
    };
    return icons[sectionId] || `<svg class="section-svg svg-generic" width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${stroke}"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>`;
  }

  /**
   * Render Documentation Sections and Sidebar Navigation Links
   */
  function renderDocumentationSections(lang) {
    if (!sidebarLinksContainer || !docSectionsContainer) return;

    const docsData = window.JNT_DOCS_DATA || {};
    const localesData = window.JNT_LOCALES || {};
    const docs = docsData[lang] || docsData['en'] || [];
    const locale = localesData[lang] || localesData['en'] || {};

    // 1. Sidebar Links (Now with modern icons instead of numbers)
    sidebarLinksContainer.innerHTML = '';
    docs.forEach(doc => {
      const navTitle = doc.shortTitle || doc.title;
      const li = document.createElement('li');
      li.innerHTML = `
        <a href="#${doc.id}" class="sidebar-nav-link" data-section="${doc.id}" title="${escapeHtml(doc.title)}">
          <span class="sidebar-nav-icon sidebar-nav-num icon-${doc.id}" data-icon-type="${doc.id}" aria-hidden="true">${getSectionIcon(doc.id, 14)}</span>
          <span class="sidebar-nav-title">${navTitle}</span>
        </a>
      `;
      sidebarLinksContainer.appendChild(li);
    });

    // 2. Main Sections
    docSectionsContainer.innerHTML = '';
    docs.forEach(doc => {
      const sectionElem = document.createElement('section');
      sectionElem.id = doc.id;
      sectionElem.className = 'doc-section reveal-on-scroll is-revealed';

      // Find matching screenshots for this section
      const matchingScreens = (locale.screenshots || []).filter(s => doc.screenshots && doc.screenshots.includes(s.id));

      let screenshotsHtml = '';
      if (matchingScreens.length > 0) {
        screenshotsHtml = `
          <div style="margin-top: 24px;">
            <h4 style="font-size: 0.95rem; font-weight: 700; color: var(--text-primary); margin-bottom: 12px; display: flex; align-items: center; gap: 6px;">
              📸 <span>${locale.ui.galleryBtn} (${matchingScreens.length})</span>
            </h4>
            <div class="screenshot-grid">
              ${matchingScreens.map(scr => `
                <div class="screenshot-card tilt-3d reveal-child" data-screenshot-id="${scr.id}">
                  <div class="screenshot-img-wrap" onclick="window.openLightbox('${scr.id}')">
                    <img src="${scr.file}" alt="${scr.title}" loading="lazy" />
                    <div class="screenshot-zoom-overlay">
                      <span class="screenshot-zoom-pill">🔍 ${locale.ui.clickToEnlarge}</span>
                    </div>
                  </div>
                  <div class="screenshot-caption-box">
                    <div class="screenshot-caption-title">
                      <span>${scr.title}</span>
                    </div>
                    <div class="screenshot-caption-desc">${scr.caption}</div>
                    <div class="screenshot-hotspots">
                      ${scr.hotspots.map(h => `<span class="hotspot-chip">${h}</span>`).join('')}
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        `;
      }

      sectionElem.innerHTML = `
        <div class="section-header">
          <div class="section-header-left">
            <span class="section-icon-badge section-num-badge icon-${doc.id}" data-icon-type="${doc.id}" aria-hidden="true">${getSectionIcon(doc.id, 22)}</span>
            <div>
              <h2 class="section-title">${doc.title}</h2>
              <p class="section-subtitle">${doc.subtitle}</p>
            </div>
          </div>
          <button class="section-ask-bot-btn" onclick="window.askBotAbout('${doc.title}')">
            💬 <span>${locale.ui.askBotSectionBtn}</span>
          </button>
        </div>
        <div class="section-body">
          ${doc.contentHtml}
        </div>
        ${screenshotsHtml}
      `;

      docSectionsContainer.appendChild(sectionElem);
    });

    // Reattach Accordion Event Listeners in Section 8 (Troubleshooting)
    document.querySelectorAll('.accordion-trigger').forEach(trigger => {
      trigger.addEventListener('click', () => {
        const item = trigger.closest('.accordion-item');
        item.classList.toggle('open');
      });
    });

    // Reattach Sidebar Active Links Event
    document.querySelectorAll('.sidebar-nav-link').forEach(link => {
      link.addEventListener('click', (e) => {
        document.querySelectorAll('.sidebar-nav-link').forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        if (window.innerWidth <= 900) {
          sidebar.classList.remove('open');
          if (sidebarBackdrop) sidebarBackdrop.classList.remove('open');
        }
      });
    });

    // Rebind Scroll Animations & 3D Tilt on Sections
    initScrollAnimations();
    init3DTilt();

    // Re-apply realtime search filter if active
    if (activeSearchQuery) {
      performRealtimeSearch(activeSearchQuery);
    }
  }

  /**
   * Render Interactive Workflow Stepper (Section 7)
   */
  function renderInteractiveWorkflow(lang) {
    const mount = document.getElementById('interactive-workflow-mount');
    if (!mount) return;

    const locale = window.JNT_LOCALES[lang] || window.JNT_LOCALES['en'];
    const steps = locale.workflowSteps || [];
    if (steps.length === 0) return;

    const activeStepData = steps.find(s => s.step === currentWorkflowStep) || steps[0];
    const activeScreen = (locale.screenshots || []).find(s => s.id === activeStepData.screenshotId) || 
                         (locale.screenshots && locale.screenshots[0]) || 
                         { id: 'scr-overview-guide', file: 'assets/scr-overview-guide.png', title: '', caption: '' };

    mount.innerHTML = `
      <div class="workflow-container is-revealed">
        <!-- Step Navigation Tabs -->
        <div class="workflow-steps-track">
          ${steps.map(s => `
            <div class="workflow-step-tab ${s.step === currentWorkflowStep ? 'active' : ''} ${s.step < currentWorkflowStep ? 'completed' : ''}" onclick="window.switchWorkflowStep(${s.step})">
              <span class="workflow-step-circle">${s.step < currentWorkflowStep ? '✓' : s.step}</span>
              <span class="workflow-step-tab-title">${s.shortTitle}</span>
            </div>
          `).join('')}
        </div>

        <!-- Active Stage Details Card (Rock solid layout, zero 3D clipping) -->
        <div class="workflow-detail-stage">
          <div>
            <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
              <span class="ui-term primary">${locale.ui.workflowStepPrefix} ${activeStepData.step} / ${steps.length}</span>
              <span style="font-size: 0.85rem; color: var(--text-muted); font-weight: 600;">${locale.filterTaxonomy.sections[activeStepData.sectionId] || ''}</span>
            </div>
            <h3 style="font-size: 1.35rem; font-weight: 800; color: var(--text-primary); margin-bottom: 12px;">${activeStepData.title}</h3>
            <p style="font-size: 0.95rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 18px;">${activeStepData.summary}</p>

            <h4 style="font-size: 0.9rem; font-weight: 700; margin-bottom: 8px;">${locale.ui.workflowChecklistTitle}</h4>
            <ul style="list-style: none; display: flex; flex-direction: column; gap: 8px;">
              ${activeStepData.checklist.map(item => `
                <li style="display: flex; align-items: flex-start; gap: 8px; font-size: 0.88rem; color: var(--text-secondary);">
                  <span style="color: #16a34a; font-weight: bold;">✔</span>
                  <span>${item}</span>
                </li>
              `).join('')}
            </ul>

            <div class="workflow-stage-Controls">
              <button class="btn-workflow-nav" ${activeStepData.step === 1 ? 'disabled' : ''} onclick="window.switchWorkflowStep(${activeStepData.step - 1})">
                ${locale.ui.workflowPrevBtn}
              </button>
              <a href="#${activeStepData.sectionId}" class="btn-workflow-nav" style="color: var(--jnt-red); border-color: var(--jnt-red-border);">
                ${locale.ui.workflowJumpBtn} →
              </a>
              <button class="btn-workflow-nav primary" ${activeStepData.step === steps.length ? 'disabled' : ''} onclick="window.switchWorkflowStep(${activeStepData.step + 1})">
                ${locale.ui.workflowNextBtn}
              </button>
            </div>
          </div>

          <!-- Matching Screenshot Card -->
          <div class="screenshot-card" style="margin: 0;">
            <div class="screenshot-img-wrap" onclick="window.openLightbox('${activeScreen.id}')">
              <img src="${activeScreen.file}" alt="${activeScreen.title}" />
              <div class="screenshot-zoom-overlay">
                <span class="screenshot-zoom-pill">🔍 ${locale.ui.clickToEnlarge}</span>
              </div>
            </div>
            <div class="screenshot-caption-box">
              <div class="screenshot-caption-title">
                <span>${activeScreen.title}</span>
              </div>
              <div class="screenshot-caption-desc">${activeScreen.caption}</div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  window.switchWorkflowStep = function(stepNum) {
    const locale = window.JNT_LOCALES[currentLang] || window.JNT_LOCALES['en'];
    const maxSteps = (locale.workflowSteps || []).length;
    if (stepNum >= 1 && stepNum <= maxSteps) {
      currentWorkflowStep = stepNum;
      renderInteractiveWorkflow(currentLang);
      init3DTilt();
    }
  };

  /**
   * Navigation Helper for Chatbot references & Jump links
   */
  window.navigateSearchTarget = function(targetSelector, screenshotId, workflowStep) {
    if (workflowStep) {
      window.switchWorkflowStep(workflowStep);
    }
    if (screenshotId) {
      window.openLightbox(screenshotId);
      return;
    }
    const target = document.querySelector(targetSelector);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      target.classList.add('highlight-pulse');
      setTimeout(() => target.classList.remove('highlight-pulse'), 2000);
    }
  };

  /**
   * Screenshot Lightbox Modal Viewer
   */
  window.openLightbox = function(screenshotId) {
    const locale = window.JNT_LOCALES[currentLang] || window.JNT_LOCALES['en'];
    allScreenshotsList = locale.screenshots || [];
    const index = allScreenshotsList.findIndex(s => s.id === screenshotId);
    activeLightboxIndex = index >= 0 ? index : 0;
    lightboxZoomLevel = 1.0;
    updateLightboxUI();
    lightboxBackdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  function closeLightbox() {
    lightboxBackdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  function updateLightboxUI() {
    const scr = allScreenshotsList[activeLightboxIndex];
    if (!scr) return;

    lightboxImg.src = scr.file;
    lightboxImg.style.transform = `scale(${lightboxZoomLevel})`;
    lightboxTitle.textContent = scr.title;
    lightboxDesc.textContent = scr.caption;
    lightboxCounter.textContent = `${activeLightboxIndex + 1} / ${allScreenshotsList.length}`;

    if (lightboxPrevBtn) lightboxPrevBtn.disabled = activeLightboxIndex === 0;
    if (lightboxNextBtn) lightboxNextBtn.disabled = activeLightboxIndex === allScreenshotsList.length - 1;

    lightboxHotspots.innerHTML = (scr.hotspots || []).map(h => `<span class="hotspot-chip">${h}</span>`).join('');
  }

  lightboxCloseBtn.addEventListener('click', closeLightbox);
  lightboxBackdrop.addEventListener('click', (e) => {
    if (e.target === lightboxBackdrop) closeLightbox();
  });

  lightboxPrevBtn.addEventListener('click', () => {
    if (activeLightboxIndex > 0) {
      activeLightboxIndex--;
      lightboxZoomLevel = 1.0;
      updateLightboxUI();
    }
  });

  lightboxNextBtn.addEventListener('click', () => {
    if (activeLightboxIndex < allScreenshotsList.length - 1) {
      activeLightboxIndex++;
      lightboxZoomLevel = 1.0;
      updateLightboxUI();
    }
  });

  lightboxZoomInBtn.addEventListener('click', () => {
    lightboxZoomLevel = Math.min(lightboxZoomLevel + 0.25, 2.5);
    lightboxImg.style.transform = `scale(${lightboxZoomLevel})`;
  });

  lightboxZoomOutBtn.addEventListener('click', () => {
    lightboxZoomLevel = Math.max(lightboxZoomLevel - 0.25, 0.6);
    lightboxImg.style.transform = `scale(${lightboxZoomLevel})`;
  });

  // Double-click/tap to toggle zoom
  lightboxImg.addEventListener('dblclick', () => {
    lightboxZoomLevel = lightboxZoomLevel > 1.1 ? 1.0 : 1.6;
    lightboxImg.style.transform = `scale(${lightboxZoomLevel})`;
  });

  document.addEventListener('keydown', (e) => {
    if (!lightboxBackdrop.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') lightboxPrevBtn.click();
    if (e.key === 'ArrowRight') lightboxNextBtn.click();
  });

  // Mobile Touch Swipe Navigation (Swiping Left/Right navigates screenshots)
  let lbTouchStartX = 0;
  let lbTouchStartY = 0;
  const lbStageElem = document.querySelector('.lightbox-stage');
  if (lbStageElem) {
    lbStageElem.addEventListener('touchstart', (e) => {
      if (!lightboxBackdrop.classList.contains('open')) return;
      lbTouchStartX = e.changedTouches[0].screenX;
      lbTouchStartY = e.changedTouches[0].screenY;
    }, { passive: true });

    lbStageElem.addEventListener('touchend', (e) => {
      if (!lightboxBackdrop.classList.contains('open')) return;
      const diffX = e.changedTouches[0].screenX - lbTouchStartX;
      const diffY = e.changedTouches[0].screenY - lbTouchStartY;
      // Trigger only if horizontal swipe is dominant and > 45px
      if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 45) {
        const isRTL = document.documentElement.getAttribute('dir') === 'rtl';
        if (diffX < 0) {
          // Swipe left: Next in LTR, Prev in RTL
          if (isRTL) {
            if (lightboxPrevBtn && !lightboxPrevBtn.disabled) lightboxPrevBtn.click();
          } else {
            if (lightboxNextBtn && !lightboxNextBtn.disabled) lightboxNextBtn.click();
          }
        } else {
          // Swipe right: Prev in LTR, Next in RTL
          if (isRTL) {
            if (lightboxNextBtn && !lightboxNextBtn.disabled) lightboxNextBtn.click();
          } else {
            if (lightboxPrevBtn && !lightboxPrevBtn.disabled) lightboxPrevBtn.click();
          }
        }
      }
    }, { passive: true });
  }

  /**
   * Floating Chatbot UI Integration
   */
  // Back to Top Button Click Handler
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  function toggleChatbot() {
    const isOpen = chatbotWindow.classList.toggle('open');
    if (chatbotFab) chatbotFab.classList.toggle('hidden', isOpen);
    if (backToTopBtn) backToTopBtn.classList.toggle('hidden-by-modal', isOpen);
    if (isOpen) {
      chatbotInput.focus();
      renderChatMessages();
    }
  }

  chatbotFab.addEventListener('click', toggleChatbot);
  chatbotCloseBtn.addEventListener('click', () => {
    chatbotWindow.classList.remove('open');
    if (chatbotFab) chatbotFab.classList.remove('hidden');
    if (backToTopBtn) backToTopBtn.classList.remove('hidden-by-modal');
  });

  chatbotClearBtn.addEventListener('click', () => {
    if (window.jntBot) {
      window.jntBot.clearChat(currentLang);
      renderChatMessages();
    }
  });

  function renderChatbotUI(locale) {
    // Populate Suggested Chips (Full knowledge base questions available)
    chatbotSuggestions.innerHTML = '';
    const suggestions = (locale.chatbotKnowledge || []);
    suggestions.forEach(item => {
      const chip = document.createElement('button');
      chip.className = 'chat-suggest-chip';
      chip.textContent = item.question;
      chip.addEventListener('click', () => {
        handleUserChatMessage(item.question);
      });
      chatbotSuggestions.appendChild(chip);
    });

    if (window.jntBot) {
      if (window.jntBot.messages.length === 0 || (window.jntBot.messages.length === 1 && window.jntBot.messages[0].sender === 'bot')) {
        window.jntBot.renderInitialWelcome(currentLang);
      }
    }
    renderChatMessages();

    // Refresh scroll buttons display based on overflow
    const prevBtn = document.getElementById('suggest-scroll-prev');
    const nextBtn = document.getElementById('suggest-scroll-next');
    if (prevBtn && nextBtn) {
      setTimeout(() => {
        const hasOverflow = chatbotSuggestions.scrollWidth > chatbotSuggestions.clientWidth + 4;
        prevBtn.style.display = hasOverflow ? 'inline-flex' : 'none';
        nextBtn.style.display = hasOverflow ? 'inline-flex' : 'none';
      }, 100);
    }
  }

  /**
   * Initializes smooth horizontal scrolling for suggested questions:
   * Mouse wheel support, drag-to-scroll swipe, and left/right chevron buttons.
   */
  function initSuggestionsScroll() {
    const container = document.getElementById('chatbot-suggestions');
    const prevBtn = document.getElementById('suggest-scroll-prev');
    const nextBtn = document.getElementById('suggest-scroll-next');
    if (!container) return;

    const isRtl = () => document.documentElement.getAttribute('dir') === 'rtl';

    // 1. Mouse wheel horizontal scrolling
    container.addEventListener('wheel', (e) => {
      if (e.deltaY !== 0 || e.deltaX !== 0) {
        e.preventDefault();
        const delta = e.deltaY !== 0 ? e.deltaY : e.deltaX;
        const scrollStep = isRtl() ? -delta * 1.5 : delta * 1.5;
        container.scrollBy({ left: scrollStep, behavior: 'smooth' });
      }
    }, { passive: false });

    // 2. Drag / Swipe with mouse
    let isDown = false;
    let startX = 0;
    let scrollStart = 0;

    container.addEventListener('mousedown', (e) => {
      if (e.button !== 0) return;
      isDown = true;
      container.classList.add('is-dragging');
      startX = e.pageX - container.offsetLeft;
      scrollStart = container.scrollLeft;
    });

    window.addEventListener('mouseup', () => {
      if (isDown) {
        isDown = false;
        container.classList.remove('is-dragging');
      }
    });

    container.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX) * 1.8;
      container.scrollLeft = scrollStart - walk;
    });

    // 3. Chevron Scroll Buttons
    if (prevBtn) {
      prevBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const step = 220;
        const dir = isRtl() ? 1 : -1;
        container.scrollBy({ left: step * dir, behavior: 'smooth' });
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const step = 220;
        const dir = isRtl() ? -1 : 1;
        container.scrollBy({ left: step * dir, behavior: 'smooth' });
      });
    }

    // 4. Update button visibility on scroll and window resize
    function updateScrollButtons() {
      if (!prevBtn || !nextBtn) return;
      const hasOverflow = container.scrollWidth > container.clientWidth + 4;
      prevBtn.style.display = hasOverflow ? 'inline-flex' : 'none';
      nextBtn.style.display = hasOverflow ? 'inline-flex' : 'none';
    }

    container.addEventListener('scroll', updateScrollButtons, { passive: true });
    window.addEventListener('resize', updateScrollButtons, { passive: true });
    setTimeout(updateScrollButtons, 150);
  }

  function renderChatMessages() {
    if (!window.jntBot) return;
    const messages = window.jntBot.messages;

    chatbotMessagesContainer.innerHTML = messages.map(msg => {
      const isBot = msg.sender === 'bot';
      const avatarHtml = isBot ? `
        <div class="chat-msg-avatar" title="J&T Express × Shopify Assistant">
          <span>J&T</span>
          <span class="mini-shopify-badge">
            <svg class="shopify-icon-svg" viewBox="0 0 24 24" width="10" height="10" fill="currentColor">
              <path d="M15.337 23.979l7.216-1.561s-2.604-17.613-2.625-17.73c-.018-.116-.114-.192-.211-.192s-1.929-.136-1.929-.136-1.275-1.274-1.439-1.411c-.045-.037-.075-.057-.121-.074l-.914 21.104h.023zM11.71 11.305s-.81-.424-1.774-.424c-1.447 0-1.504.906-1.504 1.141 0 1.232 3.24 1.715 3.24 4.629 0 2.295-1.44 3.76-3.406 3.76-2.354 0-3.54-1.465-3.54-1.465l.646-2.086s1.245 1.066 2.28 1.066c.675 0 .975-.545.975-.932 0-1.619-2.654-1.694-2.654-4.359-.034-2.237 1.571-4.416 4.827-4.416 1.257 0 1.875.361 1.875.361l-.945 2.715-.02.01zM11.17.83c.136 0 .271.038.405.135-.984.465-2.064 1.639-2.508 3.992-.656.213-1.293.405-1.889.578C7.697 3.75 8.951.84 11.17.84V.83zm1.235 2.949v.135c-.754.232-1.583.484-2.394.736.466-1.777 1.333-2.645 2.085-2.971.193.501.309 1.176.309 2.1zm.539-2.234c.694.074 1.141.867 1.429 1.755-.349.114-.735.231-1.158.366v-.252c0-.752-.096-1.371-.271-1.871v.002zm2.992 1.289c-.02 0-.06.021-.078.021s-.289.075-.714.21c-.423-1.233-1.176-2.37-2.508-2.37h-.115C12.135.209 11.669 0 11.265 0 8.159 0 6.675 3.877 6.21 5.846c-1.194.365-2.063.636-2.16.674-.675.213-.694.232-.772.87-.075.462-1.83 14.063-1.83 14.063L15.009 24l.927-21.166z"/>
            </svg>
          </span>
        </div>
      ` : '';
      let refsHtml = '';

      if (msg.references && msg.references.length > 0) {
        refsHtml = `
          <div class="chat-refs">
            ${msg.references.map(r => `
              <button class="chat-ref-btn" onclick="window.navigateSearchTarget('#${r.sectionId}', '${r.screenshotId || ''}')">
                📄 ${r.title}
              </button>
            `).join('')}
          </div>
        `;
      }

      let nextStepHtml = '';
      if (msg.nextStep) {
        nextStepHtml = `
          <div style="margin-top: 8px; padding-top: 6px; border-top: 1px dashed var(--border-color); font-size: 0.78rem; color: #0284c7; font-weight: 600;">
            👉 ${msg.nextStep}
          </div>
        `;
      }

      // Convert simple Markdown formatting (bold, code, lists) to HTML
      const formattedText = formatChatMessageText(msg.text);
      const isArabic = /[\u0600-\u06FF]/.test(msg.text || '');
      const bubbleDir = isArabic ? 'rtl' : 'ltr';
      const textAlign = isArabic ? 'right' : 'left';

      return `
        <div class="chat-msg ${msg.sender}">
          <div class="chat-msg-row">
            ${isBot ? avatarHtml : ''}
            <div class="chat-bubble" dir="${bubbleDir}" style="unicode-bidi: plaintext; text-align: ${textAlign};">
              ${formattedText}
              ${refsHtml}
              ${nextStepHtml}
            </div>
          </div>
          <span class="chat-time">${msg.timestamp || ''}</span>
        </div>
      `;
    }).join('');

    chatbotMessagesContainer.scrollTop = chatbotMessagesContainer.scrollHeight;
  }

  function formatChatMessageText(text) {
    if (!text) return '';
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/`(.*?)`/g, '<code class="ui-term">$1</code>')
      .replace(/\n\n/g, '<br><br>')
      .replace(/\n/g, '<br>');
  }

  async function handleUserChatMessage(userQuery) {
    const text = userQuery || chatbotInput.value.trim();
    if (!text) return;

    chatbotInput.value = '';

    // Render user message immediately
    if (window.jntBot) {
      // Append temporary typing indicator
      const typingIndicator = document.createElement('div');
      typingIndicator.className = 'chat-msg bot';
      typingIndicator.id = 'chat-typing-indicator';
      typingIndicator.innerHTML = `
        <div class="chat-msg-row">
          <div class="chat-msg-avatar">J&T</div>
          <div class="chat-bubble">
            <div class="typing-dots">
              <span></span><span></span><span></span>
            </div>
          </div>
        </div>
      `;
      chatbotMessagesContainer.appendChild(typingIndicator);
      chatbotMessagesContainer.scrollTop = chatbotMessagesContainer.scrollHeight;

      await window.jntBot.ask(text, currentLang);

      // Remove typing indicator & re-render
      const ind = document.getElementById('chat-typing-indicator');
      if (ind) ind.remove();

      renderChatMessages();
    }
  }

  chatbotSendBtn.addEventListener('click', () => handleUserChatMessage());
  chatbotInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') handleUserChatMessage();
  });

  window.askBotAbout = function(topicTitle) {
    if (!chatbotWindow.classList.contains('open')) {
      toggleChatbot();
    }
    handleUserChatMessage(`Tell me about ${topicTitle}`);
  };

  /**
   * Reading Progress Bar & Scrollspy
   */
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = `${scrollPercent}%`;

    // Dynamic Header elevation shadow when scrolled
    const headerElem = document.querySelector('.site-header');
    if (headerElem) {
      headerElem.classList.toggle('is-scrolled', scrollTop > 8);
    }

    // Toggle Scroll to Top Button Visibility
    if (backToTopBtn) {
      backToTopBtn.classList.toggle('is-visible', scrollTop > 260);
    }

    // Scrollspy for sidebar links
    const sections = document.querySelectorAll('.doc-section');
    let activeId = '';
    sections.forEach(sec => {
      const top = sec.offsetTop - 120;
      if (scrollTop >= top) {
        activeId = sec.id;
      }
    });

    if (activeId) {
      document.querySelectorAll('.sidebar-nav-link').forEach(link => {
        link.classList.toggle('active', link.getAttribute('data-section') === activeId);
      });
    }
  });

  /**
   * Universal Sidebar Hide / Show Toggle (Desktop Collapse + Mobile Drawer)
   */
  function isDesktop() {
    return window.innerWidth > 992;
  }

  function toggleSidebar() {
    if (isDesktop()) {
      if (!appLayout) return;
      const isCollapsed = appLayout.classList.toggle('sidebar-collapsed');
      if (sidebarToggleBtn) {
        sidebarToggleBtn.classList.toggle('collapsed', isCollapsed);
      }
      localStorage.setItem('jnt_sidebar_collapsed', isCollapsed ? '1' : '0');
      updateSidebarToggleTooltip(isCollapsed);
    } else {
      if (!sidebar) return;
      const isOpen = sidebar.classList.toggle('open');
      if (sidebarBackdrop) sidebarBackdrop.classList.toggle('open', isOpen);
      if (sidebarToggleBtn) {
        sidebarToggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      }
      updateSidebarToggleTooltip(!isOpen);
    }
  }

  if (sidebarToggleBtn) {
    sidebarToggleBtn.addEventListener('click', toggleSidebar);
  }

  // Restore Desktop Sidebar Preference on Load
  if (isDesktop() && localStorage.getItem('jnt_sidebar_collapsed') === '1') {
    if (appLayout) appLayout.classList.add('sidebar-collapsed');
    if (sidebarToggleBtn) sidebarToggleBtn.classList.add('collapsed');
  }

  // Close Mobile Drawer on Backdrop Click
  if (sidebarBackdrop) {
    sidebarBackdrop.addEventListener('click', () => {
      if (sidebar) sidebar.classList.remove('open');
      sidebarBackdrop.classList.remove('open');
      updateSidebarToggleTooltip(true);
    });
  }

  // Close Mobile Drawer when Clicking Nav Link or Outside
  if (sidebar) {
    sidebar.addEventListener('click', (e) => {
      const link = e.target.closest('a');
      if (link && !isDesktop()) {
        sidebar.classList.remove('open');
        if (sidebarBackdrop) sidebarBackdrop.classList.remove('open');
      }
    });
  }

  document.addEventListener('click', (e) => {
    if (!isDesktop() && sidebar && sidebar.classList.contains('open')) {
      if (!sidebar.contains(e.target) && sidebarToggleBtn && !sidebarToggleBtn.contains(e.target)) {
        sidebar.classList.remove('open');
        if (sidebarBackdrop) sidebarBackdrop.classList.remove('open');
      }
    }
  });

  // Keyboard shortcut: Ctrl+B or Cmd+B to toggle sidebar
  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key && e.key.toLowerCase() === 'b') {
      const activeTag = document.activeElement ? document.activeElement.tagName.toLowerCase() : '';
      if (activeTag !== 'input' && activeTag !== 'textarea') {
        e.preventDefault();
        toggleSidebar();
      }
    }
  });

  // Language Dropdown Events
  const langToggleBtn = document.getElementById('lang-toggle-btn');
  const langDropdownWrap = document.getElementById('lang-dropdown-wrap');

  if (langToggleBtn && langDropdownWrap) {
    langToggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = langDropdownWrap.classList.toggle('open');
      langToggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      // Mutually close theme dropdown
      if (themeSwitcher) {
        themeSwitcher.classList.remove('open');
        if (themeToggleBtn) themeToggleBtn.setAttribute('aria-expanded', 'false');
      }
    });

    document.addEventListener('click', (e) => {
      if (!langDropdownWrap.contains(e.target)) {
        langDropdownWrap.classList.remove('open');
        langToggleBtn.setAttribute('aria-expanded', 'false');
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && langDropdownWrap.classList.contains('open')) {
        langDropdownWrap.classList.remove('open');
        langToggleBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Language Switcher Button Events
  document.querySelectorAll('.lang-btn, .lang-option-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      setLanguage(lang);
      if (langDropdownWrap) {
        langDropdownWrap.classList.remove('open');
        if (langToggleBtn) langToggleBtn.setAttribute('aria-expanded', 'false');
      }
    });
  });

  // Multi-Theme Switcher Events
  if (themeToggleBtn && themeSwitcher) {
    themeToggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = themeSwitcher.classList.toggle('open');
      themeToggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      // Mutually close language dropdown
      if (langDropdownWrap) {
        langDropdownWrap.classList.remove('open');
        if (langToggleBtn) langToggleBtn.setAttribute('aria-expanded', 'false');
      }
    });

    themeOptionBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const selected = btn.getAttribute('data-theme');
        setTheme(selected);
        themeSwitcher.classList.remove('open');
        themeToggleBtn.setAttribute('aria-expanded', 'false');
      });
    });

    document.addEventListener('click', (e) => {
      if (!themeSwitcher.contains(e.target)) {
        themeSwitcher.classList.remove('open');
        themeToggleBtn.setAttribute('aria-expanded', 'false');
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && themeSwitcher.classList.contains('open')) {
        themeSwitcher.classList.remove('open');
        themeToggleBtn.setAttribute('aria-expanded', 'false');
      }
    });

    // Listen to OS prefers-color-scheme changes when in 'auto' mode
    if (window.matchMedia) {
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
        if (currentTheme === 'auto') {
          updateThemeButtonLabel();
        }
      });
    }

    // Initialize Theme immediately
    setTheme(currentTheme);
  }

  // Quick Action Buttons
  const btnWorkflow = document.getElementById('btn-view-workflow');
  if (btnWorkflow) {
    btnWorkflow.addEventListener('click', () => {
      const wf = document.getElementById('workflow');
      if (wf) wf.scrollIntoView({ behavior: 'smooth' });
    });
  }

  const btnGallery = document.getElementById('btn-view-gallery');
  if (btnGallery) {
    btnGallery.addEventListener('click', () => {
      window.openLightbox('scr-overview');
    });
  }

  const heroStartBtn = document.getElementById('hero-start-btn');
  if (heroStartBtn) {
    heroStartBtn.addEventListener('click', () => {
      const wf = document.getElementById('workflow');
      if (wf) wf.scrollIntoView({ behavior: 'smooth' });
    });
  }

  if (heroSearchBtn) {
    heroSearchBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (globalSearchInput) {
        globalSearchInput.focus();
        globalSearchInput.select();
      }
      const headerSearch = document.getElementById('header-search-container');
      if (headerSearch && window.innerWidth <= 768) {
        headerSearch.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  const sidebarBotBtn = document.getElementById('sidebar-open-bot-btn');
  if (sidebarBotBtn) {
    sidebarBotBtn.addEventListener('click', () => {
      toggleChatbot();
    });
  }

  /**
   * J&T Animated Rabbit Loader
   */
  function initRabbitLoader(lang = currentLang) {
    const loader = document.getElementById('jnt-rabbit-loader');
    if (!loader) return;

    loader.style.display = 'flex';
    loader.classList.remove('fade-out');

    const progressFill = document.getElementById('loader-progress-fill');
    const percentLabel = document.getElementById('loader-percent');
    const statusText = document.getElementById('loader-status-text');
    const titleText = document.getElementById('loader-title');

    const strings = {
      en: {
        speech: 'Loading...',
        title: 'Loading Interactive Help Center...',
        s1: 'Preparing verified documentation...',
        s2: 'Loading 22 authentic plugin screens...',
        s3: 'Setting up 3D Interactive Workflow...',
        ready: 'Ready! Welcome to J&T Express'
      },
      ar: {
        speech: 'جاري التحميل...',
        title: 'جاري تجهيز مركز مساعدة J&T Express...',
        s1: 'تحميل التوثيق المعتمد وتطبيق Shopify...',
        s2: 'تجهيز 22 شاشة وواجهة حقيقية...',
        s3: 'تهيئة مسار العمل التفاعلي ثلاثي الأبعاد...',
        ready: 'جاهز! أهلاً بك في J&T Express'
      },
      zh: {
        speech: '加载中...',
        title: '正在加载极兔速递帮助中心...',
        s1: '加载官方认证文档与 Shopify 插件...',
        s2: '准备 22 个真实插件操作界面...',
        s3: '初始化交互式 3D 履约工作流...',
        ready: '准备就绪！欢迎来到极兔速递'
      }
    }[lang] || strings['en'];

    const speechText = document.getElementById('mascot-speech-text');
    if (speechText) speechText.textContent = strings.speech;
    if (titleText) titleText.textContent = strings.title;
    if (progressFill) progressFill.style.width = '0%';
    if (percentLabel) percentLabel.textContent = '0%';
    if (statusText) statusText.textContent = strings.s1;

    const startTime = performance.now();
    const duration = 1050; // smooth 1.05s loading experience

    function updateLoader(now) {
      const elapsed = now - startTime;
      const progressFraction = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const easedProgress = Math.round((1 - Math.pow(1 - progressFraction, 3)) * 100);

      if (progressFill) progressFill.style.width = `${easedProgress}%`;
      if (percentLabel) percentLabel.textContent = `${easedProgress}%`;

      if (statusText) {
        if (easedProgress < 35) {
          statusText.textContent = strings.s1;
        } else if (easedProgress < 75) {
          statusText.textContent = strings.s2;
        } else if (easedProgress < 100) {
          statusText.textContent = strings.s3;
        } else {
          statusText.textContent = strings.ready;
        }
      }

      if (progressFraction < 1) {
        requestAnimationFrame(updateLoader);
      } else {
        setTimeout(() => {
          loader.classList.add('fade-out');
          setTimeout(() => {
            loader.style.display = 'none';
            initScrollAnimations();
            init3DTilt();
          }, 450);
        }, 180);
      }
    }

    requestAnimationFrame(updateLoader);
  }

  /**
   * Scroll-Triggered Reveal Animations using IntersectionObserver
   */
  let scrollObserver = null;
  function initScrollAnimations() {
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal-on-scroll, .reveal-child').forEach(el => el.classList.add('is-revealed'));
      return;
    }

    if (scrollObserver) {
      scrollObserver.disconnect();
    }

    scrollObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
        }
      });
    }, {
      root: null,
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.08
    });

    document.querySelectorAll('.reveal-on-scroll, .doc-section, .hero-interactive-3d-wrap').forEach(el => {
      el.classList.add('reveal-on-scroll');
      scrollObserver.observe(el);
    });

    document.querySelectorAll('.screenshot-grid, .features-grid, .doc-cards-grid').forEach(grid => {
      Array.from(grid.children).forEach((child, idx) => {
        child.classList.add('reveal-child');
        child.style.setProperty('--stagger-index', Math.min(idx, 8));
        scrollObserver.observe(child);
      });
    });
  }

  /**
   * Interactive 3D Perspective Tilt on Hover with Dynamic Specular Glare
   */
  function init3DTilt() {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    // Only apply 3D tilt to standalone elements, never nested stages to prevent clipping
    const cards = document.querySelectorAll('.hero-stats-card, .screenshot-grid .screenshot-card');

    cards.forEach(card => {
      if (card.dataset.tiltAttached === 'true') return;
      card.dataset.tiltAttached = 'true';
      card.classList.add('tilt-3d');

      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const cardX = e.clientX - rect.left;
        const cardY = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateY = ((cardX - centerX) / centerX) * 7.5;
        const rotateX = -((cardY - centerY) / centerY) * 7.5;

        const glareX = (cardX / rect.width) * 100;
        const glareY = (cardY / rect.height) * 100;

        card.style.transform = `perspective(900px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`;
        card.style.setProperty('--glare-x', `${glareX.toFixed(1)}%`);
        card.style.setProperty('--glare-y', `${glareY.toFixed(1)}%`);
        card.classList.add('is-tilting');
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg)';
        card.classList.remove('is-tilting');
      });
    });
  }

  /**
   * Complete Hero Banner Interactive 3D & Cursor-Follow System
   * Handles whole-card hovering, dynamic specular light beam,
   * smooth lerped 3D parallax for the parcel cube, orbiting chips, and stats card.
   */
  function initHeroCardInteraction() {
    if (window.matchMedia('(pointer: coarse)').matches || window.innerWidth <= 768) return;

    const heroBanner = document.getElementById('hero-banner') || document.querySelector('.hero-banner');
    const parcelScene = document.getElementById('parcel-3d-scene');
    const heroStatsCard = document.getElementById('hero-stats-card');
    const orbitChips = document.querySelectorAll('.orbit-chip');
    if (!heroBanner) return;

    let rafId = null;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let isHovering = false;

    function onMouseMove(e) {
      if (window.innerWidth <= 768) return;
      isHovering = true;
      const rect = heroBanner.getBoundingClientRect();
      const mouseX = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
      const mouseY = Math.max(0, Math.min(e.clientY - rect.top, rect.height));

      // Normalized coordinates (-1 at left/top to +1 at right/bottom)
      targetX = ((mouseX - rect.width / 2) / (rect.width / 2));
      targetY = ((mouseY - rect.height / 2) / (rect.height / 2));

      // Percentage for the CSS dynamic radial light beam
      const pctX = (mouseX / rect.width) * 100;
      const pctY = (mouseY / rect.height) * 100;
      heroBanner.style.setProperty('--mouse-x', `${pctX.toFixed(1)}%`);
      heroBanner.style.setProperty('--mouse-y', `${pctY.toFixed(1)}%`);

      if (!rafId) {
        rafId = requestAnimationFrame(renderHeroFrame);
      }
    }

    function renderHeroFrame() {
      // Linear interpolation (damping) for smooth 60fps physical inertia
      currentX += (targetX - currentX) * 0.12;
      currentY += (targetY - currentY) * 0.12;

      // 1. Hero Banner 3D Tilt
      const cardTiltX = -currentY * 3.8;
      const cardTiltY = currentX * 3.8;
      heroBanner.style.transform = `perspective(1200px) rotateX(${cardTiltX.toFixed(2)}deg) rotateY(${cardTiltY.toFixed(2)}deg)`;

      // 2. 3D Parcel Box Rotation (Wide spatial follow across the whole card)
      if (parcelScene) {
        const rotY = -32 + (currentX * 36);
        const rotX = 24 - (currentY * 24);
        parcelScene.style.animation = 'none';
        parcelScene.style.transform = `rotateX(${rotX.toFixed(1)}deg) rotateY(${rotY.toFixed(1)}deg) translateY(-8px) scale3d(1.05, 1.05, 1.05)`;
      }

      // 3. Floating Orbit Chips Parallax Shift
      orbitChips.forEach((chip, i) => {
        const factor = (i + 1) * 3.5;
        const chipX = currentX * factor;
        const chipY = currentY * factor;
        const baseZ = [90, 75, 110, 85][i] || 90;
        chip.style.transform = `translate3d(${chipX.toFixed(1)}px, ${chipY.toFixed(1)}px, ${baseZ}px)`;
      });

      // 4. Hero Stats Card Complementary Float
      if (heroStatsCard) {
        const statsTiltX = -currentY * 5.5;
        const statsTiltY = currentX * 5.5;
        heroStatsCard.style.transform = `perspective(900px) rotateX(${statsTiltX.toFixed(2)}deg) rotateY(${statsTiltY.toFixed(2)}deg) translateZ(16px)`;
      }

      // Continue animation loop until mouse leaves and values settle
      const delta = Math.abs(targetX - currentX) + Math.abs(targetY - currentY);
      if (isHovering || delta > 0.002) {
        rafId = requestAnimationFrame(renderHeroFrame);
      } else {
        rafId = null;
      }
    }

    function onMouseLeave() {
      isHovering = false;
      targetX = 0;
      targetY = 0;

      heroBanner.style.transition = 'transform 0.65s cubic-bezier(0.16, 1, 0.3, 1)';
      heroBanner.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg)';
      heroBanner.style.removeProperty('--mouse-x');
      heroBanner.style.removeProperty('--mouse-y');

      if (parcelScene) {
        parcelScene.style.transition = 'transform 0.65s cubic-bezier(0.16, 1, 0.3, 1)';
        parcelScene.style.transform = 'rotateX(24deg) rotateY(-32deg) translateY(0px)';
        setTimeout(() => {
          if (!isHovering) {
            parcelScene.style.animation = '';
            parcelScene.style.transition = '';
          }
        }, 650);
      }

      orbitChips.forEach((chip) => {
        chip.style.transition = 'transform 0.65s cubic-bezier(0.16, 1, 0.3, 1)';
        chip.style.transform = '';
        setTimeout(() => {
          if (!isHovering) chip.style.transition = '';
        }, 650);
      });

      if (heroStatsCard) {
        heroStatsCard.style.transition = 'transform 0.65s cubic-bezier(0.16, 1, 0.3, 1)';
        heroStatsCard.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0)';
        setTimeout(() => {
          if (!isHovering) heroStatsCard.style.transition = '';
        }, 650);
      }

      setTimeout(() => {
        if (!isHovering) heroBanner.style.transition = '';
      }, 650);
    }

    heroBanner.addEventListener('mouseenter', () => {
      heroBanner.style.transition = 'none';
      if (parcelScene) parcelScene.style.transition = 'none';
      if (heroStatsCard) heroStatsCard.style.transition = 'none';
      orbitChips.forEach(chip => chip.style.transition = 'none');
    });

    heroBanner.addEventListener('mousemove', onMouseMove);
    heroBanner.addEventListener('mouseleave', onMouseLeave);

    window.addEventListener('resize', () => {
      if (window.innerWidth <= 768) {
        onMouseLeave();
      }
    });
  }

  // Initialize Realtime Search System
  initRealtimeSearchListeners();

  // Initialize Suggestions Horizontal Scroll System
  initSuggestionsScroll();

  // Initialize Hero Card Dynamic Interaction
  initHeroCardInteraction();

  // Initial load
  setLanguage(currentLang);

  // Trigger Rabbit Loader on initial load
  initRabbitLoader(currentLang);
});

