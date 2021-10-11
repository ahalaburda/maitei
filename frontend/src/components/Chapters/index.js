import React, { Component } from 'react'
import ChaptersService from "../../services/Chapters";
import i18n from '../../i18n/index'
import {Link, Redirect} from "react-router-dom";
import swal from '@sweetalert/with-react';


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
            swal({
                title: i18n.t('error_title_message'),
                content: <div>
                          <p>{i18n.t('error_no_level')}</p>
                        </div>,
                icon: "error",
                }).then((value) => {
                    window.location.href = "/levels";
                    <Redirect to='/levels' />
              });       
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
                    <h3 className="text-dark mb-0">{i18n.t('chapters')}</h3>
                </div>
                <div className="row">
                    {this.state.chapters.map((d, idx) => {
                        console.log(d.active)
                        if(d.active == true){
                            return (
                                <div className="col-md-6 col-lg-4 col-xl-3 mb-4" key={idx}>
                                    <Link className="" to="/exercises" onClick={() => this.handleClick(d.id)}>
                                    <div className="card" style={{height: '18rem', borderRadius:'0'}}>
                                        <img className="card-img-top" src={d.chapterImage} alt={"img"+d.description} height='78%' width='auto' />
                                        <div className="card-body text-center">
                                            <p className="card-text" style={{color:'#f47706'}}><strong>{i18n.t(d.description)}</strong></p>
                                        </div>
                                    </div>
                                    </Link>
                                </div>
                            )
                        }
                    })}
                </div>
            </>
        );
    }
}

export default Chapters;

