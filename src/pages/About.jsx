import Navbar from "../components/Navbar";
import Footer from "../components/Footer"; 
import { useState, useEffect } from "react";
import TechBlock from "../components/TechBlock";

const About = () => {
  const [navHeight, setNavHeight] = useState(null);

  useEffect(() => {
    // Add meta tags dynamically for About page - English
    document.title = "About MWebLabs | Professional Web Development Agency";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", 
        "Learn about MWebLabs, a premier web development agency delivering innovative digital solutions. Our expert team combines creativity and technical excellence to transform your online presence."
      );
    }

    // Add French meta description
    const frMetaDesc = document.createElement('meta');
    frMetaDesc.name = 'description';
    frMetaDesc.setAttribute('lang', 'fr');
    frMetaDesc.content = "Découvrez MWebLabs, une agence de développement web de premier plan offrant des solutions numériques innovantes. Notre équipe d'experts combine créativité et excellence technique pour transformer votre présence en ligne.";
    document.head.appendChild(frMetaDesc);

    // Add French title meta
    const frTitleMeta = document.createElement('meta');
    frTitleMeta.name = 'title';
    frTitleMeta.setAttribute('lang', 'fr');
    frTitleMeta.content = "À Propos de MWebLabs | Agence Professionnelle de Développement Web";
    document.head.appendChild(frTitleMeta);

    // Add JSON-LD structured data with bilingual support
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "MWebLabs",
      "description": [
        {
          "@language": "en",
          "@value": "Premier web development agency delivering innovative digital solutions"
        },
        {
          "@language": "fr",
          "@value": "Agence professionnelle de développement web offrant des solutions numériques innovantes"
        }
      ],
      "areaServed": "Worldwide",
      "serviceType": [
        {
          "@language": "en",
          "@value": ["Web Development", "Web Design", "Digital Strategy"]
        },
        {
          "@language": "fr",
          "@value": ["Développement Web", "Design Web", "Stratégie Numérique"]
        }
      ],
      "knowsAbout": [
        {
          "@language": "en",
          "@value": ["Web Development", "UI/UX Design", "Digital Strategy", "Frontend Development", "Backend Development"]
        },
        {
          "@language": "fr",
          "@value": ["Développement Web", "Design UI/UX", "Stratégie Numérique", "Développement Frontend", "Développement Backend"]
        }
      ]
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div
      className="min-h-screen bg-backGround"
      style={{ marginTop: navHeight ? `${navHeight}px` : "0px" }}
    >
      <Navbar getNavHeight={setNavHeight} />
      <main className="container mx-auto px-4 py-16">
        <article className="max-w-4xl mx-auto">
          <header>
            <h1 className="text-2xl lg:text-6xl font-righteous tracking-tight text-center mb-8">
              About MWebLabs
            </h1>
          </header>
          
          <section className="rounded-lg shadow-lg p-8 mb-12" aria-label="Company Overview">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg font-righteous-700 mb-6 text-center">
                Welcome to MWebLabs, a premier web development agency passionate
                about crafting digital experiences that stand out. With a proven
                track record in delivering innovative and results-driven
                solutions, we merge creativity and technical excellence to drive
                business growth for our clients. Our expert team of developers,
                designers, and digital strategists work collaboratively to bring
                your vision to life, taking a tailored approach to ensure each
                project aligns with your unique goals. At MWebLabs, we stay ahead
                of industry trends, embracing the latest technologies to ensure
                our solutions remain impactful, efficient, and user-centered.
              </p>
              
              <p className="text-lg font-righteous-700 mb-6 text-center">
                We believe that a great digital experience should be both visually
                engaging and functionally robust. From concept to launch, we are
                committed to excellence in every detail, helping businesses scale,
                innovate, and connect with their audience on a deeper level. With
                MWebLabs as your partner, you can expect a transformative digital
                journey that leaves a lasting impression.
              </p>
              
              <p className="text-2xl font-righteous text-center text-purple-800" role="text" aria-label="Company Mission">
                Let's build the future of your digital presence, together.
              </p>
            </div>
          </section>
        </article>

        <section aria-label="Technologies We Use" className="mt-12">
          <h2 className="sr-only">Our Technology Stack</h2>
          <TechBlock/>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
