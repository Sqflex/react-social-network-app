import React from 'react';
import Profile from './Profile';
import {connect} from "react-redux";
import {setUserProfile, getUserProfile} from "../../Redux/profileReducer";
import { withRouter } from 'react-router-dom';
import { usersAPI } from '../../API/api';

class ProfileContainer extends React.Component {

    componentDidMount(){
        let userid = this.props.match.params.userid;
        if(!userid){
            userid = 2;
        }
        this.props.getUserProfile(userid);
    }

    render(){
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
    
}

let mapStateToProps = (state) => ({
    profile: state.profile.profile
});

let withURLDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {
    getUserProfile
}) (withURLDataContainerComponent);


