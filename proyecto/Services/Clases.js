
export const getClases = () => {
    return new Promise((resolve, reject) => {
        fetch('http://192.168.0.120:3000/training_class/clases')
            .then((response) => response.json())
            .then(data => {
                return resolve(data)
            })
    })
}