interface PersonalityData {
  name: string;
  nameAr: string;
  country: string;
  countryAr: string;
  birthYear: string;
  deathYear?: string;
  era: string;
  eraAr: string;
  title: string;
  titleAr: string;
  biography: string;
  biographyAr: string;
  achievements: string[];
  achievementsAr: string[];
  quotes: string[];
  quotesAr: string[];
  legacy: string;
  legacyAr: string;
  inspiringLessons: string[];
  inspiringLessonsAr: string[];
  relatedWorks: string[];
  relatedWorksAr: string[];
}

export const personalityData: Record<string, Record<number, PersonalityData>> = {
  indonesia: {
    0: {
      name: 'Wali Songo (Nine Saints)',
      nameAr: 'والي سونغو (الأولياء التسعة)',
      country: 'Indonesia',
      countryAr: 'إندونيسيا',
      birthYear: '15th-16th Century',
      era: 'Islamic Expansion Period',
      eraAr: 'فترة التوسع الإسلامي',
      title: 'Islamic Missionaries and Saints',
      titleAr: 'المبشرون والأولياء الإسلاميون',
      biography: 'The Wali Songo were nine Islamic saints who played a crucial role in spreading Islam throughout Java, Indonesia. They used peaceful methods, adapting Islamic teachings to local culture and traditions, making Islam accessible to the Javanese people.',
      biographyAr: 'والي سونغو هم تسعة أولياء إسلاميين لعبوا دوراً حاسماً في نشر الإسلام في جاوة، إندونيسيا. استخدموا الطرق السلمية، وكيفوا التعاليم الإسلامية مع الثقافة والتقاليد المحلية.',
      achievements: [
        'Peaceful conversion of millions to Islam',
        'Establishment of Islamic educational centers',
        'Integration of Islamic and Javanese culture',
        'Building of first major mosques in Java',
        'Development of Islamic art and architecture'
      ],
      achievementsAr: [
        'التحويل السلمي لملايين الناس إلى الإسلام',
        'تأسيس مراكز التعليم الإسلامي',
        'دمج الثقافة الإسلامية والجاوية',
        'بناء أول المساجد الكبرى في جاوة',
        'تطوير الفن والعمارة الإسلامية'
      ],
      quotes: [
        'Wisdom is the bridge between hearts and minds',
        'True faith grows in the soil of understanding',
        'The best teacher is one who learns from their students'
      ],
      quotesAr: [
        'الحكمة هي الجسر بين القلوب والعقول',
        'الإيمان الحقيقي ينمو في تربة الفهم',
        'أفضل معلم هو من يتعلم من طلابه'
      ],
      legacy: 'Their legacy lives on in Indonesian Islam\'s unique character - peaceful, tolerant, and culturally integrated.',
      legacyAr: 'إرثهم يعيش في الطابع الفريد للإسلام الإندونيسي - سلمي ومتسامح ومتكامل ثقافياً.',
      inspiringLessons: [
        'Patience and wisdom in spreading faith',
        'Importance of cultural sensitivity in religious outreach',
        'Power of leading by example',
        'Value of education in transformation'
      ],
      inspiringLessonsAr: [
        'الصبر والحكمة في نشر الإيمان',
        'أهمية الحساسية الثقافية في الدعوة الدينية',
        'قوة القيادة بالقدوة',
        'قيمة التعليم في التحول'
      ],
      relatedWorks: [
        'Serat Wali Songo (Historical Chronicles)',
        'Javanese Islamic Literature',
        'Traditional Mosque Architecture',
        'Islamic-Javanese Art Forms'
      ],
      relatedWorksAr: [
        'سيرات والي سونغو (السجلات التاريخية)',
        'الأدب الإسلامي الجاوي',
        'عمارة المساجد التقليدية',
        'أشكال الفن الإسلامي الجاوي'
      ]
    }
  },
  usa: {
    0: {
      name: 'Muhammad Ali',
      nameAr: 'محمد علي',
      country: 'United States',
      countryAr: 'الولايات المتحدة',
      birthYear: '1942',
      deathYear: '2016',
      era: 'Civil Rights Era',
      eraAr: 'عصر الحقوق المدنية',
      title: 'Boxing Champion and Civil Rights Activist',
      titleAr: 'بطل الملاكمة وناشط الحقوق المدنية',
      biography: 'Muhammad Ali was not only one of the greatest boxers of all time but also a powerful voice for civil rights and social justice.',
      biographyAr: 'محمد علي لم يكن فقط أحد أعظم الملاكمين في التاريخ بل أيضاً صوتاً قوياً للحقوق المدنية والعدالة الاجتماعية.',
      achievements: [
        'Three-time World Heavyweight Champion',
        'Olympic Gold Medalist (1960)',
        'Refused military service on religious grounds',
        'Global ambassador for peace and humanitarian causes'
      ],
      achievementsAr: [
        'بطل العالم للوزن الثقيل ثلاث مرات',
        'حائز على الذهبية الأولمبية (1960)',
        'رفض الخدمة العسكرية لأسباب دينية',
        'سفير عالمي للسلام والقضايا الإنسانية'
      ],
      quotes: [
        'Float like a butterfly, sting like a bee',
        'Service to others is the rent you pay for your room here on earth'
      ],
      quotesAr: [
        'احلق كالفراشة، اضرب كالنحلة',
        'خدمة الآخرين هي الإيجار الذي تدفعه لغرفتك هنا على الأرض'
      ],
      legacy: 'Ali\'s legacy extends far beyond boxing. He showed that athletes could be activists and that standing for principles matters.',
      legacyAr: 'إرث علي يمتد إلى ما هو أبعد من الملاكمة. أظهر أن الرياضيين يمكن أن يكونوا نشطاء وأن الوقوف مع المبادئ مهم.',
      inspiringLessons: [
        'Courage to stand for beliefs despite consequences',
        'Using fame and platform for social good',
        'Faith as source of strength'
      ],
      inspiringLessonsAr: [
        'الشجاعة للوقوف مع المعتقدات رغم العواقب',
        'استخدام الشهرة والمنصة للخير الاجتماعي',
        'الإيمان كمصدر للقوة'
      ],
      relatedWorks: [
        'The Greatest: My Own Story (Autobiography)',
        'Documentary: When We Were Kings',
        'Muhammad Ali Center (Louisville)'
      ],
      relatedWorksAr: [
        'الأعظم: قصتي الخاصة (السيرة الذاتية)',
        'وثائقي: عندما كنا ملوكاً',
        'مركز محمد علي (لويزفيل)'
      ]
    }
  }
};