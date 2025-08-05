import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, BookOpen, Calendar, MapPin, Star, Heart, Users, Lightbulb, Clock, Globe } from 'lucide-react';

interface StoryData {
  title: string;
  titleAr: string;
  country: string;
  countryAr: string;
  period: string;
  periodAr: string;
  category: string;
  categoryAr: string;
  summary: string;
  summaryAr: string;
  fullStory: string;
  fullStoryAr: string;
  keyFigures: string[];
  keyFiguresAr: string[];
  historicalContext: string;
  historicalContextAr: string;
  lessons: string[];
  lessonsAr: string[];
  modernRelevance: string;
  modernRelevanceAr: string;
  relatedEvents: string[];
  relatedEventsAr: string[];
  sources: string[];
  sourcesAr: string[];
}

const storyData: Record<string, Record<number, StoryData>> = {
  indonesia: {
    0: {
      title: 'Peaceful Conversion Through Trade',
      titleAr: 'التحول السلمي عبر التجارة',
      country: 'Indonesia',
      countryAr: 'إندونيسيا',
      period: '13th-16th Century',
      periodAr: 'القرن الثالث عشر - السادس عشر',
      category: 'Religious Transformation',
      categoryAr: 'التحول الديني',
      summary: 'The remarkable story of how Islam spread throughout the Indonesian archipelago through peaceful trade relationships, cultural exchange, and the wisdom of Muslim merchants and scholars.',
      summaryAr: 'القصة الرائعة لكيفية انتشار الإسلام في أرخبيل إندونيسيا من خلال العلاقات التجارية السلمية والتبادل الثقافي وحكمة التجار والعلماء المسلمين.',
      fullStory: 'In the bustling ports of 13th-century Indonesia, a quiet revolution was taking place. Muslim traders from Arabia, Persia, and India arrived not as conquerors, but as partners in commerce. They brought with them not only exotic goods and spices, but also a message of faith that would transform the spiritual landscape of the archipelago forever.\n\nUnlike many other regions where Islam spread through conquest, Indonesia\'s conversion was remarkably peaceful. The Muslim merchants who settled in coastal trading cities like Aceh, Malacca, and Demak demonstrated their faith through their actions - their honesty in business, their compassion for the poor, and their respect for local customs.\n\nThe local rulers, impressed by the prosperity and moral character of these Muslim communities, began to embrace Islam themselves. The Sultanate of Aceh, established in 1496, became a beacon of Islamic learning and culture. From there, Islam spread inland through marriage, education, and the compelling example of Muslim communities.\n\nWhat made this transformation so remarkable was how Islam adapted to local Indonesian culture. The Wali Songo, nine revered Islamic saints, played a crucial role in this process. They used local art forms, music, and storytelling traditions to convey Islamic teachings, making the religion accessible and relevant to the Indonesian people.\n\nBy the 16th century, most of Java and Sumatra had embraced Islam, not through force, but through the gentle persuasion of trade, education, and cultural integration. This peaceful transformation created a unique form of Indonesian Islam that remains tolerant, inclusive, and deeply rooted in local traditions to this day.',
      fullStoryAr: 'في موانئ إندونيسيا المزدحمة في القرن الثالث عشر، كانت ثورة هادئة تحدث. وصل التجار المسلمون من العرب وفارس والهند ليس كغزاة، بل كشركاء في التجارة. جلبوا معهم ليس فقط البضائع الغريبة والتوابل، بل أيضاً رسالة إيمان ستحول المشهد الروحي للأرخبيل إلى الأبد.\n\nعلى عكس العديد من المناطق الأخرى حيث انتشر الإسلام من خلال الفتح، كان تحول إندونيسيا سلمياً بشكل ملحوظ. التجار المسلمون الذين استقروا في المدن التجارية الساحلية مثل آتشيه وملقا وديماك أظهروا إيمانهم من خلال أفعالهم - صدقهم في التجارة، وتعاطفهم مع الفقراء، واحترامهم للعادات المحلية.\n\nالحكام المحليون، متأثرون بالازدهار والطابع الأخلاقي لهذه المجتمعات المسلمة، بدأوا في اعتناق الإسلام بأنفسهم. سلطنة آتشيه، التي تأسست عام 1496، أصبحت منارة للتعلم والثقافة الإسلامية. من هناك، انتشر الإسلام إلى الداخل من خلال الزواج والتعليم والمثال المقنع للمجتمعات المسلمة.\n\nما جعل هذا التحول مذهلاً جداً هو كيف تكيف الإسلام مع الثقافة الإندونيسية المحلية. والي سونغو، تسعة أولياء إسلاميين محترمين، لعبوا دوراً حاسماً في هذه العملية. استخدموا أشكال الفن المحلي والموسيقى وتقاليد السرد لنقل التعاليم الإسلامية، مما جعل الدين في متناول الشعب الإندونيسي وذا صلة به.\n\nبحلول القرن السادس عشر، كانت معظم جاوة وسومطرة قد اعتنقت الإسلام، ليس بالقوة، بل من خلال الإقناع اللطيف للتجارة والتعليم والتكامل الثقافي. هذا التحول السلمي خلق شكلاً فريداً من الإسلام الإندونيسي يبقى متسامحاً وشاملاً ومتجذراً بعمق في التقاليد المحلية حتى اليوم.',
      keyFigures: [
        'Malik al-Saleh (First Sultan of Aceh)',
        'Sunan Kalijaga (Wali Songo member)',
        'Raden Patah (Sultan of Demak)',
        'Sheikh Abdullah Arif (Scholar and trader)'
      ],
      keyFiguresAr: [
        'مالك الصالح (أول سلطان آتشيه)',
        'سونان كاليجاغا (عضو والي سونغو)',
        'رادين باتاه (سلطان ديماك)',
        'الشيخ عبد الله عارف (عالم وتاجر)'
      ],
      historicalContext: 'This period coincided with the height of the spice trade, making Indonesian ports crucial stops for merchants from across the Indian Ocean. The existing Hindu-Buddhist kingdoms were experiencing internal conflicts, making them more receptive to new ideas and alliances.',
      historicalContextAr: 'تزامنت هذه الفترة مع ذروة تجارة التوابل، مما جعل الموانئ الإندونيسية محطات حاسمة للتجار من جميع أنحاء المحيط الهندي. الممالك الهندوسية البوذية الموجودة كانت تواجه صراعات داخلية، مما جعلها أكثر تقبلاً للأفكار والتحالفات الجديدة.',
      lessons: [
        'The power of leading by example in spreading faith',
        'Importance of cultural sensitivity in religious outreach',
        'Economic prosperity and moral character go hand in hand',
        'Peaceful transformation is more lasting than forced conversion'
      ],
      lessonsAr: [
        'قوة القيادة بالقدوة في نشر الإيمان',
        'أهمية الحساسية الثقافية في الدعوة الدينية',
        'الازدهار الاقتصادي والطابع الأخلاقي يسيران جنباً إلى جنب',
        'التحول السلمي أكثر دواماً من التحول القسري'
      ],
      modernRelevance: 'This story offers valuable lessons for today\'s world about religious tolerance, cultural integration, and the power of positive example. It shows how different faiths and cultures can coexist and enrich each other when approached with respect and understanding.',
      modernRelevanceAr: 'هذه القصة تقدم دروساً قيمة لعالم اليوم حول التسامح الديني والتكامل الثقافي وقوة المثال الإيجابي. تظهر كيف يمكن للأديان والثقافات المختلفة أن تتعايش وتثري بعضها البعض عندما يتم التعامل معها بالاحترام والفهم.',
      relatedEvents: [
        'Establishment of Sultanate of Malacca (1400)',
        'Fall of Majapahit Empire (1527)',
        'Portuguese arrival in Malacca (1511)',
        'Dutch colonial expansion (1602)'
      ],
      relatedEventsAr: [
        'تأسيس سلطنة ملقا (1400)',
        'سقوط إمبراطورية ماجاباهيت (1527)',
        'وصول البرتغاليين إلى ملقا (1511)',
        'التوسع الاستعماري الهولندي (1602)'
      ],
      sources: [
        'Tome Pires - Suma Oriental (1515)',
        'Ibn Battuta\'s Travels',
        'Sejarah Melayu (Malay Annals)',
        'Archaeological evidence from trading ports'
      ],
      sourcesAr: [
        'توم بيريس - سوما أورينتال (1515)',
        'رحلات ابن بطوطة',
        'سجاره ملايو (حوليات الملايو)',
        'أدلة أثرية من الموانئ التجارية'
      ]
    },
    1: {
      title: 'The Nine Saints of Java',
      titleAr: 'الأولياء التسعة في جاوة',
      country: 'Indonesia',
      countryAr: 'إندونيسيا',
      period: '15th-16th Century',
      periodAr: 'القرن الخامس عشر - السادس عشر',
      category: 'Religious Leadership',
      categoryAr: 'القيادة الدينية',
      summary: 'The inspiring story of nine Islamic saints who used wisdom, patience, and cultural understanding to spread Islam throughout Java, creating a lasting legacy of tolerance and integration.',
      summaryAr: 'القصة الملهمة لتسعة أولياء إسلاميين استخدموا الحكمة والصبر والفهم الثقافي لنشر الإسلام في جاوة، مما خلق إرثاً دائماً من التسامح والتكامل.',
      fullStory: 'In the lush landscapes of 15th-century Java, nine remarkable men embarked on a mission that would forever change the spiritual fabric of Indonesia. Known as the Wali Songo, or Nine Saints, these Islamic scholars and mystics approached their calling with unprecedented wisdom and cultural sensitivity.\n\nEach of the nine saints brought unique gifts to their mission. Sunan Kalijaga, a former highway robber turned saint, used traditional Javanese puppet shows (wayang) to tell Islamic stories. Sunan Bonang composed beautiful Islamic songs in Javanese melodies. Sunan Kudus built his mosque incorporating Hindu-Javanese architectural elements, showing respect for local traditions.\n\nTheir approach was revolutionary for its time. Instead of demanding the complete abandonment of local customs, they found ways to infuse Islamic values into existing cultural practices. They established pesantren (Islamic boarding schools) that became centers of learning and community life. They created new art forms that blended Islamic teachings with Javanese aesthetics.\n\nThe saints faced many challenges. Some local rulers were suspicious of their intentions, while orthodox Muslims from other regions criticized their accommodating approach. Yet they persevered, guided by their belief that Islam\'s message of peace and justice could be conveyed through love and understanding rather than force.\n\nTheir success was remarkable. Within a century, most of Java had embraced Islam, but it was an Islam that felt familiar and accessible to the Javanese people. The saints had created a synthesis that honored both Islamic principles and local wisdom, establishing a model of religious harmony that continues to inspire.\n\nToday, the tombs of the Wali Songo are pilgrimage sites visited by millions of Indonesian Muslims who seek blessings and remember the gentle wisdom of these remarkable men who showed that faith spreads best through love, patience, and respect for human dignity.',
      fullStoryAr: 'في المناظر الطبيعية الخصبة لجاوة في القرن الخامس عشر، شرع تسعة رجال رائعين في مهمة ستغير إلى الأبد النسيج الروحي لإندونيسيا. المعروفون باسم والي سونغو، أو الأولياء التسعة، هؤلاء العلماء والصوفيون الإسلاميون تعاملوا مع دعوتهم بحكمة وحساسية ثقافية لم يسبق لها مثيل.\n\nكل من الأولياء التسعة جلب مواهب فريدة لمهمته. سونان كاليجاغا، قاطع طريق سابق تحول إلى ولي، استخدم عروض الدمى الجاوية التقليدية (وايانغ) لحكي القصص الإسلامية. سونان بونانغ ألف أغاني إسلامية جميلة بألحان جاوية. سونان كودوس بنى مسجده مدمجاً عناصر معمارية هندوسية جاوية، مظهراً احتراماً للتقاليد المحلية.\n\nنهجهم كان ثورياً لعصره. بدلاً من المطالبة بالتخلي الكامل عن العادات المحلية، وجدوا طرقاً لدمج القيم الإسلامية في الممارسات الثقافية الموجودة. أسسوا البيسانترين (المدارس الداخلية الإسلامية) التي أصبحت مراكز للتعلم والحياة المجتمعية. خلقوا أشكال فنية جديدة مزجت التعاليم الإسلامية مع الجماليات الجاوية.\n\nواجه الأولياء تحديات كثيرة. بعض الحكام المحليين كانوا مشكوكين في نواياهم، بينما انتقد المسلمون الأرثوذكس من مناطق أخرى نهجهم المتساهل. ومع ذلك ثابروا، مسترشدين بإيمانهم أن رسالة الإسلام للسلام والعدالة يمكن نقلها من خلال الحب والفهم بدلاً من القوة.\n\nنجاحهم كان ملحوظاً. في غضون قرن، اعتنقت معظم جاوة الإسلام، لكنه كان إسلاماً شعر به الشعب الجاوي بالألفة وإمكانية الوصول إليه. الأولياء خلقوا تركيباً كرم كلاً من المبادئ الإسلامية والحكمة المحلية، مؤسسين نموذجاً للوئام الديني يستمر في الإلهام.\n\nاليوم، مقابر والي سونغو هي مواقع حج يزورها ملايين المسلمين الإندونيسيين الذين يسعون للبركات ويتذكرون الحكمة اللطيفة لهؤلاء الرجال الرائعين الذين أظهروا أن الإيمان ينتشر بشكل أفضل من خلال الحب والصبر واحترام الكرامة الإنسانية.',
      keyFigures: [
        'Sunan Kalijaga (Master of Cultural Integration)',
        'Sunan Bonang (Musical Innovator)',
        'Sunan Kudus (Architectural Synthesizer)',
        'Sunan Giri (Educational Pioneer)'
      ],
      keyFiguresAr: [
        'سونان كاليجاغا (أستاذ التكامل الثقافي)',
        'سونان بونانغ (المبدع الموسيقي)',
        'سونان كودوس (مركب العمارة)',
        'سونان غيري (رائد التعليم)'
      ],
      historicalContext: 'Java was transitioning from Hindu-Buddhist kingdoms to Islamic sultanates. The Majapahit Empire was declining, creating opportunities for new religious and political leadership. The spice trade brought wealth and cultural exchange to the region.',
      historicalContextAr: 'كانت جاوة تنتقل من الممالك الهندوسية البوذية إلى السلطنات الإسلامية. إمبراطورية ماجاباهيت كانت في تراجع، مما خلق فرصاً لقيادة دينية وسياسية جديدة. تجارة التوابل جلبت الثروة والتبادل الثقافي إلى المنطقة.',
      lessons: [
        'Cultural adaptation strengthens rather than weakens faith',
        'Patience and wisdom achieve more than force',
        'Art and culture are powerful vehicles for spiritual messages',
        'Respect for local traditions builds trust and acceptance'
      ],
      lessonsAr: [
        'التكيف الثقافي يقوي الإيمان بدلاً من إضعافه',
        'الصبر والحكمة يحققان أكثر من القوة',
        'الفن والثقافة وسائل قوية للرسائل الروحية',
        'احترام التقاليد المحلية يبني الثقة والقبول'
      ],
      modernRelevance: 'The Wali Songo\'s approach offers a blueprint for religious harmony in diverse societies. Their methods show how faith communities can engage with different cultures while maintaining their core values, creating unity in diversity.',
      modernRelevanceAr: 'نهج والي سونغو يقدم مخططاً للوئام الديني في المجتمعات المتنوعة. طرقهم تظهر كيف يمكن للمجتمعات الدينية التفاعل مع ثقافات مختلفة مع الحفاظ على قيمها الأساسية، مما يخلق وحدة في التنوع.',
      relatedEvents: [
        'Decline of Majapahit Empire (1400s)',
        'Rise of Demak Sultanate (1475)',
        'Establishment of Mataram Sultanate (1587)',
        'Dutch colonial period begins (1602)'
      ],
      relatedEventsAr: [
        'تراجع إمبراطورية ماجاباهيت (1400s)',
        'صعود سلطنة ديماك (1475)',
        'تأسيس سلطنة ماتارام (1587)',
        'بداية الفترة الاستعمارية الهولندية (1602)'
      ],
      sources: [
        'Babad Tanah Jawi (Javanese Chronicles)',
        'Serat Wali Songo',
        'Archaeological evidence from mosque sites',
        'Oral traditions and folklore'
      ],
      sourcesAr: [
        'بابد تاناه جاوي (سجلات جاوية)',
        'سيرات والي سونغو',
        'أدلة أثرية من مواقع المساجد',
        'التقاليد الشفهية والفولكلور'
      ]
    }
  }
};

