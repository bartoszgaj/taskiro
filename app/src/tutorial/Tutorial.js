import React, { Component } from 'react';
import  { Document } from 'react-pdf';


class Tutorial extends Component{
    render(){
        return(
            <div id="tutorial-box">
                HAHA
                <Document file={"taskiro_user_doc.pdf"} />
            </div>
        );
    }


}

export default Tutorial;