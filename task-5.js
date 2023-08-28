// Напиши функцію checkForSpam(message), приймаючу 1 параметр message - рядок. Функція перевіряє її на вміст слів spam і sale. 
// Якщо знайшли заборонене слово, то функція повертає true, якщо заборонених слів немає функція повертає false. 
// Слова в рядку можуть бути в довільному регістрі.

const checkForSpam = function (message) { 
        if (message.includes("spam".toUpperCase()) || message.includes("sale")){
            console.log(true);
        } else {
            console.log(false);
        }
        return message;
    
};

console.log(checkForSpam('Latest technology news')); 

console.log(checkForSpam('JavaScript weekly newsletter'));

console.log(checkForSpam('Get best sale offers now!')); 

console.log(checkForSpam('[SPAM] How to earn fast money?')); 
