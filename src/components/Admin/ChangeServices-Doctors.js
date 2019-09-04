import React from 'react';
import Input from './Input'
import CheckBoxWindow from "./CheckBoxWindow";
import {CustomSelect} from "../hooks/select";
import ConfirmButton from "../ConfirmButton";

export default class ChangeServicesDoctors extends React.Component {
    state = {
        showConfirm: false,
        flag: false,
    };

    changeConfirm = () => {
        this.setState({showConfirm: !this.state.showConfirm})
    };

    changeFlag = (e) => {
        e.preventDefault();
        this.setState({flag: !this.state.flag})
    };

    postNewItem = (e) => {
        const obj = {};
        e.preventDefault();
        // eslint-disable-next-line array-callback-return
        this.props.form.map(el => {
            obj[el.name] = el.value
        });
        this.props.postItem(this.props.categories ? {
            ...obj,
            speciality: this.props.specialityArray
        } : obj)
    };

    changeItem = (e) => {
        const obj = {};
        e.preventDefault();
        // eslint-disable-next-line array-callback-return
        this.props.form.map(el => {
            if (el.value !== '') obj[el.name] = el.value
        });
        this.props.putItem({
            data: this.props.categories ? {
                ...obj,
                speciality: this.props.specialityArray
            } : obj,
            id: this.props.itemId
        })
    };

    deleteItem = () => {
        this.props.deleteItem(this.props.itemId);
        this.changeConfirm()
    };

    changeId = (e) => {
        this.props.changeId({
            item: e,
            data: this.props.data,
        })
    };

    render() {
        const {
            categories,
            data,
            itemId,
            form,
            changeInputValues,
            changeSpecialityArray,
            specialityArray
        } = this.props;
        console.log ( itemId)
        return (
            <div className="change-services-doctors">
                {this.state.flag &&
                <CheckBoxWindow
                    categories={categories}
                    specialityArray={specialityArray}
                    changeFlag={this.changeFlag}
                    changeSpecialityArray={changeSpecialityArray}
                />
                }
                <div className="admin-item">
                    <form className="form-doctors" onSubmit={itemId ? this.changeItem : this.postNewItem}>
                        {
                            form.map(el => {
                                el.required = !itemId;
                                return (
                                    <Input
                                        key={el.id}
                                        id={el.id}
                                        el={el}
                                        className={el.className}
                                        changeInputValues={changeInputValues}
                                    />
                                )
                            })
                        }
                        {categories &&
                        <button className=" btn service-btn" onClick={this.changeFlag}>Выбрать сервисы</button>}
                        <input
                            className="btn link"
                            type='submit'
                            value={itemId ? 'Изменить' : 'Добавить'}
                        />
                    </form>
                </div>
                <div className="admin-item">
                    <CustomSelect
                        label="Выбрать"
                        options={data}
                        emptyLine = {true}
                        clickOptionEvent={this.changeId}
                    />
                    {itemId &&
                    <button className="btn link" onClick={this.changeConfirm}
                            style={{backgroundColor: "#ff9774"}}>Удалить
                        выбранный элемент</button>
                    }
                </div>
                {this.state.showConfirm &&
                <ConfirmButton
                    yes={this.deleteItem}
                    no={this.changeConfirm}
                    text={'Подтвердить удаление?'}
                />
                }
            </div>
        );
    }
}