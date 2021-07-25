import "./Characters.css";
import Form from "./Form";

export default function Characters() {
  return (
    <section className="characters">
      <Form />
      <ul className="CharacterList">
        <li className="CharacterCard">
          <img src="" alt="" />
          <h3>Name</h3>
        </li>
      </ul>
      <button>More</button>
    </section>
  );
}
