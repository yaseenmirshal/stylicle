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
      blog: "Price List",
    },

    
   
    about: {
      title: "Discover the Art of Beauty",
      welcome:
        "Welcome to Stylice Salon – where beauty knows no boundaries. Since 2021, our mission has been to bring out the best in you through personalized care, expert techniques, and luxurious experiences. Step into a world designed to inspire and empower you, with services tailored for every individual.",
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
      visitUs: "Our Locations", // Translate "Visit Us"
      location: "Shakhbout City - MFW-8 - Abu Dhabi", // Translate location
      location2: "Naseem Al Barr St - Shakhbout City - MFW-10 - Abu Dhabi",
      callUs: "Call Us", // Translate "Call Us"
      phoneNumber: "+971 54 269 2267", // Translate phone number
      whatsapp: "WhatsApp", // Translate "WhatsApp"
      whatsappNumber: "+971 54 269 2267", // Translate WhatsApp number
      seemore:"See More"
    },

    en: {

      "Hydra Facial Treatment":"Hydra Facial Treatment",
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
      "Beard Waxing":"Beard Waxing",
      "Hair Coloring":"Hair Coloring",
      "50 AED":"50 AED",
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
      "At": "At",
      "Stylice Salon": "Stylice Salon",
      "we strive to provide you with an unforgettable experience.":
        "we strive to provide you with an unforgettable experience.",
      "Salon Services Menu": "Salon Services Menu",
     
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
      blog: "منو", // "Blog"
    },
    about: {
      title: "اكتشف فن الجمال", // "Discover the Art of Beauty"
      welcome:
        "مرحبًا بكم في صالون ستايلس – حيث لا حدود للجمال. منذ عام 2021، كانت مهمتنا هي إبراز أفضل ما فيكِ من خلال العناية الشخصية، والتقنيات الاحترافية، والتجارب الفاخرة. ادخلي إلى عالم مصمم ليُلهمكِ ويُمكّنكِ، مع خدمات مخصصة لكل فرد.",
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
      location2: "نسيم البر - مدينة شخبوط - MFW-10 - أبوظبي",
      callUs: "اتصل بنا", // "Call Us"
      phoneNumber: "+971 54 269 2267", // "+971 54 269 2267"
      whatsapp: "واتساب", // "WhatsApp"
      whatsappNumber: "+971 54 269 2267", // "+971 54 269 2267"
    },
    
    "Hair & Beard": "شعر ولحية",
    "Hair Cutting": "قص الشعر",
    
    "Beard Setting": "تحديد اللحية",
    
    "Beard Shaving": "حلاقة اللحية",
    
    "Beard Scissor": "قص اللحية بالمقص",
    
    "Beard Coloring": "صبغ اللحية",
    "Special Beard Coloring": "صبغ اللحية الخاص",
    "Hair Coloring" : "صبغ الشعر",
    
    "Beard Waxing": "إزالة شعر اللحية بالشمع",
    "Face Threading": "خيط الوجه",
    
    "Hair Washing": "غسل الشعر",
   
    "Arm & Bikini Shave":"حلاقة الذراعين والبيكيني",
    "Arm & Bikini Wax":"شمع الأذرع والبكيني",
    "Manicure, Pedicure & Scrub":"مانيكير، باديكير وتقشير",

    "Arm & Bikini Shave +60 mints Massage":"حلاقة الذراع والبكيني مساج لمدة60+ دقيقة بالنعناع",

    "Manicure, Pedicure & Scrub +30 mints Massage (Oil/Cream)":"مانيكير، باديكير وتقشير +30 دقيقة تدليك (زيت/كريم)",
    "Full Body Shave & 30 mints Massage (Oil/Cream)":"حلاقة كاملة للجسم و30 دقيقة تدليك (زيت/كريم)",

    "Full Body Wax & 30 mints Massage (Oil/Cream)":" واكسل لكمل الجسم & تدليك لمدة 30 دقيقة (زيت/كريم)",
    
    "Pedicure, Manicure & 30 mints Massage (Oil/Cream)":"باديكير، مانيكير & تدليك لمدة 30 دقيقة (زيت/كريم)",
    "Pedicure, Manicure & Normal Moroccan Bath":"باديكير، مانيكير وحمام مغربي عادي",
    "Pedicure, Manicure, 30 mints Masssage & Normal Moroccan Bath":"باديكير، مانيكير، مساج لمدة 30 دقيقة وحمام مغربي عادي",


    "Thai Massage 30 mints":"مساج تايلندي 30 دقيقة",
    "Thai Massage 60 mints":"مساج تايلندي 60 دقيقة",
    "Relax Massage 30 mints":"استرخاء مساج 30 دقيقة",
    "Relax Massage 60 mints":"استرخاء مساج 60 دقيقة",
    "Sports Massage 30 mints":"تدليك رياضي 30 دقيقة",
    "Sports Massage 60 mints":"تدليك رياضي 60 دقيقة",
    "Therapeutic Massage 30 mints":"تدليك علاجي 30 دقيقة",
    "Therapeutic Massage 60 mints":"تدليك علاجي 60 دقيقة",
    "Hot Stone Massage 30 mints":"مساج الحجارة الساخنة 30 دقيقة",
    "Hot Stone Massage 60 mints":"مساج الحجارة الساخنة 60 دقيقة",
    "Fire Towel Massage 30 mints":"تدليك المنشفة بالنار 30 دقيقة ",
    "Fire Towel Massage 60 mints":"تدليك المنشفة بالنار 60 دقيقة",
    "Cassat Fire Massage 30 mints":"تدليك كاسات النار 30 دقيقة",
    "Cassat Fire Massage 60 mints":"تدليك كاسات النار 60 دقيقة",
    "Wood Massage 30 mints":"مساج الخشب 30 دقيقة",
    "Wood Massage 60 mints":"مساج الخشب 60 دقيقة",


    "Hydra Facial Treatment":"هيدرا فيشل تريتمينت",
    "Hydra Facial Normal":"هيدرا فيشل عادي",
    "Hydra Facial Moonster":"هيدرا فيشل مونستر",
    "Hydra Facial Sea Soul":"هايدرا فيشل سي سول",
    "Hydra Facial O3+":"هايدرا فيشل O3+",
    "Orange Galvanic":"برتقالي جلفاني",
    "Gold Galvanic":"ذهب جلفاني",
    "Hydra Cleanup":"تنظيف هيدرا",
    
   

    "Hair Washing & Styling": "غسل الشعر وتصفيفه",
    "Head Massage": "تدليك الرأس",
    "Hair Treatment": "علاج الشعر",
    "Hair Treatment With Steam": "علاج الشعر بالبخار",
    
    Facial: "علاج للوجه",
    "Golden Facial": "فيشل ذهبي",
    "Golden Facial with Steam": "فيشل ذهبي بالبخار",


    "70 AED": "٧٠ درهم",
    "55 AED": "٥٥ درهم",
    "75 AED": "٧٥ درهم",
    "100 AED": "١٠٠ درهم",
    "80 AED": "٨٠ درهم",
    "200 AED": "٢٠٠ درهم",
    "350 AED": "٣٥٠ درهم",
    "300 AED": "٣٠٠ درهم",
    "150 AED": "١٥٠ درهم",
    "250 AED": "٢٥٠ درهم",
    "600 AED": "٦٠٠ درهم",
    "500 AED": "٥٠٠ درهم",
    "750 AED": "٧٥٠ درهم",
    "120 AED": "١٢٠ درهم",
    "60 AED": "٦٠ درهم",
    "10 AED": "١٠ درهم",
    "110 AED": "١١٠ درهم",
    "180 AED": "١٨٠ درهم",
    "220 AED": "٢٢٠ درهم",
    "270 AED": "٢٧٠ درهم",
    "50/100 AED": "٥٠/١٠٠ درهم",
    "30 AED": "٣٠ درهم",
    "350/700 AED": "٣٥٠/٧٠٠ درهم",
    "20 AED": "٢٠ درهم",
    "50 AED": "٥٠ درهم",
    "40 AED": "٤٠ درهم",
    "25 AED": "٢٥ درهم",
    "30 AED": "٣٠ درهم",


    
    "Diamond Facial": " فيشل ماسي",
    "Diamond Facial with Steam": "فيشل ماسي بالبخار",
    "Pearl Facial": "فيشل لؤلؤي",
    "Pearl Facial with Steam": "فيشل لؤلؤي بالبخار",
    "Face Mask": "قناع الوجه",
    "Black Mask": "قناع أسود",
    "Charcoal Facial": "فيشل بالفحم",
    "Charcoal Facial with Steam": "فيشل بالفحم بالبخار",
    Kids: "الأطفال",
    "Boy Hair Cutting": "قص شعر الأولاد",
    "Girl Hair Cutting": "قص شعر البنات",
    "Kids Pedicure": "باديكير للأطفال",
    "Kids Medi Cure": "ميدي كير للأطفال",
    Henna: "حنة",
    "Keratine Treatment": "فيشل الكيراتين",
    
    "Bangs Hair": "قص الغرة",
    
    "Menicure Color": "لون المانيكير",
    "Blow-Dry": "تصفيف الشعر",
    "Hot Oil Treatment": "فيشل الزيت الساخن",
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
    "5 Relaxation Message Sessions": "٥ جلسات تدليك استرخائي",
    "5 Sports Massage Sessions": "٥ جلسات تدليك رياضي ",
    "5 Therapeutic Massage Sessions": "٥ جلسات تدليك علاجية",
    Spa: "منتجع صحي",
    "Normal Moroccan Bath": "حمام مغربي عادي",
    "Herbal Bath": "حمام بالأعشاب",
    "Bath, Oils, Aromatic": "حمام وزيوت عطرية",
    "Bride Bath": "خدمة العريس الشاملة",
    "Moroccan Bath with Herbal": "حمام مغربي بالأعشاب",
    "Moroccan Bath with Odoi & Mahlab":"الحمام المغربى بالعودى والمحلب",
    "Turkish Bath": "حمام تركي",
    "Energy Bath": "حمام الطاقة",
    "Moroccan Bath with Massage": "حمام مغربي مع تدليك",
    "Package Services": "خدمات باكيج",
    "Full Day Beauty Package": "باكيج جمال ليوم كامل",
    "Hair & Nail Package": "باكيج شعر وأظافر",
    "Elevate Your Beauty Experience": "ارتقِ بتجربتك الجمالية",
    "At": "في",
    "Stylice Salon": "صالون ستايلس",
   
    "Services Menu": "منو",
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
