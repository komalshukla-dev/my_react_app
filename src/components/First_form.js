import React,{useState} from 'react'

export default function First_form(props) {
    const btn_save_click =()=>{
        let newText = text.toUpperCase();
        setText(newText);
      }
      const label_change = (event) =>{
        setText(event.target.value);
      }
      const [text, setText] = useState("");
    
  return (
    <>
    <div className='container'>
      <form>
        <div className="form-group">
            <label htmlFor="exampleInputEmail1"style={{color:props.mode === "light"?"black":"white"}}> Enter Text Here</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={text} 
            onChange={label_change}></textarea>
        </div>
        <button type="submit" className="btn btn-primary mt-2" id="save_btn" onClick={btn_save_click}>Submit</button>
     </form>
    </div>
        <div className='container'style={{color:props.mode === "light"?"black":"white"}}>
          <h3>Total Words:{text.split(" ").length} </h3>
          <h3>Total charcters:{text.length} </h3>

      <h2>your text summery:</h2>
      <p>{text}</p>
          </div>
          </>

  )
}
