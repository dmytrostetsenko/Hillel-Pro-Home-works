import React, {Component} from 'react';
import {USERS_DATA} from '../constants/users-data.js'
import { UserCard } from './user-card.jsx';

export class App extends Component {
    constructor() {
        super();
        this.state = USERS_DATA;
    }

    render() {
        return(
            <>
                <section className='users'>
                <h1 className='users__heading'>Our users</h1>
                    <ul className='users__cards'>
                        {this.state.map(user => (
                            <UserCard user = {user} key={`user-${user.id}`}/>
                        ))}
                    </ul>
                </section>
            </>
        )
    }
}
