import { connect } from 'react-redux';
import {addPostActionCreator, updateNewPostText} from './../../../redux/homeReducer';
import NewPost from './newPost';
import React from 'react';

class NewPostContainer extends React.Component {
  addPostFunc =() => {
    this.props.addPost();
  }
  ChangePostFunc = (e) =>{
    let text = e.target.value;
    this.props.updateNewPostText(text);
  }
render(){
return <NewPost ChangePostFunc={this.ChangePostFunc}
                addPostFunc={this.addPostFunc}
                newPostText={this.props.newPostText}
                home={this.props.home} />
  }
}
     /* store.getState() */
let mapStateToProps = (state)=>{
  return {
    home: state.home, /* Берем массив home из state */
    newPostText : state.home.newPostText /* Берем данные из пустой переменной в state */ 
  }
  
}
let mapDispatchToProps = (dispatch)=>{ /* Вытаскиваем dispath из store и поэтому не пишем store в функциях */
  return{
    updateNewPostText: (text) => {
      let actionCreator = updateNewPostText(text) /* Вводим переменную для action Creator'a */
          dispatch(actionCreator);  /* Не пишем store!! */
    },
    addPost: () =>{
      let actionCreator = addPostActionCreator(); /* Вводим переменную для action Creator'a */
      dispatch( actionCreator); /* Не пишем store!! */
    }
  }
}

                                  /* state*/      /*dispatch */  /* Класс. компонента */
const newPostContainer = connect(mapStateToProps,mapDispatchToProps)(NewPostContainer);
export default newPostContainer;