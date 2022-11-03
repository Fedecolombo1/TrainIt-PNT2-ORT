import { useState } from 'react';

export const getCoaches = () => {
    return fetch('http://192.168.1.51:3000/coaches')
            .then((response) => response.json())
}

// export const borrarCoach = (id) => {
//     fetch('http://192.168.1.51:3000/delete/'+id)
// }

export async function agregarCoach(){
}