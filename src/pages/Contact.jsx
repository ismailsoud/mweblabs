import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import { useState, useEffect } from "react";

const Contact = () => {
  const [navHeight, setNavHeight] = useState(null);

  useEffect(() => {
    // Add meta tags dynamically for Contact page - English
    document.title = "Contact MWebLabs | Get in Touch With Our Web Development Team";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", 
        "Contact MWebLabs for professional web development services. Our team is ready to help transform your digital presence. Get in touch today for a consultation."
      );
    }

    // Add French meta description
    const frMetaDesc = document.createElement('meta');
    frMetaDesc.name = 'description';
    frMetaDesc.setAttribute('lang', 'fr');
    frMetaDesc.content = "Contactez MWebLabs pour des services professionnels de développement web. Notre équipe est prête à transformer votre présence numérique. Prenez contact aujourd'hui pour une consultation.";
    document.head.appendChild(frMetaDesc);

    // Add French title meta
    const frTitleMeta = document.createElement('meta');
    frTitleMeta.name = 'title';
    frTitleMeta.setAttribute('lang', 'fr');
    frTitleMeta.content = "Contactez MWebLabs | Notre Équipe de Développement Web";
    document.head.appendChild(frTitleMeta);

    // Add JSON-LD structured data with bilingual support
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": [
        {
          "@language": "en",
          "@value": "Contact MWebLabs"
        },
        {
          "@language": "fr",
          "@value": "Contactez MWebLabs"
        }
      ],
      "description": [
        {
          "@language": "en",
          "@value": "Contact page for MWebLabs web development agency"
        },
        {
          "@language": "fr",
          "@value": "Page de contact pour l'agence de développement web MWebLabs"
        }
      ],
      "mainEntity": {
        "@type": "Organization",
        "name": "MWebLabs",
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer service",
          "availableLanguage": ["English", "French"],
          "areaServed": "Worldwide",
          "description": [
            {
              "@language": "en",
              "@value": "Professional web development services"
            },
            {
              "@language": "fr",
              "@value": "Services professionnels de développement web"
            }
          ]
        }
      }
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div
      className="min-h-screen"
      style={{ marginTop: navHeight ? `${navHeight}px` : "0px" }}
    >
      <Navbar getNavHeight={setNavHeight} />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-center">Contact Us</h1>
            <p className="mt-4 text-center text-slate-300">
              Ready to transform your digital presence? Get in touch with our expert team today.
              We're here to help bring your vision to life.
            </p>
          </header>
          
          <section 
            className="bg-backGround rounded-lg p-8 mb-12"
            aria-labelledby="contact-form-heading"
          >
            <h2 id="contact-form-heading" className="sr-only">Contact Form</h2>
            <ContactForm />
          </section>

          <section className="text-center mb-8">
            <h2 className="text-2xl font-semibold mb-4">Other Ways to Reach Us</h2>
            <div className="space-y-2 text-slate-300">
              <p>
                <strong>Business Hours:</strong> Monday - Friday, 8:00 AM - 6:00 PM
              </p>
              <p>
                <strong>Response Time:</strong> We typically respond within 24 business hours
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
