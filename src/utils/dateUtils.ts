import { format, differenceInDays, addDays } from 'date-fns';

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

// Hijri epoch: July 16, 622 CE (1st Muharram 1 AH)
const HIJRI_EPOCH = new Date(622, 6, 16); // Month is 0-indexed in JS Date

// Average Hijri year length in days
const HIJRI_YEAR_LENGTH = 354.367;

// Days in each Hijri month (for non-leap years)
const HIJRI_MONTH_DAYS = [30, 29, 30, 29, 30, 29, 30, 29, 30, 29, 30, 29];

// Convert Hijri to Gregorian
export function hijriToGregorian(hijriDate: HijriDate): GregorianDate {
  const { day, month, year } = hijriDate;
  
  // Calculate total days since Hijri epoch
  const totalHijriDays = Math.floor((year - 1) * HIJRI_YEAR_LENGTH);
  
  // Add days for complete months
  let monthDays = 0;
  for (let i = 0; i < month - 1; i++) {
    monthDays += HIJRI_MONTH_DAYS[i];
  }
  
  // Add remaining days
  const daysSinceEpoch = totalHijriDays + monthDays + day - 1;
  
  // Convert to Gregorian date
  const gregorianDate = addDays(HIJRI_EPOCH, daysSinceEpoch);
  
  return {
    day: gregorianDate.getDate(),
    month: gregorianDate.getMonth() + 1,
    year: gregorianDate.getFullYear()
  };
}

// Convert Gregorian to Hijri
export function gregorianToHijri(gregorianDate: GregorianDate): HijriDate {
  const { day, month, year } = gregorianDate;
  
  // Create Gregorian date object
  const gregDate = new Date(year, month - 1, day);
  
  // Calculate days since Hijri epoch
  const daysSinceEpoch = differenceInDays(gregDate, HIJRI_EPOCH);
  
  // Calculate Hijri year
  const hijriYear = Math.floor(daysSinceEpoch / HIJRI_YEAR_LENGTH) + 1;
  
  // Calculate remaining days in the year
  const daysInYear = daysSinceEpoch - Math.floor((hijriYear - 1) * HIJRI_YEAR_LENGTH);
  
  // Calculate month and day
  let remainingDays = daysInYear;
  let hijriMonth = 1;
  
  for (let i = 0; i < 12; i++) {
    if (remainingDays <= HIJRI_MONTH_DAYS[i]) {
      hijriMonth = i + 1;
      break;
    }
    remainingDays -= HIJRI_MONTH_DAYS[i];
  }
  
  const hijriDay = Math.max(1, Math.ceil(remainingDays));
  
  return {
    day: Math.min(hijriDay, 30),
    month: Math.min(hijriMonth, 12),
    year: hijriYear
  };
}

// Calculate age
export function calculateAge(birthDate: Date, currentDate: Date = new Date()): Age {
  const birth = new Date(birthDate);
  const current = new Date(currentDate);
  
  // Calculate exact age
  let years = current.getFullYear() - birth.getFullYear();
  let months = current.getMonth() - birth.getMonth();
  let days = current.getDate() - birth.getDate();
  
  if (days < 0) {
    months--;
    const lastMonth = new Date(current.getFullYear(), current.getMonth(), 0);
    days += lastMonth.getDate();
  }
  
  if (months < 0) {
    years--;
    months += 12;
  }
  
  // Calculate totals
  const totalDays = differenceInDays(current, birth);
  const totalMonths = years * 12 + months;
  
  // Calculate next birthday
  const nextBirthday = new Date(current.getFullYear(), birth.getMonth(), birth.getDate());
  if (nextBirthday <= current) {
    nextBirthday.setFullYear(current.getFullYear() + 1);
  }
  
  const daysUntilBirthday = differenceInDays(nextBirthday, current);
  
  return {
    years,
    months,
    days,
    totalDays,
    totalMonths,
    daysUntilBirthday,
    nextBirthday
  };
}

// Get current Hijri date
export function getCurrentHijriDate(): HijriDate {
  const now = new Date();
  return gregorianToHijri({
    day: now.getDate(),
    month: now.getMonth() + 1,
    year: now.getFullYear()
  });
}

// Get current Gregorian date
export function getCurrentGregorianDate(): GregorianDate {
  const now = new Date();
  return {
    day: now.getDate(),
    month: now.getMonth() + 1,
    year: now.getFullYear()
  };
}

// Format date for display
export function formatDate(date: HijriDate | GregorianDate, locale: string = 'en', type: 'hijri' | 'gregorian'): string {
  const { day, month, year } = date;
  
  const gregorianMonthNames: { [key: string]: string[] } = {
    en: ['January', 'February', 'March', 'April', 'May', 'June', 
         'July', 'August', 'September', 'October', 'November', 'December'],
    ar: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو',
         'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'],
    fr: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
         'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
    es: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
         'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
  };

  const hijriMonthNames: { [key: string]: string[] } = {
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