import { useState } from 'react';

export const getCoaches = () => {
    return fetch('http://192.168.1.51:3000/coaches')
            .then((response) => response.json())            
}

export const getTest = () => {
    return new Promise((resolve, reject) => {
        fetch('http://192.168.1.51:3000/coachesr')
            .then((response) => response.json())
            .then(data => {
                return resolve(data)
            })
    })
}

// export const borrarCoach = (id) => {
//     fetch('http://192.168.1.51:3000/delete/'+id)
// }