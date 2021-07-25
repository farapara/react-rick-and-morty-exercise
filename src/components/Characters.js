import "./Characters.css";
import Form from "./Form";
import CharacterCard from "./CharacterCard";

export default function Characters() {
  return (
    <section className="characters">
      <Form />
      <ul className="CharacterList">
        <CharacterCard />
      </ul>
      <button>More</button>
    </section>
  );
}
