import React from 'react';
import Profile from './Profile';
import axios from 'axios';
import {connect} from "react-redux";
import {setUserProfile} from "../../Redux/profileReducer";
import { withRouter } from 'react-router-dom';

class ProfileContainer extends React.Component {

    componentDidMount(){
        let userid = this.props.match.params.userid;
        if(!userid){
            userid = 2;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userid).then(response => {
            this.props.setUserProfile(response.data);
        });
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
    setUserProfile
}) (withURLDataContainerComponent);


