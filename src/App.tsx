import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./i18n";
import { HelmetProvider } from "react-helmet-async";

const Index = lazy(() => import("./pages/Index"));
const DateConverter = lazy(() => import("./pages/DateConverter"));
const AgeCalculator = lazy(() => import("./pages/AgeCalculator"));
const MorningEveningAdhkar = lazy(() => import("./pages/MorningEveningAdhkar"));
const PrayerTimes = lazy(() => import("./pages/PrayerTimes"));
const FridayDuas = lazy(() => import("./pages/FridayDuas"));
const IslamicQuiz = lazy(() => import("./pages/IslamicQuiz"));
const SmartIslamicQuiz = lazy(() => import("./pages/SmartIslamicQuiz"));
const Quran = lazy(() => import("./pages/Quran"));
const SurahDetail = lazy(() => import("./pages/SurahDetail"));
const Countries = lazy(() => import("./pages/Countries"));
const CountryDetail = lazy(() => import("./pages/CountryDetail"));
const PersonalityDetail = lazy(() => import("./pages/PersonalityDetail"));
const StoryDetail = lazy(() => import("./pages/StoryDetail"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const NotFound = lazy(() => import("./pages/NotFound"));
const CountryPrayerTimes = lazy(() => import("./pages/CountryPrayerTimes"));
const CountriesPrayerTimesList = lazy(() => import("./pages/CountriesPrayerTimesList"));
const AsmaulHusna = lazy(() => import("./pages/AsmaulHusna"));
const HisnulMuslim = lazy(() => import("./pages/HisnulMuslim"));
const DuaDetail = lazy(() => import("./pages/DuaDetail"));

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <div className="min-h-screen bg-background flex flex-col">
          <Header />
          <main className="flex-grow">
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/date-converter" element={<DateConverter />} />
                <Route path="/age-calculator" element={<AgeCalculator />} />
                <Route path="/adhkar" element={<MorningEveningAdhkar />} />
                <Route path="/prayer-times" element={<PrayerTimes />} />
                <Route path="/friday-duas" element={<FridayDuas />} />
                <Route path="/islamic-quiz" element={<IslamicQuiz />} />
                <Route path="/smart-islamic-quiz" element={<SmartIslamicQuiz />} />
                <Route path="/quran" element={<Quran />} />
                <Route path="/surah/:surahNumber" element={<SurahDetail />} />
                <Route path="/countries" element={<Countries />} />
                <Route path="/country/:countryId" element={<CountryDetail />} />
                <Route path="/personality/:countryId/:personalityIndex" element={<PersonalityDetail />} />
                <Route path="/story/:countryId/:storyIndex" element={<StoryDetail />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/prayer-times/:country/:city" element={<CountryPrayerTimes />} />
                <Route path="/countries-prayer-times" element={<CountriesPrayerTimesList />} />
                <Route path="/asmaul-husna" element={<AsmaulHusna />} />
                <Route path="/hisnul-muslim" element={<HisnulMuslim />} />
                <Route path="/hisnul-muslim/:title" element={<DuaDetail />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
