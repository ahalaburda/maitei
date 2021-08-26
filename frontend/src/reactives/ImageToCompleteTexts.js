import React from "react";

function ImageToCompleteTexts(props) {
  let inputCounter=0;
  return (
    <div className="container">
        <div className="row">
            <span style={{fontSize: '30px'}}>Completa la Oracion</span>
            <br/>
            <br/>
        </div>

        <div className="col-lg-12 text-md-center">
            <img src={props.filename} alt={props.filename} height="200px" width="auto" />
            <br/>
            <br/>
        </div>

        <div className="col-lg-12 text-md-center">
            <br/>
            <br/>
            <label>Completa la Oracion</label>
            <hr/>
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
            <div>
              { props.correct_answer.map((data,idx) =>{
                  let answer = data.answer
                  return  <input key={idx} id={"answer-1"+idx} name={"answer-1"+idx} type="hidden" value={answer.toLowerCase()} />
                })}
            </div>
        </div>

    </div>
  );
}

export default ImageToCompleteTexts;