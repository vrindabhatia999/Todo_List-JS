//selectors
const todoInput=document.querySelector(".todo-input");
const todoButton=document.querySelector(".todo-button");
const todoList=document.querySelector(".todo-list");

//Event listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click",deleteCheck);

//functions

function addTodo(event){
	event.preventDefault();





	//TodoDiv
	const todoDiv=document.createElement('div');
	todoDiv.classList.add('todo');

	//Create Li
	const newTodo=document.createElement('li');
	newTodo.innerText=todoInput.value;
	newTodo.classList.add('todo-item');
	todoDiv.appendChild(newTodo);


	//check mark button
	const completedButton=document.createElement("button");
	completedButton.innerHTML='<i class="fa fa-check"></i>';
	completedButton.classList.add("complete-btn");
	todoDiv.appendChild(completedButton);

	//check trash button

	const trashButton=document.createElement("button");
	trashButton.innerHTML='<i class="fa fa-trash" ></i>';
	trashButton.classList.add("trash-btn");
	todoDiv.appendChild(trashButton);


	//append tro list
	todoList.appendChild(todoDiv);


	//clear todoinput value
	todoInput.value='';








}


function deleteCheck(e){
	const item=e.target;
    //delte
	if(item.classList[0]==="trash-btn"){
		const todo=item.parentElement;
		//animation
		todo.classList.add("fall");
		todo.addEventListener("transitionend",function(){
			todo.remove();

		});
		 
	}


	//check
	if(item.classList[0]==="complete-btn"){
		const todo=item.parentElement;
		todo.classList.toggle("completed");
	}

}