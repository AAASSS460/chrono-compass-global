import { useParams, Link } from 'react-router-dom';
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

const personalityData: Record<string, Record<number, PersonalityData>> = {
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
};

export default function PersonalityDetail() {
  const { countryId, personalityIndex } = useParams<{ countryId: string; personalityIndex: string }>();
  const { i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';
  
  const personality = countryId && personalityIndex ? 
    personalityData[countryId]?.[parseInt(personalityIndex)] : null;

  if (!personality) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background to-accent/20 flex items-center justify-center">
        <Card className="max-w-md mx-auto">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">
              {isArabic ? 'الشخصية غير موجودة' : 'Personality Not Found'}
            </h2>
            <p className="text-muted-foreground mb-6">
              {isArabic 
                ? 'عذراً، لم نتمكن من العثور على تفاصيل هذه الشخصية.'
                : 'Sorry, we could not find details for this personality.'
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

