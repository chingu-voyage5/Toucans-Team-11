let list = [];

const addToList = () => {
  let taskValue = document.getElementById('task-input');
  let todoList = document.getElementById('todo-list');
  let listItem = document.createElement('li');

  //Adding new task text to created item
  listItem.innerText = taskValue.value;

  //Add remove functionality to each Item
  listItem.onclick = removeFromList.bind(this, list.length);

  //Adding Item to todo
  todoList.appendChild(listItem);
  list.push(taskValue.value);

  //Resetting the innerText
  taskValue.value = '';
}

const removeFromList = (index) => {
  let todoList = document.getElementById('todo-list');
  console.log(index);
  list.splice(index, 1);
  //clear the DOM list, array of list items will still be there
  todoList.innerHTML = '';

  reconstructList();
}

const reconstructList = () => {
  let todoList = document.getElementById('todo-list');

  list.map((task, index) => {
    let listItem = document.createElement('li');

    //Adding new task text to created item
    listItem.innerText = task;

    //Add remove functionality to each Item
    listItem.onclick = removeFromList.bind(this, index);

    //Adding Item to todo
    todoList.appendChild(listItem);

  })

}
