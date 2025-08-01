import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "@/components/Header";
import DateConverter from "./pages/DateConverter";
import AgeCalculator from "./pages/AgeCalculator";
import MorningEveningAdhkar from "./pages/MorningEveningAdhkar";
import PrayerTimes from "./pages/PrayerTimes";
import FridayDuas from "./pages/FridayDuas";
import NotFound from "./pages/NotFound";
import "./i18n";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen bg-background">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<DateConverter />} />
              <Route path="/age-calculator" element={<AgeCalculator />} />
              <Route path="/adhkar" element={<MorningEveningAdhkar />} />
              <Route path="/prayer-times" element={<PrayerTimes />} />
              <Route path="/friday-duas" element={<FridayDuas />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
