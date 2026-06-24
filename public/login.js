loggedIn_verification()
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
                let id2 = 1
                fetch("/logged_in", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({id2, email}),
                });
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
 function loggedIn_verification(){
     fetch(`http://localhost:3000/logged_in`)
    .then((response) => {
      return response.json();
    })
    .then((e) => {
        if(e.length > 0){
            window.location.href = 'main.html'
        }
    })
}

