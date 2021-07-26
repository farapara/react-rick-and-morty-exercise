import "./Form.css";

export default function Form() {
  return (
    <form className="form">
      <input
        type="text"
        placeholder="Name"
        name="characterName"
        id="characterName"
      />
      <select>
        <option>All</option>
        <option>Alive</option>
        <option>Dead</option>
        <option>Unkown</option>
      </select>
    </form>
  );
}
