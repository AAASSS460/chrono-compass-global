import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { BookOpen, Volume2, ArrowLeft, ArrowRight, Home } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface Ayah {
  number: number;
  text: string;
  numberInSurah: number;
}

interface SurahDetail {
  number: number;
  name: string;
  englishName: string;
  englishNameTranslation: string;
  numberOfAyahs: number;
  revelationType: string;
  ayahs: Ayah[];
}

export default function SurahDetail() {
  const { surahNumber } = useParams<{ surahNumber: string }>();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { toast } = useToast();
  const [surah, setSurah] = useState<SurahDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const ayahsPerPage = 10;

  useEffect(() => {
    if (surahNumber) {
      fetchSurah(parseInt(surahNumber));
    }
  }, [surahNumber]);

  const fetchSurah = async (surahNum: number) => {
    setLoading(true);
    try {
      const response = await fetch(`https://api.alquran.cloud/v1/surah/${surahNum}`);
      const data = await response.json();
      if (data.code === 200) {
        setSurah(data.data);
      } else {
        throw new Error('Failed to fetch surah');
      }
    } catch (error) {
      console.error('Error fetching surah:', error);
      toast({
        title: t('common.error'),
        description: t('quran.errorFetchingSurah'),
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const getPaginatedAyahs = () => {
    if (!surah) return [];
    const startIndex = (currentPage - 1) * ayahsPerPage;
    const endIndex = startIndex + ayahsPerPage;
    return surah.ayahs.slice(startIndex, endIndex);
  };

  const totalPages = surah ? Math.ceil(surah.ayahs.length / ayahsPerPage) : 0;

  const goToPreviousSurah = () => {
    if (surah && surah.number > 1) {
      navigate(`/surah/${surah.number - 1}`);
    }
  };

  const goToNextSurah = () => {
    if (surah && surah.number < 114) {
      navigate(`/surah/${surah.number + 1}`);
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="space-y-6">
          <Skeleton className="h-12 w-3/4" />
          <Skeleton className="h-8 w-1/2" />
          {Array.from({ length: 5 }).map((_, i) => (
            <Skeleton key={i} className="h-20 w-full" />
          ))}
        </div>
      </div>
    );
  }

  if (!surah) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Card className="h-96 flex items-center justify-center">
          <CardContent className="text-center">
            <BookOpen className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <p className="text-lg text-muted-foreground">
              {t('quran.surahNotFound')}
            </p>
            <Button onClick={() => navigate('/quran')} className="mt-4">
              <Home className="h-4 w-4 mr-2" />
              {t('quran.backToQuran')}
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Header */}
      <div className="mb-6">
        <Button
          variant="ghost"
          onClick={() => navigate('/quran')}
          className="mb-4"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          {t('quran.backToQuran')}
        </Button>
        
        <div className="text-center">
          <h1 className="font-arabic text-3xl md:text-4xl font-bold mb-2 text-foreground">
            {surah.name}
          </h1>
          <p className="text-lg text-muted-foreground mb-4">
            {surah.englishName} - {surah.englishNameTranslation}
          </p>
          <div className="flex items-center justify-center gap-4">
            <Badge variant="outline">
              {t('quran.surahNumber', { number: surah.number })}
            </Badge>
            <Badge variant="outline">
              {t('quran.ayahs', { count: surah.numberOfAyahs })}
            </Badge>
            <Badge
              variant={surah.revelationType === 'Meccan' ? 'default' : 'secondary'}
            >
              {surah.revelationType === 'Meccan' ? t('quran.meccan') : t('quran.medinan')}
            </Badge>
          </div>
        </div>
      </div>

      {/* Navigation between surahs */}
      <div className="flex items-center justify-between mb-6">
        <Button
          variant="outline"
          onClick={goToPreviousSurah}
          disabled={surah.number === 1}
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          {t('quran.previousSurah')}
        </Button>
        
        <Button
          variant="outline"
          onClick={goToNextSurah}
          disabled={surah.number === 114}
        >
          {t('quran.nextSurah')}
          <ArrowRight className="h-4 w-4 ml-2" />
        </Button>
      </div>

      {/* Surah Content */}
      <Card>
        <CardContent className="p-6">
          <div className="space-y-6">
            {/* Bismillah for all surahs except Al-Tawbah */}
            {surah.number !== 9 && (
              <div className="text-center p-4 bg-accent/30 rounded-lg">
                <p className="font-arabic text-xl text-primary">
                  بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  {t('quran.bismillah')}
                </p>
              </div>
            )}

            {/* Ayahs */}
            <div className="space-y-4">
              {getPaginatedAyahs().map((ayah) => (
                <Card key={ayah.number} className="bg-card/50">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <Badge variant="outline" className="mt-1">
                        {ayah.numberInSurah}
                      </Badge>
                      <div className="flex-1">
                        <p className="font-arabic text-lg leading-relaxed text-right mb-2">
                          {ayah.text}
                        </p>
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="sm">
                            <Volume2 className="h-4 w-4" />
                          </Button>
                          <span className="text-xs text-muted-foreground">
                            {t('quran.ayah')} {ayah.numberInSurah}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-between mt-6">
                <Button
                  variant="outline"
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  {t('common.previous')}
                </Button>
                
                <span className="text-sm text-muted-foreground">
                  {t('quran.pageOf', { current: currentPage, total: totalPages })}
                </span>
                
                <Button
                  variant="outline"
                  onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                >
                  {t('common.next')}
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

