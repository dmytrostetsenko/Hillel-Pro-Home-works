import { CONSTANTS } from "../constants/constans.js";

export class Api {
    constructor () {
        
    }

    login (email, password) {
        return fetch(`${CONSTANTS.API_URL}login`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        })
    }


    getUser(currentPage) {
        return fetch(`${CONSTANTS.API_URL}users?page=${currentPage}`)
    }

    updateUserInfo (name, email){
        return fetch(`${CONSTANTS.API_URL}users/2`, {
            method: 'PATCH',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify({
                name,
                email
            })
        })
    }

    deleteUser (){
        return fetch(`${CONSTANTS.API_URL}users/2`, {
            method: 'DELETE',
            headers: {
                'contant-type': 'application/json'
            }
        })
    }


};

