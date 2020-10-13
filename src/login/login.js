import React from 'react';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import Button from '../button/button';
import Textarea from '../formWarning/formWarning';
import { maxLength, required } from '../validators/validatorForm';
import s from'./login.module.css'

let maxLength50 = maxLength(50)
const LoginForm = (props) => {
return <form className={s.form} onSubmit={props.handleSubmit}>
    <Field  name='email' 
            placeholder='Введите логин' 
            className={s.input} 
            component={Textarea} 
            typeField='input'
            validate={[required,maxLength50]}/>
    <Field  name='password' 
            placeholder='Введите пароль' 
            className={s.input} 
            component={Textarea} 
            typeField='input'
            type='password'
            validate={[required,maxLength50]}/>
    <div className={s.summaryError}> {/* Всплывающая ошибка */}
      {props.error}
    </div>
    <div className={s.checkboxWrapper}>
      <Field  name='rememberMe' 
              type='checkbox' 
              className={s.checkbox} 
              id='logCheckbox' 
              component='input'
              />
      <label htmlFor='logCheckbox' >Запомнить меня</label>
    </div>
    {props.captcha === true &&
      <Field  name='captcha'
              typeField='input'
              component={Textarea}
              />
    }

    <Button name='Войти'/>

  </form>
}
const ReduxLoginForm = reduxForm({form: 'Login'})(LoginForm) //Оборачиваем нашу форму в ReduxForm HOC
const Login = (props) => {
  const onSubmit =(formData)=>{
    props.login(formData.email, formData.password, formData.rememberMe)
  }
  if(props.isAuth){
    return <Redirect to={'/profile'}/>
  }
return <div className={s.container}>
  <h1>Войдите в свой аккаунт</h1>
  <ReduxLoginForm onSubmit={onSubmit} {...props}/> 
</div>
}
export default Login;