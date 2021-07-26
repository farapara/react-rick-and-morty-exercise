import "./Characters.css";
import Form from "../components/Form.js";
import CharacterCard from "../components/CharacterCard.js";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Characters() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(2);

  useEffect(() => {
    const url = "https://rickandmortyapi.com/api/character?page=1";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
      });
  }, []);

  function renderCharacters() {
    return characters.map((character) => {
      return (
        <Link key={character.id} to={`/characters/${character.id}`}>
          <CharacterCard name={character.name} imageSrc={character.image} />
        </Link>
      );
    });
  }

  function handleButtonClick() {
    const url = `https://rickandmortyapi.com/api/character/?page=${page}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const newCharacters = [...characters, ...data.results];
        setCharacters(newCharacters);
        setPage(page + 1);
      });
  }

  return (
    <section className="characters">
      <Form />
      <ul className="CharacterList">{renderCharacters()}</ul>
      <button
        onClick={handleButtonClick}
        className="loadingMoreCharactersButton"
      >
        Load More
      </button>
    </section>
  );
}
