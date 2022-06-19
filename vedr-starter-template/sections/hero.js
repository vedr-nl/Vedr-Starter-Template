export default function Hero({ title, slogan, image }) {
  return (
    <div className="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8">
      {/* <!-- Replace with your content --> */}
      <div className="flex">
        <div className="flex-initial w-2/4 pt-10">
          <h1>{title}</h1>
          <p>{slogan}</p>
        </div>

        <div className="flex-initial w-2/4">
          <img src={image.url} alt={image.title} className="w-96"></img>
        </div>
      </div>

      {/* <!-- /End replace --> */}
    </div>
  );
}
