import { useRef } from "react";

export default function TodoForm({ add }) {
  const ref = useRef();

  return (
    <div>
      <p>
        <input type="text" ref={ref} />
        <button onClick={() => add(ref.current.value)}>Add</button>
      </p>
    </div>
  );
}
