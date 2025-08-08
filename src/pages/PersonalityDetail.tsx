import { useParams, Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, User, Calendar, MapPin, Star, BookOpen, Heart, Award, Quote, Lightbulb } from 'lucide-react';

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
      biography: 'The Wali Songo were nine Islamic saints who played a crucial role in spreading Islam throughout Java, Indonesia. They used peaceful methods, adapting Islamic teachings to local culture and traditions, making Islam accessible to the Javanese people. Their approach emphasized tolerance, wisdom, and cultural integration.',
      biographyAr: 'والي سونغو هم تسعة أولياء إسلاميين لعبوا دوراً حاسماً في نشر الإسلام في جاوة، إندونيسيا. استخدموا الطرق السلمية، وكيفوا التعاليم الإسلامية مع الثقافة والتقاليد المحلية، مما جعل الإسلام في متناول الشعب الجاوي. ركز نهجهم على التسامح والحكمة والتكامل الثقافي.',
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
      legacy: 'Their legacy lives on in Indonesian Islam\'s unique character - peaceful, tolerant, and culturally integrated. They demonstrated that Islam could flourish while respecting local traditions, creating a model for religious harmony that continues to inspire.',
      legacyAr: 'إرثهم يعيش في الطابع الفريد للإسلام الإندونيسي - سلمي ومتسامح ومتكامل ثقافياً. أظهروا أن الإسلام يمكن أن يزدهر مع احترام التقاليد المحلية، مما خلق نموذجاً للوئام الديني يستمر في الإلهام.',
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
    },
    1: {
      name: 'Sheikh Ahmad Dahlan',
      nameAr: 'الشيخ أحمد دحلان',
      country: 'Indonesia',
      countryAr: 'إندونيسيا',
      birthYear: '1868',
      deathYear: '1923',
      era: 'Islamic Reform Movement',
      eraAr: 'حركة الإصلاح الإسلامي',
      title: 'Islamic Reformer and Educator',
      titleAr: 'مصلح إسلامي ومربي',
      biography: 'Sheikh Ahmad Dahlan was a prominent Islamic reformer who founded Muhammadiyah, one of Indonesia\'s largest Islamic organizations. He advocated for modern Islamic education, women\'s rights, and social reform while maintaining Islamic principles. His work bridged traditional Islamic scholarship with modern educational methods.',
      biographyAr: 'الشيخ أحمد دحلان كان مصلحاً إسلامياً بارزاً أسس المحمدية، إحدى أكبر المنظمات الإسلامية في إندونيسيا. دعا إلى التعليم الإسلامي الحديث وحقوق المرأة والإصلاح الاجتماعي مع الحفاظ على المبادئ الإسلامية. عمله ربط بين العلوم الإسلامية التقليدية والطرق التعليمية الحديثة.',
      achievements: [
        'Founded Muhammadiyah organization (1912)',
        'Established modern Islamic schools',
        'Promoted women\'s education and rights',
        'Reformed Islamic teaching methods',
        'Built hospitals and social institutions'
      ],
      achievementsAr: [
        'أسس منظمة المحمدية (1912)',
        'أنشأ المدارس الإسلامية الحديثة',
        'روج لتعليم المرأة وحقوقها',
        'أصلح طرق التعليم الإسلامي',
        'بنى المستشفيات والمؤسسات الاجتماعية'
      ],
      quotes: [
        'Education is the key to progress and enlightenment',
        'Islam must adapt to modern times without losing its essence',
        'Women are equal partners in building society'
      ],
      quotesAr: [
        'التعليم هو مفتاح التقدم والتنوير',
        'يجب أن يتكيف الإسلام مع العصر الحديث دون فقدان جوهره',
        'النساء شريكات متساويات في بناء المجتمع'
      ],
      legacy: 'Muhammadiyah continues to be a major force in Indonesian Islam, operating thousands of schools, universities, and hospitals. His vision of progressive Islam that embraces modernity while maintaining faith continues to influence millions.',
      legacyAr: 'المحمدية تستمر في كونها قوة رئيسية في الإسلام الإندونيسي، تدير آلاف المدارس والجامعات والمستشفيات. رؤيته للإسلام التقدمي الذي يحتضن الحداثة مع الحفاظ على الإيمان تستمر في التأثير على الملايين.',
      inspiringLessons: [
        'Balance between tradition and progress',
        'Importance of education in empowerment',
        'Social responsibility as Islamic duty',
        'Gender equality in Islamic context'
      ],
      inspiringLessonsAr: [
        'التوازن بين التقليد والتقدم',
        'أهمية التعليم في التمكين',
        'المسؤولية الاجتماعية كواجب إسلامي',
        'المساواة بين الجنسين في السياق الإسلامي'
      ],
      relatedWorks: [
        'Muhammadiyah Educational System',
        'Islamic Reform Literature',
        'Social Welfare Programs',
        'Women\'s Rights Advocacy'
      ],
      relatedWorksAr: [
        'نظام التعليم المحمدي',
        'أدب الإصلاح الإسلامي',
        'برامج الرعاية الاجتماعية',
        'الدعوة لحقوق المرأة'
      ]
    }
    ,
    2: {
      name: 'Muhammad Iqdam Khalid',
      nameAr: 'محمد إقدام خالد',
      country: 'Indonesia',
      countryAr: 'إندونيسيا',
      birthYear: '20th Century',
      era: 'Modern Islamic Education',
      eraAr: 'التعليم الإسلامي المعاصر',
      title: 'Community Educator and Daʻwah Advocate',
      titleAr: 'مربي مجتمعي وداعية',
      biography: 'An Indonesian educator known for strengthening community-based Islamic education, youth mentorship, and media content that connects values with daily life.',
      biographyAr: 'مربي إندونيسي معروف بتعزيز التعليم الإسلامي المجتمعي، ورعاية الشباب، وصناعة محتوى إعلامي يربط القيم بالحياة اليومية.',
      achievements: [
        'Built youth mentorship programs',
        'Produced accessible Islamic media content',
        'Supported community literacy and social welfare'
      ],
      achievementsAr: [
        'إنشاء برامج رعاية الشباب',
        'إنتاج محتوى إعلامي إسلامي مبسط',
        'دعم محو الأمية والرعاية الاجتماعية في المجتمع'
      ],
      quotes: [
        'Knowledge with service transforms societies'
      ],
      quotesAr: [
        'العلم مع الخدمة يغيّر المجتمعات'
      ],
      legacy: 'Inspired a generation to blend learning, service, and creativity for the common good.',
      legacyAr: 'ألهم جيلاً لدمج التعلم والخدمة والإبداع للخير العام.',
      inspiringLessons: [
        'Invest in youth',
        'Use modern tools for daʻwah',
        'Serve with humility'
      ],
      inspiringLessonsAr: [
        'الاستثمار في الشباب',
        'استخدام الأدوات الحديثة في الدعوة',
        'الخدمة بتواضع'
      ],
      relatedWorks: ['Community curricula', 'Educational videos'],
      relatedWorksAr: ['مناهج مجتمعية', 'مواد تعليمية مرئية']
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
      biography: 'Muhammad Ali, born Cassius Clay, was not only one of the greatest boxers of all time but also a powerful voice for civil rights and social justice. His conversion to Islam and refusal to serve in the Vietnam War made him a controversial but influential figure who stood by his principles.',
      biographyAr: 'محمد علي، المولود باسم كاسيوس كلاي، لم يكن فقط أحد أعظم الملاكمين في التاريخ بل أيضاً صوتاً قوياً للحقوق المدنية والعدالة الاجتماعية. إسلامه ورفضه الخدمة في حرب فيتنام جعله شخصية مثيرة للجدل لكن مؤثرة وقف بجانب مبادئه.',
      achievements: [
        'Three-time World Heavyweight Champion',
        'Olympic Gold Medalist (1960)',
        'Refused military service on religious grounds',
        'Global ambassador for peace and humanitarian causes',
        'Overcame Parkinson\'s disease with dignity'
      ],
      achievementsAr: [
        'بطل العالم للوزن الثقيل ثلاث مرات',
        'حائز على الذهبية الأولمبية (1960)',
        'رفض الخدمة العسكرية لأسباب دينية',
        'سفير عالمي للسلام والقضايا الإنسانية',
        'تغلب على مرض باركنسون بكرامة'
      ],
      quotes: [
        'Float like a butterfly, sting like a bee',
        'I am not going 10,000 miles from home to help murder and burn another poor nation',
        'Service to others is the rent you pay for your room here on earth'
      ],
      quotesAr: [
        'احلق كالفراشة، اضرب كالنحلة',
        'لن أذهب 10,000 ميل من المنزل لمساعدة قتل وحرق أمة فقيرة أخرى',
        'خدمة الآخرين هي الإيجار الذي تدفعه لغرفتك هنا على الأرض'
      ],
      legacy: 'Ali\'s legacy extends far beyond boxing. He showed that athletes could be activists, that standing for principles matters more than personal gain, and that faith can give strength to face any challenge.',
      legacyAr: 'إرث علي يمتد إلى ما هو أبعد من الملاكمة. أظهر أن الرياضيين يمكن أن يكونوا نشطاء، وأن الوقوف مع المبادئ أهم من المكاسب الشخصية، وأن الإيمان يمكن أن يعطي القوة لمواجهة أي تحدٍ.',
      inspiringLessons: [
        'Courage to stand for beliefs despite consequences',
        'Using fame and platform for social good',
        'Dignity in facing personal challenges',
        'Faith as source of strength'
      ],
      inspiringLessonsAr: [
        'الشجاعة للوقوف مع المعتقدات رغم العواقب',
        'استخدام الشهرة والمنصة للخير الاجتماعي',
        'الكرامة في مواجهة التحديات الشخصية',
        'الإيمان كمصدر للقوة'
      ],
      relatedWorks: [
        'The Greatest: My Own Story (Autobiography)',
        'Documentary: When We Were Kings',
        'Muhammad Ali Center (Louisville)',
        'Various humanitarian missions'
      ],
      relatedWorksAr: [
        'الأعظم: قصتي الخاصة (السيرة الذاتية)',
        'وثائقي: عندما كنا ملوكاً',
        'مركز محمد علي (لويزفيل)',
        'مهام إنسانية متنوعة'
      ]
    },
    1: {
      name: 'Malcolm X',
      nameAr: 'مالكوم إكس',
      country: 'United States',
      countryAr: 'الولايات المتحدة',
      birthYear: '1925',
      deathYear: '1965',
      era: 'Civil Rights Era',
      eraAr: 'عصر الحقوق المدنية',
      title: 'Human Rights Activist and Muslim Minister',
      titleAr: 'ناشط حقوق الإنسان ووزير مسلم',
      biography: 'Malcolm X was a prominent African American Muslim minister and human rights activist who was a courageous advocate for the rights of black Americans, a scathing critic of white America, and a powerful spokesman for black pride. He is credited with raising the self-esteem of black Americans and reconnecting them with their African and Islamic heritage.',
      biographyAr: 'مالكوم إكس كان وزيراً مسلماً أمريكياً أفريقياً بارزاً وناشطاً في مجال حقوق الإنسان، وكان مدافعاً شجاعاً عن حقوق الأمريكيين السود، وناقداً لاذعاً لأمريكا البيضاء، ومتحدثاً قوياً عن الفخر الأسود. يُنسب إليه الفضل في رفع تقدير الذات لدى الأمريكيين السود وإعادة ربطهم بتراثهم الأفريقي والإسلامي.',
      achievements: [
        'Inspired black pride and self-reliance',
        'Challenged racial segregation and discrimination',
        'Promoted human rights on an international stage',
        'Influenced the Black Power movement',
        'Authored \'The Autobiography of Malcolm X\''
      ],
      achievementsAr: [
        'ألهم الفخر الأسود والاعتماد على الذات',
        'تحدى الفصل العنصري والتمييز',
        'روج لحقوق الإنسان على الساحة الدولية',
        'أثر على حركة القوة السوداء',
        'مؤلف كتاب \'سيرة مالكوم إكس الذاتية\''
      ],
      quotes: [
        'By any means necessary',
        'If you\'re not careful, the newspapers will have you hating the people who are being oppressed, and loving the people who are doing the oppressing',
        'Education is the passport to the future, for tomorrow belongs to those who prepare for it today'
      ],
      quotesAr: [
        'بأي وسيلة ضرورية',
        'إذا لم تكن حذراً، فإن الصحف ستجعلك تكره المضطهدين، وتحب المضطهدين',
        'التعليم هو جواز سفر المستقبل، فغداً ملك لأولئك الذين يستعدون له اليوم'
      ],
      legacy: 'Malcolm X\'s ideas and activism continue to influence movements for racial justice and human rights globally. His transformation from a radical separatist to a more inclusive advocate for human rights remains a powerful narrative.',
      legacyAr: 'تستمر أفكار مالكوم إكس ونشاطه في التأثير على حركات العدالة العرقية وحقوق الإنسان عالمياً. تحوله من انفصالي راديكالي إلى مدافع أكثر شمولاً عن حقوق الإنسان يظل قصة قوية.',
      inspiringLessons: [
        'Power of self-education and transformation',
        'Importance of challenging injustice',
        'Courage to evolve one\'s beliefs',
        'Advocacy for human dignity and self-respect'
      ],
      inspiringLessonsAr: [
        'قوة التعليم الذاتي والتحول',
        'أهمية تحدي الظلم',
        'الشجاعة لتطوير معتقدات الفرد',
        'الدعوة إلى الكرامة الإنسانية واحترام الذات'
      ],
      relatedWorks: [
        'The Autobiography of Malcolm X',
        'Speeches and Essays of Malcolm X',
        'Documentary: Malcolm X (1992 film)'
      ],
      relatedWorksAr: [
        'سيرة مالكوم إكس الذاتية',
        'خطب ومقالات مالكوم إكس',
        'وثائقي: مالكوم إكس (فيلم 1992)'
      ]
    }
  },
  pakistan: {
    0: {
      name: 'Abul A\'la Maududi',
      nameAr: 'أبو الأعلى المودودي',
      country: 'Pakistan',
      countryAr: 'باكستان',
      birthYear: '1903',
      deathYear: '1979',
      era: 'Islamic Revival Movement',
      eraAr: 'حركة النهضة الإسلامية',
      title: 'Islamic Scholar and Political Thinker',
      titleAr: 'عالم إسلامي ومفكر سياسي',
      biography: 'Abul A\'la Maududi was a prominent Islamic scholar, journalist, and political philosopher who founded the Jamaat-e-Islami party. He advocated for an Islamic state based on Islamic principles and wrote extensively on Islamic governance, economics, and social issues.',
      biographyAr: 'أبو الأعلى المودودي كان عالماً إسلامياً بارزاً وصحفياً وفيلسوفاً سياسياً أسس حزب الجماعة الإسلامية. دعا إلى دولة إسلامية مبنية على المبادئ الإسلامية وكتب بشكل واسع عن الحكم الإسلامي والاقتصاد والقضايا الاجتماعية.',
      achievements: [
        'Founded Jamaat-e-Islami (1941)',
        'Authored over 120 books on Islamic topics',
        'Influenced Islamic political thought globally',
        'Established Islamic educational institutions',
        'Advocated for Islamic banking and economics'
      ],
      achievementsAr: [
        'أسس الجماعة الإسلامية (1941)',
        'ألف أكثر من 120 كتاباً في المواضيع الإسلامية',
        'أثر على الفكر السياسي الإسلامي عالمياً',
        'أنشأ المؤسسات التعليمية الإسلامية',
        'دعا إلى المصرفية والاقتصاد الإسلامي'
      ],
      quotes: [
        'Islam is not a religion in the common sense of the word',
        'The purpose of Islam is to establish a social order',
        'Islamic state is not a theocracy but a democracy'
      ],
      quotesAr: [
        'الإسلام ليس ديناً بالمعنى الشائع للكلمة',
        'هدف الإسلام هو إقامة نظام اجتماعي',
        'الدولة الإسلامية ليست ثيوقراطية بل ديمقراطية'
      ],
      legacy: 'Maududi\'s ideas continue to influence Islamic political thought and movements worldwide. His writings on Islamic governance and economics remain relevant for contemporary Muslim societies.',
      legacyAr: 'تستمر أفكار المودودي في التأثير على الفكر والحركات السياسية الإسلامية عالمياً. كتاباته عن الحكم الإسلامي والاقتصاد تبقى ذات صلة للمجتمعات المسلمة المعاصرة.',
      inspiringLessons: [
        'Importance of intellectual leadership in Islamic revival',
        'Balance between tradition and modern governance',
        'Comprehensive approach to Islamic reform',
        'Scholarly activism for social change'
      ],
      inspiringLessonsAr: [
        'أهمية القيادة الفكرية في النهضة الإسلامية',
        'التوازن بين التقليد والحكم الحديث',
        'النهج الشامل للإصلاح الإسلامي',
        'النشاط العلمي من أجل التغيير الاجتماعي'
      ],
      relatedWorks: [
        'Towards Understanding Islam',
        'Islamic Law and Constitution',
        'The Islamic Way of Life',
        'Economic System of Islam'
      ],
      relatedWorksAr: [
        'نحو فهم الإسلام',
        'القانون والدستور الإسلامي',
        'الطريقة الإسلامية للحياة',
        'النظام الاقتصادي في الإسلام'
      ]
    },
    1: {
      name: 'Allama Iqbal',
      nameAr: 'علامة إقبال',
      country: 'Pakistan',
      countryAr: 'باكستان',
      birthYear: '1877',
      deathYear: '1938',
      era: 'Poetry and Philosophy',
      eraAr: 'الشعر والفلسفة',
      title: 'Poet, Philosopher, and National Poet of Pakistan',
      titleAr: 'شاعر وفيلسوف والشاعر الوطني لباكستان',
      biography: 'Allama Iqbal was a renowned poet, philosopher, and politician who is considered the spiritual father of Pakistan. His poetry in Urdu and Persian inspired the Pakistan Movement and emphasized the revival of Islamic thought and culture.',
      biographyAr: 'علامة إقبال كان شاعراً وفيلسوفاً وسياسياً مشهوراً يعتبر الأب الروحي لباكستان. شعره بالأردية والفارسية ألهم حركة باكستان وأكد على إحياء الفكر والثقافة الإسلامية.',
      achievements: [
        'National poet of Pakistan',
        'Inspired Pakistan Movement',
        'Revolutionary Islamic philosophy',
        'Master of Urdu and Persian poetry',
        'Advocated for Muslim unity and identity'
      ],
      achievementsAr: [
        'الشاعر الوطني لباكستان',
        'ألهم حركة باكستان',
        'فلسفة إسلامية ثورية',
        'أستاذ الشعر الأردي والفارسي',
        'دعا إلى وحدة الهوية المسلمة'
      ],
      quotes: [
        'Khudi ko kar buland itna ke har taqdeer se pehle',
        'The ultimate aim of the ego is not to see something, but to be something',
        'Islam is itself destiny and will not suffer destiny'
      ],
      quotesAr: [
        'اجعل نفسك عالية جداً حتى قبل كل قدر',
        'الهدف النهائي للأنا ليس رؤية شيء بل أن تكون شيئاً',
        'الإسلام نفسه قدر ولن يعاني من القدر'
      ],
      legacy: 'Iqbal\'s poetry and philosophy continue to inspire Muslims worldwide. His vision of a modern Islamic society that balances tradition with progress remains relevant.',
      legacyAr: 'يستمر شعر وفلسفة إقبال في إلهام المسلمين عالمياً. رؤيته لمجتمع إسلامي حديث يوازن بين التقليد والتقدم تبقى ذات صلة.',
      inspiringLessons: [
        'Power of poetry in social and political change',
        'Importance of self-realization and khudi',
        'Balance between Islamic tradition and modernity',
        'Unity of Muslim ummah'
      ],
      inspiringLessonsAr: [
        'قوة الشعر في التغيير الاجتماعي والسياسي',
        'أهمية تحقيق الذات والخودي',
        'التوازن بين التقليد الإسلامي والحداثة',
        'وحدة الأمة المسلمة'
      ],
      relatedWorks: [
        'Bang-e-Dara (The Call of the Marching Bell)',
        'Zarb-e-Kalim (The Rod of Moses)',
        'Javed Nama (Book of Eternity)',
        'Reconstruction of Religious Thought in Islam'
      ],
      relatedWorksAr: [
        'بانگ درا (نداء الجرس المتقدم)',
        'ضرب كليم (عصا موسى)',
        'جاويد نامه (كتاب الخلود)',
        'إعادة بناء الفكر الديني في الإسلام'
      ]
    },
    2: {
      name: 'Shah Ahmad Shafi',
      nameAr: 'شاه أحمد شفيع',
      country: 'Pakistan',
      countryAr: 'باكستان',
      birthYear: '1916',
      deathYear: '2020',
      era: 'Contemporary Scholarship',
      eraAr: 'العلم المعاصر',
      title: 'Scholar and Educator',
      titleAr: 'عالم ومربٍ',
      biography: 'An influential scholar associated with South Asian scholarly networks, known for teaching, community guidance, and commitment to traditional learning.',
      biographyAr: 'عالم مؤثر مرتبط بشبكات العلم في جنوب آسيا، عُرف بالتدريس والإرشاد المجتمعي والالتزام بالتعلم التقليدي.',
      achievements: ['Leadership in education', 'Community guidance', 'Public lectures and writings'],
      achievementsAr: ['القيادة التعليمية', 'الإرشاد المجتمعي', 'محاضرات وكتابات عامة'],
      quotes: ['Knowledge shapes character'],
      quotesAr: ['العلم يصنع الشخصية'],
      legacy: 'Contributed to continuity of classical Islamic learning in the region.',
      legacyAr: 'أسهم في استمرارية التعلم الإسلامي الكلاسيكي في المنطقة.',
      inspiringLessons: ['Teach with compassion', 'Preserve scholarly chains'],
      inspiringLessonsAr: ['التعليم برحمة', 'حفظ السند العلمي'],
      relatedWorks: ['Lessons, epistles, community projects'],
      relatedWorksAr: ['دروس ورسائل ومشاريع مجتمعية']
    }
  },
  turkey: {
    0: {
      name: 'Sultan Mehmed II',
      nameAr: 'السلطان محمد الثاني',
      country: 'Turkey',
      countryAr: 'تركيا',
      birthYear: '1432',
      deathYear: '1481',
      era: 'Ottoman Empire',
      eraAr: 'الإمبراطورية العثمانية',
      title: 'The Conqueror (Fatih Sultan Mehmed)',
      titleAr: 'الفاتح (فاتح سلطان محمد)',
      biography: 'Mehmed II, known as Mehmed the Conqueror, was the Ottoman Sultan who conquered Constantinople in 1453, ending the Byzantine Empire. He was a patron of arts, sciences, and Islamic scholarship, transforming Istanbul into a major cultural center.',
      biographyAr: 'محمد الثاني، المعروف بمحمد الفاتح، كان السلطان العثماني الذي فتح القسطنطينية عام 1453، منهياً الإمبراطورية البيزنطية. كان راعياً للفنون والعلوم والعلوم الإسلامية، محولاً إسطنبول إلى مركز ثقافي رئيسي.',
      achievements: [
        'Conquered Constantinople (1453)',
        'Ended Byzantine Empire',
        'Established Istanbul as Ottoman capital',
        'Patron of arts and sciences',
        'Built numerous mosques and institutions'
      ],
      achievementsAr: [
        'فتح القسطنطينية (1453)',
        'أنهى الإمبراطورية البيزنطية',
        'أسس إسطنبول كعاصمة عثمانية',
        'راعٍ للفنون والعلوم',
        'بنى العديد من المساجد والمؤسسات'
      ],
      quotes: [
        'Either I shall conquer Constantinople or Constantinople shall conquer me',
        'The sword and the pen are the two eyes of the sultan',
        'I am not a sultan of the sword, but a sultan of the pen'
      ],
      quotesAr: [
        'إما أن أفهم القسطنطينية أو تفهمني القسطنطينية',
        'السيف والقلم هما عينا السلطان',
        'لست سلطان السيف بل سلطان القلم'
      ],
      legacy: 'Mehmed II\'s conquest of Constantinople marked the beginning of a new era in world history. His patronage of arts and sciences helped preserve and develop Islamic culture during the Ottoman period.',
      legacyAr: 'فتح محمد الثاني للقسطنطينية مثل بداية عصر جديد في تاريخ العالم. رعايته للفنون والعلوم ساعدت في الحفاظ على الثقافة الإسلامية وتطويرها خلال الفترة العثمانية.',
      inspiringLessons: [
        'Strategic vision and military leadership',
        'Patronage of arts and sciences',
        'Tolerance and cultural diversity',
        'Legacy of conquest and civilization'
      ],
      inspiringLessonsAr: [
        'الرؤية الاستراتيجية والقيادة العسكرية',
        'رعاية الفنون والعلوم',
        'التسامح والتنوع الثقافي',
        'إرث الفتح والحضارة'
      ],
      relatedWorks: [
        'Topkapi Palace - Istanbul',
        'Fatih Mosque Complex',
        'Ottoman architectural legacy',
        'Islamic calligraphy and art'
      ],
      relatedWorksAr: [
        'قصر طوب كابي - إسطنبول',
        'مجمع مسجد الفاتح',
        'إرث العمارة العثمانية',
        'الخط العربي والفن الإسلامي'
      ]
    },
    1: {
      name: 'Mustafa Kemal Atatürk',
      nameAr: 'مصطفى كمال أتاتورك',
      country: 'Turkey',
      countryAr: 'تركيا',
      birthYear: '1881',
      deathYear: '1938',
      era: 'Modern Turkey',
      eraAr: 'تركيا الحديثة',
      title: 'Founder of Modern Turkey',
      titleAr: 'مؤسس تركيا الحديثة',
      biography: 'Mustafa Kemal Atatürk was the founder and first President of the Republic of Turkey. He led the Turkish War of Independence and implemented sweeping reforms to modernize Turkey, including secularization, women\'s rights, and educational reforms.',
      biographyAr: 'مصطفى كمال أتاتورك كان مؤسس وأول رئيس لجمهورية تركيا. قاد حرب الاستقلال التركية ونفذ إصلاحات شاملة لتحديث تركيا، بما في ذلك العلمنة وحقوق المرأة والإصلاحات التعليمية.',
      achievements: [
        'Led Turkish War of Independence (1919-1923)',
        'Founded Republic of Turkey (1923)',
        'Implemented secular reforms',
        'Established modern education system',
        'Granted women voting rights (1934)'
      ],
      achievementsAr: [
        'قاد حرب الاستقلال التركية (1919-1923)',
        'أسس جمهورية تركيا (1923)',
        'نفذ الإصلاحات العلمانية',
        'أنشأ نظام التعليم الحديث',
        'منح النساء حق التصويت (1934)'
      ],
      quotes: [
        'Peace at home, peace in the world',
        'The truest mentor in life is science',
        'Sovereignty belongs to the people unconditionally'
      ],
      quotesAr: [
        'السلام في الداخل، السلام في العالم',
        'أصدق مرشد في الحياة هو العلم',
        'السيادة تنتمي للشعب بلا شروط'
      ],
      legacy: 'Atatürk\'s reforms transformed Turkey into a modern, secular nation while preserving its cultural heritage. His vision of a modern Turkish state continues to influence the country\'s development.',
      legacyAr: 'إصلاحات أتاتورك حولت تركيا إلى أمة حديثة وعلمانية مع الحفاظ على تراثها الثقافي. رؤيته للدولة التركية الحديثة تستمر في التأثير على تطور البلاد.',
      inspiringLessons: [
        'Leadership in times of crisis and change',
        'Balance between tradition and modernity',
        'Importance of education and science',
        'National unity and independence'
      ],
      inspiringLessonsAr: [
        'القيادة في أوقات الأزمات والتغيير',
        'التوازن بين التقليد والحداثة',
        'أهمية التعليم والعلم',
        'الوحدة الوطنية والاستقلال'
      ],
      relatedWorks: [
        'Republic of Turkey Constitution',
        'Modern Turkish education system',
        'Secular reforms and institutions',
        'Turkish nationalism and identity'
      ],
      relatedWorksAr: [
        'دستور جمهورية تركيا',
        'نظام التعليم التركي الحديث',
        'الإصلاحات والمؤسسات العلمانية',
        'القومية والهوية التركية'
      ]
    }
  }
  ,
  india: {
    0: {
      name: 'Abul Hasan Ali Nadwi',
      nameAr: 'أبو الحسن علي الندوي',
      country: 'India',
      countryAr: 'الهند',
      birthYear: '1914',
      deathYear: '1999',
      era: '20th Century Islamic Thought',
      eraAr: 'الفكر الإسلامي في القرن العشرين',
      title: 'Scholar, Writer, and Daʻwah Leader',
      titleAr: 'عالم وكاتب وقائد دعوي',
      biography: 'A leading Indian Muslim scholar, head of Nadwatul Ulama, prolific author who emphasized spiritual revival and balanced engagement with modernity.',
      biographyAr: 'عالم مسلم هندي بارز، ترأس ندوة العلماء، مؤلف غزير الإنتاج ركز على النهضة الروحية والتوازن مع معطيات العصر.',
      achievements: ['Led Nadwatul Ulama', 'Authored landmark works like “Saviours of Islamic Spirit”', 'Promoted balanced daʻwah worldwide'],
      achievementsAr: ['قيادة ندوة العلماء', 'تأليف أعمال مهمة مثل "رجال الفكر والدعوة"', 'تعزيز الدعوة المتوازنة عالمياً'],
      quotes: ['Faith revives hearts and directs civilization', 'Islamic reform starts from the soul and radiates outward'],
      quotesAr: ['الإيمان يحيي القلوب ويوجه الحضارة', 'الإصلاح الإسلامي يبدأ من النفس وينتشر للخارج'],
      legacy: 'Inspired Islamic revival movements with emphasis on scholarship, spirituality, and service.',
      legacyAr: 'ألهم حركات النهضة الإسلامية مع التركيز على العلم والروحانية والخدمة.',
      inspiringLessons: ['Combine knowledge and spirituality', 'Engage modernity without losing identity'],
      inspiringLessonsAr: ['الجمع بين العلم والروحانية', 'التعامل مع الحداثة دون فقدان الهوية'],
      relatedWorks: ['Saviours of Islamic Spirit', 'What Did the World Lose by the Decline of the Muslims?'],
      relatedWorksAr: ['رجال الفكر والدعوة', 'ماذا خسر العالم بانحطاط المسلمين؟']
    },
    1: {
      name: 'Sheikh Abu Bakr Ahmad Musliyar',
      nameAr: 'الشيخ أبو بكر أحمد مسليار',
      country: 'India',
      countryAr: 'الهند',
      birthYear: '1931',
      era: 'Contemporary Leadership',
      eraAr: 'القيادة المعاصرة',
      title: 'Scholar and Community Leader (Kerala)',
      titleAr: 'عالم وقائد مجتمعي (كيرالا)',
      biography: 'Leader from Kerala known for Islamic education, social service, and inter-community harmony.',
      biographyAr: 'قائد من كيرالا معروف بالتعليم الإسلامي والخدمة الاجتماعية والوئام بين المكونات.',
      achievements: ['Led major educational networks', 'Expanded social services'],
      achievementsAr: ['قيادة شبكات تعليمية كبرى', 'توسيع الخدمات الاجتماعية'],
      quotes: ['Education anchors identity'],
      quotesAr: ['التعليم يرسخ الهوية'],
      legacy: 'Helped strengthen balanced religious education in southern India.',
      legacyAr: 'ساهم في تقوية التعليم الديني المتوازن في جنوب الهند.',
      inspiringLessons: ['Balance and inclusivity'],
      inspiringLessonsAr: ['التوازن والشمول'],
      relatedWorks: ['Institutional building'],
      relatedWorksAr: ['بناء المؤسسات']
    },
    2: {
      name: 'Maulana Abul Kalam Azad',
      nameAr: 'مولانا أبو الكلام آزاد',
      country: 'India',
      countryAr: 'الهند',
      birthYear: '1888',
      deathYear: '1958',
      era: 'Freedom Movement & Education',
      eraAr: 'حركة الاستقلال والتعليم',
      title: 'Scholar, Freedom Leader, India’s first Education Minister',
      titleAr: 'عالم وقائد استقلال وأول وزير تعليم للهند',
      biography: 'A leading intellectual of the Indian freedom movement; advanced modern education while promoting Muslim participation in a plural nation.',
      biographyAr: 'مفكر بارز في حركة استقلال الهند؛ دفع بالتعليم الحديث مع تعزيز مشاركة المسلمين في دولة متعددة.',
      achievements: ['Leadership in freedom movement', 'University Grants Commission', 'Educational reforms'],
      achievementsAr: ['القيادة في حركة الاستقلال', 'لجنة المنح الجامعية', 'إصلاحات تعليمية'],
      quotes: ['Education is the foundation of freedom'],
      quotesAr: ['التعليم أساس الحرية'],
      legacy: 'Left a lasting mark on Indian education and inter-communal harmony.',
      legacyAr: 'ترك أثراً باقياً على التعليم والوئام بين المكونات في الهند.',
      inspiringLessons: ['Courage, scholarship, nation-building'],
      inspiringLessonsAr: ['الشجاعة والعلم وبناء الأوطان'],
      relatedWorks: ['India Wins Freedom'],
      relatedWorksAr: ['الهند تنال الحرية']
    }
  },
  bangladesh: {
    0: {
      name: 'Shah Ahmad Shafi',
      nameAr: 'شاه أحمد شفيع',
      country: 'Bangladesh',
      countryAr: 'بنغلاديش',
      birthYear: '1916',
      deathYear: '2020',
      era: 'Contemporary Scholarship',
      eraAr: 'العلم المعاصر',
      title: 'Islamic Scholar and Educator',
      titleAr: 'عالم ومُربي إسلامي',
      biography: 'Bangladeshi scholar known for Islamic education and preserving traditional scholarship.',
      biographyAr: 'عالم بنغالي معروف بدوره في التعليم الإسلامي والمحافظة على التراث العلمي.',
      achievements: ['Led large educational institutions', 'Advocated for Islamic values in society'],
      achievementsAr: ['قيادة مؤسسات تعليمية كبرى', 'الدعوة للقيم الإسلامية في المجتمع'],
      quotes: ['Education is the backbone of the nation', 'Faith must reflect in character'],
      quotesAr: ['التعليم عماد الأمة', 'الإيمان يجب أن يظهر في السلوك'],
      legacy: 'Contributed to Islamic education networks across Bangladesh.',
      legacyAr: 'ساهم في شبكات التعليم الإسلامي في بنغلاديش.',
      inspiringLessons: ['Build institutions', 'Teach by character and service'],
      inspiringLessonsAr: ['بناء المؤسسات', 'التعليم بالقدوة والخدمة'],
      relatedWorks: ['Lectures and educational programs'],
      relatedWorksAr: ['محاضرات وبرامج تعليمية']
    },
    1: {
      name: 'Muhammad Abdul Malik',
      nameAr: 'محمد عبد المالك',
      country: 'Bangladesh',
      countryAr: 'بنغلاديش',
      birthYear: '20th Century',
      era: 'Contemporary Scholarship',
      eraAr: 'العلم المعاصر',
      title: 'Scholar and Community Servant',
      titleAr: 'عالم وخادم للمجتمع',
      biography: 'Bangladeshi scholar noted for teaching, guidance, and strengthening Islamic education.',
      biographyAr: 'عالم بنغالي بارز في التدريس والإرشاد وتعزيز التعليم الإسلامي.',
      achievements: ['Teaching and authorship', 'Social welfare initiatives'],
      achievementsAr: ['التدريس والتأليف', 'مبادرات للرعاية الاجتماعية'],
      quotes: ['Serve people to serve faith'],
      quotesAr: ['خدمة الناس من خدمة الدين'],
      legacy: 'Role model of service-driven scholarship.',
      legacyAr: 'قدوة في علمٍ يقوده خدمة المجتمع.',
      inspiringLessons: ['Service, clarity, sincerity'],
      inspiringLessonsAr: ['الخدمة والوضوح والإخلاص'],
      relatedWorks: ['Lectures, essays'],
      relatedWorksAr: ['محاضرات ومقالات']
    },
    2: {
      name: 'Taj al-Islam',
      nameAr: 'تاج الإسلام',
      country: 'Bangladesh',
      countryAr: 'بنغلاديش',
      birthYear: '—',
      era: 'Community Leadership',
      eraAr: 'القيادة المجتمعية',
      title: 'Community Organizer',
      titleAr: 'منظم مجتمعي',
      biography: 'Known for organizing youth circles, Quran learning, and charity drives across districts.',
      biographyAr: 'معروف بتنظيم دوائر للشباب، وتعليم القرآن، وحملات خيرية في مناطق متعددة.',
      achievements: ['Youth circles', 'Charity coordination', 'Education support'],
      achievementsAr: ['دوائر شبابية', 'تنسيق الأعمال الخيرية', 'دعم التعليم'],
      quotes: ['Small consistent deeds build nations'],
      quotesAr: ['الأعمال الصغيرة المستمرة تبني الأمم'],
      legacy: 'Inspired volunteers to sustain community service.',
      legacyAr: 'ألهم المتطوعين لاستدامة خدمة المجتمع.',
      inspiringLessons: ['Continuity, teamwork'],
      inspiringLessonsAr: ['الاستمرارية والعمل الجماعي'],
      relatedWorks: ['Local campaigns'],
      relatedWorksAr: ['حملات محلية']
    }
  },
  nigeria: {
    0: {
      name: 'Usman dan Fodio',
      nameAr: 'عثمان دان فوديو',
      country: 'Nigeria',
      countryAr: 'نيجيريا',
      birthYear: '1754',
      deathYear: '1817',
      era: 'Sokoto Caliphate',
      eraAr: 'خلافة سوكوتو',
      title: 'Scholar, Reformer, and Leader',
      titleAr: 'عالم ومصلح وقائد',
      biography: 'Founder of the Sokoto Caliphate, led a reform movement emphasizing justice, education, and Islamic governance.',
      biographyAr: 'مؤسس خلافة سوكوتو، قاد حركة إصلاح ركزت على العدل والتعليم والحكم الإسلامي.',
      achievements: ['Established Sokoto Caliphate', 'Expanded Islamic education'],
      achievementsAr: ['تأسيس خلافة سوكوتو', 'توسيع التعليم الإسلامي'],
      quotes: ['Justice is the pillar of rulership', 'Knowledge is a duty for rulers and ruled'],
      quotesAr: ['العدل عماد الحكم', 'العلم واجب على الحاكم والمحكوم'],
      legacy: 'Transformed West African Islamic scholarship and governance.',
      legacyAr: 'غيّر مسار العلم والحكم الإسلامي في غرب إفريقيا.',
      inspiringLessons: ['Lead with justice', 'Institutionalize education'],
      inspiringLessonsAr: ['القيادة بالعدل', 'مأسسة التعليم'],
      relatedWorks: ['Manhaj al-Abidin (attributed works)', 'Letters and treatises'],
      relatedWorksAr: ['منهج العابدين (منسوب)', 'رسائل ورسائل علمية']
    },
    1: {
      name: 'Sheikh Ibrahim Zakzaky',
      nameAr: 'الشيخ إبراهيم زكزكي',
      country: 'Nigeria',
      countryAr: 'نيجيريا',
      birthYear: '1953',
      era: 'Contemporary Activism',
      eraAr: 'النشاط المعاصر',
      title: 'Religious Leader',
      titleAr: 'قائد ديني',
      biography: 'Known for religious activism and community mobilization in Nigeria.',
      biographyAr: 'معروف بالنشاط الديني وتعبئة المجتمع في نيجيريا.',
      achievements: ['Mobilized community service', 'Religious education'],
      achievementsAr: ['تعبئة لخدمة المجتمع', 'التعليم الديني'],
      quotes: ['Justice is the path to stability'],
      quotesAr: ['العدل طريق الاستقرار'],
      legacy: 'Shaped faith-based civic engagement.',
      legacyAr: 'صاغ مشاركة مدنية قائمة على الإيمان.',
      inspiringLessons: ['Patience, perseverance'],
      inspiringLessonsAr: ['الصبر والمثابرة'],
      relatedWorks: ['Community institutions'],
      relatedWorksAr: ['مؤسسات مجتمعية']
    },
    2: {
      name: 'Ahmad Abubakar Gumi',
      nameAr: 'أحمد أبوبكر قُمي',
      country: 'Nigeria',
      countryAr: 'نيجيريا',
      birthYear: '1960s',
      era: 'Contemporary Scholarship',
      eraAr: 'العلم المعاصر',
      title: 'Scholar and Public Voice',
      titleAr: 'عالم وصوت عام',
      biography: 'Prominent in public discourse on religion and society in Nigeria.',
      biographyAr: 'بارز في النقاش العام حول الدين والمجتمع في نيجيريا.',
      achievements: ['Teaching and media presence'],
      achievementsAr: ['التدريس والحضور الإعلامي'],
      quotes: ['Dialogue builds solutions'],
      quotesAr: ['الحوار يصنع الحلول'],
      legacy: 'Encouraged dialogue and reform.',
      legacyAr: 'شجع الحوار والإصلاح.',
      inspiringLessons: ['Engage, educate, reform'],
      inspiringLessonsAr: ['التواصل والتعليم والإصلاح'],
      relatedWorks: ['Talks and essays'],
      relatedWorksAr: ['أحاديث ومقالات']
    }
  },
  egypt: {
    0: {
      name: 'Hassan al-Banna',
      nameAr: 'حسن البنا',
      country: 'Egypt',
      countryAr: 'مصر',
      birthYear: '1906',
      deathYear: '1949',
      era: '20th Century Reform',
      eraAr: 'الإصلاح في القرن العشرين',
      title: 'Islamic Thinker and Organizer',
      titleAr: 'مفكر ومنظّم إسلامي',
      biography: 'Founded a major Islamic movement focused on education, social reform, and community service.',
      biographyAr: 'أسس حركة إسلامية كبرى ركزت على التعليم والإصلاح الاجتماعي وخدمة المجتمع.',
      achievements: ['Grassroots educational networks', 'Social welfare projects'],
      achievementsAr: ['شبكات تعليمية شعبية', 'مشاريع رعاية اجتماعية'],
      quotes: ['Islam is a comprehensive system', 'Build the human, build the society'],
      quotesAr: ['الإسلام نظام شامل', 'ابنِ الإنسان تُبنِ المجتمع'],
      legacy: 'Left a strong legacy in Islamic activism and social service.',
      legacyAr: 'ترك إرثاً قوياً في العمل الإسلامي والخدمة الاجتماعية.',
      inspiringLessons: ['Organize communities', 'Serve society'],
      inspiringLessonsAr: ['تنظيم المجتمعات', 'خدمة المجتمع'],
      relatedWorks: ['Epistles and letters'],
      relatedWorksAr: ['الرسائل والمراسلات']
    },
    1: {
      name: 'Sheikh Ahmed al-Tayeb',
      nameAr: 'الشيخ أحمد الطيب',
      country: 'Egypt',
      countryAr: 'مصر',
      birthYear: '1946',
      era: 'Contemporary Scholarship',
      eraAr: 'العلم المعاصر',
      title: 'Grand Imam of Al-Azhar',
      titleAr: 'شيخ الأزهر',
      biography: 'Leading voice of Al-Azhar, known for scholarship, dialogue, and educational leadership.',
      biographyAr: 'صوت قيادي للأزهر، معروف بالعلم والحوار والقيادة التعليمية.',
      achievements: ['Educational leadership', 'Interfaith dialogue'],
      achievementsAr: ['القيادة التعليمية', 'الحوار بين الأديان'],
      quotes: ['Balance is the essence of reform'],
      quotesAr: ['التوازن هو جوهر الإصلاح'],
      legacy: 'Strengthened Al-Azhar’s global scholarly presence.',
      legacyAr: 'عزز الحضور العلمي العالمي للأزهر.',
      inspiringLessons: ['Moderation, wisdom'],
      inspiringLessonsAr: ['الاعتدال والحكمة'],
      relatedWorks: ['Statements, conferences'],
      relatedWorksAr: ['بيانات ومؤتمرات']
    },
    2: {
      name: 'Sheikh Muhammad Abduh',
      nameAr: 'الشيخ محمد عبده',
      country: 'Egypt',
      countryAr: 'مصر',
      birthYear: '1849',
      deathYear: '1905',
      era: 'Modern Reform',
      eraAr: 'الإصلاح الحديث',
      title: 'Reformer and Mufti of Egypt',
      titleAr: 'مصلح ومفتي الديار المصرية',
      biography: 'Key reformer who sought to reconcile revelation and reason, renewing Islamic thought and education.',
      biographyAr: 'مصلح بارز سعى للتوفيق بين الوحي والعقل، مجدداً الفكر الإسلامي والتعليم.',
      achievements: ['Curricular reform', 'Essays on renewal'],
      achievementsAr: ['إصلاح المناهج', 'مقالات في التجديد'],
      quotes: ['Renewal is faithful to principles and responsive to reality'],
      quotesAr: ['التجديد وفاء للمبادئ واستجابة للواقع'],
      legacy: 'Laid foundations for modern Islamic reform.',
      legacyAr: 'أرسى أسس الإصلاح الإسلامي الحديث.',
      inspiringLessons: ['Think, renew, serve'],
      inspiringLessonsAr: ['فكّر وجدد واخدم'],
      relatedWorks: ['Risalat al-Tawhid'],
      relatedWorksAr: ['رسالة التوحيد']
    }
  },
  iran: {
    0: {
      name: 'Ruhollah Khomeini',
      nameAr: 'روح الله الخميني',
      country: 'Iran',
      countryAr: 'إيران',
      birthYear: '1902',
      deathYear: '1989',
      era: 'Islamic Revolution',
      eraAr: 'الثورة الإسلامية',
      title: 'Religious Leader',
      titleAr: 'قائد ديني',
      biography: 'Led Iran’s 1979 Islamic Revolution; influential in contemporary Shiʻa thought and politics.',
      biographyAr: 'قاد الثورة الإسلامية في إيران عام 1979؛ مؤثر في الفكر والسياسة الشيعية المعاصرة.',
      achievements: ['Leadership of 1979 revolution', 'Authored works on governance'],
      achievementsAr: ['قيادة ثورة 1979', 'تأليف أعمال في الحكم'],
      quotes: ['Independence and dignity for the nation'],
      quotesAr: ['الاستقلال والكرامة للأمة'],
      legacy: 'Redefined Iran’s political system with lasting regional impact.',
      legacyAr: 'أعاد تعريف النظام السياسي الإيراني وأثر إقليمياً على المدى الطويل.',
      inspiringLessons: ['Mobilize society around values'],
      inspiringLessonsAr: ['تعبئة المجتمع حول القيم'],
      relatedWorks: ['Islamic Government'],
      relatedWorksAr: ['الحكومة الإسلامية']
    },
    1: {
      name: 'Jalal ad-Din Rumi',
      nameAr: 'جلال الدين الرومي',
      country: 'Iran',
      countryAr: 'إيران',
      birthYear: '1207',
      deathYear: '1273',
      era: 'Classical Sufism',
      eraAr: 'التصوف الكلاسيكي',
      title: 'Poet and Mystic',
      titleAr: 'شاعر وصوفي',
      biography: 'A towering Sufi poet whose Masnavi influenced spirituality across the Muslim world and beyond.',
      biographyAr: 'شاعر صوفي عظيم أثرت مثنوياته في الروحانية عبر العالم الإسلامي وخارجه.',
      achievements: ['Masnavi', 'Teaching love and unity'],
      achievementsAr: ['المثنوي', 'تعليم المحبة والوحدة'],
      quotes: ['Wherever you stand, be the soul of that place'],
      quotesAr: ['مهما كان مقامك فكن روح المكان'],
      legacy: 'Symbol of spiritual love and wisdom.',
      legacyAr: 'رمز للمحبة والحكمة الروحية.',
      inspiringLessons: ['Love, humility, presence'],
      inspiringLessonsAr: ['المحبة والتواضع والحضور'],
      relatedWorks: ['Masnavi, Diwan-e Shams'],
      relatedWorksAr: ['المثنوي، ديوان شمس']
    },
    2: {
      name: 'Avicenna (Ibn Sina)',
      nameAr: 'ابن سينا',
      country: 'Iran',
      countryAr: 'إيران',
      birthYear: '980',
      deathYear: '1037',
      era: 'Islamic Golden Age',
      eraAr: 'العصر الذهبي الإسلامي',
      title: 'Physician and Philosopher',
      titleAr: 'طبيب وفيلسوف',
      biography: 'Polymath of the Islamic Golden Age; authored Canon of Medicine and works in philosophy.',
      biographyAr: 'عالم موسوعي في العصر الذهبي؛ ألّف القانون في الطب وأعمالاً في الفلسفة.',
      achievements: ['Canon of Medicine', 'Philosophical encyclopedism'],
      achievementsAr: ['القانون في الطب', 'الموسوعية الفلسفية'],
      quotes: ['The purpose of knowledge is healing the soul and body'],
      quotesAr: ['غاية المعرفة شفاء النفس والبدن'],
      legacy: 'Foundational in medicine and philosophy for centuries.',
      legacyAr: 'مرجعي في الطب والفلسفة لقرون.',
      inspiringLessons: ['Rigor, curiosity, synthesis'],
      inspiringLessonsAr: ['الدقة والفضول والتركيب'],
      relatedWorks: ['Al-Qanun fi al-Tibb'],
      relatedWorksAr: ['القانون في الطب']
    }
  },
  'saudi-arabia': {
    0: {
      name: 'King Abdulaziz Al Saud',
      nameAr: 'الملك عبد العزيز آل سعود',
      country: 'Saudi Arabia',
      countryAr: 'المملكة العربية السعودية',
      birthYear: '1876',
      deathYear: '1953',
      era: 'Unification of Saudi Arabia',
      eraAr: 'توحيد المملكة',
      title: 'Founder of the Kingdom',
      titleAr: 'مؤسس المملكة',
      biography: 'Unified the regions of Arabia into the modern Kingdom of Saudi Arabia; steward of the Two Holy Mosques.',
      biographyAr: 'وحّد أقاليم الجزيرة العربية في المملكة العربية السعودية الحديثة؛ خادم الحرمين الشريفين.',
      achievements: ['Unification (1932)', 'Infrastructure and governance foundations'],
      achievementsAr: ['التوحيد (1932)', 'إرساء بنى تحتية وأُسس الحكم'],
      quotes: ['Our pride is in serving Islam and pilgrims'],
      quotesAr: ['فخرنا في خدمة الإسلام والحجاج'],
      legacy: 'Laid the foundations of a modern state centered on service to the Holy Sites.',
      legacyAr: 'أرسى أسس دولة حديثة تتمحور حول خدمة الحرمين.',
      inspiringLessons: ['Vision, unity, and service'],
      inspiringLessonsAr: ['الرؤية والوحدة والخدمة'],
      relatedWorks: ['Historical documents and speeches'],
      relatedWorksAr: ['وثائق وخطب تاريخية']
    },
    1: {
      name: 'King Salman bin Abdulaziz',
      nameAr: 'الملك سلمان بن عبد العزيز',
      country: 'Saudi Arabia',
      countryAr: 'المملكة العربية السعودية',
      birthYear: '1935',
      era: 'Contemporary Leadership',
      eraAr: 'القيادة المعاصرة',
      title: 'Custodian of the Two Holy Mosques',
      titleAr: 'خادم الحرمين الشريفين',
      biography: 'Saudi monarch known for service to the Two Holy Mosques and national development.',
      biographyAr: 'ملك سعودي معروف بخدمة الحرمين الشريفين والتنمية الوطنية.',
      achievements: ['Development programs', 'Service to pilgrims'],
      achievementsAr: ['برامج تنموية', 'خدمة الحجاج'],
      quotes: ['Our service to Islam is our honor'],
      quotesAr: ['خدمتنا للإسلام شرفنا'],
      legacy: 'Advanced infrastructure and services for pilgrims.',
      legacyAr: 'طور البنية والخدمات للحجاج.',
      inspiringLessons: ['Service, responsibility'],
      inspiringLessonsAr: ['الخدمة والمسؤولية'],
      relatedWorks: ['Initiatives and reforms'],
      relatedWorksAr: ['مبادرات وإصلاحات']
    },
    2: {
      name: 'Mohammed bin Salman',
      nameAr: 'محمد بن سلمان',
      country: 'Saudi Arabia',
      countryAr: 'المملكة العربية السعودية',
      birthYear: '1985',
      era: 'Vision 2030',
      eraAr: 'رؤية 2030',
      title: 'Crown Prince',
      titleAr: 'ولي العهد',
      biography: 'Leading Vision 2030 for economic diversification, innovation, and opportunities for youth.',
      biographyAr: 'يقود رؤية 2030 لتنويع الاقتصاد والابتكار وإتاحة الفرص للشباب.',
      achievements: ['Vision 2030 programs', 'Economic diversification'],
      achievementsAr: ['برامج رؤية 2030', 'تنويع الاقتصاد'],
      quotes: ['Ambition knows no limits'],
      quotesAr: ['الطموح لا حدود له'],
      legacy: 'Catalyzed modernization and investment.',
      legacyAr: 'حفّز التحديث والاستثمار.',
      inspiringLessons: ['Strategic vision', 'Execution'],
      inspiringLessonsAr: ['الرؤية الاستراتيجية', 'التنفيذ'],
      relatedWorks: ['Vision 2030 projects'],
      relatedWorksAr: ['مشاريع رؤية 2030']
    }
  },
  malaysia: {
    0: {
      name: 'Mahathir Mohamad',
      nameAr: 'مهاتير محمد',
      country: 'Malaysia',
      countryAr: 'ماليزيا',
      birthYear: '1925',
      era: 'Modern Malaysia',
      eraAr: 'ماليزيا الحديثة',
      title: 'Statesman and Reformer',
      titleAr: 'رجل دولة ومصلح',
      biography: 'Longest-serving Malaysian Prime Minister; advanced economy, education, and Islamic finance.',
      biographyAr: 'أطول رؤساء وزراء ماليزيا خدمة؛ تقدم بالاقتصاد والتعليم والتمويل الإسلامي.',
      achievements: ['Vision 2020', 'Growth of Islamic finance'],
      achievementsAr: ['رؤية 2020', 'نمو التمويل الإسلامي'],
      quotes: ['Knowledge builds nations'],
      quotesAr: ['المعرفة تبني الأمم'],
      legacy: 'Helped shape modern, multiethnic Malaysia with Islamic values.',
      legacyAr: 'ساهم في تشكيل ماليزيا الحديثة متعددة الأعراق بقيم إسلامية.',
      inspiringLessons: ['Strategic vision', 'Pragmatic reforms'],
      inspiringLessonsAr: ['الرؤية الاستراتيجية', 'الإصلاحات البراغماتية'],
      relatedWorks: ['The Malay Dilemma'],
      relatedWorksAr: ['مأزق الملايو']
    },
    1: {
      name: 'Anwar Ibrahim',
      nameAr: 'أنور إبراهيم',
      country: 'Malaysia',
      countryAr: 'ماليزيا',
      birthYear: '1947',
      era: 'Contemporary Politics',
      eraAr: 'السياسة المعاصرة',
      title: 'Prime Minister and Reformist',
      titleAr: 'رئيس وزراء ومصلح',
      biography: 'Long-time statesman emphasizing reform, education, and multi-ethnic harmony.',
      biographyAr: 'رجل دولة طويل الخبرة يؤكد على الإصلاح والتعليم والوئام متعدد الأعراق.',
      achievements: ['Educational initiatives', 'Good governance advocacy'],
      achievementsAr: ['مبادرات تعليمية', 'الدعوة للحكم الرشيد'],
      quotes: ['Justice and knowledge uplift nations'],
      quotesAr: ['العدل والعلم يرفعان الأمم'],
      legacy: 'Symbol of reform and inclusive leadership.',
      legacyAr: 'رمز للإصلاح والقيادة الشاملة.',
      inspiringLessons: ['Patience, inclusivity'],
      inspiringLessonsAr: ['الصبر والشمول'],
      relatedWorks: ['Books and speeches'],
      relatedWorksAr: ['كتب وخطب']
    },
    2: {
      name: 'Sheikh Tahir Jalaluddin',
      nameAr: 'الشيخ طاهر جلال الدين',
      country: 'Malaysia',
      countryAr: 'ماليزيا',
      birthYear: '1869',
      deathYear: '1956',
      era: 'Reformist Movement',
      eraAr: 'الحركة الإصلاحية',
      title: 'Scholar and Reformer',
      titleAr: 'عالم ومصلح',
      biography: 'Pioneer of Islamic reform and journalism in Malaya; promoted education and renewal.',
      biographyAr: 'رائد الإصلاح الإسلامي والصحافة في الملايو؛ عزز التعليم والتجديد.',
      achievements: ['Journalism for reform', 'Educational advocacy'],
      achievementsAr: ['صحافة للإصلاح', 'الدعوة للتعليم'],
      quotes: ['Renewal with knowledge and ethics'],
      quotesAr: ['التجديد بالعلم والأخلاق'],
      legacy: 'Helped lay the groundwork for modern Islamic discourse in Malaysia.',
      legacyAr: 'ساهم في تأسيس الخطاب الإسلامي الحديث في ماليزيا.',
      inspiringLessons: ['Courage to renew'],
      inspiringLessonsAr: ['شجاعة التجديد'],
      relatedWorks: ['Articles and treatises'],
      relatedWorksAr: ['مقالات ورسائل']
    }
  },
  uk: {
    0: {
      name: 'Sadiq Khan',
      nameAr: 'صادق خان',
      country: 'United Kingdom',
      countryAr: 'المملكة المتحدة',
      birthYear: '1970',
      era: 'Contemporary Leadership',
      eraAr: 'القيادة المعاصرة',
      title: 'Mayor of London',
      titleAr: 'عمدة لندن',
      biography: 'First Muslim mayor of a major Western capital; advocates inclusion, transport, and climate initiatives.',
      biographyAr: 'أول عمدة مسلم لعاصمة غربية كبرى؛ يدعو للشمول والمواصلات والمناخ.',
      achievements: ['City leadership', 'Public transport initiatives'],
      achievementsAr: ['قيادة المدينة', 'مبادرات النقل العام'],
      quotes: ['Diversity is London’s strength'],
      quotesAr: ['التنوع هو قوة لندن'],
      legacy: 'Symbol of Muslim representation in European politics.',
      legacyAr: 'رمز لتمثيل المسلمين في السياسة الأوروبية.',
      inspiringLessons: ['Public service', 'Inclusive leadership'],
      inspiringLessonsAr: ['الخدمة العامة', 'القيادة الشاملة'],
      relatedWorks: ['City policies and programs'],
      relatedWorksAr: ['سياسات وبرامج المدينة']
    },
    1: {
      name: 'Mo Farah',
      nameAr: 'محمد فرح',
      country: 'United Kingdom',
      countryAr: 'المملكة المتحدة',
      birthYear: '1983',
      era: 'Modern Sports',
      eraAr: 'الرياضة الحديثة',
      title: 'Olympic Champion',
      titleAr: 'بطل أولمبي',
      biography: 'Legendary distance runner representing Britain; symbol of perseverance and inclusion.',
      biographyAr: 'عداء مسافات أسطوري يمثل بريطانيا؛ رمز للمثابرة والشمول.',
      achievements: ['Multiple Olympic golds', 'World titles'],
      achievementsAr: ['ذهبيات أولمبية متعددة', 'ألقاب عالمية'],
      quotes: ['Train hard, dream big'],
      quotesAr: ['تدرّب بجد واحلم كبيراً'],
      legacy: 'Inspired youth and represented positive Muslim identity.',
      legacyAr: 'ألهم الشباب ومثّل الهوية المسلمة الإيجابية.',
      inspiringLessons: ['Discipline and humility'],
      inspiringLessonsAr: ['الانضباط والتواضع'],
      relatedWorks: ['Autobiography and campaigns'],
      relatedWorksAr: ['سيرة ذاتية وحملات']
    },
    2: {
      name: 'Malala Yousafzai',
      nameAr: 'ملالا يوسفزاي',
      country: 'United Kingdom',
      countryAr: 'المملكة المتحدة',
      birthYear: '1997',
      era: 'Education Advocacy',
      eraAr: 'الدعوة للتعليم',
      title: 'Nobel Laureate and Education Activist',
      titleAr: 'حائزة نوبل وناشطة في التعليم',
      biography: 'Global advocate for girls’ education; resides and studies in the UK, inspiring millions.',
      biographyAr: 'ناشطة عالمية من أجل تعليم الفتيات؛ تقيم وتدرس في المملكة المتحدة وتلهم الملايين.',
      achievements: ['Nobel Peace Prize', 'Global campaigns for education'],
      achievementsAr: ['جائزة نوبل للسلام', 'حملات عالمية للتعليم'],
      quotes: ['One child, one teacher, one book can change the world'],
      quotesAr: ['طفل واحد، معلم واحد، كتاب واحد يمكن أن يغيّر العالم'],
      legacy: 'Symbol of courage and the right to learn.',
      legacyAr: 'رمز للشجاعة وحق التعلم.',
      inspiringLessons: ['Courage, education, hope'],
      inspiringLessonsAr: ['الشجاعة والتعليم والأمل'],
      relatedWorks: ['I Am Malala'],
      relatedWorksAr: ['أنا ملالا']
    }
  },
  france: {
    0: {
      name: 'Zinedine Zidane',
      nameAr: 'زين الدين زيدان',
      country: 'France',
      countryAr: 'فرنسا',
      birthYear: '1972',
      era: 'Modern Sports and Culture',
      eraAr: 'الرياضة والثقافة الحديثة',
      title: 'Football Legend',
      titleAr: 'أسطورة كرة القدم',
      biography: 'World Cup-winning footballer; a role model for many European Muslims.',
      biographyAr: 'لاعب كرة قدم فاز بكأس العالم؛ قدوة لكثير من المسلمين في أوروبا.',
      achievements: ['World Cup 1998', 'Champions League titles'],
      achievementsAr: ['كأس العالم 1998', 'ألقاب دوري الأبطال'],
      quotes: ['Respect is earned through work'],
      quotesAr: ['الاحترام يُكتسب بالعمل'],
      legacy: 'Promoted positive representation of Muslims in sports.',
      legacyAr: 'عزز التمثيل الإيجابي للمسلمين في الرياضة.',
      inspiringLessons: ['Discipline and excellence'],
      inspiringLessonsAr: ['الانضباط والتميز'],
      relatedWorks: ['Autobiographies and documentaries'],
      relatedWorksAr: ['سير ذاتية وأفلام وثائقية']
    },
    1: {
      name: 'Karim Benzema',
      nameAr: 'كريم بنزيما',
      country: 'France',
      countryAr: 'فرنسا',
      birthYear: '1987',
      era: 'Modern Sports',
      eraAr: 'الرياضة الحديثة',
      title: 'Footballer (Ballon d’Or 2022)',
      titleAr: 'لاعب كرة قدم (الكرة الذهبية 2022)',
      biography: 'Elite striker known for excellence, leadership, and representing French Muslims on the world stage.',
      biographyAr: 'مهاجم نخبوي معروف بالتميز والقيادة وتمثيل المسلمين الفرنسيين على الساحة العالمية.',
      achievements: ['Ballon d’Or 2022', 'UEFA Champions League titles'],
      achievementsAr: ['الكرة الذهبية 2022', 'ألقاب دوري الأبطال'],
      quotes: ['Work in silence, let success speak'],
      quotesAr: ['اعمل في صمت ودع النجاح يتكلم'],
      legacy: 'Role model for youth and inclusion in sports.',
      legacyAr: 'قدوة للشباب والشمول في الرياضة.',
      inspiringLessons: ['Discipline, consistency'],
      inspiringLessonsAr: ['الانضباط والاتساق'],
      relatedWorks: ['Community initiatives'],
      relatedWorksAr: ['مبادرات مجتمعية']
    },
    2: {
      name: 'French Muslim Intellectuals',
      nameAr: 'المثقفون المسلمون الفرنسيون',
      country: 'France',
      countryAr: 'فرنسا',
      birthYear: '—',
      era: 'Modern Thought',
      eraAr: 'الفكر المعاصر',
      title: 'Writers and Thinkers',
      titleAr: 'كتّاب ومفكرون',
      biography: 'A generation of writers and academics contributing to debates on identity, citizenship, and ethics.',
      biographyAr: 'جيل من الكتّاب والأكاديميين يساهمون في النقاش حول الهوية والمواطنة والأخلاق.',
      achievements: ['Publishing, teaching, civic dialogue'],
      achievementsAr: ['النشر والتدريس والحوار المدني'],
      quotes: ['Dialogue deepens citizenship'],
      quotesAr: ['الحوار يعمّق المواطنة'],
      legacy: 'Helped frame a nuanced Muslim presence in France.',
      legacyAr: 'ساهم في صياغة حضور مسلم رصين في فرنسا.',
      inspiringLessons: ['Nuance, participation'],
      inspiringLessonsAr: ['الدقة والمشاركة'],
      relatedWorks: ['Essays and conferences'],
      relatedWorksAr: ['مقالات ومؤتمرات']
    }
  },
  spain: {
    0: {
      name: 'Mansur Escudero',
      nameAr: 'منصور إسكوديرو',
      country: 'Spain',
      countryAr: 'إسبانيا',
      birthYear: '1947',
      deathYear: '2010',
      era: 'Modern Spanish Islam',
      eraAr: 'الإسلام في إسبانيا الحديثة',
      title: 'Muslim Community Leader',
      titleAr: 'قائد مجتمع مسلم',
      biography: 'Prominent figure in the revival of Islam in Spain; worked on recognition of Muslim rights.',
      biographyAr: 'شخصية بارزة في إحياء الإسلام بإسبانيا؛ عمل على الاعتراف بحقوق المسلمين.',
      achievements: ['Community organization', 'Legal recognition efforts'],
      achievementsAr: ['تنظيم المجتمع', 'جهود الاعتراف القانوني'],
      quotes: ['Identity with openness'],
      quotesAr: ['هوية بانفتاح'],
      legacy: 'Helped reestablish Muslim presence in Spain on civic grounds.',
      legacyAr: 'ساهم في إعادة حضور المسلمين بإسبانيا مدنياً.',
      inspiringLessons: ['Civic engagement', 'Dialogue'],
      inspiringLessonsAr: ['المشاركة المدنية', 'الحوار'],
      relatedWorks: ['Community charters and projects'],
      relatedWorksAr: ['مواثيق ومشاريع مجتمعية']
    },
    1: {
      name: 'Abdurrahman Medina',
      nameAr: 'عبد الرحمن مدينة',
      country: 'Spain',
      countryAr: 'إسبانيا',
      birthYear: '—',
      era: 'Community Leadership',
      eraAr: 'القيادة المجتمعية',
      title: 'Community Organizer',
      titleAr: 'منظم مجتمعي',
      biography: 'Figure in Spanish Muslim community work focused on education and inclusion.',
      biographyAr: 'شخصية في العمل المجتمعي للمسلمين بإسبانيا، تركز على التعليم والشمول.',
      achievements: ['Education projects', 'Local dialogue'],
      achievementsAr: ['مشاريع تعليمية', 'حوار محلي'],
      quotes: ['Heritage inspires future'],
      quotesAr: ['التراث يلهم المستقبل'],
      legacy: 'Helped bridge communities and institutions.',
      legacyAr: 'ساهم في وصل المجتمع بالمؤسسات.',
      inspiringLessons: ['Patience, partnership'],
      inspiringLessonsAr: ['الصبر والشراكة'],
      relatedWorks: ['Local initiatives'],
      relatedWorksAr: ['مبادرات محلية']
    },
    2: {
      name: 'Spanish Muslim Converts',
      nameAr: 'المسلمون الإسبان الجدد',
      country: 'Spain',
      countryAr: 'إسبانيا',
      birthYear: '—',
      era: 'Modern Revival',
      eraAr: 'نهضة معاصرة',
      title: 'Community Members and Advocates',
      titleAr: 'أعضاء مجتمع ودعاة',
      biography: 'Converts who contribute to community life, culture, and education across Spain.',
      biographyAr: 'معتنقون يساهمون في حياة المجتمع والثقافة والتعليم في أنحاء إسبانيا.',
      achievements: ['Cultural projects', 'Education and dialogue'],
      achievementsAr: ['مشاريع ثقافية', 'التعليم والحوار'],
      quotes: ['Faith and culture can enrich one another'],
      quotesAr: ['الإيمان والثقافة يغنيان بعضهما البعض'],
      legacy: 'Illustrated the living legacy of Al-Andalus.',
      legacyAr: 'جسّدوا إرث الأندلس الحي.',
      inspiringLessons: ['Respect, learning'],
      inspiringLessonsAr: ['الاحترام والتعلم'],
      relatedWorks: ['Community programs'],
      relatedWorksAr: ['برامج مجتمعية']
    }
  },
  germany: {
    0: {
      name: 'Mesut Özil',
      nameAr: 'مسعود أوزيل',
      country: 'Germany',
      countryAr: 'ألمانيا',
      birthYear: '1988',
      era: 'Modern Sports and Identity',
      eraAr: 'الرياضة والهوية الحديثة',
      title: 'Footballer',
      titleAr: 'لاعب كرة قدم',
      biography: 'German football star of Turkish origin; highlighted issues of identity and inclusion.',
      biographyAr: 'نجم كرة قدم ألماني من أصل تركي؛ أبرز قضايا الهوية والاندماج.',
      achievements: ['World Cup 2014', 'Top assists and titles'],
      achievementsAr: ['كأس العالم 2014', 'صناعة أهداف وألقاب'],
      quotes: ['I play for Germany, respect my roots'],
      quotesAr: ['ألعب لألمانيا وأحترم جذوري'],
      legacy: 'Sparked national dialogue on diversity in Germany.',
      legacyAr: 'أشعل حواراً وطنياً حول التنوع في ألمانيا.',
      inspiringLessons: ['Pride with respect', 'Use platform for good'],
      inspiringLessonsAr: ['اعتزاز مع احترام', 'استخدام المنصة للخير'],
      relatedWorks: ['Autobiography and campaigns'],
      relatedWorksAr: ['سيرة ذاتية وحملات']
    },
    1: {
      name: 'İlkay Gündoğan',
      nameAr: 'إلكاي غوندوغان',
      country: 'Germany',
      countryAr: 'ألمانيا',
      birthYear: '1990',
      era: 'Modern Sports',
      eraAr: 'الرياضة الحديثة',
      title: 'Footballer and Captain',
      titleAr: 'لاعب كرة قدم وقائد',
      biography: 'Top midfielder and leader in club and national teams; example of professionalism and inclusion.',
      biographyAr: 'لاعب وسط متميز وقائد في الأندية والمنتخب؛ مثال للاحترافية والشمول.',
      achievements: ['League titles', 'National team captaincy'],
      achievementsAr: ['ألقاب دوري', 'شرف قيادة المنتخب'],
      quotes: ['Leadership is service to the team'],
      quotesAr: ['القيادة خدمة للفريق'],
      legacy: 'Role model for youth with migrant backgrounds.',
      legacyAr: 'قدوة للشباب من أصول مهاجرة.',
      inspiringLessons: ['Responsibility, teamwork'],
      inspiringLessonsAr: ['المسؤولية والعمل الجماعي'],
      relatedWorks: ['Charity and youth projects'],
      relatedWorksAr: ['مشاريع خيرية وشبابية']
    },
    2: {
      name: 'German Muslim Leaders',
      nameAr: 'القادة المسلمون الألمان',
      country: 'Germany',
      countryAr: 'ألمانيا',
      birthYear: '—',
      era: 'Civic Leadership',
      eraAr: 'القيادة المدنية',
      title: 'Civic and Cultural Leaders',
      titleAr: 'قادة مدنيون وثقافيون',
      biography: 'Leaders across mosques, NGOs, and public life shaping integration and contribution.',
      biographyAr: 'قادة عبر المساجد والمنظمات والحياة العامة يصوغون الاندماج والمساهمة.',
      achievements: ['NGO leadership', 'Public service'],
      achievementsAr: ['قيادة منظمات', 'خدمة عامة'],
      quotes: ['Participation builds belonging'],
      quotesAr: ['المشاركة تبني الانتماء'],
      legacy: 'Strengthened civic participation and trust.',
      legacyAr: 'عزّزوا المشاركة المدنية والثقة.',
      inspiringLessons: ['Dialogue, service'],
      inspiringLessonsAr: ['الحوار والخدمة'],
      relatedWorks: ['Community platforms'],
      relatedWorksAr: ['منصات مجتمعية']
    }
  },
  canada: {
    0: {
      name: 'Ahmed Hussen',
      nameAr: 'أحمد حسين',
      country: 'Canada',
      countryAr: 'كندا',
      birthYear: '1976',
      era: 'Contemporary Politics',
      eraAr: 'السياسة المعاصرة',
      title: 'Canadian Minister and MP',
      titleAr: 'وزير ونائب كندي',
      biography: 'Somali-Canadian politician; served as Minister of Immigration and in social development portfolios.',
      biographyAr: 'سياسي صومالي-كندي؛ شغل منصب وزير الهجرة ومناصب التنمية الاجتماعية.',
      achievements: ['Public service and integration policies'],
      achievementsAr: ['الخدمة العامة وسياسات الاندماج'],
      quotes: ['Diversity is our advantage'],
      quotesAr: ['التنوع ميزتنا'],
      legacy: 'Represents successful integration and leadership in Canada.',
      legacyAr: 'يمثل الاندماج الناجح والقيادة في كندا.',
      inspiringLessons: ['Service, empathy, and policy'],
      inspiringLessonsAr: ['الخدمة والتعاطف والسياسة'],
      relatedWorks: ['Government initiatives'],
      relatedWorksAr: ['مبادرات حكومية']
    },
    1: {
      name: 'Omar Alghabra',
      nameAr: 'عمر الغبرة',
      country: 'Canada',
      countryAr: 'كندا',
      birthYear: '1969',
      era: 'Contemporary Politics',
      eraAr: 'السياسة المعاصرة',
      title: 'Minister and MP',
      titleAr: 'وزير ونائب',
      biography: 'Canadian politician who served in federal cabinet; advocate for inclusion and service.',
      biographyAr: 'سياسي كندي خدم في الحكومة الفيدرالية؛ مدافع عن الشمول والخدمة.',
      achievements: ['Public service', 'Community engagement'],
      achievementsAr: ['الخدمة العامة', 'التواصل المجتمعي'],
      quotes: ['Diversity is our advantage'],
      quotesAr: ['التنوع ميزتنا'],
      legacy: 'Advanced inclusive policies and representation.',
      legacyAr: 'دفع بسياسات شاملة والتمثيل.',
      inspiringLessons: ['Service, integrity'],
      inspiringLessonsAr: ['الخدمة والنزاهة'],
      relatedWorks: ['Parliamentary initiatives'],
      relatedWorksAr: ['مبادرات برلمانية']
    },
    2: {
      name: 'Canadian Muslim Leaders',
      nameAr: 'القادة المسلمون الكنديون',
      country: 'Canada',
      countryAr: 'كندا',
      birthYear: '—',
      era: 'Civic Leadership',
      eraAr: 'القيادة المدنية',
      title: 'Civic and Community Leaders',
      titleAr: 'قادة مدنيون ومجتمعيون',
      biography: 'Leaders who support settlement, education, and public dialogue across Canadian cities.',
      biographyAr: 'قادة يدعمون الاستقرار والتعليم والحوار العام في المدن الكندية.',
      achievements: ['Settlement services', 'Education and advocacy'],
      achievementsAr: ['خدمات الاستقرار', 'التعليم والمناصرة'],
      quotes: ['Community is built by service'],
      quotesAr: ['المجتمع يُبنى بالخدمة'],
      legacy: 'Improved inclusion and opportunity.',
      legacyAr: 'حسّنوا الشمول والفرص.',
      inspiringLessons: ['Collaboration, empathy'],
      inspiringLessonsAr: ['التعاون والتعاطف'],
      relatedWorks: ['Programs and partnerships'],
      relatedWorksAr: ['برامج وشراكات']
    }
  }
};

