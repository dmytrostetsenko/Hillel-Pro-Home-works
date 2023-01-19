import React, {Component} from "react";
import { USERS_DATA } from "../../data/users-data";
import { AddUser } from "./Add-User";
import { UserCard } from './User-Card';

export class UserList extends Component {
    constructor(){
        super();
        this.state = {
            userData: USERS_DATA,
            addUserPage: false,
            usersList: true,
        };
    }

    onAddUserSubmit = (newUser) => {
        this.setState({
            userData: [...this.state.userData, newUser],
            addUserPage: false,
            usersList: true,
        })
    }

    onAddUserClick = () => {
        this.setState({
            addUserPage: true,
            usersList: false,
        })
    }

    render() {
        return (
            <>
                {this.state.usersList &&
                    <section className='users'>
                        <h1 className='users__heading'>Our users</h1>
                        <ul className='users__cards'>
                            {this.state.userData.map(user => (
                                 <UserCard user = {user} key={user.id} />
                            ))}
                        </ul>
                        <button className="button users__button" onClick={this.onAddUserClick}>Add User</button>
                    </section>
                }
                {this.state.addUserPage && <AddUser onAddUserSubmit={this.onAddUserSubmit} />}
            </>
        )
    }
}