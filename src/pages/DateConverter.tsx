import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '@/i18n';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowRight, Calendar, RotateCcw } from 'lucide-react';
import {
  hijriToGregorian,
  gregorianToHijri,
  getCurrentHijriDate,
  getCurrentGregorianDate,
  formatDate,
  formatNumericDate,
  isValidDate,
  type HijriDate,
  type GregorianDate
} from '@/utils/dateUtils';
import { toast } from '@/hooks/use-toast';

export default function DateConverter() {
  const { t } = useTranslation();

  // Hijri to Gregorian conversion state
  const [hijriInput, setHijriInput] = useState<HijriDate>(getCurrentHijriDate());
  const [gregorianResult, setGregorianResult] = useState<GregorianDate | null>(null);

  // Gregorian to Hijri conversion state
  const [gregorianInput, setGregorianInput] = useState<GregorianDate>(getCurrentGregorianDate());
  const [hijriResult, setHijriResult] = useState<HijriDate | null>(null);

  const handleHijriToGregorian = () => {
    if (!isValidDate(hijriInput.day, hijriInput.month, hijriInput.year)) {
      toast({
        title: t('common.error'),
        description: t('dateConverter.invalidDate'),
        variant: "destructive"
      });
      setGregorianResult(null);
      return;
    }

    try {
      const result = hijriToGregorian(hijriInput);
      setGregorianResult(result);
      toast({
        title: t('common.result'),
        description: `${formatDate(result, i18n.language, 'gregorian')} ${t('dateConverter.gregorianDate')}`
      });
    } catch (error) {
      console.error("Error during Hijri to Gregorian conversion:", error);
      toast({
        title: t('common.error'),
        description: t('dateConverter.conversionError'),
        variant: "destructive"
      });
      setGregorianResult(null);
    }
  };

  const handleGregorianToHijri = () => {
    if (!isValidDate(gregorianInput.day, gregorianInput.month, gregorianInput.year)) {
      toast({
        title: t('common.error'),
        description: t('dateConverter.invalidDate'),
        variant: "destructive"
      });
      setHijriResult(null);
      return;
    }

    try {
      const result = gregorianToHijri(gregorianInput);
      setHijriResult(result);
      toast({
        title: t('common.result'),
        description: `${formatDate(result, i18n.language, 'hijri')} ${t('dateConverter.hijriDate')}`
      });
    } catch (error) {
      console.error("Error during Gregorian to Hijri conversion:", error);
      toast({
        title: t('common.error'),
        description: t('dateConverter.conversionError'),
        variant: "destructive"
      });
      setHijriResult(null);
    }
  };

  const resetHijriToGregorian = () => {
    setHijriInput(getCurrentHijriDate());
    setGregorianResult(null);
  };

  const resetGregorianToHijri = () => {
    setGregorianInput(getCurrentGregorianDate());
    setHijriResult(null);
  };

  const updateHijriInput = (field: keyof HijriDate, value: string) => {
    const numValue = parseInt(value) || 0;
    setHijriInput(prev => ({ ...prev, [field]: numValue }));
  };

  const updateGregorianInput = (field: keyof GregorianDate, value: string) => {
    const numValue = parseInt(value) || 0;
    setGregorianInput(prev => ({ ...prev, [field]: numValue }));
  };

  return (
    <div className="container mx-auto p-4 md:p-8 max-w-4xl">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-primary mb-4">{t('dateConverter.title')}</h1>
        <p className="text-xl text-muted-foreground">{t('dateConverter.subtitle')}</p>
      </div>

      <Tabs defaultValue="hijri-to-gregorian" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="hijri-to-gregorian">{t('dateConverter.convertToGregorian')}</TabsTrigger>
          <TabsTrigger value="gregorian-to-hijri">{t('dateConverter.convertToHijri')}</TabsTrigger>
        </TabsList>

        <TabsContent value="hijri-to-gregorian">
          <Card className="shadow-lg border-0 bg-gradient-to-br from-card to-secondary/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                {t('dateConverter.convertToGregorian')}
              </CardTitle>
              <CardDescription>
                {t('dateConverter.enterHijriDate')}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="hijri-day">{t('common.day')}</Label>
                  <Input
                    id="hijri-day"
                    type="number"
                    min="1"
                    max="31"
                    value={hijriInput.day}
                    onChange={(e) => updateHijriInput('day', e.target.value)}
                    className="text-center"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="hijri-month">{t('common.month')}</Label>
                  <Input
                    id="hijri-month"
                    type="number"
                    min="1"
                    max="12"
                    value={hijriInput.month}
                    onChange={(e) => updateHijriInput('month', e.target.value)}
                    className="text-center"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="hijri-year">{t('common.year')}</Label>
                  <Input
                    id="hijri-year"
                    type="number"
                    min="1"
                    value={hijriInput.year}
                    onChange={(e) => updateHijriInput('year', e.target.value)}
                    className="text-center"
                  />
                </div>
              </div>

              <div className="flex gap-3 flex-wrap">
                <Button onClick={handleHijriToGregorian} className="flex-1 gap-2">
                  {t('common.convert')}
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button variant="outline" onClick={resetHijriToGregorian} className="gap-2">
                  <RotateCcw className="h-4 w-4" />
                  {t('common.reset')}
                </Button>
              </div>

              {gregorianResult && (
                <div className="space-y-4">
                  <Card className="bg-secondary border-secondary-foreground/20">
                    <CardContent className="pt-6">
                      <div className="text-center">
                        <p className="text-sm text-muted-foreground mb-2">
                          {t('dateConverter.gregorianDate')}
                        </p>
                        <p className="text-2xl font-bold text-secondary-foreground">
                          {formatDate(gregorianResult, i18n.language, 'gregorian')}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-primary/5 border-primary/20">
                    <CardContent className="pt-6">
                      <div className="text-center">
                        <p className="text-sm text-muted-foreground mb-2">
                          {t('dateConverter.numericResult')}
                        </p>
                        <p className="text-lg font-mono text-primary">
                          {formatNumericDate(gregorianResult, i18n.language)}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="gregorian-to-hijri">
          <Card className="shadow-lg border-0 bg-gradient-to-br from-card to-secondary/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                {t('dateConverter.convertToHijri')}
              </CardTitle>
              <CardDescription>
                {t('dateConverter.enterGregorianDate')}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="gregorian-day">{t('common.day')}</Label>
                  <Input
                    id="gregorian-day"
                    type="number"
                    min="1"
                    max="31"
                    value={gregorianInput.day}
                    onChange={(e) => updateGregorianInput('day', e.target.value)}
                    className="text-center"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="gregorian-month">{t('common.month')}</Label>
                  <Input
                    id="gregorian-month"
                    type="number"
                    min="1"
                    max="12"
                    value={gregorianInput.month}
                    onChange={(e) => updateGregorianInput('month', e.target.value)}
                    className="text-center"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="gregorian-year">{t('common.year')}</Label>
                  <Input
                    id="gregorian-year"
                    type="number"
                    min="1"
                    value={gregorianInput.year}
                    onChange={(e) => updateGregorianInput('year', e.target.value)}
                    className="text-center"
                  />
                </div>
              </div>

              <div className="flex gap-3 flex-wrap">
                <Button onClick={handleGregorianToHijri} className="flex-1 gap-2">
                  {t('common.convert')}
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button variant="outline" onClick={resetGregorianToHijri} className="gap-2">
                  <RotateCcw className="h-4 w-4" />
                  {t('common.reset')}
                </Button>
              </div>

              {hijriResult && (
                <div className="space-y-4">
                  <Card className="bg-secondary border-secondary-foreground/20">
                    <CardContent className="pt-6">
                      <div className="text-center">
                        <p className="text-sm text-muted-foreground mb-2">
                          {t('dateConverter.hijriDate')}
                        </p>
                        <p className="text-2xl font-bold text-secondary-foreground">
                          {formatDate(hijriResult, i18n.language, 'hijri')}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-primary/5 border-primary/20">
                    <CardContent className="pt-6">
                      <div className="text-center">
                        <p className="text-sm text-muted-foreground mb-2">
                          {t('dateConverter.numericResult')}
                        </p>
                        <p className="text-lg font-mono text-primary">
                          {formatNumericDate(hijriResult, i18n.language)}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

