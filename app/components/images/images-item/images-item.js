import angular from 'angular';
import './images-item.scss';
import template from './images-item.html';

class ImageItemController{

}

//our angular bindings for the data. We will only work with dumb data for now
const ImageItemComponent = {
    bindings: {
        image: '<'
    },
    template,
    controllerAs: 'imageItemCtrl'
};



//Anpassa bildernas höjd till brädd
const ImageItemModule = angular.module('imageItem', [])
    .component('imageItem', ImageItemComponent)
;

export default ImageItemModule;