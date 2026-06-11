//Elemento da lista
class ElementoLista<T> {
  //guarda o valor do proximo elemento da lista
  next?: ElementoLista<T>;

  //Elemento que recebe um
  constructor(public element: T) {}
}

//cria a linkedList
class LinkedLista<T> {
  //primeiro elemento da lista
  private head?: ElementoLista<T>;
  //ultimo elemento
  private tail?: ElementoLista<T>;
  //tamanho da lista
  private tamanhoLista = 0;

  //adciona um elemento no final da lista
  adicionarElemento(valor: T) {
    //um elemento do tipo ElementoLista
    const elemento = new ElementoLista(valor);

    //Se nao tiver nada na lista
    if (!this.head || !this.tail) {
      //o primeiro elemento da lista pega o valor do elemento mandado
      this.head = elemento;
      //o ultimo elemento da lista pega o valor do elemento mandado
      this.tail = elemento;
    } else {
      //senao so o ultimo toma valor do element
      this.tail.next = elemento;
      this.tail = elemento;
    }
    //aumenta o tamanho da lista
    this.tamanhoLista++;
  }

  //mostrar elementos da lista
  mostrarLista() {
    //elemento atual da lista, comeca com o primeiro elemento
    let current = this.head;
    //enquanto tiver elemento
    while (current) {
      //loga elemento
      console.log(current.element);
      //proximo elemento
      current = current.next;
    }
  }
  //tamanho da lista
  tamanhoDaLista() {
    return this.tamanhoLista;
  }
}

const listaDeNumero = new LinkedLista<number>();

listaDeNumero.adicionarElemento(10);
listaDeNumero.adicionarElemento(7);
listaDeNumero.adicionarElemento(530);
listaDeNumero.adicionarElemento(230);

listaDeNumero.mostrarLista();
