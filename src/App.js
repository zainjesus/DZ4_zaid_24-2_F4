import React from 'react';
import './App.css';

class Registration extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
        }
        
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleLoginChange = this.handleLoginChange.bind(this) 
        this.handlePasswordChange = this.handlePasswordChange.bind(this) 
    }

    handleLoginChange(event) {
        this.setState({
            email: event.target.value
        });
    }
      
    handlePasswordChange(event) {
        this.setState({
            password: event.target.value
        });
    }

    handleSubmit() {
        alert("Ваша почта: " + this.state.email + "\n" + "Ваш пароль: " + this.state.password)
    }

    render() {
        return (
            <div className="container">
                <div className="registration">
                    <form onSubmit={this.handleSubmit}>
                        <h1 id="header">REGISTRATION</h1>
                        <div className="area">
                            <div className="input">
                                <input value={this.state.email} onChange={this.handleLoginChange} className="input__area" id="email" type="text" placeholder="email" name="email" autoComplete="off" required />
                            </div>
                            <div className="input">
                                <input value={this.state.password} onChange={this.handlePasswordChange} className="input__area" id="password" type="password" placeholder="password" name="psw" required />
                            </div>
                            <div className="input">
                                <input className="input__area" id="reapit__password" type="password" placeholder="repeat password" name="psw-repeat" required />
                            </div>
                        </div>
                        <div className="links">
                            <a className="forgot" href="https://www.youtube.com/watch?v=tVA7u5jGubY">Forgot Password</a>
                            <a className="signin" href="https://www.youtube.com/watch?v=7ePWNmLP0Z0">Sign in</a>
                        </div>
                        <button type="submit" className="registerbtn">Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Registration

