import React from "react";
import Head from "next/head";

interface MetaProps {
  title?: any;
  keywords?: any;
  description?: any;
  siteLink?: any;
  image?: any;
}

export default function Meta({
  title,
  keywords,
  description,
  siteLink,
  image,
}: MetaProps) {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />

      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteLink} />
      <meta property="og:image" content={image} />
      <meta property="og:description" content={description} />

      <meta property="twitter:card" content={title} />
      <meta property="twitter:url" content={siteLink} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      <title>{title}</title>
    </Head>
  );
}
