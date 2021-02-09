import React from 'react';
import Profile from './Profile';
import {connect} from "react-redux";
import { getProfile } from "../../Redux/profileReducer";
import { Redirect, withRouter } from 'react-router-dom';
import {withAuthRedirect} from '../../hoc/WithAuthRedirect'

class ProfileContainer extends React.Component {

    componentDidMount(){
        let userid = this.props.match.params.userid;
        if(!userid){
            userid = 2;
        }
        this.props.getProfile(userid);
        
    }

    render(){
        return ( <Profile {...this.props} profile={this.props.profile}/>)
    }
    
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);
// for hoc


let mapStateToProps = (state) => ({
    profile: state.profile.profile, 
});

let withURLDataContainerComponent = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps, {
    getProfile
}) (withURLDataContainerComponent);

// for ContainerComponent

