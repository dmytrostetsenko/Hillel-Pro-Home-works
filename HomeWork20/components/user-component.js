import { renderTemplate } from "../utils/render-template.js";
import { Api } from "../services/api.js";

const api = new Api();

export class UserComponent {
    constructor (template, containerEl){
        this._template = template;
        this._containerEl = containerEl;
    }


    render(currentPage){
        api.getUser(currentPage)
            .then((response) => response.json())
            .then((response) => {
                this._containerEl.innerHTML = renderTemplate(this._template, response.data)
                this.deleteUser();
                this.chengeUserInfo();
            })
    }

    chengeUserInfo(){
        const userNameList = document.querySelectorAll('.user__name');
        const userEmailList = document.querySelectorAll('.user__email')
        const updateFormList = document.querySelectorAll('.update-form');
        const updateButtonsList = document.querySelectorAll('.user__update')
        const deleteButtonsList = document.querySelectorAll('.user__delete')
        const updateNameList = document.querySelectorAll('.update-form__name');
        const updateEmailList = document.querySelectorAll('.update-form__email');


        for (let index = 0; index < updateButtonsList.length; index++) {
            updateButtonsList[index].addEventListener('click', () => {
                updateFormList[index].classList.add('update-form--active')
                updateButtonsList[index].classList.add('user__update--hidden')
                deleteButtonsList[index].classList.add('user__delete--hidden')
                userNameList[index].classList.add('user__name--hidden')
                userEmailList[index].classList.add('user__email--hidden')
            })
        }

        for (let index = 0; index < updateFormList.length; index++) {
            updateNameList[index].value = userNameList[index].innerText;
            updateEmailList[index].value = userEmailList[index].innerText;
            updateFormList[index].addEventListener('submit', (e) => {
                e.preventDefault();
                api.updateUserInfo(updateNameList[index].value, updateEmailList[index].value)
                    .then((response) => response.json())
                    .then((response) => {
                        if (response.name){
                            userNameList[index].innerText = response.name
                            userEmailList[index].innerText = response.email
                        }

                        updateFormList[index].classList.remove('update-form--active')
                        updateButtonsList[index].classList.remove('user__update--hidden')
                        deleteButtonsList[index].classList.remove('user__delete--hidden')
                        userNameList[index].classList.remove('user__name--hidden')
                        userEmailList[index].classList.remove('user__email--hidden')
                    })
            })
        }
    }

    deleteUser(){
        const userCardList = document.querySelectorAll('.user');
        const deleteButtonsList = document.querySelectorAll('.user__delete')
        for (let index = 0; index < deleteButtonsList.length; index++) {
            deleteButtonsList[index].addEventListener('click', () => {
                api.deleteUser()
                    .then((response) => {
                        if (response.status == 204){
                            userCardList[index].classList.add('user__hidden')
                        }
                    })
            })
            
        }
    }
}