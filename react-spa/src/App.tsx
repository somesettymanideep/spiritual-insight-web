import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Services from "./routes/Services";
import ServiceDetail from "./routes/ServiceDetail";
import PoojaList from "./routes/PoojaList";
import PoojaDetail from "./routes/PoojaDetail";
import NotFound from "./routes/NotFound";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
        <Route path="/pooja-prayer" element={<PoojaList />} />
        <Route path="/pooja-prayer/:slug" element={<PoojaDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}
