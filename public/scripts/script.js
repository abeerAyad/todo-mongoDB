

const lists = document.getElementById('lists');
const todoInput = document.getElementById('task-input');

const createElement = (tagName, className, parent) => {
  const element = document.createElement(tagName);
  element.className = className;
  parent.appendChild(element);
  return element;
};

const createTodo = (data) => {
    const todoList = createElement('li','todo-list', lists);
    todoList.textContent = data.content;
const editDeleteDiv = createElement('div','edit-delete',todoList)
    const editTodo = createElement('img', 'edit', editDeleteDiv);
    editTodo.src = '../img/edit.png';

    editTodo.addEventListener('click', (e) => {
    console.log(e.target.parentElement.parentElement);
    const parentEdit = e.target.parentElement.parentElement;
    todoInput.value = parentEdit.textContent
        const content = todoInput.value;
        customFetch(`/todo/update/${data._id}`,'PUT',{ content })
        .then((result) => { 
            createTodo(result)
            parentEdit.remove();
        });
    })
    const deleteTodo = createElement('lord-icon','delete',editDeleteDiv);
    deleteTodo.src = 'https://cdn.lordicon.com/kfzfxczd.json';
    deleteTodo.setAttribute('trigger', 'hover');
    deleteTodo.addEventListener('click', () => {
        customFetch(`/todo/delete/${data._id}`,'DELETE');
        todoList.remove()
    })
}

customFetch('/todo','GET').then((data) => {
        data.forEach(todo => createTodo(todo))
    }).catch((err) => console.log(err));



const submitData = document.getElementById('submit-btn');
submitData.addEventListener('click', () => {
const content = todoInput.value;
    customFetch('/todo','POST', { content });
});
