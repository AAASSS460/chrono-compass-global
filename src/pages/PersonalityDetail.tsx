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

