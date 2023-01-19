import React from "react";
import defaultAvatar from '../../assets/img/default-avatar.jpg'

export const UserCard = ({ user }) => {
    const name = `${user.first_name} ${user.last_name}`;
    return <ul className='user'>
                <li>
                    <img className='user__avatar' src={
                        user.avatar ?
                        user.avatar :
                        defaultAvatar
                    } alt="user avatar" />
                </li>
                <li className='user__name'>{
                    user.name ?
                    user.name :
                    name
                }</li>
                <li className='user__email'>{user.email}</li>
            </ul>
}