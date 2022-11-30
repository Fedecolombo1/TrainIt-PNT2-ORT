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
//     fetch('http://${Hostname}:${PortNumber}/delete/'+id)
// }

export const getAtletaPorDni = (dniAtleta) => {
    return new Promise((resolve, reject) => {
        fetch(`${Hostname}:${PortNumber}/athletes/athlete-dni/${dniAtleta}`)
            .then((response) => response.json())
            .then(data => {
                return resolve(data)
            })
            .catch(err => reject(err))
    })
}
