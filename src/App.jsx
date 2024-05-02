import { Button } from 'flowbite-react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import { MyTable } from './components/MyTable';
import { MyFooter } from './components/MyFooter';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import Home from "./pages/Home";
import Team from "./pages/Team";
import Marketplace from "./pages/Marketplace";
import Features from "./pages/Features";
import Contact from "./pages/Contact";
import Company from "./pages/Company";
import { NoPage } from './pages/NoPage';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="Home" element={<Home />} />
            <Route path="Team" element={<Team />} />
            <Route path="Contact" element={<Contact />} />
            <Route path="Marketplace" element={<Marketplace />} />
            <Route path="Features" element={<Features />} />
            <Route path="Company" element={<Company />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>     

    </div>
  )
}