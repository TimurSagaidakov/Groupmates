import React from 'react';
import Content from './content';
import Sidebar from './sidebar';
const Main = () => {
  return(
    <main className="main">
      <Sidebar/>
      <Content/>
    </main>
  );
}
export default Main;