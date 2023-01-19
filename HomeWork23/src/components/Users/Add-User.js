import React, {Component} from "react";
import { AddUserForm } from "./Add-User-Form";

export class AddUser extends Component {

    onAddFormSubmit = (userData) => {
        this.props.onAddUserSubmit(userData)
    }

    render () {
        return (
            <>
                <section className="add-user">
                <AddUserForm onAddFormSubmit={this.onAddFormSubmit} />
                </section>
            </>
        )
    }
}