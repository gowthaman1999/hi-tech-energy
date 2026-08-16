import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Safety from './pages/Safety';
import Industries from './pages/Industries';
import Projects from './pages/Projects';
import About from './pages/About';
import FAQ from './pages/FAQ';
import Insights from './pages/Insights';
import Contact from './pages/Contact';
import Testimonials from './pages/Testimonials';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="services/:serviceId" element={<ServiceDetail />} />
          <Route path="solutions-archives/:serviceId" element={<ServiceDetail />} />
          <Route path="safety" element={<Safety />} />
          <Route path="industries" element={<Industries />} />
          <Route path="projects" element={<Projects />} />
          <Route path="success-stories" element={<Projects />} />
          <Route path="about" element={<About />} />
          <Route path="testimonials" element={<Testimonials />} />
          <Route path="careers" element={<Contact />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="insights" element={<Insights />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
