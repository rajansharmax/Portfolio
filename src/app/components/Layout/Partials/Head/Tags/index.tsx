import React from "react";
// import Script from "next/script";

const Tags = () => {
  return (
    <>
      {/* <!--Start of Tawk.to Script--> */}
      {/* <Script id="tawk">
        {`var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
          (function(){
          var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
          s1.async=true;
          s1.src='https://embed.tawk.to/66c8ecfeea492f34bc097b5a/1i60drgpo';
          s1.charset='UTF-8';
          s1.setAttribute('crossorigin','*');
          s0.parentNode.insertBefore(s1,s0);
          })();`}
      </Script> */}
      {/* <!--End of Tawk.to Script--> */}

      {/* Structured Data (JSON-LD for SEO) */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Rajan Sharma",
            "jobTitle": "Senior Full Stack Developer",
            "url": "${process.env.NEXT_PUBLIC_WEBSITE_URL}",
            "sameAs": [
              "https://www.linkedin.com/in/rajansharmax/",
              "https://github.com/rajansharmax",
              "https://twitter.com/rajansharmax",
              "https://www.instagram.com/rajansharma.x"
            ],
            "worksFor": {
              "@type": "Organization",
              "name": "Freelancer"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-9023232046",
              "contactType": "Customer Support",
              "areaServed": "IN",
              "availableLanguage": "English"
            }
          }
        `}
      </script>
    </>
  );
};

export default Tags;
