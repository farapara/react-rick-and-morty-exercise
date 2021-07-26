import "./Characters.css";
import Form from "../components/Form.js";
import CharacterCard from "../components/CharacterCard.js";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Characters() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const url = "https://rickandmortyapi.com/api/character?page=1";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
      });
  }, []);

  return (
    <section className="characters">
      <Form />
      <ul className="CharacterList">
        {characters.map((character) => {
          return (
            <Link
              key={character.id}
              to={`/characters/singleCharacter${character.id}`}
            >
              <CharacterCard name={character.name} imageSrc={character.image} />
            </Link>
          );
        })}
      </ul>
    </section>
  );
}
