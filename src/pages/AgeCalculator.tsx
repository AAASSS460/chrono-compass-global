import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calculator, Calendar, RotateCcw, Gift } from 'lucide-react';
import { calculateAge, type Age } from '@/utils/dateUtils';
import { toast } from '@/hooks/use-toast';

export default function AgeCalculator() {
  const { t } = useTranslation();
  
  const [birthDate, setBirthDate] = useState('');
  const [currentDate, setCurrentDate] = useState(new Date().toISOString().split('T')[0]);
  const [age, setAge] = useState<Age | null>(null);

  const handleCalculateAge = () => {
    if (!birthDate) {
      toast({
        title: t('common.error'),
        description: t('ageCalculator.birthDateRequired'),
        variant: "destructive"
      });
      return;
    }

    const birth = new Date(birthDate);
    const current = new Date(currentDate);

    if (birth > current) {
      toast({
        title: t('common.error'),
        description: t('ageCalculator.futureDate'),
        variant: "destructive"
      });
      return;
    }

    try {
      const calculatedAge = calculateAge(birth, current);
      setAge(calculatedAge);
      toast({
        title: t('common.result'),
        description: `${calculatedAge.years} ${t('ageCalculator.years')}, ${calculatedAge.months} ${t('ageCalculator.months')}, ${calculatedAge.days} ${t('ageCalculator.days')}`
      });
    } catch (error) {
      toast({
        title: t('common.error'),
        description: t('ageCalculator.calculationError'),
        variant: "destructive"
      });
    }
  };

  const resetCalculator = () => {
    setBirthDate('');
    setCurrentDate(new Date().toISOString().split('T')[0]);
    setAge(null);
  };

  const setToday = () => {
    setCurrentDate(new Date().toISOString().split('T')[0]);
  };

  return (
    <div className="container max-w-4xl mx-auto py-8 px-4">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent">
          {t('ageCalculator.title')}
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {t('ageCalculator.subtitle')}
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Input Card */}
        <Card className="shadow-lg border-0 bg-gradient-to-br from-card to-accent/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calculator className="h-5 w-5 text-primary" />
              {t('ageCalculator.title')}
            </CardTitle>
            <CardDescription>
              {t('ageCalculator.enterBirthDate')}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="birth-date">{t('ageCalculator.birthDate')}</Label>
                <Input
                  id="birth-date"
                  type="date"
                  value={birthDate}
                  onChange={(e) => setBirthDate(e.target.value)}
                  max={new Date().toISOString().split('T')[0]}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="current-date" className="flex items-center gap-2">
                  {t('ageCalculator.currentDate')}
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={setToday}
                    className="h-6 px-2 text-xs"
                  >
                    {t('common.today')}
                  </Button>
                </Label>
                <Input
                  id="current-date"
                  type="date"
                  value={currentDate}
                  onChange={(e) => setCurrentDate(e.target.value)}
                />
              </div>
            </div>

            <div className="flex gap-3 flex-wrap">
              <Button onClick={handleCalculateAge} className="flex-1 gap-2">
                <Calculator className="h-4 w-4" />
                {t('common.calculate')}
              </Button>
              <Button variant="outline" onClick={resetCalculator} className="gap-2">
                <RotateCcw className="h-4 w-4" />
                {t('common.reset')}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Results Card */}
        {age && (
          <Card className="shadow-lg border-0 bg-gradient-to-br from-primary-light to-accent/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                {t('ageCalculator.yourAge')}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Main Age Display */}
              <div className="text-center p-6 bg-card rounded-lg border">
                <p className="text-sm text-muted-foreground mb-2">{t('ageCalculator.yourAge')}</p>
                <div className="flex justify-center items-center gap-4 text-2xl font-bold">
                  <div className="text-center">
                    <div className="text-primary">{age.years}</div>
                    <div className="text-xs text-muted-foreground">{t('ageCalculator.years')}</div>
                  </div>
                  <div className="text-muted-foreground">:</div>
                  <div className="text-center">
                    <div className="text-primary">{age.months}</div>
                    <div className="text-xs text-muted-foreground">{t('ageCalculator.months')}</div>
                  </div>
                  <div className="text-muted-foreground">:</div>
                  <div className="text-center">
                    <div className="text-primary">{age.days}</div>
                    <div className="text-xs text-muted-foreground">{t('ageCalculator.days')}</div>
                  </div>
                </div>
              </div>

              {/* Additional Statistics */}
              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-secondary/50">
                  <CardContent className="pt-4 text-center">
                    <p className="text-2xl font-bold text-secondary-foreground">
                      {age.totalDays.toLocaleString()}
                    </p>
                    <p className="text-sm text-muted-foreground">{t('ageCalculator.totalDays')}</p>
                  </CardContent>
                </Card>

                <Card className="bg-accent/50">
                  <CardContent className="pt-4 text-center">
                    <p className="text-2xl font-bold text-accent-foreground">
                      {age.totalMonths.toLocaleString()}
                    </p>
                    <p className="text-sm text-muted-foreground">{t('ageCalculator.totalMonths')}</p>
                  </CardContent>
                </Card>
              </div>

              {/* Next Birthday */}
              <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
                <CardContent className="pt-4">
                  <div className="flex items-center gap-3">
                    <Gift className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-semibold text-primary">{t('ageCalculator.nextBirthday')}</p>
                      <p className="text-sm text-muted-foreground">
                        {age.daysUntilBirthday} {t('ageCalculator.daysUntilBirthday')}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {age.nextBirthday.toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}