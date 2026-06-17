function logIn(){
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    let verification = false

    fetch(`http://localhost:3000/employees`)
    .then((response) => {
      return response.json();
    })
    .then((e) => {
        for(let id = 0; id < e.length; id++){
            if(email == e[id].employee_email && password == e[id].employee_password){
                alert(`Bem vindo de volta ${e[id].employee_name}!`)
                window.location = `http://localhost:3000/main.html`
                verification = true
            }
        }
        if(verification == false){
            alert('Incorrect Email or Password.')
        }
    })
}