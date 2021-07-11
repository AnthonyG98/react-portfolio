import React from "react"
import emailjs from "../../node_modules/emailjs-com"
    const initialState = {
        name: '',
        email:'',
        subject:'', 
        message:'',
        nameError:'',
        subjectError:'',
        emailError:'',
        phoneError:''
    }
 class ContactPg extends React.Component{
     constructor(){
         super();
        this.state = initialState
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.validate = this.validate.bind(this);
     }
     handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    validate = (event) => {
        let nameError ="";
        let emailError="";
        let subjectError="";
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const reg = /^\d+$/;
        
        if(this.state.name.length < 2){
            nameError = "Enter a valid name"
        }
        if(nameError){
            this.setState({ nameError })
            return false
        }
        if(!this.state.email.match(re) || this.state.email < 10){
            emailError = "invalid email"
        }
        if(emailError){
            this.setState({ emailError })
            return false
        }
        if(this.state.subject.length < 2){
            subjectError = "Enter a valid subject"
        }
        if(subjectError){
            this.setState({ subjectError })
            return false
        }
        return true
    }
    handleSubmit = event => {
        const isValid = this.validate(event);
        const submitBtn = document.getElementById("submit");
        if(isValid){
            event.preventDefault()
            submitBtn.innerHTML= "Sent"
            this.setState(initialState);
            emailjs.sendForm('service_fprykng', 'template_bb8aebw', event.target, 'user_tF7OLHQ41f2A3l6UsEq8G')
        }
        else {
            event.preventDefault(this.validate());
        }
    }
     render(){
        return(
            <div className="contact-container" id="contact">
                <form id="form" onSubmit={this.handleSubmit}>
                    <label className="label">Name:
                    <input className="input"
                    name="name"
                    onChange={this.handleChange}
                    value={this.state.name}
                    />
                    <div className="test">{this.state.nameError}</div>
                    </label>
                    <label className="label">Email:
                    <input className="input"
                    name="email"
                    onChange={this.handleChange}
                    value={this.state.email}
                    />
                    <div className="test">{this.state.emailError}</div>
                    </label>
                    <label className="label">Subject:
                    <input className="input"
                    name="subject"
                    onChange={this.handleChange}
                    value={this.state.subject}
                    />
                    <div className="test">{this.state.subjectError}</div>
                    </label>
                    <label className="label">Message:
                    <textarea id="message"
                    name="message"
                    onChange={this.handleChange}
                    value={this.state.message}
                    ></textarea>
                    <div className="test">{this.state.messageError}</div>
                    </label>
                    <button id="submit" >Submit</button>
                </form>
            </div>
        )
     }
   
}

export default ContactPg