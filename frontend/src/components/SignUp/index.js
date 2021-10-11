import React from "react";
import {Link} from "react-router-dom";
import CountrySelector from "../../helpers/CountrySelector";
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import { withTranslation } from 'react-i18next';
import i18n from '../../i18n/index'
import './signup.css'
import conacyt from "../../assets/img/conacyt.png";
import prociencia from "../../assets/img/prociencia.jpg";
import uni from "../../assets/img/uni_logo.png";
import axios from 'axios';
import logo from "../../assets/img/logo.png"
import { baseURL } from "../../services/http-common";


// eslint-disable-next-line no-useless-escape
const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
const mediumRegex = new RegExp("^(.{8,})");

class SignUp extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {
          csrfToken: null,
          file: 'http://simpleicon.com/wp-content/uploads/account.png',
          lang: 'es',
          username: '',
          email: '',
          firstname: '',
          lastname: '',
          password: null,
          motherTongue: '',
          birthdate: '2000-01-01T15:00:00.000Z',
          country: '',
          error: '',
          backgroundColor: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleAvatarChange = this.handleAvatarChange.bind(this)
        this.handleUsernameChange = this.handleUsernameChange.bind(this)
        this.handleEmailChange = this.handleEmailChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this)
        this.handleLastNameChange = this.handleLastNameChange.bind(this)
        this.handleNativeLanguageChange = this.handleNativeLanguageChange.bind(this)
        this.handleBirthdayChange = this.handleBirthdayChange.bind(this)
        this.handleCountryChange = this.handleCountryChange.bind(this)
      }

      handleAvatarChange = event => {
        this.setState({
          file: URL.createObjectURL(event.target.files[0])
        })
      }
      handleUsernameChange = event => {
        this.setState({ username: event.target.value });
      }
      handleEmailChange = event => {
        this.setState({ email: event.target.value });
      }
      handlePasswordChange = event => {
        if(strongRegex.test(event.target.value)) {
          this.setState({ backgroundColor: "#0F9D58" });
        } else if(mediumRegex.test(event.target.value)) {
            this.setState({ backgroundColor: "#F4B400" });
        } else {
            this.setState({ backgroundColor: "#DB4437" });
        }
        this.setState({ password: event.target.value });
      }
      handleFirstNameChange = event => {
        this.setState({ firstname: event.target.value });
      }
      handleLastNameChange = event => {
        this.setState({ lastname: event.target.value });
      }
      handleNativeLanguageChange = event => {
        this.setState({ motherTongue: event.target.value });
      }
      handleBirthdayChange(day) {
        this.setState({ birthdate: day });
      }
      handleCountryChange = event => {
        this.setState({ country: event.target.value });
      }

      handleSubmit = event => {
        event.preventDefault();
        const token = document.querySelector('meta[name="csrf-token"]');
        const createURL = baseURL+'/api/create/';
        axios.post(createURL, {
          'avatar': this.state.file,
          'language': this.state.lang,
          'username': this.state.username,
          'email': this.state.email,
          'firstname': this.state.firstname,
          'lastname': this.state.lastname,
          'password': this.state.password,
          'mother_tongue': this.state.motherTongue,
          'birthdate': this.state.birthdate,
          'country': this.state.country,
         }, {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-CSRFToken': token
          }
        }).then((response) => {
          window.location = "/login"
        }).catch(function (e) {
          if (e.response) {
            console.log(e.message);
            console.log(e.response.status);
            console.log(e.response.headers);
          }
        });
      }

      
      render(){
        const changeLanguage = lng => {          
          i18n.changeLanguage(lng);
          this.setState({
              lang: lng
          })
        };

  return (
    <>
      <div className="card shadow-lg o-hidden border-0 my-5 margin-signup ">
        <div className="card-body p-0">
          <div className="row">
            <div className="col-lg-12">
               <div className="text-center">
               <img src={logo} id="logo-signup" alt="sse-min-logo"/>
               </div>
              <div className="p-5">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="text-center">
                      <button onClick={() => changeLanguage('es')} type="button" className="btn-image btn-es white-text" >ES</button>
                      <button onClick={() => changeLanguage('en')} type="button" className="btn-image btn-en white-text" >EN</button>
                      <h3 className="text-dark mt-4 mb-4"><strong>{i18n.t('signup')}</strong></h3>
                      <h5 className="mb-4">{i18n.t('signup_subtitle')}</h5>
                      <span id="msg-error" className="Error-msg">{this.state.error}</span>
                    </div>
                  </div>
                </div>
                
                <form className="user" onSubmit={ this.handleSubmit }>
                  <input type="hidden" defaultValue={this.state.lang} /> 
                  <div className="form-group row">
                    <div className="col-sm-12 col-md-6 mb-3 mb-sm-0">
                      <label id="username-label" htmlFor="username">{i18n.t('username')}</label>
                      <input className="form-control form-control-user" type="text" id="inputUsername" aria-describedby="usernameHelp" placeholder={i18n.t('username')} name="username" required onChange={ this.handleUsernameChange } />
                      <br />
                      <label id="email-label" htmlFor="email">{i18n.t('email')}</label>
                      <input className="form-control form-control-user" type="email" id="inputEmail" aria-describedby="emailHelp" placeholder="Email" name="email" required onChange={ this.handleEmailChange } />
                    </div>
                    <div className="col-sm-12 col-md-6 mb-3 mb-sm-0">
                        <div className="preview text-center">
                            <img className="preview-img" src={this.state.file} alt="Preview" height="150" />
                            <div className="browse-button">
                                <input className="browse-input" type="file" name="UploadedFile" id="UploadedFile" onChange={ this.handleAvatarChange }/>
                            </div>
                            <span className="Error"></span>
                        </div>
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-sm-12 col-md-6 mb-3 mb-sm-0">
                      <label id="password-label" for="password">{i18n.t('password')}</label>
                      <input className="form-control form-control-user PasswordStrength" type="password" id="examplePasswordInput" placeholder={i18n.t('password_message')} name="password" onChange={ this.handlePasswordChange } style={{ backgroundColor: this.state.backgroundColor }}/>
                    </div>
                  </div>

                  <br/>
                  <p style={{ fontSize: '12px'}}>Personal information</p>
                  <hr />

                  <div className="form-group row">
                    <div className="col-sm-6 mb-3 mb-sm-0">
                      <label id="firstname-label" htmlFor="first_name">{i18n.t('firstname')}</label>
                      <input className="form-control form-control-user" type="text" id="inputFirstname" placeholder={i18n.t('firstname')} name="first_name" required maxLength="30" onChange={ this.handleFirstNameChange } />
                    </div>
                    <div className="col-sm-6">
                      <label id="lastname-label" htmlFor="last_name">{i18n.t('lastname')}</label>
                      <input className="form-control form-control-user" type="text" id="inputLastname" placeholder={i18n.t('lastname')} name="last_name" required maxLength="50" onChange={ this.handleLastNameChange }/>
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-sm-6 mb-3 mb-sm-0">
                    <label id="birthdate-label" htmlFor="birthdate">{i18n.t('birthdate')}</label>
                      <DayPickerInput
                        dayPickerProps={{
                          month: new Date(2000, 0),
                          showWeekNumbers: false,
                          todayButton: 'Today',
                        }}
                        onDayChange={ this.handleBirthdayChange }
                      />
                    </div>                         
                    <div className="col-sm-6">
                    <label id="mother_tongue-label" htmlFor="mother_tongue">{i18n.t('native_language')}</label>
                      <input className="form-control form-control-user" type="text" id="inputMotherTongue" placeholder={i18n.t('native_language')} name="mother_tongue" onChange={ this.handleNativeLanguageChange } />
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-sm-6 mb-3 mb-sm-0">
                    <label id="country-label" htmlFor="country">{i18n.t('country')}</label>
                    <CountrySelector onCountryChange={ this.handleCountryChange } />
                    </div>
                  </div>
                    <hr />
                  <button className="btn btn-primary btn-block text-white btn-user" type="submit" > {i18n.t('create_button')}</button>
                  <hr />
                </form>
                <div className="text-center">
                  {/* <a className="small" href="forgot-password.html"> Olvido su contraseña? </a> */}
                </div>
                <div className="text-center">
                  <Link className="small" to="/login">{i18n.t('login_button')} </Link>
                </div>
              </div>
              <div className="text-center">
              <div className="pb-4">
                <img src={conacyt} alt="logo conacyt" height="100px" />
                <br />
                <br />
                <img src={prociencia} alt="logo prociencia" height="100px" />
                <br />
                <br />
                <img src={uni} alt="logo uni" height="150px" />
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

export default withTranslation()(SignUp);
