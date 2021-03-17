import React from 'react';

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
    }

    activateEditMode = () =>{
        debugger
        console.log('this:', this);
        this.setState({                     // setState - Асинхронен, поэтому editMode изменится по eventLoop'у, а не сразу.
            editMode: true,
        })
    }

    deactivateEditMode = () =>{
        this.setState({
            editMode: false,
        })
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{!this.props.status ? `Our Status` : this.props.status}</span>
                    </div>}
                {this.state.editMode &&
                    <div className="statusArea">
                        <input autoFocus = {true} onBlur= {this.deactivateEditMode}value={this.props.status}></input>
                    </div>}
            </div>
        )
    }
}

export default ProfileStatus;