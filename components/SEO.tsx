import Head from "next/head";

const SEO = () => {
  return (
    <Head>
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,minimum-scale=1,user-scalable=yes"
      />
      <link rel="shortcut icon" href="favicon.svg" type="image/svg" />
      <title>Praveen Kumar | Photographer</title>
      <meta
        name="description"
        content="Praveen Kumar is a Professional Photographer from India. This website contains social links of his accounts in other platform."
      />
      <meta name="robots" content="index,follow" />
      <meta name="theme-color" content="#a033ff" />
      <meta name="author" content="Anil Seervi" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@linASeervi" />
      <meta name="twitter:creator:id" content="2496313362" />
      <meta name="twitter:site:id" content="2496313362" />

      <meta property="og:description" content="Professional Photographer" />
      <meta
        property="og:image"
        content="https://praveen.vercel.app/assets/og-thumb.jpg"
      />
      <meta property="og:image:alt" content="Praveen Kumar" />
      <meta property="og:image:height" content="1080" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1920" />
      <meta property="og:site_name" content="Praveen Kumar | Photographer" />
      <meta property="og:title" content="Praveen Kumar" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://praveen.vercel.app/" />
    </Head>
  );
};

export default SEO;
