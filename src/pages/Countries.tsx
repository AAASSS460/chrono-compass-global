import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { personalityData } from './PersonalityDetail';
import { storyData } from './StoryDetail';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Users, Star, BookOpen, ArrowRight, ExternalLink } from 'lucide-react';

interface Country {
  id: string;
  name: string;
  nameAr: string;
  population: string;
  percentage: string;
  flag: string;
  description: string;
  descriptionAr: string;
  notablePersonalities: string[];
  notablePersonalitiesAr: string[];
  stories: string[];
  storiesAr: string[];
  gradient: string;
}

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
    notablePersonalities: ['Wali Songo (Nine Saints)', 'Sheikh Ahmad Dahlan', 'Muhammad Iqdam Khalid'],
    notablePersonalitiesAr: ['الأولياء التسعة', 'الشيخ أحمد دحلان', 'محمد إقدام خالد'],
    stories: ['Peaceful conversion through trade', 'The Nine Saints of Java', 'Modern Islamic revival'],
    storiesAr: ['الاعتناق السلمي عبر التجارة', 'الأولياء التسعة في جاوة', 'النهضة الإسلامية الحديثة'],
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
    notablePersonalities: ['Abul A\'la Maududi', 'Allama Iqbal', 'Shah Ahmad Shafi'],
    notablePersonalitiesAr: ['أبو الأعلى المودودي', 'علامة إقبال', 'شاه أحمد شفيع'],
    stories: ['Partition and independence', 'Islamic scholarship', 'Unity movements'],
    storiesAr: ['التقسيم والاستقلال', 'العلوم الإسلامية', 'حركات الوحدة'],
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
    notablePersonalities: ['Abu al-Hasan Ali al-Nadwi', 'Sheikh Abu Bakr Ahmad Musliyar', 'Maulana Abul Kalam Azad'],
    notablePersonalitiesAr: ['أبو الحسن علي الندوي', 'الشيخ أبو بكر أحمد مسليار', 'مولانا أبو الكلام آزاد'],
    stories: ['Mughal Empire legacy', 'Sufi traditions', 'Modern challenges and resilience'],
    storiesAr: ['إرث الإمبراطورية المغولية', 'التقاليد الصوفية', 'التحديات الحديثة والصمود'],
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
    notablePersonalities: ['Shah Ahmad Shafi', 'Muhammad Abdul Malik', 'Taj al-Islam'],
    notablePersonalitiesAr: ['شاه أحمد شفيع', 'محمد عبد المالك', 'تاج الإسلام'],
    stories: ['Bengal Islamic heritage', 'Language movement', 'Scholarly contributions'],
    storiesAr: ['التراث الإسلامي البنغالي', 'حركة اللغة', 'المساهمات العلمية'],
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
    notablePersonalities: ['Sheikh Ibrahim Zakzaky', 'Ahmad Abubakar Gumi', 'Usman dan Fodio'],
    notablePersonalitiesAr: ['الشيخ إبراهيم زكزكي', 'أحمد أبوبكر قومي', 'عثمان دان فوديو'],
    stories: ['Sokoto Caliphate', 'Islamic education', 'Modern challenges'],
    storiesAr: ['خلافة سوكوتو', 'التعليم الإسلامي', 'التحديات الحديثة'],
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
    notablePersonalities: ['Sheikh Ahmed al-Tayeb', 'Sheikh Muhammad Abduh', 'Hassan al-Banna'],
    notablePersonalitiesAr: ['الشيخ أحمد الطيب', 'الشيخ محمد عبده', 'حسن البنا'],
    stories: ['Al-Azhar legacy', 'Islamic reform movement', 'Scholarly traditions'],
    storiesAr: ['إرث الأزهر', 'حركة الإصلاح الإسلامي', 'التقاليد العلمية'],
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
    notablePersonalities: ['Sultan Mehmed II', 'Mustafa Kemal Atatürk', 'Fethullah Gülen'],
    notablePersonalitiesAr: ['السلطان محمد الثاني', 'مصطفى كمال أتاتورك', 'فتح الله غولن'],
    stories: ['Ottoman Empire glory', 'Modern secularization', 'Islamic revival'],
    storiesAr: ['مجد الإمبراطورية العثمانية', 'العلمنة الحديثة', 'النهضة الإسلامية'],
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
    notablePersonalities: ['Rumi', 'Avicenna', 'Ayatollah Khomeini'],
    notablePersonalitiesAr: ['جلال الدين الرومي', 'ابن سينا', 'آية الله الخميني'],
    stories: ['Persian Islamic culture', 'Sufi poetry tradition', 'Islamic Revolution'],
    storiesAr: ['الثقافة الإسلامية الفارسية', 'تقليد الشعر الصوفي', 'الثورة الإسلامية'],
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
    notablePersonalities: ['King Abdulaziz', 'King Salman', 'Crown Prince Mohammed bin Salman'],
    notablePersonalitiesAr: ['الملك عبد العزيز', 'الملك سلمان', 'ولي العهد محمد بن سلمان'],
    stories: ['Birth of Islam', 'Unification of Saudi Arabia', 'Modern Vision 2030'],
    storiesAr: ['ميلاد الإسلام', 'توحيد المملكة العربية السعودية', 'الرؤية الحديثة 2030'],
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
    notablePersonalities: ['Tun Dr. Mahathir Mohamad', 'Anwar Ibrahim', 'Sheikh Tahir Jalaluddin'],
    notablePersonalitiesAr: ['تون د. مهاتير محمد', 'أنور إبراهيم', 'الشيخ طاهر جلال الدين'],
    stories: ['Islamic banking success', 'Multi-cultural harmony', 'Economic development'],
    storiesAr: ['نجاح المصرفية الإسلامية', 'الوئام متعدد الثقافات', 'التنمية الاقتصادية'],
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
    notablePersonalities: ['Muhammad Ali', 'Malcolm X', 'Ilhan Omar', 'Keith Ellison'],
    notablePersonalitiesAr: ['محمد علي كلاي', 'مالكوم إكس', 'إلهان عمر', 'كيث إليسون'],
    stories: ['Early Muslim presence in America', 'Civil Rights Movement and Islam', 'Growth of Muslim American community'],
    storiesAr: ['الوجود الإسلامي المبكر في أمريكا', 'حركة الحقوق المدنية والإسلام', 'نمو الجالية المسلمة الأمريكية'],
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
    notablePersonalities: ['Zinedine Zidane', 'Karim Benzema', 'French Muslim intellectuals'],
    notablePersonalitiesAr: ['زين الدين زيدان', 'كريم بنزيما', 'المثقفون المسلمون الفرنسيون'],
    stories: ['Immigration and integration', 'Sports achievements', 'Cultural diversity'],
    storiesAr: ['الهجرة والاندماج', 'الإنجازات الرياضية', 'التنوع الثقافي'],
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
    notablePersonalities: ['Mansur Escudero', 'Abdurrahman Medina', 'Spanish Muslim converts'],
    notablePersonalitiesAr: ['منصور إسكوديرو', 'عبد الرحمن مدينة', 'المسلمون الإسبان الجدد'],
    stories: ['Andalusian heritage revival', 'Modern conversions', 'Cultural rediscovery'],
    storiesAr: ['إحياء التراث الأندلسي', 'الاعتناقات الحديثة', 'إعادة اكتشاف الثقافة'],
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
    notablePersonalities: ['Sadiq Khan', 'Mo Farah', 'Malala Yousafzai'],
    notablePersonalitiesAr: ['صادق خان', 'محمد فرح', 'ملالا يوسفزاي'],
    stories: ['Post-war immigration', 'Muslim British identity', 'Contributions to society'],
    storiesAr: ['الهجرة بعد الحرب', 'الهوية البريطانية المسلمة', 'المساهمات في المجتمع'],
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
    notablePersonalities: ['Mesut Özil', 'İlkay Gündoğan', 'German Muslim leaders'],
    notablePersonalitiesAr: ['مسعود أوزيل', 'إيلكاي غوندوغان', 'القادة المسلمون الألمان'],
    stories: ['Guest worker program', 'Integration challenges', 'Muslim German identity'],
    storiesAr: ['برنامج العمال الضيوف', 'تحديات الاندماج', 'الهوية الألمانية المسلمة'],
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
    notablePersonalities: ['Ahmed Hussen', 'Omar Alghabra', 'Canadian Muslim leaders'],
    notablePersonalitiesAr: ['أحمد حسين', 'عمر الغبرة', 'القادة المسلمون الكنديون'],
    stories: ['Multicultural success', 'Muslim Canadian identity', 'Contributions to society'],
    storiesAr: ['نجاح متعدد الثقافات', 'الهوية الكندية المسلمة', 'المساهمات في المجتمع'],
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
            {isArabic ? 'المسلمون حول العالم' : 'Muslims Around the World'}
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            {isArabic 
              ? 'اكتشف التنوع الغني للمجتمعات الإسلامية حول العالم، وتعرف على أبرز الشخصيات والقصص الملهمة من كل دولة.'
              : 'Discover the rich diversity of Islamic communities around the world, learn about prominent personalities and inspiring stories from each country.'
            }
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
                    {isArabic ? country.descriptionAr : country.description}
                  </CardDescription>
                </Link>
              </CardHeader>
              
              <CardContent className="relative space-y-6">
                {/* Notable Personalities */}
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2 text-primary">
                    <Star className="h-4 w-4" />
                    {isArabic ? 'شخصيات بارزة' : 'Notable Personalities'}
                  </h4>
                  <div className="space-y-2">
                    {(isArabic ? country.notablePersonalitiesAr : country.notablePersonalities).map((person, index) => {
                      const hasData = Boolean(personalityData[country.id]?.[index]);
                      const Wrapper: React.ElementType = hasData ? Link : 'div';
                      const wrapperProps = hasData ? { to: `/personality/${country.id}/${index}` } : {};
                      return (
                      <Wrapper 
                        key={index} 
                        {...wrapperProps}
                        className={`block text-sm rounded-lg px-3 py-2 transition-colors cursor-${hasData ? 'pointer' : 'default'} group/person ${hasData ? 'bg-muted/50 hover:bg-muted' : 'bg-muted/20 opacity-60'}`}
                      >
                        <div className="flex items-center justify-between">
                          <span>{person}</span>
                          {hasData && (
                            <ExternalLink className="h-3 w-3 opacity-0 group-hover/person:opacity-100 transition-opacity" />
                          )}
                        </div>
                      </Wrapper>
                      );
                    })}
                  </div>
                </div>

                {/* Stories */}
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2 text-primary">
                    <BookOpen className="h-4 w-4" />
                    {isArabic ? 'قصص بارزة' : 'Notable Stories'}
                  </h4>
                  <div className="space-y-2">
                    {(isArabic ? country.storiesAr : country.stories).map((story, index) => {
                      const hasData = Boolean(storyData[country.id]?.[index]);
                      const Wrapper: React.ElementType = hasData ? Link : 'div';
                      const wrapperProps = hasData ? { to: `/story/${country.id}/${index}` } : {};
                      return (
                      <Wrapper 
                        key={index} 
                        {...wrapperProps}
                        className={`block text-sm rounded-lg px-3 py-2 transition-colors cursor-${hasData ? 'pointer' : 'default'} group/story ${hasData ? 'bg-accent/20 hover:bg-accent/30' : 'bg-accent/10 opacity-60'}`}
                      >
                        <div className="flex items-center justify-between">
                          <span>{story}</span>
                          {hasData && (
                            <ExternalLink className="h-3 w-3 opacity-0 group-hover/story:opacity-100 transition-opacity" />
                          )}
                        </div>
                      </Wrapper>
                      );
                    })}
                  </div>
                </div>

                {/* View Country Details Button */}
                <div className="pt-4 border-t border-border/50">
                  <Link to={`/country/${country.id}`}>
                    <Button variant="outline" className="w-full gap-2 group/btn">
                      {isArabic ? 'عرض تفاصيل الدولة' : 'View Country Details'}
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
                {isArabic ? 'إحصائيات عامة' : 'Global Statistics'}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">2+ مليار</div>
                  <div className="text-muted-foreground">
                    {isArabic ? 'إجمالي المسلمين في العالم' : 'Total Muslims Worldwide'}
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">25%</div>
                  <div className="text-muted-foreground">
                    {isArabic ? 'من سكان العالم' : 'Of World Population'}
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-muted-foreground">
                    {isArabic ? 'دولة ذات أغلبية مسلمة' : 'Muslim-Majority Countries'}
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

