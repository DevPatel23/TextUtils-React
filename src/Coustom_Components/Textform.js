import React, {useState} from 'react'


export default function Textform(props) {

  const[text, setText] = useState('');               /*****************************************************/
  // console.log(text);
  // // text = ABC;           //wrong way to change the state
  // setText('Text2');          //correct way to change the state
  // console.log(text);

  let upperClick = () => {
    console.log("Upperase was clicked. " + text);
    // setText("Hello Dev");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase", "warning");
  }
  
  let lowerClick = () => {
    console.log("Lowercase was clicked. " + text);
    // setText("Hello Dev");
    let newText1 = text.toLowerCase();
    setText(newText1);
    props.showAlert("Converted to LowerCase", "warning");
  }
  
  let clearClick = () => {
    console.log("clearClick was clicked. " + text);
    // setText("Hello Dev");
    let newText2 = "";
    setText(newText2);
    props.showAlert("Your text has been cleared", "danger");
  }
  
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showAlert("Text is being spoken", "success");
  }
  
  const copyClick = () =>{
    console.log("Copy button was clicked");
    var text1 = document.getElementById("myBox");
    text1.select();
    navigator.clipboard.writeText(text1.value);
    document.getSelection().removeAllRanges();
    // navigator.clipboard.writeText(text);
    props.showAlert("Your text has been copied", "warning");
  }
  
  const spaceClick = () =>{
    let text0 = text.split(/[ ]+/);
    setText(text0.join(""));
    props.showAlert("Extra space has been removed", "warning");
  }

  
  let clickChange = (event) => {
    // console.log("on change");
    setText(event.target.value);
  }
  
  return (
    <>
    <div className="maincontainer" style={{color: props.mode ==='dark' ? 'white':'black'}}>
    <div className="container">
        <h1> {props.heading}</h1>
        <hr />
        {/* <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
        </div> */}
        {/* <br /> */}

        <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Enter Your Text Here</label>
            <textarea className="form-control" id="myBox" value={text} onChange={clickChange} rows="5"></textarea>
        </div>

        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={upperClick}>Convert to Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={lowerClick}>Convert to Lowercase</button>

        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={copyClick}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={clearClick}>Clear Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={spaceClick}>Remove Extra Spaces</button>
        <button type="submit" disabled={text.length===0} className="btn btn-warning mx-2 my-2" onClick={speak}>Speak</button>
    </div>

    <div className="container my-4">
      <h2>Summary</h2>
      {/* <p>34 words and 123 characters</p> */}
      <p>{text.split(/\s+/).filter((element) =>{return element.length !== 0}).length} words and {text.length} characters</p>
      <p> {0.008 * text.split(" ").filter((element) =>{return element.length !== 0}).length} Time taken to read your text</p>

      <h2>Preview</h2>
      <p>{text.length>0 ? text : "Nothing to preview"}</p>
    </div>
    </div>
    </>
  )
}
