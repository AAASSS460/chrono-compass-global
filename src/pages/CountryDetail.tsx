import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, MapPin, Users, Star, BookOpen, Calendar, Globe, Heart, Mosque, GraduationCap, Trophy, Building } from 'lucide-react';

interface CountryDetailData {
  id: string;
  name: string;
  nameAr: string;
  flag: string;
  population: string;
  percentage: string;
  capital: string;
  capitalAr: string;
  language: string;
  languageAr: string;
  currency: string;
  currencyAr: string;
  islamicHistory: {
    arrival: string;
    arrivalAr: string;
    keyEvents: string[];
    keyEventsAr: string[];
  };
  culturalContributions: {
    title: string;
    titleAr: string;
    items: string[];
    itemsAr: string[];
  };
  modernChallenges: {
    title: string;
    titleAr: string;
    items: string[];
    itemsAr: string[];
  };
  inspiringFacts: {
    title: string;
    titleAr: string;
    facts: string[];
    factsAr: string[];
  };
  mosques: {
    title: string;
    titleAr: string;
    famous: string[];
    famousAr: string[];
  };
  education: {
    title: string;
    titleAr: string;
    institutions: string[];
    institutionsAr: string[];
  };
}

const countryDetails: Record<string, CountryDetailData> = {
  indonesia: {
    id: 'indonesia',
    name: 'Indonesia',
    nameAr: 'إندونيسيا',
    flag: '🇮🇩',
    population: '210 million',
    percentage: '87%',
    capital: 'Jakarta',
    capitalAr: 'جاكرتا',
    language: 'Indonesian',
    languageAr: 'الإندونيسية',
    currency: 'Indonesian Rupiah',
    currencyAr: 'الروبية الإندونيسية',
    islamicHistory: {
      arrival: 'Islam arrived in Indonesia through peaceful trade routes in the 13th century',
      arrivalAr: 'وصل الإسلام إلى إندونيسيا عبر طرق التجارة السلمية في القرن الثالث عشر',
      keyEvents: [
        'Establishment of Sultanate of Aceh (1496)',
        'Spread through Javanese kingdoms',
        'Resistance against Dutch colonialism',
        'Independence and Islamic revival (1945)'
      ],
      keyEventsAr: [
        'تأسيس سلطنة آتشيه (1496)',
        'الانتشار عبر ممالك جاوة',
        'المقاومة ضد الاستعمار الهولندي',
        'الاستقلال والنهضة الإسلامية (1945)'
      ]
    },
    culturalContributions: {
      title: 'Cultural & Religious Contributions',
      titleAr: 'المساهمات الثقافية والدينية',
      items: [
        'Unique blend of Islamic and local traditions',
        'Beautiful mosque architecture with Indonesian elements',
        'Islamic art and calligraphy traditions',
        'Peaceful coexistence model for diverse societies'
      ],
      itemsAr: [
        'مزيج فريد من التقاليد الإسلامية والمحلية',
        'عمارة المساجد الجميلة بعناصر إندونيسية',
        'تقاليد الفن الإسلامي والخط العربي',
        'نموذج التعايش السلمي للمجتمعات المتنوعة'
      ]
    },
    modernChallenges: {
      title: 'Modern Challenges & Opportunities',
      titleAr: 'التحديات والفرص الحديثة',
      items: [
        'Balancing modernity with Islamic values',
        'Economic development in Muslim regions',
        'Environmental conservation as Islamic duty',
        'Youth education and Islamic identity'
      ],
      itemsAr: [
        'الموازنة بين الحداثة والقيم الإسلامية',
        'التنمية الاقتصادية في المناطق المسلمة',
        'المحافظة على البيئة كواجب إسلامي',
        'تعليم الشباب والهوية الإسلامية'
      ]
    },
    inspiringFacts: {
      title: 'Inspiring Facts',
      titleAr: 'حقائق ملهمة',
      facts: [
        'Home to the largest Muslim population in the world',
        'Istiqlal Mosque in Jakarta can accommodate 120,000 worshippers',
        'Indonesia has over 800,000 mosques nationwide',
        'The country celebrates religious diversity while maintaining Islamic majority'
      ],
      factsAr: [
        'موطن أكبر تجمع مسلم في العالم',
        'مسجد الاستقلال في جاكرتا يتسع لـ 120,000 مصلي',
        'إندونيسيا تضم أكثر من 800,000 مسجد على مستوى البلاد',
        'البلاد تحتفل بالتنوع الديني مع الحفاظ على الأغلبية الإسلامية'
      ]
    },
    mosques: {
      title: 'Famous Mosques',
      titleAr: 'المساجد الشهيرة',
      famous: [
        'Istiqlal Mosque - Jakarta (Largest in Southeast Asia)',
        'Great Mosque of Demak - Central Java (Historic)',
        'Menara Kudus Mosque - Central Java (Unique Architecture)',
        'Baiturrahman Grand Mosque - Aceh (Symbol of Resilience)'
      ],
      famousAr: [
        'مسجد الاستقلال - جاكرتا (الأكبر في جنوب شرق آسيا)',
        'المسجد الكبير في ديماك - جاوة الوسطى (تاريخي)',
        'مسجد منارة كودوس - جاوة الوسطى (عمارة فريدة)',
        'مسجد بيت الرحمن الكبير - آتشيه (رمز الصمود)'
      ]
    },
    education: {
      title: 'Islamic Education',
      titleAr: 'التعليم الإسلامي',
      institutions: [
        'State Islamic University (UIN) system',
        'Pesantren traditional Islamic schools',
        'Al-Azhar University Indonesia',
        'Thousands of madrasas nationwide'
      ],
      institutionsAr: [
        'نظام الجامعة الإسلامية الحكومية',
        'مدارس البيسانترين الإسلامية التقليدية',
        'جامعة الأزهر إندونيسيا',
        'آلاف المدارس الدينية على مستوى البلاد'
      ]
    }
  },
  // Add more countries here...
};

