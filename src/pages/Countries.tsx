import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
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
    id: 'usa',
    name: 'United States',
    nameAr: 'الولايات المتحدة',
    population: '4.5 million',
    percentage: '1.3%',
    flag: '🇺🇸',
    description: 'Home to a diverse Muslim community with growing influence in politics, business, and culture, and a rich history dating back to early immigrants and enslaved Africans.',
    descriptionAr: 'موطن لمجتمع إسلامي متنوع ذو تأثير متزايد في السياسة والأعمال والثقافة، وتاريخ غني يعود إلى المهاجرين الأوائل والأفارقة المستعبدين.',
    notablePersonalities: ['Muhammad Ali', 'Malcolm X', 'Ilhan Omar', 'Keith Ellison'],
    notablePersonalitiesAr: ['محمد علي كلاي', 'مالكوم إكس', 'إلهان عمر', 'كيث إليسون'],
    stories: ['Early Muslim presence in America', 'Civil Rights Movement and Islam', 'Growth of Muslim American community'],
    storiesAr: ['الوجود الإسلامي المبكر في أمريكا', 'حركة الحقوق المدنية والإسلام', 'نمو الجالية المسلمة الأمريكية'],
    gradient: 'from-blue-500 to-red-500'
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
    id: 'usa',
    name: 'United States',
    nameAr: 'الولايات المتحدة',
    population: '3.5 million',
    percentage: '1.1%',
    flag: '🇺🇸',
    description: 'Home to a diverse Muslim community with growing influence in politics, business, and culture.',
    descriptionAr: 'موطن لمجتمع إسلامي متنوع مع تأثير متزايد في السياسة والأعمال والثقافة.',
    notablePersonalities: ['Muhammad Ali', 'Ilhan Omar', 'Rashida Tlaib', 'Keith Ellison'],
    notablePersonalitiesAr: ['محمد علي كلاي', 'إلهان عمر', 'رشيدة طليب', 'كيث إليسون'],
    stories: ['Civil rights activism', 'Political representation', 'Cultural contributions'],
    storiesAr: ['النشاط في الحقوق المدنية', 'التمثيل السياسي', 'المساهمات الثقافية'],
    gradient: 'from-blue-500 to-red-500'
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
                    <span className="text-4xl">{country.flag}</span>
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
                    {(isArabic ? country.notablePersonalitiesAr : country.notablePersonalities).map((person, index) => (
                      <Link 
                        key={index} 
                        to={`/personality/${country.id}/${index}`}
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
                    {isArabic ? 'قصص بارزة' : 'Notable Stories'}
                  </h4>
                  <div className="space-y-2">
                    {(isArabic ? country.storiesAr : country.stories).map((story, index) => (
                      <Link 
                        key={index} 
                        to={`/story/${country.id}/${index}`}
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

