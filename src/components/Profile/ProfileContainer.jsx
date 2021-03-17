import React from 'react';
import Profile from './Profile';
import {connect} from "react-redux";
import { getProfile, getStatus, updateStatus } from "../../Redux/profileReducer";
import { withRouter } from 'react-router-dom';
import {withAuthRedirect} from '../../hoc/WithAuthRedirect'
import { compose } from 'redux';

class ProfileContainer extends React.Component {

    componentDidMount(){
        let userId = this.props.match.params.userid;
        if(!userId){
            userId = 2;
        }
        this.props.getProfile(userId);
        this.props.getStatus(userId);
        
    }

    render(){
        return ( <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>)
    }
    
}

let mapStateToProps = (state) => ({
    profile: state.profile.profile,
    status: state.profile.status,
});


export default compose(connect(mapStateToProps, {
    getProfile, updateStatus, getStatus
}), withRouter, withAuthRedirect)(ProfileContainer);

// hoc throw compose

