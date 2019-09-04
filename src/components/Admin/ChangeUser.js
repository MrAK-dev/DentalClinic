import React from 'react';


import Input from "./Input"
import ConfirmButton from "../ConfirmButton";

export default class ChangeUser extends React.Component {
    state = {
        showConfirm: false,
    };

    changeUserInput = (e) => {
        this.props.changeFindUserInput(e.target.value)
    };

    findUser = () => {
        this.props.findUser(this.props.findUserInput.includes('@') ? '?email=' + this.props.findUserInput : this.props.findUserInput)
    };

    enterPressed = (e) => {
        if (e.key === 'Enter') {
            this.findUser();
        }
    };

    changeUser = (e) => {
        e.preventDefault();
        const obj = {};
        // eslint-disable-next-line array-callback-return
        this.props.changeUserForm.map(el => {
            if (el.type !== 'radio') {
                return obj[el.id] = el.value
            }
        });
        if (this.props.access === 'user') {
            this.props.putUser({
                data: {
                    ...obj,
                    doctor: false,
                    role: false
                },
                path: this.props.user._id
            })
        } else if (this.props.access === 'doctor') {
            this.props.putUser({
                data: {
                    ...obj,
                    doctor: true,
                    role: false
                },
                path: this.props.user._id
            })
        } else if (this.props.access === 'role') {
            this.props.putUser({
                data: {
                    ...obj,
                    doctor: false,
                    role: true
                },
                path: this.props.user._id
            })
        }
    };

    changeConfirm = (action, text) => {
        this.setState({showConfirm: !this.state.showConfirm})
    };

    deleteUser = (e) => {
        this.props.deleteUser(this.props.user._id);
        this.changeConfirm()
    };

    render() {
        const {
            user,
            findUserInput,
            changeInputValueUserForm,
            changeUserForm,
            error
        } = this.props;
        console.log(this.props)
        return (
            <div className="change-user-container">
                <div className="input-box">
                    <input type='text' name='find_user' className=" appointment admin-form"
                           onKeyDown={this.enterPressed} onChange={this.changeUserInput}/>
                    {findUserInput &&
                    <button className="btn service-btn" id='enter' onClick={this.findUser}>Найти пользователя</button>
                    }
                    {user &&
                    <div className="change-user-form">
                        <form className="change-user-radio">
                            {changeUserForm.map(el =>
                                    <div className="input-wrap" key={el.id}>
                                        <Input
                                            el={el}
                                            changeInputValues={changeInputValueUserForm}
                                            className={el.className}
                                            id={el.id}
                                            value={el.value}
                                        />
                                        <label htmlFor={el.id}>
                                            {el.pageValue}
                                        </label>
                                    </div>

                                // <label htmlFor={index}>{Object.keys(el)}</label>
                            )}
                        </form>
                        <button className="btn service-btn" onClick={this.changeUser}>Изменить</button>
                        <button className="btn service-btn" onClick={this.changeConfirm}>Удалить</button>
                    </div>
                    }

                    {error &&
                    <div>
                        <p>Пользователь не найден</p>
                    </div>
                    }
                </div>
                <div>
                    <p>Здесь будет список пользователей </p>
                </div>
                {
                    this.state.showConfirm &&
                    <ConfirmButton yes={this.deleteUser} no={this.changeConfirm}
                                   text={'Вы уверены, что хотите удалить пользователя?'}
                    />
                }
            </div>
        );
    }
};

