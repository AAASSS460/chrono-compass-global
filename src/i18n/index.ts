import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Translation resources
const resources = {
  en: {
    translation: {
      // Navigation
      'nav.dateConverter': 'Date Converter',
      'nav.ageCalculator': 'Age Calculator',
      'nav.language': 'Language',
      
      // Common
      'common.convert': 'Convert',
      'common.calculate': 'Calculate',
      'common.reset': 'Reset',
      'common.result': 'Result',
      'common.day': 'Day',
      'common.month': 'Month',
      'common.year': 'Year',
      'common.today': 'Today',
      
      // Date Converter
      'dateConverter.title': 'Hijri to Gregorian Date Converter',
      'dateConverter.subtitle': 'Convert dates between Hijri and Gregorian calendars easily',
      'dateConverter.hijriDate': 'Hijri Date',
      'dateConverter.gregorianDate': 'Gregorian Date',
      'dateConverter.enterHijriDate': 'Enter Hijri Date',
      'dateConverter.enterGregorianDate': 'Enter Gregorian Date',
      'dateConverter.convertToGregorian': 'Convert to Gregorian',
      'dateConverter.convertToHijri': 'Convert to Hijri',
      
      // Age Calculator
      'ageCalculator.title': 'Age Calculator',
      'ageCalculator.subtitle': 'Calculate your exact age in years, months, and days',
      'ageCalculator.birthDate': 'Birth Date',
      'ageCalculator.currentDate': 'Current Date',
      'ageCalculator.enterBirthDate': 'Enter your birth date',
      'ageCalculator.yourAge': 'Your Age',
      'ageCalculator.years': 'Years',
      'ageCalculator.months': 'Months',
      'ageCalculator.days': 'Days',
      'ageCalculator.totalDays': 'Total Days',
      'ageCalculator.totalMonths': 'Total Months',
      'ageCalculator.nextBirthday': 'Next Birthday',
      'ageCalculator.daysUntilBirthday': 'Days until birthday',
    }
  },
  ar: {
    translation: {
      // Navigation
      'nav.dateConverter': 'محول التاريخ',
      'nav.ageCalculator': 'حاسبة العمر',
      'nav.language': 'اللغة',
      
      // Common
      'common.convert': 'تحويل',
      'common.calculate': 'احسب',
      'common.reset': 'إعادة تعيين',
      'common.result': 'النتيجة',
      'common.day': 'يوم',
      'common.month': 'شهر',
      'common.year': 'سنة',
      'common.today': 'اليوم',
      
      // Date Converter
      'dateConverter.title': 'محول التاريخ من هجري إلى ميلادي',
      'dateConverter.subtitle': 'تحويل التواريخ بين التقويم الهجري والميلادي بسهولة',
      'dateConverter.hijriDate': 'التاريخ الهجري',
      'dateConverter.gregorianDate': 'التاريخ الميلادي',
      'dateConverter.enterHijriDate': 'أدخل التاريخ الهجري',
      'dateConverter.enterGregorianDate': 'أدخل التاريخ الميلادي',
      'dateConverter.convertToGregorian': 'تحويل إلى ميلادي',
      'dateConverter.convertToHijri': 'تحويل إلى هجري',
      
      // Age Calculator
      'ageCalculator.title': 'حاسبة العمر',
      'ageCalculator.subtitle': 'احسب عمرك بالضبط بالسنوات والشهور والأيام',
      'ageCalculator.birthDate': 'تاريخ الميلاد',
      'ageCalculator.currentDate': 'التاريخ الحالي',
      'ageCalculator.enterBirthDate': 'أدخل تاريخ ميلادك',
      'ageCalculator.yourAge': 'عمرك',
      'ageCalculator.years': 'سنة',
      'ageCalculator.months': 'شهر',
      'ageCalculator.days': 'يوم',
      'ageCalculator.totalDays': 'إجمالي الأيام',
      'ageCalculator.totalMonths': 'إجمالي الشهور',
      'ageCalculator.nextBirthday': 'عيد الميلاد القادم',
      'ageCalculator.daysUntilBirthday': 'أيام حتى عيد الميلاد',
    }
  },
  fr: {
    translation: {
      // Navigation
      'nav.dateConverter': 'Convertisseur de Date',
      'nav.ageCalculator': 'Calculateur d\'Âge',
      'nav.language': 'Langue',
      
      // Common
      'common.convert': 'Convertir',
      'common.calculate': 'Calculer',
      'common.reset': 'Réinitialiser',
      'common.result': 'Résultat',
      'common.day': 'Jour',
      'common.month': 'Mois',
      'common.year': 'Année',
      'common.today': 'Aujourd\'hui',
      
      // Date Converter
      'dateConverter.title': 'Convertisseur de Date Hijri vers Grégorien',
      'dateConverter.subtitle': 'Convertissez facilement les dates entre les calendriers hijri et grégorien',
      'dateConverter.hijriDate': 'Date Hijri',
      'dateConverter.gregorianDate': 'Date Grégorienne',
      'dateConverter.enterHijriDate': 'Entrez la date hijri',
      'dateConverter.enterGregorianDate': 'Entrez la date grégorienne',
      'dateConverter.convertToGregorian': 'Convertir en Grégorien',
      'dateConverter.convertToHijri': 'Convertir en Hijri',
      
      // Age Calculator
      'ageCalculator.title': 'Calculateur d\'Âge',
      'ageCalculator.subtitle': 'Calculez votre âge exact en années, mois et jours',
      'ageCalculator.birthDate': 'Date de Naissance',
      'ageCalculator.currentDate': 'Date Actuelle',
      'ageCalculator.enterBirthDate': 'Entrez votre date de naissance',
      'ageCalculator.yourAge': 'Votre Âge',
      'ageCalculator.years': 'Années',
      'ageCalculator.months': 'Mois',
      'ageCalculator.days': 'Jours',
      'ageCalculator.totalDays': 'Total des Jours',
      'ageCalculator.totalMonths': 'Total des Mois',
      'ageCalculator.nextBirthday': 'Prochain Anniversaire',
      'ageCalculator.daysUntilBirthday': 'Jours jusqu\'à l\'anniversaire',
    }
  },
  es: {
    translation: {
      // Navigation
      'nav.dateConverter': 'Convertidor de Fecha',
      'nav.ageCalculator': 'Calculadora de Edad',
      'nav.language': 'Idioma',
      
      // Common
      'common.convert': 'Convertir',
      'common.calculate': 'Calcular',
      'common.reset': 'Reiniciar',
      'common.result': 'Resultado',
      'common.day': 'Día',
      'common.month': 'Mes',
      'common.year': 'Año',
      'common.today': 'Hoy',
      
      // Date Converter
      'dateConverter.title': 'Convertidor de Fecha Hijri a Gregoriano',
      'dateConverter.subtitle': 'Convierte fácilmente fechas entre calendarios hijri y gregoriano',
      'dateConverter.hijriDate': 'Fecha Hijri',
      'dateConverter.gregorianDate': 'Fecha Gregoriana',
      'dateConverter.enterHijriDate': 'Ingresa la fecha hijri',
      'dateConverter.enterGregorianDate': 'Ingresa la fecha gregoriana',
      'dateConverter.convertToGregorian': 'Convertir a Gregoriano',
      'dateConverter.convertToHijri': 'Convertir a Hijri',
      
      // Age Calculator
      'ageCalculator.title': 'Calculadora de Edad',
      'ageCalculator.subtitle': 'Calcula tu edad exacta en años, meses y días',
      'ageCalculator.birthDate': 'Fecha de Nacimiento',
      'ageCalculator.currentDate': 'Fecha Actual',
      'ageCalculator.enterBirthDate': 'Ingresa tu fecha de nacimiento',
      'ageCalculator.yourAge': 'Tu Edad',
      'ageCalculator.years': 'Años',
      'ageCalculator.months': 'Meses',
      'ageCalculator.days': 'Días',
      'ageCalculator.totalDays': 'Total de Días',
      'ageCalculator.totalMonths': 'Total de Meses',
      'ageCalculator.nextBirthday': 'Próximo Cumpleaños',
      'ageCalculator.daysUntilBirthday': 'Días hasta el cumpleaños',
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage']
    }
  });

export default i18n;