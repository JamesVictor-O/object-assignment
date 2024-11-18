let input = document.getElementById("todo-input");
let button = document.getElementById("btn");
let todoContainer = document.getElementById("todos");

let total = document.getElementById("total");
let completed = document.getElementById("compl");
let uncompleted = document.getElementById("uncompl");

let checked = document.getElementsByClassName("check");

let todoList = [];

let complete = todoList.filter((todo) => {
  return todo.isCompleted;
});

const updateTodo = (todoId) => {
  todoList[todoId].isCompleted = true;
  // console.log(todoList)
};

const addTodo = () => {
  if (input.value == "") {
    return alert("value is empty");
  }

  todoContainer.innerHTML = "";

  let todoObj = { task: input.value, isCompleted: false };

  todoList.push(todoObj);

  // todoContainer.innerHTML += `<div class='flex items-center gap-x-2'> <input type='checkbox' /> <p>${input.value}</p> </div>`

  todoList.forEach((todo, index) => {
    todoContainer.innerHTML += `<div class='flex items-center gap-x-2'> <input class='check' type='checkbox' /> <p>${todo.task}</p> ${index} </div>`;
  });

  total.innerHTML = todoList.length;

  completed.innerHTML = complete.length;

  uncompleted.innerHTML = todoList.length - complete.length;

  console.log(todoList);
  input.value = "";
};

// button.addEventListener("click", addTodo);
// checked.forEach((box) => {
//   box.addEventListener("click", updateTodo);
// });


// let array = ["apple", "orange", "banana", "sugarcane", "apple", "orange", "apple", "banana"];

let objArr=[{nub:1},{nub:3},{nub:13}]
let reducerArray = objArr.reduce((acc, cur) => {
  return acc +  cur.nub;
},0)

let ret=objArr.filter(item => {
  return item.nub > 2
})
console.log(reducerArray)