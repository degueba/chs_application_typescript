import React, { Component, lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import Survey from './components/Survey';


class Routes extends Component {
    render(){
        return (
            <Suspense fallback={<div>Loading</div>}>
                <Switch>
                    <Route path="/erectile-dysfunction/patient-intake" component={Survey}></Route>
                </Switch>
            </Suspense>
        )
    }
}


export default Routes;
