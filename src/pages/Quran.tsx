import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { BookOpen, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

interface Surah {
  number: number;
  name: string;
  englishName: string;
  englishNameTranslation: string;
  numberOfAyahs: number;
  revelationType: string;
}

export default function Quran() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [surahs, setSurahs] = useState<Surah[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchSurahs();
  }, []);

  const fetchSurahs = async () => {
    try {
      const response = await fetch('https://api.alquran.cloud/v1/surah');
      const data = await response.json();
      if (data.code === 200) {
        setSurahs(data.data);
      } else {
        throw new Error('Failed to fetch surahs');
      }
    } catch (error) {
      console.error('Error fetching surahs:', error);
      toast({
        title: t('common.error'),
        description: t('quran.errorFetchingSurahs'),
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSurahClick = (surahNumber: number) => {
    navigate(`/surah/${surahNumber}`);
  };

  const filteredSurahs = surahs.filter((surah) =>
    surah.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    surah.englishName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    surah.englishNameTranslation.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
          {t('quran.title')}
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {t('quran.subtitle')}
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-primary" />
            {t('quran.surahs')}
          </CardTitle>
          <CardDescription>
            {t('quran.totalSurahs', { count: surahs.length })}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder={t('quran.searchSurahs')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {loading ? (
                Array.from({ length: 9 }).map((_, i) => (
                  <Skeleton key={i} className="h-24 w-full" />
                ))
              ) : (
                filteredSurahs.map((surah) => (
                  <Card
                    key={surah.number}
                    className="cursor-pointer transition-all hover:shadow-md hover:bg-accent/50"
                    onClick={() => handleSurahClick(surah.number)}
                  >
                    <CardContent className="p-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <Badge variant="secondary" className="text-xs">
                            {surah.number}
                          </Badge>
                          <Badge
                            variant={surah.revelationType === 'Meccan' ? 'default' : 'secondary'}
                            className="text-xs"
                          >
                            {surah.revelationType === 'Meccan' ? t('quran.meccan') : t('quran.medinan')}
                          </Badge>
                        </div>
                        <div className="text-center">
                          <p className="font-arabic text-lg font-medium">{surah.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {surah.englishName}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {surah.englishNameTranslation}
                          </p>
                        </div>
                        <div className="text-center">
                          <p className="text-xs text-muted-foreground">
                            {t('quran.ayahs', { count: surah.numberOfAyahs })}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}