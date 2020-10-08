import React from 'react';
import {connect} from 'react-redux';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import Content from './content';

class ContentContainer extends React.Component {
render(){
  
return <Content />
}
}

let AuthRedirectHighOrderComponent = withAuthRedirect(ContentContainer);



export default connect()(AuthRedirectHighOrderComponent)