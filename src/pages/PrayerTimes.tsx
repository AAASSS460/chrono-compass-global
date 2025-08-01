import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock, MapPin, Sunrise, Sun, Sunset, Moon, Stars } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface PrayerTimesData {
  Fajr: string;
  Dhuhr: string;
  Asr: string;
  Maghrib: string;
  Isha: string;
}

interface LocationData {
  city: string;
  country: string;
  latitude: number;
  longitude: number;
}

export default function PrayerTimes() {
  const { t } = useTranslation();
  const [prayerTimes, setPrayerTimes] = useState<PrayerTimesData | null>(null);
  const [location, setLocation] = useState<LocationData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getCurrentDate = () => {
    const now = new Date();
    const day = now.getDate().toString().padStart(2, '0');
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const year = now.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const fetchPrayerTimes = async (latitude: number, longitude: number) => {
    try {
      setLoading(true);
      setError(null);
      
      const date = getCurrentDate();
      const response = await fetch(
        `https://api.aladhan.com/v1/timings/${date}?latitude=${latitude}&longitude=${longitude}&method=2`
      );
      
      if (!response.ok) {
        throw new Error('Failed to fetch prayer times');
      }
      
      const data = await response.json();
      const timings = data.data.timings;
      
      setPrayerTimes({
        Fajr: timings.Fajr,
        Dhuhr: timings.Dhuhr,
        Asr: timings.Asr,
        Maghrib: timings.Maghrib,
        Isha: timings.Isha
      });
      
      // Get location info
      const locationResponse = await fetch(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
      );
      
      if (locationResponse.ok) {
        const locationData = await locationResponse.json();
        setLocation({
          city: locationData.city || locationData.locality || 'Unknown',
          country: locationData.countryName || 'Unknown',
          latitude,
          longitude
        });
      }
      
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      toast({
        title: t('prayer.error'),
        description: 'Failed to load prayer times. Please try again.',
        variant: 'destructive'
      });
    } finally {
      setLoading(false);
    }
  };

  const requestLocation = () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchPrayerTimes(latitude, longitude);
        },
        (error) => {
          console.error('Geolocation error:', error);
          toast({
            title: 'Location Error',
            description: 'Unable to get your location. Please enable location services.',
            variant: 'destructive'
          });
          // Fallback to Mecca coordinates
          fetchPrayerTimes(21.3891, 39.8579);
        }
      );
    } else {
      toast({
        title: 'Geolocation Not Supported',
        description: 'Your browser does not support geolocation.',
        variant: 'destructive'
      });
      // Fallback to Mecca coordinates
      fetchPrayerTimes(21.3891, 39.8579);
    }
  };

  useEffect(() => {
    // Auto-request location on component mount
    requestLocation();
  }, []);

  const formatTime = (time: string) => {
    const [hours, minutes] = time.split(':');
    const hour24 = parseInt(hours);
    const hour12 = hour24 === 0 ? 12 : hour24 > 12 ? hour24 - 12 : hour24;
    const ampm = hour24 >= 12 ? 'PM' : 'AM';
    return `${hour12}:${minutes} ${ampm}`;
  };

  const getPrayerIcon = (prayer: string) => {
    switch (prayer) {
      case 'Fajr':
        return <Sunrise className="h-5 w-5 text-orange-400" />;
      case 'Dhuhr':
        return <Sun className="h-5 w-5 text-yellow-500" />;
      case 'Asr':
        return <Sun className="h-5 w-5 text-orange-500" />;
      case 'Maghrib':
        return <Sunset className="h-5 w-5 text-red-500" />;
      case 'Isha':
        return <Stars className="h-5 w-5 text-purple-500" />;
      default:
        return <Clock className="h-5 w-5 text-primary" />;
    }
  };

  const getPrayerBg = (prayer: string) => {
    switch (prayer) {
      case 'Fajr':
        return 'bg-gradient-to-br from-orange-50 to-orange-100/50 dark:from-orange-950/30 dark:to-orange-900/20';
      case 'Dhuhr':
        return 'bg-gradient-to-br from-yellow-50 to-yellow-100/50 dark:from-yellow-950/30 dark:to-yellow-900/20';
      case 'Asr':
        return 'bg-gradient-to-br from-orange-50 to-orange-100/50 dark:from-orange-950/30 dark:to-orange-900/20';
      case 'Maghrib':
        return 'bg-gradient-to-br from-red-50 to-red-100/50 dark:from-red-950/30 dark:to-red-900/20';
      case 'Isha':
        return 'bg-gradient-to-br from-purple-50 to-purple-100/50 dark:from-purple-950/30 dark:to-purple-900/20';
      default:
        return 'bg-gradient-to-br from-card to-accent/5';
    }
  };

  return (
    <div className="container max-w-4xl mx-auto py-8 px-4">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent">
          {t('prayer.title')}
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {t('prayer.subtitle')}
        </p>
      </div>

      {location && (
        <Card className="mb-6 shadow-md border-0 bg-gradient-to-br from-card to-primary/5">
          <CardContent className="p-4">
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 text-primary" />
              <span>{location.city}, {location.country}</span>
            </div>
          </CardContent>
        </Card>
      )}

      {loading && (
        <Card className="shadow-md border-0">
          <CardContent className="p-8 text-center">
            <Clock className="h-8 w-8 animate-spin mx-auto mb-4 text-primary" />
            <p className="text-muted-foreground">{t('prayer.loading')}</p>
          </CardContent>
        </Card>
      )}

      {error && !loading && (
        <Card className="shadow-md border-0 border-destructive">
          <CardContent className="p-6 text-center">
            <p className="text-destructive mb-4">{t('prayer.error')}</p>
            <Button onClick={requestLocation} variant="outline" className="gap-2">
              <MapPin className="h-4 w-4" />
              {t('prayer.enableLocation')}
            </Button>
          </CardContent>
        </Card>
      )}

      {prayerTimes && !loading && (
        <Card className="shadow-lg border-0 bg-gradient-to-br from-card to-accent/10">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              {t('prayer.today')}
            </CardTitle>
            <CardDescription>
              {new Date().toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {Object.entries(prayerTimes).map(([prayer, time]) => (
                <Card key={prayer} className={`border-0 shadow-sm ${getPrayerBg(prayer)}`}>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {getPrayerIcon(prayer)}
                        <span className="font-medium">{t(`prayer.${prayer.toLowerCase()}`)}</span>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-primary">{formatTime(time)}</p>
                        <p className="text-xs text-muted-foreground">{time}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {!prayerTimes && !loading && !error && (
        <Card className="shadow-md border-0">
          <CardContent className="p-8 text-center">
            <MapPin className="h-12 w-12 mx-auto mb-4 text-primary" />
            <h3 className="text-lg font-semibold mb-2">{t('prayer.enableLocation')}</h3>
            <p className="text-muted-foreground mb-4">
              Allow location access to get accurate prayer times for your area
            </p>
            <Button onClick={requestLocation} className="gap-2">
              <MapPin className="h-4 w-4" />
              {t('prayer.enableLocation')}
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}