import React from "react";

function Text_to_images(props) {
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
            <label for="exampleFormControlTextarea1">{props.question}</label>
            <hr/>
            <br/>
            <br/>
                <div className="row justify-content-center">
                { props.answers.map((data,idx) => {
                    return (
                    <div style={{padding: "0 1em"}} key={idx}>
                        <input type="radio" name="options" id={"option" + data.id} />
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

export default Text_to_images;