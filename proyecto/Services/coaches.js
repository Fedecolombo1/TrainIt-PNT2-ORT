import { Hostname, PortNumber } from '../config';

export const getCoaches = () => {
    return new Promise((resolve, reject) => {
        fetch(`${Hostname}:${PortNumber}/coaches`)
            .then((response) => response.json())
            .then(data => {
                return resolve(data)
            })
    })
}

// export const borrarCoach = (id) => {
//     fetch('http://192.168.1.51:3000/delete/'+id)
// }