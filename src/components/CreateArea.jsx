import React, { useState } from "react";

function CreateArea(props) {
  const [text, upText] = useState({ title: "", content: "", filled: false });

  function changeText(event) {
    const { name, value } = event.target;
    upText((prev) => {
      return {
        ...prev,
        [name]: value,
        filled: true
      };
    });
    console.log(text);
  }

  function submission(e) {
    props.onAdd(text);
    upText({ title: "", content: "", filled: false });
    e.preventDefault();
  }

  return (
    <div>
      <form>
        <input onChange={changeText} name="title" placeholder="Title" />
        <textarea
          onChange={changeText}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button disabled={text.filled ? false : true} onClick={submission}>
          +
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
