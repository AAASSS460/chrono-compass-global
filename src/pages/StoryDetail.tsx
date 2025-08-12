import { useParams, Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, BookOpen, Calendar, MapPin, Star, Heart, Users, Lightbulb, Clock, Globe } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { storyData } from '@/data/stories';

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

interface LocationState {
  fromList?: {
    title?: string;
    titleAr?: string;
    countryId?: string;
    countryName?: string;
    countryNameAr?: string;
    index?: number;
  };
}

export default function StoryDetail() {
  const { countryId, storyIndex } = useParams<{ countryId: string; storyIndex: string }>();
  const { i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';
  const location = useLocation();
  const fallbackFromList = (location.state as LocationState)?.fromList;
  
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