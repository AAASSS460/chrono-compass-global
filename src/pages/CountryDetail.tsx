import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, MapPin, Users, Star, BookOpen, Calendar, Globe, Heart, GraduationCap, Trophy, Building } from 'lucide-react';

interface CountryDetailData {
  id: string;
  name: string;
  nameAr: string;
  flag: string;
  population: string;
  percentage: string;
  capital: string;
  capitalAr: string;
  language: string;
  languageAr: string;
  currency: string;
  currencyAr: string;
  islamicHistory: {
    arrival: string;
    arrivalAr: string;
    keyEvents: string[];
    keyEventsAr: string[];
  };
  culturalContributions: {
    title: string;
    titleAr: string;
    items: string[];
    itemsAr: string[];
  };
  modernChallenges: {
    title: string;
    titleAr: string;
    items: string[];
    itemsAr: string[];
  };
  inspiringFacts: {
    title: string;
    titleAr: string;
    facts: string[];
    factsAr: string[];
  };
  mosques: {
    title: string;
    titleAr: string;
    famous: string[];
    famousAr: string[];
  };
  education: {
    title: string;
    titleAr: string;
    institutions: string[];
    institutionsAr: string[];
  };
}

const countryDetails: Record<string, CountryDetailData> = {
  indonesia: {
    id: 'indonesia',
    name: 'Indonesia',
    nameAr: 'إندونيسيا',
    flag: '🇮🇩',
    population: '210 million',
    percentage: '87%',
    capital: 'Jakarta',
    capitalAr: 'جاكرتا',
    language: 'Indonesian',
    languageAr: 'الإندونيسية',
    currency: 'Indonesian Rupiah',
    currencyAr: 'الروبية الإندونيسية',
    islamicHistory: {
      arrival: 'Islam arrived in Indonesia through peaceful trade routes in the 13th century',
      arrivalAr: 'وصل الإسلام إلى إندونيسيا عبر طرق التجارة السلمية في القرن الثالث عشر',
      keyEvents: [
        'Establishment of Sultanate of Aceh (1496)',
        'Spread through Javanese kingdoms',
        'Resistance against Dutch colonialism',
        'Independence and Islamic revival (1945)'
      ],
      keyEventsAr: [
        'تأسيس سلطنة آتشيه (1496)',
        'الانتشار عبر ممالك جاوة',
        'المقاومة ضد الاستعمار الهولندي',
        'الاستقلال والنهضة الإسلامية (1945)'
      ]
    },
    culturalContributions: {
      title: 'Cultural & Religious Contributions',
      titleAr: 'المساهمات الثقافية والدينية',
      items: [
        'Unique blend of Islamic and local traditions',
        'Beautiful mosque architecture with Indonesian elements',
        'Islamic art and calligraphy traditions',
        'Peaceful coexistence model for diverse societies'
      ],
      itemsAr: [
        'مزيج فريد من التقاليد الإسلامية والمحلية',
        'عمارة المساجد الجميلة بعناصر إندونيسية',
        'تقاليد الفن الإسلامي والخط العربي',
        'نموذج التعايش السلمي للمجتمعات المتنوعة'
      ]
    },
    modernChallenges: {
      title: 'Modern Challenges & Opportunities',
      titleAr: 'التحديات والفرص الحديثة',
      items: [
        'Balancing modernity with Islamic values',
        'Economic development in Muslim regions',
        'Environmental conservation as Islamic duty',
        'Youth education and Islamic identity'
      ],
      itemsAr: [
        'الموازنة بين الحداثة والقيم الإسلامية',
        'التنمية الاقتصادية في المناطق المسلمة',
        'المحافظة على البيئة كواجب إسلامي',
        'تعليم الشباب والهوية الإسلامية'
      ]
    },
    inspiringFacts: {
      title: 'Inspiring Facts',
      titleAr: 'حقائق ملهمة',
      facts: [
        'Home to the largest Muslim population in the world',
        'Istiqlal Mosque in Jakarta can accommodate 120,000 worshippers',
        'Indonesia has over 800,000 mosques nationwide',
        'The country celebrates religious diversity while maintaining Islamic majority'
      ],
      factsAr: [
        'موطن أكبر تجمع مسلم في العالم',
        'مسجد الاستقلال في جاكرتا يتسع لـ 120,000 مصلي',
        'إندونيسيا تضم أكثر من 800,000 مسجد على مستوى البلاد',
        'البلاد تحتفل بالتنوع الديني مع الحفاظ على الأغلبية الإسلامية'
      ]
    },
    mosques: {
      title: 'Famous Mosques',
      titleAr: 'المساجد الشهيرة',
      famous: [
        'Istiqlal Mosque - Jakarta (Largest in Southeast Asia)',
        'Great Mosque of Demak - Central Java (Historic)',
        'Menara Kudus Mosque - Central Java (Unique Architecture)',
        'Baiturrahman Grand Mosque - Aceh (Symbol of Resilience)'
      ],
      famousAr: [
        'مسجد الاستقلال - جاكرتا (الأكبر في جنوب شرق آسيا)',
        'المسجد الكبير في ديماك - جاوة الوسطى (تاريخي)',
        'مسجد منارة كودوس - جاوة الوسطى (عمارة فريدة)',
        'مسجد بيت الرحمن الكبير - آتشيه (رمز الصمود)'
      ]
    },
    education: {
      title: 'Islamic Education',
      titleAr: 'التعليم الإسلامي',
      institutions: [
        'State Islamic University (UIN) system',
        'Pesantren traditional Islamic schools',
        'Al-Azhar University Indonesia',
        'Thousands of madrasas nationwide'
      ],
      institutionsAr: [
        'نظام الجامعة الإسلامية الحكومية',
        'مدارس البيسانترين الإسلامية التقليدية',
        'جامعة الأزهر إندونيسيا',
        'آلاف المدارس الدينية على مستوى البلاد'
      ]
    }
  },
  pakistan: {
    id: 'pakistan',
    name: 'Pakistan',
    nameAr: 'باكستان',
    flag: '🇵🇰',
    population: '215 million',
    percentage: '97%',
    capital: 'Islamabad',
    capitalAr: 'إسلام آباد',
    language: 'Urdu',
    languageAr: 'الأردية',
    currency: 'Pakistani Rupee',
    currencyAr: 'الروبية الباكستانية',
    islamicHistory: {
      arrival: 'Islam arrived in the region with Arab traders and later flourished under various Muslim dynasties',
      arrivalAr: 'وصل الإسلام إلى المنطقة مع التجار العرب وازدهر لاحقاً تحت مختلف السلالات الإسلامية',
      keyEvents: [
        'Arrival of Islam in Sindh (8th century)',
        'Delhi Sultanate period (1206-1526)',
        'Mughal Empire rule (1526-1857)',
        'Creation of Pakistan (1947)'
      ],
      keyEventsAr: [
        'وصول الإسلام إلى السند (القرن الثامن)',
        'فترة سلطنة دلهي (1206-1526)',
        'حكم الإمبراطورية المغولية (1526-1857)',
        'إنشاء باكستان (1947)'
      ]
    },
    culturalContributions: {
      title: 'Cultural & Religious Contributions',
      titleAr: 'المساهمات الثقافية والدينية',
      items: [
        'Rich Sufi tradition and shrines',
        'Islamic calligraphy and architecture',
        'Poetry and literature in Urdu and Persian',
        'Traditional Islamic crafts and arts'
      ],
      itemsAr: [
        'تقليد صوفي غني والأضرحة',
        'الخط العربي والعمارة الإسلامية',
        'الشعر والأدب بالأردية والفارسية',
        'الحرف والفنون الإسلامية التقليدية'
      ]
    },
    modernChallenges: {
      title: 'Modern Challenges & Opportunities',
      titleAr: 'التحديات والفرص الحديثة',
      items: [
        'Balancing Islamic values with modern development',
        'Educational reform and Islamic scholarship',
        'Economic development and social justice',
        'Interfaith harmony and religious tolerance'
      ],
      itemsAr: [
        'الموازنة بين القيم الإسلامية والتنمية الحديثة',
        'الإصلاح التعليمي والعلوم الإسلامية',
        'التنمية الاقتصادية والعدالة الاجتماعية',
        'الوئام بين الأديان والتسامح الديني'
      ]
    },
    inspiringFacts: {
      title: 'Inspiring Facts',
      titleAr: 'حقائق ملهمة',
      facts: [
        'Second-largest Muslim population in the world',
        'Home to Badshahi Mosque, one of the world\'s largest mosques',
        'Rich tradition of Islamic scholarship and Sufism',
        'Strong commitment to Islamic banking and finance'
      ],
      factsAr: [
        'ثاني أكبر تجمع مسلم في العالم',
        'موطن مسجد بادشاهي، أحد أكبر مساجد العالم',
        'تقليد غني في العلوم الإسلامية والصوفية',
        'التزام قوي بالمصرفية والتمويل الإسلامي'
      ]
    },
    mosques: {
      title: 'Famous Mosques',
      titleAr: 'المساجد الشهيرة',
      famous: [
        'Badshahi Mosque - Lahore (Mughal era masterpiece)',
        'Faisal Mosque - Islamabad (Modern architectural marvel)',
        'Data Darbar - Lahore (Sufi shrine and mosque)',
        'Masjid-e-Tooba - Karachi (Unique circular design)'
      ],
      famousAr: [
        'مسجد بادشاهي - لاهور (تحفة من العصر المغولي)',
        'مسجد فيصل - إسلام آباد (معجزة معمارية حديثة)',
        'داتا دربار - لاهور (ضريح ومسجد صوفي)',
        'مسجد طوبى - كراتشي (تصميم دائري فريد)'
      ]
    },
    education: {
      title: 'Islamic Education',
      titleAr: 'التعليم الإسلامي',
      institutions: [
        'International Islamic University Islamabad',
        'Darul Uloom Deoband network',
        'Aligarh Muslim University tradition',
        'Thousands of madrasas and Islamic schools'
      ],
      institutionsAr: [
        'الجامعة الإسلامية الدولية إسلام آباد',
        'شبكة دار العلوم ديوبند',
        'تقليد جامعة عليكرة الإسلامية',
        'آلاف المدارس الدينية والمدارس الإسلامية'
      ]
    }
  },
  turkey: {
    id: 'turkey',
    name: 'Turkey',
    nameAr: 'تركيا',
    flag: '🇹🇷',
    population: '75 million',
    percentage: '99%',
    capital: 'Ankara',
    capitalAr: 'أنقرة',
    language: 'Turkish',
    languageAr: 'التركية',
    currency: 'Turkish Lira',
    currencyAr: 'الليرة التركية',
    islamicHistory: {
      arrival: 'Islam arrived in Anatolia with the Seljuk Turks and flourished under the Ottoman Empire',
      arrivalAr: 'وصل الإسلام إلى الأناضول مع السلاجقة الأتراك وازدهر تحت الإمبراطورية العثمانية',
      keyEvents: [
        'Seljuk conquest of Anatolia (11th century)',
        'Rise of Ottoman Empire (1299)',
        'Conquest of Constantinople (1453)',
        'Modern secularization (1923)'
      ],
      keyEventsAr: [
        'فتح السلاجقة للأناضول (القرن الحادي عشر)',
        'صعود الإمبراطورية العثمانية (1299)',
        'فتح القسطنطينية (1453)',
        'العلمنة الحديثة (1923)'
      ]
    },
    culturalContributions: {
      title: 'Cultural & Religious Contributions',
      titleAr: 'المساهمات الثقافية والدينية',
      items: [
        'Ottoman architecture and mosque design',
        'Sufi traditions and Mevlevi order',
        'Islamic calligraphy and miniature art',
        'Bridge between Islamic and European cultures'
      ],
      itemsAr: [
        'العمارة العثمانية وتصميم المساجد',
        'التقاليد الصوفية والطريقة المولوية',
        'الخط العربي وفن المنمنمات',
        'جسر بين الثقافات الإسلامية والأوروبية'
      ]
    },
    modernChallenges: {
      title: 'Modern Challenges & Opportunities',
      titleAr: 'التحديات والفرص الحديثة',
      items: [
        'Balancing secular democracy with Islamic identity',
        'Modernization while preserving Islamic heritage',
        'Economic development and regional leadership',
        'Interfaith dialogue and cultural exchange'
      ],
      itemsAr: [
        'الموازنة بين الديمقراطية العلمانية والهوية الإسلامية',
        'التحديث مع الحفاظ على التراث الإسلامي',
        'التنمية الاقتصادية والقيادة الإقليمية',
        'الحوار بين الأديان والتبادل الثقافي'
      ]
    },
    inspiringFacts: {
      title: 'Inspiring Facts',
      titleAr: 'حقائق ملهمة',
      facts: [
        'Home to Hagia Sophia, a symbol of religious harmony',
        'Istanbul spans two continents, Europe and Asia',
        'Rich tradition of Sufi poetry and music',
        'Modern Islamic banking and finance pioneer'
      ],
      factsAr: [
        'موطن آيا صوفيا، رمز الوئام الديني',
        'إسطنبول تمتد على قارتين، أوروبا وآسيا',
        'تقليد غني في الشعر والموسيقى الصوفية',
        'رائد في المصرفية والتمويل الإسلامي الحديث'
      ]
    },
    mosques: {
      title: 'Famous Mosques',
      titleAr: 'المساجد الشهيرة',
      famous: [
        'Hagia Sophia - Istanbul (Historic masterpiece)',
        'Sultan Ahmed Mosque - Istanbul (Blue Mosque)',
        'Süleymaniye Mosque - Istanbul (Ottoman grandeur)',
        'Selimiye Mosque - Edirne (Architectural marvel)'
      ],
      famousAr: [
        'آيا صوفيا - إسطنبول (تحفة تاريخية)',
        'مسجد السلطان أحمد - إسطنبول (المسجد الأزرق)',
        'مسجد سليمانية - إسطنبول (عظمة عثمانية)',
        'مسجد السليمية - أدرنة (معجزة معمارية)'
      ]
    },
    education: {
      title: 'Islamic Education',
      titleAr: 'التعليم الإسلامي',
      institutions: [
        'Marmara University Faculty of Theology',
        'Ankara University Faculty of Theology',
        'Traditional madrasas and modern Islamic schools',
        'Research centers for Islamic studies'
      ],
      institutionsAr: [
        'كلية الإلهيات بجامعة مرمرة',
        'كلية الإلهيات بجامعة أنقرة',
        'المدارس الدينية التقليدية والمدارس الإسلامية الحديثة',
        'مراكز البحث في الدراسات الإسلامية'
      ]
    }
  },
  usa: {
    id: 'usa',
    name: 'United States',
    nameAr: 'الولايات المتحدة',
    flag: '🇺🇸',
    population: '4.5 million',
    percentage: '1.3%',
    capital: 'Washington, D.C.',
    capitalAr: 'واشنطن العاصمة',
    language: 'English',
    languageAr: 'الإنجليزية',
    currency: 'United States Dollar',
    currencyAr: 'الدولار الأمريكي',
    islamicHistory: {
      arrival: 'Islam arrived in America with enslaved Africans in the 17th century, and later with immigrants from the Middle East and South Asia.',
      arrivalAr: 'وصل الإسلام إلى أمريكا مع الأفارقة المستعبدين في القرن السابع عشر، ولاحقاً مع المهاجرين من الشرق الأوسط وجنوب آسيا.',
      keyEvents: [
        'Arrival of enslaved Muslims (17th-19th centuries)',
        'Establishment of early Muslim communities (late 19th-early 20th centuries)',
        'Nation of Islam movement (mid-20th century)',
        'Post-1965 immigration and growth of diverse Muslim communities'
      ],
      keyEventsAr: [
        'وصول المسلمين المستعبدين (القرنين 17-19)',
        'تأسيس المجتمعات الإسلامية المبكرة (أواخر القرن 19-أوائل القرن 20)',
        'حركة أمة الإسلام (منتصف القرن 20)',
        'الهجرة بعد عام 1965 ونمو المجتمعات الإسلامية المتنوعة'
      ]
    },
    culturalContributions: {
      title: 'Cultural & Social Contributions',
      titleAr: 'المساهمات الثقافية والاجتماعية',
      items: [
        'Influence on music (e.g., blues, jazz)',
        'Contributions to civil rights and social justice movements',
        'Diverse culinary traditions',
        'Academic and scientific achievements'
      ],
      itemsAr: [
        'التأثير على الموسيقى (مثل البلوز والجاز)',
        'المساهمات في حركات الحقوق المدنية والعدالة الاجتماعية',
        'تقاليد الطهي المتنوعة',
        'الإنجازات الأكاديمية والعلمية'
      ]
    },
    modernChallenges: {
      title: 'Modern Challenges & Opportunities',
      titleAr: 'التحديات والفرص الحديثة',
      items: [
        'Combating Islamophobia and discrimination',
        'Political engagement and representation',
        'Building interfaith relations',
        'Youth engagement and identity formation'
      ],
      itemsAr: [
        'مكافحة الإسلاموفوبيا والتمييز',
        'المشاركة السياسية والتمثيل',
        'بناء العلاقات بين الأديان',
        'مشاركة الشباب وتشكيل الهوية'
      ]
    },
    inspiringFacts: {
      title: 'Inspiring Facts',
      titleAr: 'حقائق ملهمة',
      facts: [
        'Home to one of the most diverse Muslim populations globally',
        'Growing number of Muslim elected officials',
        'Significant philanthropic contributions to various causes',
        'Active interfaith dialogue and cooperation'
      ],
      factsAr: [
        'موطن لواحدة من أكثر التجمعات الإسلامية تنوعًا عالميًا',
        'تزايد عدد المسؤولين المسلمين المنتخبين',
        'مساهمات خيرية كبيرة لمختلف القضايا',
        'حوار وتعاون نشط بين الأديان'
      ]
    },
    mosques: {
      title: 'Famous Mosques',
      titleAr: 'المساجد الشهيرة',
      famous: [
        'Islamic Center of Washington (Washington, D.C.)',
        'Masjid al-Farooq (Houston, TX)',
        'King Fahad Mosque (Culver City, CA)',
        'Dar Al-Hijrah Islamic Center (Falls Church, VA)'
      ],
      famousAr: [
        'المركز الإسلامي بواشنطن (واشنطن العاصمة)',
        'مسجد الفاروق (هيوستن، تكساس)',
        'مسجد الملك فهد (كولفر سيتي، كاليفورنيا)',
        'مركز دار الهجرة الإسلامي (فولز تشيرش، فيرجينيا)'
      ]
    },
    education: {
      title: 'Islamic Education',
      titleAr: 'التعليم الإسلامي',
      institutions: [
        'Zaytuna College (Berkeley, CA)',
        'American Islamic College (Chicago, IL)',
        'Numerous Islamic schools and weekend programs nationwide',
        'Chairs and programs in Islamic Studies at major universities'
      ],
      institutionsAr: [
        'كلية الزيتونة (بيركلي، كاليفورنيا)',
        'الكلية الإسلامية الأمريكية (شيكاغو، إلينوي)',
        'العديد من المدارس الإسلامية والبرامج الأسبوعية في جميع أنحاء البلاد',
        'كراسي وبرامج في الدراسات الإسلامية بالجامعات الكبرى'
      ]
    }
  },
  saudi-arabia: {
    id: 'saudi-arabia',
    name: 'Saudi Arabia',
    nameAr: 'المملكة العربية السعودية',
    flag: '🇸🇦',
    population: '35 million',
    percentage: '99%',
    capital: 'Riyadh',
    capitalAr: 'الرياض',
    language: 'Arabic',
    languageAr: 'العربية',
    currency: 'Saudi Riyal',
    currencyAr: 'الريال السعودي',
    islamicHistory: {
      arrival: 'Birthplace of Islam, where Prophet Muhammad (PBUH) received divine revelation and established the first Muslim community',
      arrivalAr: 'مهد الإسلام، حيث تلقى النبي محمد (صلى الله عليه وسلم) الوحي الإلهي وأسس أول مجتمع مسلم',
      keyEvents: [
        'Birth of Prophet Muhammad (570 CE)',
        'First revelation in Cave Hira (610 CE)',
        'Hijra to Medina (622 CE)',
        'Conquest of Mecca (630 CE)',
        'Unification of Saudi Arabia (1932)'
      ],
      keyEventsAr: [
        'ميلاد النبي محمد (570 م)',
        'أول وحي في غار حراء (610 م)',
        'الهجرة إلى المدينة (622 م)',
        'فتح مكة (630 م)',
        'توحيد المملكة العربية السعودية (1932)'
      ]
    },
    culturalContributions: {
      title: 'Cultural & Religious Contributions',
      titleAr: 'المساهمات الثقافية والدينية',
      items: [
        'Custodianship of the Two Holy Mosques',
        'Islamic scholarship and religious education',
        'Hajj and Umrah pilgrimage services',
        'Preservation of Islamic heritage and traditions'
      ],
      itemsAr: [
        'الوصاية على الحرمين الشريفين',
        'العلوم الإسلامية والتعليم الديني',
        'خدمات الحج والعمرة',
        'الحفاظ على التراث والتقاليد الإسلامية'
      ]
    },
    modernChallenges: {
      title: 'Modern Challenges & Opportunities',
      titleAr: 'التحديات والفرص الحديثة',
      items: [
        'Vision 2030 and economic diversification',
        'Modernization while preserving Islamic values',
        'Youth education and employment',
        'Regional leadership and international cooperation'
      ],
      itemsAr: [
        'الرؤية 2030 والتنويع الاقتصادي',
        'التحديث مع الحفاظ على القيم الإسلامية',
        'تعليم وتوظيف الشباب',
        'القيادة الإقليمية والتعاون الدولي'
      ]
    },
    inspiringFacts: {
      title: 'Inspiring Facts',
      titleAr: 'حقائق ملهمة',
      facts: [
        'Home to the Kaaba, the holiest site in Islam',
        'Millions of Muslims visit annually for Hajj and Umrah',
        'Masjid al-Haram can accommodate over 2 million worshippers',
        'Rich tradition of Islamic scholarship and calligraphy'
      ],
      factsAr: [
        'موطن الكعبة المشرفة، أقدس موقع في الإسلام',
        'ملايين المسلمين يزورون سنوياً للحج والعمرة',
        'المسجد الحرام يتسع لأكثر من 2 مليون مصلي',
        'تقليد غني في العلوم الإسلامية والخط العربي'
      ]
    },
    mosques: {
      title: 'Famous Mosques',
      titleAr: 'المساجد الشهيرة',
      famous: [
        'Masjid al-Haram - Mecca (The Great Mosque)',
        'Masjid an-Nabawi - Medina (Prophet\'s Mosque)',
        'Masjid al-Qiblatayn - Medina (Two Qiblas Mosque)',
        'King Fahd Mosque - Jeddah (Modern masterpiece)'
      ],
      famousAr: [
        'المسجد الحرام - مكة المكرمة (المسجد الكبير)',
        'المسجد النبوي - المدينة المنورة (مسجد النبي)',
        'مسجد القبلتين - المدينة المنورة',
        'مسجد الملك فهد - جدة (تحفة حديثة)'
      ]
    },
    education: {
      title: 'Islamic Education',
      titleAr: 'التعليم الإسلامي',
      institutions: [
        'Umm al-Qura University - Mecca',
        'Islamic University of Medina',
        'King Abdulaziz University - Jeddah',
        'Thousands of religious schools and madrasas'
      ],
      institutionsAr: [
        'جامعة أم القرى - مكة المكرمة',
        'الجامعة الإسلامية بالمدينة المنورة',
        'جامعة الملك عبد العزيز - جدة',
        'آلاف المدارس الدينية والكتاتيب'
      ]
    }
  },
  iran: {
    id: 'iran',
    name: 'Iran',
    nameAr: 'إيران',
    flag: '🇮🇷',
    population: '82 million',
    percentage: '99%',
    capital: 'Tehran',
    capitalAr: 'طهران',
    language: 'Persian',
    languageAr: 'الفارسية',
    currency: 'Iranian Rial',
    currencyAr: 'الريال الإيراني',
    islamicHistory: {
      arrival: 'Islam arrived in Persia through Arab conquests, but Persian culture deeply influenced Islamic civilization',
      arrivalAr: 'وصل الإسلام إلى فارس من خلال الفتوحات العربية، لكن الثقافة الفارسية أثرت بعمق في الحضارة الإسلامية',
      keyEvents: [
        'Arab conquest of Persia (651 CE)',
        'Safavid Empire and Shia Islam (1501-1736)',
        'Qajar dynasty period (1789-1925)',
        'Islamic Revolution (1979)'
      ],
      keyEventsAr: [
        'الفتح العربي لفارس (651 م)',
        'الإمبراطورية الصفوية والإسلام الشيعي (1501-1736)',
        'فترة سلالة القاجار (1789-1925)',
        'الثورة الإسلامية (1979)'
      ]
    },
    culturalContributions: {
      title: 'Cultural & Religious Contributions',
      titleAr: 'المساهمات الثقافية والدينية',
      items: [
        'Persian poetry and literature (Rumi, Hafez)',
        'Islamic philosophy and theology',
        'Persian miniature art and calligraphy',
        'Sufi traditions and mystical poetry'
      ],
      itemsAr: [
        'الشعر والأدب الفارسي (الرومي، حافظ)',
        'الفلسفة واللاهوت الإسلامي',
        'فن المنمنمات والخط الفارسي',
        'التقاليد الصوفية والشعر الصوفي'
      ]
    },
    modernChallenges: {
      title: 'Modern Challenges & Opportunities',
      titleAr: 'التحديات والفرص الحديثة',
      items: [
        'Balancing tradition with modernity',
        'Scientific and technological advancement',
        'Regional influence and diplomacy',
        'Youth education and cultural preservation'
      ],
      itemsAr: [
        'الموازنة بين التقليد والحداثة',
        'التقدم العلمي والتكنولوجي',
        'النفوذ الإقليمي والدبلوماسية',
        'تعليم الشباب والحفاظ على الثقافة'
      ]
    },
    inspiringFacts: {
      title: 'Inspiring Facts',
      titleAr: 'حقائق ملهمة',
      facts: [
        'Home to some of the world\'s most beautiful mosques',
        'Rich tradition of Islamic philosophy and science',
        'Persian poetry translated into many languages',
        'Ancient cities with deep Islamic heritage'
      ],
      factsAr: [
        'موطن لبعض أجمل مساجد العالم',
        'تقليد غني في الفلسفة والعلوم الإسلامية',
        'الشعر الفارسي مترجم إلى العديد من اللغات',
        'مدن قديمة بتراث إسلامي عميق'
      ]
    },
    mosques: {
      title: 'Famous Mosques',
      titleAr: 'المساجد الشهيرة',
      famous: [
        'Imam Mosque - Isfahan (Safavid masterpiece)',
        'Shah Mosque - Isfahan (Blue tiles and architecture)',
        'Nasir al-Mulk Mosque - Shiraz (Pink Mosque)',
        'Vakil Mosque - Shiraz (Qajar era beauty)'
      ],
      famousAr: [
        'مسجد الإمام - أصفهان (تحفة صفوية)',
        'مسجد الشاه - أصفهان (البلاط الأزرق والعمارة)',
        'مسجد ناصر الملك - شيراز (المسجد الوردي)',
        'مسجد وكيل - شيراز (جمال عصر القاجار)'
      ]
    },
    education: {
      title: 'Islamic Education',
      titleAr: 'التعليم الإسلامي',
      institutions: [
        'University of Tehran Faculty of Theology',
        'Qom Seminary (Hawza)',
        'Traditional madrasas and modern Islamic schools',
        'Research centers for Islamic studies'
      ],
      institutionsAr: [
        'كلية الإلهيات بجامعة طهران',
        'الحوزة العلمية في قم',
        'المدارس الدينية التقليدية والمدارس الإسلامية الحديثة',
        'مراكز البحث في الدراسات الإسلامية'
      ]
    }
  },
  malaysia: {
    id: 'malaysia',
    name: 'Malaysia',
    nameAr: 'ماليزيا',
    flag: '🇲🇾',
    population: '20 million',
    percentage: '61%',
    capital: 'Kuala Lumpur',
    capitalAr: 'كوالا لومبور',
    language: 'Malay',
    languageAr: 'الملايو',
    currency: 'Malaysian Ringgit',
    currencyAr: 'الرينغيت الماليزي',
    islamicHistory: {
      arrival: 'Islam arrived in Malaysia through Arab and Indian traders, spreading peacefully through trade and cultural exchange',
      arrivalAr: 'وصل الإسلام إلى ماليزيا عبر التجار العرب والهنود، منتشراً سلمياً عبر التجارة والتبادل الثقافي',
      keyEvents: [
        'Early Muslim traders in Malacca (1400s)',
        'Establishment of Malacca Sultanate (1400)',
        'Spread to other Malay kingdoms',
        'Modern Islamic revival and development'
      ],
      keyEventsAr: [
        'التجار المسلمون الأوائل في ملقا (1400s)',
        'تأسيس سلطنة ملقا (1400)',
        'الانتشار إلى الممالك الملايو الأخرى',
        'النهضة الإسلامية الحديثة والتطوير'
      ]
    },
    culturalContributions: {
      title: 'Cultural & Religious Contributions',
      titleAr: 'المساهمات الثقافية والدينية',
      items: [
        'Islamic banking and finance leadership',
        'Multi-ethnic harmony and tolerance',
        'Modern Islamic architecture',
        'Educational excellence and innovation'
      ],
      itemsAr: [
        'القيادة في المصرفية والتمويل الإسلامي',
        'الوئام والتسامح متعدد الأعراق',
        'العمارة الإسلامية الحديثة',
        'التميز التعليمي والابتكار'
      ]
    },
    modernChallenges: {
      title: 'Modern Challenges & Opportunities',
      titleAr: 'التحديات والفرص الحديثة',
      items: [
        'Balancing Islamic values with multicultural society',
        'Economic development and Islamic finance',
        'Youth education and religious identity',
        'Regional leadership in Islamic cooperation'
      ],
      itemsAr: [
        'الموازنة بين القيم الإسلامية والمجتمع متعدد الثقافات',
        'التنمية الاقتصادية والتمويل الإسلامي',
        'تعليم الشباب والهوية الدينية',
        'القيادة الإقليمية في التعاون الإسلامي'
      ]
    },
    inspiringFacts: {
      title: 'Inspiring Facts',
      titleAr: 'حقائق ملهمة',
      facts: [
        'Pioneer in Islamic banking and finance',
        'Exemplary model of multi-ethnic harmony',
        'Modern Islamic architecture and urban planning',
        'Strong commitment to education and development'
      ],
      factsAr: [
        'رائد في المصرفية والتمويل الإسلامي',
        'نموذج مثالي للوئام متعدد الأعراق',
        'العمارة الإسلامية الحديثة والتخطيط الحضري',
        'التزام قوي بالتعليم والتنمية'
      ]
    },
    mosques: {
      title: 'Famous Mosques',
      titleAr: 'المساجد الشهيرة',
      famous: [
        'National Mosque - Kuala Lumpur (Modern design)',
        'Putra Mosque - Putrajaya (Pink granite beauty)',
        'Crystal Mosque - Terengganu (Glass architecture)',
        'Malacca Straits Mosque - Malacca (Floating mosque)'
      ],
      famousAr: [
        'المسجد الوطني - كوالا لومبور (تصميم حديث)',
        'مسجد بوترا - بوتراجايا (جمال الجرانيت الوردي)',
        'مسجد الكريستال - ترينغانو (عمارة زجاجية)',
        'مسجد مضيق ملقا - ملقا (مسجد عائم)'
      ]
    },
    education: {
      title: 'Islamic Education',
      titleAr: 'التعليم الإسلامي',
      institutions: [
        'International Islamic University Malaysia',
        'Universiti Sains Islam Malaysia',
        'Islamic schools and madrasas nationwide',
        'Research centers for Islamic studies'
      ],
      institutionsAr: [
        'الجامعة الإسلامية الدولية ماليزيا',
        'جامعة العلوم الإسلامية ماليزيا',
        'المدارس الإسلامية والكتاتيب في جميع أنحاء البلاد',
        'مراكز البحث في الدراسات الإسلامية'
      ]
    }
  }
};

