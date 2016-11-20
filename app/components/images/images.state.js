//////////////////////////////////////////////////////////
// constants - Våra event typer som registreras när man uppdaterar state
//////////////////////////////////////////////////////////

export const GET_IMAGES = 'GET_IMAGES';

//////////////////////////////////////////////////////////
// Actions - Hämta data från flickr api
//////////////////////////////////////////////////////////

//URL för vår GET. Jag använder mig av en konstant sträng här nedan, men man skulle till exempel kunna
//Bygga ut applikationen så att man skulle kunna ändra dessa parametrar från ett gränssnitt

const URLS = {
    FETCH: 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=a4705a25494ce649c2611fe6e6c335a7&tags=dinosaur&safe_search=1&media=photos&format=json&nojsoncallback=1'
};


//Funktion över alla våra möjliga händelser
//Använder ngInject för att se till att beroenden laddas in korrekt
export const ImageActions = ($http, $q) => {
    'ngInject';

    const extract = result => result.data;

    const getImages = () => {
        return (dispatch, getState) =>
    }

}



