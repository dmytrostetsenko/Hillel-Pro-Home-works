const api = (() => {

    const API_URL = 'https://reqres.in/api/'
    class Api {
        constructor () {
            this.xhr = new XMLHttpRequest ();
        }

        login (email, password) {
            return fetch(`${API_URL}login`, {
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
            return fetch(`${API_URL}users?page=${currentPage}`)
        }

        updateUserInfo (name, email){
            return fetch(`${API_URL}users/2`, {
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
            return fetch(`${API_URL}users/2`, {
                method: 'DELETE',
                headers: {
                    'contant-type': 'application/json'
                }
            })
        }


    };

    return new Api();
})();

