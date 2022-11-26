import { Hostname, PortNumber } from '../config';

export const getClases = () => {
    return new Promise((resolve, reject) => {
        fetch(`${Hostname}:${PortNumber}/training_class/clases`)
            .then((response) => response.json())
            .then(data => {
                return resolve(data)
            })
    })
}