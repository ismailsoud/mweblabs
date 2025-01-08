import React, { useEffect } from "react";
import Hero from "../components/Hero";
import Templates from "../components/Templates";
import Testemonials from "../components/Testomonials";
import TechBlock from "../components/TechBlock";
import Pricing from "../components/Pricing";
import image1 from "../assets/images/1.png";
import WhyUsSection from "../components/WhyUsSection";
import ContactForm from "../components/ContactForm";
import Technologies from "../components/Technologies";
import Footer from "../components/Footer";

export default function Home() {
  useEffect(() => {
    // Add meta tags dynamically for Home page - English
    document.title = "MWebLabs | Professional Web Development & Digital Solutions";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", 
        "MWebLabs delivers innovative web development solutions and digital experiences. Transform your online presence with our expert team of developers and designers."
      );
    }

    // Add French meta description
    const frMetaDesc = document.createElement('meta');
    frMetaDesc.name = 'description';
    frMetaDesc.setAttribute('lang', 'fr');
    frMetaDesc.content = "MWebLabs propose des solutions innovantes de développement web et d'expériences numériques. Transformez votre présence en ligne avec notre équipe d'experts développeurs et designers.";
    document.head.appendChild(frMetaDesc);

    // Add French title meta
    const frTitleMeta = document.createElement('meta');
    frTitleMeta.name = 'title';
    frTitleMeta.setAttribute('lang', 'fr');
    frTitleMeta.content = "MWebLabs | Solutions Professionnelles de Développement Web et Numérique";
    document.head.appendChild(frTitleMeta);

    // Add JSON-LD structured data with bilingual support
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebSite",
      "url": "https://mweblabs.agency",
      "name": "MWebLabs",
      "description": [
        {
          "@language": "en",
          "@value": "Professional web development and digital solutions agency"
        },
        {
          "@language": "fr",
          "@value": "Agence professionnelle de développement web et solutions numériques"
        }
      ],
      "offers": {
        "@type": "Offer",
        "description": [
          {
            "@language": "en",
            "@value": "Web development services, digital solutions, and custom website design"
          },
          {
            "@language": "fr",
            "@value": "Services de développement web, solutions numériques et conception de sites web sur mesure"
          }
        ]
      }
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <>
      <Hero />
      <main className="lg:px-36 mt-5 lg:mt-0 pt-24 lg:pt-0 text-slate-300">
        <div className="flex flex-col justify-between lg:border-x-[1px] border-slate-400 lg:pt-40">
          <section aria-label="Why Choose Us">
            <WhyUsSection />
          </section>

          <section aria-label="Our Templates" className="flex justify-center items-center w-full h-full lg:px-10 lg:py-40 py-24 border-b-[1px] border-slate-400 px-8">
            <div className="w-full h-full">
              <Templates />
            </div>
          </section>

          <section aria-label="Client Testimonials" className="w-full h-full lg:px-10 py-16 lg:py-40 border-b-[1px] border-slate-400 px-8">
            <Testemonials />
          </section>

          <section aria-label="Our Technologies" className="hidden lg:inline w-full h-full lg:px-10 lg:pt-20 pb-20 border-y-[1px] border-slate-400 space-y-16">
            <Technologies />
          </section>

          {/* <section aria-label="Pricing Plans" className="w-full h-full lg:px-10 lg:pb-40 border-b-[1px] border-slate-400 px-8">
            <Pricing />
          </section> */}

          <section aria-label="Contact Form" className="w-full h-full lg:px-10 py-16 lg:py-40 border-slate-400 px-8">
            <h2 className="text-4xl font-bold text-center mb-8">Contact Us</h2>
            <ContactForm />
          </section>
        </div>
      </main>
      <Footer/>
    </>
  );
}