import angular from 'angular';
import './images-item.scss';
import template from './images-item.html';

function determinePhotoOrientation(width, height) {
    if (width > height) {
        return 'landscape';
    } else if (width < height) {
        return 'portrait';
    }
    return 'square';
}


//our angular bindings for the data. We will only work with dumb data for now
const ImageItemComponent = {
    bindings: {
        image: '<'
    },
    template,
    controllerAs: 'imageItemCtrl'
};

const ImageItemModule = angular.module('imageItem', [])
    .component('imageItem', ImageItemComponent)
;

export default ImageItemModule;