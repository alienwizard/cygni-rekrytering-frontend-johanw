//////////////////////////////////////////////////////////
// constants - Våra event typer som registreras när man uppdaterar state
//////////////////////////////////////////////////////////

export const GET_IMAGES = 'GET_IMAGES';
export const GET_IMAGE = 'GET_IMAGE';

//////////////////////////////////////////////////////////
// Actions - Hämta data från flickr api
//////////////////////////////////////////////////////////

//URL för vår GET. Jag använder mig av en konstant sträng här nedan, men man skulle till exempel kunna
//Bygga ut applikationen så att man skulle kunna ändra dessa parametrar från ett gränssnitt

const URLS = {
    FETCH: 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=e57f52bb5ed3d0a7d33519e8b354799a&tags=dinosaur&safe_search=1&media=photos&format=json&nojsoncallback=1'
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

            //simulate caching
            if(images.length){
                return $q.when(images)
                    .then(() => dispatch({ type: GET_IMAGES, payload: images}));

            //om vi inte har cachade bilder så kör en ny GET till API
            }else{
                return $http.get(URLS.FETCH)
                    .then(extract)
                    .then(data => dispatch({type: GET_IMAGES, payload: data}))

            }


        }
    }

    return {
        getImages
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
        default:
            return state;
    }
};

//Om vi planerar att göra något men en bild en sak som är bra med redux är att det är lätt
//att strukturera upp vårt projekt i states
export const image = (state = [], {type, payload}) => {
    //Switch för olika typer av action states
    switch (type) {
        case GET_IMAGE:
            return payload || {title: undefined};
        default:
            return state;
    }
};



