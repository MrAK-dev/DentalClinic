import React from "react";
import Input from "./Admin/Input";

class UserInfo extends React.Component {
  changeUser = e => {
    e.preventDefault();
    const obj = {};
    this.props.changeUserUserForm.map(el => {
      return (obj[el.name] = el.value);
    });
    this.props.putUser({ data: obj, path: this.props.user._id });
  };
  render() {
    const { changeUserUserForm, changeInputValueUserUserForm } = this.props;
    return (
      <div className="user-info">
        <div className="admin-item user-item">
          <form className="form-doctors user-form">
            {changeUserUserForm.map(el => (
              <Input
                key={el.id}
                el={el}
                changeInputValues={changeInputValueUserUserForm}
                className={el.className}
              />
            ))}
          </form>
          <button onClick={this.changeUser} className="btn link admin user-btn">
            Изменить
          </button>
        </div>
      </div>
    );
  }
}

export default UserInfo;
