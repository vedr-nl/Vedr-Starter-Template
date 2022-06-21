import Head from "../components/head";
import Hero from "../sections/hero";
import Contact from "../sections/contact";
import { getEntries } from "../services/contentful";

// Hero props
export async function getStaticProps({}) {
  const res = await getEntries({
    content_type: "title",
  });
  return {
    props: {
      hero: res.items,
    },
  };
}

export default function Home({ hero }) {
  return (
    <div>
      <Head />
      <Hero
        title={hero[0].fields.title}
        slogan={hero[0].fields.slogan}
        image={hero[0].fields.image.fields.file}
      />
      <Contact />
    </div>
  );
}
