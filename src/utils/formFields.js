import React from "react";

import Main from "../components/main/Main";
import Doctors from "../components/specialists/Doctors";
import Services from "../components/services/Services";
import MoreInfo from "../components/specialists/MoreInfo";
import Reviews from "../components/Reviews";
import Admin from "../components/Admin/Admin";
import Appointment from "../components/appointment/Appointment";
import Auth from "../containers/auth";
import User from "../containers/user";

const PAGENOTFOUND = () => (
  <div className="main">
    <div className="info-wrap">
      <div className="page-not-found">
        <h1>PAGE 404 NOT FOUND</h1>
        <img src="./images/logo.png" alt="" />
      </div>
    </div>
  </div>
);

export const logInForm = {
  form: {
    email: {
      id: 1,
      name: "email",
      type: "email",
      label: "Email",
      validation: {
        requred: {
          cb: v => v.trim() === ""
        }
      },
      fail: false,
      touch: false,
      value: ""
    },
    password: {
      id: 2,
      name: "password",
      type: "password",
      label: "Пароль",
      validation: {
        requred: {
          cb: v => v.trim() === ""
        },
        minL: {
          cb: v => v.trim().length < 6
        }
      },
      fail: false,
      touch: false,
      value: ""
    }
  },
  validForm: false
};

export const signUpForm = {
  form: {
    email: {
      id: 1,
      name: "email",
      type: "email",
      label: "Email",
      validation: {
        requred: {
          cb: v => v.trim() === ""
        }
      },
      fail: false,
      touch: false,
      value: ""
    },
    firstName: {
      id: 2,
      type: "text",
      name: "firstName",
      label: "Имя",
      validation: {
        requred: {
          cb: v => v.trim() === ""
        },
        regExp: {
          cb: v => !/^\w/.test(v)
        }
      },
      fail: false,
      touch: false,
      value: ""
    },
    lastName: {
      id: 3,
      type: "text",
      name: "lastName",
      label: "Фамилия",
      validation: {
        requred: {
          cb: v => v.trim() === ""
        }
      },
      fail: false,
      touch: false,
      value: ""
    },
    phone: {
      id: 4,
      type: "number",
      name: "phone",
      label: "Телефон",
      validation: {
        requred: {
          cb: v => v.trim() === ""
        }
      },
      fail: false,
      touch: false,
      value: ""
    },
    password: {
      id: 5,
      name: "password",
      type: "password",
      label: "Пароль",
      validation: {
        requred: {
          cb: v => v.trim() === ""
        },
        minL: {
          cb: v => v.trim().length < 6
        }
      },
      fail: false,
      touch: false,
      value: ""
    },
    confirmPassword: {
      id: 6,
      name: "confirmPassword",
      type: "password",
      label: "Повторите пароль",
      validation: {
        requred: {
          cb: v => v.trim() === ""
        },
        minL: {
          cb: v => v.trim().length < 6
        },
        match: {
          match: "password",
          cb: (v, m) => v !== m
        }
      },
      fail: false,
      touch: false,
      value: ""
    }
  },
  validForm: false
};

export const postNewDoctorForm = [
  {
    id: 1,
    type: "text",
    value: "",
    name: "name",
    placeholder: "Введите ФИО сотрудника",
    required: true
  },
  {
    id: 2,
    type: "text",
    value: "",
    name: "experience",
    placeholder: "Введите дату начала практики",
    required: true
  },
  {
    id: 3,
    type: "text",
    value: "",
    name: "photo",
    className: "btn service-btn",
    placeholder: "Добавьте фотографию",
    required: true
  },
  {
    id: 4,
    type: "text",
    value: "",
    name: "profession",
    placeholder: "Добавьте специализацию",
    required: true
  },
  {
    id: 5,
    type: "text",
    value: "",
    name: "skillsDescription",
    placeholder: "Введите описание навыков здесь",
    required: true
  }
];

