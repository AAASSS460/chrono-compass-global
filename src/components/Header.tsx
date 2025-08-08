import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { LanguageSelector } from './LanguageSelector';
import { Calendar, Calculator, Heart, Clock, BookOpen, Menu, HelpCircle } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export function Header() {
  const { t } = useTranslation();
  const location = useLocation();

  const navLinks = [
    { to: '/date-converter', icon: Calendar, label: t('nav.dateConverter') },
    { to: '/age-calculator', icon: Calculator, label: t('nav.ageCalculator') },
    { to: '/adhkar', icon: Heart, label: t('nav.morningEveningAdhkar') },
    { to: '/prayer-times', icon: Clock, label: t('nav.prayerTimes') },
    { to: '/friday-duas', icon: BookOpen, label: t('nav.fridayDuas') },
    { to: '/islamic-quiz', icon: HelpCircle, label: t('nav.islamicQuiz') },
    { to: '/quran', icon: BookOpen, label: t('nav.quran') },
    { to: '/about', icon: HelpCircle, label: t('nav.about') },
    { to: '/contact', icon: HelpCircle, label: t('nav.contact') },
    { to: '/privacy-policy', icon: HelpCircle, label: t('nav.privacyPolicy') },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-2 font-semibold text-lg">
            <Calendar className="h-6 w-6 text-primary" />
            <span className="hidden sm:inline">ChronoCompass</span>
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <LanguageSelector />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="lg:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[250px] sm:w-[300px]">
              <nav className="flex flex-col gap-2 pt-8">
                {navLinks.map((link) => (
                  <Button
                    key={link.to}
                    asChild
                    variant={location.pathname === link.to ? 'default' : 'ghost'}
                    className="justify-start gap-2"
                  >
                    <Link to={link.to}>
                      <link.icon className="h-4 w-4" />
                      <span>{link.label}</span>
                    </Link>
                  </Button>
                ))}
              </nav>
            </SheetContent>
          </Sheet>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <Button
                key={link.to}
                asChild
                variant={location.pathname === link.to ? 'default' : 'ghost'}
                size="sm"
                className="gap-2"
              >
                <Link to={link.to}>
                  <link.icon className="h-4 w-4" />
                  <span>{link.label}</span>
                </Link>
              </Button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}

