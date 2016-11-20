//Importera actions and states från vår .state-fil
import {images, GET_IMAGES} from './images.spec'

describe('Images', () => {
    //Vår initialState består av data. Här använder vi lite mock json
    const initialState =[
        {id: 1, owner:12334, secret:23131231, server:21312, farm: 6, title: '2342342', ispublic: 1, isfirend:0, isfamily: 0}
    ];

    it('should return an empty array for state by default', () => [

    ])
})