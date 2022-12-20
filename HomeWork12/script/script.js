const users = [
    {
        login: 'Stetsenko41@gmail.com',
        password: '123456'
    },
    {
        login: 'Admin@te.net.ua',
        password: '789123'
    },
    {
        login: 'Admin123@gmail.com',
        password: 'w56k855'
    }
];

function isIncludeUser (array, login, password) {
    let validUser = false;
    array.forEach(user => {
        if (user.login === login && user.password === password){
            validUser = true
        }
    })
    return validUser;
}

(() =>{
    const submitButton = document.querySelector('.form__button');
    const submitForm = document.querySelector('.form');
    const submitLogin = document.querySelector('.form__login');
    const loginError = document.querySelector('.form__login-error')
    const submitPassword = document.querySelector('.form__password');
    const formError = document.querySelector('.form__error')

    submitLogin.addEventListener('change', () => {
        let {value : userLogin} = submitLogin;
        if (!userLogin.includes('@')) {
            loginError.innerText = 'Email must include @';
            return;
        }else{
            loginError.innerText = '';
            const atIndex = userLogin.indexOf('@');
            userLogin = userLogin.substring(atIndex + 1, userLogin.length)
        }
        if (!userLogin.includes('.')){
            loginError.innerText = 'Email must include domain'
            return;
        }else{
            loginError.innerText = '';
            const dotIndex = userLogin.indexOf('.');
            userLogin = userLogin.substring(dotIndex + 1, userLogin.length)
        }

        if (!userLogin){
            loginError.innerText = 'Incorrect domain'
            return;
        }
    
        userLogin = userLogin.split('')
        userLogin.forEach((char) => {
            if (+char == char){
                loginError.innerText = 'Incorrect domain'
                return;
            }else{
                loginError.innerText = '';
            }
        })
    })

    submitForm.addEventListener('change', () => {
        if (submitLogin.value && submitPassword.value){
            submitButton.disabled = false;
        }else{
            submitButton.disabled = true;
        }
    })

    submitForm.addEventListener('submit', (e) =>{
        e.preventDefault();
        let {value : userLogin} = submitLogin;
        let {value : userPassword} = submitPassword;

        if (userPassword.length < 6){
            formError.innerText = `Password is short \n ${loginError.innerText}`;
            submitPassword.value = ''
            loginError.innerText = ''
            submitButton.disabled = true
            return;
        }else{
            formError.innerText = '';
        }

        if (isIncludeUser(users, userLogin, userPassword)){
            formError.innerText = '';
            window.location.assign('https://www.google.com')
        }else{
            formError.innerText = `Invalid email address or password \n ${loginError.innerText}`
            loginError.innerText = ''
            submitPassword.value = ''
            submitButton.disabled = true
        }
    })

})();