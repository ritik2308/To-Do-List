/* select all the necessary elements */
var input = document.querySelector('.todo_input');
var MainTodoContainer = document.getElementById('todos')
var addingButton = document.querySelector('.add-item');
var deleteAllBtn = document.querySelector('.deleteBtn');
var completedButton = document.querySelector('.completed');
var removeButton = document.querySelector('.trash');

addingButton.addEventListener('click', function(e){
    /* stoping button behaviour */
    // e.preventDefault();
    /*create all the elements*/
    /*trim function will trim the spacing between */
    if(input.value.trim()){
        /*create new ul tag*/
        var ulTag = document.createElement('ul');
        ulTag.classList.add('todo-list-container');
        // console.log(ulTag);
        /*todo list div*/
        var todoList=document.createElement('div');
        todoList.classList.add('todo-list');
        /*LI tag*/
        var liTag=document.createElement('li');
        liTag.innerHTML = input.value;
        liTag.classList.add('todo-item')
        /*Button tag*/
        var buttonDiv=document.createElement('div');
        buttonDiv.classList.add('button');
        /*completed button element1*/
        var completeButton=document.createElement('button');
        completeButton.classList.add('completed');
        completeButton.innerHTML = '<i class="fas fa-check"></i>';
        /* edit button*/
        var editBtn=document.createElement('button');
        editBtn.classList.add('editBtn');
        editBtn.innerHTML = '<i class="fas fa-edit"></i>';
        editBtn.onclick = function(){
            editWorking(liTag);
        }
        /*trash button*/
        var trashButton=document.createElement('button');
        trashButton.classList.add('trash');
        trashButton.innerHTML = '<i class="fas fa-trash"></i>';


        /*appending elements into each other*/
        ulTag.append(todoList);
        todoList.append(liTag);
        todoList.append(buttonDiv);
        buttonDiv.append(completeButton);
        buttonDiv.append(editBtn);
        buttonDiv.append(trashButton);

        /*append all the lements in main div*/
        MainTodoContainer.appendChild(ulTag);
        /*when we click add button clear all the input*/
        input.value=' ';
        todoList.addEventListener('click', function(e){
            var items = e.target;
            if(items.classList[0] === 'completed'){
                var todo = items.parentElement;
                var todo2 = todo.parentElement;
                todo2.classList.add('line_through')
            }
            else if(items.classList[0] === 'trash'){
                var todo = items.parentElement;
                var todo2 = todo.parentElement;
                todo2.classList.add('fall');
                todo2.addEventListener('transitionend', function(){
                    var todo3 = todo2.parentElement;
                    todo3.remove();
                });
            }
        });
    }else if(input.value === ''){
        alert('please fill the input field')
    }
   
});  
function editWorking(e){
    var editValue = prompt('edit the select item', e.firstChild.nodeValue);
    e.firstChild.nodeValue = editValue;
}
function deleteAllElements(){
    var gettingUlTag = document.querySelectorAll('.todo-list-container');
    for(var i = 0; i < gettingUlTag.length; i++){
        gettingUlTag[i].remove();
    }
    input.value = '';
}