import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { FloatingWhatsApp } from '@/components/layout/FloatingWhatsApp';
import Home from '@/pages/Home';
import Services from '@/pages/Services';
import ServiceDetail from '@/pages/ServiceDetail';
import About from '@/pages/About';
import BeforeAfter from '@/pages/BeforeAfter';
import Contact from '@/pages/Contact';
import Blog from '@/pages/Blog';
import BlogPost from '@/pages/BlogPost';

/** Scroll to top on every route change */
function ScrollReset() {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
    }, [pathname]);
    return null;
}

export default function App() {
    return (
        <BrowserRouter>
            <ScrollReset />
            <Header />
            <main className="min-h-screen pt-20">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/servicos" element={<Services />} />
                    <Route path="/servicos/:slug" element={<ServiceDetail />} />
                    <Route path="/sobre" element={<About />} />
                    <Route path="/antes-depois" element={<BeforeAfter />} />
                    <Route path="/contato" element={<Contact />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/blog/:slug" element={<BlogPost />} />
                </Routes>
            </main>
            <Footer />
            <FloatingWhatsApp />
        </BrowserRouter>
    );
}
