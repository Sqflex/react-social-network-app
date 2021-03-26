import React from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import {AuthorizationMeThunk, LogoutThunk} from '../../Redux/authReducer.js'

class HeaderComponent extends React.Component {

    componentDidMount(){
        this.props.AuthorizationMeThunk();
    }

    render(){
        return (
            <Header {...this.props}/>
        )
    }
    
}

const mapStateToProps = (state) =>({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps,{
    AuthorizationMeThunk, LogoutThunk})(HeaderComponent);