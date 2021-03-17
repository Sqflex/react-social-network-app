import React from 'react';

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status,
    }

    activateEditMode = () =>{
        this.setState({                     // setState - Асинхронен, поэтому editMode изменится по eventLoop'у, а не сразу.
            editMode: true,
        })
    }

    deactivateEditMode = () =>{
        this.setState({
            editMode: false,
        });
        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (e) =>{
        this.setState({
            status: e.currentTarget.value,
        });
        
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{!this.props.status ? 'Our status' : this.props.status}</span>
                    </div>}
                {this.state.editMode &&
                    <div className="statusArea">
                        <input autoFocus = {true} onChange={this.onStatusChange} onBlur= {this.deactivateEditMode} value={this.state.status}></input>
                    </div>}
            </div>
        )
    }
}

export default ProfileStatus;