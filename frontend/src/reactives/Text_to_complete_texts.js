import React from "react";

function Text_to_complete_text(props) {
  return (
    <div className="container">
        <div className="row">
            <span style={{fontSize: '30px'}}>Completa la Oracion</span>
            <br/>
            <br/>
        </div>

        <div className="col-lg-12 text-md-center">
            <br/>
            <br/>
            <hr/>
            <br/>
            <br/>
                <div className="row justify-content-center">
                  { props.question.split(' ').map((data,idx) =>{
                      if (data === "INPUT") {
                        return <input type="text" key={idx}/>
                      } else {
                        return <p className="ml-1 mr-1" key={idx}>{data}</p>
                      }
                    })
                  }
                </div>
        </div>

    </div>
  );
}

export default Text_to_complete_text;