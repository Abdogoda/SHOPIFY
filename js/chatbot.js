/* ==========================================================================
   Intelligent Multilingual Floating Chatbot / Documentation Assistant
   J&T Express Shopify Plugin – Multilingual Interactive Help Center
   ========================================================================== */

class JNTHelpAssistant {
  constructor() {
    this.mode = 'local'; // 'local' (Mode 1: Verified Local Knowledge) or 'ai' (Mode 2: Connected AI Backend)
    this.aiEndpoint = null; // Configurable AI backend URL for Mode 2
    this.aiAuthToken = null; // Auth token for backend proxy
    this.messages = [];
    this.isTyping = false;
    this.isOpen = false;

    this.initStorage();
  }

  initStorage() {
    try {
      const stored = sessionStorage.getItem('jnt_chat_history');
      if (stored) {
        this.messages = JSON.parse(stored);
      }
    } catch (e) {
      this.messages = [];
    }
  }

  saveStorage() {
    try {
      sessionStorage.setItem('jnt_chat_history', JSON.stringify(this.messages));
    } catch (e) {
      console.warn('Chat storage quota exceeded');
    }
  }

  clearChat(lang = 'en') {
    this.messages = [];
    sessionStorage.removeItem('jnt_chat_history');
    this.renderInitialWelcome(lang);
  }

  /**
   * Detects whether user message is in Arabic, Chinese, or English
   */
  detectLanguage(text) {
    if (/[\u0600-\u06FF]/.test(text)) return 'ar';
    if (/[\u4E00-\u9FFF]/.test(text)) return 'zh';
    return 'en';
  }

  /**
   * Main query processor
   */
  async ask(userText, currentAppLang = 'en') {
    if (!userText || !userText.trim()) return null;

    const query = userText.trim();
    const detectedLang = this.detectLanguage(query);
    // Respond in the query's language if distinct, otherwise default to current app language
    const targetLang = (detectedLang === 'ar' || detectedLang === 'zh') ? detectedLang : currentAppLang;

    // Record user message
    const userMsg = {
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    this.messages.push(userMsg);
    this.saveStorage();

    if (this.mode === 'ai' && this.aiEndpoint) {
      return await this.askAIBackend(query, targetLang);
    } else {
      return await this.askLocalKnowledge(query, targetLang);
    }
  }

  /**
   * Mode 1: Local Knowledge Assistant (Strictly grounded in verified docs)
   */
  async askLocalKnowledge(query, lang = 'en') {
    // Artificial slight delay for realistic typing indicator
    await new Promise(r => setTimeout(r, 450));

    const locale = window.JNT_LOCALES[lang] || window.JNT_LOCALES['en'];
    const knowledgeBase = locale.chatbotKnowledge || [];
    const normalizedQuery = query.toLowerCase();

    // 1. Check exact or high-confidence pattern matching
    let bestMatch = null;
    let highestScore = 0;

    for (const item of knowledgeBase) {
      let score = 0;
      for (const pattern of item.patterns) {
        const pat = pattern.toLowerCase();
        if (normalizedQuery.includes(pat)) {
          score += 15 + pat.length;
        }
      }
      if (normalizedQuery.includes(item.question.toLowerCase())) {
        score += 40;
      }
      if (score > highestScore) {
        highestScore = score;
        bestMatch = item;
      }
    }

    // 2. If no direct pattern match, query the Global Search Engine
    if (!bestMatch || highestScore < 10) {
      const searchResults = window.jntSearch ? window.jntSearch.search(query, { lang, limit: 3 }) : [];
      if (searchResults && searchResults.length > 0) {
        const topResult = searchResults[0];
        const botReply = {
          sender: 'bot',
          text: topResult.subtitle || topResult.content.slice(0, 240) + '...',
          sectionId: topResult.sectionId,
          screenshotId: topResult.screenshotId,
          references: searchResults.slice(0, 3).map(r => ({
            title: r.title,
            sectionId: r.sectionId,
            screenshotId: r.screenshotId
          })),
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        this.messages.push(botReply);
        this.saveStorage();
        return botReply;
      }

      // Fallback response with suggested quick topics
      const botReply = {
        sender: 'bot',
        isFallback: true,
        text: `${locale.ui.chatbotFallbackTitle}\n\n${locale.ui.chatbotFallbackDesc}`,
        suggestedTags: locale.quickSearchTags || [],
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      this.messages.push(botReply);
      this.saveStorage();
      return botReply;
    }

    // Found high confidence answer
    const botReply = {
      sender: 'bot',
      text: bestMatch.answer,
      sectionId: bestMatch.sectionId,
      screenshotId: bestMatch.screenshotId,
      nextStep: bestMatch.nextStep,
      references: [
        {
          title: locale.filterTaxonomy.sections[bestMatch.sectionId] || bestMatch.sectionId,
          sectionId: bestMatch.sectionId,
          screenshotId: bestMatch.screenshotId
        }
      ],
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    this.messages.push(botReply);
    this.saveStorage();
    return botReply;
  }

  /**
   * Mode 2: Enterprise AI Integration Layer
   * Prepared for connecting to an external server-side AI proxy (e.g. Node.js/Python FastAPI gateway with Gemini API).
   * Note: Client-side keys are never hardcoded here.
   */
  async askAIBackend(query, lang = 'en') {
    try {
      const headers = { 'Content-Type': 'application/json' };
      if (this.aiAuthToken) {
        headers['Authorization'] = `Bearer ${this.aiAuthToken}`;
      }

      const response = await fetch(this.aiEndpoint, {
        method: 'POST',
        headers,
        body: JSON.stringify({
          prompt: query,
          language: lang,
          context: 'J&T Express Shopify Plugin Official Documentation'
        })
      });

      if (!response.ok) throw new Error(`AI Gateway error: ${response.status}`);
      const data = await response.json();

      const botReply = {
        sender: 'bot',
        text: data.reply || data.content,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      this.messages.push(botReply);
      this.saveStorage();
      return botReply;
    } catch (err) {
      console.warn('AI Backend unreachable, gracefully falling back to Mode 1 Local Assistant', err);
      return await this.askLocalKnowledge(query, lang);
    }
  }

  /**
   * Configure AI backend connection (Mode 2)
   */
  configureAIBackend(endpoint, authToken = null) {
    if (endpoint) {
      this.mode = 'ai';
      this.aiEndpoint = endpoint;
      this.aiAuthToken = authToken;
      return true;
    } else {
      this.mode = 'local';
      this.aiEndpoint = null;
      this.aiAuthToken = null;
      return false;
    }
  }

  renderInitialWelcome(activeLang = 'en') {
    const locale = window.JNT_LOCALES[activeLang] || window.JNT_LOCALES['en'];
    this.messages = [
      {
        sender: 'bot',
        text: locale.ui.chatbotWelcome,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ];
    this.saveStorage();
  }
}

// Global Chatbot Instance
window.jntBot = new JNTHelpAssistant();

