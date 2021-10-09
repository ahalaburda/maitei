import React from 'react';
import {
    Link
} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import i18n from '../../i18n/index'
import './Home.css'

function Home() {
    return (
        <>
        <div className="row">
            <div className="col-lg-12">
                <div className="d-sm-flex justify-content-between align-items-center mb-4">
                    <h3 className="text-dark mb-0">{i18n.t('welcome')}</h3>
                    <Link className="btn btn-primary btn-sm btn-start d-sm-inline-block" role="button" to="/levels"><FontAwesomeIcon icon={faPlay} /><span>   {i18n.t('welcome_start_button')}</span></Link>
                </div>    
            </div>
        </div>
            
            <div className="row">
                <div className="col-md-6 col-xl-3 mb-4">
                    <div className="card shadow border-left-primary py-2">
                        <div className="card-body">
                            <div className="row align-items-center no-gutters">
                                <div className="col mr-2">
                                    <div className="text-uppercase text-primary font-weight-bold text-xs mb-1"><span>{i18n.t('welcome_learned_words')}</span></div>
                                    <div className="text-dark font-weight-bold h5 mb-0"><span>0</span></div>
                                </div>
                                <div className="col-auto"><i className="far fa-check-circle fa-2x text-gray-300"></i></div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="col-md-6 col-xl-3 mb-4">
                    <div className="card shadow border-left-info py-2">
                        <div className="card-body">
                            <div className="row align-items-center no-gutters">
                                <div className="col mr-2">
                                    <div className="text-uppercase text-info font-weight-bold text-xs mb-1"><span>{i18n.t('welcome_current_progress')}</span></div>
                                    <div className="row no-gutters align-items-center">
                                        <div className="col-auto">
                                            <div className="text-dark font-weight-bold h5 mb-0 mr-3"><span>0%</span></div>
                                        </div>
                                        <div className="col">
                                            <div className="progress progress-sm">
                                                <div className="progress-bar bg-info" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" ><span className="sr-only">50%</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-auto"><i className="fas fa-clipboard-list fa-2x text-gray-300"></i></div>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* <div className="col-md-6 col-xl-3 mb-4">
                    <div className="card shadow border-left-warning py-2">
                        <div className="card-body">
                            <div className="row align-items-center no-gutters">
                                <div className="col mr-2">
                                    <div className="text-uppercase text-warning font-weight-bold text-xs mb-1"><span>{i18n.t('welcome_pending_chapters')}</span></div>
                                    <div className="text-dark font-weight-bold h5 mb-0"><span>10</span></div>
                                </div>
                                <div className="col-auto"><i className="fas fa-comments fa-2x text-gray-300"></i></div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
            <div>
                {/* <h5>{i18n.t('welcome_news')}</h5> */}
            </div>
            <div className="row">
                <div className="col-md-6 col-xl-3 mb-4"></div>
                <div className="col-md-6 col-xl-3 mb-4"></div>
                <div className="col-md-6 col-xl-3 mb-4"></div>
            </div>
        </>
    );
}

export default Home;

