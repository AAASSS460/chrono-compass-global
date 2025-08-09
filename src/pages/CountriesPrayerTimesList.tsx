import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { citiesData } from '@/data/cities';

export default function CountriesPrayerTimesList() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  // Group cities by country
  const groupedCities = citiesData.reduce((acc, city) => {
    const countryName = isArabic ? city.countryAr : city.country;
    if (!acc[countryName]) {
      acc[countryName] = [];
    }
    acc[countryName].push(city);
    return acc;
  }, {} as Record<string, typeof citiesData>);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-accent/20">
      <div className="container max-w-6xl mx-auto py-12 px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-hover to-accent bg-clip-text text-transparent">
            {isArabic ? 'مواقيت الصلاة حسب الدولة والمدينة' : 'Prayer Times by Country & City'}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {isArabic 
              ? 'اختر دولة ومدينة لعرض مواقيت الصلاة الدقيقة'
              : 'Select a country and city to view accurate prayer times'
            }
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(groupedCities).map(([countryName, cities]) => (
            <Card key={countryName} className="shadow-lg border-0 bg-gradient-to-br from-card to-primary/5">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-primary">{countryName}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {cities.map((city) => (
                    <li key={city.city}>
                      <Link 
                        to={`/prayer-times/${encodeURIComponent(city.country)}/${encodeURIComponent(city.city)}`}
                        className="block p-3 rounded-lg hover:bg-muted transition-colors"
                      >
                        <span className="font-medium">{isArabic ? city.cityAr : city.city}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}