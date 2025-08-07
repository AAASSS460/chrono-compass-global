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

