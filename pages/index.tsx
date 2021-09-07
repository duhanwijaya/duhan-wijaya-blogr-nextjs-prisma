import React from "react";
import { GetStaticProps } from "next";
import prisma from "../lib/prisma";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { LoginBanner } from "../landing/login";
import { Banner } from "../landing/banner";
import { ValuePropositionSlider } from "../landing/value-prop";
import { LocalNews } from "../landing/local-news";
import { IntlNews } from "../landing/intl-news";
import { IG } from "../landing/ig";

const Landing = () => {
  return (
    <div className="max-w-xl flex items-center justify-center">
      <Navbar />
      <LoginBanner />
      <Banner />
      <ValuePropositionSlider />
      <LocalNews />
      <IntlNews />
      <IG />
      <Footer />
    </div>
  );
};

export default Landing;