export default function CountryDetail() {
  const { countryId } = useParams<{ countryId: string }>();
  const { i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';
  
  const country = countryId ? countryDetails[countryId] : null;

  if (!country) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background to-accent/20 flex items-center justify-center">
        <Card className="max-w-md mx-auto">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">
              {isArabic ? 'الدولة غير موجودة' : 'Country Not Found'}
            </h2>
            <p className="text-muted-foreground mb-6">
              {isArabic 
                ? 'عذراً، لم نتمكن من العثور على تفاصيل هذه الدولة.'
                : 'Sorry, we could not find details for this country.'
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
      <div className="container max-w-6xl mx-auto py-12 px-4">
        {/* Header */}
        <div className="mb-8">
          <Link to="/countries">
            <Button variant="ghost" className="gap-2 mb-6">
              <ArrowLeft className="h-4 w-4" />
              {isArabic ? 'العودة للدول' : 'Back to Countries'}
            </Button>
          </Link>
          
          <div className="flex items-center gap-4 mb-6">
            <span className="text-6xl">{country.flag}</span>
            <div>
              <h1 className="text-4xl font-bold mb-2">
                {isArabic ? country.nameAr : country.name}
              </h1>
              <div className="flex gap-3">
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
        </div>

        {/* Basic Information */}
        <div className="grid gap-6 md:grid-cols-3 mb-8">
          <Card className="border-0 shadow-md">
            <CardContent className="p-6 text-center">
              <Building className="h-8 w-8 mx-auto mb-3 text-primary" />
              <h3 className="font-semibold mb-2">{isArabic ? 'العاصمة' : 'Capital'}</h3>
              <p className="text-muted-foreground">{isArabic ? country.capitalAr : country.capital}</p>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-md">
            <CardContent className="p-6 text-center">
              <Globe className="h-8 w-8 mx-auto mb-3 text-primary" />
              <h3 className="font-semibold mb-2">{isArabic ? 'اللغة' : 'Language'}</h3>
              <p className="text-muted-foreground">{isArabic ? country.languageAr : country.language}</p>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-md">
            <CardContent className="p-6 text-center">
              <Trophy className="h-8 w-8 mx-auto mb-3 text-primary" />
              <h3 className="font-semibold mb-2">{isArabic ? 'العملة' : 'Currency'}</h3>
              <p className="text-muted-foreground">{isArabic ? country.currencyAr : country.currency}</p>
            </CardContent>
          </Card>
        </div>

        {/* Islamic History */}
        <Card className="mb-8 border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              {isArabic ? 'التاريخ الإسلامي' : 'Islamic History'}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-lg leading-relaxed">
              {isArabic ? country.islamicHistory.arrivalAr : country.islamicHistory.arrival}
            </p>
            <div>
              <h4 className="font-semibold mb-3">{isArabic ? 'الأحداث الرئيسية:' : 'Key Events:'}</h4>
              <div className="grid gap-3 md:grid-cols-2">
                {(isArabic ? country.islamicHistory.keyEventsAr : country.islamicHistory.keyEvents).map((event, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-sm">{event}</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Two Column Layout */}
        <div className="grid gap-8 lg:grid-cols-2 mb-8">
          {/* Cultural Contributions */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-primary" />
                {isArabic ? country.culturalContributions.titleAr : country.culturalContributions.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {(isArabic ? country.culturalContributions.itemsAr : country.culturalContributions.items).map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <Star className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Modern Challenges */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-primary" />
                {isArabic ? country.modernChallenges.titleAr : country.modernChallenges.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {(isArabic ? country.modernChallenges.itemsAr : country.modernChallenges.items).map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Inspiring Facts */}
        <Card className="mb-8 border-0 shadow-lg bg-gradient-to-br from-green-50 to-emerald-100/50 dark:from-green-950/30 dark:to-emerald-900/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="h-5 w-5 text-green-600" />
              {isArabic ? country.inspiringFacts.titleAr : country.inspiringFacts.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              {(isArabic ? country.inspiringFacts.factsAr : country.inspiringFacts.facts).map((fact, index) => (
                <div key={index} className="bg-white/50 dark:bg-black/20 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <span className="text-sm font-medium">{fact}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Bottom Grid */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Famous Mosques */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mosque className="h-5 w-5 text-primary" />
                {isArabic ? country.mosques.titleAr : country.mosques.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {(isArabic ? country.mosques.famousAr : country.mosques.famous).map((mosque, index) => (
                  <div key={index} className="bg-accent/20 rounded-lg p-3">
                    <span className="text-sm font-medium">{mosque}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Education */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-primary" />
                {isArabic ? country.education.titleAr : country.education.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {(isArabic ? country.education.institutionsAr : country.education.institutions).map((institution, index) => (
                  <div key={index} className="bg-primary/10 rounded-lg p-3">
                    <span className="text-sm font-medium">{institution}</span>
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

