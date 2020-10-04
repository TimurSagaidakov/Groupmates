import {connect} from 'react-redux';
import PostRender from './postRender';

let mapStateToProps = (state) =>{
  return{
    posts : state.home.posts
  }
}


const PostContainer = connect(mapStateToProps)(PostRender)
export default PostContainer;