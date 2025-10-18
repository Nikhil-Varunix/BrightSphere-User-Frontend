import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Index from './pages/Home/Index';
import { Journals } from './pages/Journals';
import { Author } from './pages/static/Author';
import { Editor } from './pages/static/Editor';
import { Reviewer } from './pages/static/Reviewer';
import { APC } from './pages/static/APC';
import { About } from './pages/static/About'
import { Articles } from './pages/articles';
import { JournalsDetails } from './pages/JournalsDetails';
import { AllArticles } from './pages/allArticles';
import { Abstract } from './pages/Abstract';
import { PrivacyPolicy1 } from './pages/static/PrivacyPolicy1';
import { TermsConditions } from './pages/static/TermsConditions';
import { OnlineSubForm } from './pages/Components/OnlineSubForm';
import { useEffect } from 'react';
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Header />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/journals" element={<Journals />} />
        <Route path="/guidlines/author" element={<Author />} />
        <Route path="/guidlines/editor" element={<Editor />} />
        <Route path="/guidlines/reviewer" element={<Reviewer />} />
        <Route path="/guidlines/apc" element={<APC />} />
        <Route path="/about" element={<About />} />
        <Route path="/Journals/articles" element={<Articles />} />
        <Route path="/journals/journal-details/:id" element={<JournalsDetails />} />
        <Route path="/journals/all-articles/:journalId" element={<AllArticles />} />
        <Route path="/articles/abstract/:articleId" element={<Abstract />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy1 />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/onlinesubform" element={<OnlineSubForm />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
}
