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
      <link type="text/css" href={"/assets/css/main.css"} rel="stylesheet" />
      <Tags />
    </head>
  );
};

export default Head;
