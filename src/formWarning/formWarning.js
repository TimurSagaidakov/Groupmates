import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import s from'./formWarning.module.css';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons'


export const Textarea = ({input,meta,...props}) => {
  let errorExclamation = meta.touched && meta.error 
  let errorText = meta.touched&&meta.error&&meta.active
return <div className={s.inputWrapper + ' ' + (errorExclamation ? s.error : '')}>
  {React.createElement(props.typeField,{   // Создаем элемент в зависимости от того что в props.type
                            ...input, // Вытаскиваем данные input'a
                            ...meta,  // Вытаскиваем данные meta из redux-form */
                            ...props  // Оставшиеся пропсы
                            })}
          
            { errorExclamation && 
                <div className={s.exclamation}>
                  <FontAwesomeIcon icon={faExclamationCircle}/>
                </div>
              }
              {errorText&& <span className={s.warningText}>{meta.error}</span>}
        </div>
}
export default Textarea;