export default function StoryDetail() {
  const { countryId, storyIndex } = useParams<{ countryId: string; storyIndex: string }>();
  const { i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';
  
  const story = countryId && storyIndex ? 
    storyData[countryId]?.[parseInt(storyIndex)] : null;

  if (!story) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background to-accent/20 flex items-center justify-center">
        <Card className="max-w-md mx-auto">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">
              {isArabic ? 'القصة غير موجودة' : 'Story Not Found'}
            </h2>
            <p className="text-muted-foreground mb-6">
              {isArabic 
                ? 'عذراً، لم نتمكن من العثور على تفاصيل هذه القصة.'
                : 'Sorry, we could not find details for this story.'
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
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 mx-auto mb-4 flex items-center justify-center">
              <BookOpen className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-4xl font-bold mb-4">
              {isArabic ? story.titleAr : story.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
              {isArabic ? story.summaryAr : story.summary}
            </p>
            <div className="flex justify-center gap-3 flex-wrap">
              <Badge variant="secondary" className="flex items-center gap-1">
                <MapPin className="h-3 w-3" />
                {isArabic ? story.countryAr : story.country}
              </Badge>
              <Badge variant="outline" className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                {isArabic ? story.periodAr : story.period}
              </Badge>
              <Badge variant="outline">
                {isArabic ? story.categoryAr : story.category}
              </Badge>
            </div>
          </div>
        </div>

        {/* Historical Context */}
        <Card className="mb-8 border-0 shadow-lg bg-gradient-to-br from-blue-50 to-indigo-100/50 dark:from-blue-950/30 dark:to-indigo-900/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-blue-600" />
              {isArabic ? 'السياق التاريخي' : 'Historical Context'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg leading-relaxed">
              {isArabic ? story.historicalContextAr : story.historicalContext}
            </p>
          </CardContent>
        </Card>

        {/* Full Story */}
        <Card className="mb-8 border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" />
              {isArabic ? 'القصة الكاملة' : 'The Full Story'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose prose-lg max-w-none dark:prose-invert">
              {(isArabic ? story.fullStoryAr : story.fullStory).split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-6 text-lg leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Key Figures */}
        <Card className="mb-8 border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              {isArabic ? 'الشخصيات الرئيسية' : 'Key Figures'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3 md:grid-cols-2">
              {(isArabic ? story.keyFiguresAr : story.keyFigures).map((figure, index) => (
                <div key={index} className="flex items-start gap-3 bg-accent/20 rounded-lg p-4">
                  <Star className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                  <span className="font-medium">{figure}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Two Column Layout */}
        <div className="grid gap-8 lg:grid-cols-2 mb-8">
          {/* Lessons */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-primary" />
                {isArabic ? 'الدروس المستفادة' : 'Lessons Learned'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {(isArabic ? story.lessonsAr : story.lessons).map((lesson, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                    <span className="text-sm">{lesson}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Related Events */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                {isArabic ? 'أحداث ذات صلة' : 'Related Events'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {(isArabic ? story.relatedEventsAr : story.relatedEvents).map((event, index) => (
                  <div key={index} className="bg-primary/10 rounded-lg p-3">
                    <span className="text-sm font-medium">{event}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Modern Relevance */}
        <Card className="mb-8 border-0 shadow-lg bg-gradient-to-br from-green-50 to-emerald-100/50 dark:from-green-950/30 dark:to-emerald-900/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-green-600" />
              {isArabic ? 'الصلة بالعصر الحديث' : 'Modern Relevance'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg leading-relaxed">
              {isArabic ? story.modernRelevanceAr : story.modernRelevance}
            </p>
          </CardContent>
        </Card>

        {/* Sources */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" />
              {isArabic ? 'المصادر' : 'Sources'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-2 md:grid-cols-2">
              {(isArabic ? story.sourcesAr : story.sources).map((source, index) => (
                <div key={index} className="text-sm bg-muted/50 rounded-lg px-3 py-2">
                  {source}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

