import React, { Component } from 'react'
import UserService from "../../services/Users"
import i18n from '../../i18n/index'
import {Link} from "react-router-dom";

class Profile extends Component {
    constructor(props){
        super(props);
        this.state = {
            chapters: []
        };
    }

    retrieveChapters(userId) {
        UserService.getUserById(userId)
        .then((response) =>{
            this.setState({
                user: response.data.map((data) =>{
                    return {
                        id: data.id,
                        username: data.username,
                        firstname: data.firstname,
                        lastname: data.lastname
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
        this.retrieveChapters(sessionStorage.getItem('id'));
    }
    render(){
        return (
            <>
                <h3 className="text-dark mb-4">Usuario</h3>
                <div className="row mb-3">
                    <div className="col-lg-4">
                        <div className="card mb-3">
                            <div className="card-body text-center shadow">
                                <img className="rounded-circle mb-3 mt-4" src="images/1.a.1.jpg" width={160} height={160}  alt="Profile"/>
                                <div className="mb-3"><button className="btn btn-primary btn-sm" type="button">Cambiar</button></div>
                            </div>
                        </div>
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h6 className="text-primary font-weight-bold m-0">Progress</h6>
                            </div>
                            <div className="card-body">
                                <h4 className="small font-weight-bold">Animales<span className="float-right">20%</span></h4>
                                <div className="progress progress-sm mb-3">
                                    <div className="progress-bar bg-danger" aria-valuenow={20} aria-valuemin={0} aria-valuemax={100} style={{width: '20%'}}><span className="sr-only">20%</span></div>
                                </div>
                                <h4 className="small font-weight-bold">Numeros<span className="float-right">40%</span></h4>
                                <div className="progress progress-sm mb-3">
                                    <div className="progress-bar bg-warning" aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} style={{width: '40%'}}><span className="sr-only">40%</span></div>
                                </div>
                                <h4 className="small font-weight-bold">Familia<span className="float-right">60%</span></h4>
                                <div className="progress progress-sm mb-3">
                                    <div className="progress-bar bg-primary" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{width: '60%'}}><span className="sr-only">60%</span></div>
                                </div>
                                <h4 className="small font-weight-bold">Costumbres<span className="float-right">80%</span></h4>
                                <div className="progress progress-sm mb-3">
                                    <div className="progress-bar bg-info" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} style={{width: '80%'}}><span className="sr-only">80%</span></div>
                                </div>
                                <h4 className="small font-weight-bold">Saludos<span className="float-right">Complete!</span></h4>
                                <div className="progress progress-sm mb-3">
                                    <div className="progress-bar bg-success" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} style={{width: '100%'}}><span className="sr-only">100%</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="row mb-3 d-none">

                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="card shadow mb-3">
                                    <div className="card-header py-3">
                                        <p className="text-primary m-0 font-weight-bold">General</p>
                                    </div>
                                    <div className="card-body">
                                        <form>
                                            <div className="form-row">
                                                <div className="col">
                                                    <div className="form-group"><label htmlFor="username"><strong>Usuario</strong><br /></label><input className="form-control" type="text" placeholder="user.name" name="username" /></div>
                                                </div>
                                                <div className="col">
                                                    <div className="form-group"><label htmlFor="email"><strong>Email</strong></label><input className="form-control" type="email" placeholder="user@example.com" name="email" /></div>
                                                </div>
                                            </div>
                                            <div className="form-row">
                                                <div className="col">
                                                    <div className="form-group"><label htmlFor="first_name"><strong>Nombre</strong><br /></label><input className="form-control" type="text" placeholder="John" name="first_name" /></div>
                                                </div>
                                                <div className="col">
                                                    <div className="form-group"><label htmlFor="last_name"><strong>Apellido</strong><br /></label><input className="form-control" type="text" placeholder="Doe" name="last_name" /></div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="card shadow">
                                    <div className="card-header py-3">
                                        <p className="text-primary m-0 font-weight-bold">Informacion Adicional</p>
                                    </div>
                                    <div className="card-body">
                                        <form>
                                            <div className="form-row">
                                                <div className="col">
                                                    <div className="form-group"><label htmlFor="city"><strong>City</strong></label><input className="form-control" type="text" placeholder="Los Angeles" name="city" /></div>
                                                </div>
                                                <div className="col">
                                                    <div className="form-group"><label htmlFor="country"><strong>Country</strong></label><input className="form-control" type="text" placeholder="USA" name="country" /></div>
                                                </div>
                                            </div>
                                            <div className="form-group"><button className="btn btn-primary btn-sm" type="submit">Actualizar</button></div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Profile;

