import React from 'react';
import FriendList from './friendList';
const Friend = (props) => {
  let friendListData = props.friendList.map(f => <FriendList name={f.name} key={f.id} avatar={f.avatar} id={f.id}/>)
return <div>
  {friendListData}
</div>
}
export default Friend;