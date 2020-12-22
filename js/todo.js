var buttonAdd = document.querySelector("#add-todo");

buttonAdd.addEventListener("click", function(event) {
    //pegando o elemento da lista ul 

    let lista = document.querySelector("#todo-list");
    //pegando o valor digitado no input

    let todo = document.querySelector("#new-todo");
    //console.log(todo);
    //console.log(todo.value);

    //Criando uma li com nova todo
    var newLi = document.createElement("li");
    //console.log(newLi);

    //Adicionando o valor digitado  no input dentro da newLi
    newLi.textContent = todo.value;
    //console.log(newLi)

    /**Adicionando newLi dentro da ul */
    lista.appendChild(newLi);
})


