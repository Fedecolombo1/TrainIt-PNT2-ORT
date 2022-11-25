
export const getClases = () => {
    return new Promise((resolve, reject) => {
        fetch('http://192.168.1.51:3000/training_class/clases')
            .then((response) => response.json())
            .then(data => {
                return resolve(data)
            })
    })
}