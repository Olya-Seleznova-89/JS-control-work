// Напиши функцію logItems(array), яка отримує масив і використовує цикл for, який для кожного елемента масиву буде виводити в консоль повідомлення в форматі
// [номер елемента] - [значення елемента].
// Нумерація повинна починатися з 1. Наприклад, для першого елемента масиву ['Mango', 'Poly', 'Ajax'] з індексом 0 буде виведено 
// '1 - Mango', а для індексу 2 виведе '3 - Ajax'.

const logItems = function (array){
    for (let i = 0; i < array.length; i += 1) {
      const message = `${i+1} - ${array[i]}`;
      console.log(message);
      }  
}

console.log(logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong'])); ;
console.log(logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]));