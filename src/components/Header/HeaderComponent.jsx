import React from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import {AuthorizationThunk} from '../../Redux/authReducer.js'

class HeaderComponent extends React.Component {

    componentDidMount(){
        this.props.AuthorizationThunk();
    }

    render(){
        return (
            <Header {...this.props}/>
        )
    }
    
}

const mapStateToProps = (state) =>({
    isAuth: state.auth.login,
    login: state.auth.login
})

export default connect(mapStateToProps,{
    AuthorizationThunk })(HeaderComponent);