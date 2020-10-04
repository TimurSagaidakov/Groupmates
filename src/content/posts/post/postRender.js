import React from 'react';
import Post from './post';
const PostRender = (props) => {
  
return <>
  {props.posts.map( p => (<Post title={p.title} key={p.id} id={p.id} name={p.name} text={p.text} />))}
</>
}
export default PostRender;