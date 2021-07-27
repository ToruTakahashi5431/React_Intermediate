import { useState } from "react";
import { ChildArea } from "./ChildArea";
import "./styles.css";

export default function App() {
  console.log("App start!!!!!");
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const onClickOpen = () => setOpen(!open);

  const onChangeText = (event) => setText(event.target.value);

  return (
    <div className="App">
      <input value={text} onChange={onChangeText}></input>
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} />
    </div>
  );
}
