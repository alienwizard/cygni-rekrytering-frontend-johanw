//////////////////////////////////////////////////////////
// constants - Våra event typer som registreras när man uppdaterar state
//////////////////////////////////////////////////////////

export const GET_IMAGES = 'GET_IMAGES';
export const GET_NEXT_PAGE = 'GET_NEXT_PAGE';
export const GET_PREV_PAGE = 'GET_PREV_PAGE'
export const GET_CURRENT_IMAGE = 'GET_CURRENT_IMAGE';

//////////////////////////////////////////////////////////
// Actions - Hämta data från flickr api
//////////////////////////////////////////////////////////

//URL för vår GET. Jag använder mig av en konstant sträng här nedan, men man skulle till exempel kunna
//Bygga ut applikationen så att man skulle kunna ändra dessa parametrar från ett gränssnitt
var page = 0;
const MIN_PAGE = 0;
const URLS = {
    FETCH: 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=e57f52bb5ed3d0a7d33519e8b354799a&tags=dinosaurs&sort=interestingness-desc&safe_search=2&media=photos&format=json&nojsoncallback=1&per_page=50&page=2'

};




//Funktion över alla våra möjliga händelser
//Använder ngInject för att se till att beroenden laddas in korrekt
export const ImageActions = ($http, $q) => {
    'ngInject';

    const extract = result => result.data;

    const getImages = () => {
        //return the images based on function call
        return (dispatch, getState) => {
            const { images } = getState();
            console.log(images);

            //simulate caching
            if(images.length){
                return $q.when(images)
                    .then(() => dispatch({ type: GET_IMAGES, payload: images}));

            //om vi inte har cachade bilder så kör en ny GET till API
            }else{
                return $http.get('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=e57f52bb5ed3d0a7d33519e8b354799a&tags=dinosaurs&safe_search=2&sort=relevance&media=photos&format=json&nojsoncallback=1&per_page=50&page='+page+'')
                    .then(extract)
                    .then(data => dispatch({type: GET_IMAGES, payload: data}))

            }


        }

    };


    // action för att hämta nästa sida bilder
    const getNextPage = () => {

        return (dispatch, getState) => {
            const { images } = getState();

            console.log(images.photos.pages);
            var currentpage =  images.photos.page
            var nextPage = currentpage + 1;
            var MaxPage = images.photos.pages;
            if(currentpage == MaxPage){
                console.log('Max page reached');
            }else {
                return $http.get('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=e57f52bb5ed3d0a7d33519e8b354799a&tags=dinosaurs&safe_search=1&safe_search=2&sort=relevance&media=photos&format=json&nojsoncallback=1&per_page=50&page=' + nextPage + '')
                    .then(extract)
                    .then(data => dispatch({type: GET_NEXT_PAGE, payload: data}))

            }
        }

    };

    // action för att hämta föregående sida bilder
    const getPrevPage = () => {

        return (dispatch, getState) => {
            const { images } = getState();

            console.log(images.photos.pages);
            var currentpage =  images.photos.page
            var nextPage = currentpage - 1;
            var MaxPage = images.photos.pages;
            if(currentpage == 1){
                console.log('You are at first page');
            }else {
                return $http.get('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=e57f52bb5ed3d0a7d33519e8b354799a&tags=dinosaurs&safe_search=1&safe_search=2&sort=relevance&media=photos&format=json&nojsoncallback=1&per_page=50&page=' + nextPage + '')
                    .then(extract)
                    .then(data => dispatch({type: GET_NEXT_PAGE, payload: data}))

            }
        }

    };


    //action för att hämta och manipulera data från en bild
    const selectImage = image => {
        return { type: GET_CURRENT_IMAGE, payload: image};
    }

    return {
        getImages,
        selectImage,
        getNextPage,
        getPrevPage

    }

};

//////////////////////////////////////////////////////////
// Vår reducer
//////////////////////////////////////////////////////////
export const images = (state = [], {type, payload}) => {
    //Switch för olika typer av action states
    switch (type) {
        case GET_IMAGES:
            return payload || state;
        case GET_NEXT_PAGE:
            return payload || state;
        case GET_PREV_PAGE:
            return payload || state;
        default:
            return state;
    }
};

//Om vi planerar att göra något men en bild en sak som är bra med redux är att det är lätt
//att strukturera upp vårt projekt i states
export const image = (state = [], {type, payload}) => {
    //Switch för olika typer av action states
    switch (type) {
        case GET_CURRENT_IMAGE:
            return payload || {title: undefined};
        default:
            return state;
    }
};



