import React, { Component } from 'react'
import {
    Link
  } from "react-router-dom";
import ChaptersService from "../../services/Chapters";

class Chapters extends Component {
    constructor(props){
        super(props);
        this.state = {
            chapters: []
        };
    }

    retrieveChapters(levelId) {
        ChaptersService.getChapters(levelId)
        .then((response) =>{
            this.setState({
                chapters: response.data.map((data) =>{
                    return {
                        id: data.id,
                        description: data.description,
                        active: data.active,
                        chapterImage: data.chapter_image
                    }
                })
            })
        })
        .catch((e) =>{
            alert(e);
            console.log(e);
        })
    }

    handleClick(id) {
        sessionStorage.setItem('maitei_chapter_id',id);
                
    }

    componentDidMount(){
        var levelId = sessionStorage.getItem('maitei_level_id');
        this.retrieveChapters(levelId);
    }

    render() {
        return (
            <>
                <div className="d-sm-flex justify-content-between align-items-center mb-4">
                    <h3 className="text-dark mb-0">Capitulos</h3>
                </div>
                <div className="row">
                    {this.state.chapters.map((d, idx) => {
                        return (
                            <div className="col-md-6 col-lg-4 col-xl-3 mb-4" key={idx}>
                                <a href="/exercises" onClick={() => this.handleClick(d.id)}>
                                    <div className="card"><img className="card-img w-100 d-block" src={d.chapterImage} />
                                        <div className="card-img-overlay">
                                            <h4 style={{fontSize: '2.5rem', color: '#009688'}}>{d.description}</h4>
                                            <p>{d.description}</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        )
                    })}
                </div>
            </>
        );
    }
}

export default Chapters;

