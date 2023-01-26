import React, {useState} from "react";

export const AddUserForm = ({onAddNewUser}) => {
    const [newUser, setNewUser] = useState({name: '', email: '', id: Date.now()});
    const [errors, setErrors] = useState({
        nameError: '',
        emailError: '',
        nameValid: false,
        emailValid: false,
    })

    
    const onNameInputChange = (e) => {
        const value = e.target.value;
        if(value){
            setNewUser({...newUser, name: value})
            setErrors({...errors, nameError: '', nameValid: true})
        }else{
            setErrors({...errors, nameError: 'Name can`t be empty', nameValid: false})
        }
    }
    const onEmailInputChange = (e) => {
        const value = e.target.value;
        if(value){
            setNewUser({...newUser, email: value});
            setErrors({...errors, emailError: '', emailValid: true})
        }else{
            setErrors({...errors, emailError: 'Job can`t be empty', emailValid: false})
        }
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if(errors.nameValid && errors.emailValid){
            onAddNewUser(newUser)
        }
        setNewUser({...newUser, name: '', email: ''});
        setErrors({...errors, nameValid: false, emailValid: false})
    }


    return(
        <form className="form new-user" onSubmit={onSubmit}>
            <input type='text' placeholder="Name" className="form__input" value={newUser.name} onChange={onNameInputChange}/>
            <input type='text' placeholder="Email" className="form__input" value={newUser.email} onChange={onEmailInputChange} />
            <button className="button form__button" type='submit' disabled={!errors.nameValid || !errors.emailValid}>Create</button>
            <div>
                {errors.nameError && <span style={{color: "red"}}>{errors.nameError}</span>}
                <br />
                {errors.emailError && <span style={{color: "red"}}>{errors.emailError}</span>}
            </div>
        </form>
    )
}