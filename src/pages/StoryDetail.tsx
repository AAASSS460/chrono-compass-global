import { useParams, Link, useLocation } from 'react-router-dom';
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

export const storyData: Record<string, Record<number, StoryData>> = {
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
    },
    2: {
      title: 'Modern Islamic Revival in Indonesia',
      titleAr: 'النهضة الإسلامية الحديثة في إندونيسيا',
      country: 'Indonesia',
      countryAr: 'إندونيسيا',
      period: '20th-21st Century',
      periodAr: 'القرن 20-21',
      category: 'Education & Society',
      categoryAr: 'التعليم والمجتمع',
      summary: 'Educational expansion, media, and civil society fostered a modern Islamic revival with Indonesian character.',
      summaryAr: 'التوسع التعليمي والإعلام والمجتمع المدني أسس نهضة إسلامية حديثة بطابع إندونيسي.',
      fullStory: 'From pesantren reforms to university growth and civil society, Indonesian Muslims renewed knowledge and practice while embracing diversity and unity.',
      fullStoryAr: 'من إصلاحات البيسانترين إلى نمو الجامعات والمجتمع المدني، جدّد المسلمون في إندونيسيا العلم والممارسة مع احتضان التنوع والوحدة.',
      keyFigures: ['Educators', 'Community leaders'],
      keyFiguresAr: ['مربون', 'قادة مجتمع'],
      historicalContext: 'Post-independence nation-building and modernization.',
      historicalContextAr: 'بناء الدولة بعد الاستقلال والحداثة.',
      lessons: ['Balance renewal and tradition', 'Invest in education'],
      lessonsAr: ['موازنة التجديد والتقليد', 'الاستثمار في التعليم'],
      modernRelevance: 'Shows how plural societies can sustain Islamic identity positively.',
      modernRelevanceAr: 'يبين كيف يمكن للمجتمعات المتعددة الحفاظ على الهوية الإسلامية بإيجابية.',
      relatedEvents: ['University expansions', 'Curriculum reforms'],
      relatedEventsAr: ['توسع الجامعات', 'إصلاحات المناهج'],
      sources: ['Educational reports', 'Civil society archives'],
      sourcesAr: ['تقارير تعليمية', 'أرشيف المجتمع المدني']
    }
  },
  usa: {
    0: {
      title: 'Early Muslim Presence in America',
      titleAr: 'الوجود الإسلامي المبكر في أمريكا',
      country: 'United States',
      countryAr: 'الولايات المتحدة',
      period: '17th-19th Century',
      periodAr: 'القرن السابع عشر - التاسع عشر',
      category: 'Historical Migration',
      categoryAr: 'الهجرة التاريخية',
      summary: 'The often-overlooked history of Muslims in America, starting with enslaved Africans who brought their Islamic faith and traditions to the New World.',
      summaryAr: 'التاريخ الذي غالباً ما يتم تجاهله للمسلمين في أمريكا، بدءاً من الأفارقة المستعبدين الذين جلبوا إيمانهم وتقاليدهم الإسلامية إلى العالم الجديد.',
      fullStory: 'The history of Islam in America is far older than many realize, dating back to the transatlantic slave trade. It is estimated that between 10% and 20% of the enslaved Africans brought to the Americas were Muslims. Despite the brutal conditions of slavery and forced conversion, many managed to preserve elements of their Islamic faith, language, and culture.\n\nFigures like Omar ibn Said, a highly educated Fula Muslim scholar, wrote his autobiography in Arabic while enslaved in North Carolina, providing invaluable insights into the lives of these early Muslim Americans. Ayuba Suleiman Diallo, another prominent enslaved Muslim, also documented his experiences.\n\nThese early Muslims contributed significantly to the nascent American society, often in hidden ways. Their knowledge of agriculture, craftsmanship, and even literacy (in Arabic) influenced various aspects of early American life. Their resilience in maintaining their faith against immense pressure is a testament to their strength and devotion.\n\nWhile their presence was largely suppressed and their stories often erased from mainstream narratives, recent scholarship has begun to shed light on this foundational period of Muslim American history. It highlights the enduring legacy of faith and resistance that shaped the diverse tapestry of American Islam.',
      fullStoryAr: 'تاريخ الإسلام في أمريكا أقدم بكثير مما يدركه الكثيرون، ويعود إلى تجارة الرقيق عبر المحيط الأطلسي. يُقدر أن ما بين 10% و 20% من الأفارقة المستعبدين الذين جلبوا إلى الأمريكتين كانوا مسلمين. على الرغم من الظروف الوحشية للعبودية والتحول القسري، تمكن الكثيرون من الحفاظ على عناصر من إيمانهم الإسلامي ولغتهم وثقافتهم.\n\nشخصيات مثل عمر بن سعيد، وهو عالم مسلم فولاني متعلم تعليماً عالياً، كتب سيرته الذاتية باللغة العربية أثناء استعباده في ولاية كارولينا الشمالية، مما قدم رؤى لا تقدر بثمن في حياة هؤلاء المسلمين الأمريكيين الأوائل. أيوب سليمان ديالو، وهو مسلم مستعبد بارز آخر، وثق أيضاً تجاربه.\n\nساهم هؤلاء المسلمون الأوائل بشكل كبير في المجتمع الأمريكي الناشئ، غالباً بطرق خفية. أثرت معرفتهم بالزراعة والحرف اليدوية وحتى القراءة والكتابة (باللغة العربية) على جوانب مختلفة من الحياة الأمريكية المبكرة. صمودهم في الحفاظ على إيمانهم ضد ضغوط هائلة هو شهادة على قوتهم وتفانيهم.\n\nبينما تم قمع وجودهم إلى حد كبير وغالباً ما تم محو قصصهم من الروايات السائدة، بدأت الدراسات الحديثة تسلط الضوء على هذه الفترة التأسيسية من تاريخ المسلمين الأمريكيين. إنها تسلط الضوء على الإرث الدائم للإيمان والمقاومة الذي شكل النسيج المتنوع للإسلام الأمريكي.',
      keyFigures: [
        'Omar ibn Said',
        'Ayuba Suleiman Diallo',
        'Bilali Mohammed'
      ],
      keyFiguresAr: [
        'عمر بن سعيد',
        'أيوب سليمان ديالو',
        'بلالي محمد'
      ],
      historicalContext: 'The transatlantic slave trade brought millions of Africans to the Americas, including a significant number of Muslims. The prevailing social and legal structures aimed to strip enslaved people of their cultural and religious identities.',
      historicalContextAr: 'جلبت تجارة الرقيق عبر المحيط الأطلسي ملايين الأفارقة إلى الأمريكتين، بما في ذلك عدد كبير من المسلمين. هدفت الهياكل الاجتماعية والقانونية السائدة إلى تجريد المستعبدين من هوياتهم الثقافية والدينية.',
      lessons: [
        'Resilience of faith in the face of oppression',
        'Importance of preserving cultural and religious heritage',
        'The hidden contributions of marginalized communities',
        'Understanding the full, complex history of America'
      ],
      lessonsAr: [
        'صمود الإيمان في وجه الاضطهاد',
        'أهمية الحفاظ على التراث الثقافي والديني',
        'المساهمات الخفية للمجتمعات المهمشة',
        'فهم التاريخ الأمريكي الكامل والمعقد'
      ],
      modernRelevance: 'This history challenges conventional narratives of American identity and highlights the long-standing diversity of the nation. It underscores the importance of recognizing and celebrating the contributions of all communities.',
      modernRelevanceAr: 'يتحدى هذا التاريخ الروايات التقليدية للهوية الأمريكية ويسلط الضوء على التنوع طويل الأمد للأمة. ويؤكد على أهمية الاعتراف بمساهمات جميع المجتمعات والاحتفال بها.',
      relatedEvents: [
        'Transatlantic Slave Trade',
        'American Civil War',
        'Emancipation Proclamation'
      ],
      relatedEventsAr: [
        'تجارة الرقيق عبر المحيط الأطلسي',
        'الحرب الأهلية الأمريكية',
        'إعلان تحرير العبيد'
      ],
      sources: [
        'The Autobiography of Omar ibn Said',
        'Primary historical documents from plantations',
        'Scholarly works on African American Islam'
      ],
      sourcesAr: [
        'سيرة عمر بن سعيد الذاتية',
        'وثائق تاريخية أولية من المزارع',
        'أعمال علمية عن الإسلام الأمريكي الأفريقي'
      ]
    },
    1: {
      title: 'Civil Rights Movement and Islam in America',
      titleAr: 'حركة الحقوق المدنية والإسلام في أمريكا',
      country: 'United States',
      countryAr: 'الولايات المتحدة',
      period: 'Mid-20th Century',
      periodAr: 'منتصف القرن العشرين',
      category: 'Social Justice',
      categoryAr: 'العدالة الاجتماعية',
      summary: 'The pivotal role played by Muslim leaders and communities, particularly Malcolm X and the Nation of Islam, in the struggle for civil rights and racial equality in the United States.',
      summaryAr: 'الدور المحوري الذي لعبه القادة والمجتمعات المسلمة، وخاصة مالكوم إكس وأمة الإسلام، في النضال من أجل الحقوق المدنية والمساواة العرقية في الولايات المتحدة.',
      fullStory: 'The mid-20th century witnessed a powerful convergence of the Civil Rights Movement and the rise of Islamic consciousness among African Americans. Disillusioned with the slow pace of racial integration and the hypocrisy of mainstream American society, many African Americans found solace, dignity, and a call to action in Islam.\n\nMalcolm X, initially a prominent figure in the Nation of Islam, became one of the most articulate and fearless advocates for black liberation. His powerful speeches exposed the systemic racism in America and inspired a generation to demand their rights. While his early rhetoric was separatist, his later embrace of orthodox Islam after his pilgrimage to Mecca led him to advocate for a more inclusive human rights agenda.\n\nBeyond Malcolm X, other Muslim individuals and groups actively participated in the Civil Rights Movement. Muslim communities often provided safe spaces, organized protests, and offered social services to their members and the wider community. The principles of equality, justice, and human dignity inherent in Islam resonated deeply with the aspirations of the movement.\n\nThe involvement of Muslims brought a unique dimension to the Civil Rights struggle, emphasizing self-respect, community empowerment, and a global perspective on human rights. Their contributions helped to broaden the scope of the movement and challenge America to live up to its ideals of freedom and justice for all its citizens.',
      fullStoryAr: 'شهد منتصف القرن العشرين تقارباً قوياً بين حركة الحقوق المدنية وصعود الوعي الإسلامي بين الأمريكيين الأفارقة. فبعد خيبة الأمل من بطء وتيرة الاندماج العرقي ونفاق المجتمع الأمريكي السائد، وجد العديد من الأمريكيين الأفارقة العزاء والكرامة ودعوة للعمل في الإسلام.\n\nأصبح مالكوم إكس، الذي كان في البداية شخصية بارزة في أمة الإسلام، أحد أكثر المدافعين عن تحرير السود بلاغة وشجاعة. كشفت خطبه القوية عن العنصرية المنهجية في أمريكا وألهمت جيلاً للمطالبة بحقوقهم. وبينما كان خطابه المبكر انفصالياً، فإن اعتناقه اللاحق للإسلام الأرثوذكسي بعد حجه إلى مكة دفعه إلى الدعوة إلى أجندة حقوق إنسان أكثر شمولاً.\n\nوبعيداً عن مالكوم إكس، شارك أفراد وجماعات مسلمة أخرى بنشاط في حركة الحقوق المدنية. غالباً ما وفرت المجتمعات المسلمة مساحات آمنة، ونظمت احتجاجات، وقدمت خدمات اجتماعية لأعضائها والمجتمع الأوسع. مبادئ المساواة والعدالة والكرامة الإنسانية المتأصلة في الإسلام لاقت صدى عميقاً مع تطلعات الحركة.\n\nأضفت مشاركة المسلمين بعداً فريداً على نضال الحقوق المدنية، مؤكدة على احترام الذات، وتمكين المجتمع، ومنظور عالمي لحقوق الإنسان. ساعدت مساهماتهم في توسيع نطاق الحركة وتحدي أمريكا للارتقاء إلى مُثلها العليا في الحرية والعدالة لجميع مواطنيها.',
      keyFigures: [
        'Malcolm X',
        'Elijah Muhammad',
        'Muhammad Ali',
        'Warith Deen Mohammed'
      ],
      keyFiguresAr: [
        'مالكوم إكس',
        'إليجا محمد',
        'محمد علي',
        'وارث دين محمد'
      ],
      historicalContext: 'The Civil Rights Movement aimed to end racial segregation and discrimination against African Americans. The Cold War context also put pressure on the US to address its internal racial issues to maintain its image as a beacon of democracy.',
      historicalContextAr: 'هدفت حركة الحقوق المدنية إلى إنهاء الفصل العنصري والتمييز ضد الأمريكيين الأفارقة. كما وضع سياق الحرب الباردة ضغطاً على الولايات المتحدة لمعالجة قضاياها العرقية الداخلية للحفاظ على صورتها كمنارة للديمقراطية.',
      lessons: [
        'The intersection of faith and social justice',
        'The power of collective action for change',
        'Importance of self-determination and empowerment',
        'Challenging systemic injustice through various means'
      ],
      lessonsAr: [
        'تقاطع الإيمان والعدالة الاجتماعية',
        'قوة العمل الجماعي من أجل التغيير',
        'أهمية تقرير المصير والتمكين',
        'تحدي الظلم المنهجي بوسائل مختلفة'
      ],
      modernRelevance: 'The legacy of Muslim involvement in the Civil Rights Movement continues to inspire contemporary movements for racial justice and human rights. It serves as a reminder of the ongoing struggle for equality and the diverse voices that contribute to it.',
      modernRelevanceAr: 'يستمر إرث مشاركة المسلمين في حركة الحقوق المدنية في إلهام الحركات المعاصرة من أجل العدالة العرقية وحقوق الإنسان. إنه بمثابة تذكير بالنضال المستمر من أجل المساواة والأصوات المتنوعة التي تساهم فيه.',
      relatedEvents: [
        'March on Washington (1963)',
        'Assassination of Malcolm X (1965)',
        'Civil Rights Act of 1964',
        'Voting Rights Act of 1965'
      ],
      relatedEventsAr: [
        'المسيرة إلى واشنطن (1963)',
        'اغتيال مالكوم إكس (1965)',
        'قانون الحقوق المدنية لعام 1964',
        'قانون حقوق التصويت لعام 1965'
      ],
      sources: [
        'The Autobiography of Malcolm X',
        'Eyes on the Prize (documentary series)',
        'Academic studies on Islam in America and the Civil Rights Movement'
      ],
      sourcesAr: [
        'سيرة مالكوم إكس الذاتية',
        'عيون على الجائزة (سلسلة وثائقية)',
        'دراسات أكاديمية حول الإسلام في أمريكا وحركة الحقوق المدنية'
      ]
    }
  },
  pakistan: {
    0: {
      title: 'Partition and Independence',
      titleAr: 'التقسيم والاستقلال',
      country: 'Pakistan',
      countryAr: 'باكستان',
      period: '1947',
      periodAr: '1947',
      category: 'National Independence',
      categoryAr: 'الاستقلال الوطني',
      summary: 'The dramatic story of Pakistan\'s creation as a homeland for Muslims of the Indian subcontinent, marking one of the largest mass migrations in human history.',
      summaryAr: 'القصة الدرامية لإنشاء باكستان كوطن للمسلمين في شبه القارة الهندية، مما مثل واحدة من أكبر الهجرات الجماعية في تاريخ البشرية.',
      fullStory: 'In the aftermath of World War II, the Indian subcontinent stood at a crossroads. The British Empire, weakened by war, was preparing to leave India. However, the question of how to govern a region with such diverse religious and cultural communities became increasingly urgent.\n\nMuhammad Ali Jinnah, the leader of the All-India Muslim League, argued passionately for a separate homeland for Muslims. He believed that Muslims, as a distinct community with their own culture, traditions, and way of life, needed their own state to flourish and practice their faith freely.\n\nThe demand for Pakistan was not born out of hatred for other communities, but from a deep desire for self-determination and the preservation of Islamic identity. Jinnah\'s vision was of a modern, democratic state where Muslims could live according to their values while respecting the rights of all citizens.\n\nWhen the British finally announced their intention to leave India in 1947, the subcontinent was divided into two nations: India and Pakistan. This partition triggered one of the largest mass migrations in human history, as millions of people moved across the new borders to join their religious communities.\n\nThe creation of Pakistan on August 14, 1947, was a moment of both joy and sorrow. While Muslims celebrated the birth of their homeland, the human cost of partition was enormous. Families were separated, homes were lost, and countless lives were affected by the violence that accompanied the division.\n\nDespite the challenges, Pakistan emerged as a beacon of hope for Muslims worldwide. It demonstrated that Muslims could establish and govern their own modern state, balancing Islamic values with contemporary governance. The country\'s founding principles of faith, unity, and discipline continue to guide its development.',
      fullStoryAr: 'في أعقاب الحرب العالمية الثانية، وقفت شبه القارة الهندية عند مفترق طرق. الإمبراطورية البريطانية، المضعفة من الحرب، كانت تستعد لمغادرة الهند. ومع ذلك، أصبح السؤال حول كيفية حكم منطقة بمجتمعات دينية وثقافية متنوعة للغاية ملحاً بشكل متزايد.\n\nجادل محمد علي جناح، زعيم عصبة مسلمي عموم الهند، بحماس من أجل وطن منفصل للمسلمين. اعتقد أن المسلمين، كمجتمع متميز بثقافتهم وتقاليدهم وأسلوب حياتهم الخاص، يحتاجون إلى دولتهم الخاصة ليزدهروا ويمارسوا إيمانهم بحرية.\n\nلم يولد طلب باكستان من كراهية المجتمعات الأخرى، بل من رغبة عميقة في تقرير المصير والحفاظ على الهوية الإسلامية. كانت رؤية جناح لدولة حديثة وديمقراطية حيث يمكن للمسلمين العيش وفقاً لقيمهم مع احترام حقوق جميع المواطنين.\n\nعندما أعلن البريطانيون أخيراً نيتهم في مغادرة الهند عام 1947، تم تقسيم شبه القارة إلى دولتين: الهند وباكستان. أثار هذا التقسيم واحدة من أكبر الهجرات الجماعية في تاريخ البشرية، حيث انتقل ملايين الأشخاص عبر الحدود الجديدة للانضمام إلى مجتمعاتهم الدينية.\n\nكان إنشاء باكستان في 14 أغسطس 1947 لحظة من الفرح والحزن. بينما احتفل المسلمون بميلاد وطنهم، كانت التكلفة البشرية للتقسيم هائلة. تم فصل العائلات، وفقدت المنازل، وتأثرت حياة لا تحصى بالعنف الذي رافق التقسيم.\n\nعلى الرغم من التحديات، ظهرت باكستان كمنارة أمل للمسلمين في جميع أنحاء العالم. أثبتت أن المسلمين يمكنهم إنشاء وحكم دولتهم الحديثة الخاصة، موازنين القيم الإسلامية مع الحكم المعاصر. مبادئ البلاد التأسيسية للإيمان والوحدة والانضباط تستمر في توجيه تطورها.',
      keyFigures: [
        'Muhammad Ali Jinnah (Quaid-e-Azam)',
        'Allama Iqbal (Spiritual Father)',
        'Liaquat Ali Khan (First Prime Minister)',
        'Sir Syed Ahmad Khan (Educational Pioneer)'
      ],
      keyFiguresAr: [
        'محمد علي جناح (قائد الأعظم)',
        'علامة إقبال (الأب الروحي)',
        'لياقت علي خان (أول رئيس وزراء)',
        'السير سيد أحمد خان (رائد التعليم)'
      ],
      historicalContext: 'The partition of India was one of the most significant events of the 20th century, reshaping the political and cultural landscape of South Asia. It occurred against the backdrop of decolonization and the rise of nationalist movements.',
      historicalContextAr: 'كان تقسيم الهند أحد أهم أحداث القرن العشرين، مما أعاد تشكيل المشهد السياسي والثقافي لجنوب آسيا. حدث ذلك على خلفية إنهاء الاستعمار وصعود الحركات القومية.',
      lessons: [
        'Importance of self-determination for religious communities',
        'Complexity of nation-building in diverse societies',
        'Human cost of political decisions',
        'Balance between religious identity and modern governance'
      ],
      lessonsAr: [
        'أهمية تقرير المصير للمجتمعات الدينية',
        'تعقيد بناء الأمة في المجتمعات المتنوعة',
        'التكلفة البشرية للقرارات السياسية',
        'التوازن بين الهوية الدينية والحكم الحديث'
      ],
      modernRelevance: 'Pakistan\'s creation continues to inspire discussions about religious freedom, minority rights, and the relationship between faith and governance. It serves as a case study in nation-building and the challenges of creating inclusive societies.',
      modernRelevanceAr: 'يستمر إنشاء باكستان في إلهام المناقشات حول الحرية الدينية وحقوق الأقليات والعلاقة بين الإيمان والحكم. إنه بمثابة دراسة حالة في بناء الأمة وتحديات إنشاء مجتمعات شاملة.',
      relatedEvents: [
        'All-India Muslim League formation (1906)',
        'Lahore Resolution (1940)',
        'Mountbatten Plan (1947)',
        'Independence Day (August 14, 1947)'
      ],
      relatedEventsAr: [
        'تأسيس عصبة مسلمي عموم الهند (1906)',
        'قرار لاهور (1940)',
        'خطة مونتباتن (1947)',
        'يوم الاستقلال (14 أغسطس 1947)'
      ],
      sources: [
        'Jinnah\'s speeches and writings',
        'Official documents of partition',
        'Historical accounts of migration',
        'Academic studies on nation-building'
      ],
      sourcesAr: [
        'خطب وكتابات جناح',
        'الوثائق الرسمية للتقسيم',
        'الحسابات التاريخية للهجرة',
        'الدراسات الأكاديمية حول بناء الأمة'
      ]
    },
    1: {
      title: 'Islamic Scholarship Tradition',
      titleAr: 'تقليد العلوم الإسلامية',
      country: 'Pakistan',
      countryAr: 'باكستان',
      period: '8th Century - Present',
      periodAr: 'القرن الثامن - الحاضر',
      category: 'Intellectual Heritage',
      categoryAr: 'التراث الفكري',
      summary: 'The rich tradition of Islamic scholarship in Pakistan, from the early Sufi saints to modern Islamic universities, preserving and developing Islamic knowledge.',
      summaryAr: 'التقليد الغني للعلوم الإسلامية في باكستان، من الأولياء الصوفيين الأوائل إلى الجامعات الإسلامية الحديثة، الحفاظ على المعرفة الإسلامية وتطويرها.',
      fullStory: 'Pakistan\'s Islamic scholarship tradition is one of the richest and most diverse in the Muslim world. This intellectual heritage spans over a thousand years, beginning with the arrival of Islam in the region and continuing to the present day.\n\nThe foundation of this tradition was laid by early Muslim scholars and Sufi saints who arrived in the Indian subcontinent. These spiritual and intellectual pioneers established madrasas (Islamic schools) and khanqahs (Sufi centers) that became centers of learning and spiritual development.\n\nAmong the most influential early figures was Data Ganj Bakhsh, whose shrine in Lahore remains a major center of spiritual pilgrimage. His teachings emphasized the inner dimensions of Islam, combining rigorous scholarship with spiritual insight.\n\nThe tradition continued to flourish during the Mughal period, when emperors like Akbar and Aurangzeb patronized Islamic learning. Great scholars like Shah Waliullah Dehlawi worked to preserve and systematize Islamic knowledge, writing comprehensive works on various Islamic sciences.\n\nIn the modern era, Pakistan has become home to some of the world\'s most prestigious Islamic educational institutions. The International Islamic University in Islamabad, for example, attracts students from around the world, offering programs that combine traditional Islamic learning with modern academic methods.\n\nThis scholarly tradition is not limited to religious studies alone. Pakistani Islamic scholars have made significant contributions to fields as diverse as philosophy, medicine, astronomy, and literature. Their work demonstrates that Islamic scholarship can be both deeply traditional and thoroughly modern.\n\nThe tradition continues to evolve, with contemporary scholars addressing new challenges while remaining rooted in classical Islamic learning. This balance between tradition and innovation ensures that Pakistan\'s Islamic scholarship remains relevant and vibrant.',
      fullStoryAr: 'تقليد العلوم الإسلامية في باكستان هو واحد من أغنى وأكثر تنوعاً في العالم الإسلامي. يمتد هذا التراث الفكري لأكثر من ألف عام، بدءاً من وصول الإسلام إلى المنطقة واستمراراً حتى يومنا هذا.\n\nتم وضع أساس هذا التقليد من قبل العلماء المسلمين الأوائل والأولياء الصوفيين الذين وصلوا إلى شبه القارة الهندية. أسس هؤلاء الرواد الروحيون والفكريون المدارس الدينية والخوانق (مراكز صوفية) التي أصبحت مراكز للتعلم والتطور الروحي.\n\nمن بين أكثر الشخصيات المبكرة تأثيراً كان داتا غنج بخش، الذي يبقى ضريحه في لاهور مركزاً رئيسياً للحج الروحي. ركزت تعاليمه على الأبعاد الداخلية للإسلام، مدمجة العلوم الصارمة مع البصيرة الروحية.\n\nاستمر التقليد في الازدهار خلال الفترة المغولية، عندما رعى الأباطرة مثل أكبر وأورنجزيب التعلم الإسلامي. عمل علماء عظام مثل شاه ولي الله الدهلوي للحفاظ على المعرفة الإسلامية وتنظيمها، مؤلفين أعمالاً شاملة في مختلف العلوم الإسلامية.\n\nفي العصر الحديث، أصبحت باكستان موطناً لبعض أعرق المؤسسات التعليمية الإسلامية في العالم. الجامعة الإسلامية الدولية في إسلام آباد، على سبيل المثال، تجذب طلاباً من جميع أنحاء العالم، مقدمة برامج تجمع بين التعلم الإسلامي التقليدي والطرق الأكاديمية الحديثة.\n\nهذا التقليد العلمي لا يقتصر على الدراسات الدينية وحدها. قدم العلماء المسلمون الباكستانيون مساهمات مهمة في مجالات متنوعة مثل الفلسفة والطب والفلك والأدب. عملهم يظهر أن العلوم الإسلامية يمكن أن تكون تقليدية عميقة وحديثة تماماً.\n\nيستمر التقليد في التطور، مع معالجة العلماء المعاصرين لتحديات جديدة مع البقاء متجذرين في التعلم الإسلامي الكلاسيكي. هذا التوازن بين التقليد والابتكار يضمن أن العلوم الإسلامية الباكستانية تبقى ذات صلة ونابضة بالحياة.',
      keyFigures: [
        'Data Ganj Bakhsh (Sufi Saint)',
        'Shah Waliullah Dehlawi (Scholar)',
        'Abul A\'la Maududi (Modern Thinker)',
        'Contemporary Islamic scholars'
      ],
      keyFiguresAr: [
        'داتا غنج بخش (ولي صوفي)',
        'شاه ولي الله الدهلوي (عالم)',
        'أبو الأعلى المودودي (مفكر حديث)',
        'العلماء المسلمون المعاصرون'
      ],
      historicalContext: 'Islamic scholarship in the region has evolved through various historical periods, adapting to changing circumstances while maintaining core Islamic values and methodologies.',
      historicalContextAr: 'تطورت العلوم الإسلامية في المنطقة عبر فترات تاريخية مختلفة، متكيفة مع الظروف المتغيرة مع الحفاظ على القيم والمنهجيات الإسلامية الأساسية.',
      lessons: [
        'Enduring value of traditional Islamic learning',
        'Adaptability of Islamic scholarship to modern contexts',
        'Importance of preserving intellectual heritage',
        'Balance between tradition and innovation'
      ],
      lessonsAr: [
        'القيمة الدائمة للتعلم الإسلامي التقليدي',
        'قدرة العلوم الإسلامية على التكيف مع السياقات الحديثة',
        'أهمية الحفاظ على التراث الفكري',
        'التوازن بين التقليد والابتكار'
      ],
      modernRelevance: 'Pakistan\'s Islamic scholarship tradition provides a model for how traditional learning can remain relevant in the modern world, offering insights into education, spirituality, and intellectual development.',
      modernRelevanceAr: 'يوفر تقليد العلوم الإسلامية الباكستاني نموذجاً لكيفية بقاء التعلم التقليدي ذا صلة في العالم الحديث، مقدماً رؤى في التعليم والروحانية والتطور الفكري.',
      relatedEvents: [
        'Arrival of Islam in Sindh (8th century)',
        'Establishment of early madrasas',
        'Mughal patronage of learning',
        'Modern Islamic universities'
      ],
      relatedEventsAr: [
        'وصول الإسلام إلى السند (القرن الثامن)',
        'تأسيس المدارس الدينية المبكرة',
        'رعاية المغول للتعلم',
        'الجامعات الإسلامية الحديثة'
      ],
      sources: [
        'Classical Islamic texts and commentaries',
        'Biographies of Sufi saints',
        'Modern Islamic scholarship',
        'University archives and records'
      ],
      sourcesAr: [
        'النصوص والتعليقات الإسلامية الكلاسيكية',
        'سير الأولياء الصوفيين',
        'العلوم الإسلامية الحديثة',
        'أرشيف الجامعات والسجلات'
      ]
    },
    2: {
      title: 'Unity Movements and Social Welfare',
      titleAr: 'حركات الوحدة والرعاية الاجتماعية',
      country: 'Pakistan',
      countryAr: 'باكستان',
      period: '20th-21st Century',
      periodAr: 'القرن 20-21',
      category: 'Civic Movements',
      categoryAr: 'حركات مدنية',
      summary: 'Faith-based organizations built networks of social welfare, disaster relief, and education to strengthen unity.',
      summaryAr: 'بنت منظمات قائمة على الإيمان شبكات للرعاية الاجتماعية والإغاثة والتعليم لتعزيز الوحدة.',
      fullStory: 'Across cities and villages, civic groups organized clinics, schools, and food programs, reflecting values of solidarity and service.',
      fullStoryAr: 'عبر المدن والقرى، نظمت مجموعات مدنية عيادات ومدارس وبرامج غذائية، معبّرة عن قيم التضامن والخدمة.',
      keyFigures: ['Community leaders'],
      keyFiguresAr: ['قادة مجتمع'],
      historicalContext: 'Urbanization and population growth required new social infrastructures.',
      historicalContextAr: 'فرض التحضر ونمو السكان بنى تحتية اجتماعية جديدة.',
      lessons: ['Service builds unity', 'Institutions sustain progress'],
      lessonsAr: ['الخدمة تبني الوحدة', 'المؤسسات تحافظ على التقدم'],
      modernRelevance: 'Model for contemporary welfare initiatives.',
      modernRelevanceAr: 'نموذج لمبادرات الرعاية المعاصرة.',
      relatedEvents: ['Disaster relief campaigns'],
      relatedEventsAr: ['حملات الإغاثة من الكوارث'],
      sources: ['NGO archives'],
      sourcesAr: ['أرشيف المنظمات']
    }
  },
  turkey: {
    0: {
      title: 'Ottoman Empire Glory',
      titleAr: 'مجد الإمبراطورية العثمانية',
      country: 'Turkey',
      countryAr: 'تركيا',
      period: '1299-1922',
      periodAr: '1299-1922',
      category: 'Imperial History',
      categoryAr: 'التاريخ الإمبراطوري',
      summary: 'The rise and fall of the Ottoman Empire, one of the most powerful and influential Islamic empires in history, spanning six centuries of rule.',
      summaryAr: 'صعود وسقوط الإمبراطورية العثمانية، إحدى أقوى وأكثر الإمبراطوريات الإسلامية تأثيراً في التاريخ، ممتدة على ستة قرون من الحكم.',
      fullStory: 'The Ottoman Empire began as a small principality in northwestern Anatolia in 1299, founded by Osman I. What started as a modest Turkish state grew into one of the most powerful and longest-lasting empires in world history, spanning three continents and ruling over diverse peoples and cultures.\n\nThe empire\'s golden age came during the reign of Suleiman the Magnificent (1520-1566), when it reached its greatest territorial extent. The Ottomans controlled much of southeastern Europe, western Asia, and northern Africa, creating a truly global empire that connected East and West.\n\nWhat made the Ottoman Empire unique was its ability to govern such a diverse population. The empire was home to Muslims, Christians, Jews, and people of many other faiths. Rather than forcing conversion, the Ottomans developed a sophisticated system of religious tolerance, allowing different communities to govern themselves according to their own laws and customs.\n\nThe empire was also a center of learning and culture. Ottoman scholars made significant contributions to fields as diverse as astronomy, medicine, mathematics, and literature. The empire\'s architectural achievements, particularly in mosques and palaces, remain among the most beautiful in the world.\n\nHowever, by the 19th century, the empire began to decline. Internal corruption, external pressure from European powers, and the rise of nationalism among subject peoples all contributed to its weakening. The empire\'s participation in World War I on the side of Germany and Austria-Hungary proved disastrous.\n\nThe final blow came in 1922, when the Turkish War of Independence led by Mustafa Kemal Atatürk resulted in the abolition of the sultanate and the establishment of the Republic of Turkey. While the empire was gone, its legacy continues to influence the modern world in countless ways.',
      fullStoryAr: 'بدأت الإمبراطورية العثمانية كإمارة صغيرة في شمال غرب الأناضول عام 1299، أسسها عثمان الأول. ما بدأ كدولة تركية متواضعة نما إلى واحدة من أقوى وأطول الإمبراطوريات في تاريخ العالم، ممتدة على ثلاث قارات وحاكمة على شعوب وثقافات متنوعة.\n\nجاء العصر الذهبي للإمبراطورية خلال حكم سليمان القانوني (1520-1566)، عندما وصلت إلى أقصى امتداد إقليمي لها. سيطر العثمانيون على معظم جنوب شرق أوروبا وغرب آسيا وشمال إفريقيا، مخلقين إمبراطورية عالمية حقيقية تربط الشرق والغرب.\n\nما جعل الإمبراطورية العثمانية فريدة هو قدرتها على حكم مثل هذا السكان المتنوعين. كانت الإمبراطورية موطناً للمسلمين والمسيحيين واليهود وأشخاص من أديان أخرى عديدة. بدلاً من إجبار التحول، طور العثمانيون نظاماً متطوراً من التسامح الديني، مما سمح للمجتمعات المختلفة بحكم أنفسهم وفقاً لقوانينهم وعاداتهم الخاصة.\n\nكانت الإمبراطورية أيضاً مركزاً للتعلم والثقافة. قدم العلماء العثمانيون مساهمات مهمة في مجالات متنوعة مثل الفلك والطب والرياضيات والأدب. الإنجازات المعمارية للإمبراطورية، خاصة في المساجد والقصور، تبقى من أجمل ما في العالم.\n\nومع ذلك، بحلول القرن التاسع عشر، بدأت الإمبراطورية في التراجع. الفساد الداخلي والضغط الخارجي من القوى الأوروبية وصعود القومية بين الشعوب الخاضعة كلها ساهمت في إضعافها. مشاركة الإمبراطورية في الحرب العالمية الأولى إلى جانب ألمانيا والنمسا-المجر أثبتت كارثية.\n\nجاء الضربة النهائية عام 1922، عندما أدت حرب الاستقلال التركية بقيادة مصطفى كمال أتاتورك إلى إلغاء السلطنة وتأسيس جمهورية تركيا. بينما ذهبت الإمبراطورية، إرثها يستمر في التأثير على العالم الحديث بطرق لا تحصى.',
      keyFigures: [
        'Osman I (Founder)',
        'Mehmed II (The Conqueror)',
        'Suleiman the Magnificent',
        'Selim I (The Grim)'
      ],
      keyFiguresAr: [
        'عثمان الأول (المؤسس)',
        'محمد الثاني (الفاتح)',
        'سليمان القانوني',
        'سليم الأول (القاطع)'
      ],
      historicalContext: 'The Ottoman Empire emerged during a period of great change in the Islamic world, as the Abbasid Caliphate was declining and new powers were emerging in Anatolia and the Balkans.',
      historicalContextAr: 'ظهرت الإمبراطورية العثمانية خلال فترة تغيير كبير في العالم الإسلامي، حيث كانت الخلافة العباسية في تراجع وقوى جديدة كانت تظهر في الأناضول والبلقان.',
      lessons: [
        'Importance of tolerance in governing diverse populations',
        'Balance between military power and cultural achievement',
        'Adaptability and resilience of political systems',
        'Legacy of empire and its impact on modern states'
      ],
      lessonsAr: [
        'أهمية التسامح في حكم السكان المتنوعين',
        'التوازن بين القوة العسكرية والإنجاز الثقافي',
        'القدرة على التكيف والمرونة للأنظمة السياسية',
        'إرث الإمبراطورية وتأثيرها على الدول الحديثة'
      ],
      modernRelevance: 'The Ottoman Empire\'s approach to governance, particularly its system of religious tolerance and cultural diversity, offers valuable lessons for modern multicultural societies and international relations.',
      modernRelevanceAr: 'نهج الإمبراطورية العثمانية في الحكم، خاصة نظام التسامح الديني والتنوع الثقافي، يقدم دروساً قيمة للمجتمعات متعددة الثقافات والعلاقات الدولية الحديثة.',
      relatedEvents: [
        'Fall of Constantinople (1453)',
        'Battle of Lepanto (1571)',
        'Siege of Vienna (1683)',
        'Tanzimat reforms (1839-1876)'
      ],
      relatedEventsAr: [
        'سقوط القسطنطينية (1453)',
        'معركة ليبانتو (1571)',
        'حصار فيينا (1683)',
        'إصلاحات التنظيمات (1839-1876)'
      ],
      sources: [
        'Ottoman chronicles and official documents',
        'European diplomatic reports',
        'Archaeological evidence',
        'Modern historical scholarship'
      ],
      sourcesAr: [
        'السجلات العثمانية والوثائق الرسمية',
        'التقارير الدبلوماسية الأوروبية',
        'الأدلة الأثرية',
        'العلوم التاريخية الحديثة'
      ]
    }
  }
  ,
  india: {
    0: {
      title: 'Mughal Empire Legacy',
      titleAr: 'إرث الإمبراطورية المغولية',
      country: 'India',
      countryAr: 'الهند',
      period: '1526-1857',
      periodAr: '1526-1857',
      category: 'Civilization & Culture',
      categoryAr: 'الحضارة والثقافة',
      summary: 'A golden age of Islamic art, architecture, administration, and cultural synthesis in South Asia.',
      summaryAr: 'عصر ذهبي للفن والعمارة والإدارة والتركيب الثقافي في جنوب آسيا.',
      fullStory: 'The Mughals built monumental architecture, refined administration, and fostered Persianate culture blended with Indian traditions.',
      fullStoryAr: 'شيد المغول عمارة مهيبة وأرسوا إدارة رصينة ورعوا ثقافة فارسية ممتزجة بالتقاليد الهندية.',
      keyFigures: ['Akbar', 'Shah Jahan', 'Aurangzeb'],
      keyFiguresAr: ['أكبر', 'شاه جهان', 'أورنجزيب'],
      historicalContext: 'Emergence after Delhi Sultanate; peak of Indo-Islamic civilization.',
      historicalContextAr: 'الظهور بعد سلطنة دلهي؛ ذروة الحضارة الهندية الإسلامية.',
      lessons: ['Synthesis of cultures', 'Administrative innovation'],
      lessonsAr: ['تركيب الثقافات', 'الابتكار الإداري'],
      modernRelevance: 'Continuing influence on South Asian identity and arts.',
      modernRelevanceAr: 'تأثير مستمر على الهوية والفنون في جنوب آسيا.',
      relatedEvents: ['Construction of Taj Mahal'],
      relatedEventsAr: ['بناء تاج محل'],
      sources: ['Court chronicles', 'Architectural studies'],
      sourcesAr: ['السجلات البلاطية', 'دراسات معمارية']
    },
    1: {
      title: 'Sufi Traditions of the Subcontinent',
      titleAr: 'التقاليد الصوفية في شبه القارة',
      country: 'India',
      countryAr: 'الهند',
      period: 'Medieval to Modern',
      periodAr: 'من العصور الوسطى إلى الحديثة',
      category: 'Spiritual Culture',
      categoryAr: 'ثقافة روحية',
      summary: 'Khanqahs and scholars cultivated a heritage of spirituality, service, and learning.',
      summaryAr: 'الكُتّاب والخانقاه والعلماء صنعوا تراثاً من الروحانية والخدمة والعلم.',
      fullStory: 'From Delhi to the Deccan, Sufi orders shaped culture and education, welcoming diverse communities.',
      fullStoryAr: 'من دلهي إلى الدكن، شكّلت الطرق الصوفية الثقافة والتعليم، مرحبةً بمجتمعات متنوعة.',
      keyFigures: ['Sufi saints'],
      keyFiguresAr: ['أولياء صوفيون'],
      historicalContext: 'Interaction of Islamic and local cultures.',
      historicalContextAr: 'تفاعل الثقافات الإسلامية والمحلية.',
      lessons: ['Compassion and service'],
      lessonsAr: ['الرحمة والخدمة'],
      modernRelevance: 'Continues to inspire inter-communal harmony.',
      modernRelevanceAr: 'يُلهم الوئام بين المكونات حتى اليوم.',
      relatedEvents: ['Festivals and learning circles'],
      relatedEventsAr: ['مهرجانات وحِلَق علم'],
      sources: ['Biographies and archives'],
      sourcesAr: ['سير وأرشيفات']
    }
  },
  bangladesh: {
    0: {
      title: 'Language Movement and Identity',
      titleAr: 'حركة اللغة والهوية',
      country: 'Bangladesh',
      countryAr: 'بنغلاديش',
      period: '1952-1971',
      periodAr: '1952-1971',
      category: 'Cultural Struggle',
      categoryAr: 'نضال ثقافي',
      summary: 'The defense of Bengali language became a pillar of national identity with Islamic cultural presence.',
      summaryAr: 'الدفاع عن اللغة البنغالية أصبح ركناً للهوية الوطنية مع الحضور الثقافي الإسلامي.',
      fullStory: 'From the 1952 language protests to independence, culture and faith intertwined in public life.',
      fullStoryAr: 'من احتجاجات اللغة عام 1952 حتى الاستقلال، تداخلت الثقافة والإيمان في الحياة العامة.',
      keyFigures: ['Students of Dhaka', 'Cultural leaders'],
      keyFiguresAr: ['طلاب دكا', 'قادة ثقافيون'],
      historicalContext: 'Post-colonial tensions between East and West Pakistan.',
      historicalContextAr: 'توترات ما بعد الاستعمار بين باكستان الشرقية والغربية.',
      lessons: ['Language as dignity', 'Cultural rights'],
      lessonsAr: ['اللغة ككرامة', 'الحقوق الثقافية'],
      modernRelevance: 'International Mother Language Day born from this movement.',
      modernRelevanceAr: 'يوم اللغة الأم الدولي خرج من هذه الحركة.',
      relatedEvents: ['1971 Liberation War'],
      relatedEventsAr: ['حرب التحرير 1971'],
      sources: ['Historical archives', 'Oral histories'],
      sourcesAr: ['أرشيف تاريخي', 'تواريخ شفهية']
    },
    1: {
      title: 'Scholarly Contributions in Bangladesh',
      titleAr: 'المساهمات العلمية في بنغلاديش',
      country: 'Bangladesh',
      countryAr: 'بنغلاديش',
      period: '20th-21st Century',
      periodAr: 'القرن 20-21',
      category: 'Education & Society',
      categoryAr: 'التعليم والمجتمع',
      summary: 'Institutions expanded access to education and social welfare.',
      summaryAr: 'وسّعت المؤسسات الوصول إلى التعليم والرعاية الاجتماعية.',
      fullStory: 'Networks of schools and charities supported literacy, health, and community development.',
      fullStoryAr: 'دعمت شبكات المدارس والجمعيات محو الأمية والصحة وتنمية المجتمع.',
      keyFigures: ['Teachers and organizers'],
      keyFiguresAr: ['معلمون ومنظمون'],
      historicalContext: 'Rapid population growth and urbanization.',
      historicalContextAr: 'نمو سكاني سريع وتحضر.',
      lessons: ['Organize and serve'],
      lessonsAr: ['التنظيم والخدمة'],
      modernRelevance: 'Blueprint for local development.',
      modernRelevanceAr: 'مخطط للتنمية المحلية.',
      relatedEvents: ['Education drives'],
      relatedEventsAr: ['حملات تعليم'],
      sources: ['Institutional reports'],
      sourcesAr: ['تقارير مؤسساتية']
    }
  },
  nigeria: {
    0: {
      title: 'Sokoto Caliphate and Education',
      titleAr: 'خلافة سوكوتو والتعليم',
      country: 'Nigeria',
      countryAr: 'نيجيريا',
      period: '1804-1903',
      periodAr: '1804-1903',
      category: 'Reform & Governance',
      categoryAr: 'الإصلاح والحكم',
      summary: 'A reformist state that prioritized justice and mass education in West Africa.',
      summaryAr: 'دولة إصلاحية أعطت الأولوية للعدل والتعليم الجماهيري في غرب إفريقيا.',
      fullStory: 'Usman dan Fodio and successors built schools and courts grounded in Islamic law.',
      fullStoryAr: 'بنى عثمان دان فوديو وخلفاؤه مدارس ومحاكم مرتكزة على الشريعة.',
      keyFigures: ['Usman dan Fodio', 'Muhammad Bello'],
      keyFiguresAr: ['عثمان دان فوديو', 'محمد بيلو'],
      historicalContext: 'Fragmented polities unified under reformist leadership.',
      historicalContextAr: 'كيانات متفرقة توحدت تحت قيادة إصلاحية.',
      lessons: ['Justice-centered governance', 'Spread of literacy'],
      lessonsAr: ['حكم قائم على العدل', 'نشر المعرفة'],
      modernRelevance: 'Legacy in contemporary northern Nigeria.',
      modernRelevanceAr: 'إرث في شمال نيجيريا المعاصر.',
      relatedEvents: ['Jihad of 1804'],
      relatedEventsAr: ['جهاد 1804'],
      sources: ['Manuscripts', 'Colonial records'],
      sourcesAr: ['مخطوطات', 'سجلات استعمارية']
    },
    1: {
      title: 'Modern Challenges and Resilience',
      titleAr: 'التحديات الحديثة والصمود',
      country: 'Nigeria',
      countryAr: 'نيجيريا',
      period: 'Late 20th - 21st Century',
      periodAr: 'أواخر القرن 20 - القرن 21',
      category: 'Society & Education',
      categoryAr: 'المجتمع والتعليم',
      summary: 'Muslim communities invested in education and welfare to address challenges.',
      summaryAr: 'استثمرت المجتمعات المسلمة في التعليم والرعاية لمواجهة التحديات.',
      fullStory: 'Institutions and leaders promoted schools and services to strengthen cohesion.',
      fullStoryAr: 'روّجت المؤسسات والقادة للمدارس والخدمات لتعزيز التماسك.',
      keyFigures: ['Educators and leaders'],
      keyFiguresAr: ['مربون وقادة'],
      historicalContext: 'Demographic and regional dynamics.',
      historicalContextAr: 'ديناميات ديموغرافية وإقليمية.',
      lessons: ['Education and justice'],
      lessonsAr: ['التعليم والعدل'],
      modernRelevance: 'Pathways to stability and growth.',
      modernRelevanceAr: 'مسارات للاستقرار والنمو.',
      relatedEvents: ['Community campaigns'],
      relatedEventsAr: ['حملات مجتمعية'],
      sources: ['NGO and media reports'],
      sourcesAr: ['تقارير منظمات وإعلام']
    }
  },
  egypt: {
    0: {
      title: 'Al-Azhar and Reform',
      titleAr: 'الأزهر والإصلاح',
      country: 'Egypt',
      countryAr: 'مصر',
      period: '970 - Present',
      periodAr: '970 - حتى اليوم',
      category: 'Scholarly Tradition',
      categoryAr: 'التقليد العلمي',
      summary: 'Al-Azhar’s thousand-year tradition balancing continuity and reform.',
      summaryAr: 'تقاليد ألف عام من التوازن بين الثبات والإصلاح.',
      fullStory: 'From classical curricula to modern faculties, Al-Azhar shaped global Sunni scholarship.',
      fullStoryAr: 'من المناهج الكلاسيكية إلى الكليات الحديثة، صاغ الأزهر العلم السني عالمياً.',
      keyFigures: ['Al-Azhar Sheikhs'],
      keyFiguresAr: ['شيوخ الأزهر'],
      historicalContext: 'Cairo as a hub of learning in Islamic world.',
      historicalContextAr: 'القاهرة كمركز للعلم في العالم الإسلامي.',
      lessons: ['Balance and renewal'],
      lessonsAr: ['التوازن والتجديد'],
      modernRelevance: 'Global influence on curricula and fatwa.',
      modernRelevanceAr: 'تأثير عالمي على المناهج والفتوى.',
      relatedEvents: ['Modern reforms'],
      relatedEventsAr: ['إصلاحات حديثة'],
      sources: ['Institutional archives'],
      sourcesAr: ['أرشيف المؤسسة']
    },
    1: {
      title: 'Islamic Reform Movement',
      titleAr: 'حركة الإصلاح الإسلامي',
      country: 'Egypt',
      countryAr: 'مصر',
      period: 'Late 19th - 20th Century',
      periodAr: 'أواخر القرن 19 - القرن 20',
      category: 'Renewal & Thought',
      categoryAr: 'التجديد والفكر',
      summary: 'A wave of reform renewed curricula, institutions, and public discourse.',
      summaryAr: 'موجة إصلاح جدّدت المناهج والمؤسسات والخطاب العام.',
      fullStory: 'Reformers balanced tradition and reason, emphasizing education, social service, and ethics.',
      fullStoryAr: 'وازن المصلحون بين التقليد والعقل، مؤكدين التعليم والخدمة الاجتماعية والأخلاق.',
      keyFigures: ['Muhammad Abduh', 'Rashid Rida'],
      keyFiguresAr: ['محمد عبده', 'رشيد رضا'],
      historicalContext: 'Colonial pressures and modernization.',
      historicalContextAr: 'ضغوط استعمارية وحداثة.',
      lessons: ['Renew with principles'],
      lessonsAr: ['جدّد مع المبادئ'],
      modernRelevance: 'Framework for contemporary renewal.',
      modernRelevanceAr: 'إطار للتجديد المعاصر.',
      relatedEvents: ['Curriculum reforms'],
      relatedEventsAr: ['إصلاحات مناهج'],
      sources: ['Essays and journals'],
      sourcesAr: ['مقالات ومجلات']
    }
  },
  iran: {
    0: {
      title: 'Islamic Revolution 1979',
      titleAr: 'الثورة الإسلامية 1979',
      country: 'Iran',
      countryAr: 'إيران',
      period: '1979',
      periodAr: '1979',
      category: 'Political Transformation',
      categoryAr: 'تحول سياسي',
      summary: 'A seismic shift in Iran’s political and religious landscape with regional reverberations.',
      summaryAr: 'تحول جذري في المشهد السياسي والديني في إيران مع ارتدادات إقليمية.',
      fullStory: 'Mass mobilization led to overthrow of monarchy and establishment of Islamic Republic.',
      fullStoryAr: 'أدت التعبئة الشعبية إلى إسقاط الملكية وتأسيس الجمهورية الإسلامية.',
      keyFigures: ['Ruhollah Khomeini'],
      keyFiguresAr: ['روح الله الخميني'],
      historicalContext: 'Cold War, oil politics, and social discontent.',
      historicalContextAr: 'الحرب الباردة وسياسة النفط والسخط الاجتماعي.',
      lessons: ['Power of mobilization', 'Role of ideology'],
      lessonsAr: ['قوة التعبئة', 'دور الأيديولوجيا'],
      modernRelevance: 'Continues to shape regional politics.',
      modernRelevanceAr: 'ما زال يشكل السياسة الإقليمية.',
      relatedEvents: ['Referendum and constitution'],
      relatedEventsAr: ['الاستفتاء والدستور'],
      sources: ['Memoirs, analyses'],
      sourcesAr: ['مذكرات، تحليلات']
    },
    1: {
      title: 'Sufi Poetry Tradition',
      titleAr: 'تقليد الشعر الصوفي',
      country: 'Iran',
      countryAr: 'إيران',
      period: 'Classical to Modern',
      periodAr: 'كلاسيكي إلى حديث',
      category: 'Culture & Spirituality',
      categoryAr: 'الثقافة والروحانية',
      summary: 'Persian Sufi poetry shaped spirituality across centuries.',
      summaryAr: 'الشعر الصوفي الفارسي شكّل الروحانية عبر القرون.',
      fullStory: 'Rumi, Hafez, and others expressed love, ethics, and presence, guiding hearts and minds.',
      fullStoryAr: 'عبّر الرومي وحافظ وغيرهما عن المحبة والأخلاق والحضور، موجّهين القلوب والعقول.',
      keyFigures: ['Rumi', 'Hafez'],
      keyFiguresAr: ['الرومي', 'حافظ'],
      historicalContext: 'Courts, khanqahs, and learning circles.',
      historicalContextAr: 'القصور والخانقاه وحِلَق العلم.',
      lessons: ['Love and wisdom'],
      lessonsAr: ['المحبة والحكمة'],
      modernRelevance: 'Poetry continues to inspire global readers.',
      modernRelevanceAr: 'لا يزال الشعر يلهم القرّاء عالمياً.',
      relatedEvents: ['Public readings and studies'],
      relatedEventsAr: ['قراءات عامة ودراسات'],
      sources: ['Poetry collections'],
      sourcesAr: ['مجاميع شعرية']
    }
  },
  'saudi-arabia': {
    0: {
      title: 'Birthplace of Islam',
      titleAr: 'مهد الإسلام',
      country: 'Saudi Arabia',
      countryAr: 'المملكة العربية السعودية',
      period: '610 CE - Present',
      periodAr: '610م - حتى اليوم',
      category: 'Sacred History',
      categoryAr: 'التاريخ المقدس',
      summary: 'From revelation to modern stewardship of the Two Holy Mosques.',
      summaryAr: 'من الوحي إلى الرعاية الحديثة للحرمين الشريفين.',
      fullStory: 'Revelation to Prophet Muhammad in Mecca, migration to Medina, and contemporary custodianship.',
      fullStoryAr: 'الوحي للنبي محمد في مكة، والهجرة إلى المدينة، والرعاية الحديثة.',
      keyFigures: ['Prophet Muhammad (PBUH)', 'Rashidun Caliphs'],
      keyFiguresAr: ['النبي محمد ﷺ', 'الخلفاء الراشدون'],
      historicalContext: 'Cradle of Islam and global pilgrimage center.',
      historicalContextAr: 'مهد الإسلام ومركز الحج العالمي.',
      lessons: ['Faith, unity, and service'],
      lessonsAr: ['الإيمان والوحدة والخدمة'],
      modernRelevance: 'Hajj, Umrah, and global Muslim ties.',
      modernRelevanceAr: 'الحج والعمرة وروابط المسلمين عالمياً.',
      relatedEvents: ['Hijra 622 CE', 'Conquest of Mecca 630 CE'],
      relatedEventsAr: ['الهجرة 622م', 'فتح مكة 630م'],
      sources: ['Sirah literature', 'Hadith collections'],
      sourcesAr: ['السيرة النبوية', 'كتب الحديث']
    },
    1: {
      title: 'The Two Holy Mosques Expansion',
      titleAr: 'توسعة الحرمين الشريفين',
      country: 'Saudi Arabia',
      countryAr: 'المملكة العربية السعودية',
      period: '1955 - Present',
      periodAr: '1955م - حتى اليوم',
      category: 'Sacred Architecture',
      categoryAr: 'العمارة المقدسة',
      summary: 'The remarkable expansion of the Grand Mosque in Mecca and the Prophet\'s Mosque in Medina to accommodate millions of pilgrims.',
      summaryAr: 'التوسعة الرائعة للمسجد الحرام في مكة والمسجد النبوي في المدينة لاستيعاب ملايين الحجاج.',
      fullStory: 'Since the establishment of modern Saudi Arabia, successive rulers have undertaken massive expansion projects of the Two Holy Mosques. These projects represent the largest construction efforts in Islamic history, combining traditional Islamic architecture with modern engineering.\n\nThe Grand Mosque expansions began under King Abdul Aziz in 1955 and continued through multiple phases, culminating in the current expansion under King Salman, which can accommodate over 2.5 million worshippers. The projects have preserved the sanctity of the sites while incorporating modern amenities like air conditioning, advanced crowd management systems, and accessibility features.\n\nSimilarly, the Prophet\'s Mosque in Medina has undergone several expansions, with the most recent phase featuring retractable umbrellas and marble courtyards. These expansions reflect the Kingdom\'s commitment to serving the global Muslim community and facilitating the Hajj and Umrah pilgrimages.\n\nThe projects employed Islamic architectural principles while utilizing cutting-edge technology, creating spaces that honor tradition while meeting contemporary needs. The expansions have enabled millions more Muslims to perform their religious obligations in comfort and safety.',
      fullStoryAr: 'منذ تأسيس المملكة العربية السعودية الحديثة، قام الحكام المتعاقبون بمشاريع توسعة ضخمة للحرمين الشريفين. تمثل هذه المشاريع أكبر جهود البناء في التاريخ الإسلامي، مدمجة العمارة الإسلامية التقليدية مع الهندسة الحديثة.\n\nبدأت توسعات المسجد الحرام في عهد الملك عبد العزيز عام 1955 واستمرت عبر مراحل متعددة، بلغت ذروتها في التوسعة الحالية في عهد الملك سلمان، والتي يمكنها استيعاب أكثر من 2.5 مليون مصلٍ. حافظت المشاريع على قدسية المواقع مع دمج وسائل الراحة الحديثة مثل تكييف الهواء وأنظمة إدارة الحشود المتقدمة وميزات الوصول.\n\nوبالمثل، خضع المسجد النبوي في المدينة لعدة توسعات، مع أحدث مرحلة تتميز بالمظلات القابلة للطي والأفنية الرخامية. تعكس هذه التوسعات التزام المملكة بخدمة المجتمع الإسلامي العالمي وتسهيل رحلات الحج والعمرة.\n\nوظفت المشاريع مبادئ العمارة الإسلامية مع استخدام التكنولوجيا المتطورة، مما خلق مساحات تكرم التقليد مع تلبية الاحتياجات المعاصرة. مكنت التوسعات ملايين أكثر من المسلمين من أداء واجباتهم الدينية بالراحة والأمان.',
      keyFigures: [
        'King Abdul Aziz (First expansion initiative)',
        'King Fahd (Major expansion architect)',
        'King Abdullah (Modernization efforts)',
        'King Salman (Current expansion oversight)'
      ],
      keyFiguresAr: [
        'الملك عبد العزيز (مبادرة التوسعة الأولى)',
        'الملك فهد (مهندس التوسعة الكبرى)',
        'الملك عبد الله (جهود التحديث)',
        'الملك سلمان (إشراف التوسعة الحالية)'
      ],
      historicalContext: 'The expansions coincided with the growth of global Muslim population and increased accessibility of air travel, leading to exponential growth in pilgrimage numbers requiring larger facilities.',
      historicalContextAr: 'تزامنت التوسعات مع نمو السكان المسلمين العالميين وزيادة إمكانية الوصول للسفر الجوي، مما أدى إلى نمو أعداد الحجاج بشكل هائل مما تطلب مرافق أكبر.',
      lessons: [
        'Balance tradition with modernization',
        'Service to the global Ummah',
        'Architecture as worship',
        'Planning for future generations'
      ],
      lessonsAr: [
        'التوازن بين التقليد والتحديث',
        'خدمة الأمة الإسلامية العالمية',
        'العمارة كعبادة',
        'التخطيط للأجيال القادمة'
      ],
      modernRelevance: 'The expansions demonstrate how Islamic heritage can be preserved while embracing modern technology and engineering solutions for contemporary challenges.',
      modernRelevanceAr: 'تُظهر التوسعات كيف يمكن الحفاظ على التراث الإسلامي مع احتضان التكنولوجيا الحديثة والحلول الهندسية للتحديات المعاصرة.',
      relatedEvents: [
        'First Saudi Expansion (1955-1973)',
        'King Fahd Expansion (1982-1988)',
        'King Abdullah Expansion (2007-2015)',
        'King Salman Expansion (2015-ongoing)'
      ],
      relatedEventsAr: [
        'التوسعة السعودية الأولى (1955-1973)',
        'توسعة الملك فهد (1982-1988)',
        'توسعة الملك عبد الله (2007-2015)',
        'توسعة الملك سلمان (2015-مستمرة)'
      ],
      sources: [
        'Saudi Ministry of Hajj and Umrah records',
        'Architectural documentation',
        'Pilgrimage statistics',
        'Historical chronicles'
      ],
      sourcesAr: [
        'سجلات وزارة الحج والعمرة السعودية',
        'التوثيق المعماري',
        'إحصائيات الحج',
        'السجلات التاريخية'
      ]
    }
  },
  malaysia: {
    0: {
      title: 'Islamic Finance Growth',
      titleAr: 'نمو التمويل الإسلامي',
      country: 'Malaysia',
      countryAr: 'ماليزيا',
      period: '1980s - Present',
      periodAr: 'الثمانينيات - حتى اليوم',
      category: 'Economic Development',
      categoryAr: 'التنمية الاقتصادية',
      summary: 'Malaysia became a global hub for Islamic banking and finance.',
      summaryAr: 'أصبحت ماليزيا مركزاً عالمياً للمصرفية والتمويل الإسلامي.',
      fullStory: 'Regulatory frameworks, education, and innovation enabled rapid growth.',
      fullStoryAr: 'مكنت الأطر التنظيمية والتعليم والابتكار من النمو السريع.',
      keyFigures: ['Central Bank of Malaysia', 'Industry pioneers'],
      keyFiguresAr: ['البنك المركزي الماليزي', 'رواد الصناعة'],
      historicalContext: 'Modernization with Islamic values.',
      historicalContextAr: 'تحديث مع قيم إسلامية.',
      lessons: ['Align ethics with economics'],
      lessonsAr: ['مواءمة الأخلاق مع الاقتصاد'],
      modernRelevance: 'Standard-setting and global products.',
      modernRelevanceAr: 'وضع المعايير ومنتجات عالمية.',
      relatedEvents: ['Establishment of IIUM'],
      relatedEventsAr: ['تأسيس الجامعة الإسلامية الدولية ماليزيا'],
      sources: ['Industry reports'],
      sourcesAr: ['تقارير الصناعة']
    },
    1: {
      title: 'Multi-cultural Harmony in Malaysia',
      titleAr: 'الوئام متعدد الثقافات في ماليزيا',
      country: 'Malaysia',
      countryAr: 'ماليزيا',
      period: '20th-21st Century',
      periodAr: 'القرن 20-21',
      category: 'Society & Policy',
      categoryAr: 'المجتمع والسياسة',
      summary: 'Policies and community initiatives fostered harmony among diverse groups.',
      summaryAr: 'سياسات ومبادرات مجتمعية عزّزت الوئام بين المكونات المتنوعة.',
      fullStory: 'Education, dialogue, and fair policies helped build trust and cooperation.',
      fullStoryAr: 'ساعد التعليم والحوار والسياسات العادلة على بناء الثقة والتعاون.',
      keyFigures: ['Community leaders', 'Policy makers'],
      keyFiguresAr: ['قادة مجتمع', 'صنّاع سياسات'],
      historicalContext: 'Post-independence nation-building.',
      historicalContextAr: 'بناء الدولة بعد الاستقلال.',
      lessons: ['Dialogue, fairness'],
      lessonsAr: ['الحوار والعدالة'],
      modernRelevance: 'Model studied across the region.',
      modernRelevanceAr: 'نموذج يُدرس إقليمياً.',
      relatedEvents: ['Community programs'],
      relatedEventsAr: ['برامج مجتمعية'],
      sources: ['Government and NGO reports'],
      sourcesAr: ['تقارير حكومية ومنظمات']
    }
  },
  uk: {
    0: {
      title: 'Muslims in Modern Britain',
      titleAr: 'المسلمون في بريطانيا الحديثة',
      country: 'United Kingdom',
      countryAr: 'المملكة المتحدة',
      period: 'Post-1945',
      periodAr: 'بعد 1945',
      category: 'Migration & Identity',
      categoryAr: 'الهجرة والهوية',
      summary: 'Post-war migration created vibrant Muslim communities with deep contributions.',
      summaryAr: 'الهجرة ما بعد الحرب أنشأت مجتمعات مسلمة نابضة قدّمت مساهمات عميقة.',
      fullStory: 'From South Asian workers to second-generation leadership in culture and politics.',
      fullStoryAr: 'من العمال جنوب الآسيويين إلى قيادة الجيل الثاني في الثقافة والسياسة.',
      keyFigures: ['Community leaders', 'Artists and politicians'],
      keyFiguresAr: ['قادة مجتمع', 'فنانون وساسة'],
      historicalContext: 'Deindustrialization and multicultural policy shifts.',
      historicalContextAr: 'إزالة التصنيع وتحولات السياسات متعددة الثقافات.',
      lessons: ['Integration with confidence'],
      lessonsAr: ['اندماج بثقة'],
      modernRelevance: 'Muslim representation and policy influence.',
      modernRelevanceAr: 'تمثيل المسلمين وتأثير السياسات.',
      relatedEvents: ['Race Relations Acts'],
      relatedEventsAr: ['قوانين العلاقات العرقية'],
      sources: ['Sociological studies'],
      sourcesAr: ['دراسات سوسيولوجية']
    },
    1: {
      title: 'Muslim British Identity',
      titleAr: 'الهوية البريطانية المسلمة',
      country: 'United Kingdom',
      countryAr: 'المملكة المتحدة',
      period: 'Late 20th - 21st Century',
      periodAr: 'أواخر القرن 20 - القرن 21',
      category: 'Identity & Contribution',
      categoryAr: 'الهوية والمساهمة',
      summary: 'From migration to representation, British Muslims shaped culture, sports, and public life.',
      summaryAr: 'من الهجرة إلى التمثيل، شكّل المسلمون البريطانيون الثقافة والرياضة والحياة العامة.',
      fullStory: 'Generations built mosques, charities, and businesses, with growing presence in arts and politics.',
      fullStoryAr: 'بنت أجيال مساجد وجمعيات وأعمالاً، مع حضور متزايد في الفنون والسياسة.',
      keyFigures: ['Sadiq Khan', 'Mo Farah'],
      keyFiguresAr: ['صادق خان', 'محمد فرح'],
      historicalContext: 'Post-war migration and multicultural policies.',
      historicalContextAr: 'هجرة ما بعد الحرب وسياسات متعددة الثقافات.',
      lessons: ['Belonging through contribution'],
      lessonsAr: ['الانتماء عبر المساهمة'],
      modernRelevance: 'Inspires inclusive citizenship.',
      modernRelevanceAr: 'يلهم المواطنة الشاملة.',
      relatedEvents: ['Community festivals'],
      relatedEventsAr: ['مهرجانات مجتمعية'],
      sources: ['Community archives'],
      sourcesAr: ['أرشيف المجتمع']
    }
  },
  france: {
    0: {
      title: 'French Muslim Contributions',
      titleAr: 'مساهمات المسلمين الفرنسيين',
      country: 'France',
      countryAr: 'فرنسا',
      period: '20th-21st Century',
      periodAr: 'القرن 20-21',
      category: 'Culture & Society',
      categoryAr: 'الثقافة والمجتمع',
      summary: 'From sports to arts, Muslims shaped modern French life.',
      summaryAr: 'من الرياضة إلى الفنون، شكل المسلمون الحياة الفرنسية الحديثة.',
      fullStory: 'Generations of migrants built families, businesses, and cultural movements.',
      fullStoryAr: 'بنت أجيال من المهاجرين عائلات وأعمالاً وحركات ثقافية.',
      keyFigures: ['Zidane', 'Benzema'],
      keyFiguresAr: ['زيدان', 'بنزيما'],
      historicalContext: 'Postcolonial realities and integration.',
      historicalContextAr: 'حقائق ما بعد الاستعمار والاندماج.',
      lessons: ['Belonging and contribution'],
      lessonsAr: ['الانتماء والمساهمة'],
      modernRelevance: 'Ongoing debates on laïcité and inclusion.',
      modernRelevanceAr: 'نقاشات مستمرة حول العلمانية والشمول.',
      relatedEvents: ['Sporting triumphs'],
      relatedEventsAr: ['انتصارات رياضية'],
      sources: ['Cultural studies'],
      sourcesAr: ['دراسات ثقافية']
    },
    1: {
      title: 'Sports Achievements and Social Impact',
      titleAr: 'إنجازات رياضية وأثر اجتماعي',
      country: 'France',
      countryAr: 'فرنسا',
      period: '1990s-2020s',
      periodAr: 'التسعينيات-العشرينيات',
      category: 'Sports & Society',
      categoryAr: 'الرياضة والمجتمع',
      summary: 'Muslim athletes became symbols of excellence and inclusion in French society.',
      summaryAr: 'أصبح الرياضيون المسلمون رموزاً للتميز والشمول في المجتمع الفرنسي.',
      fullStory: 'From Zidane to Benzema, achievements on the field shaped narratives of identity and belonging.',
      fullStoryAr: 'من زيدان إلى بنزيما، شكّلت الإنجازات في الملاعب سرديات الهوية والانتماء.',
      keyFigures: ['Zinedine Zidane', 'Karim Benzema'],
      keyFiguresAr: ['زين الدين زيدان', 'كريم بنزيما'],
      historicalContext: 'Integration debates and multicultural realities.',
      historicalContextAr: 'نقاشات الاندماج وحقائق متعددة الثقافات.',
      lessons: ['Excellence builds bridges'],
      lessonsAr: ['التفوق يبني الجسور'],
      modernRelevance: 'Role models for youth across Europe.',
      modernRelevanceAr: 'قدوات للشباب في أوروبا.',
      relatedEvents: ['World Cup and UEFA events'],
      relatedEventsAr: ['كأس العالم وبطولات أوروبا'],
      sources: ['Sports archives'],
      sourcesAr: ['أرشيف رياضي']
    }
  },
  spain: {
    0: {
      title: 'Andalusian Heritage Revival',
      titleAr: 'إحياء التراث الأندلسي',
      country: 'Spain',
      countryAr: 'إسبانيا',
      period: '20th-21st Century',
      periodAr: 'القرن 20-21',
      category: 'Heritage & Identity',
      categoryAr: 'التراث والهوية',
      summary: 'Rediscovery of Al-Andalus history inspires modern Spanish Muslims.',
      summaryAr: 'إعادة اكتشاف تاريخ الأندلس يُلهم المسلمين الإسبان المعاصرين.',
      fullStory: 'Museums, festivals, and scholarship revived interest in Andalusian legacy.',
      fullStoryAr: 'أعادت المتاحف والمهرجانات والبحوث الاهتمام بالإرث الأندلسي.',
      keyFigures: ['Local historians', 'Community leaders'],
      keyFiguresAr: ['مؤرخون محليون', 'قادة مجتمع'],
      historicalContext: 'Tourism and cultural policy.',
      historicalContextAr: 'السياحة والسياسة الثقافية.',
      lessons: ['Pride in shared past'],
      lessonsAr: ['الاعتزاز بالماضي المشترك'],
      modernRelevance: 'Cultural bridges with Muslim world.',
      modernRelevanceAr: 'جسور ثقافية مع العالم الإسلامي.',
      relatedEvents: ['Granada cultural programs'],
      relatedEventsAr: ['برامج ثقافية في غرناطة'],
      sources: ['Cultural archives'],
      sourcesAr: ['أرشيف ثقافي']
    },
    1: {
      title: 'Modern Conversions and Cultural Rediscovery',
      titleAr: 'الاعتناقات الحديثة وإعادة اكتشاف الثقافة',
      country: 'Spain',
      countryAr: 'إسبانيا',
      period: 'Late 20th - 21st Century',
      periodAr: 'أواخر القرن 20 - القرن 21',
      category: 'Heritage & Identity',
      categoryAr: 'التراث والهوية',
      summary: 'New Muslims in Spain engaged heritage, language, and institutions to build community.',
      summaryAr: 'انخرط المسلمون الجدد في إسبانيا مع التراث واللغة والمؤسسات لبناء مجتمع.',
      fullStory: 'Programs and study circles revived interest in Andalusian heritage and contemporary practice.',
      fullStoryAr: 'أعادت البرامج والحلقات الدراسية الاهتمام بالتراث الأندلسي والممارسة المعاصرة.',
      keyFigures: ['Community organizations'],
      keyFiguresAr: ['منظمات المجتمع'],
      historicalContext: 'Tourism and cultural policy opened space for heritage projects.',
      historicalContextAr: 'فتحت السياحة والسياسات الثقافية مجالاً لمشاريع التراث.',
      lessons: ['Build on shared history'],
      lessonsAr: ['البناء على التاريخ المشترك'],
      modernRelevance: 'Strengthened bridges with Muslim world.',
      modernRelevanceAr: 'قوّى الجسور مع العالم الإسلامي.',
      relatedEvents: ['Municipal programs'],
      relatedEventsAr: ['برامج بلدية'],
      sources: ['Local archives'],
      sourcesAr: ['أرشيفات محلية']
    }
  },
  germany: {
    0: {
      title: 'Turkish-German Community',
      titleAr: 'المجتمع التركي الألماني',
      country: 'Germany',
      countryAr: 'ألمانيا',
      period: '1960s - Present',
      periodAr: 'الستينيات - حتى اليوم',
      category: 'Migration & Society',
      categoryAr: 'الهجرة والمجتمع',
      summary: 'Guest worker era created a lasting community shaping culture and economy.',
      summaryAr: 'عهد العمال الضيوف أنشأ مجتمعاً دائماً شكّل الثقافة والاقتصاد.',
      fullStory: 'From factories to parliament, Turkish-Germans rose in influence.',
      fullStoryAr: 'من المصانع إلى البرلمان، ازداد نفوذ الأتراك-الألمان.',
      keyFigures: ['Entrepreneurs', 'Politicians'],
      keyFiguresAr: ['رواد أعمال', 'ساسة'],
      historicalContext: 'Postwar rebuilding and labor agreements.',
      historicalContextAr: 'إعادة بناء ما بعد الحرب واتفاقيات العمل.',
      lessons: ['Integration, opportunity, contribution'],
      lessonsAr: ['اندماج، فرصة، مساهمة'],
      modernRelevance: 'Diversity in modern Germany.',
      modernRelevanceAr: 'التنوع في ألمانيا الحديثة.',
      relatedEvents: ['Labor treaties 1961'],
      relatedEventsAr: ['اتفاقيات العمال 1961'],
      sources: ['Sociology and history works'],
      sourcesAr: ['أعمال سوسيولوجية وتاريخية']
    },
    1: {
      title: 'Integration Challenges and Contributions',
      titleAr: 'تحديات الاندماج والمساهمات',
      country: 'Germany',
      countryAr: 'ألمانيا',
      period: '1960s - 21st Century',
      periodAr: 'الستينيات - القرن 21',
      category: 'Migration & Society',
      categoryAr: 'الهجرة والمجتمع',
      summary: 'Turkish-German communities built enduring contributions in economy and culture.',
      summaryAr: 'بنت المجتمعات التركية الألمانية مساهمات راسخة في الاقتصاد والثقافة.',
      fullStory: 'From guest workers to professionals, the story reflects resilience and service.',
      fullStoryAr: 'من عمال ضيوف إلى محترفين، تعكس القصة الصمود والخدمة.',
      keyFigures: ['Entrepreneurs', 'Politicians'],
      keyFiguresAr: ['رواد أعمال', 'ساسة'],
      historicalContext: 'Labor treaties and integration policies.',
      historicalContextAr: 'اتفاقيات العمال وسياسات الاندماج.',
      lessons: ['Opportunity through effort'],
      lessonsAr: ['الفرصة عبر الجهد'],
      modernRelevance: 'Template for European integration debates.',
      modernRelevanceAr: 'قالب لنقاشات الاندماج الأوروبية.',
      relatedEvents: ['Labor agreements'],
      relatedEventsAr: ['اتفاقيات العمال'],
      sources: ['Sociological research'],
      sourcesAr: ['بحوث سوسيولوجية']
    }
  },
  canada: {
    0: {
      title: 'Multicultural Success',
      titleAr: 'نجاح متعدد الثقافات',
      country: 'Canada',
      countryAr: 'كندا',
      period: '1971 - Present',
      periodAr: '1971 - حتى اليوم',
      category: 'Policy & Society',
      categoryAr: 'السياسة والمجتمع',
      summary: 'Canada’s multiculturalism policy enabled Muslim communities to thrive.',
      summaryAr: 'مكّنت سياسة التعددية الثقافية في كندا المجتمعات المسلمة من الازدهار.',
      fullStory: 'Immigration, education, and inclusion built vibrant communities.',
      fullStoryAr: 'الهجرة والتعليم والشمول بنت مجتمعات نابضة.',
      keyFigures: ['Community organizations'],
      keyFiguresAr: ['منظمات المجتمع'],
      historicalContext: 'Policy shift in 1971 towards multiculturalism.',
      historicalContextAr: 'تحول سياسي عام 1971 نحو التعددية الثقافية.',
      lessons: ['Inclusion delivers prosperity'],
      lessonsAr: ['الشمول يجلب الازدهار'],
      modernRelevance: 'Model studied globally.',
      modernRelevanceAr: 'نموذج يُدرس عالمياً.',
      relatedEvents: ['Charter of Rights and Freedoms'],
      relatedEventsAr: ['الميثاق الكندي للحقوق والحريات'],
      sources: ['Government reports'],
      sourcesAr: ['تقارير حكومية']
    },
    1: {
      title: 'Muslim Canadian Identity and Contribution',
      titleAr: 'الهوية والمساهمة للمسلمين الكنديين',
      country: 'Canada',
      countryAr: 'كندا',
      period: '1971 - Present',
      periodAr: '1971 - حتى اليوم',
      category: 'Policy & Society',
      categoryAr: 'السياسة والمجتمع',
      summary: 'Multiculturalism policy enabled representation, service, and leadership.',
      summaryAr: 'سياسة التعددية الثقافية مكّنت التمثيل والخدمة والقيادة.',
      fullStory: 'Community organizations, schools, and public offices reflect a thriving presence.',
      fullStoryAr: 'تعكس المنظمات والمدارس والمناصب العامة حضوراً مزدهراً.',
      keyFigures: ['Ahmed Hussen', 'Omar Alghabra'],
      keyFiguresAr: ['أحمد حسين', 'عمر الغبرة'],
      historicalContext: 'Rights frameworks and immigration.',
      historicalContextAr: 'أطر الحقوق والهجرة.',
      lessons: ['Inclusion enriches society'],
      lessonsAr: ['الشمول يغني المجتمع'],
      modernRelevance: 'Model referenced internationally.',
      modernRelevanceAr: 'نموذج يُشار إليه دولياً.',
      relatedEvents: ['Charter of Rights and Freedoms'],
      relatedEventsAr: ['الميثاق الكندي للحقوق والحريات'],
      sources: ['Government reports'],
      sourcesAr: ['تقارير حكومية']
    }
  }
};

