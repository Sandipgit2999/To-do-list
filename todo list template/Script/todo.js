// var todoitem=JSON.parse(localStorage.getItem("todolist"));
// var completed = JSON.parse(localStorage.getItem("completedtodo")) || []

// todoitem.map(function(elem,index){

//     var tr=document.createElement('tr');

//     var td1=document.createElement('td');
//     td1.innerText=elem.ItemName;

//     var td2=document.createElement('td');
//     td2.innerText=elem.Itemqty;

//     var td3=document.createElement('td');
//     td3.innerText=elem.Itemprior;

//    var td4=document.createElement('td');
//    td4.textContent='Completed';
//    td4.style.color='Red';
//    td4.addEventListener('click',function(){
//        markCompleteFunction(elem.index)
//    })
//    tr.append(td1,td2,td3,td4);

//    document.querySelector('#body').append(tr);
// });

// function markCompleteFunction(elem,index) {
//     //console.log(elem);
//     completed.push(elem);
//     //console.log(completed);
//         localStorage.setItem("completedTodo", JSON.stringify(completed));
//         //splice
//   }
  


var todoitem=JSON.parse(localStorage.getItem("todolist"));
//console.log(todoitem);
var completed=JSON.parse(localStorage.getItem("completedtodo"))||[];

todoitem.map(function(elem,index){
        var tr=document.createElement("tr");

        var td1=document.createElement("td");
        td1.innerText=elem.ItemName;

        var td2=document.createElement("td");
        td2.innerText=elem.Itemqty;

        var td3=document.createElement("td");
        td3.innerText=elem.Itemprior;

        var td4=document.createElement("td");
        td4.innerText="Completed";
        td4.style.color="Green";
        td4.addEventListener("click",function(){
              markCompleteFunction(elem,index)
        })

        tr.append(td1,td2,td3,td4);

        document.querySelector("#body").append(tr);


});

function markCompleteFunction(elem,index){
   //console.log(elem);
   
   completed.push(elem);
   //console.log(completed);
   localStorage.setItem("completedtodo",JSON.stringify(completed));
   //var Addcompleted=JSON.parse(localStorage.getItem("completedtodos"));
}

