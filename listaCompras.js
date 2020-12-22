var lista = document.querySelector("#list");
//console.log(lista);

function addItem() {
    /**pegando os valores digitados dos inputes */

    var item = document.querySelector("#new-item").value;
    var valor = document.querySelector("#value-item").value;
    console.log(item);

    /** Criando um Elemento tr */
    var tr = document.createElement("tr");
    console.log(tr);

    /**Criando td Item */
    var tdItem = document.createElement("td");
    //console.log(tdItem);
    //console.log(tdValue);
    var tdValue = document.createElement("td");
    /**Adicionando id na td */
    tdValue.id = "valor";
    //console.log(tdValue);

    /**Adicionando tdtexto na td Item */
    tdItem.textContent = item;
    //console.log(tdItem);

    /** Adicionando texto na td Valor */
    tdValue.textContent = valor;
    console.log(tdValue);

    /**Adicionando tdItem na tr */
    tr.appendChild(tdItem);

    /**Adicionando  tdValue na tr */
    tr.appendChild(tdValue);
    //console.log(tr);

    //**Adicionando tr dentro da lista */
    lista.appendChild(tr);

    /**Adicionando função soma de */

    somaLista(); 

}

function somaLista() {
    /**pegando tds com valores dos itens */
    let tdValue = document.querySelectorAll("#valor");
    console.log(tdValue);

    var values = [];
    var valorTotal = 0;

    /**Estrutara condicional para verificar e setar valor na array */
    for (let index = 0; index < tdValue.length; index++) {
        //**setando texto da td dentro do array values usando como referencia o index */

        values[index] = parseFloat(tdValue[index].textContent);
        /**somando o valor da variavel valorTotal com o valor da td */

        valorTotal += parseFloat(values[index]);

    }
    /**pegando td de valor total */
    var tdValorTotal = document.querySelector("#soma");

    /**Adicionando soma de valores na td */
    tdValorTotal.textContent = valorTotal;

}
