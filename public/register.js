async function register(){
    const email = document.getElementById('email').value
    const name = document.getElementById('name').value
    const password = document.getElementById('password').value
    let email_match = false
    
     await fetch(`http://localhost:3000/employees`)
    .then((response) => {
      return response.json();
    })
    .then((e) => {
        for(let id = 0; id < e.length; id++){
            if(email == e[id].employee_email){
                email_match = true
            }
            console.log(email_match)
        }
    })
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    console.log('Olá!')
    if (!emailRegex.test(email)) {
    alert('Email not valid.');
    }
    else if(email_match == true){
        alert('Email already in use.')
    }
    else if(name == ""){
        alert('Name can not be null.')
    }
    else if(name.length > 50){
        alert('Name limit exceeded (50 characters).')
    }
    else if(password == ''){
        alert('Password can not be null.')
    }
    else if(password.length > 12){
        alert('Password limit exceeded (12 characters).')
    }
    else{
        fetch("/employees", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({email, name, password}),
            });
    }
}