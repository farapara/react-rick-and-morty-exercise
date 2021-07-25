import "./CharacterCard.css";
import image from "../images/logo.png";

export default function CharacterCard() {
  return (
    <li className="CharacterCard">
      <img className="image" src={image} alt="CharacterCard" />
      <h3>Name</h3>
    </li>
  );
}
