import { useState } from 'react';

const BASE_URL = 'http://192.168.1.51:3000/';

export const getAtletas = () => {
    return fetch('http://192.168.1.51:3000/atletas')
            .then((response) => response.json())
}


// export const borrarCoach = (id) => {
//     fetch('http://192.168.1.51:3000/delete/'+id)
// }