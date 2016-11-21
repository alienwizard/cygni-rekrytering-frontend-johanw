import 'normalize.css';
import {images, image} from './components/images/images.state';
import angular from 'angular';
import ComponentsModule from './components/components';
import React, { Component } from 'react';
import ReactDom from 'react-dom';
import {createDevTools} from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor  from 'redux-devtools-dock-monitor';
import { combineReducers } from 'redux';
import ngRedux from 'ng-Redux';
import thunk from 'redux-thunk';

import './app.scss';

import template from './app.html';


const appComponent = {
    template
};


// en root reducer för hela appen, keep it DRY. Om vi vill bygga ut appen kan vi lägga nya reducers här
const rootReducer = combineReducers({
    images,
    image
});


//Setting up our devtools for redux with this reactcomponent

const DevTools = createDevTools(
    <DockMonitor toggleVisibilityKey='ctrl-h'
        changePositionKey='ctrl-q'
        defaultIsVisible={false}>
                <LogMonitor theme='tomorrow' />
    </DockMonitor>
);

const run = ($ngRedux, $rootScope) => {
    'ngInject';

    const componentDidUpdate = DockMonitor.prototype.componentDidUpdate;

    DockMonitor.prototype.componentDidUpdate = () => {
        $rootScope.$evalAsync();

        if(componentDidUpdate){
            componentDidUpdate.apply(this, arguments);
        }
    }

    ReactDom.render(<DevTools store={$ngRedux} />, document.getElementById('devTools'));
}


const config = $ngReduxProvider => {
    'ngInject';

    $ngReduxProvider.createStoreWith(rootReducer, [thunk], [DevTools.instrument()]);
}




let appModule = angular.module('app', [
    ComponentsModule.name,
    ngRedux
])
    .config(config)
    .run(run)
    .component('app', appComponent)
;

export default appModule;
