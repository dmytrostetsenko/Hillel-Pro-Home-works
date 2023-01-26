import React, {useState} from "react";
import { CONSTANT } from "../../constants/constants";
import defaultAvatar from '../../assets/img/default-avatar.jpg'

export const UpdateUser = ({setActive, currentUser, setUserState, onUpdateUserSubmit}) => {
    const avatar = currentUser.avatar;
    const [updUser, setUpdUser] = useState({
        name: currentUser.name,
        email: currentUser.email
    })

    const onDeleteUser = () => {
        fetch(`${CONSTANT.API_URL}users/2`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        })
        .then((response) => {
            if(response.status == 204){
                setUserState(false)
            }
        })
    }

    const onNameInputChange = (e) => {
        setUpdUser({...updUser, name: e.target.value})
    }
    const onEmailInputChange = (e) => {
        setUpdUser({...updUser, email: e.target.value})
    };

    const onSubmit = (e) => {
        e.preventDefault();
        onUpdateUserSubmit(updUser.name, updUser.email)
        setActive(false)
    }

    return(
        <>
            <form className="form upd-form" onSubmit={onSubmit}>
                <img className="avatar form__avatar" src={avatar ? avatar : defaultAvatar} alt='avatar' />
                <input type='text' className="form__input" value={updUser.name} onChange={onNameInputChange} />
                <input type='text' className="form__input" value={updUser.email} onChange={onEmailInputChange} />
                <div className="form__buttons">
                    <button className="button form__button" type='submit'>Update</button>
                    <button className="button form__button" onClick={onDeleteUser}>Delete</button>
                </div>
            </form>
        </>
    )
}