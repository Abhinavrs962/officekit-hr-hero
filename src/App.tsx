import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AboutUs from "./pages/AboutUs";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import RecruitmentManagement from "./pages/features/RecruitmentManagement";
import Blog from "./pages/resources/Blog";
import FutureOfHRTech from "./pages/resources/blog/FutureOfHRTech";
import RemoteWorkBestPractices from "./pages/resources/blog/RemoteWorkBestPractices";
import EmployeeOnboardingGuide from "./pages/resources/blog/EmployeeOnboardingGuide";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/features/recruitment-management" element={<RecruitmentManagement />} />
          <Route path="/resources/blog" element={<Blog />} />
          <Route path="/resources/blog/future-of-hr-tech" element={<FutureOfHRTech />} />
          <Route path="/resources/blog/remote-work-best-practices" element={<RemoteWorkBestPractices />} />
          <Route path="/resources/blog/employee-onboarding-guide" element={<EmployeeOnboardingGuide />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
