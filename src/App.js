import React from 'react';
import './App.css';

class Registration extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            name: "",
            surname: "",
            fatherName: "",
            number: "",
            email: "",
            password: ""
        }
        
        this.handleChange = this.handleChange.bind(this) 
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({
          [event.target.name]: event.target.value
        });
      }

    handleSubmit() {
        alert(
        "Ваше имя: " + this.state.name + "\n" + 
        "Ваша фамилия: " + this.state.surname + "\n" + 
        "Ваше отчество: " + this.state.fatherName + "\n" + 
        "Ваш номер: " + this.state.number + "\n" + 
        "Ваша почта: " + this.state.email + "\n" + 
        "Ваш пароль: " + this.state.password
        )
    }

    render() {
        return (
            <div className="container">
                <div className="registration">
                    <form onSubmit={this.handleSubmit}>
                        <h1 id="header">РЕГИСТРАЦИЯ</h1>
                        <div className="area">
                            <div className="input">
                                <input value={this.state.name} onChange={this.handleChange} className="input__area" id="name" type="text" placeholder="Имя" name="name" autoComplete="off" required />
                            </div>
                            <div className="input">
                                <input value={this.state.surname} onChange={this.handleChange} className="input__area" id="surname" type="text" placeholder="Фамилия" name="surname" autoComplete="off" required />
                            </div>
                            <div className="input">
                                <input value={this.state.fatherName} onChange={this.handleChange} className="input__area" id="fatherName" type="text" placeholder="Отчество" name="fatherName" autoComplete="off" required />
                            </div>
                            <div className="input">
                                <input value={this.state.number} onChange={this.handleChange} className="input__area" id="number" type="number" placeholder="Номер телефона" name="number" autoComplete="off" required />
                            </div>
                            <div className="input">
                                <input value={this.state.email} onChange={this.handleChange} className="input__area" id="email" type="text" placeholder="Электронный адрес" name="email" autoComplete="off" required />
                            </div>
                            <div className="input">
                                <input value={this.state.password} onChange={this.handleChange} className="input__area" id="password" type="password" placeholder="Пароль" name="password" required />
                            </div>
                            <div className="input">
                                <input className="input__area" id="reapit__password" type="password" placeholder="Повторите пароль" name="psw-repeat" required />
                            </div>
                        </div>
                        <div className="links">
                            <a className="forgot" href="https://www.youtube.com/watch?v=tVA7u5jGubY">Забыли пароль?</a>
                            <a className="signin" href="https://www.youtube.com/watch? v=7ePWNmLP0Z0">Войти</a>
                        </div>
                        <button type="submit" className="registerbtn">Подтвердить</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Registration
