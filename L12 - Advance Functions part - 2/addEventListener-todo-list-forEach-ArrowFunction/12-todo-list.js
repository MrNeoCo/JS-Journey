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
//-------------Implimenting Arrow Functions-------------------- 
    // todoArray.forEach(function(todoObject, index){
    todoArray.forEach((todoObject, index) => {
      const {name,dueDate} = todoObject;

      todoListHTML += `
        <div>${name}</div>
        <div>${dueDate}</div>
        <button class="delete-todo-button js-delete-todo-button">Delete</button>
        `;
    });
    
      let showTodo = document.querySelector('.js-todo-list');
        showTodo.innerHTML = todoListHTML // before this point HTML is STRING | from here we can add even listener

        document.querySelectorAll('.js-delete-todo-button')
          .forEach((deleteButton, index)=>{
            deleteButton.addEventListener('click', ()=>{
              todoArray.splice(index, 1);
              renderTodoList();
            })
          });
      
  }

// ------------implementation of addEventListeners---------------------
  const addTodoButton = document.querySelector('.js-add-todo-button');
  const deleteTodoButton = document.querySelector('.js-delete-todo-button');

  addTodoButton.addEventListener('click', ()=>{
    addTodo();
  });

  deleteTodoButton.addEventListener('click', ()=>{

  });
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