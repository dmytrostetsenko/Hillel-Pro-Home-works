import React from "react";

export const UserCard = ({ user }) => {
    return <ul className='user'>
                <li>
                    <img className='user__avatar' src={user.avatar} alt="user avatar" />
                </li>
                <li className='user__name'>{`${user.first_name} ${user.last_name}`}</li>
                <li className='user__email'>{user.email}</li>
            </ul>
}