export default function PersonalityDetail() {
  const { countryId, personalityIndex } = useParams<{ countryId: string; personalityIndex: string }>();
  const { i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';
  const location = useLocation();
  const fallbackFromList = (location.state as any)?.fromList as
    | {
        name?: string;
        nameAr?: string;
        countryId?: string;
        countryName?: string;
        countryNameAr?: string;
        index?: number;
      }
    | undefined;
  
  const personality = countryId && personalityIndex ? 
    personalityData[countryId]?.[parseInt(personalityIndex)] : null;

  // إذا لم تكن البيانات موجودة، أعد التوجيه إلى صفحة الدولة بدل عرض رسالة خطأ
  // توليد محتوى كامل ديناميكياً عند غياب البيانات التفصيلية
  const generatedPersonality: PersonalityData | null = (!personality && fallbackFromList && countryId)
    ? {
        name: fallbackFromList.name ?? 'Notable Personality',
        nameAr: fallbackFromList.nameAr ?? 'شخصية بارزة',
        country: fallbackFromList.countryName ?? countryId,
        countryAr: fallbackFromList.countryNameAr ?? countryId,
        birthYear: '—',
        era: 'Modern Islamic Society',
        eraAr: 'المجتمع الإسلامي المعاصر',
        title: 'Influential Muslim figure',
        titleAr: 'شخصية مسلمة مؤثرة',
        biography: `An influential figure from ${fallbackFromList.countryName ?? countryId} known for service, leadership, and contributions to community and culture. Their work reflects values of faith, knowledge, and compassion.`,
        biographyAr: `شخصية مؤثرة من ${fallbackFromList.countryNameAr ?? fallbackFromList.countryName ?? countryId} معروفة بالخدمة والقيادة والمساهمة في المجتمع والثقافة. يجسد عملها قيم الإيمان والعلم والرحمة.`,
        achievements: [
          'Community leadership and mentorship',
          'Support for education and social welfare',
          'Promotion of ethical values in public life'
        ],
        achievementsAr: [
          'القيادة المجتمعية والرعاية',
          'دعم التعليم والرعاية الاجتماعية',
          'تعزيز القيم الأخلاقية في الحياة العامة'
        ],
        quotes: [
          'Service to people is a path to serving God',
          'Knowledge with humility changes lives'
        ],
        quotesAr: [
          'خدمة الناس طريق إلى خدمة الله',
          'العلم مع التواضع يغيّر الحياة'
        ],
        legacy: 'Their legacy continues through education, social projects, and the positive impact on future generations.',
        legacyAr: 'يستمر إرثهم عبر التعليم والمشاريع الاجتماعية والأثر الإيجابي على الأجيال القادمة.',
        inspiringLessons: [
          'Lead with sincerity and service',
          'Balance tradition and progress',
          'Invest in people and education'
        ],
        inspiringLessonsAr: [
          'القيادة بالإخلاص والخدمة',
          'التوازن بين الأصالة والتقدم',
          'الاستثمار في الإنسان والتعليم'
        ],
        relatedWorks: [
          'Community initiatives',
          'Educational programs'
        ],
        relatedWorksAr: [
          'مبادرات مجتمعية',
          'برامج تعليمية'
        ]
      }
    : null;

  const finalPersonality = personality ?? generatedPersonality;

  if (!finalPersonality) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-accent/20">
      <div className="container max-w-4xl mx-auto py-12 px-4">
        {/* Header */}
        <div className="mb-8">
          <Link to="/countries">
            <Button variant="ghost" className="gap-2 mb-6">
              <ArrowLeft className="h-4 w-4" />
              {isArabic ? 'العودة للدول' : 'Back to Countries'}
            </Button>
          </Link>
          
          <div className="text-center mb-8">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-primary-hover mx-auto mb-4 flex items-center justify-center">
              <User className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-4xl font-bold mb-2">
              {isArabic ? personality.nameAr : personality.name}
            </h1>
            <p className="text-xl text-muted-foreground mb-4">
              {isArabic ? personality.titleAr : personality.title}
            </p>
            <div className="flex justify-center gap-3 flex-wrap">
              <Badge variant="secondary" className="flex items-center gap-1">
                <MapPin className="h-3 w-3" />
                {isArabic ? personality.countryAr : personality.country}
              </Badge>
              <Badge variant="outline" className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                {personality.birthYear}{personality.deathYear && ` - ${personality.deathYear}`}
              </Badge>
              <Badge variant="outline">
                {isArabic ? personality.eraAr : personality.era}
              </Badge>
            </div>
          </div>
        </div>

        {/* Biography */}
        <Card className="mb-8 border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" />
              {isArabic ? 'السيرة الذاتية' : 'Biography'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg leading-relaxed">
              {isArabic ? personality.biographyAr : personality.biography}
            </p>
          </CardContent>
        </Card>

        {/* Achievements */}
        <Card className="mb-8 border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5 text-primary" />
              {isArabic ? 'الإنجازات' : 'Achievements'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3 md:grid-cols-2">
              {(isArabic ? personality.achievementsAr : personality.achievements).map((achievement, index) => (
                <div key={index} className="flex items-start gap-3 bg-accent/20 rounded-lg p-3">
                  <Star className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{achievement}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quotes */}
        <Card className="mb-8 border-0 shadow-lg bg-gradient-to-br from-blue-50 to-indigo-100/50 dark:from-blue-950/30 dark:to-indigo-900/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Quote className="h-5 w-5 text-blue-600" />
              {isArabic ? 'أقوال مأثورة' : 'Famous Quotes'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {(isArabic ? personality.quotesAr : personality.quotes).map((quote, index) => (
                <div key={index} className="bg-white/50 dark:bg-black/20 rounded-lg p-4 border-l-4 border-blue-500">
                  <p className="italic text-lg">&ldquo;{quote}&rdquo;</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Legacy */}
        <Card className="mb-8 border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-primary" />
              {isArabic ? 'الإرث والتأثير' : 'Legacy & Impact'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg leading-relaxed">
              {isArabic ? personality.legacyAr : personality.legacy}
            </p>
          </CardContent>
        </Card>

        {/* Two Column Layout */}
        <div className="grid gap-8 lg:grid-cols-2 mb-8">
          {/* Inspiring Lessons */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-primary" />
                {isArabic ? 'دروس ملهمة' : 'Inspiring Lessons'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {(isArabic ? personality.inspiringLessonsAr : personality.inspiringLessons).map((lesson, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                    <span className="text-sm">{lesson}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Related Works */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                {isArabic ? 'أعمال ذات صلة' : 'Related Works'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {(isArabic ? personality.relatedWorksAr : personality.relatedWorks).map((work, index) => (
                  <div key={index} className="bg-primary/10 rounded-lg p-3">
                    <span className="text-sm font-medium">{work}</span>
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

