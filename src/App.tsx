import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import HomePage from "./routes/index";
import AboutPage from "./routes/about";
import ContactPage from "./routes/contact";
import ServicesPage from "./routes/services.index";
import ServiceDetailPage from "./routes/services.$slug";
import PoojaPrayerPage from "./routes/pooja-prayer.index";
import PoojaServiceDetailPage from "./routes/pooja-prayer.$slug";
import NotFoundPage from "./routes/not-found";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:slug" element={<ServiceDetailPage />} />
        <Route path="/pooja-prayer" element={<PoojaPrayerPage />} />
        <Route path="/pooja-prayer/:slug" element={<PoojaServiceDetailPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
