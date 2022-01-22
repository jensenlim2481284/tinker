import React from "react";
import '../style/landing.css';
import Why from "../components/Sections/Why";
import FAQ from "../components/Sections/FAQ";
import Team from "../components/Sections/Team";
import About from "../components/Sections/About";
import Footer from "../components/Sections/Footer"
import Header from "../components/Sections/Header";
import TopNavbar from "../components/Nav/TopNavbar";
import Roadmap from "../components/Sections/Roadmap";


export default function Landing() {
  return (
    <>
      <TopNavbar />
      <Header />
      <About />
      <Why />
      <Roadmap />
      <Team />
      <FAQ />
      <Footer />
    </>
  );
}


