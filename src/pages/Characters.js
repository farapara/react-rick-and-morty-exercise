import "./Characters.css";
import Form from "../components/Form.js";
import CharacterCard from "../components/CharacterCard.js";

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
