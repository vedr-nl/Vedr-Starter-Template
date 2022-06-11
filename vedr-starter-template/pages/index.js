import Hero from "../sections/hero";
import Navbar from "../sections/navbar";
import ContactForm from "../sections/contactForm";
import { getEntries } from '../services/contentful';

// Hero props
export async function getStaticProps({}) {
  const res = await getEntries({
    content_type: "title"
  });
  return {
    props: {
      hero: res.items
    }
  }
}


export default function Home({hero}) {
  return (
    <div>
      <Navbar/>
      <Hero 
        title={hero[0].fields.title}
        slogan={hero[0].fields.slogan}
        image={hero[0].fields.image.fields.file}
      />
      <ContactForm/>
    </div>
  )
}
