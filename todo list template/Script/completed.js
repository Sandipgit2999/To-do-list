var Addcompleted=JSON.parse(localStorage.getItem("completedtodo"))||[];
console.log(Addcompleted);

 //var Add2completed=JSON.parse(localStorage.getItem("completedtodos"))||[]
Addcompleted.map(function(elem,index){

    var tr=document.createElement("tr");

    var td1=document.createElement("td");
    td1.innerText=elem.ItemName;

    var td2=document.createElement("td");
    td2.innerText=elem.Itemqty;

    var td3=document.createElement("td");
    td3.innerText=elem.Itemprior;

    tr.append(td1,td2,td3);

    document.querySelector("#body").append(tr);
   // localStorage.setItem("Add2completed",JSON.stringify(Add2completed));
});

