  let todoArray = [
    {
    name: 'walk up early',
    dueDate: '2026-02-20'
     }, {
    name: 'sleep early',
    dueDate: '2026-02-20'
    }];

    renderTodoList();

  function renderTodoList(){
    let todoListHTML = '';

    todoArray.forEach(function(todoObject, index){
      const {name,dueDate} = todoObject;

      todoListHTML += `
        <div>${name}</div>
        <div>${dueDate}</div>
        <button 
          onclick="
          todoArray.splice(${index}, 1);
          renderTodoList();
        " class="delete-todo-button">Delete</button>
        `;
    });
    
      let showTodo = document.querySelector('.js-todo-list');
        showTodo.innerHTML = todoListHTML
      // console.log(todoListHTML);
  }

  function addTodo(){
    const inputElement = document.querySelector('.input-element');
    const dueDateElement = document.querySelector('.js-due-data-element');
    const errorElement = document.querySelector('.js-error-element');

    const name  = inputElement.value;
    const dueDate = dueDateElement.value;

    if(name === ''){
      errorElement.innerHTML = ` must name your todo*`;
      return;
    }else{
      errorElement.innerHTML = '';
    }

    todoArray.push({
      // name: name,
      // dueDate: dueDate
      name,
      dueDate
    });
    // console.log(todoArray);
    inputElement.value = '';
    renderTodoList();
  }