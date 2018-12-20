import {Redirect, Route} from "react-router-dom";
import LoginBox from "./Guest/LoginBox";
import SimpleMap from "./User/Map/MapContainer";
import Tasks from "./User/Tasks/Tasks";
import React from "react";

const Content = () =>
    <div>
        <Route exact path="/login" component={LoginBox} />
        <Route path="/register" component={LoginBox} />
        <Route exact path={"/map"} component={SimpleMap}/>
        <Route path="/tasks" component={Tasks}/>
        <Route path="*" render={() => (
            <Redirect to="/login"/>)}/>
    </div>;

        export default Content;