'use strict'

import ImagesItemModule from './images-item/images-item'
import template from './images.html'
import './images.scss'
import { ImageActions } from './images.state'

//////////////////////////////////////////////////////////
// Controller for our imagegrid
//////////////////////////////////////////////////////////

class ImagesController {

    constructor($ngRedux, ImageActions) {
        'ngInject'

        this.store = $ngRedux;
        this.ImageActions = ImageActions;
        this.test = 'test';
    }

    //Angularevenet som triggas när componenten skapas
    //Här mappar vi states med actions och kopplar vår store till våra lokala states

    $onInit() {
        const actions = Object.assign({}, this.ImageActions)
        this.store.connect(this.mapStateToThis, actions)(this);
        //vår action vi definerade i .state
        this.getImages();

    }

    //Gör vår state tillgänglig i vår view genom vår controller
    mapStateToThis(state) {
        console.log(state.images.photos);
        return {
            images: state.images.photos,
        }
    }

    //Get the next page
    //all logik hanteras i vår action i redux
    nextPage(currentPage) {
        this.getNextPage()
        //this.nextPage()
    }

    //get the previous page
    //all logik hanteras i vår action i redux
    prevPage(){
        this.getPrevPage()

    }

    //handler for selected image
    onImageSelected(){}


}

const ImagesComponent = {
    template,
    controller:ImagesController,
    controllerAs: 'ImagesGridCtrl'
}


console.log(ImagesItemModule.name);




//our angularmodule
const ImagesModule = angular.module('images', [
    ImagesItemModule.name
])
    .factory('ImageActions', ImageActions)
    .component('images', ImagesComponent)

export {ImagesModule, ImagesController, ImagesComponent};