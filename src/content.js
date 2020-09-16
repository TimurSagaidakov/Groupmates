import React from 'react';
import Background from './content/background';
import Info from './content/info';
import Post from './content/post';
const Content = () => {
  return(
    <div className="content">
      <Background/>
      <Info/>
      <Post/>
    </div>
  );
}
export default Content;
