export type Language = "zh" | "en";

export interface Translations {
  nav: {
    services: string;
    products: string;
    whyUs: string;
    contact: string;
    consultNow: string;
  };
  hero: {
    badge: string;
    title1: string;
    title2: string;
    subtitle: string;
    consultBtn: string;
    learnMore: string;
    stat1: string;
    stat1Label: string;
    stat2: string;
    stat2Label: string;
    stat3: string;
    stat3Label: string;
  };
  services: {
    title: string;
    subtitle: string;
    buy: {
      title: string;
      description: string;
      feature1: string;
      feature2: string;
      feature3: string;
    };
    sell: {
      title: string;
      description: string;
      feature1: string;
      feature2: string;
      feature3: string;
    };
    consult: {
      title: string;
      description: string;
      feature1: string;
      feature2: string;
      feature3: string;
    };
  };
  products: {
    title: string;
    subtitle: string;
    hot: string;
    tierFlagship: string;
    tierHigh: string;
    tierMidHigh: string;
    tierMid: string;
    tierUsedFlagship: string;
    tierUsedHigh: string;
    moreInfo: string;
    contactUs: string;
    forDetails: string;
  };
  whyUs: {
    title: string;
    subtitle: string;
    quality: {
      title: string;
      description: string;
    };
    speed: {
      title: string;
      description: string;
    };
    professional: {
      title: string;
      description: string;
    };
    fairPrice: {
      title: string;
      description: string;
    };
    reputation: {
      title: string;
      description: string;
    };
    support: {
      title: string;
      description: string;
    };
    ctaTitle: string;
    ctaSubtitle: string;
    ctaButton: string;
  };
  contact: {
    title: string;
    subtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitButton: string;
    submitting: string;
    successMessage: string;
    errorMessage: string;
    infoTitle: string;
    emailInfo: string;
    phoneInfo: string;
    addressInfo: string;
    hoursInfo: string;
    hoursValue: string;
  };
  footer: {
    about: string;
    aboutText: string;
    quickLinks: string;
    followUs: string;
    copyright: string;
  };
}

