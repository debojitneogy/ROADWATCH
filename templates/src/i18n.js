import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
  resources: {
    en: {
      translation: {
        // Splash
        appName: 'CHalan', appSub: "India's traffic fine calculator",
        chooseLanguage: 'Choose your language', getStarted: 'Get started',
        continueGuest: 'Continue as guest',
        // Login
        signIn: 'Sign in', signInSub: 'Save your history & bookmarks',
        continueGoogle: 'Continue with Google',
        // Home
        location: 'Location', searchPlaceholder: 'Search violation or section…',
        offlineReady: 'Offline mode ready', offlineSub: 'WB, MH, DL rules cached.',
        quickAccess: 'Quick access', calculator: 'Challan calculator',
        calculatorSub: 'Check fine for any violation', chatbot: 'Ask AI chatbot',
        chatbotSub: 'NL queries about MV Act', lawBrowser: 'Law browser',
        lawBrowserSub: 'Browse MV Act sections',
        // Nav
        home: 'Home', chat: 'Chat', calc: 'Calc', profile: 'Profile',
        // Calc
        calcTitle: 'Challan calculator', state: 'State', vehicleType: 'Vehicle type',
        violation: 'Violation', offenceType: 'Offence type',
        firstOffence: 'First offence', repeatOffence: 'Repeat offence',
        fineAmount: 'Fine amount', payDispute: 'Pay / Dispute', shareResult: 'Share result',
        // Chatbot
        chatTitle: 'AI Assistant', chatPlaceholder: 'Ask about any traffic rule…',
        chatWelcome: 'Hi! Ask me anything about traffic fines, MV Act sections, or your rights during a challan.',
        // Laws
        lawTitle: 'Law browser', filterSections: 'Filter sections…',
        mvAct: 'Motor Vehicles Act 1988', stateAmend: 'State amendments',
        stateAmendSub: 'WB · MH · DL overrides', stateAmendDesc: 'State-specific fine variations',
        // Profile
        profileTitle: 'My profile', vehicle: 'Vehicle', account: 'Account',
        queryHistory: 'Query history', querySub: 'Past searches & bookmarks',
        savedResults: 'Saved results', savedSub: 'Bookmarked fines & sections',
        settings: 'Settings', settingsSub: 'Notifications · theme · state',
        about: 'About & disclaimer', aboutSub: 'Legal note · data sources',
        // Settings
        settingsTitle: 'Settings', preferences: 'Preferences',
        notifications: 'Notifications', notifSub: 'Fine alerts & law updates',
        defaultState: 'Default state', darkTheme: 'Dark theme', darkSub: 'Always on',
        offlineCache: 'Offline cache', offlineCacheSub: 'WB, MH, DL saved',
        // Pay
        payTitle: 'Pay / Dispute', payOnline: 'PAY ONLINE',
        payDesc: 'Pay your challan on Parivahan — the official Govt of India vehicle service portal.',
        openParivahan: 'Open Parivahan portal ↗', howDispute: 'HOW TO DISPUTE',
        penaltyDeadline: 'PENALTY DEADLINE',
        penaltyDesc: 'Pay within 60 days to avoid court summons.',
        // About
        aboutTitle: 'About & disclaimer', legalTitle: 'LEGAL DISCLAIMER',
        legalDesc: 'This app is for informational purposes only. Always verify with official Parivahan portal.',
        dataTitle: 'DATA SOURCES',
      }
    },
    hi: {
      translation: {
        appName: 'चालान', appSub: 'भारत का ट्रैफिक जुर्माना कैलकुलेटर',
        chooseLanguage: 'अपनी भाषा चुनें', getStarted: 'शुरू करें',
        continueGuest: 'अतिथि के रूप में जारी रखें',
        signIn: 'साइन इन करें', signInSub: 'अपना इतिहास और बुकमार्क सहेजें',
        continueGoogle: 'Google से जारी रखें',
        location: 'स्थान', searchPlaceholder: 'उल्लंघन या धारा खोजें…',
        offlineReady: 'ऑफलाइन मोड तैयार', offlineSub: 'WB, MH, DL नियम सहेजे गए।',
        quickAccess: 'त्वरित पहुंच', calculator: 'चालान कैलकुलेटर',
        calculatorSub: 'किसी भी उल्लंघन का जुर्माना जांचें', chatbot: 'AI चैटबॉट से पूछें',
        chatbotSub: 'MV अधिनियम के बारे में प्रश्न', lawBrowser: 'कानून ब्राउज़र',
        lawBrowserSub: 'MV अधिनियम की धाराएं देखें',
        home: 'होम', chat: 'चैट', calc: 'कैलक', profile: 'प्रोफाइल',
        calcTitle: 'चालान कैलकुलेटर', state: 'राज्य', vehicleType: 'वाहन प्रकार',
        violation: 'उल्लंघन', offenceType: 'अपराध प्रकार',
        firstOffence: 'पहला अपराध', repeatOffence: 'दोहराया अपराध',
        fineAmount: 'जुर्माना राशि', payDispute: 'भुगतान / विवाद', shareResult: 'परिणाम शेयर करें',
        chatTitle: 'AI सहायक', chatPlaceholder: 'कोई भी ट्रैफिक नियम पूछें…',
        chatWelcome: 'नमस्ते! ट्रैफिक जुर्माने, MV अधिनियम या चालान के दौरान अपने अधिकारों के बारे में पूछें।',
        lawTitle: 'कानून ब्राउज़र', filterSections: 'धाराएं फ़िल्टर करें…',
        mvAct: 'मोटर वाहन अधिनियम 1988', stateAmend: 'राज्य संशोधन',
        stateAmendSub: 'WB · MH · DL ओवरराइड', stateAmendDesc: 'राज्य-विशिष्ट जुर्माना',
        profileTitle: 'मेरी प्रोफाइल', vehicle: 'वाहन', account: 'खाता',
        queryHistory: 'खोज इतिहास', querySub: 'पिछली खोजें और बुकमार्क',
        savedResults: 'सहेजे गए परिणाम', savedSub: 'बुकमार्क जुर्माने और धाराएं',
        settings: 'सेटिंग्स', settingsSub: 'सूचनाएं · थीम · राज्य',
        about: 'के बारे में', aboutSub: 'कानूनी नोट · डेटा स्रोत',
        settingsTitle: 'सेटिंग्स', preferences: 'प्राथमिकताएं',
        notifications: 'सूचनाएं', notifSub: 'जुर्माना अलर्ट और कानून अपडेट',
        defaultState: 'डिफ़ॉल्ट राज्य', darkTheme: 'डार्क थीम', darkSub: 'हमेशा चालू',
        offlineCache: 'ऑफलाइन कैश', offlineCacheSub: 'WB, MH, DL सहेजे गए',
        payTitle: 'भुगतान / विवाद', payOnline: 'ऑनलाइन भुगतान करें',
        payDesc: 'परिवहन पोर्टल पर अपना चालान भुगतान करें — भारत सरकार की आधिकारिक सेवा।',
        openParivahan: 'परिवहन पोर्टल खोलें ↗', howDispute: 'विवाद कैसे करें',
        penaltyDeadline: 'जुर्माना समय सीमा',
        penaltyDesc: 'कोर्ट समन से बचने के लिए 60 दिनों में भुगतान करें।',
        aboutTitle: 'के बारे में', legalTitle: 'कानूनी अस्वीकरण',
        legalDesc: 'यह ऐप केवल सूचनात्मक उद्देश्यों के लिए है। हमेशा आधिकारिक परिवहन पोर्टल से सत्यापित करें।',
        dataTitle: 'डेटा स्रोत',
      }
    },
    bn: {
      translation: {
        appName: 'চালান', appSub: 'ভারতের ট্রাফিক জরিমানা ক্যালকুলেটর',
        chooseLanguage: 'আপনার ভাষা বেছে নিন', getStarted: 'শুরু করুন',
        continueGuest: 'অতিথি হিসেবে চালিয়ে যান',
        signIn: 'সাইন ইন করুন', signInSub: 'আপনার ইতিহাস ও বুকমার্ক সংরক্ষণ করুন',
        continueGoogle: 'Google দিয়ে চালিয়ে যান',
        location: 'অবস্থান', searchPlaceholder: 'লঙ্ঘন বা ধারা খুঁজুন…',
        offlineReady: 'অফলাইন মোড প্রস্তুত', offlineSub: 'WB, MH, DL নিয়ম সংরক্ষিত।',
        quickAccess: 'দ্রুত অ্যাক্সেস', calculator: 'চালান ক্যালকুলেটর',
        calculatorSub: 'যেকোনো লঙ্ঘনের জরিমানা দেখুন', chatbot: 'AI চ্যাটবট জিজ্ঞেস করুন',
        chatbotSub: 'MV আইন সম্পর্কে প্রশ্ন', lawBrowser: 'আইন ব্রাউজার',
        lawBrowserSub: 'MV আইনের ধারাগুলি দেখুন',
        home: 'হোম', chat: 'চ্যাট', calc: 'ক্যালক', profile: 'প্রোফাইল',
        calcTitle: 'চালান ক্যালকুলেটর', state: 'রাজ্য', vehicleType: 'যানবাহনের ধরন',
        violation: 'লঙ্ঘন', offenceType: 'অপরাধের ধরন',
        firstOffence: 'প্রথম অপরাধ', repeatOffence: 'পুনরায় অপরাধ',
        fineAmount: 'জরিমানার পরিমাণ', payDispute: 'পরিশোধ / বিরোধ', shareResult: 'ফলাফল শেয়ার করুন',
        chatTitle: 'AI সহকারী', chatPlaceholder: 'যেকোনো ট্রাফিক নিয়ম জিজ্ঞেস করুন…',
        chatWelcome: 'হ্যালো! ট্রাফিক জরিমানা, MV আইন বা চালান সম্পর্কে যেকোনো প্রশ্ন করুন।',
        lawTitle: 'আইন ব্রাউজার', filterSections: 'ধারাগুলি ফিল্টার করুন…',
        mvAct: 'মোটর যানবাহন আইন ১৯৮৮', stateAmend: 'রাজ্য সংশোধনী',
        stateAmendSub: 'WB · MH · DL ওভাররাইড', stateAmendDesc: 'রাজ্য-নির্দিষ্ট জরিমানা',
        profileTitle: 'আমার প্রোফাইল', vehicle: 'যানবাহন', account: 'অ্যাকাউন্ট',
        queryHistory: 'অনুসন্ধান ইতিহাস', querySub: 'পূর্ববর্তী অনুসন্ধান ও বুকমার্ক',
        savedResults: 'সংরক্ষিত ফলাফল', savedSub: 'বুকমার্ক জরিমানা ও ধারা',
        settings: 'সেটিংস', settingsSub: 'বিজ্ঞপ্তি · থিম · রাজ্য',
        about: 'সম্পর্কে', aboutSub: 'আইনি নোট · ডেটা উৎস',
        settingsTitle: 'সেটিংস', preferences: 'পছন্দসমূহ',
        notifications: 'বিজ্ঞপ্তি', notifSub: 'জরিমানা সতর্কতা ও আইন আপডেট',
        defaultState: 'ডিফল্ট রাজ্য', darkTheme: 'ডার্ক থিম', darkSub: 'সর্বদা চালু',
        offlineCache: 'অফলাইন ক্যাশ', offlineCacheSub: 'WB, MH, DL সংরক্ষিত',
        payTitle: 'পরিশোধ / বিরোধ', payOnline: 'অনলাইনে পরিশোধ করুন',
        payDesc: 'পরিবহন পোর্টালে আপনার চালান পরিশোধ করুন — ভারত সরকারের আধিকারিক পরিষেবা।',
        openParivahan: 'পরিবহন পোর্টাল খুলুন ↗', howDispute: 'কীভাবে বিরোধ করবেন',
        penaltyDeadline: 'জরিমানার সময়সীমা',
        penaltyDesc: 'কোর্ট সমন এড়াতে ৬০ দিনের মধ্যে পরিশোধ করুন।',
        aboutTitle: 'সম্পর্কে', legalTitle: 'আইনি দাবিত্যাগ',
        legalDesc: 'এই অ্যাপটি শুধুমাত্র তথ্যমূলক উদ্দেশ্যে। সর্বদা আধিকারিক পরিবহন পোর্টালে যাচাই করুন।',
        dataTitle: 'ডেটা উৎস',
      }
    }
  }
})

export default i18n