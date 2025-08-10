import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import hisnulMuslimData from '@/data/hisnulMuslimData';

export default function HisnulMuslim() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';
  const [searchTerm, setSearchTerm] = useState('');

  const duaTitles = Object.keys(hisnulMuslimData);

  const filteredTitles = duaTitles.filter(title =>
    title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-accent/20">
      <div className="container max-w-6xl mx-auto py-12 px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-hover to-accent bg-clip-text text-transparent">
            {isArabic ? 'حصن المسلم' : 'Hisnul Muslim'}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {isArabic
              ? 'مجموعة من الأدعية والأذكار من القرآن والسنة النبوية.'
              : 'A collection of supplications and remembrances from the Quran and Sunnah.'}
          </p>
        </div>

        <div className="mb-8 relative">
          <Input
            type="text"
            placeholder={isArabic ? 'ابحث عن عنوان دعاء...' : 'Search for a dua title...'}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-2 rounded-lg w-full"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredTitles.map((title, index) => (
            <Link key={index} to={`/hisnul-muslim/${encodeURIComponent(title)}`}>
              <Card className="shadow-lg border-0 bg-gradient-to-br from-card to-primary/5 hover:shadow-primary/20 transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-primary text-center">
                    {title}
                  </CardTitle>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
