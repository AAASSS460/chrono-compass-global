import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { personalityData } from '@/data/personalities';
import { storyData } from '@/data/stories';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Users, Star, BookOpen, ArrowRight, ExternalLink } from 'lucide-react';
import { Country } from '@/types';

const countries: Country[] = [
  {
    id: 'indonesia',
    name: 'Indonesia',
    nameAr: 'إندونيسيا',
    population: '210 million',
    percentage: '87%',
    flag: '🇮🇩',
    description: 'The largest Muslim country by population, known for its peaceful spread of Islam through trade and Sufi missionaries.',
    descriptionAr: 'أكبر دولة إسلامية من حيث عدد السكان، تشتهر بانتشار الإسلام السلمي عبر التجارة والدعاة الصوفيين.',
    descriptionFr: 'Le plus grand pays musulman par sa population, connu pour la propagation pacifique de l\'Islam par le commerce et les missionnaires soufis.',
    descriptionEs: 'El país musulmán más grande por población, conocido por la difusión pacífica del Islam a través del comercio y los misioneros sufíes.',
    notablePersonalities: ['Wali Songo (Nine Saints)', 'Sheikh Ahmad Dahlan', 'Muhammad Iqdam Khalid'],
    notablePersonalitiesAr: ['الأولياء التسعة', 'الشيخ أحمد دحلان', 'محمد إقدام خالد'],
    notablePersonalitiesFr: ['Wali Songo (Neuf Saints)', 'Cheikh Ahmad Dahlan', 'Muhammad Iqdam Khalid'],
    notablePersonalitiesEs: ['Wali Songo (Nueve Santos)', 'Jeque Ahmad Dahlan', 'Muhammad Iqdam Khalid'],
    stories: ['Peaceful conversion through trade', 'The Nine Saints of Java', 'Modern Islamic revival'],
    storiesAr: ['الاعتناق السلمي عبر التجارة', 'الأولياء التسعة في جاوة', 'النهضة الإسلامية الحديثة'],
    storiesFr: ['Conversion pacifique par le commerce', 'Les Neuf Saints de Java', 'Renouveau islamique moderne'],
    storiesEs: ['Conversión pacífica a través del comercio', 'Los Nueve Santos de Java', 'Renacimiento islámico moderno'],
    gradient: 'from-green-500 to-emerald-600'
  },
  {
    id: 'pakistan',
    name: 'Pakistan',
    nameAr: 'باكستان',
    population: '215 million',
    percentage: '97%',
    flag: '🇵🇰',
    description: 'Created as a homeland for Muslims, Pakistan is the second-largest Muslim country by population.',
    descriptionAr: 'تأسست كوطن للمسلمين، باكستان هي ثاني أكبر دولة إسلامية من حيث عدد السكان.',
    descriptionFr: 'Créé comme patrie pour les musulmans, le Pakistan est le deuxième plus grand pays musulman par sa population.',
    descriptionEs: 'Creado como patria para los musulmanes, Pakistán es el segundo país musulmán más grande por población.',
    notablePersonalities: ['Abul A\'la Maududi', 'Allama Iqbal', 'Shah Ahmad Shafi'],
    notablePersonalitiesAr: ['أبو الأعلى المودودي', 'علامة إقبال', 'شاه أحمد شفيع'],
    notablePersonalitiesFr: ['Abul A\'la Maududi', 'Allama Iqbal', 'Shah Ahmad Shafi'],
    notablePersonalitiesEs: ['Abul A\'la Maududi', 'Allama Iqbal', 'Shah Ahmad Shafi'],
    stories: ['Partition and independence', 'Islamic scholarship', 'Unity movements'],
    storiesAr: ['التقسيم والاستقلال', 'العلوم الإسلامية', 'حركات الوحدة'],
    storiesFr: ['Partition et indépendance', 'érudition islamique', 'Mouvements d\'unité'],
    storiesEs: ['Partición e independencia', 'erudición islámica', 'Movimientos de unidad'],
    gradient: 'from-green-600 to-green-700'
  },
  {
    id: 'india',
    name: 'India',
    nameAr: 'الهند',
    population: '200-230 million',
    percentage: '14-18%',
    flag: '🇮🇳',
    description: 'Home to the second-largest Muslim population globally, with a rich Islamic heritage and diverse traditions.',
    descriptionAr: 'موطن ثاني أكبر تجمع للمسلمين في العالم، مع تراث إسلامي غني وتقاليد متنوعة.',
    descriptionFr: 'Abritant la deuxième plus grande population musulmane au monde, avec un riche héritage islamique et des traditions diverses.',
    descriptionEs: 'Hogar de la segunda población musulmana más grande a nivel mundial, con una rica herencia islámica y diversas tradiciones.',
    notablePersonalities: ['Abu al-Hasan Ali al-Nadwi', 'Sheikh Abu Bakr Ahmad Musliyar', 'Maulana Abul Kalam Azad'],
    notablePersonalitiesAr: ['أبو الحسن علي الندوي', 'الشيخ أبو بكر أحمد مسليار', 'مولانا أبو الكلام آزاد'],
    notablePersonalitiesFr: ['Abu al-Hasan Ali al-Nadwi', 'Cheikh Abou Bakr Ahmad Musliyar', 'Maulana Abul Kalam Azad'],
    notablePersonalitiesEs: ['Abu al-Hasan Ali al-Nadwi', 'Jeque Abu Bakr Ahmad Musliyar', 'Maulana Abul Kalam Azad'],
    stories: ['Mughal Empire legacy', 'Sufi traditions', 'Modern challenges and resilience'],
    storiesAr: ['إرث الإمبراطورية المغولية', 'التقاليد الصوفية', 'التحديات الحديثة والصمود'],
    storiesFr: ['Héritage de l\'Empire moghol', 'Traditions soufies', 'Défis modernes et résilience'],
    storiesEs: ['Legado del Imperio mogol', 'Tradiciones sufíes', 'Desafíos modernos y resiliencia'],
    gradient: 'from-orange-500 to-red-500'
  },
  {
    id: 'bangladesh',
    name: 'Bangladesh',
    nameAr: 'بنغلاديش',
    population: '150 million',
    percentage: '91%',
    flag: '🇧🇩',
    description: 'Fourth-largest Muslim population globally, known for its rich Bengali Islamic culture and traditions.',
    descriptionAr: 'رابع أكبر تجمع للمسلمين في العالم، تشتهر بثقافتها الإسلامية البنغالية الغنية وتقاليدها.',
    descriptionFr: 'Quatrième plus grande population musulmane au monde, connue pour sa riche culture et ses traditions islamiques bengalis.',
    descriptionEs: 'Cuarta población musulmana más grande a nivel mundial, conocida por su rica cultura y tradiciones islámicas bengalíes.',
    notablePersonalities: ['Shah Ahmad Shafi', 'Muhammad Abdul Malik', 'Taj al-Islam'],
    notablePersonalitiesAr: ['شاه أحمد شفيع', 'محمد عبد المالك', 'تاج الإسلام'],
    notablePersonalitiesFr: ['Shah Ahmad Shafi', 'Muhammad Abdul Malik', 'Taj al-Islam'],
    notablePersonalitiesEs: ['Shah Ahmad Shafi', 'Muhammad Abdul Malik', 'Taj al-Islam'],
    stories: ['Bengal Islamic heritage', 'Language movement', 'Scholarly contributions'],
    storiesAr: ['التراث الإسلامي البنغالي', 'حركة اللغة', 'المساهمات العلمية'],
    storiesFr: ['Patrimoine islamique du Bengale', 'Mouvement linguistique', 'Contributions scientifiques'],
    storiesEs: ['Patrimonio islámico de Bengala', 'Movimiento lingüístico', 'Contribuciones académicas'],
    gradient: 'from-green-500 to-blue-500'
  },
  {
    id: 'nigeria',
    name: 'Nigeria',
    nameAr: 'نيجيريا',
    population: '77-90 million',
    percentage: '53%',
    flag: '🇳🇬',
    description: 'The largest African country with Muslim population, showcasing Islamic traditions in West Africa.',
    descriptionAr: 'أكبر دولة إفريقية من حيث عدد السكان المسلمين، تعرض التقاليد الإسلامية في غرب إفريقيا.',
    descriptionFr: 'Le plus grand pays africain avec une population musulmane, présentant les traditions islamiques en Afrique de l\'Ouest.',
    descriptionEs: 'El país africano más grande con población musulmana, mostrando las tradiciones islámicas en África Occidental.',
    notablePersonalities: ['Sheikh Ibrahim Zakzaky', 'Ahmad Abubakar Gumi', 'Usman dan Fodio'],
    notablePersonalitiesAr: ['الشيخ إبراهيم زكزكي', 'أحمد أبوبكر قومي', 'عثمان دان فوديو'],
    notablePersonalitiesFr: ['Cheikh Ibrahim Zakzaky', 'Ahmad Abubakar Gumi', 'Ousmane Dan Fodio'],
    notablePersonalitiesEs: ['Jeque Ibrahim Zakzaky', 'Ahmad Abubakar Gumi', 'Uthman Dan Fodio'],
    stories: ['Sokoto Caliphate', 'Islamic education', 'Modern challenges'],
    storiesAr: ['خلافة سوكوتو', 'التعليم الإسلامي', 'التحديات الحديثة'],
    storiesFr: ['Califat de Sokoto', 'Éducation islamique', 'Défis modernes'],
    storiesEs: ['Califato de Sokoto', 'Educación islámica', 'Desafíos modernos'],
    gradient: 'from-green-500 to-yellow-500'
  },
  {
    id: 'egypt',
    name: 'Egypt',
    nameAr: 'مصر',
    population: '77 million',
    percentage: '90-95%',
    flag: '🇪🇬',
    description: 'The heart of Islamic scholarship with Al-Azhar University, a beacon of Islamic learning for over 1000 years.',
    descriptionAr: 'قلب العلوم الإسلامية مع جامعة الأزهر، منارة التعلم الإسلامي لأكثر من 1000 عام.',
    descriptionFr: 'Le cœur de l\'érudition islamique avec l\'Université Al-Azhar, un phare de l\'apprentissage islamique depuis plus de 1000 ans.',
    descriptionEs: 'El corazón de la erudición islámica con la Universidad de Al-Azhar, un faro del saber islámico durante más de 1000 años.',
    notablePersonalities: ['Sheikh Ahmed al-Tayeb', 'Sheikh Muhammad Abduh', 'Hassan al-Banna'],
    notablePersonalitiesAr: ['الشيخ أحمد الطيب', 'الشيخ محمد عبده', 'حسن البنا'],
    notablePersonalitiesFr: ['Cheikh Ahmed al-Tayeb', 'Cheikh Muhammad Abduh', 'Hassan el-Banna'],
    notablePersonalitiesEs: ['Jeque Ahmed al-Tayeb', 'Sheij Muhammad Abduh', 'Hasan al-Banna'],
    stories: ['Al-Azhar legacy', 'Islamic reform movement', 'Scholarly traditions'],
    storiesAr: ['إرث الأزهر', 'حركة الإصلاح الإسلامي', 'التقاليد العلمية'],
    storiesFr: ['L\'héritage d\'Al-Azhar', 'Mouvement de réforme islamique', 'Traditions savantes'],
    storiesEs: ['El legado de Al-Azhar', 'Movimiento de reforma islámica', 'Tradiciones académicas'],
    gradient: 'from-yellow-500 to-orange-500'
  },
  {
    id: 'turkey',
    name: 'Turkey',
    nameAr: 'تركيا',
    population: '75 million',
    percentage: '99%',
    flag: '🇹🇷',
    description: 'Bridge between East and West, with a rich Ottoman Islamic heritage and modern secular democracy.',
    descriptionAr: 'جسر بين الشرق والغرب، مع تراث إسلامي عثماني غني وديمقراطية علمانية حديثة.',
    descriptionFr: 'Pont entre l\'Orient et l\'Occident, avec un riche héritage islamique ottoman et une démocratie laïque moderne.',
    descriptionEs: 'Puente entre Oriente y Occidente, con una rica herencia islámica otomana y una democracia secular moderna.',
    notablePersonalities: ['Sultan Mehmed II', 'Mustafa Kemal Atatürk', 'Fethullah Gülen'],
    notablePersonalitiesAr: ['السلطان محمد الثاني', 'مصطفى كمال أتاتورك', 'فتح الله غولن'],
    notablePersonalitiesFr: ['Sultan Mehmed II', 'Mustafa Kemal Atatürk', 'Fethullah Gülen'],
    notablePersonalitiesEs: ['Sultán Mehmed II', 'Mustafa Kemal Atatürk', 'Fethullah Gülen'],
    stories: ['Ottoman Empire glory', 'Modern secularization', 'Islamic revival'],
    storiesAr: ['مجد الإمبراطورية العثمانية', 'العلمنة الحديثة', 'النهضة الإسلامية'],
    storiesFr: ['Gloire de l\'Empire ottoman', 'Sécularisation moderne', 'Réveil islamique'],
    storiesEs: ['Gloria del Imperio Otomano', 'Secularización moderna', 'Renacimiento islámico'],
    gradient: 'from-red-500 to-white'
  },
  {
    id: 'iran',
    name: 'Iran',
    nameAr: 'إيران',
    population: '82 million',
    percentage: '99%',
    flag: '🇮🇷',
    description: 'Ancient Persian civilization with rich Islamic culture, home to many great scholars and poets.',
    descriptionAr: 'حضارة فارسية قديمة مع ثقافة إسلامية غنية، موطن لكثير من العلماء والشعراء العظام.',
    descriptionFr: 'Civilisation perse ancienne avec une riche culture islamique, patrie de nombreux grands érudits et poètes.',
    descriptionEs: 'Antigua civilización persa con una rica cultura islámica, hogar de muchos grandes eruditos y poetas.',
    notablePersonalities: ['Rumi', 'Avicenna', 'Ayatollah Khomeini'],
    notablePersonalitiesAr: ['جلال الدين الرومي', 'ابن سينا', 'آية الله الخميني'],
    notablePersonalitiesFr: ['Rumi', 'Avicenne', 'Ayatollah Khomeini'],
    notablePersonalitiesEs: ['Rumi', 'Avicena', 'Ayatolá Jomeini'],
    stories: ['Persian Islamic culture', 'Sufi poetry tradition', 'Islamic Revolution'],
    storiesAr: ['الثقافة الإسلامية الفارسية', 'تقليد الشعر الصوفي', 'الثورة الإسلامية'],
    storiesFr: ['Culture islamique persane', 'Tradition de la poésie soufie', 'Révolution islamique'],
    storiesEs: ['Cultura islámica persa', 'Tradición de poesía sufí', 'Revolución Islámica'],
    gradient: 'from-green-500 to-red-500'
  },
  {
    id: 'saudi-arabia',
    name: 'Saudi Arabia',
    nameAr: 'المملكة العربية السعودية',
    population: '35 million',
    percentage: '99%',
    flag: '🇸🇦',
    description: 'Birthplace of Islam, home to the two holiest cities Mecca and Medina, and the Kaaba.',
    descriptionAr: 'مهد الإسلام، موطن المدينتين المقدستين مكة والمدينة، والكعبة المشرفة.',
    descriptionFr: 'Berceau de l\'Islam, abritant les deux villes les plus saintes, La Mecque et Médine, et la Kaaba.',
    descriptionEs: 'Cuna del Islam, hogar de las dos ciudades más sagradas, La Meca y Medina, y la Kaaba.',
    notablePersonalities: ['King Abdulaziz', 'King Salman', 'Crown Prince Mohammed bin Salman'],
    notablePersonalitiesAr: ['الملك عبد العزيز', 'الملك سلمان', 'ولي العهد محمد بن سلمان'],
    notablePersonalitiesFr: ['King Abdulaziz', 'King Salman', 'Prince héritier Mohammed ben Salmane'],
    notablePersonalitiesEs: ['Rey Abdulaziz', 'Rey Salmán', 'Príncipe heredero Mohammed bin Salman'],
    stories: ['Birth of Islam', 'Unification of Saudi Arabia', 'Modern Vision 2030'],
    storiesAr: ['ميلاد الإسلام', 'توحيد المملكة العربية السعودية', 'الرؤية الحديثة 2030'],
    storiesFr: ['Naissance de l\'Islam', 'Unification de l\'Arabie Saoudite', 'Vision Moderne 2030'],
    storiesEs: ['Nacimiento del Islam', 'Unificación de Arabia Saudita', 'Visión Moderna 2030'],
    gradient: 'from-green-500 to-green-600'
  },
  {
    id: 'malaysia',
    name: 'Malaysia',
    nameAr: 'ماليزيا',
    population: '20 million',
    percentage: '61%',
    flag: '🇲🇾',
    description: 'Multi-ethnic Muslim-majority country known for its moderate Islamic approach and economic success.',
    descriptionAr: 'دولة إسلامية متعددة الأعراق تشتهر بنهجها الإسلامي المعتدل ونجاحها الاقتصادي.',
    descriptionFr: 'Pays multiethnique à majorité musulmane, connu pour son approche islamique modérée et son succès économique.',
    descriptionEs: 'País multiétnico de mayoría musulmana, conocido por su enfoque islámico moderado y su éxito económico.',
    notablePersonalities: ['Tun Dr. Mahathir Mohamad', 'Anwar Ibrahim', 'Sheikh Tahir Jalaluddin'],
    notablePersonalitiesAr: ['تون د. مهاتير محمد', 'أنور إبراهيم', 'الشيخ طاهر جلال الدين'],
    notablePersonalitiesFr: ['Tun Dr. Mahathir Mohamad', 'Anwar Ibrahim', 'Cheikh Tahir Jalaluddin'],
    notablePersonalitiesEs: ['Tun Dr. Mahathir Mohamad', 'Anwar Ibrahim', 'Jeque Tahir Jalaluddin'],
    stories: ['Islamic banking success', 'Multi-cultural harmony', 'Economic development'],
    storiesAr: ['نجاح المصرفية الإسلامية', 'الوئام متعدد الثقافات', 'التنمية الاقتصادية'],
    storiesFr: ['Succès de la finance islamique', 'Harmonie multiculturelle', 'Développement économique'],
    storiesEs: ['Éxito de la banca islámica', 'Armonía multicultural', 'Desarrollo económico'],
    gradient: 'from-blue-500 to-yellow-500'
  },
  {
    id: 'usa',
    name: 'United States',
    nameAr: 'الولايات المتحدة',
    population: '4.5 million',
    percentage: '1.3%',
    flag: '🇺🇸',
    description: 'Home to a diverse Muslim community with growing influence in politics, business, and culture.',
    descriptionAr: 'موطن لمجتمع إسلامي متنوع ذو تأثير متزايد في السياسة والأعمال والثقافة.',
    descriptionFr: 'Foyer d\'une communauté musulmane diverse avec une influence croissante en politique, dans les affaires et la culture.',
    descriptionEs: 'Hogar de una comunidad musulmana diversa con creciente influencia en la política, los negocios y la cultura.',
    notablePersonalities: ['Muhammad Ali', 'Malcolm X', 'Ilhan Omar', 'Keith Ellison'],
    notablePersonalitiesAr: ['محمد علي كلاي', 'مالكوم إكس', 'إلهان عمر', 'كيث إليسون'],
    notablePersonalitiesFr: ['Muhammad Ali', 'Malcolm X', 'Ilhan Omar', 'Keith Ellison'],
    notablePersonalitiesEs: ['Muhammad Ali', 'Malcolm X', 'Ilhan Omar', 'Keith Ellison'],
    stories: ['Early Muslim presence in America', 'Civil Rights Movement and Islam', 'Growth of Muslim American community'],
    storiesAr: ['الوجود الإسلامي المبكر في أمريكا', 'حركة الحقوق المدنية والإسلام', 'نمو الجالية المسلمة الأمريكية'],
    storiesFr: ['Présence musulmane précoce en Amérique', 'Mouvement des droits civiques et Islam', 'Croissance de la communauté musulmane américaine'],
    storiesEs: ['Presencia musulmana temprana en América', 'Movimiento por los derechos civiles y el Islam', 'Crecimiento de la comunidad musulmana estadounidense'],
    gradient: 'from-blue-500 to-red-500'
  },
  {
    id: 'france',
    name: 'France',
    nameAr: 'فرنسا',
    population: '5.7 million',
    percentage: '8.8%',
    flag: '🇫🇷',
    description: 'The largest Muslim population in Western Europe, with significant cultural and social contributions.',
    descriptionAr: 'أكبر تجمع للمسلمين في أوروبا الغربية، مع مساهمات ثقافية واجتماعية مهمة.',
    descriptionFr: 'La plus grande population musulmane d\'Europe occidentale, avec d\'importantes contributions culturelles et sociales.',
    descriptionEs: 'La mayor población musulmana de Europa Occidental, con importantes contribuciones culturales y sociales.',
    notablePersonalities: ['Zinedine Zidane', 'Karim Benzema', 'French Muslim intellectuals'],
    notablePersonalitiesAr: ['زين الدين زيدان', 'كريم بنزيما', 'المثقفون المسلمون الفرنسيون'],
    notablePersonalitiesFr: ['Zinedine Zidane', 'Karim Benzema', 'Intellectuels musulmans français'],
    notablePersonalitiesEs: ['Zinedine Zidane', 'Karim Benzema', 'Intelectuales musulmanes franceses'],
    stories: ['Immigration and integration', 'Sports achievements', 'Cultural diversity'],
    storiesAr: ['الهجرة والاندماج', 'الإنجازات الرياضية', 'التنوع الثقافي'],
    storiesFr: ['Immigration et intégration', 'Réalisations sportives', 'Diversité culturelle'],
    storiesEs: ['Inmigración e integración', 'Logros deportivos', 'Diversidad cultural'],
    gradient: 'from-blue-500 to-white'
  },
  {
    id: 'spain',
    name: 'Spain',
    nameAr: 'إسبانيا',
    population: '2.5 million',
    percentage: '5.3%',
    flag: '🇪🇸',
    description: 'A country with deep Islamic historical roots from Al-Andalus, experiencing a modern Muslim revival.',
    descriptionAr: 'دولة ذات جذور تاريخية إسلامية عميقة من الأندلس، تشهد نهضة إسلامية حديثة.',
    descriptionFr: 'Un pays avec de profondes racines historiques islamiques d\'Al-Andalus, connaissant une renaissance musulmane moderne.',
    descriptionEs: 'Un país con profundas raíces históricas islámicas de Al-Ándalus, experimentando un renacimiento musulmán moderno.',
    notablePersonalities: ['Mansur Escudero', 'Abdurrahman Medina', 'Spanish Muslim converts'],
    notablePersonalitiesAr: ['منصور إسكوديرو', 'عبد الرحمن مدينة', 'المسلمون الإسبان الجدد'],
    notablePersonalitiesFr: ['Mansur Escudero', 'Abdurrahman Medina', 'Convertis musulmans espagnols'],
    notablePersonalitiesEs: ['Mansur Escudero', 'Abdurrahman Medina', 'Conversos musulmanes españoles'],
    stories: ['Andalusian heritage revival', 'Modern conversions', 'Cultural rediscovery'],
    storiesAr: ['إحياء التراث الأندلسي', 'الاعتناقات الحديثة', 'إعادة اكتشاف الثقافة'],
    storiesFr: ['Renouveau du patrimoine andalou', 'Conversions modernes', 'Redécouverte culturelle'],
    storiesEs: ['Resurgimiento del patrimonio andaluz', 'Conversiones modernas', 'Redescubrimiento cultural'],
    gradient: 'from-red-500 to-yellow-500'
  },
  {
    id: 'uk',
    name: 'United Kingdom',
    nameAr: 'المملكة المتحدة',
    population: '3.4 million',
    percentage: '5.1%',
    flag: '🇬🇧',
    description: 'Diverse Muslim community with significant contributions to British society and culture.',
    descriptionAr: 'مجتمع إسلامي متنوع مع مساهمات مهمة في المجتمع والثقافة البريطانية.',
    descriptionFr: 'Communauté musulmane diverse avec des contributions significatives à la société et à la culture britanniques.',
    descriptionEs: 'Comunidad musulmana diversa con contribuciones significativas a la sociedad y cultura británicas.',
    notablePersonalities: ['Sadiq Khan', 'Mo Farah', 'Malala Yousafzai'],
    notablePersonalitiesAr: ['صادق خان', 'محمد فرح', 'ملالا يوسفزاي'],
    notablePersonalitiesFr: ['Sadiq Khan', 'Mo Farah', 'Malala Yousafzai'],
    notablePersonalitiesEs: ['Sadiq Khan', 'Mo Farah', 'Malala Yousafzai'],
    stories: ['Post-war immigration', 'Muslim British identity', 'Contributions to society'],
    storiesAr: ['الهجرة بعد الحرب', 'الهوية البريطانية المسلمة', 'المساهمات في المجتمع'],
    storiesFr: ['Immigration d\'après-guerre', 'Identité britannique musulmane', 'Contributions à la société'],
    storiesEs: ['Inmigración de posguerra', 'Identidad británica musulmana', 'Contribuciones a la sociedad'],
    gradient: 'from-blue-500 to-red-500'
  },
  {
    id: 'germany',
    name: 'Germany',
    nameAr: 'ألمانيا',
    population: '5.5 million',
    percentage: '6.6%',
    flag: '🇩🇪',
    description: 'Large Muslim community with Turkish roots, contributing to German society and economy.',
    descriptionAr: 'مجتمع إسلامي كبير بجذور تركية، يساهم في المجتمع والاقتصاد الألماني.',
    descriptionFr: 'Grande communauté musulmane d\'origine turque, contribuant à la société et à l\'économie allemandes.',
    descriptionEs: 'Gran comunidad musulmana con raíces turcas, que contribuye a la sociedad y economía alemanas.',
    notablePersonalities: ['Mesut Özil', 'İlkay Gündoğan', 'German Muslim leaders'],
    notablePersonalitiesAr: ['مسعود أوزيل', 'إيلكاي غوندوغان', 'القادة المسلمون الألمان'],
    notablePersonalitiesFr: ['Mesut Özil', 'İlkay Gündoğan', 'Dirigeants musulmans allemands'],
    notablePersonalitiesEs: ['Mesut Özil', 'İlkay Gündoğan', 'Líderes musulmanes alemanes'],
    stories: ['Guest worker program', 'Integration challenges', 'Muslim German identity'],
    storiesAr: ['برنامج العمال الضيوف', 'تحديات الاندماج', 'الهوية الألمانية المسلمة'],
    storiesFr: ['Programme de travailleurs invités', 'Défis d\'intégration', 'Identité germano-musulmane'],
    storiesEs: ['Programa de trabajadores invitados', 'Desafíos de integración', 'Identidad germano-musulmana'],
    gradient: 'from-yellow-500 to-red-500'
  },
  {
    id: 'canada',
    name: 'Canada',
    nameAr: 'كندا',
    population: '1.8 million',
    percentage: '4.9%',
    flag: '🇨🇦',
    description: 'Multicultural Muslim community thriving in one of the world\'s most diverse societies.',
    descriptionAr: 'مجتمع إسلامي متعدد الثقافات يزدهر في واحدة من أكثر المجتمعات تنوعاً في العالم.',
    descriptionFr: 'Communauté musulmane multiculturelle prospérant dans l\'une des sociétés les plus diverses du monde.',
    descriptionEs: 'Comunidad musulmana multicultural prosperando en una de las sociedades más diversas del mundo.',
    notablePersonalities: ['Ahmed Hussen', 'Omar Alghabra', 'Canadian Muslim leaders'],
    notablePersonalitiesAr: ['أحمد حسين', 'عمر الغبرة', 'القادة المسلمون الكنديون'],
    notablePersonalitiesFr: ['Ahmed Hussen', 'Omar Alghabra', 'Dirigeants musulmans canadiens'],
    notablePersonalitiesEs: ['Ahmed Hussen', 'Omar Alghabra', 'Líderes musulmanes canadienses'],
    stories: ['Multicultural success', 'Muslim Canadian identity', 'Contributions to society'],
    storiesAr: ['نجاح متعدد الثقافات', 'الهوية الكندية المسلمة', 'المساهمات في المجتمع'],
    storiesFr: ['Succès multiculturel', 'Identité canadienne musulmane', 'Contributions à la société'],
    storiesEs: ['Éxito multicultural', 'Identidad canadiense musulmana', 'Contribuciones a la sociedad'],
    gradient: 'from-red-500 to-white'
  }
];

