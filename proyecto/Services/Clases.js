import { Hostname, PortNumber } from '../config';

export const getClases = () => {
    return new Promise((resolve, reject) => {
<<<<<<< HEAD
        fetch('http://192.168.0.120:3000/training_class/clases')
=======
        fetch(`${Hostname}:${PortNumber}/training_class/clases`)
>>>>>>> origin
            .then((response) => response.json())
            .then(data => {
                return resolve(data)
            })
            .catch(err => reject(err))
    })
}