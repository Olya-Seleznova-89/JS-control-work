// Напиши функцію formatString(string) яка приймає рядок і форматує його якщо необхідно.
// • Якщо довжина рядка не перевищує 40 символів, функція повертає її в початковому   вигляді.
// • Якщо довжина більше 40 символів, то функція обрізає рядок до 40-ка символів і додає в кінець рядка три крапки '...', після чого повертає  укорочену версію.


const formatString = function (string){
    //console.log(string.length);
    let totalLenghtString = 40;
    if(string.length > totalLenghtString){
        string = string.slice(0, 40) + "...";
    }
    return string;
}

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));

console.log(formatString('Curabitur ligula sapien.'));

console.log(formatString('Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',));
