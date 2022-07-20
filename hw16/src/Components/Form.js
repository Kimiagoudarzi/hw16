import React,{ Component } from "react";
import "./form.css";
import Card from './Card';

const style = {display: 'flex', gap: 10, alignItems: 'center'};
let defaultError = true;

const initialState = {
    firstName: '',
    lastName: '',
    PhoneNumber: '',
    firstNameError: '',
    lastNameError: '',
    PhoneNumberError: '',
    email: '',
    emailError: '',
    contact : [],
  };

class Form extends Component {
    constructor() {
    super();
    this.state= initialState;

}
componentDidMount() {
    defaultError= false;
}
    
handleChange = (event) => {
    const {value, name} = event.target;
    this.setState({[name]: value}, this.validate);
}

//   validate
validate = () => {
    this.validatefirstName();
    this.validatelastName();
    this.validateEmail();
    this.validatePhoneNumber();
}

//   firstName
validatefirstName = () => {
    const {firstName} = this.state;
    if(firstName === '') {
        this.setState({firstNameError: 'first name is Required!'});
    } else if(new RegExp('[0-9]').test(firstName)) {
        this.setState({firstNameError: 'Invalid first name!'});
    }else {
        this.setState({firstNameError: ''});
    }
}

//   lastName
validatelastName = () => {
    const {lastName} = this.state;
    if(lastName === '') {
        this.setState({lastNameError: 'last name is Required!'});
    } else if(new RegExp('[0-9]').test(lastName)) {
        this.setState({lastNameError: 'Invalid last name!'});
    }else {
        this.setState({lastNameError: ''});
    }
}

// email
validateEmail = () => {
    const {email} = this.state;
    if(email === '') {
      this.setState({emailError: 'Email is Required!'});
    } else if(!email.includes('@')) {
      this.setState({emailError: 'Invalid email'});
    }else {
      this.setState({emailError: ''});
    }
}

// PhoneNumber
validatePhoneNumber= () => {
    const {PhoneNumber} = this.state;
    if(PhoneNumber.length < 11) {
      this.setState({PhoneNumberError: 'PhoneNumber is too Short!'});
    } else {
      this.setState({PhoneNumberError: ''});
    }
}


    render() { 
        const {firstName, lastName, PhoneNumber,email, firstNameError,lastNameError, PhoneNumberError,emailError} = this.state;
        const isValid = firstNameError === '' && emailError === '' && PhoneNumberError === ''  && lastNameError === '';
        return ( 
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                <div className="title"><h1>Contact management<br/> web application</h1></div>    
                <div style={style}>
                    <input name="firstName" placeholder="first name" value={firstName} onChange={this.handleChange}/><span className="error-message">*</span>
                </div>
                <div className='error-message'>{firstNameError}</div>

                <div style={style}>
                    <input name="lastName" placeholder="last name" value={lastName} onChange={this.handleChange}/><span className="error-message">*</span>
                </div>
                <div className='error-message'>{lastNameError}</div>

                <div style={style}><input name="PhoneNumber" placeholder="Phone number"  value={PhoneNumber} onChange={this.handleChange}/><span className="error-message">*</span></div>
                <div className='error-message'>{PhoneNumberError}</div>

                {/* <div style={style}>
                <select id="Relation">
                    <option value="family">family</option>
                    <option value="friend">friend</option>
                    <option value="teammate">teammate</option>
                </select>
                </div>
                <div className='error-message'>{selectorError}</div> */}

                <div style={style}>
                    <input name="email" placeholder="email" value={email} onChange={this.handleChange}/><span className="error-message">*</span>
                </div>
                <div className='error-message'>{emailError}</div>
                
                <input type="submit" value="Add" disabled={!isValid || defaultError}/>
                </form>
                <Card/>
            </div>
         );
    }
}
 
export default Form;