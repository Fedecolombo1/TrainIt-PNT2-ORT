import { Hostname, PortNumber } from '../config';

export const getListaDeFeedbacks = (rol, dniUser) => {
    return new Promise((resolve, reject) => {
        console.log("Aca llame al feedback de atletas... " + 'rol: ' + rol + ' - dni: ' + dniUser);
        fetch(`${Hostname}:${PortNumber}/feedback/${rol}/${dniUser}`)
            .then(res => res.json())
            .then(data => {
                return resolve(data.slice())
            })
            .catch(err => {
                console.log(err)
                reject(err)
            })
    })
}