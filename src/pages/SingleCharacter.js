import "./SingleCharacter.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function SingleCharacter() {
  const { id } = useParams();

  const [character, setCharacter] = useState(null);

  useEffect(() => {
    if (character === null) {
      const url = `https://rickandmortyapi.com/api/character/${id}`;
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setCharacter(data);
        });
    }
  }, [character]);

  return (
    <section className="singleCharacter">
      <h2> {character?.name}</h2>
      <img src={character?.image} alt={character?.name} />
      <p>Status: {character?.status} </p>
      <p>Gender: {character?.gender} </p>
      <p>Species:{character?.species}</p>
      <p>Type: {character?.type ? character?.type : "X"}</p>
    </section>
  );
}
