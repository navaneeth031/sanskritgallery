import React, {useState} from "react";
import ContentEditable from "react-contenteditable";

import Commentary_5 from "./Commentary_5";

function transformation(data) {
  //const test = `${data} It works`;
  return data;
}

function Commentary_4(props) {

  const [text,setText] = useState (props.text);
  const [isShow,setShow] = useState (false);

  const handleChanges = evt =>{
    setText(transformation(evt.target.value));
  };

  const handleClick = evt =>{
    setShow(!isShow);
  };

  return (
    <div>
      <ContentEditable
      style={{ border: "2px solid black" }}
      //innerRef={this.contentEditable}
      onChange={handleChanges}
      html={text} />

      <button onClick={handleClick}>Toggle</button>
      
      {isShow ?
        <Commentary_5 text="Commentary_5: Display Commentary 5 here"/>
      :
        <></>
      }
      
    </div>
  );
}


export default Commentary_4;