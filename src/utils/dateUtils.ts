import moment from 'moment';
import 'moment-hijri';

// Extend moment type to include hijri methods
declare module 'moment' {
  interface Moment {
    iDate(): number;
    iMonth(): number;
    iYear(): number;
  }
}

export interface HijriDate {
  day: number;
  month: number;
  year: number;
}

export interface GregorianDate {
  day: number;
  month: number;
  year: number;
}

export interface Age {
  years: number;
  months: number;
  days: number;
  totalDays: number;
  totalMonths: number;
  daysUntilBirthday: number;
  nextBirthday: Date;
}

// Convert Hijri to Gregorian
export function hijriToGregorian(hijriDate: HijriDate): GregorianDate {
  const momentDate = moment(`${hijriDate.year}/${hijriDate.month}/${hijriDate.day}`, 'iYYYY/iM/iD');
  
  return {
    day: momentDate.date(),
    month: momentDate.month() + 1, // moment months are 0-indexed
    year: momentDate.year()
  };
}

// Convert Gregorian to Hijri
export function gregorianToHijri(gregorianDate: GregorianDate): HijriDate {
  const momentDate = moment(`${gregorianDate.year}/${gregorianDate.month}/${gregorianDate.day}`, 'YYYY/M/D');
  
  return {
    day: (momentDate as any).iDate(),
    month: (momentDate as any).iMonth() + 1, // moment months are 0-indexed
    year: (momentDate as any).iYear()
  };
}

// Calculate age
export function calculateAge(birthDate: Date, currentDate: Date = new Date()): Age {
  const birth = moment(birthDate);
  const current = moment(currentDate);
  
  // Calculate exact age
  const years = current.diff(birth, 'years');
  birth.add(years, 'years');
  
  const months = current.diff(birth, 'months');
  birth.add(months, 'months');
  
  const days = current.diff(birth, 'days');
  
  // Calculate totals
  const totalDays = current.diff(moment(birthDate), 'days');
  const totalMonths = current.diff(moment(birthDate), 'months');
  
  // Calculate next birthday
  const nextBirthday = moment(birthDate).year(current.year());
  if (nextBirthday.isBefore(current)) {
    nextBirthday.add(1, 'year');
  }
  
  const daysUntilBirthday = nextBirthday.diff(current, 'days');
  
  return {
    years,
    months,
    days,
    totalDays,
    totalMonths,
    daysUntilBirthday,
    nextBirthday: nextBirthday.toDate()
  };
}

// Get current Hijri date
export function getCurrentHijriDate(): HijriDate {
  const now = moment();
  return {
    day: (now as any).iDate(),
    month: (now as any).iMonth() + 1,
    year: (now as any).iYear()
  };
}

// Get current Gregorian date
export function getCurrentGregorianDate(): GregorianDate {
  const now = moment();
  return {
    day: now.date(),
    month: now.month() + 1,
    year: now.year()
  };
}

// Format date for display
export function formatDate(date: HijriDate | GregorianDate, locale: string = 'en', type: 'hijri' | 'gregorian'): string {
  const { day, month, year } = date;
  
  const gregorianMonthNames = {
    en: ['January', 'February', 'March', 'April', 'May', 'June', 
         'July', 'August', 'September', 'October', 'November', 'December'],
    ar: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو',
         'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'],
    fr: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
         'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
    es: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
         'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
  };

  const hijriMonthNames = {
    en: ['Muharram', 'Safar', 'Rabi al-Awwal', 'Rabi al-Thani', 'Jumada al-Awwal', 'Jumada al-Thani',
         'Rajab', 'Shaaban', 'Ramadan', 'Shawwal', 'Dhul Qadah', 'Dhul Hijjah'],
    ar: ['محرم', 'صفر', 'ربيع الأول', 'ربيع الثاني', 'جمادى الأولى', 'جمادى الآخرة',
         'رجب', 'شعبان', 'رمضان', 'شوال', 'ذو القعدة', 'ذو الحجة'],
    fr: ['Mouharram', 'Safar', 'Rabiʻ al-Awwal', 'Rabiʻ al-Thani', 'Joumada al-Oula', 'Joumada al-Thania',
         'Rajab', 'Chaabane', 'Ramadan', 'Chawwal', 'Dhou al-Qiʻdah', 'Dhou al-Hijjah'],
    es: ['Muharram', 'Safar', 'Rabiʻ al-Awwal', 'Rabiʻ al-Thani', 'Jumada al-Awwal', 'Jumada al-Thani',
         'Rayab', 'Shaʻban', 'Ramadán', 'Shawwal', 'Dhul Qadah', 'Dhul Hijjah']
  };

  const currentLocale = locale as keyof typeof gregorianMonthNames;
  let monthName;

  if (type === 'gregorian') {
    monthName = gregorianMonthNames[currentLocale]?.[month - 1] || gregorianMonthNames.en[month - 1];
  } else {
    monthName = hijriMonthNames[currentLocale]?.[month - 1] || hijriMonthNames.en[month - 1];
  }
  
  if (locale === 'ar') {
    return `${day} ${monthName} ${year}`;
  }
  
  return `${day} ${monthName} ${year}`;
}

// Validate date
export function isValidDate(day: number, month: number, year: number): boolean {
  if (day < 1 || day > 31) return false;
  if (month < 1 || month > 12) return false;
  if (year < 1) return false;
  
  // Additional validation for specific months
  const daysInMonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if (day > daysInMonth[month - 1]) return false;
  
  return true;
}

