document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('form');
  form.addEventListener('submit',(e)=>{
    e.preventDefault();
    createToDo(e.target.newTaskDescription.value)
    form.reset();
  })
  
  // your code here
});
//function that creates element for user tasks
function createToDo(todo){
  const p = document.createElement('p');
  p.textContent = `${todo} `;
  const btn = document.createElement('button');
  btn.textContent = 'X';
  btn.addEventListener('click',(e)=>{
    handleDelete(e);
  })
  p.appendChild(btn);
  const ul = document.querySelector('#tasks');
  const li = document.createElement('li');
  ul.appendChild(li);
  li.appendChild(p);
}
// function delete task from list
function handleDelete(task){
  task.target.parentNode.parentNode.remove();
}
