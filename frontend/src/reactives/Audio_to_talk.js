import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons'
import ReactAudioPlayer from 'react-audio-player';


function Audio_to_talk(props) {


  return (
    <div className="container">
        <div className="row">
            <span style={{fontSize: '30px'}}>Escucha y repite</span>
            <br/>
            <br/>
        </div>
        <div className="col-lg-12 text-md-center">
            <img src={props.filename} alt="" height="200px" width="auto" />
            <br/>
            <br/>
            <div id="text">{props.description}</div>
        </div>
        <div className="col-lg-12 text-md-center">
            <br/>
            {/* <button type="button" className="btn btn-info" ><FontAwesomeIcon icon={faPlayCircle} /></button> */}
            <ReactAudioPlayer
              src={"http://localhost:8000" + props.fileAnswer}
              // autoPlay
              controls
            />
        </div>
    </div>
  );
}

export default Audio_to_talk;