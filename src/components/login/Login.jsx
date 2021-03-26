import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {required, maxLengthCreator} from '../Validators/validators.js';
import {Input} from '../common/FormsControls/FormsControls.js'
import {connect} from 'react-redux';
import {LoginThunk} from '../../Redux/authReducer.js';
import {Redirect} from 'react-router-dom';

const maxLength20 = maxLengthCreator(25);


let LoginForm = props => {
    const { handleSubmit } = props
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field name="email" placeholder={"email"} component={Input} validate={[required, maxLength20]} />
            </div>
            <div><Field name="password" placeholder={"Password"} component={Input} validate={[required, maxLength20]}/></div>
            <div><Field name="remember" type={"checkbox"} component={Input} />remember me</div>
            <div><button type="submit">Login</button></div>
        </form>)
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

const Login = props => {
    const onSubmit = (formData) => {
        props.LoginThunk(formData.email,formData.password,formData.remember);
    }
    if(props.isAuth === true){
        return <Redirect to={"/profile"} />
    }
    else{
        return (<div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>)
    }
}

const mapStateToProps = (state) =>({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {LoginThunk})(Login);