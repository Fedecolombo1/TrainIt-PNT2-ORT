import { Hostname, PortNumber } from '../config';

export const getAtletas = () => {
    return new Promise((resolve, reject) => {
        fetch(`${Hostname}:${PortNumber}/athletes`)
            .then((response) => response.json())
            .then(data => {
                return resolve(data)
            })
            .catch(err => reject(err))
    })
}

// export const borrarCoach = (id) => {
//     fetch('http://192.168.1.51:3000/delete/'+id)
// }