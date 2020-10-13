import React from 'react';
import { Field,reduxForm} from 'redux-form';
import s from'./messageForm.module.css'
import {required,maxLength} from '../validators/validatorForm';
import Textarea from '../formWarning/formWarning';
import Button from './../button/button';


let maxLength10 = maxLength(10); //Вызываем функцию с замыканием чтобы не было loop

const MessagesForm = (props) =>{
  return  <form className={s.form} onSubmit={props.handleSubmit} >
            <Field  typeField='textarea'
                    validate={[required, maxLength10]} 
                    name='message'
                    component={Textarea} 
                    className={s.input} 
                    placeholder="Напишите сообщение.."/>
            <Button name="Отправить"/>
          </form>
}

const FormMessage = reduxForm({form: 'Message'})(MessagesForm)

export default FormMessage;