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