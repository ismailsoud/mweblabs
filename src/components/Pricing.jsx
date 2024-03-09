import React from 'react';

export default function Pricing() {
  return (
    <div className="container my-24 mx-auto md:px-6">
      {/* Section: Design Block */}
      <section className="mb-32">
        <h2 className="mb-12 text-center text-7xl font-righteous">Pricing</h2>
        <div className="grid gap-6 lg:grid-cols-3 lg:gap-x-12">
          {[
            { title: 'Basic', price: 65, features: [
              "Unlimited web pages",
              "Site content management",
              "Submission form",
              "Your company's logo",
              "5 Professional emails",
              "Local SEO",
              "Domain name",
              "Free hosting",
              "Activation of an SSL certificate (secure site)",
              "Site adapted for mobile phones and tablets",
              "Free Technical Support",
              "Free Update (5 annual modifications)"
            ] },
            { title: 'Recommended', price: 120, features: [
              "Unlimited web pages",
              "Site content management",
              "Submission form",
              "Your company's logo",
              "5 Professional emails",
              "Local SEO",
              "Domain name",
              "Free hosting",
              "Activation of an SSL certificate (secure site)",
              "Site adapted for mobile phones and tablets",
              "Free Technical Support",
              "Free Update (5 annual modifications)",
              "Google Reviews Management",
              "Creation and optimization of your Google My Business listing (Title, Photo, Category, Description, Keyword optimization...)",
              "Monitoring your business's visibility on Google",
              "Prompt response by our team to reviews left by your customers"
            ] },
            { title: 'Enterprise', price: 249, features: [
              "Unlimited web pages",
              "Site content management",
              "Submission form",
              "Your company's logo",
              "5 Professional emails",
              "Local SEO",
              "Domain name",
              "Free hosting",
              "Activation of an SSL certificate (secure site)",
              "Site adapted for mobile phones and tablets",
              "Free Technical Support",
              "Google Reviews Management",
              "Creation and optimization of your Google My Business listing (Title, Photo, Category, Description, Keyword optimization...)",
              "Monitoring your business's visibility on Google",
              "Prompt response by our team to reviews left by your customers",
              "Lead generation system included",
              "Promotional video included",
              "Optimization and Management of Facebook and Instagram Social Networks"
            ] }
          ].map(({ title, price, features }, index) => (
            <div key={index} className="mb-6 lg:mb-0">
              <div className="block h-full rounded-lg bg-white shadow-md dark:bg-[#070707] border-[1px]">
                <div className="border-b-[1px] border-slate-200 p-6 text-center dark:border-opacity-40">
                  <p className="mb-4 text-sm uppercase">
                    <strong>{title}</strong>
                  </p>
                  <h3 className="mb-6 text-3xl">
                    <strong>${price}</strong>
                    <small className="text-base text-neutral-500 dark:text-neutral-300">/month</small>
                  </h3>
                  <button
                    type="button"
                    className="inline-block w-full font-bold rounded bg-slate-200 text-slate-900 px-6 pt-2.5 pb-2 uppercase leading-normal transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
                  >
                    Buy
                  </button>
                </div>
                <div className="p-6">
                  <ol className="list-inside">
                    {features.map((feature, index) => (
                      <li key={index} className="mb-4 flex">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="mr-3 h-5 w-5 text-primary dark:text-primary-400">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>{feature}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}