import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingActions from './FloatingActions';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Layout() {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Initialize global IntersectionObserver for viewport animations
  useScrollReveal();

  return (
    <div className="min-h-screen flex flex-col bg-surface font-body-md text-on-surface relative">
      <Navbar />
      {/* Spacer to prevent header from going behind navbar since navbar is fixed */}
      <main className="flex-grow pt-20">
        <Outlet />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