export default function Countries() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-accent/20">
      <div className="container max-w-7xl mx-auto py-12 px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-hover to-accent bg-clip-text text-transparent">
            {t('countries.title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            {t('countries.subtitle')}
          </p>
        </div>

        {/* Countries Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {countries.map((country) => (
            <Card 
              key={country.id} 
              className="group relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${country.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
              
              <CardHeader className="relative">
                <Link to={`/country/${country.id}`} className="block">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="relative w-12 h-12 rounded-md overflow-hidden bg-muted flex items-center justify-center">
                      <span className="text-3xl select-none" aria-hidden>
                        {country.flag}
                      </span>
                      <img
                        src={`/countries/${country.id}.jpg`}
                        alt={isArabic ? `${country.nameAr} صورة` : `${country.name} image`}
                        className="absolute inset-0 w-full h-full object-cover"
                        onError={(e) => {
                          // Hide the image element if not found so the flag remains visible
                          (e.currentTarget as HTMLImageElement).style.display = 'none';
                        }}
                      />
                    </div>
                    <div>
                      <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                        {isArabic ? country.nameAr : country.name}
                      </CardTitle>
                      <div className="flex gap-2 mt-2">
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
                  <CardDescription className="text-sm leading-relaxed">
                    {i18n.language === 'fr' ? country.descriptionFr : i18n.language === 'es' ? country.descriptionEs : isArabic ? country.descriptionAr : country.description}
                  </CardDescription>
                </Link>
              </CardHeader>
              
              <CardContent className="relative space-y-6">
                {/* Notable Personalities */}
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2 text-primary">
                    <Star className="h-4 w-4" />
                    {t('countries.notablePersonalities')}
                  </h4>
                  <div className="space-y-2">
                    {(i18n.language === 'fr' ? country.notablePersonalitiesFr : i18n.language === 'es' ? country.notablePersonalitiesEs : isArabic ? country.notablePersonalitiesAr : country.notablePersonalities).map((person, index) => (
                      <Link 
                        key={index}
                        to={`/personality/${country.id}/${index}`}
                        state={{
                          fromList: {
                            name: i18n.language === 'fr' ? country.notablePersonalitiesFr[index] : i18n.language === 'es' ? country.notablePersonalitiesEs[index] : isArabic ? country.notablePersonalitiesAr[index] : country.notablePersonalities[index],
                            nameAr: country.notablePersonalitiesAr[index],
                            countryId: country.id,
                            countryName: country.name,
                            countryNameAr: country.nameAr,
                            index
                          }
                        }}
                        className="block text-sm bg-muted/50 rounded-lg px-3 py-2 hover:bg-muted transition-colors cursor-pointer group/person"
                      >
                        <div className="flex items-center justify-between">
                          <span>{person}</span>
                          <ExternalLink className="h-3 w-3 opacity-0 group-hover/person:opacity-100 transition-opacity" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Stories */}
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2 text-primary">
                    <BookOpen className="h-4 w-4" />
                    {t('countries.notableStories')}
                  </h4>
                  <div className="space-y-2">
                    {(i18n.language === 'fr' ? country.storiesFr : i18n.language === 'es' ? country.storiesEs : isArabic ? country.storiesAr : country.stories).map((story, index) => (
                      <Link 
                        key={index}
                        to={`/story/${country.id}/${index}`}
                        state={{
                          fromList: {
                            title: i18n.language === 'fr' ? country.storiesFr[index] : i18n.language === 'es' ? country.storiesEs[index] : isArabic ? country.storiesAr[index] : country.stories[index],
                            titleAr: country.storiesAr[index],
                            countryId: country.id,
                            countryName: country.name,
                            countryNameAr: country.nameAr,
                            index
                          }
                        }}
                        className="block text-sm bg-accent/20 rounded-lg px-3 py-2 hover:bg-accent/30 transition-colors cursor-pointer group/story"
                      >
                        <div className="flex items-center justify-between">
                          <span>{story}</span>
                          <ExternalLink className="h-3 w-3 opacity-0 group-hover/story:opacity-100 transition-opacity" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* View Country Details Button */}
                <div className="pt-4 border-t border-border/50">
                  <Link to={`/country/${country.id}`}>
                    <Button variant="outline" className="w-full gap-2 group/btn">
                      {t('countries.viewDetails')}
                      <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Statistics Summary */}
        <div className="mt-16">
          <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
            <CardContent className="py-8">
              <h2 className="text-3xl font-semibold mb-6 text-center text-primary">
                {t('countries.globalStatistics')}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">2+ مليار</div>
                  <div className="text-muted-foreground">
                    {t('countries.totalMuslims')}
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">25%</div>
                  <div className="text-muted-foreground">
                    {t('countries.ofWorldPopulation')}
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-muted-foreground">
                    {t('countries.muslimMajorityCountries')}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

