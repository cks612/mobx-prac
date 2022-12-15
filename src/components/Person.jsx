export default function Person({ age10, plus }) {
  return (
    <div>
      <h1>{age10}</h1>
      <p>
        <button onClick={plus}>plus</button>
      </p>
    </div>
  );
}
