import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Calculator, Heart, Clock, BookOpen, ArrowRight } from 'lucide-react';

export default function Index() {
  const { t } = useTranslation();

  const features = [
    {
      title: t('nav.dateConverter'),
      description: t('dateConverter.subtitle'),
      icon: Calendar,
      path: '/date-converter',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: t('nav.ageCalculator'),
      description: t('ageCalculator.subtitle'),
      icon: Calculator,
      path: '/age-calculator',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      title: t('nav.morningEveningAdhkar'),
      description: t('adhkar.subtitle'),
      icon: Heart,
      path: '/adhkar',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: t('nav.prayerTimes'),
      description: t('prayer.subtitle'),
      icon: Clock,
      path: '/prayer-times',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      title: t('nav.fridayDuas'),
      description: t('fridayDuas.subtitle'),
      icon: BookOpen,
      path: '/friday-duas',
      gradient: 'from-indigo-500 to-purple-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-accent/20">
      <div className="container max-w-6xl mx-auto py-12 px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-hover to-accent bg-clip-text text-transparent">
            أدوات إسلامية متكاملة
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            مجموعة شاملة من الأدوات الإسلامية المفيدة تشمل تحويل التاريخ، حساب العمر، الأذكار، مواقيت الصلاة وأدعية الجمعة
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="group relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
                
                <CardHeader className="relative">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.gradient} p-2.5 mb-4`}>
                    <Icon className="w-full h-full text-white" />
                  </div>
                  <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="relative pt-0">
                  <Button 
                    asChild 
                    className="w-full group/btn"
                    variant="outline"
                  >
                    <Link to={feature.path} className="flex items-center justify-center gap-2">
                      استخدم الأداة
                      <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-16">
          <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
            <CardContent className="py-8">
              <h2 className="text-2xl font-semibold mb-4 text-primary">
                متوفر بعدة لغات
              </h2>
              <p className="text-muted-foreground">
                جميع الأدوات متوفرة باللغات العربية والإنجليزية والفرنسية والإسبانية لخدمة المسلمين حول العالم
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}