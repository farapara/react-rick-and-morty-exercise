import "./Characters.css";
import Form from "../components/Form.js";
import CharacterCard from "../components/CharacterCard.js";
import { Link } from "react-router-dom";

export default function Characters() {
  return (
    <section className="characters">
      <Form />
      <ul className="CharacterList">
        <Link to="/characters/singleCharacter/:id">
          <CharacterCard />
        </Link>
      </ul>
      <button>More</button>
    </section>
  );
}
