"use client";
import React, { createContext, useContext, useState } from "react";

// Create a context
const LanguageContext = createContext();

// Translations object
const translations = {
  en: {
    navbar: {
      home: "Home",
      about: "About",
      contact: "Contact",
      services: "Services",
      gallery: "Gallery",
      blog: "Blog",
    },
    about: {
      title: "Discover the Art of Beauty",
      welcome:
        "Welcome to Stylice Salon – where beauty knows no boundaries. Our mission is to bring out the best in you through personalized care, expert techniques, and luxurious experiences. Step into a world designed to inspire and empower you, with services tailored for every individual.",
      services:
        "From trendsetting haircuts to revitalizing spa treatments, each service at Stylice Salon is crafted with love and precision. We use only the finest products and cutting-edge techniques to deliver an experience that's truly transformative. Let our skilled team elevate your beauty routine to new heights.",
      exploreServices: "Explore Our Services",
      experience: "Experience the Elegance of Style",
      passions:
        "At Stylice Salon, we know beauty is an art – and we’re passionate about creating a masterpiece for each of our clients. Visit us today and let us transform your look and uplift your spirit.",
    },
    contact: {
      title: "Get in Touch", // Translate title
      description:
        "We'd love to hear from you! Whether you have a question about our products, pricing, or anything else, our team is here to help.", // Translate description
      visitUs: "Visit Us", // Translate "Visit Us"
      location: "Shakhbout City - MFW-8 - Abu Dhabi", // Translate location
      callUs: "Call Us", // Translate "Call Us"
      phoneNumber: "+971 54 269 2267", // Translate phone number
      whatsapp: "WhatsApp", // Translate "WhatsApp"
      whatsappNumber: "+971 54 269 2267", // Translate WhatsApp number
    },

    en: {
      "Hair & Beard": "Hair & Beard",
      "Hair Cutting": "Hair Cutting",
      "30 AED": "30 AED",
      "Beard Setting": "Beard Setting",
      "25 AED": "25 AED",
      "Beard Shaving": "Beard Shaving",
      "40 AED": "40 AED",
      "Beard Scissor": "Beard Scissor",
      "50 AED": "50 AED",
      "Beard Coloring": "Beard Coloring",
      "Special Beard Coloring": "Special Beard Coloring",
      "Face Threading": "Face Threading",
      "Hair Washing": "Hair Washing",
      "10 AED": "10 AED",
      "Hair Washing & Styling": "Hair Washing & Styling",
      "Head Massage": "Head Massage",
      "Hair Treatment": "Hair Treatment",
      "Hair Treatment With Steam": "Hair Treatment With Steam",
      Facial: "Facial",
      "Golden Facial": "Golden Facial",
      "Golden Facial with Steam": "Golden Facial with Steam",
      "Diamond Facial": "Diamond Facial",
      "Diamond Facial with Steam": "Diamond Facial with Steam",
      "Pearl Facial": "Pearl Facial",
      "Pearl Facial with Steam": "Pearl Facial with Steam",
      "Face Mask": "Face Mask",
      "Black Mask": "Black Mask",
      "Charcoal Facial": "Charcoal Facial",
      "Charcoal Facial with Steam": "Charcoal Facial with Steam",
      Kids: "Kids",
      "Boy Hair Cutting": "Boy Hair Cutting",
      "Girl Hair Cutting": "Girl Hair Cutting",
      "Kids Pedicure": "Kids Pedicure",
      "Kids Medi Cure": "Kids Medi Cure",
      Henna: "Henna",
      "Keratine Treatment": "Keratine Treatment",
      "350/700 AED": "350/700 AED",
      "Bangs Hair": "Bangs Hair",
      "Menicure Color": "Menicure Color",
      "Blow-Dry": "Blow-Dry",
      "Hot Oil Treatment": "Hot Oil Treatment",
      "Wash & Blower": "Wash & Blower",
      "Brazilian Keratin": "Brazilian Keratin",
      "Short Hair": "Short Hair",
      "Long Hair": "Long Hair",
      "Medium Hair": "Medium Hair",
      "Nail Care": "Nail Care",
      Manicure: "Manicure",
      Pedicure: "Pedicure",
      "Foot Massage": "Foot Massage",
      "Foot Scrub": "Foot Scrub",
      Massages: "Massages",
      "Thai Massage": "Thai Massage",
      "Relax Massage": "Relax Massage",
      Waxing: "Waxing",
      "Under Arm": "Under Arm",
      "Chest & Back": "Chest & Back",
      "Full Body": "Full Body",
      "Up & Down": "Up & Down",
      Front: "Front",
      Back: "Back",
      Bikini: "Bikini",
      Legs: "Legs",
      Shaving: "Shaving",
      "Monthly Massage Packages": "Monthly Massage Packages",
      "5 Relaxation Message Sessions": "5 Relaxation Message Sessions",
      "5 Sports Massage Sessions": "5 Sports Massage Sessions",
      "5 Therapeutic Massage Sessions": "5 Therapeutic Massage Sessions",
      Spa: "Spa",
      "Normal Moroccan Bath": "Normal Moroccan Bath",
      "Herbal Bath": "Herbal Bath",
      "Bath, Oils, Aromatic": "Bath, Oils, Aromatic",
      "Bride Bath": "Bride Bath",
      "Moroccan Bath with Herbal": "Moroccan Bath with Herbal",
      "Moroccan Bath with Odoi & Mahlab": "Moroccan Bath with Odoi & Mahlab",
      "Turkish Bath": "Turkish Bath",
      "Energy Bath": "Energy Bath",
      "Moroccan Bath with Massage": "Moroccan Bath with Massage",
      "Package Services": "Package Services",
      "Full Day Beauty Package": "Full Day Beauty Package",
      "Hair & Nail Package": "Hair & Nail Package",
      "Elevate Your Beauty Experience": "Elevate Your Beauty Experience",
      At: "At",
      "Stylice Salon": "Stylice Salon",
      "we strive to provide you with an unforgettable experience.":
        "we strive to provide you with an unforgettable experience.",
      "Salon Services Menu": "Salon Services Menu",
      "we strive to provide you with an unforgettable experience.":
        "we strive to provide you with an unforgettable experience.",
    },
    footer: {
      stylicleSalon: "Stylicle Salon",
      experienceLuxury:
        "Experience luxury salon services that enhance your natural beauty.",
      ourServices: "Our Services",
      hairStyling: "Hair Styling",
      makeup: "Makeup",
      facials: "Facials & Skincare",
      manicure: "Manicure & Pedicure",
      stayUpdated: "Stay Updated",
      subscribeToReceive:
        "Subscribe to receive exclusive offers and style tips from Stylicle.",
      yourEmail: "Your Email",
      subscribe: "Subscribe",
      rightsReserved: "All rights reserved.",
    },
    // Add other English translations as needed
  },
  ar: {
    navbar: {
      home: "الرئيسية", // "Home"
      about: "نبذة عنا", // "About"
      contact: "اتصل بنا", // "Contact"
      services: "الخدمات", // "Services"
      gallery: "معرض", // "Gallery"
      blog: "مدونة", // "Blog"
    },
    about: {
      title: "اكتشف فن الجمال", // "Discover the Art of Beauty"
      welcome:
        "مرحباً بك في صالون ستايلس – حيث لا تعرف الجمال حدوداً. مهمتنا هي إبراز أفضل ما لديك من خلال الرعاية الشخصية، وتقنيات الخبراء، وتجارب الفخامة. ادخل إلى عالم مصمم لإلهامك وتمكينك، مع خدمات مصممة لكل فرد.",
      services:
        "من قصات الشعر الرائجة إلى علاجات السبا المنعشة، كل خدمة في صالون ستايلس مُصممة بحب ودقة. نحن نستخدم فقط أفضل المنتجات والتقنيات الحديثة لتقديم تجربة تحوّلية حقًا. دع فريقنا الماهر يرفع روتين جمالك إلى آفاق جديدة.",
      exploreServices: "استكشف خدماتنا", // "Explore Our Services"
      experience: "استمتع بأناقة الأسلوب", // "Experience the Elegance of Style"
      passions:
        "في صالون ستايلس، نعرف أن الجمال فن - ونحن متحمسون لإنشاء تحفة لكل من عملائنا. قم بزيارتنا اليوم ودعنا نحول مظهرك ونرفع روحك.",
    },
    contact: {
      title: "تواصل معنا", // "Get in Touch"
      description:
        "يسعدنا سماع آرائكم! سواء كانت لديك أسئلة حول منتجاتنا، أو الأسعار، أو أي شيء آخر، فإن فريقنا هنا لمساعدتك.", // "We'd love to hear from you! Whether you have a question about our products, pricing, or anything else, our team is here to help."
      visitUs: "قم بزيارتنا", // "Visit Us"
      location: "مدينة شخبوط - MFW-8 - أبوظبي", // "Shakhbout City - MFW-8 - Abu Dhabi"
      callUs: "اتصل بنا", // "Call Us"
      phoneNumber: "+971 54 269 2267", // "+971 54 269 2267"
      whatsapp: "واتساب", // "WhatsApp"
      whatsappNumber: "+971 54 269 2267", // "+971 54 269 2267"
    },
    "Hair & Beard": "شعر ولحية",
    "Hair Cutting": "قص الشعر",
    "30 AED": "30 درهم",
    "Beard Setting": "تحديد اللحية",
    "25 AED": "25 درهم",
    "Beard Shaving": "حلاقة اللحية",
    "40 AED": "40 درهم",
    "Beard Scissor": "قص اللحية بالمقص",
    "50 AED": "50 درهم",
    "Beard Coloring": "صبغ اللحية",
    "Special Beard Coloring": "صبغ اللحية الخاص",
    "Beard Waxing": "إزالة شعر اللحية بالشمع",

    "Face Threading": "خيط الوجه",
    "20 AED": "20 درهم",
    "Hair Washing": "غسل الشعر",
    "10 AED": "10 درهم",
    "Hair Washing & Styling": "غسل الشعر وتصفيفه",
    "Head Massage": "تدليك الرأس",
    "Hair Treatment": "علاج الشعر",
    "Hair Treatment With Steam": "علاج الشعر بالبخار",
    "60 AED": "60 درهم",
    Facial: "علاج للوجه",
    "Golden Facial": "علاج وجه ذهبي",
    "Golden Facial with Steam": "علاج وجه ذهبي بالبخار",
    "70 AED": "70 درهم",
    "55 AED": "55 درهم",
    "75 AED": "75 درهم",
    "100 AED": "100 درهم",
    "80 AED": "80 درهم",
    "200 AED": "200 درهم",
    "350 AED": "350 درهم",
    "300 AED": "300 درهم",
    "150 AED": "150 درهم",
    "250 AED": "250 درهم",
    "600 AED": "600 درهم",
    "500 AED": "500 درهم",
    "750 AED": "750 درهم",
    "120 AED": "120 درهم",
    "50/100 AED": "50/100 درهم",
    "Diamond Facial": "علاج وجه ماسي",
    "Diamond Facial with Steam": "علاج وجه ماسي بالبخار",
    "Pearl Facial": "علاج وجه لؤلؤي",
    "Pearl Facial with Steam": "علاج وجه لؤلؤي بالبخار",
    "Face Mask": "قناع الوجه",
    "Black Mask": "قناع أسود",
    "Charcoal Facial": "علاج وجه بالفحم",
    "Charcoal Facial with Steam": "علاج وجه بالفحم بالبخار",
    Kids: "الأطفال",
    "Boy Hair Cutting": "قص شعر الأولاد",
    "Girl Hair Cutting": "قص شعر البنات",
    "Kids Pedicure": "باديكير للأطفال",
    "Kids Medi Cure": "ميدي كير للأطفال",
    Henna: "حنة",
    "Keratine Treatment": "علاج الكيراتين",
    "350/700 AED": "350/700 درهم",
    "Bangs Hair": "قص الغرة",
    "Menicure Color": "لون المانيكير",
    "Blow-Dry": "تصفيف الشعر",
    "Hot Oil Treatment": "علاج الزيت الساخن",
    "Wash & Blower": "غسل الشعر وتصفيفه",
    "Brazilian Keratin": "كيراتين برازيلي",
    "Short Hair": "شعر قصير",
    "Long Hair": "شعر طويل",
    "Medium Hair": "شعر متوسط",
    "Nail Care": "العناية بالأظافر",
    Manicure: "مانيكيور",
    Pedicure: "باديكير",
    "Foot Massage": "تدليك القدمين",
    "Foot Scrub": "تقشير القدمين",
    Massages: "تدليك",
    "Thai Massage": "تدليك تايلندي",
    "Relax Massage": "تدليك استرخائي",
    Waxing: "إزالة الشعر بالشمع",
    "Under Arm": "تحت الإبط",
    "Chest & Back": "صدر وظهر",
    "Full Body": "الجسم بالكامل",
    "Up & Down": "أعلى وأسفل",
    Front: "أمام",
    Back: "خلف",
    Bikini: "بيكيني",
    Legs: "الساقين",
    Shaving: "حلاقة",
    "Monthly Massage Packages": "باكجات تدليك شهرية",
    "5 Relaxation Message Sessions": "5 جلسات تدليك استرخائي",
    "5 Sports Massage Sessions": "5 جلسات تدليك رياضي",
    "5 Therapeutic Massage Sessions": "5 جلسات تدليك علاجية",
    Spa: "منتجع صحي",
    "Normal Moroccan Bath": "حمام مغربي عادي",
    "Herbal Bath": "حمام بالأعشاب",
    "Bath, Oils, Aromatic": "حمام وزيوت عطرية",
    "Bride Bath": "حمام العروس",
    "Moroccan Bath with Herbal": "حمام مغربي بالأعشاب",
    "Moroccan Bath with Odoi & Mahlab": "حمام مغربي بأوداي ومهلاب",
    "Turkish Bath": "حمام تركي",
    "Energy Bath": "حمام الطاقة",
    "Moroccan Bath with Massage": "حمام مغربي مع تدليك",
    "Package Services": "خدمات باكيج",
    "Full Day Beauty Package": "باكيج جمال ليوم كامل",
    "Hair & Nail Package": "باكيج شعر وأظافر",
    "Elevate Your Beauty Experience": "ارتقِ بتجربتك الجمالية",
    At: "في",
    "Stylice Salon": "صالون ستايلس",
    "we strive to provide you with an unforgettable experience.":
      "نسعى لتوفير تجربة لا تنسى لك.",
    "Salon Services Menu": "قائمة خدمات الصالون",
    "we strive to provide you with an unforgettable experience.":
      "نسعى لتوفير تجربة لا تنسى لك.",

    "Our Team": "فر يقنا",
    // Add other Arabic translations as needed
  },
  footer: {
    StylicleSalon: "صالون ستايليكل",
    experienceLuxury: "استمتع بخدمات صالون فاخرة تعزز جمالك الطبيعي.",
    ourServices: "خدماتنا",
    hairStyling: "تصفيف الشعر",
    makeup: "المكياج",
    facials: "العناية بالبشرة والوجه",
    manicure: "العناية بالأظافر",
    stayUpdated: "ابق على اطلاع",
    subscribeToReceive: "اشترك لتلقي عروض حصرية ونصائح من صالون ستايليكل.",
    yourEmail: "بريدك الإلكتروني",
    subscribe: "اشترك",
    rightsReserved: "جميع الحقوق محفوظة.",
  },

  footer: {
    stylicleSalon: "صالون ستايليكل",
    experienceLuxury: "استمتع بخدمات صالون فاخرة تعزز جمالك الطبيعي.",
    ourServices: "خدماتنا",
    hairStyling: "تصفيف الشعر",
    makeup: "المكياج",
    facials: "العناية بالبشرة والوجه",
    manicure: "العناية بالأظافر",
    stayUpdated: "ابق على اطلاع",
    subscribeToReceive: "اشترك لتلقي عروض حصرية ونصائح من صالون ستايليكل.",
    yourEmail: "بريدك الإلكتروني",
    subscribe: "اشترك",
    rightsReserved: "جميع الحقوق محفوظة.",
  },
  // Add more languages as needed
};

// Provider component
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en"); // Default to English

  const translate = (key) => {
    const keys = key.split("."); // Split key for nested translations
    let translation = translations[language];

    keys.forEach((k) => {
      translation = translation ? translation[k] : null; // Navigate through the keys
    });

    return translation || key; // Return translation or the key if not found
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translate }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook for using the language context
export const useLanguage = () => useContext(LanguageContext);
