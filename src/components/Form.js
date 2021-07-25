import "./Form.css";

export default function Form() {
  return (
    <form>
      <input type="text" name="characterName" id="characterName" />
      <selection>
        <option>All</option>
        <option>Alive</option>
        <option>Dead</option>
        <option>Unkown</option>
      </selection>
    </form>
  );
}
