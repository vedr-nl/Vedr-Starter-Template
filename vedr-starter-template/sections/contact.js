import ContactForm from "../components/contactForm";

export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8">
      {/* <!-- Replace with your content --> */}
      <div className="flex">
        <div className="flex-initial w-2/4">
          <h2>Dit is een titel</h2>
          <p className="w-3/4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            convallis hendrerit convallis. Cras maximus suscipit justo eget
            ultricies. Vestibulum ac justo efficitur, pulvinar purus in,
            vulputate massa. Sed luctus magna et pulvinar ornare. Proin
            fringilla, leo faucibus auctor rhoncus, lacus erat pretium eros, sit
            amet blandit nulla dui bibendum nulla.
          </p>
        </div>

        <div className="flex-initial w-2/4">
          <ContactForm />
        </div>
      </div>

      {/* <!-- /End replace --> */}
    </div>
  );
}
