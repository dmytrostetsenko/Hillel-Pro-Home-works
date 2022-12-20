(() => {
    const users = document.querySelector('.users__cards');
    const nextButton = document.querySelector('.button--next');
    const prevButton = document.querySelector('.button--previous');
    const usersAvatarList = document.getElementsByClassName('user__avatar');
    const usersEmailList = document.getElementsByClassName('user__email');
    const usersNameList = document.getElementsByClassName('user__name');
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://reqres.in/api/users?page=1', false);
    xhr.send();
    let response = JSON.parse(xhr.response);
    for (i = 0; i < response.data.length; i++){
        const user = document.createElement('div');
        user.classList.add('user');
        const avatar = document.createElement('img');
        avatar.classList.add('user__avatar');
        const mail = document.createElement('span');
        mail.classList.add('user__email');
        const name = document.createElement('span');
        name.classList.add('user__name');
        mail.innerText = `Email: ${response.data[i].email}`;
        avatar.src = response.data[i].avatar;
        name.innerText = `Name: ${response.data[i].first_name} ${response.data[i].last_name}`;
        user.append(avatar);
        user.append(name);
        user.append(mail);
        users.append(user);
    };
    
    nextButton.addEventListener('click', () => {
        xhr.open('GET', 'https://reqres.in/api/users?page=2', false);
        xhr.send();
        response = JSON.parse(xhr.response);
        for (i = 0; i < response.data.length; i++){
            usersAvatarList[i].src = response.data[i].avatar;
            usersEmailList[i].innerText = `Email: ${response.data[i].email}`;
            usersNameList[i].innerText = `Name: ${response.data[i].first_name} ${response.data[i].last_name}`;
        };
    });
    prevButton.addEventListener('click', () => {
        xhr.open('GET', 'https://reqres.in/api/users?page=1', false);
        xhr.send();
        response = JSON.parse(xhr.response);
        for (i = 0; i < response.data.length; i++){
            usersAvatarList[i].src = response.data[i].avatar;
            usersEmailList[i].innerText = `Email: ${response.data[i].email}`;
            usersNameList[i].innerText = `Name: ${response.data[i].first_name} ${response.data[i].last_name}`;
        };
    });

    const newUserCards = document.querySelector('.created__cards')
    const submitedUserFirstName = document.querySelector('.create__input--first-name');
    const submitedUserLastName = document.querySelector('.create__input--last-name');
    const submitedUserEmail = document.querySelector('.create__input--email');
    const submitedUserJob = document.querySelector('.create__input--job');
    const createForm = document.querySelector('.create__form');

    createForm.addEventListener('submit', (e) => {
        e.preventDefault()
        const newUser = {
            first_name: submitedUserFirstName.value,
            last_name: submitedUserLastName.value,
            email: submitedUserEmail.value,
            job: submitedUserJob.value,
        };
        xhr.open('POST', 'https://reqres.in/api/users', false);
        xhr.setRequestHeader('content-type', 'application/json');
        xhr.send(JSON.stringify(newUser));
        const response = JSON.parse(xhr.response);

        const newUserCard = document.createElement('div');
        newUserCard.classList.add('created__card');
        newUserCards.append(newUserCard);

        const newUserName = document.createElement('span');
        newUserName.classList.add('created__name');
        newUserName.innerText = `${response.first_name} ${response.last_name}`;
        newUserCard.append(newUserName);
        submitedUserFirstName.value = '';
        submitedUserLastName.value = '';

        const newUserEmail = document.createElement('span');
        newUserEmail.classList.add('created__email');
        newUserEmail.innerText = response.email;
        newUserCard.append(newUserEmail);
        submitedUserEmail.value = '';


        const newUserJob = document.createElement('span');
        newUserJob.classList.add('created__job');
        newUserJob.innerText = response.job;
        newUserCard.append(newUserJob);
        submitedUserJob.value = '';

    });
})();






