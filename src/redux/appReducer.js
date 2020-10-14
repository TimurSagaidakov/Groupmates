import {getLogin} from './authReducer';

const InitialApp = 'INITIAL-APP';

let initialState = {
  initial: false
}

const appReducer = (state = initialState, action)=>{
  switch(action.type){
    case InitialApp:{
      return{
        ...state,
        initial: true
      }
    }
    default :{
      return state
    }
  }
}

export const initialApp = () =>({type: InitialApp})

export const initializeApp =()=>(dispatch)=>{
  let app = dispatch(getLogin()); 
  Promise.all([app])
    .then( () =>{ //Конец асинхронной команды от диспатча getLogin 
      dispatch(initialApp())

      //Сюда можно добавлять еще диспатчи которые нужны перед загрузкой
    })
}
export default appReducer;