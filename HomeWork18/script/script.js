const xhr = new XMLHttpRequest();
const URL = 'https://reqres.in/api/';
const formEmail = document.getElementById('form__email');
const formPass = document.getElementById('form__password');
const form = document.querySelector('.section-form');
const formError = document.querySelector('.form__error')
const sectionUser = document.querySelector('.section-users');
const cardUserTemplate = document.getElementById('card-user').innerHTML;
const cardList = document.querySelector('.users__cards');
const buttonNext = document.querySelector('.button--next');
const buttonPrev = document.querySelector('.button--previous');


const submitForm = (email, password, callback) => {
    xhr.open('POST', `${URL}login`, true);
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload = function(event) {
        const response = JSON.parse(event.currentTarget.response)
        if (response.token) {
            callback(response)
        }else{
            formError.innerText = response.error;
            formEmail.value = '';
            formPass.value = '';
        }
    }
    xhr.send(JSON.stringify({
        email,
        password
    }));
};

const succesLogin = () => {
    sectionUser.classList.add('section-users--active');
    form.classList.add('section-form--hidden');
}


const getUsers = (page, callback) => {
    xhr.open('GET', `${URL}users?page=${page}`, true)
    
    xhr.onload = function(event) {
        const response = JSON.parse(event.currentTarget.response)
        callback(response.data)
    }
    xhr.send();
};

const deleteUser = (callback) => {
    xhr.open('DELETE', `${URL}users/2`, true);
    xhr.onload = function (event) {
        const response = JSON.parse(event.currentTarget.status)
        if (response === 204){
            callback(response);
        };
    };
    xhr.send();
};

const updateUser = (name, email, callback) => {
    xhr.open('PATCH', `${URL}users/2`, true);
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload = function (event) {
        const response = JSON.parse(event.currentTarget.response)
        callback(response)
    }
    xhr.send(JSON.stringify({
        name,
        email
    }));
}


const addUserCardList = (users, template) => {
    let result = '';

    users
        .map((user) => {
            return {
                ...user,
                name: `${user.first_name} ${user.last_name}`
            }
        })
        .forEach(user => {
            result += template
                .replaceAll('{{name}}', user.name)
                .replaceAll('{{email}}', user.email)
                .replaceAll('{{avatar}}', user.avatar)
        });
    
    cardList.innerHTML = result;
    const userCard = document.querySelectorAll('.user');
    const userName = document.querySelectorAll('.user__name');
    const userMail = document.querySelectorAll('.user__email')
    const updateForm = document.querySelectorAll('.update-form');
    const buttonUpdate = document.querySelectorAll('.user__update')
    const updateName = document.querySelectorAll('.update-form__name');
    const updateMail = document.querySelectorAll('.update-form__email');
    const buttonDeleteList = document.querySelectorAll('.user__delete');
    for (let index = 0; index < buttonDeleteList.length; index++) {
        buttonDeleteList[index].addEventListener('click', () => {
            deleteUser(() => {
                userCard[index].classList.add('user__hidden')
            })
        })
    }
    for (let index = 0; index < buttonUpdate.length; index++) {
        buttonUpdate[index].addEventListener('click', () => {
            updateForm[index].classList.add('update-form--active')
            buttonUpdate[index].classList.add('user__update--hidden')
            buttonDeleteList[index].classList.add('user__delete--hidden')
            userName[index].classList.add('user__name--hidden')
            userMail[index].classList.add('user__email--hidden')
        })
    }
    for (let index = 0; index < updateForm.length; index++) {
        updateName[index].value = userName[index].innerText;
        updateMail[index].value = userMail[index].innerText;
        updateForm[index].addEventListener('submit', (e) => {
            e.preventDefault();
            updateUser(updateName[index].value, updateMail[index].value, (ev) => {
                if(ev.name){
                    userName[index].innerText = ev.name;
                    userMail[index].innerText = ev.email;
                }
                updateForm[index].classList.remove('update-form--active')
                buttonUpdate[index].classList.remove('user__update--hidden')
                buttonDeleteList[index].classList.remove('user__delete--hidden')
                userName[index].classList.remove('user__name--hidden')
                userMail[index].classList.remove('user__email--hidden')
            })
        })
    }
}

const callback = (users) => {
    addUserCardList(users, cardUserTemplate)
};

const checkCurrentPage = (currentPage) => {
    currentPage == 2 ? buttonNext.disabled = true : buttonNext.disabled = false;
    currentPage == 1 ? buttonPrev.disabled = true : buttonPrev.disabled = false;
};

const updateUserList = (currentPage) => {
    checkCurrentPage(currentPage)
    getUsers(currentPage, callback);
};

(()=>{
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        submitForm(formEmail.value, formPass.value, () =>{
            succesLogin();
        })
    });

    let currentPage = 1;
    getUsers(checkCurrentPage(currentPage), callback);

    buttonNext.addEventListener('click', () => {
        updateUserList(++currentPage, cardUserTemplate)
    });

    buttonPrev.addEventListener('click', () => {
        updateUserList(--currentPage, cardUserTemplate)
    });
})()