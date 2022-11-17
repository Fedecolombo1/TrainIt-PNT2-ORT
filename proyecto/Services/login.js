const login = (accessToken) => {
    return new Promise((accept, reject) => {
        fetch(`http://192.168.1.51:3000/auth/v1/login/google/${authentication.accessToken}`)
          .then(res => res.json())
          .then(data => {
            accept(data)
          })
          .catch(err => {
            console.log(err);
          })
    })
}