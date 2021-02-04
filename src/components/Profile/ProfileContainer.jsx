import React from 'react';
import Profile from './Profile';
import {connect} from "react-redux";
import {receiveUserProfile, setUserProfile} from "../../Redux/profileReducer";
import { withRouter } from 'react-router-dom';

class ProfileContainer extends React.Component {

    componentDidMount(){
        let userid = this.props.match.params.userid;
        if(!userid){
            userid = 2;
        }
        this.props.receiveUserProfile(userid);
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
    setUserProfile,
    receiveUserProfile
}) (withURLDataContainerComponent);


