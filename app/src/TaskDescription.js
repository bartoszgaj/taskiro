import React, { Component } from 'react';
import './Popup.css';



class TaskDescription extends React.Component {




    render() {
        return (
            <div>
                PODAJ DANE TASKU<br/>
                MOŻE GRZECZNIEJ?<br/>
                PROSZE DAĆ MI DANE TASKU<br/>
                    <button onClick={this.props.closePopup}>close me</button>
            </div>
        );
    }

    buttonClicked() {

    }
}

export default TaskDescription