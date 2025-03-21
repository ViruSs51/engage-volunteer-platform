
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import Auth from "./pages/Auth";
import VolunteerSearch from "./pages/VolunteerSearch";
import EventsVolunteers from "./pages/EventsVolunteers";
import EventDetails from "./pages/EventDetails";
import VolunteerProfile from "./pages/VolunteerProfile";
import CompanyProfile from "./pages/CompanyProfile";
import EventMap from "./pages/EventMap";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/volunteer-search" element={<VolunteerSearch />} />
            <Route path="/events-volunteers" element={<EventsVolunteers />} />
            <Route path="/event/:id" element={<EventDetails />} />
            <Route path="/volunteer/:id" element={<VolunteerProfile />} />
            <Route path="/company/:id" element={<CompanyProfile />} />
            <Route path="/event-map" element={<EventMap />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
