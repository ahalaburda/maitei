import React from 'react';
// import './Header.css'

function Home(props) {
    return (
        <>
            <div className="d-sm-flex justify-content-between align-items-center mb-4">
                <h3 className="text-dark mb-0">Bienvenido</h3><a className="btn btn-primary btn-sm d-none d-sm-inline-block" role="button" href="niveles.html"><i className="fas fa-play fa-sm text-white-50"></i>&nbsp;Empezemos</a>
            </div>
            <div className="row">
                <div className="col-md-6 col-xl-3 mb-4">
                    <div className="card shadow border-left-primary py-2">
                        <div className="card-body">
                            <div className="row align-items-center no-gutters">
                                <div className="col mr-2">
                                    <div className="text-uppercase text-primary font-weight-bold text-xs mb-1"><span>Palabras aprendidas</span></div>
                                    <div className="text-dark font-weight-bold h5 mb-0"><span>40</span></div>
                                </div>
                                <div className="col-auto"><i className="far fa-check-circle fa-2x text-gray-300"></i></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-xl-3 mb-4">
                    <div className="card shadow border-left-info py-2">
                        <div className="card-body">
                            <div className="row align-items-center no-gutters">
                                <div className="col mr-2">
                                    <div className="text-uppercase text-info font-weight-bold text-xs mb-1"><span>Progreso Actual</span></div>
                                    <div className="row no-gutters align-items-center">
                                        <div className="col-auto">
                                            <div className="text-dark font-weight-bold h5 mb-0 mr-3"><span>50%</span></div>
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
                </div>
                <div className="col-md-6 col-xl-3 mb-4">
                    <div className="card shadow border-left-warning py-2">
                        <div className="card-body">
                            <div className="row align-items-center no-gutters">
                                <div className="col mr-2">
                                    <div className="text-uppercase text-warning font-weight-bold text-xs mb-1"><span>Clases Pendientes</span></div>
                                    <div className="text-dark font-weight-bold h5 mb-0"><span>18</span></div>
                                </div>
                                <div className="col-auto"><i className="fas fa-comments fa-2x text-gray-300"></i></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h5>Noticias recientes</h5>
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

