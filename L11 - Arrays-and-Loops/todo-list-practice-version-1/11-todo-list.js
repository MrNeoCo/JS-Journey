let todoArray = [];
function addTodo(){
  const inputElement = document.querySelector('.input-element');
  const name  = inputElement.value;
  todoArray.push(name);
  console.log(todoArray);
  inputElement.value = '';
}