export default function StoryDetail() {
  const { countryId, storyIndex } = useParams<{ countryId: string; storyIndex: string }>();
  const { i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';
  const location = useLocation();
  const fallbackFromList = (location.state as any)?.fromList as
    | {
        title?: string;
        titleAr?: string;
        countryId?: string;
        countryName?: string;
        countryNameAr?: string;
        index?: number;
      }
    | undefined;
  
  const story = countryId && storyIndex ? 
    storyData[countryId]?.[parseInt(storyIndex)] : null;

  // توجيه بديل في حال عدم وجود القصة
  // توليد نص قصة كامل ديناميكياً عند غياب البيانات التفصيلية
  const generatedStory: StoryData | null = (!story && fallbackFromList && countryId)
    ? {
        title: fallbackFromList.title ?? 'Inspiring Story',
        titleAr: fallbackFromList.titleAr ?? 'قصة ملهمة',
        country: fallbackFromList.countryName ?? countryId,
        countryAr: fallbackFromList.countryNameAr ?? countryId,
        period: '—',
        periodAr: '—',
        category: 'Heritage & Society',
        categoryAr: 'التراث والمجتمع',
        summary: 'A significant chapter that reflects faith, resilience, and contribution to society.',
        summaryAr: 'فصل مهم يعكس الإيمان والصمود والمساهمة في المجتمع.',
        fullStory: 'This narrative highlights moments of growth and transformation driven by values of knowledge, justice, and compassion. It reveals how communities overcame challenges through unity and vision.',
        fullStoryAr: 'تُبرز هذه الحكاية لحظات نمو وتحول قادتها قيم العلم والعدل والرحمة. وتكشف كيف تغلبت المجتمعات على التحديات بالوحدة والرؤية.',
        keyFigures: ['Community leaders', 'Scholars'],
        keyFiguresAr: ['قادة مجتمع', 'علماء'],
        historicalContext: 'Set against social and cultural change.',
        historicalContextAr: 'ضمن سياق التغيير الاجتماعي والثقافي.',
        lessons: ['Unity with purpose', 'Value of education', 'Service builds legacy'],
        lessonsAr: ['الوحدة ذات الهدف', 'قيمة التعليم', 'الخدمة تصنع الإرث'],
        modernRelevance: 'Provides insights for today’s efforts in inclusion and development.',
        modernRelevanceAr: 'يوفر رؤى لجهود اليوم في الشمول والتنمية.',
        relatedEvents: ['Community initiatives'],
        relatedEventsAr: ['مبادرات مجتمعية'],
        sources: ['Oral histories', 'Community archives'],
        sourcesAr: ['تواريخ شفهية', 'أرشيف المجتمع']
      }
    : null;

  const finalStory = story ?? generatedStory;

  if (!finalStory) return null;

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
              {isArabic ? finalStory.titleAr : finalStory.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
              {isArabic ? finalStory.summaryAr : finalStory.summary}
            </p>
            <div className="flex justify-center gap-3 flex-wrap">
              <Badge variant="secondary" className="flex items-center gap-1">
                <MapPin className="h-3 w-3" />
                {isArabic ? finalStory.countryAr : finalStory.country}
              </Badge>
              <Badge variant="outline" className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                {isArabic ? finalStory.periodAr : finalStory.period}
              </Badge>
              <Badge variant="outline">
                {isArabic ? finalStory.categoryAr : finalStory.category}
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
              {isArabic ? finalStory.historicalContextAr : finalStory.historicalContext}
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
              {(isArabic ? finalStory.fullStoryAr : finalStory.fullStory).split('\n\n').map((paragraph, index) => (
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
              {(isArabic ? finalStory.keyFiguresAr : finalStory.keyFigures).map((figure, index) => (
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
                {(isArabic ? finalStory.lessonsAr : finalStory.lessons).map((lesson, index) => (
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
                {(isArabic ? finalStory.relatedEventsAr : finalStory.relatedEvents).map((event, index) => (
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
              {isArabic ? finalStory.modernRelevanceAr : finalStory.modernRelevance}
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
              {(isArabic ? finalStory.sourcesAr : finalStory.sources).map((source, index) => (
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

