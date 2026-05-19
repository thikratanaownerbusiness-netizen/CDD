/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Home } from "./pages/Home";
import { CurriculumLibrary } from "./pages/CurriculumLibrary";
import { Services } from "./pages/Services";
import { About } from "./pages/About";
import { Resources } from "./pages/Resources";
import { Contact } from "./pages/Contact";
import { ChatAssistant } from "./components/chat/ChatAssistant";

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/curriculum" element={<CurriculumLibrary />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <ChatAssistant />
      </div>
    </Router>
  );
}

