loggedIn()
loggedIn_verification()
employee_list()
const employee_list_ul = document.getElementById('employee_list_ul')
const chatroom = document.getElementById('chatroom')
showMessages()

function employee_list(){
    fetch(`http://localhost:3000/employees`)
    .then((response) => {
      return response.json();
    })
    .then((e) => {
        for(let id = 0; id < e.length; id++){
            let li = document.createElement('li')
            li.classList.add('list-group-item')
            employee_list_ul.appendChild(li)

            let div = document.createElement('div')
            div.classList.add('rounded-circle')
            li.appendChild(div)

            let i = document.createElement('i')
            i.classList.add('bi', 'bi-person-fill', 'fs-3')
            div.appendChild(i)

            let h4 = document.createElement('h4')
            h4.textContent = e[id].employee_name
            li.appendChild(h4)
        }
    })
}
async function logOut(){
   await fetch(`http://localhost:3000/logged_in/1`, { method: "DELETE" })
   window.location.href = 'login.html'
}
async function loggedIn_verification(){
    await fetch(`http://localhost:3000/logged_in`)
    .then((response) => {
      return response.json();
    })
    .then((e) => {
        if(e.length == 0){
            window.location.href = 'login.html'
        }
    })
}
function loggedIn(){
     fetch(`http://localhost:3000/logged_in`)
    .then((response) => {
      return response.json();
    })
    .then((e) => {
        fetch(`http://localhost:3000/employees`)
        .then((response) => {
            return response.json();
        })
        .then((f) => {
            for(let id = 0; id < f.length; id++){
                if(e[0].employee_email == f[id].employee_email){
                    const name = document.getElementById('username')
                    name.textContent = f[id].employee_name
                    console.log('olá!')
                }
            }
        })
    })
}

function sendMessage(){
    const message = document.getElementById('message').value

    Promise.all([
        fetch(`http://localhost:3000/logged_in`),
        fetch(`http://localhost:3000/employees`),
        fetch(`http://localhost:3000/messages`)
    ])
    .then(([resA, resB, resC]) =>{
        return Promise.all([resA.json(), resB.json(), resC.json()]);
    })
     .then(([a, b, c]) =>{
        const sender_email = a[0].employee_email
        let sender_name
        for(let id = 0; id < b.length; id++){
            if(a[0].employee_email == b[id].employee_email){
                sender_name = b[id].employee_name
            }
        }
         fetch("/messages", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({sender_name, sender_email, message}),
        })
    })
}
function showMessages(){
    fetch(`http://localhost:3000/messages`)
    .then((response) => {
      return response.json();
    })
    .then((c) => {

            for(let id = c.length - 1; id >= 0; id--){
                console.log(id)
                let div = document.createElement('div')
                div.classList.add('message', 'shadow', 'rounded-3', 'p-3')
                chatroom.appendChild(div)

                let div2 = document.createElement('div')
                div2.classList.add('profile')
                div.appendChild(div2)

                let div3 = document.createElement('div')
                div3.classList.add('pfp', 'rounded-circle')
                div2.appendChild(div3)

                let i = document.createElement('i')
                i.classList.add('bi', 'bi-person-fill', 'fs-3')
                div3.appendChild(i)

                let h4 = document.createElement('h4')
                h4.textContent = c[id].sender_name
                div2.appendChild(h4)

                let posted_time = document.createElement('p')
                posted_time.textContent = c[id].posted_in
                div2.appendChild(posted_time)

                let message = document.createElement('div')
                message.classList.add('message-content')
                div.appendChild(message)

                let p = document.createElement('p')
                p.textContent = c[id].message
                message.appendChild(p)
            }
        })
        }