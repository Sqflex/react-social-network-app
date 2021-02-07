import React from 'react';
import Profile from './Profile';
import {connect} from "react-redux";
import { getProfile } from "../../Redux/profileReducer";
import { Redirect, withRouter } from 'react-router-dom';

class ProfileContainer extends React.Component {

    componentDidMount(){
        let userid = this.props.match.params.userid;
        if(!userid){
            userid = 2;
        }
        this.props.getProfile(userid);
        
    }

    render(){
        if(this.props.isAuth === false) return <Redirect to={'/login'}/>
        else{ return ( <Profile {...this.props} profile={this.props.profile}/>)}
    }
    
}

let mapStateToProps = (state) => ({
    profile: state.profile.profile,
    isAuth: state.auth.isAuth 
});

let withURLDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {
    getProfile
}) (withURLDataContainerComponent);


