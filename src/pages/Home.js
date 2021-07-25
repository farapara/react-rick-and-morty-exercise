import "./Home.css";
import image from "../images/rick-and-morty-app-cover.png";

export default function Home() {
  return (
    <section className="home">
      <h1>This is a Rick and Morty Page!</h1>
      <img className="image" src={image} alt="Home Page" />
      <h2>Developed by Evi</h2>
    </section>
  );
}
