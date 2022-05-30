import React, {useState} from "react";
import ContentEditable from "react-contenteditable";

function transformation(data) {
  //const test = `${data} It works`;
  return data;
}

function Commentary_5(props) {

  const [text,setText] = useState (props.text);

  const handleChanges = evt =>{
    setText(transformation(evt.target.value));
  };

  return (
    <ContentEditable
      style={{ border: "2px solid black" }}
      //innerRef={this.contentEditable}
      onChange={handleChanges}
      html={text}
    />
  );
  
}


export default Commentary_5;