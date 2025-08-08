import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { LanguageSelector } from './LanguageSelector';
import { Calendar, Calculator, Heart, Clock, BookOpen, Menu, HelpCircle, Globe, FileText, Mail } from 'lucide-react';
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
    { to: '/countries', icon: Globe, label: t('nav.countries') },
    { to: '/about', icon: HelpCircle, label: t('nav.about') },
    { to: '/contact', icon: Mail, label: t('nav.contact') },
    { to: '/privacy-policy', icon: FileText, label: t('nav.privacyPolicy') },
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
          
          {/* Mobile Menu - Now shown on all screen sizes */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[320px]">
              <div className="flex flex-col h-full">
                {/* Header in menu */}
                <div className="border-b pb-4 mb-4">
                  <h2 className="text-lg font-semibold text-primary">القائمة الرئيسية</h2>
                  <p className="text-sm text-muted-foreground">أدوات إسلامية شاملة</p>
                </div>
                
                {/* Navigation Links */}
                <nav className="flex flex-col gap-1 flex-1 overflow-y-auto">
                  {navLinks.map((link) => (
                    <Button
                      key={link.to}
                      asChild
                      variant={location.pathname === link.to ? 'default' : 'ghost'}
                      className="justify-start gap-3 h-12"
                    >
                      <Link to={link.to}>
                        <link.icon className="h-5 w-5" />
                        <span className="text-sm">{link.label}</span>
                      </Link>
                    </Button>
                  ))}
                </nav>
                
                {/* Footer in menu */}
                <div className="border-t pt-4 mt-4">
                  <p className="text-xs text-muted-foreground text-center">
                    منصة ChronoCompass
                  </p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

