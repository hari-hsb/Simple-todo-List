var inputText=document.querySelector("#todo-input");

var addBtn=document.querySelector("#todo-add");
var mainSec=document.getElementById("todo-main");

inputText.addEventListener("keypress",function(e){
if(inputText.value.length>=1)
{
  if(e.key==="Enter")
  {
    var todo=createTodo(inputText.value);
    todo.style.opacity=0;
    setTimeout(function(){
      todo.style.opacity=1;
    },400);
    if(mainSec.querySelector(".todo")==null)
    {

      document.querySelector(".no-todo").remove();
      var ul=createUl("todo-list");
      ul.append(todo);
      mainSec.append(ul);
    }
    else{
      var ul=mainSec.querySelector(".todo-list");
      ul.append(todo);

    }
      inputText.value="";

  }
}

})
addBtn.addEventListener("click",function(){
  if(inputText.value.length>=1)
  {
    var todo=createTodo(inputText.value);
    todo.style.opacity=0;
    setTimeout(function(){
      todo.style.opacity=1;
    },0);
    if(mainSec.querySelector(".todo")==null)
    {
      document.querySelector(".no-todo").remove();
      var ul=createUl("todo-list");
      ul.append(todo);
      mainSec.append(ul);
    }
    else{
      var ul=mainSec.querySelector(".todo-list");
      ul.append(todo);

    }
      inputText.value="";
    }
})







function createElement(type,className)
{
    var element=document.createElement(type);
    if(className)
    {
      element.classList.add(className);
    }
    return element;
}
function createParagraph(text,className)
{
  var p=createElement("p",className);
  p.innerText=text;
  return p;
}
function createUl(className)
{
  var ul=createElement("ul",className);
  return ul;
}
function createDiv(className)
{
  var div=createElement("div",className);
  return div;
}
function createBtn(text,className)
{
  var bttn=createElement("button",className);
  bttn.innerText=text;

  return bttn;
}
function createTodo(text)
{
  var li=createElement("li","todo");
  var p=createParagraph(text);
  li.append(p);
  var btndiv=createDiv("btns");
  var upbtn=createBtn("up","up");
  upbtn.classList.add("btn");
  var downbtn=createBtn("down","down");
    downbtn.classList.add("btn");
  var removebtn=createBtn("remove","remove");
  removebtn.classList.add("btn");

  btndiv.append(upbtn);
  btndiv.append(downbtn);
  btndiv.append(removebtn);
  li.append(btndiv);
  return li;
}

mainSec.addEventListener("click",function(e)
{
  var ele=e.target;
  if(e.target.nodeName="BUTTON")
  {
    var f=e.target.innerText;
    var li=ele.parentElement.parentElement;
    var ul=li.parentElement;
    switch(f){
      case "up":


        var prev=li.previousElementSibling;
        if(prev!==null)
        {
          ul.insertBefore(li,prev);


        }
      break;
      case "down":
          var next=li.nextElementSibling.nextElementSibling;
          ul.insertBefore(li,next);
      break;
      case "remove":
          li.remove();
          if(!mainSec.querySelector(".todo"))
          {
            ul.remove();
          var p=  createParagraph("NO todos","no-todo");
          mainSec.append(p);
          }

        break;
      }


  }
})
