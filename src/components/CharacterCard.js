import "./CharacterCard.css";

export default function CharacterCard({ name, imageSrc }) {
  return (
    <li className="characterCard">
      <img className="characterCardImage" src={imageSrc} alt="CharacterCard" />
      <h3 className="characterCardName">{name}</h3>
    </li>
  );
}
