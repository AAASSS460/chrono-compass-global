import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, MapPin, Sunrise, Sun, Sunset, Moon, Stars, Calendar, Globe, Compass } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface PrayerTimesData {
  Fajr: string;
  Dhuhr: string;
  Asr: string;
  Maghrib: string;
  Isha: string;
  Sunrise: string;
  Sunset: string;
}

interface LocationData {
  city: string;
  country: string;
  latitude: number;
  longitude: number;
}

interface QiblaData {
  direction: number;
  distance: number;
}

export default function PrayerTimes() {
  const { t, i18n } = useTranslation();
  const [prayerTimes, setPrayerTimes] = useState<PrayerTimesData | null>(null);
  const [location, setLocation] = useState<LocationData | null>(null);
  const [qibla, setQibla] = useState<QiblaData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [nextPrayer, setNextPrayer] = useState<{ name: string; time: string; remaining: string } | null>(null);
  const isArabic = i18n.language === 'ar';

  const getCurrentDate = () => {
    const now = new Date();
    const day = now.getDate().toString().padStart(2, '0');
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const year = now.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const calculateNextPrayer = (times: PrayerTimesData) => {
    const now = new Date();
    const currentTime = now.getHours() * 60 + now.getMinutes();
    
    const prayers = [
      { name: 'Fajr', time: times.Fajr, nameAr: 'الفجر' },
      { name: 'Dhuhr', time: times.Dhuhr, nameAr: 'الظهر' },
      { name: 'Asr', time: times.Asr, nameAr: 'العصر' },
      { name: 'Maghrib', time: times.Maghrib, nameAr: 'المغرب' },
      { name: 'Isha', time: times.Isha, nameAr: 'العشاء' }
    ];

    for (const prayer of prayers) {
      const [hours, minutes] = prayer.time.split(':').map(Number);
      const prayerTime = hours * 60 + minutes;
      
      if (prayerTime > currentTime) {
        const remainingMinutes = prayerTime - currentTime;
        const remainingHours = Math.floor(remainingMinutes / 60);
        const remainingMins = remainingMinutes % 60;
        
        return {
          name: isArabic ? prayer.nameAr : prayer.name,
          time: prayer.time,
          remaining: `${remainingHours}:${remainingMins.toString().padStart(2, '0')}`
        };
      }
    }
    
    // If no prayer found today, next is Fajr tomorrow
    const fajrTomorrow = prayers[0];
    const tomorrowFajr = new Date(now);
    tomorrowFajr.setDate(tomorrowFajr.getDate() + 1);
    const [hours, minutes] = fajrTomorrow.time.split(':').map(Number);
    tomorrowFajr.setHours(hours, minutes, 0, 0);
    
    const diffMs = tomorrowFajr.getTime() - now.getTime();
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffMins = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
    
    return {
      name: isArabic ? fajrTomorrow.nameAr : fajrTomorrow.name,
      time: fajrTomorrow.time,
      remaining: `${diffHours}:${diffMins.toString().padStart(2, '0')}`
    };
  };

  const fetchPrayerTimes = async (latitude: number, longitude: number) => {
    try {
      setLoading(true);
      setError(null);
      
      const date = getCurrentDate();
      const response = await fetch(
        `https://api.aladhan.com/v1/timings/${date}?latitude=${latitude}&longitude=${longitude}&method=4`
      );
      
      if (!response.ok) {
        throw new Error('Failed to fetch prayer times');
      }
      
      const data = await response.json();
      const timings = data.data.timings;
      
      const prayerData = {
        Fajr: timings.Fajr,
        Dhuhr: timings.Dhuhr,
        Asr: timings.Asr,
        Maghrib: timings.Maghrib,
        Isha: timings.Isha,
        Sunrise: timings.Sunrise,
        Sunset: timings.Sunset
      };
      
      setPrayerTimes(prayerData);
      setNextPrayer(calculateNextPrayer(prayerData));
      
      // Get Qibla direction
      const qiblaResponse = await fetch(
        `https://api.aladhan.com/v1/qibla/${latitude}/${longitude}`
      );
      
      if (qiblaResponse.ok) {
        const qiblaData = await qiblaResponse.json();
        setQibla({
          direction: Math.round(qiblaData.data.direction),
          distance: Math.round(qiblaData.data.distance || 0)
        });
      }
      
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
          fetchPrayerTimes(24.4676039, 39.6054404);
        }
      );
    } else {
      toast({
        title: 'Geolocation Not Supported',
        description: 'Your browser does not support geolocation.',
        variant: 'destructive'
      });
      // Fallback to Mecca coordinates
      fetchPrayerTimes(24.4676039, 39.6054404);
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

  const getPrayerNameAr = (prayer: string) => {
    switch (prayer) {
      case 'Fajr': return 'الفجر';
      case 'Dhuhr': return 'الظهر';
      case 'Asr': return 'العصر';
      case 'Maghrib': return 'المغرب';
      case 'Isha': return 'العشاء';
      default: return prayer;
    }
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
    <div className="min-h-screen bg-gradient-to-br from-background to-accent/20">
      <div className="container max-w-6xl mx-auto py-12 px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-hover to-accent bg-clip-text text-transparent">
            {isArabic ? 'مواقيت الصلاة' : 'Prayer Times'}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {isArabic 
              ? 'احصل على مواقيت الصلاة الدقيقة لموقعك مع اتجاه القبلة والوقت المتبقي للصلاة القادمة'
              : 'Get accurate prayer times for your location with Qibla direction and countdown to next prayer'
            }
          </p>
        </div>

        {/* Location and Next Prayer Cards */}
        <div className="grid gap-6 md:grid-cols-2 mb-8">
          {/* Location Card */}
          {location && (
            <Card className="shadow-lg border-0 bg-gradient-to-br from-card to-primary/5">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-full bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{isArabic ? 'الموقع الحالي' : 'Current Location'}</h3>
                    <p className="text-muted-foreground">{location.city}, {location.country}</p>
                  </div>
                </div>
                <div className="flex gap-2 text-sm text-muted-foreground">
                  <Badge variant="secondary" className="flex items-center gap-1">
                    <Globe className="h-3 w-3" />
                    {location.latitude.toFixed(4)}°, {location.longitude.toFixed(4)}°
                  </Badge>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Next Prayer Card */}
          {nextPrayer && (
            <Card className="shadow-lg border-0 bg-gradient-to-br from-green-50 to-emerald-100/50 dark:from-green-950/30 dark:to-emerald-900/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-full bg-green-500/10">
                    <Clock className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{isArabic ? 'الصلاة القادمة' : 'Next Prayer'}</h3>
                    <p className="text-2xl font-bold text-green-600">{nextPrayer.name}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{isArabic ? 'الوقت' : 'Time'}</p>
                    <p className="font-semibold">{formatTime(nextPrayer.time)}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">{isArabic ? 'متبقي' : 'Remaining'}</p>
                    <p className="text-xl font-bold text-green-600">{nextPrayer.remaining}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Qibla Direction Card */}
        {qibla && (
          <Card className="mb-8 shadow-lg border-0 bg-gradient-to-br from-amber-50 to-yellow-100/50 dark:from-amber-950/30 dark:to-yellow-900/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-amber-500/10">
                    <Compass className="h-5 w-5 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{isArabic ? 'اتجاه القبلة' : 'Qibla Direction'}</h3>
                    <p className="text-muted-foreground">{isArabic ? 'نحو الكعبة المشرفة' : 'Towards the Holy Kaaba'}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold text-amber-600">{qibla.direction}°</p>
                  <p className="text-sm text-muted-foreground">
                    {qibla.distance > 0 && `${qibla.distance.toLocaleString()} km`}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {loading && (
          <Card className="shadow-lg border-0">
            <CardContent className="p-12 text-center">
              <Clock className="h-12 w-12 animate-spin mx-auto mb-6 text-primary" />
              <h3 className="text-xl font-semibold mb-2">{isArabic ? 'جاري التحميل...' : 'Loading...'}</h3>
              <p className="text-muted-foreground">{isArabic ? 'جاري جلب مواقيت الصلاة' : 'Fetching prayer times'}</p>
            </CardContent>
          </Card>
        )}

        {error && !loading && (
          <Card className="shadow-lg border-0 border-destructive">
            <CardContent className="p-8 text-center">
              <p className="text-destructive mb-6 text-lg">{isArabic ? 'حدث خطأ في جلب البيانات' : 'Error loading data'}</p>
              <Button onClick={requestLocation} variant="outline" className="gap-2">
                <MapPin className="h-4 w-4" />
                {isArabic ? 'إعادة المحاولة' : 'Try Again'}
              </Button>
            </CardContent>
          </Card>
        )}

        {prayerTimes && !loading && (
          <Card className="shadow-xl border-0 bg-gradient-to-br from-card to-accent/10">
            <CardHeader className="pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    <Calendar className="h-6 w-6 text-primary" />
                    {isArabic ? 'مواقيت اليوم' : "Today's Prayer Times"}
                  </CardTitle>
                  <CardDescription className="text-lg mt-2">
                    {new Date().toLocaleDateString(isArabic ? 'ar-SA' : 'en-US', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </CardDescription>
                </div>
                <Badge variant="outline" className="text-sm">
                  {isArabic ? 'طريقة الحساب: أم القرى' : 'Method: Umm al-Qura'}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="pb-8">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {/* Prayer Times */}
                {Object.entries(prayerTimes).filter(([prayer]) => 
                  ['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'].includes(prayer)
                ).map(([prayer, time]) => (
                  <Card key={prayer} className={`border-0 shadow-md hover:shadow-lg transition-all duration-300 ${getPrayerBg(prayer)}`}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          {getPrayerIcon(prayer)}
                          <span className="font-semibold text-lg">
                            {isArabic ? getPrayerNameAr(prayer) : prayer}
                          </span>
                        </div>
                        {nextPrayer?.name === (isArabic ? getPrayerNameAr(prayer) : prayer) && (
                          <Badge variant="default" className="bg-green-500 text-white">
                            {isArabic ? 'القادمة' : 'Next'}
                          </Badge>
                        )}
                      </div>
                      <div className="text-center">
                        <p className="text-3xl font-bold text-primary mb-1">{formatTime(time)}</p>
                        <p className="text-sm text-muted-foreground">{time}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
                
                {/* Sunrise and Sunset */}
                <Card className="border-0 shadow-md bg-gradient-to-br from-orange-50 to-yellow-100/50 dark:from-orange-950/30 dark:to-yellow-900/20">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Sunrise className="h-4 w-4 text-orange-500" />
                          <span className="font-medium">{isArabic ? 'الشروق' : 'Sunrise'}</span>
                        </div>
                        <span className="font-bold text-orange-600">{formatTime(prayerTimes.Sunrise)}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Sunset className="h-4 w-4 text-red-500" />
                          <span className="font-medium">{isArabic ? 'الغروب' : 'Sunset'}</span>
                        </div>
                        <span className="font-bold text-red-600">{formatTime(prayerTimes.Sunset)}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        )}

        {!prayerTimes && !loading && !error && (
          <Card className="shadow-lg border-0">
            <CardContent className="p-12 text-center">
              <MapPin className="h-16 w-16 mx-auto mb-6 text-primary" />
              <h3 className="text-2xl font-semibold mb-4">
                {isArabic ? 'تفعيل الموقع' : 'Enable Location'}
              </h3>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                {isArabic 
                  ? 'اسمح بالوصول إلى موقعك للحصول على مواقيت الصلاة الدقيقة لمنطقتك'
                  : 'Allow location access to get accurate prayer times for your area'
                }
              </p>
              <Button onClick={requestLocation} size="lg" className="gap-2">
                <MapPin className="h-5 w-5" />
                {isArabic ? 'تفعيل الموقع' : 'Enable Location'}
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}