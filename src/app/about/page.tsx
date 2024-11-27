import React from "react";
import Price from "./_components/price/Price";
import Services from "./_components/services/services";
import AboutUs from "./_components/aboutUs/AboutUs";
import OurTeam from "./_components/ourTeam/OurTeam";

function AboutPage() {
  return (
    <section className="py-16 px-6 md:px-10 dark:from-gray-900 dark:to-gray-800">
      <AboutUs />
      <Services />
      <Price />
      <OurTeam />
    </section>
  );
}

export default AboutPage;
