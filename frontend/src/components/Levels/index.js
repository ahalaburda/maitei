import React, {
    Component
} from 'react'
import {
    Link
} from "react-router-dom";
import LevelsService from "../../services/Levels";
import i18n from '../../i18n/index'

class Levels extends Component {
    constructor(props) {
        super(props);
        this.state = {
            levels: []
        };
    }

    retrieveLevels() {
        LevelsService.getLevels()
            .then((response) => {
                this.setState({
                    levels: response.data.map((data) => {
                        return {
                            id: data.id,
                            description: data.description,
                            active: data.active
                        }
                    })
                })
            })
            .catch((e) => {
                alert(e);
                console.log(e);
            })
    }

    handleClick(id) {
        sessionStorage.setItem('maitei_level_id', id);
    }

    componentDidMount() {
        this.retrieveLevels();
    }

    render() {
        return (
            <>
                <div className="d-sm-flex justify-content-between align-items-center mb-4">
                    <h3 className="text-dark mb-0">{i18n.t('levels')}</h3>
                </div>
                <div className="row">
                    {this.state.levels.map((d, idx) => {
                        return (
                            <div className="col-md-6 col-xl-3 mb-4" key={idx}>
                                <input id="level_id" name="level_id" type="hidden" value={d.id} />
                                <div className="card shadow border-left-info">
                                    <div className="card-body">
                                        <div className="row align-items-center">
                                            <div className="col mr-2">
                                                <div className="text-uppercase text-info font-weight-bold text-xs mb-1"><span>{i18n.t(d.description)}</span></div>
                                                <div className="row experience-row align-items-center">
                                                    <div className="col-auto">
                                                        <div className="text-dark font-weight-bold h5"><span>0%</span></div>
                                                    </div>
                                                    <div className="col">
                                                        <div className="progress progress-sm">
                                                            <div className="progress-bar bg-info" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" ><span className="sr-only">50%</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="col-auto"><i className="fas fa-clipboard-list fa-2x text-gray-300"></i></div>
                                                </div>
                                            </div>
                                        </div>
                                        <Link to='/chapters'>
                                            <button className="btn btn-primary btn-sm" onClick={() => this.handleClick(d.id)}>{i18n.t('start')}</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </>
        )
    }
}

export default Levels;