import React, { useState } from "react";


export default function Card(props) {
  const handleClickUp = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleClickDown = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleClickReset = () => {
    let newText = "";
    setText(newText);
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter the text here");

  const [myStyle, setmyStyle] = useState({
    color: "white",
    backgroundColor: "black",
  });

  const [btnText , setbtnText] = useState("Enable Light Mode");

  const toggleStyle = () => {
    if (myStyle.color === "white") {
      setmyStyle({
        color: "black",
        backgroundColor: "white",
        border: '2px solid white',
        
      });
      setbtnText("Enable light Mode");
    }
    else{
      setmyStyle({
        color: "white",
        backgroundColor: "black",
      });
      setbtnText("Enable dark Mode");

    }
  };
  return (
    <>
      <div className="container" style={myStyle}>
        <h1 className="my-5">{props.heading}</h1>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label"></label>
          <textarea
            // on change due to edit the text
            // CODE BY LORD
            class="form-control"
            value={text}
            onChange={handleOnChange}
            id="exampleFormControlTextarea1"
            rows="8"
          ></textarea>
        </div>

        <button
          type="button"
          class="btn btn-success mx-3"
          onClick={handleClickUp}
        >
          {props.btnContent}
        </button>

        <button
          type="button"
          class="btn btn-warning my-3"
          onClick={handleClickDown}
        >
          Convert to lowercase
        </button>
        <button
          type="button"
          class="btn btn-danger mx-4"
          onClick={handleClickReset}
        >
          Reset
        </button>
        <button type="button" class="btn btn-dark mx-3" onClick={toggleStyle}
        >
          {btnText}
        </button>
        <div className="container my-4">
          <h1>Your Text Summary</h1>

          <p>
            {text.split(" ").length} words & {text.length} characters
          </p>

          <h2>Preview</h2>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
}
