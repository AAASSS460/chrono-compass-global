import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, Calendar, MapPin, Quote, BookOpen, Lightbulb, Award } from 'lucide-react';
import { personalityData } from '@/data/personalities';
import { Helmet } from 'react-helmet-async';

export default function PersonalityDetail() {
  const { countryId, personalityIndex } = useParams<{
    countryId: string;
    personalityIndex: string;
  }>();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';

  if (!countryId || !personalityIndex) {
    navigate('/countries');
    return null;
  }

  const personalities = personalityData[countryId];
  if (!personalities) {
    navigate('/countries');
    return null;
  }

  const personality = personalities[parseInt(personalityIndex)];
  if (!personality) {
    navigate(`/country/${countryId}`);
    return null;
  }

  const name = isRtl ? personality.nameAr : personality.name;
  const country = isRtl ? personality.countryAr : personality.country;
  const era = isRtl ? personality.eraAr : personality.era;
  const title = isRtl ? personality.titleAr : personality.title;
  const biography = isRtl ? personality.biographyAr : personality.biography;
  const achievements = isRtl ? personality.achievementsAr : personality.achievements;
  const quotes = isRtl ? personality.quotesAr : personality.quotes;
  const legacy = isRtl ? personality.legacyAr : personality.legacy;
  const inspiringLessons = isRtl ? personality.inspiringLessonsAr : personality.inspiringLessons;
  const relatedWorks = isRtl ? personality.relatedWorksAr : personality.relatedWorks;

  return (
    <>
      <Helmet>
        <title>{name} - {t('common.appName')}</title>
        <meta name="description" content={biography.substring(0, 160)} />
        <meta name="keywords" content={`${name}, ${country}, ${title}, Islamic personality, biography`} />
        <link rel="canonical" href={`${window.location.origin}/personality/${countryId}/${personalityIndex}`} />
      </Helmet>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Button
          variant="ghost"
          onClick={() => navigate(`/country/${countryId}`)}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          {t('common.back')}
        </Button>

        <div className="space-y-6">
          {/* Header */}
          <Card>
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <CardTitle className="text-2xl md:text-3xl font-bold mb-2">
                    {name}
                  </CardTitle>
                  <CardDescription className="text-lg font-medium text-primary">
                    {title}
                  </CardDescription>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {country}
                  </Badge>
                  <Badge variant="outline" className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {personality.birthYear}
                    {personality.deathYear && ` - ${personality.deathYear}`}
                  </Badge>
                  <Badge variant="default">
                    {era}
                  </Badge>
                </div>
              </div>
            </CardHeader>
          </Card>

          {/* Biography */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                {t('personality.biography')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                {biography}
              </p>
            </CardContent>
          </Card>

          {/* Achievements */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                {t('personality.achievements')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{achievement}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Quotes */}
          {quotes.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Quote className="h-5 w-5 text-primary" />
                  {t('personality.quotes')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {quotes.map((quote, index) => (
                    <blockquote
                      key={index}
                      className="border-l-4 border-primary pl-4 italic text-muted-foreground"
                    >
                      "{quote}"
                    </blockquote>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Legacy */}
          <Card>
            <CardHeader>
              <CardTitle>{t('personality.legacy')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                {legacy}
              </p>
            </CardContent>
          </Card>

          {/* Inspiring Lessons */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-primary" />
                {t('personality.inspiringLessons')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {inspiringLessons.map((lesson, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{lesson}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Related Works */}
          {relatedWorks.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>{t('personality.relatedWorks')}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {relatedWorks.map((work, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{work}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </>
  );
}