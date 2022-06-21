import Head from "next/head";

export default function SiteHead() {
  return (
    <Head>
      <title>Vedr Starter template</title>
      <meta name="description" content="This is a Vedr website" />
      <meta name="author" content="Vedr" />
      <meta charset="UTF-8" />
      <meta name="keywords" content="seo,friendly,keywords,here" />
      <meta property="og:title" content="Change this" />
      <meta property="og:image" content="link_to_image" />
      <meta property="og:description" content="description goes here" />

      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
