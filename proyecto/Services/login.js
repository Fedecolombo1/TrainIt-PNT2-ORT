const login = (accessToken) => {
    return new Promise((accept, reject) => {
        fetch(`http://${Hostname}:${PortNumber}/auth/v1/login/google/${authentication.accessToken}`)
          .then(res => res.json())
          .then(data => {
            accept(data)
          })
          .catch(err => {
            reject(err)
            console.log(err);
          })
    })
}