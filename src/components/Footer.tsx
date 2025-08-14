import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Globe } from 'lucide-react';
import TikTokIcon from './icons/TikTokIcon';
import CookieConsent from 'react-cookie-consent';

export function Footer() {
  const { t } = useTranslation();

  const currentYear = new Date().getFullYear();

  const footerNav = [
    {
      title: t('footer.company'),
      links: [
        { label: t('nav.about'), to: '/about' },
        { label: t('nav.contact'), to: '/contact' },
        { label: t('nav.privacyPolicy'), to: '/privacy-policy' },
      ],
    },
    {
      title: t('footer.tools'),
      links: [
        { label: t('nav.dateConverter'), to: '/date-converter' },
        { label: t('nav.ageCalculator'), to: '/age-calculator' },
        { label: t('nav.morningEveningAdhkar'), to: '/adhkar' },
        { label: t('nav.prayerTimes'), to: '/prayer-times' },
        { label: t('nav.fridayDuas'), to: '/friday-duas' },
        { label: t('nav.islamicQuiz'), to: '/islamic-quiz' },
        { label: t('nav.quran'), to: '/quran' },
        { label: t('nav.countries'), to: '/countries' },
        { label: t('nav.countriesPrayerTimes'), to: '/countries-prayer-times' },
      ],
    },
  ];

  const socialLinks = [
    { icon: TikTokIcon, href: 'https://www.tiktok.com/@aaa_eee70?_t=ZS-8yn7opVapO9&_r=1', label: 'TikTok' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1">
            <Link to="/" className="flex items-center gap-2 font-semibold text-xl text-white mb-4">
              <Globe className="h-8 w-8 text-primary" />
              ChronoCompass
            </Link>
            <p className="text-sm leading-relaxed">
              {t('footer.description')}
            </p>
          </div>

          {/* Navigation Links */}
          {footerNav.map((section, index) => (
            <div key={index} className="col-span-1">
              <h3 className="text-lg font-semibold text-white mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      to={link.to} 
                      className="text-sm hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Social Media */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold text-white mb-4">{t('footer.connect')}</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index} 
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-500">
          &copy; {currentYear} ChronoCompass. {t('footer.allRightsReserved')}
        </div>
      </div>
      <CookieConsent
        location="bottom"
        buttonText={t('cookieConsent.accept')}
        declineButtonText={t('cookieConsent.decline')}
        cookieName="chronoCompassCookieConsent"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        declineButtonStyle={{ margin: "10px 10px 10px 0" }}
        expires={150}
      >
        {t('cookieConsent.message')}{" "}
        <Link to="/privacy-policy" style={{ color: "#F1D600" }}>
          {t('cookieConsent.learnMore')}
        </Link>
      </CookieConsent>
    </footer>
  );
}