export default function CountryDetail() {
  const { countryId } = useParams<{ countryId: string }>();
  const { i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';
  
  const country = countryId ? countryDetails[countryId] : null;

  if (!country) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background to-accent/20 flex items-center justify-center">
        <Card className="max-w-md mx-auto">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">
              {isArabic ? 'الدولة غير موجودة' : 'Country Not Found'}
            </h2>
            <p className="text-muted-foreground mb-6">
              {isArabic 
                ? 'عذراً، لم نتمكن من العثور على تفاصيل هذه الدولة.'
                : 'Sorry, we could not find details for this country.'
              }
            </p>
            <Link to="/countries">
              <Button variant="outline" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                {isArabic ? 'العودة للدول' : 'Back to Countries'}
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-accent/20">
      <div className="container max-w-6xl mx-auto py-12 px-4">
        {/* Header */}
        <div className="mb-8">
          <Link to="/countries">
            <Button variant="ghost" className="gap-2 mb-6">
              <ArrowLeft className="h-4 w-4" />
              {isArabic ? 'العودة للدول' : 'Back to Countries'}
            </Button>
          </Link>
          
          <div className="flex items-center gap-4 mb-6">
            <span className="text-6xl">{country.flag}</span>
            <div>
              <h1 className="text-4xl font-bold mb-2">
                {isArabic ? country.nameAr : country.name}
              </h1>
              <div className="flex gap-3">
                <Badge variant="secondary" className="flex items-center gap-1">
                  <Users className="h-3 w-3" />
                  {country.population}
                </Badge>
                <Badge variant="outline" className="flex items-center gap-1">
                  <MapPin className="h-3 w-3" />
                  {country.percentage}
                </Badge>
              </div>
            </div>
          </div>
        </div>

        {/* Basic Information */}
        <div className="grid gap-6 md:grid-cols-3 mb-8">
          <Card className="border-0 shadow-md">
            <CardContent className="p-6 text-center">
              <Building className="h-8 w-8 mx-auto mb-3 text-primary" />
              <h3 className="font-semibold mb-2">{isArabic ? 'العاصمة' : 'Capital'}</h3>
              <p className="text-muted-foreground">{isArabic ? country.capitalAr : country.capital}</p>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-md">
            <CardContent className="p-6 text-center">
              <Globe className="h-8 w-8 mx-auto mb-3 text-primary" />
              <h3 className="font-semibold mb-2">{isArabic ? 'اللغة' : 'Language'}</h3>
              <p className="text-muted-foreground">{isArabic ? country.languageAr : country.language}</p>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-md">
            <CardContent className="p-6 text-center">
              <Trophy className="h-8 w-8 mx-auto mb-3 text-primary" />
              <h3 className="font-semibold mb-2">{isArabic ? 'العملة' : 'Currency'}</h3>
              <p className="text-muted-foreground">{isArabic ? country.currencyAr : country.currency}</p>
            </CardContent>
          </Card>
        </div>

        {/* Islamic History */}
        <Card className="mb-8 border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              {isArabic ? 'التاريخ الإسلامي' : 'Islamic History'}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-lg leading-relaxed">
              {isArabic ? country.islamicHistory.arrivalAr : country.islamicHistory.arrival}
            </p>
            <div>
              <h4 className="font-semibold mb-3">{isArabic ? 'الأحداث الرئيسية:' : 'Key Events:'}</h4>
              <div className="grid gap-3 md:grid-cols-2">
                {(isArabic ? country.islamicHistory.keyEventsAr : country.islamicHistory.keyEvents).map((event, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-sm">{event}</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Two Column Layout */}
        <div className="grid gap-8 lg:grid-cols-2 mb-8">
          {/* Cultural Contributions */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-primary" />
                {isArabic ? country.culturalContributions.titleAr : country.culturalContributions.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {(isArabic ? country.culturalContributions.itemsAr : country.culturalContributions.items).map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <Star className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Modern Challenges */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-primary" />
                {isArabic ? country.modernChallenges.titleAr : country.modernChallenges.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {(isArabic ? country.modernChallenges.itemsAr : country.modernChallenges.items).map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Inspiring Facts */}
        <Card className="mb-8 border-0 shadow-lg bg-gradient-to-br from-green-50 to-emerald-100/50 dark:from-green-950/30 dark:to-emerald-900/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="h-5 w-5 text-green-600" />
              {isArabic ? country.inspiringFacts.titleAr : country.inspiringFacts.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              {(isArabic ? country.inspiringFacts.factsAr : country.inspiringFacts.facts).map((fact, index) => (
                <div key={index} className="bg-white/50 dark:bg-black/20 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <span className="text-sm font-medium">{fact}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Bottom Grid */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Famous Mosques */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building className="h-5 w-5 text-primary" />
                {isArabic ? country.mosques.titleAr : country.mosques.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {(isArabic ? country.mosques.famousAr : country.mosques.famous).map((mosque, index) => (
                  <div key={index} className="bg-accent/20 rounded-lg p-3">
                    <span className="text-sm font-medium">{mosque}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Education */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-primary" />
                {isArabic ? country.education.titleAr : country.education.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {(isArabic ? country.education.institutionsAr : country.education.institutions).map((institution, index) => (
                  <div key={index} className="bg-primary/10 rounded-lg p-3">
                    <span className="text-sm font-medium">{institution}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

