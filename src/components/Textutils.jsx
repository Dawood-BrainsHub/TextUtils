import React, { useState } from "react";

function TextUtils(props){
    const [text,setText] = useState('');

    const handleOnChange = (event) =>{
        setText(event.target.value);
    }

    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLowClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleCapClick = () =>{
        let words = text.split(' ');
        setText(words.map((word)=>{
            return word[0].toUpperCase() + word.substring(1);
        }).join(' '));
    }
    const handleClrClick = () =>{
        setText('');
    }

    return(
        <div className="container">
            <div className="mt-5 mb-3">
                <h6>{props.title}</h6>
                <textarea className="form-control" value={text} onChange={handleOnChange} rows="8"></textarea>
            </div>
            <p>Words: <b>{text.split(' ').length}</b>, Characters: <b>{text.length}</b></p>

            <button type="button" className="btn btn-primary me-2" onClick={handleUpClick} >Convert UpperCase</button>
            <button type="button" className="btn btn-primary me-2" onClick={handleLowClick} >Convert LowerCase</button>
            <button type="button" className="btn btn-primary me-2" onClick={handleCapClick} >Convert CapitilizeCase</button>
            <button type="button" className="btn btn-primary me-2" onClick={handleClrClick} >Clear</button>
        </div>
    );

}
export default TextUtils;