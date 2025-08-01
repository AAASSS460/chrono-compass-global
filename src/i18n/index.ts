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
      'nav.morningEveningAdhkar': 'Morning & Evening Adhkar',
      'nav.prayerTimes': 'Prayer Times',
      'nav.fridayDuas': 'Friday Duas',
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
      
      // Morning & Evening Adhkar
      'adhkar.title': 'Morning & Evening Adhkar',
      'adhkar.subtitle': 'Daily Islamic remembrances for spiritual connection',
      'adhkar.morning': 'Morning Adhkar',
      'adhkar.evening': 'Evening Adhkar',
      'adhkar.morningTitle': 'Morning Remembrances (Adhkar Al-Sabah)',
      'adhkar.eveningTitle': 'Evening Remembrances (Adhkar Al-Masa)',
      
      // Prayer Times
      'prayer.title': 'Prayer Times',
      'prayer.subtitle': 'Get accurate prayer times based on your location',
      'prayer.fajr': 'Fajr',
      'prayer.dhuhr': 'Dhuhr',
      'prayer.asr': 'Asr',
      'prayer.maghrib': 'Maghrib',
      'prayer.isha': 'Isha',
      'prayer.location': 'Location',
      'prayer.loading': 'Loading prayer times...',
      'prayer.error': 'Error loading prayer times',
      'prayer.enableLocation': 'Enable Location',
      'prayer.today': 'Today\'s Prayer Times',
      
      // Friday Duas
      'fridayDuas.title': 'Friday Duas',
      'fridayDuas.subtitle': 'Special supplications for the blessed day of Friday',
      'fridayDuas.importance': 'Importance of Friday',
      'fridayDuas.supplications': 'Friday Supplications',
    }
  },
  ar: {
    translation: {
      // Navigation
      'nav.dateConverter': 'محول التاريخ',
      'nav.ageCalculator': 'حاسبة العمر',
      'nav.morningEveningAdhkar': 'أذكار الصباح والمساء',
      'nav.prayerTimes': 'مواقيت الصلاة',
      'nav.fridayDuas': 'أدعية يوم الجمعة',
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
      
      // Morning & Evening Adhkar
      'adhkar.title': 'أذكار الصباح والمساء',
      'adhkar.subtitle': 'الأذكار اليومية للتواصل الروحي',
      'adhkar.morning': 'أذكار الصباح',
      'adhkar.evening': 'أذكار المساء',
      'adhkar.morningTitle': 'أذكار الصباح',
      'adhkar.eveningTitle': 'أذكار المساء',
      
      // Prayer Times
      'prayer.title': 'مواقيت الصلاة',
      'prayer.subtitle': 'احصل على مواقيت الصلاة الدقيقة حسب موقعك',
      'prayer.fajr': 'الفجر',
      'prayer.dhuhr': 'الظهر',
      'prayer.asr': 'العصر',
      'prayer.maghrib': 'المغرب',
      'prayer.isha': 'العشاء',
      'prayer.location': 'الموقع',
      'prayer.loading': 'جاري تحميل مواقيت الصلاة...',
      'prayer.error': 'خطأ في تحميل مواقيت الصلاة',
      'prayer.enableLocation': 'تفعيل الموقع',
      'prayer.today': 'مواقيت صلاة اليوم',
      
      // Friday Duas
      'fridayDuas.title': 'أدعية يوم الجمعة',
      'fridayDuas.subtitle': 'الأدعية الخاصة ليوم الجمعة المبارك',
      'fridayDuas.importance': 'أهمية يوم الجمعة',
      'fridayDuas.supplications': 'أدعية الجمعة',
    }
  },
  fr: {
    translation: {
      // Navigation
      'nav.dateConverter': 'Convertisseur de Date',
      'nav.ageCalculator': 'Calculateur d\'Âge',
      'nav.morningEveningAdhkar': 'Adhkar Matin & Soir',
      'nav.prayerTimes': 'Heures de Prière',
      'nav.fridayDuas': 'Duas du Vendredi',
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
      
      // Morning & Evening Adhkar
      'adhkar.title': 'Adhkar Matin & Soir',
      'adhkar.subtitle': 'Rappels islamiques quotidiens pour la connexion spirituelle',
      'adhkar.morning': 'Adhkar du Matin',
      'adhkar.evening': 'Adhkar du Soir',
      'adhkar.morningTitle': 'Rappels du Matin',
      'adhkar.eveningTitle': 'Rappels du Soir',
      
      // Prayer Times
      'prayer.title': 'Heures de Prière',
      'prayer.subtitle': 'Obtenez les heures de prière précises selon votre localisation',
      'prayer.fajr': 'Fajr',
      'prayer.dhuhr': 'Dhuhr',
      'prayer.asr': 'Asr',
      'prayer.maghrib': 'Maghrib',
      'prayer.isha': 'Isha',
      'prayer.location': 'Localisation',
      'prayer.loading': 'Chargement des heures de prière...',
      'prayer.error': 'Erreur lors du chargement des heures de prière',
      'prayer.enableLocation': 'Activer la Localisation',
      'prayer.today': 'Heures de Prière d\'Aujourd\'hui',
      
      // Friday Duas
      'fridayDuas.title': 'Duas du Vendredi',
      'fridayDuas.subtitle': 'Supplications spéciales pour le jour béni du vendredi',
      'fridayDuas.importance': 'Importance du Vendredi',
      'fridayDuas.supplications': 'Supplications du Vendredi',
    }
  },
  es: {
    translation: {
      // Navigation
      'nav.dateConverter': 'Convertidor de Fecha',
      'nav.ageCalculator': 'Calculadora de Edad',
      'nav.morningEveningAdhkar': 'Adhkar Mañana y Tarde',
      'nav.prayerTimes': 'Horarios de Oración',
      'nav.fridayDuas': 'Duas del Viernes',
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
      
      // Morning & Evening Adhkar
      'adhkar.title': 'Adhkar Mañana y Tarde',
      'adhkar.subtitle': 'Recordatorios islámicos diarios para la conexión espiritual',
      'adhkar.morning': 'Adhkar de la Mañana',
      'adhkar.evening': 'Adhkar de la Tarde',
      'adhkar.morningTitle': 'Recordatorios de la Mañana',
      'adhkar.eveningTitle': 'Recordatorios de la Tarde',
      
      // Prayer Times
      'prayer.title': 'Horarios de Oración',
      'prayer.subtitle': 'Obtén horarios de oración precisos según tu ubicación',
      'prayer.fajr': 'Fajr',
      'prayer.dhuhr': 'Dhuhr',
      'prayer.asr': 'Asr',
      'prayer.maghrib': 'Maghrib',
      'prayer.isha': 'Isha',
      'prayer.location': 'Ubicación',
      'prayer.loading': 'Cargando horarios de oración...',
      'prayer.error': 'Error al cargar horarios de oración',
      'prayer.enableLocation': 'Habilitar Ubicación',
      'prayer.today': 'Horarios de Oración de Hoy',
      
      // Friday Duas
      'fridayDuas.title': 'Duas del Viernes',
      'fridayDuas.subtitle': 'Súplicas especiales para el día bendito del viernes',
      'fridayDuas.importance': 'Importancia del Viernes',
      'fridayDuas.supplications': 'Súplicas del Viernes',
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