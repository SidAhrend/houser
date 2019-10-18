import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Wizard from './Components/Wizard/Wizard';
import Dashboard from './Components/Dashboard/Dashboard';

function WizardRoute(){
    return <Wizard />
}
function DashboardRoute(){
    return <Dashboard />
}

export default(
    <Switch>
            <Route exact path = '/' component = {DashboardRoute} />
            <Route path = '/wizard' component = {WizardRoute} />

    </Switch>
)