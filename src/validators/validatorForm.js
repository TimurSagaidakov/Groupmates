export const required = value =>{
  if(value) return undefined;
  return 'Обязательное поле';
}

export const maxLength = (maxLength) =>{
return (value)=>{
  if(value && value.length >maxLength) return `Максимальное количество символов не может быть больше ${maxLength}`; 
  return undefined;
}
}

