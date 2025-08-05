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
      'common.error': 'Error',
      
      // Date Converter
      'dateConverter.title': 'Hijri to Gregorian Date Converter',
      'dateConverter.subtitle': 'Convert dates between Hijri and Gregorian calendars easily',
      'dateConverter.hijriDate': 'Hijri Date',
      'dateConverter.gregorianDate': 'Gregorian Date',
      'dateConverter.enterHijriDate': 'Enter Hijri Date',
      'dateConverter.enterGregorianDate': 'Enter Gregorian Date',
      'dateConverter.convertToGregorian': 'Convert to Gregorian',
      'dateConverter.convertToHijri': 'Convert to Hijri',
      'dateConverter.invalidDate': 'Please enter a valid date',
      'dateConverter.conversionError': 'An error occurred during date conversion',
      
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
      'ageCalculator.birthDateRequired': 'Birth date is required',
      'ageCalculator.futureDate': 'Birth date cannot be in the future',
      'ageCalculator.calculationError': 'An error occurred while calculating age',
      
      // Morning & Evening Adhkar
      'adhkar.title': 'Morning & Evening Adhkar',
      'adhkar.subtitle': 'Daily Islamic remembrances for spiritual connection',
      'adhkar.morning': 'Morning Adhkar',
      'adhkar.evening': 'Evening Adhkar',
      'adhkar.morningTitle': 'Morning Remembrances (Adhkar Al-Sabah)',
      'adhkar.eveningTitle': 'Evening Remembrances (Adhkar Al-Masa)',
      'adhkar.morningDescription': 'Recite these remembrances every morning after Fajr prayer',
      'adhkar.eveningDescription': 'Recite these remembrances every evening after Maghrib prayer',
      'adhkar.once': 'Once',
      'adhkar.times': '{{count}} times',
      
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
      'fridayDuas.importanceDesc': 'Virtues of Friday in Islam',
      'fridayDuas.supplicationsDesc': 'Answered supplications for the blessed Friday',
      'fridayDuas.note': 'It is recommended to increase dhikr, supplication, and sending prayers upon the Prophet (peace be upon him) on Friday',
      
      // Friday Duas - Importance Section
      'fridayDuas.importanceSection.title1': 'Friday is the Master of Days',
      'fridayDuas.importanceSection.content1': 'The Prophet (peace be upon him) said: "The best day on which the sun has risen is Friday; on it Adam was created, on it he was admitted to Paradise, and on it he was expelled from it."',
      'fridayDuas.importanceSection.reference1': 'Narrated by Muslim',
      'fridayDuas.importanceSection.title2': 'The Hour of Response',
      'fridayDuas.importanceSection.content2': 'On Friday there is an hour when no Muslim servant stands and prays, asking Allah for something, except that Allah gives it to him.',
      'fridayDuas.importanceSection.reference2': 'Agreed upon',
      'fridayDuas.importanceSection.title3': 'Virtue of Sending Prayers upon the Prophet',
      'fridayDuas.importanceSection.content3': 'One of the best deeds on Friday is to increase sending prayers upon the Prophet (peace be upon him).',
      
      // Friday Duas - Sura Al-Kahf
      'fridayDuas.suraAlKahf.title': 'Surat Al-Kahf',
      'fridayDuas.suraAlKahf.virtue': 'Whoever reads Surat Al-Kahf on Friday, light will shine for him between the two Fridays.',
      'fridayDuas.suraAlKahf.description': 'It is recommended to read the complete Surat Al-Kahf on Friday, which is the eighteenth chapter in the Holy Quran.',
      'fridayDuas.suraAlKahf.virtueTitle': 'Virtue of reading Surat Al-Kahf:',
      
      // Friday Duas - Individual Duas
      'fridayDuas.dua1.transliteration': 'Allaahumma salli wa sallim wa baarik \'alaa nabiyyinaa Muhammadin wa \'alaa aalihi wa sahbihi ajma\'een',
      'fridayDuas.dua1.translation': 'O Allah, send prayers, peace, and blessings upon our Prophet Muhammad and upon his family and all his companions.',
      'fridayDuas.dua1.virtue': 'One of the best deeds on Friday',
      'fridayDuas.dua2.transliteration': 'Rabbanaa aatinaa fil-dunyaa hasanatan wa fil-aakhirati hasanatan wa qinaa \'adhaab an-naar',
      'fridayDuas.dua2.translation': 'Our Lord, give us in this world [that which is] good and in the Hereafter [that which is] good and protect us from the punishment of the Fire.',
      'fridayDuas.dua2.virtue': 'A comprehensive supplication for the good of this world and the next',
      'fridayDuas.dua3.transliteration': 'Allaahummaghfir lee dhanbee wa wassi\' lee fee daaree wa baarik lee fee rizqee',
      'fridayDuas.dua3.translation': 'O Allah, forgive my sin, expand my home for me, and bless my sustenance.',
      'fridayDuas.dua3.virtue': 'A comprehensive supplication for forgiveness and blessings',
      'fridayDuas.dua4.transliteration': 'Allaahumma aslih lee deeneel-ladhee huwa \'ismatu amree, wa aslih lee dunyaayal-latee feehaa ma\'aashee, wa aslih lee aakhirateel-latee feehaa ma\'aadee',
      'fridayDuas.dua4.translation': 'O Allah, make my religion good for me, which is the safeguard of my affairs. Make my worldly life good for me, in which is my livelihood. Make my Hereafter good for me, which is my return.',
      'fridayDuas.dua4.virtue': 'A supplication for reforming religion, worldly life, and the Hereafter',
      'fridayDuas.dua5.transliteration': 'Allaahumma innee as\'alukal-hudaa wat-tuqaa wal-\'afaafa wal-ghinaa',
      'fridayDuas.dua5.translation': 'O Allah, I ask You for guidance, piety, chastity, and contentment.',
      'fridayDuas.dua5.virtue': 'A supplication for guidance and piety',
      'fridayDuas.dua6.transliteration': 'Allaahumma baarik lanaa feemaa razaqtanaa, wa qinaa \'adhaab an-naar',
      'fridayDuas.dua6.translation': 'O Allah, bless us in what You have provided us, and protect us from the punishment of the Fire.',
      'fridayDuas.dua6.virtue': 'A supplication for blessings in sustenance',
      
      // Home
      'home.title': 'Comprehensive Islamic Tools',
      'home.description': 'A complete collection of useful Islamic tools including date conversion, age calculation, adhkar, prayer times, and Friday supplications',
      'home.useTool': 'Use Tool',
      'home.multilingual': 'Available in Multiple Languages',
      'home.multilingualDesc': 'All tools are available in Arabic, English, French, and Spanish to serve Muslims worldwide'
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
      'common.error': 'خطأ',
      
      // Date Converter
      'dateConverter.title': 'محول التاريخ من هجري إلى ميلادي',
      'dateConverter.subtitle': 'تحويل التواريخ بين التقويم الهجري والميلادي بسهولة',
      'dateConverter.hijriDate': 'التاريخ الهجري',
      'dateConverter.gregorianDate': 'التاريخ الميلادي',
      'dateConverter.enterHijriDate': 'أدخل التاريخ الهجري',
      'dateConverter.enterGregorianDate': 'أدخل التاريخ الميلادي',
      'dateConverter.convertToGregorian': 'تحويل إلى ميلادي',
      'dateConverter.convertToHijri': 'تحويل إلى هجري',
      'dateConverter.invalidDate': 'يرجى إدخال تاريخ صحيح',
      'dateConverter.conversionError': 'حدث خطأ أثناء تحويل التاريخ',
      
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
      'ageCalculator.birthDateRequired': 'تاريخ الميلاد مطلوب',
      'ageCalculator.futureDate': 'تاريخ الميلاد لا يمكن أن يكون في المستقبل',
      'ageCalculator.calculationError': 'حدث خطأ أثناء حساب العمر',
      
      // Morning & Evening Adhkar
      'adhkar.title': 'أذكار الصباح والمساء',
      'adhkar.subtitle': 'الأذكار اليومية للتواصل الروحي',
      'adhkar.morning': 'أذكار الصباح',
      'adhkar.evening': 'أذكار المساء',
      'adhkar.morningTitle': 'أذكار الصباح',
      'adhkar.eveningTitle': 'أذكار المساء',
      'adhkar.morningDescription': 'تلاوة هذه الأذكار كل صباح بعد صلاة الفجر',
      'adhkar.eveningDescription': 'تلاوة هذه الأذكار كل مساء بعد صلاة المغرب',
      'adhkar.once': 'مرة واحدة',
      'adhkar.times': '{{count}} مرات',
      
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
      'fridayDuas.importanceDesc': 'فضائل يوم الجمعة في الإسلام',
      'fridayDuas.supplicationsDesc': 'أدعية مستجابة ليوم الجمعة المبارك',
      'fridayDuas.note': 'يُستحب الإكثار من الدعاء والذكر والصلاة على النبي صلى الله عليه وسلم في يوم الجمعة',
      
      // Friday Duas - Importance Section
      'fridayDuas.importanceSection.title1': 'يوم الجمعة سيد الأيام',
      'fridayDuas.importanceSection.content1': 'قال رسول الله صلى الله عليه وسلم: (خير يوم طلعت عليه الشمس يوم الجمعة، فيه خلق آدم، وفيه أدخل الجنة، وفيه أخرج منها)',
      'fridayDuas.importanceSection.reference1': 'رواه مسلم',
      'fridayDuas.importanceSection.title2': 'ساعة الإجابة',
      'fridayDuas.importanceSection.content2': 'في يوم الجمعة ساعة لا يوافقها عبد مسلم وهو قائم يصلي يسأل الله تعالى شيئاً إلا أعطاه إياه',
      'fridayDuas.importanceSection.reference2': 'متفق عليه',
      'fridayDuas.importanceSection.title3': 'فضل الصلاة على النبي',
      'fridayDuas.importanceSection.content3': 'من أفضل أعمال يوم الجمعة الإكثار من الصلاة على النبي صلى الله عليه وسلم',
      
      // Friday Duas - Sura Al-Kahf
      'fridayDuas.suraAlKahf.title': 'سورة الكهف',
      'fridayDuas.suraAlKahf.virtue': 'من قرأ سورة الكهف في يوم الجمعة أضاء له من النور ما بين الجمعتين',
      'fridayDuas.suraAlKahf.description': 'يُستحب قراءة سورة الكهف كاملة يوم الجمعة، وهي السورة الثامنة عشرة في القرآن الكريم',
      'fridayDuas.suraAlKahf.virtueTitle': 'فضل قراءة سورة الكهف:',
      
      // Friday Duas - Individual Duas
      'fridayDuas.dua1.transliteration': 'اللَّهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ عَلَى نَبِيِّنَا مُحَمَّدٍ وَعَلَى آلِهِ وَصَحْبِهِ أَجْمَعِينَ',
      'fridayDuas.dua1.translation': 'اللهم صل وسلم وبارك على نبينا محمد وعلى آله وصحبه أجمعين',
      'fridayDuas.dua1.virtue': 'من أفضل الأعمال يوم الجمعة',
      'fridayDuas.dua2.transliteration': 'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ',
      'fridayDuas.dua2.translation': 'ربنا آتنا في الدنيا حسنة وفي الآخرة حسنة وقنا عذاب النار',
      'fridayDuas.dua2.virtue': 'دعاء جامع لخير الدنيا والآخرة',
      'fridayDuas.dua3.transliteration': 'اللَّهُمَّ اغْفِرْ لِي ذَنْبِي وَوَسِّعْ لِي فِي دَارِي وَبَارِكْ لِي فِي رِزْقِي',
      'fridayDuas.dua3.translation': 'اللهم اغفر لي ذنبي ووسع لي في داري وبارك لي في رزقي',
      'fridayDuas.dua3.virtue': 'دعاء شامل للمغفرة والبركة',
      'fridayDuas.dua4.transliteration': 'اللَّهُمَّ أَصْلِحْ لِي دِينِي الَّذِي هُوَ عِصْمَةُ أَمْرِي، وَأَصْلِحْ لِي دُنْيَايَ الَّتِي فِيهَا مَعَاشِي، وَأَصْلِحْ لِي آخِرَتِي الَّتِي فِيهَا مَعَادِي',
      'fridayDuas.dua4.translation': 'اللهم أصلح لي ديني الذي هو عصمة أمري، وأصلح لي دنياي التي فيها معاشي، وأصلح لي آخرتي التي فيها معادي',
      'fridayDuas.dua4.virtue': 'دعاء لإصلاح الدين والدنيا والآخرة',
      'fridayDuas.dua5.transliteration': 'اللَّهُمَّ إِنِّي أَسْأَلُكَ الْهُدَى وَالتُّقَى وَالْعَفَافَ وَالْغِنَى',
      'fridayDuas.dua5.translation': 'اللهم إني أسألك الهدى والتقى والعفاف والغنى',
      'fridayDuas.dua5.virtue': 'دعاء للهداية والتقوى',
      'fridayDuas.dua6.transliteration': 'اللَّهُمَّ بَارِكْ لَنَا فِيمَا رَزَقْتَنَا، وَقِنَا عَذَابَ النَّارِ',
      'fridayDuas.dua6.translation': 'اللهم بارك لنا فيما رزقتنا، وقنا عذاب النار',
      'fridayDuas.dua6.virtue': 'دعاء للبركة في الرزق',
      
      // Home
      'home.title': 'أدوات إسلامية متكاملة',
      'home.description': 'مجموعة شاملة من الأدوات الإسلامية المفيدة تشمل تحويل التاريخ، حساب العمر، الأذكار، مواقيت الصلاة وأدعية الجمعة',
      'home.useTool': 'استخدم الأداة',
      'home.multilingual': 'متوفر بعدة لغات',
      'home.multilingualDesc': 'جميع الأدوات متوفرة باللغات العربية والإنجليزية والفرنسية والإسبانية لخدمة المسلمين حول العالم'
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
      'common.error': 'Erreur',
      
      // Date Converter
      'dateConverter.title': 'Convertisseur de Date Hijri vers Grégorien',
      'dateConverter.subtitle': 'Convertissez facilement les dates entre les calendriers hijri et grégorien',
      'dateConverter.hijriDate': 'Date Hijri',
      'dateConverter.gregorianDate': 'Date Grégorienne',
      'dateConverter.enterHijriDate': 'Entrez la date hijri',
      'dateConverter.enterGregorianDate': 'Entrez la date grégorienne',
      'dateConverter.convertToGregorian': 'Convertir en Grégorien',
      'dateConverter.convertToHijri': 'Convertir en Hijri',
      'dateConverter.invalidDate': 'Veuillez entrer une date valide',
      'dateConverter.conversionError': 'Une erreur s\'est produite lors de la conversion de date',
      
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
      'ageCalculator.birthDateRequired': 'La date de naissance est requise',
      'ageCalculator.futureDate': 'La date de naissance ne peut pas être dans le futur',
      'ageCalculator.calculationError': 'Une erreur s\'est produite lors du calcul de l\'âge',
      
      // Morning & Evening Adhkar
      'adhkar.title': 'Adhkar Matin & Soir',
      'adhkar.subtitle': 'Rappels islamiques quotidiens pour la connexion spirituelle',
      'adhkar.morning': 'Adhkar du Matin',
      'adhkar.evening': 'Adhkar du Soir',
      'adhkar.morningTitle': 'Rappels du Matin',
      'adhkar.eveningTitle': 'Rappels du Soir',
      'adhkar.morningDescription': 'Réciter ces rappels chaque matin après la prière du Fajr',
      'adhkar.eveningDescription': 'Réciter ces rappels chaque soir après la prière du Maghrib',
      'adhkar.once': 'Une fois',
      'adhkar.times': '{{count}} fois',
      
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
      'fridayDuas.importanceDesc': 'Vertus du vendredi en Islam',
      'fridayDuas.supplicationsDesc': 'Invocations exaucées pour le vendredi béni',
      'fridayDuas.note': 'Il est recommandé d\'augmenter le dhikr, les invocations et les prières sur le Prophète (paix soit sur lui) le vendredi',
      
      // Friday Duas - Importance Section
      'fridayDuas.importanceSection.title1': 'Le Vendredi est le Maître des Jours',
      'fridayDuas.importanceSection.content1': 'Le Prophète (paix soit sur lui) a dit : "Le meilleur jour sur lequel le soleil s\'est levé est le vendredi ; en ce jour Adam fut créé, en ce jour il fut admis au Paradis, et en ce jour il en fut expulsé."',
      'fridayDuas.importanceSection.reference1': 'Rapporté par Muslim',
      'fridayDuas.importanceSection.title2': 'L\'Heure de Réponse',
      'fridayDuas.importanceSection.content2': 'Le vendredi, il y a une heure où aucun serviteur musulman ne se tient debout en priant, demandant quelque chose à Allah, sans qu\'Allah ne le lui donne.',
      'fridayDuas.importanceSection.reference2': 'Convenu',
      'fridayDuas.importanceSection.title3': 'Vertu de Prier sur le Prophète',
      'fridayDuas.importanceSection.content3': 'L\'une des meilleures actions du vendredi est d\'augmenter les prières sur le Prophète (paix soit sur lui).',
      
      // Friday Duas - Sura Al-Kahf
      'fridayDuas.suraAlKahf.title': 'Sourate Al-Kahf',
      'fridayDuas.suraAlKahf.virtue': 'Quiconque lit la Sourate Al-Kahf le vendredi, une lumière brillera pour lui entre les deux vendredis.',
      'fridayDuas.suraAlKahf.description': 'Il est recommandé de lire la Sourate Al-Kahf complète le vendredi, qui est le dix-huitième chapitre du Saint Coran.',
      'fridayDuas.suraAlKahf.virtueTitle': 'Vertu de lire la Sourate Al-Kahf :',
      
      // Friday Duas - Individual Duas
      'fridayDuas.dua1.transliteration': 'Allaahumma salli wa sallim wa baarik \'alaa nabiyyinaa Muhammadin wa \'alaa aalihi wa sahbihi ajma\'een',
      'fridayDuas.dua1.translation': 'Ô Allah, envoie des prières, la paix et les bénédictions sur notre Prophète Muhammad et sur sa famille et tous ses compagnons.',
      'fridayDuas.dua1.virtue': 'L\'une des meilleures actions du vendredi',
      'fridayDuas.dua2.transliteration': 'Rabbanaa aatinaa fil-dunyaa hasanatan wa fil-aakhirati hasanatan wa qinaa \'adhaab an-naar',
      'fridayDuas.dua2.translation': 'Notre Seigneur, donne-nous en ce monde [ce qui est] bien et dans l\'au-delà [ce qui est] bien et protège-nous du châtiment du Feu.',
      'fridayDuas.dua2.virtue': 'Une invocation complète pour le bien de ce monde et de l\'au-delà',
      'fridayDuas.dua3.transliteration': 'Allaahummaghfir lee dhanbee wa wassi\' lee fee daaree wa baarik lee fee rizqee',
      'fridayDuas.dua3.translation': 'Ô Allah, pardonne mon péché, élargis ma maison pour moi et bénis ma subsistance.',
      'fridayDuas.dua3.virtue': 'Une invocation complète pour le pardon et les bénédictions',
      'fridayDuas.dua4.transliteration': 'Allaahumma aslih lee deeneel-ladhee huwa \'ismatu amree, wa aslih lee dunyaayal-latee feehaa ma\'aashee, wa aslih lee aakhirateel-latee feehaa ma\'aadee',
      'fridayDuas.dua4.translation': 'Ô Allah, améliore ma religion qui est la sauvegarde de mes affaires. Améliore ma vie mondaine dans laquelle est ma subsistance. Améliore mon au-delà qui est mon retour.',
      'fridayDuas.dua4.virtue': 'Une invocation pour réformer la religion, la vie mondaine et l\'au-delà',
      'fridayDuas.dua5.transliteration': 'Allaahumma innee as\'alukal-hudaa wat-tuqaa wal-\'afaafa wal-ghinaa',
      'fridayDuas.dua5.translation': 'Ô Allah, je Te demande la guidance, la piété, la chasteté et le contentement.',
      'fridayDuas.dua5.virtue': 'Une invocation pour la guidance et la piété',
      'fridayDuas.dua6.transliteration': 'Allaahumma baarik lanaa feemaa razaqtanaa, wa qinaa \'adhaab an-naar',
      'fridayDuas.dua6.translation': 'Ô Allah, bénis-nous dans ce que Tu nous as fourni et protège-nous du châtiment du Feu.',
      'fridayDuas.dua6.virtue': 'Une invocation pour les bénédictions dans la subsistance',
      
      // Home
      'home.title': 'Outils Islamiques Complets',
      'home.description': 'Une collection complète d\'outils islamiques utiles comprenant la conversion de dates, le calcul d\'âge, les adhkar, les heures de prière et les invocations du vendredi',
      'home.useTool': 'Utiliser l\'Outil',
      'home.multilingual': 'Disponible en Plusieurs Langues',
      'home.multilingualDesc': 'Tous les outils sont disponibles en arabe, anglais, français et espagnol pour servir les musulmans du monde entier'
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
      'common.error': 'Error',
      
      // Date Converter
      'dateConverter.title': 'Convertidor de Fecha Hijri a Gregoriano',
      'dateConverter.subtitle': 'Convierte fechas entre calendarios hijri y gregoriano fácilmente',
      'dateConverter.hijriDate': 'Fecha Hijri',
      'dateConverter.gregorianDate': 'Fecha Gregoriana',
      'dateConverter.enterHijriDate': 'Ingresa la fecha hijri',
      'dateConverter.enterGregorianDate': 'Ingresa la fecha gregoriana',
      'dateConverter.convertToGregorian': 'Convertir a Gregoriano',
      'dateConverter.convertToHijri': 'Convertir a Hijri',
      'dateConverter.invalidDate': 'Por favor ingresa una fecha válida',
      'dateConverter.conversionError': 'Ocurrió un error durante la conversión de fecha',
      
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
      'ageCalculator.birthDateRequired': 'La fecha de nacimiento es requerida',
      'ageCalculator.futureDate': 'La fecha de nacimiento no puede estar en el futuro',
      'ageCalculator.calculationError': 'Ocurrió un error al calcular la edad',
      
      // Morning & Evening Adhkar
      'adhkar.title': 'Adhkar Mañana y Tarde',
      'adhkar.subtitle': 'Recordatorios islámicos diarios para la conexión espiritual',
      'adhkar.morning': 'Adhkar de la Mañana',
      'adhkar.evening': 'Adhkar de la Tarde',
      'adhkar.morningTitle': 'Recordatorios de la Mañana',
      'adhkar.eveningTitle': 'Recordatorios de la Tarde',
      'adhkar.morningDescription': 'Recita estos recordatorios cada mañana después de la oración del Fajr',
      'adhkar.eveningDescription': 'Recita estos recordatorios cada tarde después de la oración del Maghrib',
      'adhkar.once': 'Una vez',
      'adhkar.times': '{{count}} veces',
      
      // Prayer Times
      'prayer.title': 'Horarios de Oración',
      'prayer.subtitle': 'Obtén horarios de oración precisos basados en tu ubicación',
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
      'fridayDuas.importanceDesc': 'Virtudes del viernes en el Islam',
      'fridayDuas.supplicationsDesc': 'Invocaciones respondidas para el viernes bendito',
      'fridayDuas.note': 'Se recomienda aumentar el dhikr, la súplica y enviar oraciones sobre el Profeta (la paz sea con él) el viernes',
      
      // Friday Duas - Importance Section
      'fridayDuas.importanceSection.title1': 'El Viernes es el Señor de los Días',
      'fridayDuas.importanceSection.content1': 'El Profeta (la paz sea con él) dijo: "El mejor día en el que ha salido el sol es el viernes; en él fue creado Adán, en él fue admitido al Paraíso, y en él fue expulsado de él."',
      'fridayDuas.importanceSection.reference1': 'Narrado por Muslim',
      'fridayDuas.importanceSection.title2': 'La Hora de Respuesta',
      'fridayDuas.importanceSection.content2': 'El viernes hay una hora en la que ningún siervo musulmán se para y ora, pidiendo algo a Allah, excepto que Allah se lo da.',
      'fridayDuas.importanceSection.reference2': 'Acordado',
      'fridayDuas.importanceSection.title3': 'Virtud de Orar sobre el Profeta',
      'fridayDuas.importanceSection.content3': 'Una de las mejores acciones del viernes es aumentar las oraciones sobre el Profeta (la paz sea con él).',
      
      // Friday Duas - Sura Al-Kahf
      'fridayDuas.suraAlKahf.title': 'Sura Al-Kahf',
      'fridayDuas.suraAlKahf.virtue': 'Quien lea la Sura Al-Kahf el viernes, la luz brillará para él entre los dos viernes.',
      'fridayDuas.suraAlKahf.description': 'Se recomienda leer la Sura Al-Kahf completa el viernes, que es el decimoctavo capítulo del Sagrado Corán.',
      'fridayDuas.suraAlKahf.virtueTitle': 'Virtud de leer la Sura Al-Kahf:',
      
      // Friday Duas - Individual Duas
      'fridayDuas.dua1.transliteration': 'Allaahumma salli wa sallim wa baarik \'alaa nabiyyinaa Muhammadin wa \'alaa aalihi wa sahbihi ajma\'een',
      'fridayDuas.dua1.translation': 'Oh Allah, envía oraciones, paz y bendiciones sobre nuestro Profeta Muhammad y sobre su familia y todos sus compañeros.',
      'fridayDuas.dua1.virtue': 'Una de las mejores acciones del viernes',
      'fridayDuas.dua2.transliteration': 'Rabbanaa aatinaa fil-dunyaa hasanatan wa fil-aakhirati hasanatan wa qinaa \'adhaab an-naar',
      'fridayDuas.dua2.translation': 'Señor nuestro, danos en este mundo [lo que es] bueno y en el Más Allá [lo que es] bueno y protégenos del castigo del Fuego.',
      'fridayDuas.dua2.virtue': 'Una súplica integral para el bien de este mundo y el próximo',
      'fridayDuas.dua3.transliteration': 'Allaahummaghfir lee dhanbee wa wassi\' lee fee daaree wa baarik lee fee rizqee',
      'fridayDuas.dua3.translation': 'Oh Allah, perdona mi pecado, amplía mi hogar para mí y bendice mi sustento.',
      'fridayDuas.dua3.virtue': 'Una súplica integral para el perdón y las bendiciones',
      'fridayDuas.dua4.transliteration': 'Allaahumma aslih lee deeneel-ladhee huwa \'ismatu amree, wa aslih lee dunyaayal-latee feehaa ma\'aashee, wa aslih lee aakhirateel-latee feehaa ma\'aadee',
      'fridayDuas.dua4.translation': 'Oh Allah, mejora mi religión que es la salvaguarda de mis asuntos. Mejora mi vida mundana en la que está mi sustento. Mejora mi Más Allá que es mi retorno.',
      'fridayDuas.dua4.virtue': 'Una súplica para reformar la religión, la vida mundana y el Más Allá',
      'fridayDuas.dua5.transliteration': 'Allaahumma innee as\'alukal-hudaa wat-tuqaa wal-\'afaafa wal-ghinaa',
      'fridayDuas.dua5.translation': 'Oh Allah, te pido guía, piedad, castidad y contentamiento.',
      'fridayDuas.dua5.virtue': 'Una súplica para la guía y la piedad',
      'fridayDuas.dua6.transliteration': 'Allaahumma baarik lanaa feemaa razaqtanaa, wa qinaa \'adhaab an-naar',
      'fridayDuas.dua6.translation': 'Oh Allah, bendícenos en lo que nos has proporcionado y protégenos del castigo del Fuego.',
      'fridayDuas.dua6.virtue': 'Una súplica para las bendiciones en el sustento',
      
      // Home
      'home.title': 'Herramientas Islámicas Integrales',
      'home.description': 'Una colección completa de herramientas islámicas útiles que incluyen conversión de fechas, cálculo de edad, adhkar, horarios de oración y súplicas del viernes',
      'home.useTool': 'Usar Herramienta',
      'home.multilingual': 'Disponible en Múltiples Idiomas',
      'home.multilingualDesc': 'Todas las herramientas están disponibles en árabe, inglés, francés y español para servir a los musulmanes de todo el mundo'
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
  });

export default i18n;

