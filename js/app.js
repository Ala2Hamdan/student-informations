'use strict';
let form = document.getElementById('form');
let div = document.getElementById('table');

let tableEl =document.createElement('table');
div.appendChild(tableEl);
let count =1;
let arrtuition =[];
  let arrayOfObject=[];
function Form( name , email , number ,tuition){
    this.name = name ;
    this.email = email ;
    this.number = number;
    this.age =0;
    this.tuition=tuition;
    arrayOfObject.push(this);
    arrtuition.push(this.tuition);
}
Form.prototype.ageRandom = function(){
    this.age = Math.floor(Math.random() * (24 - 18 + 1) + 18);
}

button1.addEventListener('click',getInfo);

function getInfo(event){
    event.preventDefault();
    console.log(event);
    let  emailForm =email.value;
    let nameForm =emailForm.split("@"); 
    nameForm=nameForm[0];
    let  numberForm =mobailS.value;
    let tuitionForm =select.value;
    let newStudent = new Form(nameForm,emailForm,numberForm,tuitionForm);
    saveData();
    newStudent.ageRandom();
   console.log(arrayOfObject);
   render();
   sumTuition();
  

}
 function headRow(){
     let row = document.createElement('tr');
     tableEl.appendChild(row);
     let  arrHead=['id','Name','Email','Age','Tuition'];
     for (let i=0; i< arrHead.length ;i++){
         let th = document.createElement('th');
         row.appendChild(th);
         th.textContent= arrHead[i];
     }
 }
 

 function render(){
     tableEl.textContent='';
     headRow();
    for (let j=0; j < arrayOfObject.length ; j++){

        let row1 = document.createElement('tr');
        

        let td = document.createElement('td');
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');
        let td4 = document.createElement('td');
        let td5 = document.createElement('td');


        row1.appendChild(td);
        row1.appendChild(td1);
        row1.appendChild(td2);
        row1.appendChild(td3);
        row1.appendChild(td4);
        row1.appendChild(td5);

        td.textContent = `${count}`;
        td1.textContent= `${arrayOfObject[j].name}`;
        td2.textContent=arrayOfObject[j].email;
        td3.textContent=arrayOfObject[j].age;
        td4.textContent=arrayOfObject[j].number;
        td5.textContent=arrayOfObject[j].tuition;

        tableEl.appendChild(row1);
    }
    
 }
 
 function saveData(){
     localStorage.setItem('data',JSON.stringify(arrayOfObject));

 }
 function getData(){
     let arr = localStorage.getItem('data');
     let arrObject = JSON.parse(arr);
     if (arrObject){
         arrayOfObject = arrObject;
         console.log(arrayOfObject);
     }
     render();

 }
 getData();
 function sumTuition(){
    
 let p =document.createElement('p');
  div.appendChild(p);

  let sum =0 ;
  for (let a=0; a<arrtuition.length;a++){
    sum=sum +arrtuition[a];
  }

  p.textContent= `total = ${sum}`;
 
 }
 