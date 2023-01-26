import React, {useState, useEffect} from "react";
import { UserCard } from "../../Components/UserCard/UserCard.jsx";
import { CONSTANT } from "../../constants/constants";
import { Modal } from "../../Components/Modal/Modal.jsx";
import { AddUserForm } from "../../Components/AddUserForm/AddUserForm.jsx";

export const UserList = ({setToken}) => {
    const [userList, setUserList] = useState([]);
    const [modalActive, setModalActive] = useState(false);
    const page = 1;

    const getUsers = (page) => {
        fetch(`${CONSTANT.API_URL}users?page=${page}`)
            .then(response => response.json())
            .then((response) => {
                setUserList(response.data)
        })
    }

    const onAddNewUser = (newUser) => {
            fetch(`${CONSTANT.API_URL}users`, {
                method: 'POST',
                body: JSON.stringify({
                    name: newUser.name,
                    email: newUser.email
                }),
                headers: {
                    'content-type': 'application/json'
                }
            })
            .then(response => response.json())
            .then((response) => {
                setUserList([...userList, response])
                setModalActive(false)
            })
    }

    const nextPage = () => {
        getUsers(page + 1)
    }

    const prevPage = () => {
        getUsers(page)
    }

    useEffect(() => {
        getUsers(page)
    }, [])


    return(
        <div className="wrapper">
            <section className="users">
                <nav className="users__navigation">
                    <button className="button users__add" onClick={() => setModalActive(true)} >New User</button>
                    <button className="button log-out" onClick={() => setToken(localStorage.removeItem('token'))}>Log out</button>
                </nav>
                <h1 className="users__heading">Welcome on board</h1>
                <p className="users__title">Our users</p>
                <ul className='users__cards'>
                    {userList.map(user => (
                        <UserCard user = {user} key={user.id} />
                    ))}
                </ul>
                <div className="users__buttons-navigate">
                    <button className="button users__button-previous" onClick={prevPage}>Previous</button>
                    <button className="button users__button-next" onClick={nextPage}>Next</button>
                </div>
                <Modal active={modalActive} setActive={setModalActive} >
                    <AddUserForm onAddNewUser={onAddNewUser} />
                </Modal>
            </section>
        </div>
    )
}