import React, {useState} from "react";
import { CONSTANT } from "../../constants/constants";
import { LoginForm } from "../../Components/LoginForm/LoginForm.jsx";

export const Login = ({onSuccessLogin}) => {
    const [submitError, setSubmitError] = useState('')

    const onLoginFormSubmit = (email, password) => {
        fetch(`${CONSTANT.API_URL}login`, {
            method: 'POST',
            body: JSON.stringify({
                email,
                password
            }),
            headers: {
                'content-type': 'application/json'
            }
        })
        .then(response => response.json())
        .then((response) => {
            if(response.token){
                onSuccessLogin(response.token)
                setSubmitError('')
            }else{
                setSubmitError(response.error)
            }
        })
    }


    return (
        <section className="section-form">
            <LoginForm onLoginFormSubmit={onLoginFormSubmit} >
                {submitError && <span className="form__error" style={{color: "red"}}>{submitError}</span>}
            </LoginForm>
        </section>
    )
}
