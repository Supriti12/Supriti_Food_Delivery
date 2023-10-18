import { useTypingText } from "./useTypingText";
import "./styles.css";

export default function Text() {
  const { word, stop, start } = useTypingText(
    ["Hi!!","I","am","Supriti", "Gole"],
    130,
    20
  );

  return (
    <div className="container">
      <h1>{word}</h1>
      <div className="btn-container">
        <button onClick={stop}>Stop</button>
        <button onClick={start}>Start</button>
      </div>
    </div>
  );
}
