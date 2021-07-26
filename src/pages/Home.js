import "./Home.css";
import image from "../images/rick-and-morty-app-cover.png";

export default function Home() {
  return (
    <section className="home">
      <h1>welcome to the Rick and Morty API!</h1>
      <img className="image" src={image} alt="Home Page" />
      <h2>developed with 💛 by Evi </h2>
    </section>
  );
}
