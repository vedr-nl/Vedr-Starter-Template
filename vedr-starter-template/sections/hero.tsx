import { Image } from "../types/atoms";

export default function Hero({
    title,
    slogan,
    image
}: {
    title: string
    slogan: string
    image: Image
}) {
    return (
        <div>
        <h1>{title}</h1>
        <p>{slogan}</p>
        <img src={image.url} alt={image.title}></img>
        </div>
    );
}
