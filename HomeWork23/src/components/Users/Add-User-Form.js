import React, {Component} from "react";

export class AddUserForm extends Component {
    constructor () {
        super();
        this.state = {
            id: Date.now(),
            name: '',
            email: '',
            nameError: '',
            emailError: '',
            nameValid: false,
            emailValid: false,
            formValid: false,
        };
    };

    onInputNameChange = (e) => {
        const value = e.target.value
        if (value.length > 0){
            this.setState({name: value, nameError: '', nameValid: true})
        }else{
            this.setState({nameError: 'Name can`t be empty', emailValid: false})
        }
    }

    onInputEmailChange = (e) => {
        const value = e.target.value
        if (value.length > 0){
            this.setState({email: value, emailError: '', emailValid: true})
        }else{
            this.setState({emailError: 'Email can`t be empty', emailValid: false})
        }
    }

    onSubmitForm = (e) => {
        e.preventDefault();
        if(this.state.nameValid && this.state.emailValid){
            this.props.onAddFormSubmit(this.state)
        }
    }

    render () {
        return (
            <>
                <form className="form" onSubmit={this.onSubmitForm}>
                    <input type="text" placeholder="Name" className="form__input" onChange={this.onInputNameChange} />
                    <input type="text" placeholder="Email" className="form__input" onChange={this.onInputEmailChange} />
                    <button type="submit" className="button form__button" disabled={!this.state.nameValid || !this.state.emailValid}>Add user</button>
                    <div className="form__errors">
                        {this.state.nameError && <span style={{color: "red"}}>{this.state.nameError}</span>}
                        <br />
                        {this.state.emailError && <span style={{color: "red"}}>{this.state.emailError}</span>}
                    </div>
                </form>
            </>
        )
    }
}