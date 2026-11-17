/* ==========================================================================
   Global Multilingual Search Engine (Clean - Zero Filters)
   J&T Express Shopify Plugin – Multilingual Interactive Help Center
   ========================================================================== */

class JNTSearchEngine {
  constructor() {
    this.searchIndex = [];
    this.synonyms = {
      // Waybills & Tracking
      'waybill': ['tracking', 'awb', 'label', 'shipping label', 'بوليصة', 'بوليصه', 'شحنة', 'تتبع', '运单', '单号', '面单'],
      'tracking': ['waybill', 'awb', 'track', 'status', 'تتبع', 'استعلام', 'حالة الشحنة', '查件', '轨迹', '物流状态'],
      'print': ['waybill', 'label', 'thermal', 'طباعة', 'اطبع', 'بوليصة', '打印', '打单', '面单'],
      'sync': ['synchronize', 'orders', 'pull', 'refresh', 'مزامنة', 'ازامن', 'تحديث', '同步', '订单同步', '拉取'],
      'cancel': ['cancellation', 'void', 'delete', 'الغاء', 'إلغاء', 'كنسلة', '取消', '退订', '撤单'],
      'address': ['sender', 'receiver', 'province', 'city', 'area', 'street', 'عنوان', 'الراسل', 'المستلم', 'محافظة', 'مدينة', 'منطقة', '地址', '发件人', '收件人', '省市区'],
      'vip': ['customer code', 'account', 'login', 'link', 'عميل', 'كود العميل', 'تسجيل دخول', 'ربط', 'VIP', '客户编码', '账号', '绑定'],
      'weight': ['kg', 'item weight', 'heavy', 'وزن', 'كيلو', 'كيلوجرام', '重量', '包裹重量'],
      'branch': ['hq', 'pickup', 'station', 'فرع', 'استلام', 'محطة', '网点', '取件网点']
    };

    this.buildIndex();
  }

  buildIndex() {
    this.searchIndex = [];
    const langs = ['en', 'ar', 'zh'];

    langs.forEach(lang => {
      const locale = window.JNT_LOCALES && window.JNT_LOCALES[lang];
      const docs = window.JNT_DOCS_DATA && window.JNT_DOCS_DATA[lang];

      if (!locale || !docs) return;

      // 1. Index documentation sections
      docs.forEach(doc => {
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = doc.contentHtml;
        const plainText = tempDiv.textContent || tempDiv.innerText || '';

        this.searchIndex.push({
          id: `doc-${lang}-${doc.id}`,
          type: 'section',
          lang: lang,
          sectionId: doc.id,
          title: doc.title,
          shortTitle: doc.shortTitle || '',
          subtitle: doc.subtitle,
          content: `${doc.shortTitle || ''} ${plainText}`,
          targetSelector: `#${doc.id}`,
          badge: doc.badge || 'Documentation'
        });
      });

      // 2. Index Screenshots & Captions
      if (locale.screenshots) {
        locale.screenshots.forEach(scr => {
          this.searchIndex.push({
            id: `scr-${lang}-${scr.id}`,
            type: 'screenshot',
            lang: lang,
            sectionId: scr.sectionId,
            title: scr.title,
            subtitle: scr.caption,
            content: `${scr.title} ${scr.caption} ${scr.hotspots.join(' ')}`,
            targetSelector: `#${scr.sectionId}`,
            screenshotId: scr.id,
            badge: 'Screenshot / UI'
          });
        });
      }

      // 3. Index Workflow Steps
      if (locale.workflowSteps) {
        locale.workflowSteps.forEach(wf => {
          this.searchIndex.push({
            id: `wf-${lang}-${wf.id}`,
            type: 'workflow',
            lang: lang,
            sectionId: wf.sectionId,
            title: `${locale.ui.workflowStepPrefix || 'Step'} ${wf.step}: ${wf.title}`,
            subtitle: wf.summary,
            content: `${wf.title} ${wf.summary} ${wf.checklist.join(' ')}`,
            targetSelector: '#workflow',
            workflowStep: wf.step,
            badge: 'Workflow Step'
          });
        });
      }

      // 4. Index FAQs & Chatbot Knowledge Base
      if (locale.chatbotKnowledge) {
        locale.chatbotKnowledge.forEach(kb => {
          this.searchIndex.push({
            id: `kb-${lang}-${kb.id}`,
            type: 'troubleshooting',
            lang: lang,
            sectionId: kb.sectionId,
            title: kb.question,
            subtitle: kb.answer.slice(0, 160) + '...',
            content: `${kb.question} ${kb.answer} ${kb.patterns.join(' ')}`,
            targetSelector: `#${kb.sectionId}`,
            badge: 'FAQ & Troubleshooting'
          });
        });
      }
    });
  }

  /**
   * Search across the knowledge base with query string
   */
  search(query, langOrOptions = 'en') {
    const rawQuery = (query || '').trim().toLowerCase();
    if (!rawQuery) return [];

    let targetLang = 'en';
    let limit = 0;
    if (typeof langOrOptions === 'string') {
      targetLang = langOrOptions;
    } else if (langOrOptions && typeof langOrOptions === 'object') {
      targetLang = langOrOptions.lang || langOrOptions.currentLang || 'en';
      limit = langOrOptions.limit || 0;
    }

    const queryTokens = rawQuery.split(/\s+/).filter(Boolean);
    if (queryTokens.length === 0) return [];

    // Expand search tokens with synonyms
    const expandedTokens = new Set(queryTokens);
    queryTokens.forEach(token => {
      for (const [key, list] of Object.entries(this.synonyms)) {
        if (key.includes(token) || token.includes(key)) {
          list.forEach(syn => expandedTokens.add(syn.toLowerCase()));
        }
        if (list.some(syn => syn.toLowerCase().includes(token))) {
          expandedTokens.add(key.toLowerCase());
          list.forEach(syn => expandedTokens.add(syn.toLowerCase()));
        }
      }
    });

    const activeTokens = Array.from(expandedTokens);

    const results = this.searchIndex
      .filter(item => {
        const searchableText = `${item.title} ${item.subtitle} ${item.content}`.toLowerCase();
        const matchesQuery = queryTokens.some(token => searchableText.includes(token));
        const matchesSynonym = activeTokens.some(token => searchableText.includes(token));
        return matchesQuery || matchesSynonym;
      })
      .map(item => {
        let score = 0;
        const searchableTitle = item.title.toLowerCase();
        const searchableSubtitle = item.subtitle.toLowerCase();
        const searchableText = item.content.toLowerCase();

        queryTokens.forEach(token => {
          if (searchableTitle.includes(token)) score += 30;
          if (searchableSubtitle.includes(token)) score += 15;
          if (searchableText.includes(token)) score += 5;
        });

        // Boost items matching the currently active page language
        if (targetLang && item.lang === targetLang) {
          score += 10;
        }

        return {
          ...item,
          score
        };
      })
      .sort((a, b) => b.score - a.score);

    return limit > 0 ? results.slice(0, limit) : results;
  }

  /**
   * Highlights matching tokens in snippet text
   */
  highlight(text, query) {
    if (!text || !query) return text || '';
    const trimmed = query.trim();
    if (!trimmed) return text;

    const words = trimmed.split(/\s+/).filter(w => w.length > 1);
    if (words.length === 0) return text;

    const pattern = new RegExp(`(${words.map(w => this.escapeRegex(w)).join('|')})`, 'gi');
    return text.replace(pattern, '<mark class="search-highlight">$1</mark>');
  }

  escapeRegex(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }
}

// Global Search Instance
window.jntSearch = new JNTSearchEngine();
