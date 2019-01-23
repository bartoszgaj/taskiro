import React, { Component } from 'react';
import  { Document } from 'react-pdf';
import user_doc from '../resources/taskiro_user_doc.pdf'



class Tutorial extends Component{
    render(){
        return(
            <div id="tutorial-box">
                HAHA
                <Document file={"user_doc"} />
            </div>
        );
    }


}

export default Tutorial;