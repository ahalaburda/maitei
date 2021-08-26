import React from "react";

function TextToImages(props) {
  return (
    <div className="container">
        <div className="row">
            <span style={{fontSize: '30px'}}> Selecciona la respuesta correcta</span>
            <br/>
            <br/>
        </div>

        <div className="col-lg-12 text-md-center">
            <br/>
            <br/>
            <label>
              { props.question.split(' ').map((data,idx) =>{
                  if (data === "\n") {
                    return <br/>
                  } else {
                    return data
                  }
                })
              }
            </label>
            <hr/>
            <br/>
            <br/>
                <div className="row justify-content-center">
                { props.answers.map((data,idx) => {
                    return (
                    <div style={{padding: "0 1em"}} key={idx}>
                        <input type="radio" name="options" id={"answer-" + (idx+1)} />
                        <br/>
                        <img src={"http://localhost:8000" + data.answer_filename} alt="" height="100px" width="auto" />
                  </div>
                  )
                })}  
                </div>
        </div>

    </div>
  );
}

export default TextToImages;