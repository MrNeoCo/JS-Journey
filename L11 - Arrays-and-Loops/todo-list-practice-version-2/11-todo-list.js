  let todoArray = [];

  function renderTodoList(){
    let todoListHTML = '';

    for(let i=0; i<todoArray.length; i++){
      
      let todo = todoArray[i];
        todoListHTML += `<p>${todo}</p>`;
      }
      let showTodo = document.querySelector('.js-todo-list');
        showTodo.innerHTML = todoListHTML
      console.log(todoListHTML);
  }
  function addTodo(){
    const inputElement = document.querySelector('.input-element');
    const name  = inputElement.value;
    todoArray.push(name);
    console.log(todoArray);
    inputElement.value = '';
    renderTodoList();
  }