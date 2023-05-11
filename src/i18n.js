import i18n from "i18next";
import {React} from 'react'
import {useSelector} from 'react-redux'
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: {
        translation: {
          details:"Details",
          booking: "Book",
          BookNow:"Book Now",
          highline: "Highline",
          price: "Price",
          permonth: "/ month",
          deposit: "deposit",
          automatic: "automatic",
          brand: "Brand",
          model: "Model",
          category: "Category",
          kilometer: "Kilometers",
          transmissiontype: "Automatic",
          bodytype: "Body Type",
          condition: "Condition",
          paymentoption: "Payment Options",
        },
      },
      ar: {
        translation: {
          details:"تفاصيل",
    booking:"الحجز",
    BookNow:"الحجز",
    
          brand: "ماركة",
          highline: "الفئة",
          price: "السعر",
          permonth: "القسط الشهري",
          deposit: "مقدم",
          automatic: "اتوماتيك",
          brand: "ماركة",
          model: "موديل",
          year: "سنة",
          category: "فئة",
          kilometer: "كيلومتر",
          transmissiontype: "ناقل الحركه",
          bodytype: "نوع العربية",
          condition: "حالة السيارة",
          paymentoption: "خيار الدفع",
        },
      },
    },
    lng: 'en', // if you're using a language detector, do not define the lng option
    fallbackLng: 'en',

    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });
