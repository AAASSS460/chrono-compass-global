import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { LanguageSelector } from './LanguageSelector';
import { Calendar, Calculator, Heart, Clock, BookOpen } from 'lucide-react';

export function Header() {
  const { t } = useTranslation();
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-2 font-semibold text-lg">
            <Calendar className="h-6 w-6 text-primary" />
            <span className="hidden sm:inline">DateConverter</span>
          </Link>
          
          <nav className="flex items-center gap-2">
            <Button
              asChild
              variant={location.pathname === '/' ? 'default' : 'ghost'}
              size="sm"
              className="gap-2"
            >
              <Link to="/">
                <Calendar className="h-4 w-4" />
                <span className="hidden sm:inline">{t('nav.dateConverter')}</span>
              </Link>
            </Button>
            
            <Button
              asChild
              variant={location.pathname === '/age-calculator' ? 'default' : 'ghost'}
              size="sm"
              className="gap-2"
            >
              <Link to="/age-calculator">
                <Calculator className="h-4 w-4" />
                <span className="hidden sm:inline">{t('nav.ageCalculator')}</span>
              </Link>
            </Button>
            
            <Button
              asChild
              variant={location.pathname === '/adhkar' ? 'default' : 'ghost'}
              size="sm"
              className="gap-2"
            >
              <Link to="/adhkar">
                <Heart className="h-4 w-4" />
                <span className="hidden sm:inline">{t('nav.morningEveningAdhkar')}</span>
              </Link>
            </Button>
            
            <Button
              asChild
              variant={location.pathname === '/prayer-times' ? 'default' : 'ghost'}
              size="sm"
              className="gap-2"
            >
              <Link to="/prayer-times">
                <Clock className="h-4 w-4" />
                <span className="hidden sm:inline">{t('nav.prayerTimes')}</span>
              </Link>
            </Button>
            
            <Button
              asChild
              variant={location.pathname === '/friday-duas' ? 'default' : 'ghost'}
              size="sm"
              className="gap-2"
            >
              <Link to="/friday-duas">
                <BookOpen className="h-4 w-4" />
                <span className="hidden sm:inline">{t('nav.fridayDuas')}</span>
              </Link>
            </Button>
          </nav>
        </div>
        
        <LanguageSelector />
      </div>
    </header>
  );
}