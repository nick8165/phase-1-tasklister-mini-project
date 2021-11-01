document.addEventListener("DOMContentLoaded", () => {
  const newTask = document.getElementById('new-task-description')
  let i = 0
  document.querySelector('form').addEventListener('submit', (e) => {
    
    e.preventDefault()
    let li = document.createElement('li')
    tasks.append(li)
    li.append(newTask.value)
    
    let bttn = document.createElement('button')
    bttn.className=`del`
    let txt = document.createTextNode(' X ')
    bttn.appendChild(txt)
    li.appendChild(bttn)

    const deleteButtons = document.querySelectorAll('.del'); 

    deleteButtons.forEach( button => {
      button.addEventListener('click', removeMe); 
      });
    })
  });

const tasks = document.getElementById('tasks');

function removeMe() {
  this.closest('li').remove();
};