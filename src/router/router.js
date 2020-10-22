import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Details from '../pages/details';
import FollowUp from '../pages/details/compontent/followUp';
import Success from '../pages/success';
import Modify from '../pages/modify';
import LogisticsList from '../pages/logisticsList';

import FakeAuthorization from '../pages/fakeAuthorization';
import FakeAuthorizationSuccess from '../pages/fakeAuthorization/success/index';
import FakeAuthorizationWeixin from '../pages/fakeAuthorization/order/weixin';
import FakeAuthorizationAlipay from '../pages/fakeAuthorization/order/alipay';

import FreeAdmission from '../pages/freeAdmission';

const BasicRoute = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/details" component={Details}/>
            <Route exact path="/" component={Details}/>
            <Route exact path="/details/followUp" component={FollowUp}/>
            <Route exact path="/success" component={Success}/>
            <Route exact path="/modify" component={Modify}/>
            <Route exact path="/logisticsList" component={LogisticsList}/>

            <Route exact path="/fakeAuthorization" component={FakeAuthorization}/>
            <Route exact path="/fakeAuthorization/success" component={FakeAuthorizationSuccess}/>
            <Route exact path="/fakeAuthorization/weixin" component={FakeAuthorizationWeixin}/>
            <Route exact path="/fakeAuthorization/alipay" component={FakeAuthorizationAlipay}/>

            
            <Route exact path="/freeAdmission" component={FreeAdmission}/>
            
        </Switch>
    </HashRouter>
);


export default BasicRoute;