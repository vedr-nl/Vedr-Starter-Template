export default function Hero({ title, slogan, image }) {
  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      {/* <!-- Replace with your content --> */}
      <div className="px-4 py-6 sm:px-0">
        <div>
          <h1>{title}</h1>
          <p>{slogan}</p>
          <img src={image.url} alt={image.title}></img>
        </div>
      </div>
      {/* <!-- /End replace --> */}
    </div>
  );
}
