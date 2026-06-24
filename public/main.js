loggedIn()
loggedIn_verification()
employee_list()
const employee_list_ul = document.getElementById('employee_list_ul')


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