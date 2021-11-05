import { useState } from "react";
import data from "../card/data";
function card(props) {
  const [selected, setselected] = useState("Select Friut");
  const [text, settext] = useState("Txt");
  const [pic, setPic] = useState("pic");
  console.log(data);

  return (
    <div className="button">
      {" "}
      <button
        onClick={() => {
          setselected(data[0].name);
          settext(data[0].type);
          setPic(data[0].imgSrc);
        }}
        id="btn"
      >
        {" "}
        Cherry
      </button>
      <button
        onClick={() => {
          setselected(data[1].name);
          settext(data[1].type);
          setPic(data[1].imgSrc);
        }}
        id="btn"
      >
        Patatos
      </button>
      <button
        onClick={() => {
          setselected(data[2].name);
          settext(data[2].type);
          setPic(data[2].imgSrc);
        }}
        id="btn"
      >
        Walnut
      </button>
      <button
        onClick={() => {
          setselected(data[3].name);
          settext(data[3].type);
          setPic(data[3].imgSrc);
        }}
        id="btn"
      >
        Carrot
      </button>
      <button
        onClick={() => {
          setselected(data[4].name);
          settext(data[4].type);
          setPic(data[4].imgSrc);
        }}
        id="btn"
      >
        Mango
      </button>
      <button
        onClick={() => {
          setselected(data[5].name);
          settext(data[5].type);
          setPic(data[5].imgSrc);
        }}
        id="btn"
      >
        Banana
      </button>
      <button
        onClick={() => {
          setselected(data[6].name);
          settext(data[6].type);
          setPic(data[6].imgSrc);
        }}
        id="btn"
      >
        Almond
      </button>
      <div id="text">
        {" "}
        Friut Name: {selected} <br />
      </div>{" "}
      <div id="text">Type: {text}</div>
      <div className="img">
        <img src={pic} alt=" " />
      </div>
    </div>
  );
}
export default card;
