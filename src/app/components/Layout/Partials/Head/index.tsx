import React from "react";
import Tags from "@/app/components/Layout/Partials/Head/Tags";

const Head = () => {
  return (
    <head>
      <meta charSet="utf-8" />
      <title>Rajan Sharma - Senior Full Stack Developer</title>
      <meta
        name="description"
        content="Rajan Sharma - Senior Full Stack Developer specializing in PHP, React.js, Node.js, Docker, and more. Building scalable and efficient web applications."
      />
      <meta name="keywords" content="Rajan Sharma, Full Stack Developer, React.js, Node.js, PHP, Docker, Web Development, Front-End, Back-End, Tech Stack, Open-Source, Developer Portfolio" />
      <meta name="author" content="Rajan Sharma" />

      {/* Open Graph and Twitter Meta Tags */}
      <meta
        property="twitter:image"
        content={process.env.NEXT_PUBLIC_WEBSITE_URL + "/api/og"}
      />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content="Rajan Sharma - Senior Full Stack Developer" />
      <meta
        property="twitter:description"
        content="Rajan Sharma - Senior Full Stack Developer specializing in PHP, React.js, Node.js, Docker, and more. Building scalable and efficient web applications."
      />

      <meta
        property="og:image"
        content={process.env.NEXT_PUBLIC_WEBSITE_URL + "/api/og"}
      />
      <meta property="og:title" content="Rajan Sharma - Senior Full Stack Developer" />
      <meta
        property="og:description"
        content="Rajan Sharma - Senior Full Stack Developer specializing in PHP, React.js, Node.js, Docker, and more. Building scalable and efficient web applications."
      />
      <meta property="og:url" content={process.env.NEXT_PUBLIC_WEBSITE_URL} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Rajan Sharma Portfolio" />

      {/* Canonical Link */}
      <link rel="canonical" href={process.env.NEXT_PUBLIC_WEBSITE_URL} />

      {/* CSS and Assets */}
      <link type="text/css" href={"/assets/css/main.css"} rel="stylesheet" />

      <Tags />

      {/* Additional SEO Tags */}
      <meta name="author" content="Rajan Sharma" />
      <meta name="robots" content="index, follow" />

      {/* Additional Tags for Social Media Optimization */}
      <meta name="twitter:creator" content="@rajansharmax" />
      <meta property="og:site_name" content="Rajan Sharma - Full Stack Developer" />

      {/* Tags Component for More SEO Enhancements */}
    </head>
  );
};

export default Head;
