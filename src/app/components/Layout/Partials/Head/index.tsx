import React from "react";
import Tags from "@/app/components/Layout/Partials/Head/Tags";

const Head = () => {
  return (
    <head>
      <meta charSet="utf-8" />
      <title>RAJANSHARMAX - Full Stack developer</title>
      <meta
        name="description"
        content=" RAJANSHARMAX - Full Stack developer - Web developer "
      />
      <link rel="shortcut icon" type="image/x-icon" href={"/vercel.svg"} />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta
        property="twitter:image"
        content={process.env.NEXT_PUBLIC_WEBSITE_URL + "/api/og"}
      />
      <meta
        property="twitter:card"
        content={process.env.NEXT_PUBLIC_WEBSITE_URL + "/api/og"}
      ></meta>
      <meta
        property="twitter:title"
        content="Twitter link preview title"
      ></meta>
      <meta
        property="twitter:description"
        content="Twitter link preview description"
      ></meta>
      <meta
        property="og:image"
        content={process.env.NEXT_PUBLIC_WEBSITE_URL + "/api/og"}
      ></meta>
      <meta property="og:title" content="Link preview title"></meta>
      <meta property="og:description" content="Link preview description" />
      <meta property="og:url" content="Canonical link preview URL"></meta>
      <link
        type="text/css"
        href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500&family=Playfair+Display:wght@400..900&family=Urbanist:wght@100..900&display=swap"
        rel="stylesheet"
      />
      <link
        type="text/css"
        href={"/assets/css/vendors/bootstrap.min.css"}
        rel="stylesheet"
      />
      <link
        type="text/css"
        href={"/assets/css/vendors/swiper-bundle.min.css"}
        rel="stylesheet"
      />
      <link
        type="text/css"
        href={"/assets/css/vendors/aos.css"}
        rel="stylesheet"
      />
      <link
        type="text/css"
        href={"/assets/css/vendors/odometer.css"}
        rel="stylesheet"
      />
      <link
        type="text/css"
        href={"/assets/css/vendors/carouselTicker.css"}
        rel="stylesheet"
      />
      <link
        type="text/css"
        href={"/assets/css/vendors/magnific-popup.css"}
        rel="stylesheet"
      />
      <link
        type="text/css"
        href={"/assets/fonts/remixicon/remixicon.css"}
        rel="stylesheet"
      />
      <link
        type="text/css"
        href={"/assets/fonts/satoshi/satoshi.css"}
        rel="stylesheet"
      />
      <link type="text/css" href={"/assets/css/main.css"} rel="stylesheet" />
      <Tags />
    </head>
  );
};

export default Head;
