import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';

// Lazy-loaded secondary pages for maximum initial load performance
const Services = lazy(() => import('./pages/Services'));
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'));
const Safety = lazy(() => import('./pages/Safety'));
const Industries = lazy(() => import('./pages/Industries'));
const Projects = lazy(() => import('./pages/Projects'));
const About = lazy(() => import('./pages/About'));
const FAQ = lazy(() => import('./pages/FAQ'));
const Insights = lazy(() => import('./pages/Insights'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const Contact = lazy(() => import('./pages/Contact'));
const Testimonials = lazy(() => import('./pages/Testimonials'));

const PageFallback = () => (
  <div className="w-full min-h-[60vh] flex items-center justify-center bg-white">
    <div className="w-8 h-8 border-3 border-secondary-container border-t-transparent rounded-full animate-spin" />
  </div>
);

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Suspense fallback={<PageFallback />}><Services /></Suspense>} />
          <Route path="services/:serviceId" element={<Suspense fallback={<PageFallback />}><ServiceDetail /></Suspense>} />
          <Route path="solutions-archives/:serviceId" element={<Suspense fallback={<PageFallback />}><ServiceDetail /></Suspense>} />
          <Route path="safety" element={<Suspense fallback={<PageFallback />}><Safety /></Suspense>} />
          <Route path="industries" element={<Suspense fallback={<PageFallback />}><Industries /></Suspense>} />
          <Route path="projects" element={<Suspense fallback={<PageFallback />}><Projects /></Suspense>} />
          <Route path="success-stories" element={<Suspense fallback={<PageFallback />}><Projects /></Suspense>} />
          <Route path="about" element={<Suspense fallback={<PageFallback />}><About /></Suspense>} />
          <Route path="testimonials" element={<Suspense fallback={<PageFallback />}><Testimonials /></Suspense>} />
          <Route path="careers" element={<Suspense fallback={<PageFallback />}><Contact /></Suspense>} />
          <Route path="faq" element={<Suspense fallback={<PageFallback />}><FAQ /></Suspense>} />
          <Route path="insights" element={<Suspense fallback={<PageFallback />}><Insights /></Suspense>} />
          <Route path="blog" element={<Suspense fallback={<PageFallback />}><Insights /></Suspense>} />
          <Route path="blog/:slug" element={<Suspense fallback={<PageFallback />}><BlogPost /></Suspense>} />
          <Route path="contact" element={<Suspense fallback={<PageFallback />}><Contact /></Suspense>} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

