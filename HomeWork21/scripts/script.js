const loginTemplate = document.getElementById('login-template').innerHTML;
const loginRootEl = document.querySelector('.form-root');
const usersTemplate = document.getElementById('users-template').innerHTML;
const sectionUsers = document.querySelector('.section-users');
const usersRootEl = document.querySelector('.users__cards');
const buttonPrevious = document.querySelector('.button--previous');
const buttonNext = document.querySelector('.button--next');
const buttonLogOut = document.querySelector('.users__logout')

const checkCurrentPage = (currentPage) => {
    currentPage == 2 ? buttonNext.disabled = true : buttonNext.disabled = false;
    currentPage == 1 ? buttonPrevious.disabled = true : buttonPrevious.disabled = false;
    return currentPage;
};

const openProgram = () => {
    loginComponent.hideLogin();
    sectionUsers.classList.add('section-users--active');
};

const loginComponent = new LoginComponent (loginTemplate, loginRootEl);
const userComponent = new UserComponent (usersTemplate, usersRootEl);


(() => {
    let currentPage = 1;

    if(localStorage.getItem('token')){
        openProgram();
    };

    loginComponent._onSuccess = () => {
        openProgram();
    };

    userComponent.render(checkCurrentPage(currentPage))


    buttonNext.addEventListener('click', () => {
        userComponent.render(checkCurrentPage(++currentPage))
    })

    buttonPrevious.addEventListener('click', () => {
        userComponent.render(checkCurrentPage(--currentPage))
    })

    buttonLogOut.addEventListener('click', () => {
        localStorage.removeItem('token')
        window.location.reload()
    })
})();



