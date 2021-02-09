import React from 'react';
import Profile from './Profile';
import {connect} from "react-redux";
import { getProfile } from "../../Redux/profileReducer";
import { Redirect, withRouter } from 'react-router-dom';
import {withAuthRedirect} from '../../hoc/WithAuthRedirect'
import { compose } from 'redux';

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

let mapStateToProps = (state) => ({
    profile: state.profile.profile, 
});


export default compose(connect(mapStateToProps, {
    getProfile
}), withAuthRedirect)(ProfileContainer);

// hoc throw compose

