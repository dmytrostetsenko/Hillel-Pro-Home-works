import React, {useState} from "react";

export const LoginForm = ({onLoginFormSubmit, children}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState({
        emaiError: '',
        passwordError: '',
        emailValid: false,
        passwordValid: false,
    })

    const onEmailInputChange = (e) => {
        const value = e.target.value;
        if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)){
            setErrors({...errors, emaiError: 'invalid Email' , emailValid: false})
        }else{
            setErrors({...errors, emaiError: '', emailValid: true})
            setEmail(value)
        }
    }
    const onPasswordInputChange = (e) => {
        const value = e.target.value;
        if(!value){
            setErrors({...errors, passwordError: 'Password is required', passwordValid: false})
        }else{
            setPassword(value);
            setErrors({...errors, passwordError: '', passwordValid: true})
        }
    };

    const onSubmit = (e) => {
        e.preventDefault();
        onLoginFormSubmit(email, password)
    }


    return(
        <form className="form" onSubmit={onSubmit}>
            <input type='text' className="form__input" placeholder="Email" onChange={onEmailInputChange} />
            <input type='password' className="form__input" placeholder="Password" onChange={onPasswordInputChange} />
            <button className="button form__button" type='submit' disabled={!errors.emailValid || !errors.passwordValid}>Log in</button>
            <div>
                {errors.emaiError && <span className="form__error" style={{color: "red"}}>{errors.emaiError}</span>}
                <br />
                {errors.passwordError && <span className="form__error" style={{color: "red"}}>{errors.passwordError}</span>}
                {children}
            </div>
        </form>
    )
}