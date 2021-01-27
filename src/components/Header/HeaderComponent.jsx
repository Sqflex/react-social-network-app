import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from './Header';
import s from './Header.module.css';
import axios from 'axios';
import {connect} from 'react-redux';
import {setAuthUserData} from '../../Redux/authReducer.js'
import { Authorization } from '../../API/api';

class HeaderComponent extends React.Component {

    componentDidMount(){
        Authorization().then(data => {
            if(data.resultCode === 0){
                let {id, email, login} = data.data;
                this.props.setAuthUserData(id, email, login);
            }
        });
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
    setAuthUserData })(HeaderComponent);