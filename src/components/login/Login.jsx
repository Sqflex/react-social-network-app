import React from 'react';
import { Field, reduxForm } from 'redux-form'

let LoginForm = props => {
    const { handleSubmit } = props
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field name="login" placeholder={"Login"} component={"input"} />
            </div>
            <div><Field name="password" placeholder={"Password"} component={"input"} /></div>
            <div><Field name="remember" type={"checkbox"} component={"input"} />remember me</div>
            <div><button type="submit">Login</button></div>
        </form>)
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

const Login = props => {
    const onSubmit = (formData) => {
        console.log(formData);
    }
    return (<div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>)

}

export default Login;