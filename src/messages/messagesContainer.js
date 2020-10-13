
import Messages from './messages';
import React from 'react';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from 'redux';

class MessagesContainer extends React.Component {
render(){
return <Messages/>
}
}




export default compose(withAuthRedirect)(MessagesContainer)