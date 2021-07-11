import React from 'react';

function Chapters(props) {
    return (
        <>
            <div className="d-sm-flex justify-content-between align-items-center mb-4">
                <h3 className="text-dark mb-0">Capitulos</h3>
            </div>
            <div className="row">
                <div className="col-md-6 col-lg-4 col-xl-3 mb-4">
                    <div className="card"><img className="card-img w-100 d-block" />
                        <div className="card-img-overlay">
                            <h4 style={{fontSize: '2.5rem', color: '#009688'}}>Yo y Tú</h4>
                            <p>Che ha Nde</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 col-xl-3 mb-4">
                    <div className="card"><img className="card-img w-100 d-block" />
                        <div className="card-img-overlay">
                            <h4 style={{fontSize: '2.5rem', color: '#009688'}}>¿De dónde eres?</h4>
                            <p>Moõguápa nde.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 col-xl-3 mb-4">
                    <div className="card"><img className="card-img w-100 d-block" />
                        <div className="card-img-overlay">
                            <h4 style={{fontSize: '2.5rem', color: '#009688'}}>Somos de Paraguay</h4>
                            <p>Ore Paraguaigua</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Chapters;

