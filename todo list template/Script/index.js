// document.querySelector("#form").addEventListener("submit", formfunction);

// var todo = JSON.parse(localStorage.getItem("todolist")) || [];
// function formfunction() {
//   event.preventDefault();
//   var name = document.querySelector("#name").value;
//   var qaty = document.querySelector("#qty").value;
//   var prior = document.querySelector("#priority").value;

//   var obj = {
//     ItemName: name,
//     Itemqty: qaty,
//     Itemprior: prior,
//   }; //console.log(obj);
//   todo.push(obj);
//   console.log(todo);
//   localStorage.setItem("todolist", JSON.stringify(todo));
// }
document.querySelector("#form").addEventListener("submit",formfunction);

var todo=JSON.parse (localStorage.getItem("todolist"))||[];

function formfunction(){
  event.preventDefault();
  var name=document.querySelector("#name").value;
  var qaty =document.querySelector("#qty").value;
  var prior=document.querySelector("#priority").value;


  var obj={
    ItemName:name,
    Itemqty:qaty,
    Itemprior:prior,

  };
  //console.log(obj);
  todo.push(obj);
  console.log(todo);
  localStorage.setItem("todolist",JSON.stringify(todo))

}