export const postNewServiceForm = [
  {
    id: 1,
    type: "text",
    value: "",
    name: "name",
    placeholder: "Введите название сервиса",
    required: true
  },
  {
    id: 2,
    type: "text",
    value: "",
    name: "description",
    placeholder: "Введите описание сервиса",
    required: true
  },
  {
    id: 3,
    type: "number",
    value: "",
    name: "duration",
    placeholder: "Введите длительность (часы)",
    required: true
  },
  {
    id: 4,
    type: "number",
    value: "",
    name: "price",
    placeholder: "Введите стоимость сервиса",
    required: true
  }
];

export const changeUserForm = [
  {
    id: 1,
    type: "email",
    value: "",
    name: "email",
    placeholder: "Введите E-mail",
    readOnly: true,
    required: true
  },
  {
    id: 2,
    type: "text",
    value: "",
    name: "firstName",
    placeholder: "Введите Имя",
    required: true
  },
  {
    id: 3,
    type: "text",
    value: "",
    name: "lastName",
    placeholder: "Введите Фамилию",
    required: true
  },
  {
    id: 4,
    type: "number",
    value: "",
    name: "phone",
    placeholder: "Введите ваш номер",
    required: true
  },
  {
    id: 5,
    type: "password",
    value: "",
    name: "password",
    placeholder: "Введите новый пароль",
    required: true
  },
  {
    id: 6,
    type: "password",
    value: "",
    name: "confirmPassword",
    placeholder: "Повторите пароль",
    required: true
  }
];


export const adminChangeUserForm =[
	{
		id:'firstName',
		type:'text',
		value:"",
		inputName:'firstName',
		pageValue : "Имя" ,
		placeholder:'Введите Имя',
		required:true
	},
	{
		id:'lastName',
		type:'text',
		value:"",
		inputName:'lastName',
		pageValue : "Фамилия" ,
		placeholder:'Введите Фамилию',
		required:true
	},
	{
		id:'email',
		type:'email',
		value:"",
		inputName:'email',
		pageValue : "E-mail" ,
		placeholder:'Введите E-mail',
		readOnly:true,
		required:true
	},
	{
		id:'phone',
		type:'phone',
		value:"",
		inputName:'phone',
		pageValue : "Номер телефона" ,
		placeholder:'Введите номер телефона',
		required:true
	},
	{
		id:'role',
		type:'radio',
		value:'role',
		pageValue:"Админ",
		name:'access',
		inputName:'role',
		className:"radio",
		defaultChecked:false,
	},
	{
		id:'doctor',
		type:'radio',
		value:'doctor',
		inputName:'doctor',
		pageValue:"Доктор",
		name:'access',
		className:"radio",
		defaultChecked:false,
	},
	{
		id:'user',
		type:'radio',
		value:'user',
		inputName:'user',
		pageValue : "Пользователь",
		name:'access',
		className:"radio",
		defaultChecked:false,
	},


];

export const route = [
  {
    id: 1,
    exact: true,
    path: "/",
    protected: false,
    // hasAccess: [],
    component: Main
  },
  {
    id: 2,
    exact: true,
    path: "/doctors",
    protected: false,
    component: Doctors
  },
  {
    id: 3,
    exact: true,
    path: "/services",
    protected: false,
    component: Services
  },
  {
    id: 3,
    exact: false,
    path: "/doctors/:doctor/:flag",
    protected: false,
    component: MoreInfo
  },
  {
    id: 4,
    exact: true,
    path: "/services/:service/:flag",
    protected: false,
    component: MoreInfo
  },
  {
    id: 5,
    exact: true,
    path: "/reviews",
    protected: false,
    component: Reviews
  },
  {
    id: 6,
    exact: false,
    path: "/admin",
    protected: true,
    component: Admin
  },
  {
    id: 7,
    exact: true,
    path: "/appointment/:doctorId/:serviceId",
    protected: true,
    component: Appointment
  },
  {
    id: 8,
    exact: true,
    path: "/auth",
    protected: false,
    component: Auth
  },
  {
    id: 9,
    exact: false,
    path: "/user",
    protected: true,
    component: User
  },
  {
    id: 10,
    component: PAGENOTFOUND
  }
];
