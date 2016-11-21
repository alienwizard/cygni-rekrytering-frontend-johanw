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
        this.scroll = 0;
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
    //TODO: Om vi är på sista sidan så ska pilen vara grå och oklickbar
    nextPage(currentPage) {
        this.getNextPage()
        //this.nextPage()
    }

    //get the previous page
    //all logik hanteras i vår action i redux
    //TODO: hämta från state ifall vi är på första sidan och gör pilen bakåt grå
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



//Direktiv för att göra vår navigationsheader sticky när vi scrollar förbi den på sidan
const ScrollDirective = ($window) => {

    return function(scope, element, attrs) {
        angular.element($window).bind("scroll", function() {
            if (this.pageYOffset >= 100) {
                scope.boolChangeClass = true;
                console.log('Scrolled below header.');
            } else {
                scope.boolChangeClass = false;
                console.log('Header is in view.');
            }
            scope.$apply();
        });
    };

};

//Setting the image height to match the width;
//TODO fixa bugg med höjd på bilderna

const ImageHeight = () => {
    return {
        restrict: 'C',
        link: function (scope, element, attrs) {
            scope.$watch(attrs.imageHeight, function (value) {
                let elementwidth = Math.floor(document.querySelectorAll(".dino-item")[0].clientWidth);
                // förstår mig inte riktigt på en bugg som uppstår här. Får olika värden på clientwidth
                element.css('height', elementwidth + 'px')
                console.log(Math.floor(document.querySelectorAll(".dino-item")[0].clientWidth));
                console.log(element, elementwidth);


            })

        }
    }


};

//ImageHeight on resize
//todo MAke this dynamically change the size of the images when window resizes
const resizeHeight = ($window) => {
    return {
        restrict: 'C',
        link: function (scope, element, attrs) {
            scope.$watch(attrs.imageHeight, function (value) {
                var elementwidth = Math.floor(document.querySelectorAll(".dino-item")[0].clientWidth);
                element.css('height', elementwidth + 'px')
                console.log(element)
                console.log(element, elementwidth);

            })

        }
    }


};




//our angularmodule
const ImagesModule = angular.module('images', [
    ImagesItemModule.name
])
    .factory('ImageActions', ImageActions)
    .component('images', ImagesComponent)
    .directive('scrollPosition', ScrollDirective)
    .directive('imageHeight', ImageHeight)
    .directive('resizeHeight', resizeHeight)

export {ImagesModule, ImagesController, ImagesComponent};