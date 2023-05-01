import React,{useState} from 'react'

export default function TextForm(props) {
    const [text,setText]=useState("Enter text");
    const handleUpClick=()=>
    {
        console.log("upppercase")
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handleLoClick=()=>
    {
        console.log("lowercase")
        let newText=text.toLowerCase();
        setText(newText);
    }
    const handleooClick=()=>
    {
        console.log("lowercase")
        let newText=text.toLowerCase().replace(/\b\w/g, s => s.toUpperCase());
        setText(newText);
    }
    const handleOnChange=(event)=>
    {
        console.log("onchange");
        setText(event.target.value);
    }
  return (
    <>
    <div style={{color:props.mode==='dark'?'white':'black'}}>
      
<div class="mb-3">
   
  <label for="myBox" class="form-label">Example textarea</label>
  <textarea className="form-control" value={text}id="myBox" onChange={handleOnChange} rows="3"></textarea>
</div>
<button className="btn.btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn.btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
<button className="btn.btn-primary mx-2" onClick={handleooClick}>Convert to NormalCase</button>
    </div>

    <div className="conatiner" style={{color:props.mode==='dark'?'white':'black'}}>

<p> Your text summary</p>
<p>{text.split(" ").length} words and {text.length} characters</p>
<p>{0.008*text.split(" ").length}Minutes Read</p>
<h2>
  Preview
</h2>
<p>{text.length>0?text:"Enter something in textbox to preview"}</p>
    </div>
    </>
  )
}