export const translations: Record<Language, Translations> = {
  zh: {
    nav: {
      services: "服務項目",
      products: "產品展示",
      whyUs: "為何選擇我們",
      contact: "聯絡我們",
      consultNow: "立即諮詢",
    },
    hero: {
      badge: "專業顯示卡交易平台",
      title1: "Aeonix Technology",
      title2: "顯示卡收購與銷售",
      subtitle: "提供專業的顯示卡收購服務,銷售全新與二手高階顯示卡。\n公平報價、快速交易、品質保證。",
      consultBtn: "立即諮詢",
      learnMore: "了解服務",
      stat1: "1000+",
      stat1Label: "成功交易",
      stat2: "24H",
      stat2Label: "快速回應",
      stat3: "100%",
      stat3Label: "品質保證",
    },
    services: {
      title: "專業服務",
      subtitle: "提供全方位的顯示卡交易與諮詢服務,滿足您的各種需求",
      buy: {
        title: "顯示卡收購",
        description: "提供公平合理的收購價格,快速評估您的顯示卡價值。無論是單張或大量收購,我們都能提供最佳報價。",
        feature1: "即時報價",
        feature2: "現金交易",
        feature3: "大量收購優惠",
      },
      sell: {
        title: "新品與二手銷售",
        description: "銷售全新原廠顯示卡與經過嚴格測試的二手顯示卡,品質保證,價格透明,讓您安心選購。",
        feature1: "原廠保固",
        feature2: "嚴格測試",
        feature3: "售後服務",
      },
      consult: {
        title: "專業諮詢服務",
        description: "提供顯示卡選購建議、效能分析與市場行情諮詢,協助您做出最明智的決策。",
        feature1: "效能分析",
        feature2: "市場行情",
        feature3: "選購建議",
      },
    },
    products: {
      title: "產品展示",
      subtitle: "經營各大品牌高階顯示卡,提供新品與二手選擇",
      hot: "熱門",
      tierFlagship: "旗艦",
      tierHigh: "高階",
      tierMidHigh: "中高階",
      tierMid: "中階",
      tierUsedFlagship: "二手旗艦",
      tierUsedHigh: "二手高階",
      moreInfo: "更多型號與詳細規格請",
      contactUs: "聯絡我們",
      forDetails: "諮詢",
    },
    whyUs: {
      title: "為何選擇我們",
      subtitle: "專業、誠信、效率 - 您值得信賴的顯示卡交易夥伴",
      quality: {
        title: "品質保證",
        description: "所有產品經過嚴格測試與檢驗,確保品質無虞。二手顯示卡提供完整測試報告。",
      },
      speed: {
        title: "快速交易",
        description: "24小時內快速回應,當日完成評估與報價,讓您的交易流程更加順暢。",
      },
      professional: {
        title: "專業團隊",
        description: "擁有豐富的顯示卡交易經驗,提供專業的技術支援與市場分析。",
      },
      fairPrice: {
        title: "公平報價",
        description: "依據市場行情提供合理報價,透明公開,絕不壓價或哄抬價格。",
      },
      reputation: {
        title: "信譽良好",
        description: "累積超過千筆成功交易案例,客戶滿意度高,口碑推薦率達95%以上。",
      },
      support: {
        title: "完善售後",
        description: "提供完整的售後服務與技術支援,讓您購買後無後顧之憂。",
      },
      ctaTitle: "準備好開始交易了嗎?",
      ctaSubtitle: "立即聯絡我們,獲取專業的顯示卡收購與銷售服務",
      ctaButton: "立即諮詢",
    },
    contact: {
      title: "聯絡我們",
      subtitle: "有任何問題或需求,歡迎與我們聯繫",
      nameLabel: "姓名",
      namePlaceholder: "請輸入您的姓名",
      emailLabel: "電子郵件",
      emailPlaceholder: "your.email@example.com",
      phoneLabel: "聯絡電話",
      phonePlaceholder: "+886 912 345 678",
      messageLabel: "訊息內容",
      messagePlaceholder: "請描述您的需求或問題...",
      submitButton: "送出訊息",
      submitting: "傳送中...",
      successMessage: "訊息已送出!我們會盡快與您聯繫。",
      errorMessage: "送出失敗,請稍後再試或直接聯絡我們。",
      infoTitle: "聯絡資訊",
      emailInfo: "電子郵件",
      phoneInfo: "聯絡電話",
      addressInfo: "地址",
      hoursInfo: "營業時間",
      hoursValue: "週一至週五 09:00 - 18:00",
    },
    footer: {
      about: "關於我們",
      aboutText: "Aeonix Technology Limited 專注於提供專業的顯示卡收購與銷售服務,致力於為客戶創造最大價值。",
      quickLinks: "快速連結",
      followUs: "追蹤我們",
      copyright: "© 2024 Aeonix Technology Limited. 版權所有。",
    },
  },
  en: {
    nav: {
      services: "Services",
      products: "Products",
      whyUs: "Why Us",
      contact: "Contact",
      consultNow: "Consult Now",
    },
    hero: {
      badge: "Professional GPU Trading Platform",
      title1: "Aeonix Technology",
      title2: "GPU Buying & Selling",
      subtitle: "Professional GPU acquisition services, selling brand new and used high-end graphics cards.\nFair pricing, fast transactions, quality guaranteed.",
      consultBtn: "Consult Now",
      learnMore: "Learn More",
      stat1: "1000+",
      stat1Label: "Successful Deals",
      stat2: "24H",
      stat2Label: "Fast Response",
      stat3: "100%",
      stat3Label: "Quality Assured",
    },
    services: {
      title: "Professional Services",
      subtitle: "Comprehensive GPU trading and consulting services to meet all your needs",
      buy: {
        title: "GPU Acquisition",
        description: "Fair and reasonable acquisition prices with fast GPU valuation. Whether single or bulk purchases, we provide the best quotes.",
        feature1: "Instant Quote",
        feature2: "Cash Payment",
        feature3: "Bulk Discount",
      },
      sell: {
        title: "New & Used Sales",
        description: "Selling brand new factory GPUs and rigorously tested used graphics cards. Quality guaranteed, transparent pricing for peace of mind.",
        feature1: "Factory Warranty",
        feature2: "Strict Testing",
        feature3: "After-sales Service",
      },
      consult: {
        title: "Professional Consulting",
        description: "GPU selection advice, performance analysis, and market insights to help you make the smartest decisions.",
        feature1: "Performance Analysis",
        feature2: "Market Insights",
        feature3: "Purchase Advice",
      },
    },
    products: {
      title: "Product Showcase",
      subtitle: "Offering high-end GPUs from major brands, both new and used options available",
      hot: "Hot",
      tierFlagship: "Flagship",
      tierHigh: "High-end",
      tierMidHigh: "Mid-high",
      tierMid: "Mid-range",
      tierUsedFlagship: "Used Flagship",
      tierUsedHigh: "Used High-end",
      moreInfo: "For more models and detailed specifications, please",
      contactUs: "contact us",
      forDetails: "for details",
    },
    whyUs: {
      title: "Why Choose Us",
      subtitle: "Professional, Trustworthy, Efficient - Your Reliable GPU Trading Partner",
      quality: {
        title: "Quality Assurance",
        description: "All products undergo rigorous testing and inspection to ensure quality. Used GPUs come with complete test reports.",
      },
      speed: {
        title: "Fast Transactions",
        description: "Quick response within 24 hours, same-day evaluation and quotation for a smooth transaction process.",
      },
      professional: {
        title: "Professional Team",
        description: "Extensive GPU trading experience with professional technical support and market analysis.",
      },
      fairPrice: {
        title: "Fair Pricing",
        description: "Reasonable quotes based on market conditions, transparent and open, never undercut or inflate prices.",
      },
      reputation: {
        title: "Excellent Reputation",
        description: "Over a thousand successful transactions, high customer satisfaction, and 95%+ referral rate.",
      },
      support: {
        title: "Complete Support",
        description: "Comprehensive after-sales service and technical support for worry-free purchases.",
      },
      ctaTitle: "Ready to Start Trading?",
      ctaSubtitle: "Contact us now for professional GPU acquisition and sales services",
      ctaButton: "Consult Now",
    },
    contact: {
      title: "Contact Us",
      subtitle: "Have any questions or needs? Feel free to reach out",
      nameLabel: "Name",
      namePlaceholder: "Enter your name",
      emailLabel: "Email",
      emailPlaceholder: "your.email@example.com",
      phoneLabel: "Phone",
      phonePlaceholder: "+852 9123 4567",
      messageLabel: "Message",
      messagePlaceholder: "Describe your needs or questions...",
      submitButton: "Send Message",
      submitting: "Sending...",
      successMessage: "Message sent! We'll get back to you soon.",
      errorMessage: "Failed to send. Please try again or contact us directly.",
      infoTitle: "Contact Information",
      emailInfo: "Email",
      phoneInfo: "Phone",
      addressInfo: "Address",
      hoursInfo: "Business Hours",
      hoursValue: "Mon - Fri 09:00 - 18:00",
    },
    footer: {
      about: "About Us",
      aboutText: "Aeonix Technology Limited specializes in professional GPU acquisition and sales services, committed to creating maximum value for our clients.",
      quickLinks: "Quick Links",
      followUs: "Follow Us",
      copyright: "© 2024 Aeonix Technology Limited. All rights reserved.",
    },
  },
};
