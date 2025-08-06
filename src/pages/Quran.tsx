import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { BookOpen, Volume2, Search, ArrowRight, ArrowLeft } from 'lucide-react';
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

export default function Quran() {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [surahs, setSurahs] = useState<Surah[]>([]);
  const [selectedSurah, setSelectedSurah] = useState<SurahDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [surahLoading, setSurahLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const ayahsPerPage = 10;

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

  const fetchSurah = async (surahNumber: number) => {
    setSurahLoading(true);
    setCurrentPage(1);
    try {
      const response = await fetch(`https://api.alquran.cloud/v1/surah/${surahNumber}`);
      const data = await response.json();
      if (data.code === 200) {
        setSelectedSurah(data.data);
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
      setSurahLoading(false);
    }
  };

  const filteredSurahs = surahs.filter((surah) =>
    surah.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    surah.englishName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    surah.englishNameTranslation.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getPaginatedAyahs = () => {
    if (!selectedSurah) return [];
    const startIndex = (currentPage - 1) * ayahsPerPage;
    const endIndex = startIndex + ayahsPerPage;
    return selectedSurah.ayahs.slice(startIndex, endIndex);
  };

  const totalPages = selectedSurah ? Math.ceil(selectedSurah.ayahs.length / ayahsPerPage) : 0;

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
          {t('quran.title')}
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {t('quran.subtitle')}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Surahs List */}
        <div className="lg:col-span-1">
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

                <div className="max-h-96 overflow-y-auto space-y-2">
                  {loading ? (
                    Array.from({ length: 6 }).map((_, i) => (
                      <Skeleton key={i} className="h-16 w-full" />
                    ))
                  ) : (
                    filteredSurahs.map((surah) => (
                      <Card
                        key={surah.number}
                        className={`cursor-pointer transition-all hover:shadow-md ${
                          selectedSurah?.number === surah.number
                            ? 'bg-primary/10 border-primary'
                            : 'hover:bg-accent/50'
                        }`}
                        onClick={() => fetchSurah(surah.number)}
                      >
                        <CardContent className="p-3">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <Badge variant="secondary" className="text-xs">
                                {surah.number}
                              </Badge>
                              <div>
                                <p className="font-arabic text-sm font-medium">{surah.name}</p>
                                <p className="text-xs text-muted-foreground">
                                  {surah.englishName}
                                </p>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="text-xs text-muted-foreground">
                                {t('quran.ayahs', { count: surah.numberOfAyahs })}
                              </p>
                              <Badge
                                variant={surah.revelationType === 'Meccan' ? 'default' : 'secondary'}
                                className="text-xs"
                              >
                                {surah.revelationType === 'Meccan' ? t('quran.meccan') : t('quran.medinan')}
                              </Badge>
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

        {/* Surah Content */}
        <div className="lg:col-span-2">
          {selectedSurah ? (
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="font-arabic text-xl">
                      {selectedSurah.name}
                    </CardTitle>
                    <CardDescription>
                      {selectedSurah.englishName} - {selectedSurah.englishNameTranslation}
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">
                      {t('quran.ayahs', { count: selectedSurah.numberOfAyahs })}
                    </Badge>
                    <Badge
                      variant={selectedSurah.revelationType === 'Meccan' ? 'default' : 'secondary'}
                    >
                      {selectedSurah.revelationType === 'Meccan' ? t('quran.meccan') : t('quran.medinan')}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {surahLoading ? (
                  <div className="space-y-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Skeleton key={i} className="h-20 w-full" />
                    ))}
                  </div>
                ) : (
                  <div className="space-y-6">
                    {/* Bismillah for all surahs except Al-Tawbah */}
                    {selectedSurah.number !== 9 && (
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
                )}
              </CardContent>
            </Card>
          ) : (
            <Card className="h-96 flex items-center justify-center">
              <CardContent className="text-center">
                <BookOpen className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <p className="text-lg text-muted-foreground">
                  {t('quran.selectSurah')}
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  {t('quran.selectSurahDescription')}
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}