// Cambia solo el código debajo de esta línea
function countdown(m,n){
  if (n > m-1){
    const array = countdown(m,n - 1);
    array.unshift(n);
    return array;
  }else{
    return []
  }
}
// Cambia solo el código encima de esta línea
console.log(countdown(3,10))
// console.log(array)
