import { Hostname, PortNumber } from '../config';

export const getCoaches = () => {
    return new Promise((resolve, reject) => {
        fetch(`${Hostname}:${PortNumber}/coaches`)
            .then((response) => response.json())
            .then(data => {
                return resolve(data)
            })
            .catch(err => {
                console.log(err)
                reject(err)
            })
    })
}

// export const borrarCoach = (id) => {
//     fetch('http://${Hostname}:${PortNumber}/delete/'+id)
// }

export const getCoachPorDni = (dniCoach) => {
    return new Promise((resolve, reject) => {
        fetch(`${Hostname}:${PortNumber}/coaches/coach-dni/${dniCoach}`)
            .then((response) => response.json())
            .then(data => {
                return resolve(data)
            })
            .catch(err => reject(err))
    })
}
