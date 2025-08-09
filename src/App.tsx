import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Index from "./pages/Index";
import DateConverter from "./pages/DateConverter";
import AgeCalculator from "./pages/AgeCalculator";
import MorningEveningAdhkar from "./pages/MorningEveningAdhkar";
import PrayerTimes from "./pages/PrayerTimes";
import FridayDuas from "./pages/FridayDuas";
import IslamicQuiz from "./pages/IslamicQuiz";
import Quran from "./pages/Quran";
import SurahDetail from "./pages/SurahDetail";
import Countries from "./pages/Countries";
import CountryDetail from "./pages/CountryDetail";
import PersonalityDetail from "./pages/PersonalityDetail";
import StoryDetail from "./pages/StoryDetail";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import NotFound from "./pages/NotFound";
import CountryPrayerTimes from "./pages/CountryPrayerTimes";
import CountriesPrayerTimesList from "./pages/CountriesPrayerTimesList";
import AsmaulHusna from "./pages/AsmaulHusna";
import HisnulMuslim from "./pages/HisnulMuslim";
import "./i18n";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen bg-background flex flex-col">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/date-converter" element={<DateConverter />} />
              <Route path="/age-calculator" element={<AgeCalculator />} />
              <Route path="/adhkar" element={<MorningEveningAdhkar />} />
              <Route path="/prayer-times" element={<PrayerTimes />} />
              <Route path="/friday-duas" element={<FridayDuas />} />
              <Route path="/islamic-quiz" element={<IslamicQuiz />} />
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
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;


