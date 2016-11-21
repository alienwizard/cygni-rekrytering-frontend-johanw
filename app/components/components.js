//////////////////////////////////////////////////////////
// the glue between our components and the app.js
//////////////////////////////////////////////////////////

import angular from 'angular';
import {ImagesModule} from './images/images'

const ComponentsModule = angular.module('app.components', [
    ImagesModule.name
]);

export default ComponentsModule;