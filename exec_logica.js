// 1) Implemente um método que crie um novo array baseado nos valores passados.
// Entradas do método (3,a), Resultado do método: ['a', 'a', 'a']

function exec1(n1, l1) {
    const array1 = []
    for (i = 1; i <= n1; i++) {
        array1.push(l1);
    }
  
    console.log(array1)
    return array1;
  }
  
  

// 2) Implemente um método que inverta um array, não utilize métodos nativos do array.
// Entrada do método ([1,2,3,4]), Resultado do método: [4,3,2,1]

function exec2() {
    const n2 = [1,2,3,4];
    const array2 = [];
  
    for (i = n2.length - 1; i >= 0; i--) {
        array2.push(n2[i])
    }
  
    console.log(array2)
    return array2;
  }
  
  

// 3) Implemente um método que limpe os itens desnecessários de um array (false, undefined, strings vazias, zero, null).
// Entrada do método ([1,2,'', undefined]), Resultado do método: [1,2]

function exec3() {
    const n3 = [1,2,'', undefined];
    const array3 = n3.filter(number => number >= 1);
  
    console.log(array3);
    return array3;
  }
  
  

// 4) Implemente um método que a partir de um array de arrays, converta em um objeto com chave e valor.
// Entrada do método ([["c",2],["d",4]]), Resultado do método: {c:2, d:4}

function exec4() {
    const arrays4 = [["c",2],["d",4]];
  
    const array4 = Object.fromEntries(arrays4);
  
    console.log(array4)
    return array4
  }
  
  

// 5) Implemente um método que retorne um array, sem os itens passados por parâmetro depois do array de entrada. 
// Entrada do método ([5,4,3,2,5], 5,3), Resultado do método: [4,2]

function exec5(array5, n1, n2) {
    const Array5 = array5.filter(newarray => newarray !== n1 && newarray !== n2)
  
    console.log(Array5)
    return Array5;
  }
  
  

// 6) Implemente um método que retorne um array, sem valores duplicados.
// Entrada do método ([1,2,3,3,2,4,5,4,7,3]), Resultado do método: [1,2,3,4,5,7]

function exec6(array6) {
    const Array6 = [];
  
    for (unique of array6) {
      if (Array6.indexOf(unique) === -1) {
        Array6.push(unique);
      }
    }
    
    console.log(Array6);
    return Array6;
  }
  
  

// 7) Implemente um método que compare a igualdade de dois arrays e retorne um valor booleano.
// Entrada do método ([1,2,3,4],[1,2,3,4]), Resultado do método: true

function exec7(a1, a2) {
    const array7 = a1.length == a2.length && a1.every(function(value, index) {
      return value === a2[index];
    })
  
    console.log(array7);
    return array7;
  }
  
  

// 8) Implemente um método que remova os aninhamentos de um array de arrays para um array unico.
// Entrada do método ([1, 2, [3], [4, 5]]), Resultado do método: [1, 2, 3, 4, 5]

function exec8() {
    const a8 = [1, 2, [3], [4, 5]];
    const array8 = [];
  
    const Array8 = a8.map(number => array8.push(number));
  
    console.log(Array8);
    return Array8;
  }
  
  

// 9) Implemente um método divida um array por uma quantidade passada por parâmetro.
// Entrada do método ([1, 2, 3, 4, 5], 2), Resultado do método: [[1, 2], [3, 4], [5]]

function exec9(a9, n9) {
    const Array9 = new Array(Math.ceil(a9.length / n9)).fill().map(
      _ => a9.splice(0, n9)
    )
  
    console.log(Array9)
    return Array9;
  
  }
  
  

// 10) Implemente um método que encontre os valores comuns entre dois arrays.
// Entrada do método ([6, 8], [8, 9]), Resultado do método: [8]

function exec10(a1, a2) {
    const Array10 = a1.filter(number => a2.includes(number));
  
    console.log(Array10)
    return Array10;
  }

  //CHAMADA DE SOLUÇÕES
  exec1(3, 'a')
  exec2()
  exec3()
  exec4()
  exec5([5,4,3,2,5], 5,3)
  exec6([1,2,3,3,2,4,5,4,7,3])
  exec7([1,2,3,4],[1,2,3,4])
  exec8()
  exec9([1, 2, 3, 4, 5], 2)
  exec10([6, 8], [8, 9])