class LoginComponent {
    constructor(template, containerEl) {
        this._template = template;
        this._containerEl = containerEl;
        this._loginError = null;
        this._onSuccess = null;
        this.render ();
    };

    onSubmit () {
        let email = document.getElementById('email-input');
        let password = document.getElementById('password-input');
        api.login(email.value, password.value)
            .then(response => response.json())
            .then((response) => {
                if(response.token){
                    this._onSuccess();
                }
                else{
                    this._loginError.innerText = response.error;
                    email.value = '';
                    password.value = '';
                }
            })
    };

    render () {
        this._containerEl.innerHTML = this._template;
        this._loginError = document.querySelector('.login-form__error');
        document.querySelector('.login-form').addEventListener('submit', (e) => {
            e.preventDefault();
            this.onSubmit()
        });
    };

    hideLogin () {
        document.querySelector('.section-login').classList.add('section-login--hidden')
    }
}