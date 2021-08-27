import React from "react";

function TextToCompleteText(props) {
  let inputCounter=0;

  return (
    <div className="container">
      <div className="row">
        <span style={{fontSize: '30px'}}>Selecciona la respuesta correcta.</span>
        <br/>
        <br/>
      </div>
      <div className="col-lg-12 text-md-center">
        <br/>
        <br/>
        <h5 id="text">{props.description}</h5>
        <hr/>
        <br/>
        <br/>
        <div className="row justify-content-center">
          { props.question.split(' ').map((data,idx) =>{
              if (data === "INPUT") {
                inputCounter++;
                return <input type="text" key={idx} id={"answer-"+inputCounter} />
              } else {
                return <p className="ml-1 mr-1" key={idx}>{data}</p>
              }
            }) }
        </div>
      </div>
    </div>
  );
}

export default TextToCompleteText;